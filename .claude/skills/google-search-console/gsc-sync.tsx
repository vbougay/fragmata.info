#!/usr/bin/env npx tsx

import { program } from "commander";
import { google } from "googleapis";
import Database from "better-sqlite3";
import { format, subDays, parseISO } from "date-fns";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

// ESM equivalent of __dirname (this project is "type": "module")
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Constants
// fragmata.info is verified as a DOMAIN property in Search Console.
// If it were a URL-prefix property instead, use: "https://fragmata.info/"
const SITE_URL = "sc-domain:fragmata.info";
// DB and credentials live next to this script so the skill is fully self-contained.
const DB_PATH = path.join(__dirname, "gsc-data.sqlite");
const CREDENTIALS_PATH = path.join(__dirname, "gsc-credentials.json");
const ROW_LIMIT = 25000;

// Initialize database
function initDatabase(): Database.Database {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const db = new Database(DB_PATH);

  // Create tables
  db.exec(`
    CREATE TABLE IF NOT EXISTS sync_log (
      id INTEGER PRIMARY KEY,
      site_url TEXT NOT NULL,
      start_date TEXT NOT NULL,
      end_date TEXT NOT NULL,
      synced_at TEXT NOT NULL,
      row_count INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS performance_data (
      id INTEGER PRIMARY KEY,
      date TEXT NOT NULL,
      query TEXT,
      page TEXT NOT NULL,
      country TEXT NOT NULL,
      device TEXT NOT NULL,
      search_appearance TEXT,
      clicks INTEGER NOT NULL,
      impressions INTEGER NOT NULL,
      ctr REAL NOT NULL,
      position REAL NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_date ON performance_data(date);
    CREATE INDEX IF NOT EXISTS idx_query ON performance_data(query);
    CREATE INDEX IF NOT EXISTS idx_page ON performance_data(page);
    CREATE UNIQUE INDEX IF NOT EXISTS idx_unique_row ON performance_data(
      date, COALESCE(query, ''), page, country, device, COALESCE(search_appearance, '')
    );

    CREATE TABLE IF NOT EXISTS query_data (
      id INTEGER PRIMARY KEY,
      date TEXT NOT NULL,
      query TEXT NOT NULL,
      clicks INTEGER NOT NULL,
      impressions INTEGER NOT NULL,
      ctr REAL NOT NULL,
      position REAL NOT NULL
    );
    CREATE UNIQUE INDEX IF NOT EXISTS idx_query_data_unique ON query_data(date, query);
    CREATE INDEX IF NOT EXISTS idx_query_data_date ON query_data(date);
  `);

  return db;
}

// Initialize GSC API client
async function getSearchConsoleClient() {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    throw new Error(
      `Credentials file not found at ${CREDENTIALS_PATH}\n` +
        "Create a Google Cloud service account with the Search Console API enabled,\n" +
        "download its JSON key to scripts/gsc-credentials.json, and add the service\n" +
        "account email as a user on the fragmata.info property in Search Console."
    );
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });

  return google.searchconsole({ version: "v1", auth });
}

// Fetch data from GSC API with pagination
async function fetchGSCData(
  client: ReturnType<typeof google.searchconsole>,
  startDate: string,
  endDate: string,
  dimensions: string[],
  onProgress?: (fetched: number) => void
): Promise<any[]> {
  const allRows: any[] = [];
  let startRow = 0;

  while (true) {
    const response = await client.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate,
        endDate,
        dimensions,
        rowLimit: ROW_LIMIT,
        startRow,
        type: "web",
      },
    });

    const rows = response.data.rows || [];
    if (rows.length === 0) break;

    allRows.push(...rows);
    startRow += rows.length;

    if (onProgress) {
      onProgress(allRows.length);
    }

    // If we got fewer rows than the limit, we've reached the end
    if (rows.length < ROW_LIMIT) break;
  }

  return allRows;
}

// Sync command
async function syncCommand(options: { start?: string; end?: string; days?: string }) {
  const db = initDatabase();

  let startDate: string;
  let endDate: string;

  if (options.days) {
    const days = parseInt(options.days, 10);
    endDate = format(subDays(new Date(), 1), "yyyy-MM-dd"); // Yesterday (GSC data has ~2 day delay)
    startDate = format(subDays(new Date(), days), "yyyy-MM-dd");
  } else if (options.start && options.end) {
    startDate = options.start;
    endDate = options.end;
  } else {
    // Default: last 30 days
    endDate = format(subDays(new Date(), 1), "yyyy-MM-dd");
    startDate = format(subDays(new Date(), 30), "yyyy-MM-dd");
  }

  console.log(`Syncing GSC data from ${startDate} to ${endDate}...`);

  try {
    const client = await getSearchConsoleClient();

    console.log("Fetching data from GSC API...");
    // Note: searchAppearance cannot be combined with other dimensions in GSC API
    const rows = await fetchGSCData(
      client,
      startDate,
      endDate,
      ["date", "query", "page", "country", "device"],
      (count) => {
        process.stdout.write(`\rFetched ${count} rows...`);
      }
    );
    console.log(`\nTotal rows fetched: ${rows.length}`);

    if (rows.length === 0) {
      console.log("No data found for the specified date range.");
      db.close();
      return;
    }

    // Upsert data
    const upsert = db.prepare(`
      INSERT INTO performance_data (date, query, page, country, device, search_appearance, clicks, impressions, ctr, position)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(date, COALESCE(query, ''), page, country, device, COALESCE(search_appearance, ''))
      DO UPDATE SET
        clicks = excluded.clicks,
        impressions = excluded.impressions,
        ctr = excluded.ctr,
        position = excluded.position
    `);

    const insertMany = db.transaction((rows: any[]) => {
      for (const row of rows) {
        const [date, query, page, country, device] = row.keys;
        upsert.run(
          date,
          query || null,
          page,
          country,
          device,
          null, // search_appearance not fetched (API limitation)
          row.clicks,
          row.impressions,
          row.ctr,
          row.position
        );
      }
    });

    console.log("Inserting page-level data into database...");
    insertMany(rows);
    console.log(`Inserted ${rows.length} page-level rows.`);

    // Fetch query-level data (accurate impressions without page dimension inflation)
    console.log("\nFetching query-level data...");
    const queryRows = await fetchGSCData(
      client,
      startDate,
      endDate,
      ["date", "query"],
      (count) => {
        process.stdout.write(`\rFetched ${count} query rows...`);
      }
    );
    console.log(`\nTotal query rows fetched: ${queryRows.length}`);

    // Upsert query data
    const upsertQuery = db.prepare(`
      INSERT INTO query_data (date, query, clicks, impressions, ctr, position)
      VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(date, query) DO UPDATE SET
        clicks = excluded.clicks,
        impressions = excluded.impressions,
        ctr = excluded.ctr,
        position = excluded.position
    `);

    const insertQueryMany = db.transaction((rows: any[]) => {
      for (const row of rows) {
        const [date, query] = row.keys;
        upsertQuery.run(
          date,
          query,
          row.clicks,
          row.impressions,
          row.ctr,
          row.position
        );
      }
    });

    console.log("Inserting query-level data into database...");
    insertQueryMany(queryRows);
    console.log(`Inserted ${queryRows.length} query-level rows.`);

    // Log sync
    db.prepare(`
      INSERT INTO sync_log (site_url, start_date, end_date, synced_at, row_count)
      VALUES (?, ?, ?, ?, ?)
    `).run(SITE_URL, startDate, endDate, new Date().toISOString(), rows.length + queryRows.length);

    console.log(`\nSync complete: ${rows.length} page rows + ${queryRows.length} query rows.`);
    db.close();
  } catch (error: any) {
    console.error("Error syncing data:", error.message);
    db.close();
    process.exit(1);
  }
}

// Export command
async function exportCommand(options: { start: string; end: string; output: string }) {
  const db = initDatabase();

  const { start: startDate, end: endDate, output: outputDir } = options;

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`Exporting GSC data from ${startDate} to ${endDate} to ${outputDir}...`);

  // Helper to format CTR
  const formatCtr = (ctr: number) => `${(ctr * 100).toFixed(2)}%`;

  // Helper to write CSV
  const writeCsv = (filename: string, headers: string[], rows: any[]) => {
    const content = [
      headers.join(","),
      ...rows.map((row) =>
        headers.map((h) => {
          const val = row[h];
          if (typeof val === "string" && (val.includes(",") || val.includes('"'))) {
            return `"${val.replace(/"/g, '""')}"`;
          }
          return val;
        }).join(",")
      ),
    ].join("\n");
    fs.writeFileSync(path.join(outputDir, filename), content);
    console.log(`  Written ${filename} (${rows.length} rows)`);
  };

  // Queries.csv (uses query_data table for accurate impressions)
  const queries = db
    .prepare(
      `
    SELECT
      query AS "Top queries",
      SUM(clicks) AS Clicks,
      SUM(impressions) AS Impressions,
      SUM(clicks) * 1.0 / SUM(impressions) AS ctr_raw,
      SUM(position * impressions) / SUM(impressions) AS Position
    FROM query_data
    WHERE date BETWEEN ? AND ?
    GROUP BY query
    ORDER BY SUM(clicks) DESC, SUM(impressions) DESC
  `
    )
    .all(startDate, endDate)
    .map((row: any) => ({
      "Top queries": row["Top queries"],
      Clicks: row.Clicks,
      Impressions: row.Impressions,
      CTR: formatCtr(row.ctr_raw || 0),
      Position: row.Position?.toFixed(2) || "0",
    }));
  writeCsv("Queries.csv", ["Top queries", "Clicks", "Impressions", "CTR", "Position"], queries);

  // Pages.csv
  const pages = db
    .prepare(
      `
    SELECT
      page AS "Top pages",
      SUM(clicks) AS Clicks,
      SUM(impressions) AS Impressions,
      SUM(clicks) * 1.0 / SUM(impressions) AS ctr_raw,
      SUM(position * impressions) / SUM(impressions) AS Position
    FROM performance_data
    WHERE date BETWEEN ? AND ?
    GROUP BY page
    ORDER BY SUM(clicks) DESC, SUM(impressions) DESC
  `
    )
    .all(startDate, endDate)
    .map((row: any) => ({
      "Top pages": row["Top pages"],
      Clicks: row.Clicks,
      Impressions: row.Impressions,
      CTR: formatCtr(row.ctr_raw || 0),
      Position: row.Position?.toFixed(2) || "0",
    }));
  writeCsv("Pages.csv", ["Top pages", "Clicks", "Impressions", "CTR", "Position"], pages);

  // Countries.csv
  const countries = db
    .prepare(
      `
    SELECT
      country AS Country,
      SUM(clicks) AS Clicks,
      SUM(impressions) AS Impressions,
      SUM(clicks) * 1.0 / SUM(impressions) AS ctr_raw,
      SUM(position * impressions) / SUM(impressions) AS Position
    FROM performance_data
    WHERE date BETWEEN ? AND ?
    GROUP BY country
    ORDER BY SUM(clicks) DESC, SUM(impressions) DESC
  `
    )
    .all(startDate, endDate)
    .map((row: any) => ({
      Country: row.Country,
      Clicks: row.Clicks,
      Impressions: row.Impressions,
      CTR: formatCtr(row.ctr_raw || 0),
      Position: row.Position?.toFixed(2) || "0",
    }));
  writeCsv("Countries.csv", ["Country", "Clicks", "Impressions", "CTR", "Position"], countries);

  // Devices.csv
  const devices = db
    .prepare(
      `
    SELECT
      CASE device
        WHEN 'MOBILE' THEN 'Mobile'
        WHEN 'DESKTOP' THEN 'Desktop'
        WHEN 'TABLET' THEN 'Tablet'
        ELSE device
      END AS Device,
      SUM(clicks) AS Clicks,
      SUM(impressions) AS Impressions,
      SUM(clicks) * 1.0 / SUM(impressions) AS ctr_raw,
      SUM(position * impressions) / SUM(impressions) AS Position
    FROM performance_data
    WHERE date BETWEEN ? AND ?
    GROUP BY device
    ORDER BY SUM(clicks) DESC, SUM(impressions) DESC
  `
    )
    .all(startDate, endDate)
    .map((row: any) => ({
      Device: row.Device,
      Clicks: row.Clicks,
      Impressions: row.Impressions,
      CTR: formatCtr(row.ctr_raw || 0),
      Position: row.Position?.toFixed(2) || "0",
    }));
  writeCsv("Devices.csv", ["Device", "Clicks", "Impressions", "CTR", "Position"], devices);

  // Dates.csv
  const dates = db
    .prepare(
      `
    SELECT
      date AS Date,
      SUM(clicks) AS Clicks,
      SUM(impressions) AS Impressions,
      SUM(clicks) * 1.0 / SUM(impressions) AS ctr_raw,
      SUM(position * impressions) / SUM(impressions) AS Position
    FROM performance_data
    WHERE date BETWEEN ? AND ?
    GROUP BY date
    ORDER BY date DESC
  `
    )
    .all(startDate, endDate)
    .map((row: any) => ({
      Date: row.Date,
      Clicks: row.Clicks,
      Impressions: row.Impressions,
      CTR: formatCtr(row.ctr_raw || 0),
      Position: row.Position?.toFixed(2) || "0",
    }));
  writeCsv("Dates.csv", ["Date", "Clicks", "Impressions", "CTR", "Position"], dates);

  // Search appearance.csv - skipped (not available due to GSC API limitation)
  console.log("  Skipped Search appearance.csv (data not available)");

  // Filters.csv
  const startDateFormatted = format(parseISO(startDate), "MMM d, yyyy");
  const endDateFormatted = format(parseISO(endDate), "MMM d, yyyy");
  const filtersContent = `Filter,Value\nSearch type,Web\nDate,"${startDateFormatted}-${endDateFormatted}"`;
  fs.writeFileSync(path.join(outputDir, "Filters.csv"), filtersContent);
  console.log("  Written Filters.csv");

  console.log("Export complete!");
  db.close();
}

// Status command
function statusCommand() {
  const db = initDatabase();

  // Get date range coverage
  const dateRange = db
    .prepare(
      `
    SELECT
      MIN(date) as min_date,
      MAX(date) as max_date,
      COUNT(DISTINCT date) as date_count
    FROM performance_data
  `
    )
    .get() as any;

  // Get total rows
  const totalRows = db.prepare("SELECT COUNT(*) as count FROM performance_data").get() as any;
  const queryRows = db.prepare("SELECT COUNT(*) as count FROM query_data").get() as any;

  // Get last sync
  const lastSync = db
    .prepare(
      `
    SELECT * FROM sync_log ORDER BY synced_at DESC LIMIT 1
  `
    )
    .get() as any;

  // Get sync history
  const syncHistory = db
    .prepare(
      `
    SELECT * FROM sync_log ORDER BY synced_at DESC LIMIT 5
  `
    )
    .all() as any[];

  console.log("\n=== GSC Database Status ===\n");

  if (totalRows.count === 0) {
    console.log("Database is empty. Run 'sync' to fetch data from GSC.");
  } else {
    console.log(`Date range: ${dateRange.min_date} to ${dateRange.max_date}`);
    console.log(`Days covered: ${dateRange.date_count}`);
    console.log(`Page-level rows: ${totalRows.count.toLocaleString()}`);
    console.log(`Query-level rows: ${queryRows.count.toLocaleString()}`);

    if (lastSync) {
      console.log(`\nLast sync: ${lastSync.synced_at}`);
      console.log(`  Range: ${lastSync.start_date} to ${lastSync.end_date}`);
      console.log(`  Rows: ${lastSync.row_count.toLocaleString()}`);
    }

    if (syncHistory.length > 1) {
      console.log("\nRecent sync history:");
      for (const sync of syncHistory) {
        console.log(
          `  ${sync.synced_at}: ${sync.start_date} to ${sync.end_date} (${sync.row_count.toLocaleString()} rows)`
        );
      }
    }
  }

  console.log(`\nDatabase location: ${DB_PATH}`);
  db.close();
}

// CLI setup
program
  .name("gsc-sync")
  .description("Google Search Console data sync and export tool for fragmata.info")
  .version("1.0.0");

program
  .command("sync")
  .description("Fetch and store GSC data")
  .option("-s, --start <date>", "Start date (YYYY-MM-DD)")
  .option("-e, --end <date>", "End date (YYYY-MM-DD)")
  .option("-d, --days <number>", "Number of days to fetch (alternative to start/end)")
  .action(syncCommand);

program
  .command("export")
  .description("Export data to CSV files")
  .requiredOption("-s, --start <date>", "Start date (YYYY-MM-DD)")
  .requiredOption("-e, --end <date>", "End date (YYYY-MM-DD)")
  .requiredOption("-o, --output <dir>", "Output directory")
  .action(exportCommand);

program.command("status").description("Show sync status").action(statusCommand);

program.parse();

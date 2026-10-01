#!/usr/bin/env node
// Archive the WDD weekly "Δελτίο Νερού" workbook (ΔΕΛΤΙΟ_ΝΕΡΟΥ_DASHBOARD_*.xlsx).
//
// The WDD removes the old edition when it posts a new one and nothing else keeps them,
// so every edition seen in the site's upload index is saved once to data/water-bulletin/
// and logged in data/water-bulletin/index.tsv. Archiving only: nothing here parses the
// workbook. Files are named from the upload date and the original filename, never from
// cell contents (the workbook is a hand-edited template with stale labels inside).
//
// Usage (from the repo root):
//   node .claude/skills/fetch-and-update/archive-water-bulletin.mjs            # archive new editions
//   node .claude/skills/fetch-and-update/archive-water-bulletin.mjs --dry-run  # list, write nothing
//
// Exit code: 0 when the index was read (whether or not anything was new), 1 on failure.

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../../..");
const ARCHIVE_DIR = join(REPO_ROOT, "data", "water-bulletin");
const MANIFEST = join(ARCHIVE_DIR, "index.tsv");
const MANIFEST_COLUMNS = [
  "file", "original_filename", "uploaded", "uploaded_gmt", "modified_gmt",
  "media_id", "bytes", "sha256", "source_url", "archived_at",
];

// The index's own `search` parameter returns nothing for "DASHBOARD", so list the newest
// uploads and filter here. 100 uploads reach back about three months.
const MEDIA_INDEX =
  "https://www.gov.cy/moa-wdd/wp-json/wp/v2/media?per_page=100&orderby=date&order=desc" +
  "&_fields=id,date,date_gmt,modified_gmt,source_url";
// gov.cy answers 403 without a browser User-Agent. "Connection: close" keeps an idle
// keep-alive socket from holding the process open.
const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
  Connection: "close",
};
const DRY_RUN = process.argv.includes("--dry-run");

const GREEK_TO_LATIN = {
  α: "a", β: "v", γ: "g", δ: "d", ε: "e", ζ: "z", η: "i", θ: "th", ι: "i", κ: "k", λ: "l",
  μ: "m", ν: "n", ξ: "x", ο: "o", π: "p", ρ: "r", σ: "s", ς: "s", τ: "t", υ: "u", φ: "f",
  χ: "ch", ψ: "ps", ω: "o",
};

// "ΔΕΛΤΙΟ_ΝΕΡΟΥ_DASHBOARD_2026-14-ΣΕΠ-26.xlsx" -> "deltio_nerou_dashboard_2026-14-sep-26.xlsx"
function asciiName(filename) {
  return filename
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[α-ω]/g, (ch) => GREEK_TO_LATIN[ch] ?? "-")
    .replace(/[^a-z0-9._-]+/g, "-");
}

function originalFilename(sourceUrl) {
  const last = new URL(sourceUrl).pathname.split("/").pop();
  return decodeURIComponent(last).normalize("NFC");
}

async function get(url) {
  const res = await fetch(url, { headers: HEADERS, signal: AbortSignal.timeout(60_000) });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res;
}

function readManifest() {
  if (!existsSync(MANIFEST)) return [];
  const [header, ...lines] = readFileSync(MANIFEST, "utf8").split("\n").filter(Boolean);
  const columns = header.split("\t");
  return lines.map((line) => {
    const cells = line.split("\t");
    return Object.fromEntries(columns.map((c, i) => [c, cells[i] ?? ""]));
  });
}

function writeManifest(rows) {
  const sorted = [...rows].sort((a, b) => a.uploaded_gmt.localeCompare(b.uploaded_gmt));
  const lines = [MANIFEST_COLUMNS, ...sorted.map((r) => MANIFEST_COLUMNS.map((c) => r[c]))];
  writeFileSync(MANIFEST, lines.map((l) => l.join("\t")).join("\n") + "\n");
}

const sha256 = (buf) => createHash("sha256").update(buf).digest("hex");

async function main() {
  const media = await (await get(MEDIA_INDEX)).json();
  if (!Array.isArray(media)) throw new Error("Upload index did not return a list");

  const editions = media
    .filter((m) => /DASHBOARD/i.test(originalFilename(m.source_url)) && /\.xlsx?$/i.test(m.source_url))
    .sort((a, b) => a.date_gmt.localeCompare(b.date_gmt));
  console.log(`Upload index: ${media.length} newest files, ${editions.length} bulletin workbook(s) listed`);

  const rows = readManifest();
  const archivedIds = new Set(rows.map((r) => r.media_id));
  let added = 0;

  for (const m of editions) {
    const original = originalFilename(m.source_url);
    if (archivedIds.has(String(m.id))) {
      console.log(`  already archived: ${original} (uploaded ${m.date})`);
      continue;
    }
    if (DRY_RUN) {
      console.log(`  NEW (dry run, not saved): ${original} (uploaded ${m.date})`);
      continue;
    }

    const buf = Buffer.from(await (await get(m.source_url)).arrayBuffer());
    // An .xlsx is a zip, an .xls an OLE file; anything else is an error page, not a workbook.
    const magic = buf.subarray(0, 4).toString("hex");
    if (magic !== "504b0304" && magic !== "d0cf11e0") {
      throw new Error(`${original}: download is not a workbook (starts ${magic})`);
    }

    const hash = sha256(buf);
    let file = `${m.date.slice(0, 10)}_${asciiName(original)}`;
    let path = join(ARCHIVE_DIR, file);
    let note = "saved";
    if (existsSync(path)) {
      if (sha256(readFileSync(path)) === hash) {
        note = "already on disk, identical to the live file; logged";
      } else {
        // Same upload date and name but different bytes: keep both.
        file = file.replace(/(\.[a-z]+)$/, `_id${m.id}$1`);
        path = join(ARCHIVE_DIR, file);
      }
    }
    if (note === "saved") {
      mkdirSync(ARCHIVE_DIR, { recursive: true });
      writeFileSync(`${path}.part`, buf);
      renameSync(`${path}.part`, path);
    }

    rows.push({
      file,
      original_filename: original,
      uploaded: m.date,
      uploaded_gmt: m.date_gmt,
      modified_gmt: m.modified_gmt,
      media_id: String(m.id),
      bytes: String(buf.length),
      sha256: hash,
      source_url: new URL(m.source_url).href,
      archived_at: new Date().toISOString().slice(0, 19) + "Z",
    });
    writeManifest(rows);
    added += 1;
    console.log(`  NEW: ${original} (uploaded ${m.date}) -> data/water-bulletin/${file} (${note})`);
  }

  const newest = rows.map((r) => r.uploaded).sort().pop();
  console.log(
    `${added} new edition(s) archived; ${rows.length} in the archive` +
      (newest ? `, newest uploaded ${newest}` : ""),
  );
}

main().then(
  () => process.exit(0),
  (e) => {
    console.error(`archive-water-bulletin: ${e.message}`);
    process.exit(1);
  },
);

/**
 * Builds the historical storage record and its first-load digest.
 *
 * The record is two parts, merged by date:
 *   - data/history/archive.json: readings from 1988 to 1 March 2025 (bi-monthly,
 *     from the WDD's historical series), fixed
 *   - one row per dataset folder in data/snapshots/ (from 17 March 2025), derived:
 *     each reservoir's storage.current.amount, totalSCP = the Southern Conveyor
 *     dams, totalAll = all 21, totals rounded to 3 decimals
 * So a new bulletin needs no history edit: its folder is its row.
 *
 * Writes (gitignored):
 *   src/generated/historicalStorage.ts  the full table (imported only by the lazy
 *                                       heatmap, article charts and the API)
 *   src/generated/historyDigest.ts      what first-render code needs: the earliest
 *                                       entry of each month (forecast, October
 *                                       baseline) and the last 14 months (sparklines)
 *
 * Runs from `pnpm generate`, after build-snapshots has validated the folders.
 */
import fs from 'node:fs';
import path from 'node:path';
import { listSnapshotIds, readSnapshot, RESERVOIR_REGIONS } from './snapshots-lib';

type Row = Record<string, string | number | null> & { date: string };

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const ARCHIVE = path.join(ROOT, 'data/history/archive.json');
const OUT_DIR = path.join(ROOT, 'src/generated');

// Months of full history kept for the sparklines. They show 12 and apply their
// own cutoff; 14 leaves room for date and timezone edge cases.
const RECENT_MONTHS = 14;

/** Reservoir name -> column, in the table's column order. */
const COLUMNS: [string, string][] = [
  ['Kouris', 'kouris'], ['Kalavasos', 'kalavasos'], ['Lefkara', 'lefkara'], ['Dipotamos', 'dipotamos'],
  ['Germasoyeia', 'germasoyeia'], ['Arminou', 'arminou'], ['Polemidia', 'polemidia'],
  ['Asprokremmos', 'asprokremmos'], ['Evretou', 'evretou'], ['Kannaviou', 'kannaviou'],
  ['Mavrokolympos', 'mavrokolympos'], ['Vyzakia', 'vyzakia'], ['Xyliatos', 'xyliatos'], ['Argaka', 'argaka'],
  ['Pomos', 'pomos'], ['Kalopanagiotis', 'kalopanagiotis'], ['Agia Marina', 'agiaMarina'], ['Achna', 'achna'],
  ['Tamassos', 'tamassos'], ['Klirou-Malounta', 'klirouMalounta'], ['Solea', 'solea'],
];
const KEYS = [...COLUMNS.map(([, k]) => k), 'totalSCP', 'totalAll'];
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const isoDate = (id: string) => `${id.slice(7)}-${String(MONTHS.indexOf(id.slice(3, 6)) + 1).padStart(2, '0')}-${id.slice(0, 2)}`;
const round3 = (x: number) => Math.round(x * 1000) / 1000;

const fail = (msg: string): never => {
  console.error(`build-history: ${msg}`);
  process.exit(1);
};

// --- Merge archive and dataset rows ---
const archive: Row[] = JSON.parse(fs.readFileSync(ARCHIVE, 'utf8'));
const datasetRows: Row[] = listSnapshotIds().reverse().map(id => {
  const s = readSnapshot(id);
  const amount = new Map(s.reservoirData.map(r => [r.name, r.storage.current.amount]));
  const row: Row = { date: isoDate(id) };
  let scp = 0, all = 0;
  for (const [name, key] of COLUMNS) {
    const v = amount.get(name);
    if (v === undefined) fail(`${id} has no ${name}`);
    row[key] = v!;
    all += v!;
    if (RESERVOIR_REGIONS[name] === 'Southern Conveyor') scp += v!;
  }
  row.totalSCP = round3(scp);
  row.totalAll = round3(all);
  return row;
});
if (datasetRows.length && archive.length && archive[archive.length - 1].date >= datasetRows[0].date) {
  fail(`archive runs to ${archive[archive.length - 1].date}, past the first dataset ${datasetRows[0].date}`);
}
const rows: Row[] = [...archive, ...datasetRows];

// --- Checks the digest relies on ---
if (rows.length === 0) fail('no rows');
for (const r of rows) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(r.date)) fail(`bad date ${r.date}`);
  const k = Object.keys(r).filter(k => k !== 'date').sort().join();
  if (k !== [...KEYS].sort().join()) fail(`${r.date} has columns ${k}`);
}
for (let i = 1; i < rows.length; i++) {
  if (rows[i].date <= rows[i - 1].date) fail(`not sorted: ${rows[i - 1].date} then ${rows[i].date}`);
}
// Earliest entry of each month. The forecast uses a month's earliest day-1..3 entry
// and the October baseline its earliest entry of any day; both read this list, which
// is only equivalent if a month's first entry is a day-1..3 one whenever it has one.
const monthly: Row[] = [];
const byMonth = new Map<string, number[]>();
for (const r of rows) {
  const m = r.date.slice(0, 7);
  if (!byMonth.has(m)) { byMonth.set(m, []); monthly.push(r); }
  byMonth.get(m)!.push(Number(r.date.slice(8, 10)));
}
for (const [m, days] of byMonth) {
  if (days[0] > 3 && days.some(d => d <= 3)) fail(`${m}: first entry is day ${days[0]} but a day-1..3 entry exists`);
}
const last = rows[rows.length - 1].date;
let y = Number(last.slice(0, 4)), mo = Number(last.slice(5, 7)) - RECENT_MONTHS;
while (mo <= 0) { mo += 12; y--; }
const cutoff = `${y}-${String(mo).padStart(2, '0')}-01`;
const recent = rows.filter(r => r.date >= cutoff);

// --- Write ---
const canonical = (r: Row) => JSON.stringify(Object.fromEntries([['date', r.date], ...KEYS.map(k => [k, r[k] ?? null])]));
const header = `// GENERATED by scripts/build/build-history.ts from data/history/archive.json and
// data/snapshots/. Do not edit; gitignored. ${rows.length} entries, ${rows[0].date} to ${last}.`;
const table = `${header}
import type { HistoricalStorageEntry } from '../types';

export const historicalStorageData: HistoricalStorageEntry[] = [
${rows.map(canonical).join(',\n')}
];
`;
const toDigestRow = (r: Row) => JSON.stringify([r.date, ...KEYS.map(k => r[k] ?? null)]);
const digest = `${header}
export const DIGEST_KEYS = ${JSON.stringify(KEYS)} as const;
export type DigestRow = [string, ...(number | null)[]];
// Earliest entry of each month
export const monthlyRows: DigestRow[] = [
${monthly.map(toDigestRow).join(',\n')}
];
// Every entry from ${cutoff} on
export const recentRows: DigestRow[] = [
${recent.map(toDigestRow).join(',\n')}
];
`;
fs.mkdirSync(OUT_DIR, { recursive: true });
let changed = 0;
for (const [file, body] of [['historicalStorage.ts', table], ['historyDigest.ts', digest]] as const) {
  const p = path.join(OUT_DIR, file);
  if (!fs.existsSync(p) || fs.readFileSync(p, 'utf8') !== body) { fs.writeFileSync(p, body); changed++; }
}
console.log(`build-history: ${archive.length} archive + ${datasetRows.length} dataset rows, ${monthly.length} months, ${recent.length} recent (from ${cutoff}), ${changed} file(s) updated`);

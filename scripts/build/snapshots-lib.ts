/**
 * Read and write dataset snapshot folders (data/snapshots/<id>/).
 *
 * One folder per dataset, named exactly by its id (e.g. 30-OCT-2026):
 *   data.json        waterTransferred, reservoirData, yearlyInflowData. The report
 *                    date is the folder name itself (reportDate = id).
 *   dams.json        { "<reservoir name>": { en, el, ru } } one-line dam summaries
 *                    (absent when the dataset has none)
 *   summary.<lang>.md  the "Recent changes" narrative per language, verbatim
 *                    (absent when the dataset has none in that language)
 *
 * A folder reads back as a DatasetSnapshot (src/utils/dataManager.ts), the same
 * shape articles already pass from server to client.
 * See docs/plans/data-snapshots-migration.md.
 */
import fs from 'node:fs';
import path from 'node:path';
import type { DatasetSnapshot } from '../../src/utils/dataManager';

export const SNAPSHOT_ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../data/snapshots');
export const LANGS = ['en', 'el', 'ru'] as const;
type Lang = (typeof LANGS)[number];

const ID_RE = /^\d{2}-(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)-\d{4}$/;
export const isSnapshotId = (id: string) => ID_RE.test(id);

/** JSON with one array element per line, so a changed reservoir is a one-line diff. */
function formatDataJson(s: DatasetSnapshot): string {
  const rows = (arr: unknown[]) => arr.length === 0 ? '[]' : `[\n${arr.map(x => `    ${JSON.stringify(x)}`).join(',\n')}\n  ]`;
  return `{
  "waterTransferred": ${JSON.stringify(s.waterTransferred)},
  "reservoirData": ${rows(s.reservoirData)},
  "yearlyInflowData": ${rows(s.yearlyInflowData)}
}
`;
}

function formatDamsJson(d: DatasetSnapshot['damSummaries']): string {
  const names = Object.keys(d);
  return `{\n${names.map(n => `  ${JSON.stringify(n)}: ${JSON.stringify(d[n])}`).join(',\n')}\n}\n`;
}

export function writeSnapshot(s: DatasetSnapshot, root = SNAPSHOT_ROOT): void {
  if (!isSnapshotId(s.id)) throw new Error(`bad snapshot id ${s.id}`);
  const dir = path.join(root, s.id);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'data.json'), formatDataJson(s));
  const hasDams = Object.values(s.damSummaries).some(v => LANGS.some(l => v[l] != null));
  if (hasDams) fs.writeFileSync(path.join(dir, 'dams.json'), formatDamsJson(s.damSummaries));
  for (const l of LANGS) {
    const text = s.summaryChanges[l];
    if (text != null) fs.writeFileSync(path.join(dir, `summary.${l}.md`), text);
  }
}

export function readSnapshot(id: string, root = SNAPSHOT_ROOT): DatasetSnapshot {
  const dir = path.join(root, id);
  const data = JSON.parse(fs.readFileSync(path.join(dir, 'data.json'), 'utf8'));
  const damsPath = path.join(dir, 'dams.json');
  const dams: DatasetSnapshot['damSummaries'] = fs.existsSync(damsPath)
    ? JSON.parse(fs.readFileSync(damsPath, 'utf8'))
    : Object.fromEntries(data.reservoirData.map((r: { name: string }) => [r.name, { en: null, el: null, ru: null }]));
  const summaryChanges = Object.fromEntries(LANGS.map(l => {
    const p = path.join(dir, `summary.${l}.md`);
    return [l, fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null];
  })) as Record<Lang, string | null>;
  return {
    id,
    reservoirData: data.reservoirData,
    yearlyInflowData: data.yearlyInflowData,
    reportDate: id, // normalized: older modules used other formats (6/2/25, 1-SEP-2025)
    waterTransferred: data.waterTransferred,
    summaryChanges,
    damSummaries: dams,
  };
}

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const sortKey = (id: string) => `${id.slice(7)}-${String(MONTHS.indexOf(id.slice(3, 6))).padStart(2, '0')}-${id.slice(0, 2)}`;

/** Snapshot ids found on disk, newest first. */
export function listSnapshotIds(root = SNAPSHOT_ROOT): string[] {
  if (!fs.existsSync(root)) return [];
  return fs.readdirSync(root, { withFileTypes: true })
    .filter(d => d.isDirectory() && isSnapshotId(d.name))
    .map(d => d.name)
    .sort((a, b) => sortKey(b).localeCompare(sortKey(a)));
}

// ---------------------------------------------------------------------------
// Validation: what TypeScript used to catch for free, plus the data rules in
// CLAUDE.md. Returns a list of problems (empty when the snapshot is fine).
// ---------------------------------------------------------------------------

export const RESERVOIR_REGIONS: Record<string, string> = {
  Kouris: 'Southern Conveyor', Kalavasos: 'Southern Conveyor', Lefkara: 'Southern Conveyor',
  Dipotamos: 'Southern Conveyor', Germasoyeia: 'Southern Conveyor', Arminou: 'Southern Conveyor',
  Polemidia: 'Southern Conveyor', Achna: 'Southern Conveyor',
  Asprokremmos: 'Paphos', Kannaviou: 'Paphos', Mavrokolympos: 'Paphos',
  Evretou: 'Chrysochou', Argaka: 'Chrysochou', Pomos: 'Chrysochou', 'Agia Marina': 'Chrysochou',
  Vyzakia: 'Nicosia', Xyliatos: 'Nicosia', Kalopanagiotis: 'Nicosia',
  Tamassos: 'Recharge/Other', 'Klirou-Malounta': 'Recharge/Other', Solea: 'Recharge/Other',
};

// Largest gap seen between a stated percentage and amount / capacity in the
// 182 datasets up to 26-NOV-2026 is 0.5 pp (WDD rounding, small dams).
const PCT_TOLERANCE = 0.6;

const isNum = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);

function idToDate(id: string) {
  return { day: Number(id.slice(0, 2)), month: MONTHS.indexOf(id.slice(3, 6)) + 1, year: Number(id.slice(7)) };
}

export function validateSnapshot(s: DatasetSnapshot): string[] {
  const p: string[] = [];
  const at = (msg: string) => p.push(`${s.id}: ${msg}`);

  if (!isSnapshotId(s.id)) at('folder name is not a DD-MMM-YYYY id');
  else {
    const { day, month, year } = idToDate(s.id);
    const d = new Date(Date.UTC(year, month - 1, day));
    if (d.getUTCDate() !== day || d.getUTCMonth() !== month - 1) at('folder name is not a real date');
  }

  const res = Array.isArray(s.reservoirData) ? s.reservoirData : [];
  if (res.length !== 21) at(`${res.length} reservoirs, expected 21`);
  const seen = new Set<string>();
  for (const r of res) {
    const n = r?.name;
    if (typeof n !== 'string' || !(n in RESERVOIR_REGIONS)) { at(`unknown reservoir name ${JSON.stringify(n)}`); continue; }
    if (seen.has(n)) at(`${n} appears twice`);
    seen.add(n);
    if (r.region !== RESERVOIR_REGIONS[n]) at(`${n} region is "${r.region}", expected "${RESERVOIR_REGIONS[n]}"`);
    const nums: [string, unknown][] = [
      ['capacity', r.capacity], ['inflow.last24Hours', r.inflow?.last24Hours], ['inflow.totalSince', r.inflow?.totalSince],
      ['storage.current.amount', r.storage?.current?.amount], ['storage.current.percentage', r.storage?.current?.percentage],
      ['storage.lastYear.amount', r.storage?.lastYear?.amount], ['storage.lastYear.percentage', r.storage?.lastYear?.percentage],
      ['maxStorage.amount', r.maxStorage?.amount],
    ];
    for (const [k, v] of nums) if (!isNum(v)) at(`${n} ${k} is ${JSON.stringify(v)}, expected a number`);
    if (typeof r.maxStorage?.date !== 'string') at(`${n} maxStorage.date is missing`);
    if (isNum(r.capacity) && r.capacity > 0) {
      for (const k of ['current', 'lastYear'] as const) {
        const st = r.storage?.[k];
        if (isNum(st?.amount) && isNum(st?.percentage)) {
          const gap = Math.abs((st.amount / r.capacity) * 100 - st.percentage);
          if (gap > PCT_TOLERANCE) at(`${n} ${k} ${st.percentage}% disagrees with ${st.amount} / ${r.capacity} MCM (${gap.toFixed(1)} pp off)`);
        }
      }
    }
  }

  if (!Array.isArray(s.yearlyInflowData) || s.yearlyInflowData.length === 0) at('yearlyInflowData is empty');
  else for (const y of s.yearlyInflowData) {
    if (typeof y?.year !== 'string' || !isNum(y?.total) || typeof y?.months !== 'object') at(`bad yearlyInflowData entry ${JSON.stringify(y).slice(0, 80)}`);
    else for (const [m, v] of Object.entries(y.months)) if (!isNum(v)) at(`yearlyInflowData ${y.year} ${m} is ${JSON.stringify(v)}`);
  }

  const wt = s.waterTransferred;
  if (wt != null && (typeof wt.from !== 'string' || typeof wt.to !== 'string' || !isNum(wt.sinceOct))) at(`bad waterTransferred ${JSON.stringify(wt)}`);

  for (const name of Object.keys(s.damSummaries ?? {})) {
    if (!seen.has(name)) at(`dams.json has "${name}", which is not a reservoir in data.json`);
  }
  return p;
}

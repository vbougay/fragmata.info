/**
 * Turn the archived WDD weekly "Δελτίο Νερού" workbooks (data/water-bulletin/*.xlsx) into
 * src/utils/desalinationWeekly.ts, the data behind the desalination page and charts.
 *
 * Usage (from the repo root): npx tsx .claude/skills/fetch-and-update/water-bulletin-to-ts.ts
 *
 * Two templates exist. Editions up to 18 May 2026 carry only the six largest dams and the
 * all-dam total; from 10 June they also give the week's output per treatment plant and per
 * desalination unit. Only the first sheet is read for dams (later sheets hold stale copies);
 * plant output comes from the first sheet that has it. The edition date comes from the
 * index (or the filename), never from labels inside the workbook, which are often stale.
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import * as XLSX from "xlsx";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../../..");
const ARCHIVE = join(ROOT, "data", "water-bulletin");
const OUT = join(ROOT, "src", "utils", "desalinationWeekly.ts");

const DAMS: Record<string, string> = {
  Κούρης: "Kouris", Ασπρόκρεμμος: "Asprokremmos", Κανναβιού: "Kannaviou",
  Καλαβασός: "Kalavasos", Διπόταμος: "Dipotamos", Λεύκαρα: "Lefkara",
};
const PLANTS: Record<string, ["treatment" | "desalination", string]> = {
  "Διυλιστήριο Τερσεφάνου": ["treatment", "tersefanou"], "Διυλιστήριο Κόρνου": ["treatment", "kornos"],
  "Διυλιστήριο Λεμεσού": ["treatment", "limassol"], "Διυλιστήριο Ασπρόκρεμμου": ["treatment", "asprokremmos"],
  "Διυλιστήριο Κανναβιού": ["treatment", "kannaviou"],
  "Αφαλάτωση Δεκέλειας": ["desalination", "dhekelia"], "Αφαλάτωση Βασιλικού": ["desalination", "vasilikos"],
  "Αφαλάτωση Επισκοπής": ["desalination", "episkopi"], "Αφαλάτωση Λάρνακας": ["desalination", "larnaca"],
  "Αφαλάτωση Πάφου": ["desalination", "paphos"], "Αφαλάτωση Μονής": ["desalination", "moni"],
  "Αφαλάτωση Κισσόνεργας": ["desalination", "kissonerga"], "Αφαλάτωση Λιμάνι Λεμεσού": ["desalination", "limassol-port"],
};
const GREEK_MONTHS: Record<string, number> = {
  Ιανουαρ: 1, Φεβρουαρ: 2, Μαρτ: 3, Απριλ: 4, Μαΐ: 5, Μαι: 5, Ιουν: 6, Ιουλ: 7, Αυγουστ: 8, Σεπτεμβρ: 9, Οκτωβρ: 10, Νοεμβρ: 11, Δεκεμβρ: 12,
};

const clean = (s: unknown) => String(s).replace(/\s+/g, " ").trim();
const round = (v: number, d = 3) => Math.round(v * 10 ** d) / 10 ** d;

/** Last date written in a period label, e.g. "… 6 Ιουλίου έως 13 Ιουλίου 2026" or "01/06/2026 - 08/06/2026". */
function weekEnding(label: string, fallback: string): string {
  const numeric = [...label.matchAll(/(\d{1,2})\/(\d{1,2})\/(20\d\d)/g)].pop();
  if (numeric) return `${numeric[3]}-${numeric[2].padStart(2, "0")}-${numeric[1].padStart(2, "0")}`;
  const named = [...label.matchAll(/(\d{1,2})\s+([Α-Ωα-ωάέήίόύώΐΰϊϋ]+)\s*(20\d\d)?/g)].pop();
  if (named) {
    const month = Object.entries(GREEK_MONTHS).find(([k]) => named[2].startsWith(k))?.[1];
    if (month) return `${named[3] ?? fallback.slice(0, 4)}-${String(month).padStart(2, "0")}-${named[1].padStart(2, "0")}`;
  }
  return fallback;
}

interface Edition {
  edition: string;
  weekEnding: string;
  /** All 18 dams, mln. m³ over the week. */
  damInflow: number | null;
  damOutflow: number | null;
  /** m³ a day, averaged over the week. Absent before 10 June 2026. */
  treatment?: Record<string, number>;
  desalination?: Record<string, number>;
}

const index = readFileSync(join(ARCHIVE, "index.tsv"), "utf8").split("\n").filter(Boolean).slice(1)
  .map((l) => l.split("\t"));
const editionOf = new Map(index.map(([file, , uploaded]) => [file, uploaded.slice(0, 10)]));

const editions: Edition[] = [];
for (const file of readdirSync(ARCHIVE).filter((f) => f.endsWith(".xlsx")).sort()) {
  const edition = editionOf.get(file) ?? file.slice(0, 10);
  const wb = XLSX.read(readFileSync(join(ARCHIVE, file)));
  const sheets = wb.SheetNames.map((n) => XLSX.utils.sheet_to_json<unknown[]>(wb.Sheets[n], { header: 1, defval: "" }));
  const e: Edition = { edition, weekEnding: edition, damInflow: null, damOutflow: null };

  for (const row of sheets[0]) {
    const cells = row.map((c) => (typeof c === "string" ? clean(c) : c));
    const i = cells.findIndex((c) => typeof c === "string" && /^ΠΑΓΚΥΠΡΙΑ ΣΥΝΟΛ/.test(c));
    if (i < 0 || e.damInflow !== null) continue;
    const nums = cells.slice(i + 1).filter((c): c is number => typeof c === "number");
    e.damInflow = round(nums[1]);
    e.damOutflow = round(nums[2]);
  }
  const damLabel = sheets[0].flat().map(clean).find((t) => /^Εισροή Νερού/.test(t));
  if (damLabel) e.weekEnding = weekEnding(damLabel, edition);

  const prod = sheets.find((s) => s.flat().some((c) => typeof c === "string" && /^Διυλιστήριο /.test(clean(c))));
  if (prod) {
    const label = prod.flat().map(clean).find((t) => /ΠΑΡΑΓΩΓΗ ΠΟΣΙΜΟΥ ΝΕΡΟΥ|Παραγόμενο νερό/.test(t)) ?? "";
    e.weekEnding = weekEnding(label, edition);
    e.treatment = {};
    e.desalination = {};
    for (const row of prod) {
      const cells = row.map((c) => (typeof c === "string" ? clean(c) : c));
      cells.forEach((c, j) => {
        if (typeof c !== "string" || !PLANTS[c]) return;
        const next = cells.slice(j + 1).find((x) => x !== "");
        const [kind, key] = PLANTS[c];
        if (typeof next === "number" && e[kind]![key] === undefined) e[kind]![key] = Math.round(next / 7);
      });
    }
  }
  if (!editions.some((x) => x.edition === e.edition)) editions.push(e);
}
editions.sort((a, b) => a.edition.localeCompare(b.edition));

const body = `// Generated by .claude/skills/fetch-and-update/water-bulletin-to-ts.ts from data/water-bulletin/. Do not edit by hand.
// Source: Cyprus Water Development Department, weekly «Δελτίο Νερού» workbooks.

export interface WeeklyBulletin {
  /** Date of the edition (upload date, or the edition date for back issues sent by the WDD). */
  edition: string;
  /** Last day of the week the figures cover, read from the workbook's period label. */
  weekEnding: string;
  /** All 18 main dams over the week, mln. m³. */
  damInflow: number | null;
  damOutflow: number | null;
  /** Average m³ a day over the week, per treatment plant (dam water) and per desalination unit. Absent before June 2026. */
  treatment?: Record<string, number>;
  desalination?: Record<string, number>;
}

export const WEEKLY_BULLETINS: WeeklyBulletin[] = ${JSON.stringify(editions, null, 2)};
`;
writeFileSync(OUT, body);
console.log(`${editions.length} editions, ${editions.filter((e) => e.desalination).length} with plant output -> ${OUT}`);

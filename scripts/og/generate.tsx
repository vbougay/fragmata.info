import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { getAllSparklineData, type SparklineDataPoint } from "../../src/utils/sparklineData";
import {
  reservoirData,
  getReportDate,
  calculateRegionTotals,
  calculateGrandTotal,
} from "../../src/utils/dataManager";
import { historicalStorageData } from "../../src/utils/historicalStorageData";
import { translations } from "../../src/utils/translations";
import { damCard, type DamCardData } from "./card-dam";
import { zenCard } from "./card-zen";
import { getZenModel } from "../../src/utils/zenUtils";
import { yearReviewCard } from "./card-year-review";
import { REVIEW_YEAR, hydroYearTrace, hydroYearBand, yearNumbers } from "../../src/utils/yearReviewStats";
import { ARTICLES } from "../../src/utils/articles";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FONTS_DIR = path.join(__dirname, "fonts");
const OG_DIR = path.join(__dirname, "..", "..", "public", "og");

// Inter's full-charset static TTFs (Latin + Greek + Cyrillic in one file per
// weight). satori does NOT glyph-fall-back across same-named subset files, so a
// single combined file per weight is required for non-Latin scripts.
const fonts = [
  ...([400, 600, 700] as const).map((weight) => ({
    name: "Inter",
    weight,
    style: "normal" as const,
    data: fs.readFileSync(path.join(FONTS_DIR, `inter-${weight}.ttf`)),
  })),
  // Latin-only subset — used for the Zen card's digits (matches the page's mono style).
  ...([400, 500] as const).map((weight) => ({
    name: "Roboto Mono",
    weight,
    style: "normal" as const,
    data: fs.readFileSync(path.join(FONTS_DIR, `roboto-mono-${weight}.ttf`)),
  })),
];

// Always the latest/default dataset (whatever DEFAULT_DATASET_ID points to), so
// daily data updates flow through with no code change here.
const RES = reservoirData();
const REGION_TOTALS = calculateRegionTotals();
const GRAND = calculateGrandTotal();
const DAM_SPARK = getAllSparklineData(RES);

// reservoir display name -> key in historicalStorageData (for aggregate sparklines)
const NAME_TO_HISTKEY: Record<string, string> = {
  Kouris: "kouris", Kalavasos: "kalavasos", Lefkara: "lefkara", Dipotamos: "dipotamos",
  Germasoyeia: "germasoyeia", Arminou: "arminou", Polemidia: "polemidia", Achna: "achna",
  Asprokremmos: "asprokremmos", Kannaviou: "kannaviou", Mavrokolympos: "mavrokolympos",
  Evretou: "evretou", Argaka: "argaka", Pomos: "pomos", "Agia Marina": "agiaMarina",
  Vyzakia: "vyzakia", Xyliatos: "xyliatos", Kalopanagiotis: "kalopanagiotis",
  Tamassos: "tamassos", "Klirou-Malounta": "klirouMalounta", Solea: "solea",
};

const REGION_SLUG: Record<string, string> = {
  "Southern Conveyor": "southern-conveyor", Paphos: "paphos", Chrysochou: "chrysochou",
  Nicosia: "nicosia", "Recharge/Other": "recharge-other",
};

// Matches DAM_SLUG_MAP in src/utils/slugs.ts ("Agia Marina" -> "agia-marina").
const damSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

// Trailing 12 months of historical entries (same window the in-app sparkline uses).
const RECENT = (() => {
  if (!historicalStorageData.length) return [];
  const latest = historicalStorageData[historicalStorageData.length - 1].date;
  const cutoff = new Date(latest);
  cutoff.setFullYear(cutoff.getFullYear() - 1);
  const cs = cutoff.toISOString().slice(0, 10);
  return historicalStorageData.filter((e) => e.date >= cs);
})();

// Aggregate sparkline for a set of reservoirs: summed storage / total capacity, %.
function aggregateSparkline(memberNames: string[], totalCapacity: number): SparklineDataPoint[] {
  const keys = memberNames.map((n) => NAME_TO_HISTKEY[n]).filter(Boolean);
  return RECENT.map((e) => {
    let sum = 0;
    for (const k of keys) {
      const v = (e as Record<string, number | null>)[k];
      if (typeof v === "number") sum += v;
    }
    return { date: e.date, percentage: totalCapacity > 0 ? Math.min((sum / totalCapacity) * 100, 100) : 0 };
  });
}

type Locale = "en" | "el" | "ru";
const LOCALES: Locale[] = ["en", "el", "ru"];

const num = (n: number, dp = 1) => String(Number(n.toFixed(dp)));

// Full month names — genitive form for "<day> <month> <year>" dates (Greek and
// Russian inflect the month in dates).
const MONTHS_GEN: Record<Locale, string[]> = {
  en: ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  el: ["", "Ιανουαρίου", "Φεβρουαρίου", "Μαρτίου", "Απριλίου", "Μαΐου", "Ιουνίου", "Ιουλίου", "Αυγούστου", "Σεπτεμβρίου", "Οκτωβρίου", "Νοεμβρίου", "Δεκεμβρίου"],
  ru: ["", "января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
};
// Full month names — nominative form for standalone axis labels.
const MONTHS_NOM: Record<Locale, string[]> = {
  en: ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  el: ["", "Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
  ru: ["", "январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
};
const TOKEN_IDX: Record<string, number> = {
  JAN: 1, FEB: 2, MAR: 3, APR: 4, MAY: 5, JUN: 6, JUL: 7, AUG: 8, SEP: 9, OCT: 10, NOV: 11, DEC: 12,
};

function formatReportDate(s: string, loc: Locale): string {
  const [d, m, y] = s.split("-");
  return `${parseInt(d, 10)} ${MONTHS_GEN[loc][TOKEN_IDX[m.toUpperCase()]]} ${y}`;
}
function monthYear(iso: string, loc: Locale): string {
  const [y, m] = iso.split("-");
  return `${MONTHS_NOM[loc][parseInt(m, 10)]} ${y}`;
}

// Card chrome strings. Unit comes from the app's translations.volumeUnit;
// dam/region name come from translations.ts.
const T: Record<Locale, {
  latest: string; cyprus: string; region: string; allRes: string; ofCap: string;
  storageLevel: string; last12: string; currentStorage: string; vsLastYear: string;
  inflowSinceOct: string; pts: string; waterYear: string;
  ofCapSub: (c: string, u: string) => string; was: (p: string) => string;
}> = {
  en: {
    latest: "LATEST DATA", cyprus: "Cyprus", region: "Region", allRes: "All reservoirs", ofCap: "of capacity",
    storageLevel: "STORAGE LEVEL", last12: "LAST 12 MONTHS",
    currentStorage: "CURRENT STORAGE", vsLastYear: "VS LAST YEAR", inflowSinceOct: "INFLOW SINCE OCT",
    pts: "pts", waterYear: "2025-26 water year",
    ofCapSub: (c, u) => `of ${c} ${u} capacity`, was: (p) => `was ${p}%`,
  },
  el: {
    latest: "ΤΕΛΕΥΤΑΙΑ ΔΕΔΟΜΕΝΑ", cyprus: "Κύπρος", region: "Περιοχή", allRes: "Όλα τα φράγματα", ofCap: "της χωρητικότητας",
    storageLevel: "ΣΤΑΘΜΗ ΑΠΟΘΕΜΑΤΟΣ", last12: "ΤΕΛΕΥΤΑΙΟΙ 12 ΜΗΝΕΣ",
    currentStorage: "ΤΡΕΧΟΝ ΑΠΟΘΕΜΑ", vsLastYear: "ΕΝΑΝΤΙ ΠΕΡΥΣΙ", inflowSinceOct: "ΕΙΣΡΟΗ ΑΠΟ ΟΚΤ",
    pts: "μ.π.", waterYear: "υδρολογικό έτος 2025-26",
    ofCapSub: (c, u) => `από ${c} ${u} χωρητικότητας`, was: (p) => `πέρυσι ${p}%`,
  },
  ru: {
    latest: "АКТУАЛЬНЫЕ ДАННЫЕ", cyprus: "Кипр", region: "Регион", allRes: "Все водохранилища", ofCap: "от ёмкости",
    storageLevel: "УРОВЕНЬ ВОДЫ", last12: "ПОСЛЕДНИЕ 12 МЕСЯЦЕВ",
    currentStorage: "ТЕКУЩИЙ ЗАПАС", vsLastYear: "К ПРОШЛОМУ ГОДУ", inflowSinceOct: "ПРИТОК С ОКТЯБРЯ",
    pts: "пп", waterYear: "водный год 2025-26",
    ofCapSub: (c, u) => `из ${c} ${u} ёмкости`, was: (p) => `было ${p}%`,
  },
};

function regionKey(region: string): string {
  if (region === "Southern Conveyor") return "southernConveyor";
  if (region === "Recharge/Other") return "rechargeOther";
  return region.toLowerCase();
}

function toSpark(points: SparklineDataPoint[], loc: Locale) {
  return {
    points: points.map((p) => p.percentage),
    startLabel: points.length ? monthYear(points[0].date, loc) : "",
    endLabel: points.length ? monthYear(points[points.length - 1].date, loc) : "",
  };
}

// Shared builder: dam, region, and dashboard cards all use the same layout.
function buildCard(
  loc: Locale,
  o: {
    name: string; subtitle: string; capacity: number; amount: number;
    percentage: number; lastYearPct: number; inflowSince: number; spark: SparklineDataPoint[];
  }
): DamCardData {
  const t = T[loc];
  const unit = (translations[loc] as Record<string, string>).volumeUnit;
  const delta = o.percentage - o.lastYearPct;
  const up = delta >= 0;
  return {
    brand: "Fragmata",
    site: "fragmata.info",
    latestLabel: t.latest,
    dateLabel: formatReportDate(getReportDate(), loc),
    name: o.name,
    subtitle: o.subtitle,
    percentage: o.percentage,
    pctText: `${num(o.percentage)}%`,
    ofCapacity: t.ofCap,
    sparkTitle: t.storageLevel,
    sparkRange: t.last12,
    spark: toSpark(o.spark, loc),
    stats: [
      { label: t.currentStorage, value: `${num(o.amount)} ${unit}`, sub: t.ofCapSub(num(o.capacity), unit) },
      {
        label: t.vsLastYear,
        arrow: up ? "up" : "down",
        valueColor: up ? "#34d399" : "#f87171",
        value: `${up ? "+" : "-"}${num(Math.abs(delta))} ${t.pts}`,
        sub: t.was(num(o.lastYearPct)),
      },
      { label: t.inflowSinceOct, value: `${num(o.inflowSince)} ${unit}`, sub: t.waterYear },
    ],
  };
}

function damCardData(name: string, loc: Locale): DamCardData {
  const r = RES.find((x) => x.name === name);
  if (!r) throw new Error(`Dam not found: ${name}`);
  const tr = translations[loc] as Record<string, string>;
  return buildCard(loc, {
    name: tr[r.name] ?? r.name,
    subtitle: `${tr[regionKey(r.region)] ?? r.region} · ${T[loc].cyprus}`,
    capacity: r.capacity,
    amount: r.storage.current.amount,
    percentage: r.storage.current.percentage,
    lastYearPct: r.storage.lastYear.percentage,
    inflowSince: r.inflow.totalSince,
    spark: DAM_SPARK.get(name) ?? [],
  });
}

function regionCardData(regionName: string, loc: Locale): DamCardData {
  const rt = REGION_TOTALS.find((x) => x.region === regionName);
  if (!rt) throw new Error(`Region not found: ${regionName}`);
  const tr = translations[loc] as Record<string, string>;
  const members = RES.filter((r) => r.region === regionName).map((r) => r.name);
  return buildCard(loc, {
    name: tr[regionKey(regionName)] ?? regionName,
    subtitle: `${T[loc].region} · ${T[loc].cyprus}`,
    capacity: rt.capacity,
    amount: rt.storage.current.amount,
    percentage: rt.storage.current.percentage,
    lastYearPct: rt.storage.lastYear.percentage,
    inflowSince: rt.inflow.totalSince,
    spark: aggregateSparkline(members, rt.capacity),
  });
}

function dashboardCardData(loc: Locale): DamCardData {
  const members = RES.filter((r) => r.region !== "Recharge/Other").map((r) => r.name);
  return buildCard(loc, {
    name: T[loc].cyprus,
    subtitle: T[loc].allRes,
    capacity: GRAND.capacity,
    amount: GRAND.storage.current.amount,
    percentage: GRAND.storage.current.percentage,
    lastYearPct: GRAND.storage.lastYear.percentage,
    inflowSince: GRAND.inflow.totalSince,
    spark: aggregateSparkline(members, GRAND.capacity),
  });
}

async function render(node: React.ReactNode, outPath: string) {
  const svg = await satori(node, {
    width: 1200,
    height: 630,
    fonts: fonts as Parameters<typeof satori>[1]["fonts"],
  });
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: 1200 },
    font: { fontBuffers: fonts.map((f) => f.data), loadSystemFonts: false, defaultFontFamily: "Inter" },
  });
  const png = resvg.render().asPng();
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, png);
  console.log("✓", path.relative(process.cwd(), outPath), `(${(png.length / 1024).toFixed(0)} KB)`);
}

// Zen card: live number evaluated from the same piecewise projection the /zen
// page uses, snapshotted at generation time (refreshed on every data build).
async function renderZenCards(): Promise<number> {
  const model = await getZenModel();
  const nowMs = Date.now();
  let seg = model.segments[0];
  for (const s of model.segments) {
    if (s.startMs <= nowMs) seg = s;
    else break;
  }
  const storage = Math.min(
    model.capacity,
    Math.max(0, seg.startStorage + (seg.ratePerDay * (nowMs - seg.startMs)) / 86_400_000),
  );
  const litersPerSec = (seg.ratePerDay * 1e9) / 86_400;
  const group = (v: number) => Math.round(v).toLocaleString("en-US").replace(/,/g, " ");
  const bgDataUri = `data:image/jpeg;base64,${fs
    .readFileSync(path.join(__dirname, "zen-bg.jpg"))
    .toString("base64")}`;

  let n = 0;
  for (const loc of LOCALES) {
    const tr = translations[loc] as Record<string, string>;
    await render(
      zenCard({
        bgDataUri,
        brand: "Fragmata",
        title: tr.zenPageTitle,
        number: group(storage * 1e6),
        unit: "m³",
        rateLine: `${litersPerSec < 0 ? "−" : "+"}${group(Math.abs(litersPerSec))} ${tr.zenLitersPerSecond}`,
        pctLine: `${num((storage / model.capacity) * 100)}% ${tr.zenOfCapacity}`,
        url: "fragmata.info/zen",
        dateLabel: formatReportDate(getReportDate(), loc),
      }),
      path.join(OG_DIR, `zen.${loc}.png`),
    );
    n++;
  }
  return n;
}


// Article cards: articles with `ogImage` get /og/articles/<slug>.<locale>.png.
const YEAR_REVIEW_SLUG = "2026-10-01-happy-new-hydrological-year";
const SHORT_MONTHS: Record<Locale, string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  el: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαΐ", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
  ru: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
};
const YR: Record<Locale, { kicker: string; title: string; subtitle: string; times: string; lowPeak: string; filled: (n: number, of: number) => string }> = {
  en: { kicker: "2025/26 IN REVIEW", title: "Happy New Hydrological Year!", subtitle: "How 2025/26 turned the dams around, and what 2026/27 holds",
        times: "more water than a year ago", lowPeak: "the low → the peak", filled: (n, of) => `${n} of ${of}` },
  el: { kicker: "ΑΠΟΛΟΓΙΣΜΟΣ 2025/26", title: "Καλή Νέα Υδρολογική Χρονιά!", subtitle: "Πώς το 2025/26 γύρισε τα φράγματα, και τι φέρνει το 2026/27",
        times: "περισσότερο νερό από πέρυσι", lowPeak: "το χαμηλό → η κορυφή", filled: (n, of) => `${n} από ${of}` },
  ru: { kicker: "ИТОГИ 2025/26", title: "С новым гидрологическим годом!", subtitle: "Как 2025/26 развернул дамбы и чего ждать в 2026/27",
        times: "больше воды, чем год назад", lowPeak: "минимум → пик", filled: (n, of) => `${n} из ${of}` },
};
const BAND: Record<Locale, string> = { en: "Range of every year, 1988–2025", el: "Εύρος όλων των ετών, 1988–2025", ru: "Диапазон всех лет, 1988–2025" };
const FILLED: Record<Locale, string> = { en: "reservoirs filled to the brim", el: "ταμιευτήρες γέμισαν ως πάνω", ru: "водохранилищ заполнились до краёв" };

async function renderArticleCards(): Promise<number> {
  const article = ARTICLES.find((a) => a.slug === YEAR_REVIEW_SLUG && a.ogImage);
  const y = yearNumbers();
  if (!article || !y) return 0;
  const trace = hydroYearTrace(REVIEW_YEAR);
  const band = hydroYearBand(1988, REVIEW_YEAR - 1);
  const pct = (v: number) => `${num((100 * v) / y.capacity)}%`;
  const short = (iso: string, loc: Locale) => `${parseInt(iso.slice(8, 10), 10)} ${SHORT_MONTHS[loc][parseInt(iso.slice(5, 7), 10) - 1]}`;
  let n = 0;
  for (const loc of LOCALES) {
    const t = YR[loc];
    await render(
      yearReviewCard({
        brand: "Fragmata",
        site: "fragmata.info",
        kicker: t.kicker,
        title: t.title,
        subtitle: t.subtitle,
        trace,
        band,
        low: { day: y.low.day, value: y.low.value, label: `${pct(y.low.value)} · ${short(y.low.date, loc)}` },
        peak: { day: y.peak.day, value: y.peak.value, label: `${pct(y.peak.value)} · ${short(y.peak.date, loc)}` },
        end: { day: y.end.day, value: y.end.value, label: pct(y.end.value) },
        monthLabels: [9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8].map((m) => SHORT_MONTHS[loc][m]),
        bandLabel: BAND[loc],
        stats: [
          { value: y.endVsLastYear ? `×${num(y.endVsLastYear)}` : "—", label: t.times, color: "#34d399" },
          { value: `${num((100 * y.low.value) / y.capacity, 0)}% → ${num((100 * y.peak.value) / y.capacity, 0)}%`, label: t.lowPeak },
          { value: t.filled(y.full, y.reservoirs), label: FILLED[loc] },
        ],
      }),
      path.join(OG_DIR, "articles", `${YEAR_REVIEW_SLUG}.${loc}.png`),
    );
    n++;
  }
  return n;
}

async function main() {
  let n = 0;
  // All dams
  for (const r of RES) {
    for (const loc of LOCALES) {
      await render(damCard(damCardData(r.name, loc)), path.join(OG_DIR, "dam", `${damSlug(r.name)}.${loc}.png`));
      n++;
    }
  }
  // All regions
  for (const rt of REGION_TOTALS) {
    for (const loc of LOCALES) {
      await render(damCard(regionCardData(rt.region, loc)), path.join(OG_DIR, "region", `${REGION_SLUG[rt.region]}.${loc}.png`));
      n++;
    }
  }
  // Dashboard
  for (const loc of LOCALES) {
    await render(damCard(dashboardCardData(loc)), path.join(OG_DIR, `dashboard.${loc}.png`));
    n++;
  }
  // Zen
  n += await renderZenCards();
  // Articles
  n += await renderArticleCards();
  console.log(`\nDone: ${n} cards.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

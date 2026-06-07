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

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FONTS_DIR = path.join(__dirname, "fonts");
const OG_DIR = path.join(__dirname, "..", "..", "public", "og");

// Inter's full-charset static TTFs (Latin + Greek + Cyrillic in one file per
// weight). satori does NOT glyph-fall-back across same-named subset files, so a
// single combined file per weight is required for non-Latin scripts.
const fonts = ([400, 600, 700] as const).map((weight) => ({
  name: "Inter",
  weight,
  style: "normal" as const,
  data: fs.readFileSync(path.join(FONTS_DIR, `inter-${weight}.ttf`)),
}));

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

async function render(d: DamCardData, outPath: string) {
  const svg = await satori(damCard(d) as React.ReactNode, {
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

async function main() {
  let n = 0;
  // All dams
  for (const r of RES) {
    for (const loc of LOCALES) {
      await render(damCardData(r.name, loc), path.join(OG_DIR, "dam", `${damSlug(r.name)}.${loc}.png`));
      n++;
    }
  }
  // All regions
  for (const rt of REGION_TOTALS) {
    for (const loc of LOCALES) {
      await render(regionCardData(rt.region, loc), path.join(OG_DIR, "region", `${REGION_SLUG[rt.region]}.${loc}.png`));
      n++;
    }
  }
  // Dashboard
  for (const loc of LOCALES) {
    await render(dashboardCardData(loc), path.join(OG_DIR, `dashboard.${loc}.png`));
    n++;
  }
  console.log(`\nDone: ${n} cards.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

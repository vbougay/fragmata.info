/**
 * Derived statistics for the "Happy New Hydrological Year" review of 2025/26.
 *
 * The reviewed year is fixed (1 Oct 2025 – 30 Sep 2026); everything about it is
 * computed from the historical series and the selected dataset at render time,
 * so pointing the article at the first October bulletin updates every figure.
 * The outlook starts from whatever storage that dataset reports.
 *
 * Official rainfall comes from the Cyprus Department of Meteorology and is not
 * in the WDD bulletins, so it is a static table here. Research, sources and the
 * outflow fit: community/research/YEAR-IN-REVIEW-2025-26-RESEARCH.md.
 *
 * All storage figures use the 18 MAIN_RES_KEYS dams (recharge reservoirs
 * excluded), the same basis as the site's headline percentage.
 */

import { historicalStorageData, HistoricalStorageEntry } from './historicalStorageData';
import { reservoirData, yearlyInflowData, RESERVOIR_NAME_TO_KEY } from './dataManager';
import { mainTotal, mainCapacity } from './summerStats';

const DAY = 86400000;
const ts = (isoDate: string) => Date.parse(isoDate + 'T00:00:00Z');

/** Start year of the reviewed hydrological year (2025/26). */
export const REVIEW_YEAR = 2025;
export const REVIEW_LABEL = '25/26';

/** Hydrological year a date belongs to, labelled by its start year (Oct–Sep). */
export function hydroStartYear(isoDate: string): number {
  const y = +isoDate.slice(0, 4), m = +isoDate.slice(5, 7);
  return m >= 10 ? y : y - 1;
}

/** Days since 1 October of the given hydrological year. */
export function hydroDay(isoDate: string, startYear: number): number {
  return Math.round((ts(isoDate) - Date.UTC(startYear, 9, 1)) / DAY);
}

export interface HydroPoint { day: number; value: number; date: string }

/** Main-dam storage through one hydrological year, every reading on file. */
export function hydroYearTrace(startYear: number): HydroPoint[] {
  const out: HydroPoint[] = [];
  for (const e of historicalStorageData) {
    if (hydroStartYear(e.date) !== startYear) continue;
    const v = mainTotal(e);
    if (v != null) out.push({ day: hydroDay(e.date, startYear), value: v, date: e.date });
  }
  return out;
}

export interface BandPoint { day: number; min: number; median: number; max: number; years: number }

/**
 * Range of past years on the twice-monthly grid (1st and 15th) that the
 * pre-2014 record uses, so every year is sampled the same way. A reading
 * counts if it falls within 8 days of the grid date.
 */
export function hydroYearBand(firstYear: number, lastYear: number): BandPoint[] {
  const traces = new Map<number, HydroPoint[]>();
  for (let y = firstYear; y <= lastYear; y++) traces.set(y, hydroYearTrace(y));

  const out: BandPoint[] = [];
  for (let i = 0; i < 24; i++) {
    const month = (9 + Math.floor(i / 2)) % 12;          // 0-based, starting October
    const offsetYear = month >= 9 ? 0 : 1;
    const dayOfMonth = i % 2 === 0 ? 1 : 15;
    const vals: number[] = [];
    let day = 0;
    for (const [y, trace] of traces) {
      const target = Date.UTC(y + offsetYear, month, dayOfMonth);
      day = Math.round((target - Date.UTC(y, 9, 1)) / DAY);
      let best: HydroPoint | null = null;
      let bestDiff = Infinity;
      for (const p of trace) {
        const diff = Math.abs(ts(p.date) - target) / DAY;
        if (diff < bestDiff && diff <= 8) { bestDiff = diff; best = p; }
      }
      if (best) vals.push(best.value);
    }
    if (vals.length < 5) continue;
    vals.sort((a, b) => a - b);
    const mid = Math.floor(vals.length / 2);
    const median = vals.length % 2 ? vals[mid] : (vals[mid - 1] + vals[mid]) / 2;
    out.push({ day, min: vals[0], median, max: vals[vals.length - 1], years: vals.length });
  }
  return out;
}

export interface DamYearRange {
  name: string;
  region: string;
  capacity: number;
  lowPct: number; lowDate: string;
  peakPct: number; peakDate: string;
  nowPct: number; nowDate: string;
  fullFrom: string | null;   // first reading at >= 99.5% of capacity
}

// RESERVOIR_NAME_TO_KEY covers the 18 main dams only; the review also shows
// the three recharge reservoirs, all of which filled this year.
const NAME_TO_KEY: Record<string, keyof HistoricalStorageEntry> = {
  ...RESERVOIR_NAME_TO_KEY,
  Tamassos: 'tamassos',
  'Klirou-Malounta': 'klirouMalounta',
  Solea: 'solea',
};

/** Each reservoir's low, peak and latest level within the reviewed year. */
export function damYearRanges(dataSetId?: string): DamYearRange[] {
  const rows: DamYearRange[] = [];
  for (const r of reservoirData(dataSetId)) {
    const key = NAME_TO_KEY[r.name];
    if (!key) continue;
    const pts = historicalStorageData
      .filter(e => hydroStartYear(e.date) === REVIEW_YEAR && e[key] != null)
      .map(e => ({ date: e.date, pct: (100 * (e[key] as number)) / r.capacity }));
    if (!pts.length) continue;
    const low = pts.reduce((a, b) => (b.pct < a.pct ? b : a));
    const peak = pts.reduce((a, b) => (b.pct > a.pct ? b : a));
    const now = pts[pts.length - 1];
    const full = pts.find(p => p.pct >= 99.5);
    rows.push({
      name: r.name, region: r.region, capacity: r.capacity,
      lowPct: low.pct, lowDate: low.date,
      peakPct: Math.min(100, peak.pct), peakDate: peak.date,
      nowPct: now.pct, nowDate: now.date,
      fullFrom: full ? full.date : null,
    });
  }
  return rows.sort((a, b) => b.capacity - a.capacity);
}

/* ---------- rainfall (static, official) ---------- */

export interface RainMonth {
  key: string;        // month key as used in the WDD inflow table
  mm: number;         // area-average rainfall, government-controlled area
  pct: number;        // % of the month's 1961–90 normal
  cumPct: number;     // cumulative since 1 Oct, % of the normal to date
}

/**
 * Department of Meteorology monthly area-average rainfall, 2025/26. Oct–Apr
 * are the final figures; May–Aug preliminary (monthly weather reports);
 * September is provisional to the 25th, so its cumulative % is against the
 * full-year normal of 503 mm.
 */
export const DOM_RAIN_2025_26: RainMonth[] = [
  { key: 'October', mm: 14.0, pct: 43, cumPct: 43 },
  { key: 'November', mm: 22.4, pct: 42, cumPct: 42 },
  { key: 'December', mm: 123.4, pct: 117, cumPct: 83 },
  { key: 'January', mm: 122.1, pct: 119, cumPct: 96 },
  { key: 'February', mm: 73.6, pct: 90, cumPct: 95 },
  { key: 'March', mm: 112.9, pct: 182, cumPct: 107 },
  { key: 'April', mm: 54.3, pct: 183, cumPct: 112 },
  { key: 'May', mm: 46.7, pct: 238, cumPct: 117 },
  { key: 'June', mm: 2.0, pct: 33, cumPct: 116 },
  { key: 'July', mm: 5.6, pct: 215, cumPct: 117 },
  { key: 'Aug-Sep', mm: 37.4, pct: 505, cumPct: 123 },
];

export const INFLOW_MONTH_KEYS = [
  'October', 'November', 'December', 'January', 'February', 'March',
  'April', 'May', 'June', 'July', 'Aug-Sep',
] as const;

/** Monthly inflow of the reviewed season, in INFLOW_MONTH_KEYS order. */
export function reviewInflow(dataSetId?: string): { key: string; v: number }[] {
  const season = yearlyInflowData(dataSetId).find(s => s.year === REVIEW_LABEL);
  if (!season) return [];
  return INFLOW_MONTH_KEYS.map(k => ({ key: k, v: season.months[k] ?? 0 }));
}

/* ---------- 2026/27 outlook ---------- */

/**
 * Yearly outflow (supply, irrigation, evaporation, spills) against storage on
 * 1 October, fitted on the eleven seasons 2015/16–2025/26 (r = 0.96):
 * outflow ≈ 39.4 + 0.359 × start.
 */
export const OUTFLOW_BASE = 39.4;
export const OUTFLOW_PER_MCM = 0.359;

export interface OutlookRow { season: string; inflow: number; end: number }

export interface Outlook {
  start: number;
  capacity: number;
  outflow: number;
  rows: OutlookRow[];        // ascending by inflow
  lower: number;             // seasons that would end below the start
}

/**
 * Replays each past season's actual inflow on top of today's storage: the
 * level a year later is start + inflow − typical outflow at this level.
 */
export function outlookReplay(dataSetId?: string): Outlook | null {
  const capacity = mainCapacity(dataSetId);
  const start = reservoirData(dataSetId)
    .filter(r => r.region !== 'Recharge/Other')
    .reduce((s, r) => s + r.storage.current.amount, 0);
  const outflow = OUTFLOW_BASE + OUTFLOW_PER_MCM * start;
  const rows = yearlyInflowData(dataSetId)
    .filter(s => 2000 + parseInt(s.year.slice(0, 2), 10) <= REVIEW_YEAR && s.total > 0)
    .map(s => ({
      season: s.year,
      inflow: s.total,
      end: Math.max(0, Math.min(capacity, start + s.total - outflow)),
    }))
    .sort((a, b) => a.inflow - b.inflow);
  if (!rows.length) return null;
  return { start, capacity, outflow, rows, lower: rows.filter(r => r.end < start).length };
}

/* ---------- headline numbers ---------- */

/**
 * Official DoM island rainfall for the whole year. Provisional to 25 Sep;
 * refresh from the 30/09 "Daily and Cumulative Precipitation" PDF. `rank` is
 * among hydrological years since 1901/02 (1 = wettest).
 */
export const DOM_YEAR_TOTAL = { mm: 616.5, pct: 123, rank: 27, years: 125 };

/** Arminou → Kouris transfer for 2025/26 (WDD bulletin; resets on 1 October). */
export const ARMINOU_TO_KOURIS_2025_26 = 20.44;

/** Main-dam storage nearest a date within the reviewed year's trace. */
function traceAt(trace: HydroPoint[], isoDate: string, maxDays = 8): HydroPoint | null {
  const target = ts(isoDate);
  let best: HydroPoint | null = null;
  let bestDiff = Infinity;
  for (const p of trace) {
    const diff = Math.abs(ts(p.date) - target) / DAY;
    if (diff < bestDiff && diff <= maxDays) { bestDiff = diff; best = p; }
  }
  return best;
}

export interface YearNumbers {
  capacity: number;
  first: HydroPoint;
  low: HydroPoint;
  peak: HydroPoint;
  end: HydroPoint;
  endVsLastYear: number | null;   // ratio to the same date a year earlier
  springGain: number | null;      // 1 Mar → 1 Jun
  full: number;
  reservoirs: number;
  inflow: number;
  inflowVsPrev: number | null;
  breakEven: number | null;       // inflow 2026/27 needs to stay level
}

export function yearNumbers(dataSetId?: string): YearNumbers | null {
  const trace = hydroYearTrace(REVIEW_YEAR);
  if (!trace.length) return null;
  const capacity = mainCapacity(dataSetId);
  const low = trace.reduce((a, b) => (b.value < a.value ? b : a));
  const peak = trace.reduce((a, b) => (b.value > a.value ? b : a));
  const end = trace[trace.length - 1];

  // Same date a year earlier, from the full record (2024/25 readings are sparser)
  const prevDate = `${+end.date.slice(0, 4) - 1}${end.date.slice(4)}`;
  const prev = traceAt(hydroYearTrace(REVIEW_YEAR - 1), prevDate, 16);

  const mar = traceAt(trace, `${REVIEW_YEAR + 1}-03-01`);
  const jun = traceAt(trace, `${REVIEW_YEAR + 1}-06-01`);

  const seasons = yearlyInflowData(dataSetId);
  const cur = seasons.find(s => s.year === REVIEW_LABEL);
  const idx = seasons.findIndex(s => s.year === REVIEW_LABEL);
  const prevSeason = idx > 0 ? seasons[idx - 1] : undefined;

  const ranges = damYearRanges(dataSetId);
  const outlook = outlookReplay(dataSetId);

  return {
    capacity,
    first: trace[0],
    low, peak, end,
    endVsLastYear: prev ? end.value / prev.value : null,
    springGain: mar && jun ? jun.value - mar.value : null,
    full: ranges.filter(r => r.fullFrom).length,
    reservoirs: ranges.length,
    inflow: cur?.total ?? 0,
    inflowVsPrev: cur && prevSeason && prevSeason.total > 0 ? cur.total / prevSeason.total : null,
    breakEven: outlook ? outlook.outflow : null,
  };
}

/* ---------- map ---------- */

/** Dam locations (same coordinates as the dashboard map). */
export const DAM_COORDS: Record<string, [number, number]> = {
  Kouris: [32.9178, 34.7278], Asprokremmos: [32.5543, 34.7259], Evretou: [32.4727, 34.9757],
  Kannaviou: [32.5878, 34.9277], Arminou: [32.7371, 34.8752], Kalavasos: [33.260517, 34.803972],
  Dipotamos: [33.359274, 34.851618], Germasoyeia: [33.0843, 34.7439], Polemidia: [32.9888, 34.7187],
  Achna: [33.814307, 35.055321], Lefkara: [33.2956, 34.8944], Tamassos: [33.2479, 35.0167],
  'Klirou-Malounta': [33.1727, 35.0318], Solea: [32.9029, 35.0668], Kalopanagiotis: [32.8254, 35.0061],
  Xyliatos: [33.0372, 35.0089], Vyzakia: [33.0272, 35.0615], Argaka: [32.5022, 35.0486],
  Pomos: [32.5762, 35.1449], 'Agia Marina': [32.5410, 35.1170], Mavrokolympos: [32.4058, 34.8565],
};

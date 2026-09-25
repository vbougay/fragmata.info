// forecastEngine.ts
//
// Reservoir storage and restriction-date forecasting engine.
// Uses the historical storage record (water years from 1995/96) to:
// 1. Fit a monthly water balance for the selected reservoirs: drawdown that
//    grows with the amount stored, plus each past year's level-free
//    "weather" term (what the month delivered net of fixed demand)
// 2. Replay random sequences of those past years from today's storage
//    (a fixed-seed ensemble) and take the 10th / 50th / 90th percentile at
//    each month: the dry, median and wet paths, still exposed as
//    drought / expected / recovery
// 3. Report when each path crosses the restriction threshold
//
// The cycle phase and analog years are descriptive only and no longer steer
// the forecast: annual rainfall shows no useful year-to-year persistence
// (lag-1 correlation 0.04 since 1961). Backtested on 174 start dates in
// 2003–2024, the median path was exceeded about half the time at 6–36 months.

import { historicalStorageData, HistoricalStorageEntry } from './historicalStorageData';
import { CyclePhase, DrainForecast, ForecastTrajectoryPoint } from '../types';
import { parseReportDate } from './reservoirUtils';

// ============================================================
// Constants
// ============================================================

const FORECAST_YEARS = 10;
const MAX_ANALOGS = 6;
const RATIONING_THRESHOLD = 0.20; // Below 20% capacity, reduce outflow
const HISTORICAL_CONTEXT_MONTHS = 12; // Months of history to include in chart
const DEFAULT_RESTRICTION_PCT = 7; // Default restriction threshold percentage
const ENSEMBLE_SIZE = 300; // Simulated futures per forecast
const ENSEMBLE_SEED = 20261001; // Fixed seed: server and client render the same forecast
const MIN_PROFILE_YEAR = 1995; // Water years from 1995/96 on (comparable infrastructure)
const MAX_DRAW_RATE = 0.25; // Cap on fitted monthly drawdown per MCM stored

// Main reservoir keys (excluding Recharge/Other: tamassos, klirouMalounta, solea)
export const MAIN_RES_KEYS: (keyof HistoricalStorageEntry)[] = [
  'kouris', 'kalavasos', 'lefkara', 'dipotamos', 'germasoyeia',
  'arminou', 'polemidia', 'asprokremmos', 'evretou', 'kannaviou',
  'mavrokolympos', 'vyzakia', 'xyliatos', 'argaka', 'pomos',
  'kalopanagiotis', 'agiaMarina', 'achna'
];

// Region → reservoir keys mapping
export const REGION_KEYS: Record<string, (keyof HistoricalStorageEntry)[]> = {
  'Southern Conveyor': ['kouris', 'kalavasos', 'lefkara', 'dipotamos', 'germasoyeia', 'arminou', 'polemidia', 'achna'],
  'Paphos': ['asprokremmos', 'kannaviou', 'mavrokolympos'],
  'Chrysochou': ['evretou', 'argaka', 'pomos', 'agiaMarina'],
  'Nicosia': ['vyzakia', 'xyliatos', 'kalopanagiotis'],
};

// Major dams shown individually in the dropdown
export const MAJOR_DAM_KEYS: (keyof HistoricalStorageEntry)[] = [
  'kouris', 'asprokremmos', 'evretou', 'kannaviou'
];

// Water year calendar months: Oct(index 0) through Sep(index 11)
const WY_CAL_MONTHS = [10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// ============================================================
// Data extraction helpers
// ============================================================

function sumKeys(entry: HistoricalStorageEntry, keys: (keyof HistoricalStorageEntry)[]): number {
  return keys.reduce(
    (sum, key) => sum + ((entry[key] as number | null) ?? 0), 0
  );
}

/**
 * Build a map of "YYYY-MM" → total MCM for specified reservoir keys,
 * using entries from the first few days of each month.
 */
function getMonthlyStorageForKeys(keys: (keyof HistoricalStorageEntry)[]): Map<string, number> {
  const result = new Map<string, number>();
  for (const entry of historicalStorageData) {
    const day = parseInt(entry.date.substring(8, 10));
    if (day <= 3) {
      const mapKey = entry.date.substring(0, 7);
      if (!result.has(mapKey)) {
        result.set(mapKey, sumKeys(entry, keys));
      }
    }
  }
  return result;
}

// ============================================================
// Water balance model: storage-dependent drawdown + past years' weather
// ============================================================

/**
 * Monthly water balance fitted to one set of reservoirs:
 *
 *   ΔS = w − b·S
 *
 * S is storage at the start of the month. `drawRate` (b) is the extra
 * drawdown per MCM stored (releases, evaporation and spills all grow with
 * the amount in the dams), fitted per water-year month across years.
 * `weather` (w) is what each past year's month delivered net of fixed demand.
 * Unlike raw storage deltas it does not depend on how full the dams happened
 * to be, so a dry year counts as dry whether it began at 30 or 230 MCM.
 */
interface WaterBalanceModel {
  drawRate: number[]; // 12 values, Oct..Sep
  weather: number[][]; // one 12-value row per past water year
}

const modelCache = new Map<string, WaterBalanceModel>();

function fitWaterBalance(keys: (keyof HistoricalStorageEntry)[]): WaterBalanceModel {
  const cacheKey = keys.join(',');
  const cached = modelCache.get(cacheKey);
  if (cached) return cached;

  const storage = getMonthlyStorageForKeys(keys);
  const lastYear = Math.max(...[...storage.keys()].map(k => parseInt(k.slice(0, 4), 10)));

  // (start-of-month storage, change over the month) for each water year and month
  const years: ([number, number] | null)[][] = [];
  for (let sy = MIN_PROFILE_YEAR; sy < lastYear; sy++) {
    const vals = WY_CAL_MONTHS.map(m =>
      storage.get(`${m >= 10 ? sy : sy + 1}-${String(m).padStart(2, '0')}`) ?? null
    );
    vals.push(storage.get(`${sy + 1}-10`) ?? null);
    if (vals[0] === null) continue;
    const pairs = vals.slice(0, 12).map((v, i): [number, number] | null =>
      v !== null && vals[i + 1] !== null ? [v, vals[i + 1]! - v] : null
    );
    if (pairs.filter(p => p !== null).length >= 6) years.push(pairs);
  }

  // Least-squares slope of ΔS on S for each month; b is its negative, kept in [0, MAX_DRAW_RATE]
  const drawRate = WY_CAL_MONTHS.map((_, m) => {
    const pts = years.map(y => y[m]).filter((p): p is [number, number] => p !== null);
    if (pts.length < 5) return 0;
    const meanS = pts.reduce((a, p) => a + p[0], 0) / pts.length;
    const meanD = pts.reduce((a, p) => a + p[1], 0) / pts.length;
    const sxx = pts.reduce((a, p) => a + (p[0] - meanS) ** 2, 0);
    if (sxx === 0) return 0;
    const slope = pts.reduce((a, p) => a + (p[0] - meanS) * (p[1] - meanD), 0) / sxx;
    return Math.min(MAX_DRAW_RATE, Math.max(0, -slope));
  });

  // Weather term per year and month. Ensemble members need (almost) complete
  // years; the odd missing month takes that month's average.
  const rows = years.map(y => y.map((p, m) => (p ? p[1] + drawRate[m] * p[0] : null)));
  const complete = rows.filter(r => r.filter(v => v !== null).length >= 10);
  const members = complete.length > 0 ? complete : rows;
  const monthMean = WY_CAL_MONTHS.map((_, m) => {
    const v = members.map(r => r[m]).filter((x): x is number => x !== null);
    return v.length > 0 ? v.reduce((a, b) => a + b, 0) / v.length : 0;
  });
  const weather = members.map(r => r.map((v, m) => v ?? monthMean[m]));

  const model: WaterBalanceModel = {
    drawRate,
    weather: weather.length > 0 ? weather : [new Array(12).fill(0)],
  };
  modelCache.set(cacheKey, model);
  return model;
}

// ============================================================
// Cycle phase classification (always uses grand total)
// ============================================================

interface OctoberReading { year: number; storage: number }

function getOctoberSeries(): OctoberReading[] {
  const storage = getMonthlyStorageForKeys(MAIN_RES_KEYS);
  const series: OctoberReading[] = [];
  for (const [key, val] of storage) {
    if (key.endsWith('-10')) {
      series.push({ year: parseInt(key.substring(0, 4)), storage: val });
    }
  }
  return series.sort((a, b) => a.year - b.year);
}

interface CycleInfo {
  phase: CyclePhase;
  yearsInPhase: number;
  analogYears: string[];
}

function classifyCycle(reportDate: string): CycleInfo {
  const octSeries = getOctoberSeries();
  if (octSeries.length < 5) {
    return { phase: 'declining', yearsInPhase: 1, analogYears: [] };
  }

  const parsed = parseReportDate(reportDate);
  // Water year start: if month >= Oct then same year, else previous year
  const wyStart = parsed
    ? (parsed.month >= 10 ? parsed.year : parsed.year - 1)
    : 2025;

  // Use grand total current storage for system-wide cycle classification
  const grandTotalStorage = getMonthlyStorageForKeys(MAIN_RES_KEYS);
  const currentKey = parsed
    ? `${parsed.year}-${String(parsed.month).padStart(2, '0')}`
    : '2026-02';
  const currentStorage = grandTotalStorage.get(currentKey) ?? octSeries[octSeries.length - 1].storage;

  // Direction from recent 3-year trend
  const recent = octSeries.filter(r => r.year >= wyStart - 3 && r.year <= wyStart);
  const isDecline = recent.length >= 2
    ? recent[recent.length - 1].storage < recent[0].storage
    : true;

  // Find peaks and troughs
  const peaks: OctoberReading[] = [];
  const troughs: OctoberReading[] = [];
  for (let i = 1; i < octSeries.length - 1; i++) {
    const [prev, curr, next] = [
      octSeries[i - 1].storage,
      octSeries[i].storage,
      octSeries[i + 1].storage,
    ];
    if (curr > prev && curr > next) peaks.push(octSeries[i]);
    if (curr < prev && curr < next) troughs.push(octSeries[i]);
  }

  const lastPeak = peaks.filter(p => p.year <= wyStart).sort((a, b) => b.year - a.year)[0];
  const lastTrough = troughs.filter(t => t.year <= wyStart).sort((a, b) => b.year - a.year)[0];

  let phase: CyclePhase;
  let yearsInPhase: number;

  if (isDecline) {
    yearsInPhase = lastPeak ? wyStart - lastPeak.year : 1;
    const peakStorage = lastPeak?.storage ?? 200;
    phase = yearsInPhase >= 3 && currentStorage < peakStorage * 0.25
      ? 'trough'
      : 'declining';
  } else {
    yearsInPhase = lastTrough ? wyStart - lastTrough.year : 1;
    phase = yearsInPhase >= 3 && currentStorage > 200
      ? 'peak'
      : 'recovering';
  }

  // Find analog years: similar storage + direction, with recency preference
  const analogs: { year: number; distance: number }[] = [];
  for (let i = 1; i < octSeries.length; i++) {
    const yr = octSeries[i].year;
    if (yr >= wyStart - 1 || yr < 1995) continue;

    const st = octSeries[i].storage;
    const prevSt = octSeries[i - 1].storage;
    const sameDir = (prevSt > st) === isDecline;

    const dist =
      Math.abs(st - currentStorage) / 200 +
      (sameDir ? 0 : 0.4) +
      (wyStart - yr) * 0.005;

    analogs.push({ year: yr, distance: dist });
  }
  analogs.sort((a, b) => a.distance - b.distance);

  const analogLabels = analogs
    .slice(0, MAX_ANALOGS)
    .map(a => `${a.year}/${String(a.year + 1).slice(2)}`);

  return { phase, yearsInPhase, analogYears: analogLabels };
}

// ============================================================
// Ensemble simulation
// ============================================================

/** Small deterministic PRNG (mulberry32), so every build and render agrees. */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// One row per ensemble member: a uniform draw per forecast year, mapped to
// whichever past year's weather that member replays.
let ensembleDraws: number[][] | null = null;

function getEnsembleDraws(): number[][] {
  if (!ensembleDraws) {
    const rand = mulberry32(ENSEMBLE_SEED);
    ensembleDraws = Array.from({ length: ENSEMBLE_SIZE }, () =>
      Array.from({ length: FORECAST_YEARS + 2 }, () => rand())
    );
  }
  return ensembleDraws;
}

function percentile(sorted: ArrayLike<number>, p: number): number {
  const idx = (sorted.length - 1) * p;
  const lo = Math.floor(idx);
  const hi = Math.ceil(idx);
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (idx - lo);
}

/**
 * Run every ensemble member forward from today's storage and return the
 * 10th, 50th and 90th percentile at each month: the dry, median and wet
 * paths. Each member replays a random sequence of past years' weather; the
 * drawdown term keeps losses in proportion to what is actually stored.
 */
function simulateEnsemble(
  startStorage: number,
  capacity: number,
  startWYMonthIdx: number, // 0=Oct, 1=Nov, ..., 11=Sep
  firstStepFraction: number, // share of the report month still ahead
  model: WaterBalanceModel,
  totalMonths: number
): { dry: number[]; median: number[]; wet: number[] } {
  const years = model.weather.length;
  const draws = getEnsembleDraws();
  const width = totalMonths + 1;
  // Member k's path occupies paths[k * width .. k * width + totalMonths]
  const paths = new Float64Array(draws.length * width);

  draws.forEach((memberDraws, k) => {
    let storage = startStorage;
    let wyMonth = startWYMonthIdx;
    let yearOffset = 0;
    paths[k * width] = storage;

    for (let i = 0; i < totalMonths; i++) {
      const weather = model.weather[Math.floor(memberDraws[yearOffset] * years)];
      let delta = weather[wyMonth] - model.drawRate[wyMonth] * storage;
      if (i === 0) delta *= firstStepFraction;

      // Rationing: reduce outflow when storage is critically low
      const pct = storage / capacity;
      if (delta < 0 && pct < RATIONING_THRESHOLD) {
        delta *= Math.max(0.1, pct / RATIONING_THRESHOLD);
      }

      storage = Math.max(0, Math.min(capacity, storage + delta));
      paths[k * width + i + 1] = storage;

      wyMonth = (wyMonth + 1) % 12;
      if (wyMonth === 0) yearOffset++;
    }
  });

  const dry: number[] = [];
  const median: number[] = [];
  const wet: number[] = [];
  const column = new Float64Array(draws.length);
  for (let i = 0; i < width; i++) {
    for (let k = 0; k < draws.length; k++) column[k] = paths[k * width + i];
    column.sort(); // typed arrays sort numerically
    dry.push(percentile(column, 0.1));
    median.push(percentile(column, 0.5));
    wet.push(percentile(column, 0.9));
  }
  return { dry, median, wet };
}

// ============================================================
// Historical context: recent actual storage for chart background
// ============================================================

interface HistoricalPoint {
  month: string; // "M/YYYY"
  storage: number;
}

function getRecentHistory(
  reportDate: string,
  monthsBack: number,
  keys: (keyof HistoricalStorageEntry)[]
): HistoricalPoint[] {
  const parsed = parseReportDate(reportDate);
  if (!parsed) return [];

  const storageMap = getMonthlyStorageForKeys(keys);
  const points: HistoricalPoint[] = [];

  for (let i = monthsBack; i >= 0; i--) {
    let m = parsed.month - i;
    let y = parsed.year;
    while (m <= 0) { m += 12; y--; }

    const key = `${y}-${String(m).padStart(2, '0')}`;
    const storage = storageMap.get(key);
    if (storage !== undefined) {
      points.push({ month: `${m}/${y}`, storage: Math.round(storage * 10) / 10 });
    }
  }

  return points;
}

// ============================================================
// Main entry point: parameterized forecast
// ============================================================

// Cache to avoid recomputing on every call (keyed by inputs)
let cachedResult: { key: string; forecast: DrainForecast } | null = null;

/**
 * Calculate a forecast for a given set of reservoir keys.
 * @param currentStorage - current total storage (MCM) for the selected reservoirs
 * @param capacity - total capacity (MCM) for the selected reservoirs
 * @param reportDate - dataset ID / report date string
 * @param reservoirKeys - which reservoir keys to use for historical profiles
 * @param restrictionThresholdPct - % of capacity that triggers water restrictions (default 10)
 */
export function calculateForecast(
  currentStorage: number,
  capacity: number,
  reportDate: string,
  reservoirKeys: (keyof HistoricalStorageEntry)[],
  restrictionThresholdPct: number = DEFAULT_RESTRICTION_PCT
): DrainForecast {
  const restrictionThresholdMCM = capacity * restrictionThresholdPct / 100;

  // Check cache
  const cacheKey = `${currentStorage.toFixed(1)}_${capacity.toFixed(1)}_${reportDate}_${reservoirKeys.join(',')}_${restrictionThresholdPct}`;
  if (cachedResult && cachedResult.key === cacheKey) {
    return cachedResult.forecast;
  }

  // Handle edge case: already below restriction threshold
  if (currentStorage <= restrictionThresholdMCM) {
    const emptyForecast: DrainForecast = {
      drought: 'Already Empty',
      expected: 'Already Empty',
      recovery: 'Already Empty',
      droughtRestriction: 'Already Restricted',
      expectedRestriction: 'Already Restricted',
      recoveryRestriction: 'Already Restricted',
      restrictionThresholdPct,
      restrictionThresholdMCM,
      cyclePhase: 'trough',
      yearsInPhase: 0,
      analogYears: [],
      confidence: 'low',
      trajectories: [],
    };
    cachedResult = { key: cacheKey, forecast: emptyForecast };
    return emptyForecast;
  }

  // 1. Classify cycle phase (descriptive: badge, analog years, confidence)
  const cycle = classifyCycle(reportDate);

  // 2. Fit the monthly water balance for these reservoirs
  const model = fitWaterBalance(reservoirKeys);

  // 3. Current water-year month, and how much of it is still ahead
  const parsed = parseReportDate(reportDate);
  const calMonth = parsed?.month ?? 2;
  const startYear = parsed?.year ?? 2026;
  const wyMonthIdx = calMonth >= 10 ? calMonth - 10 : calMonth + 2;
  const daysInReportMonth = new Date(Date.UTC(startYear, calMonth, 0)).getUTCDate();
  const firstStepFraction = parsed
    ? (daysInReportMonth - parsed.day + 1) / daysInReportMonth
    : 1;

  // 4. Get historical context for this reservoir subset
  const history = getRecentHistory(reportDate, HISTORICAL_CONTEXT_MONTHS, reservoirKeys);

  // 5. Simulate the ensemble: dry (10th percentile), median, wet (90th)
  const totalForecastMonths = FORECAST_YEARS * 12;
  const { dry: droughtTraj, median: expectedTraj, wet: recoveryTraj } = simulateEnsemble(
    currentStorage, capacity, wyMonthIdx, firstStepFraction, model, totalForecastMonths
  );

  // 6. Build trajectory points
  const trajectories: ForecastTrajectoryPoint[] = [];

  for (const pt of history) {
    trajectories.push({
      month: pt.month,
      drought: pt.storage,
      expected: pt.storage,
      recovery: pt.storage,
    });
  }

  // Add forecast points (start from i=1 to avoid duplicating the current month)
  for (let i = 1; i <= totalForecastMonths; i++) {
    const m = ((calMonth - 1 + i) % 12) + 1;
    const y = startYear + Math.floor((calMonth - 1 + i) / 12);
    trajectories.push({
      month: `${m}/${y}`,
      drought: Math.round(droughtTraj[i] * 10) / 10,
      expected: Math.round(expectedTraj[i] * 10) / 10,
      recovery: Math.round(recoveryTraj[i] * 10) / 10,
    });
  }

  // 7. Extract drain dates (original: below 0.5 MCM)
  function getDrainDate(traj: number[]): string {
    for (let i = 1; i < traj.length; i++) {
      if (traj[i] <= 0.5) {
        const m = ((calMonth - 1 + i) % 12) + 1;
        const y = startYear + Math.floor((calMonth - 1 + i) / 12);
        return `${m}/${y}`;
      }
    }
    return 'Not Draining';
  }

  // 7b. Extract restriction dates (below threshold MCM)
  function getRestrictionDate(traj: number[]): string {
    for (let i = 1; i < traj.length; i++) {
      if (traj[i] <= restrictionThresholdMCM) {
        const m = ((calMonth - 1 + i) % 12) + 1;
        const y = startYear + Math.floor((calMonth - 1 + i) / 12);
        return `${m}/${y}`;
      }
    }
    return 'Not Restricted';
  }

  // 8. Confidence based on analog count and data quality
  const confidence = cycle.analogYears.length >= 5
    ? 'high'
    : cycle.analogYears.length >= 3
      ? 'medium'
      : 'low';

  const forecast: DrainForecast = {
    drought: getDrainDate(droughtTraj),
    expected: getDrainDate(expectedTraj),
    recovery: getDrainDate(recoveryTraj),
    droughtRestriction: getRestrictionDate(droughtTraj),
    expectedRestriction: getRestrictionDate(expectedTraj),
    recoveryRestriction: getRestrictionDate(recoveryTraj),
    restrictionThresholdPct,
    restrictionThresholdMCM,
    cyclePhase: cycle.phase,
    yearsInPhase: cycle.yearsInPhase,
    analogYears: cycle.analogYears,
    confidence,
    trajectories,
  };

  cachedResult = { key: cacheKey, forecast };
  return forecast;
}

/**
 * Backward-compatible wrapper: calculates forecast for all 18 main reservoirs.
 */
export function calculateGrandTotalForecast(
  currentStorage: number,
  totalCapacity: number,
  reportDate: string
): DrainForecast {
  return calculateForecast(currentStorage, totalCapacity, reportDate, MAIN_RES_KEYS, DEFAULT_RESTRICTION_PCT);
}

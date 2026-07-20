// zenUtils.ts
//
// Server-side model behind the /zen page: a piecewise-linear projection of
// total reservoir storage that the client evaluates at wall-clock time.
//
// Level       — anchored at the latest bulletin's grand total.
// Rate        — least-squares slope over all bulletins in the last 28 days.
// Seasonality — reuses the cycle-aware forecast engine ("expected" scenario):
//               its month-over-month rate *change* is added on top of the
//               measured rate as the projection crosses month boundaries,
//               so at the anchor the rate equals the observed 4-week trend
//               while the seasonal shape follows the existing model.

import {
  availableDataSets,
  calculateGrandTotal,
  ensureDatasetLoaded,
  getGrandTotalForecast,
  DEFAULT_DATASET_ID,
} from './dataManager';
import { parseReportDate } from './reservoirUtils';

export interface ZenSegment {
  startMs: number; // epoch ms when this rate takes over
  startStorage: number; // MCM at startMs
  ratePerDay: number; // MCM per day (negative = draining)
}

export interface ZenModel {
  datasetId: string;
  anchorMs: number;
  anchorStorage: number; // MCM
  capacity: number; // MCM
  lastYearStorage: number; // MCM
  measuredRatePerDay: number; // raw 4-week trend, before seasonal shaping
  bulletinsUsed: number;
  windowDays: number;
  segments: ZenSegment[];
}

const WINDOW_DAYS = 28;
const PROJECTION_MONTHS = 6;
// WDD bulletins reflect morning readings — anchor at 05:00 UTC (~08:00 Cyprus).
const ANCHOR_HOUR_UTC = 5;
const MS_PER_DAY = 86_400_000;

function datasetMs(id: string): number | null {
  const p = parseReportDate(id);
  if (!p) return null;
  return Date.UTC(p.year, p.month - 1, p.day, ANCHOR_HOUR_UTC);
}

function daysInMonth(year: number, month1: number): number {
  return new Date(Date.UTC(year, month1, 0)).getUTCDate();
}

/**
 * Per-day storage-change rates by calendar month from the forecast engine's
 * "expected" trajectory. Index 0 = the report month, k = k months later.
 * Returns null when no trajectory is available (e.g. already below the
 * restriction threshold) — callers then fall back to a flat measured rate.
 */
function getModelMonthRates(
  datasetId: string,
  anchorStorage: number,
  months: number,
): number[] | null {
  const parsed = parseReportDate(datasetId);
  if (!parsed) return null;
  const forecast = getGrandTotalForecast(datasetId);
  if (forecast.trajectories.length === 0) return null;

  const expectedByLabel = new Map(
    forecast.trajectories.map((t) => [t.month, t.expected]),
  );

  const rates: number[] = [];
  let prev = anchorStorage;
  for (let i = 1; i <= months; i++) {
    const m = ((parsed.month - 1 + i) % 12) + 1;
    const y = parsed.year + Math.floor((parsed.month - 1 + i) / 12);
    const value = expectedByLabel.get(`${m}/${y}`);
    if (value === undefined) break;
    // Trajectory point i holds storage after the delta of month (i-1 after report month)
    const dm = ((parsed.month - 1 + (i - 1)) % 12) + 1;
    const dy = parsed.year + Math.floor((parsed.month - 1 + (i - 1)) / 12);
    rates.push((value - prev) / daysInMonth(dy, dm));
    prev = value;
  }
  return rates.length > 0 ? rates : null;
}

export async function getZenModel(): Promise<ZenModel> {
  const dsId = DEFAULT_DATASET_ID;
  const parsed = parseReportDate(dsId);
  const anchorMs = datasetMs(dsId);
  if (!parsed || anchorMs === null) {
    throw new Error(`zenUtils: cannot parse dataset id "${dsId}"`);
  }

  const grand = calculateGrandTotal(dsId);
  const anchorStorage = grand.storage.current.amount;
  const capacity = grand.capacity;

  // --- Measured trend: least squares over bulletins in the 28-day window ---
  const points: { x: number; y: number }[] = [];
  for (const ds of availableDataSets) {
    const ms = datasetMs(ds.id);
    if (ms === null || ms > anchorMs || anchorMs - ms > WINDOW_DAYS * MS_PER_DAY) continue;
    await ensureDatasetLoaded(ds.id);
    points.push({
      x: (ms - anchorMs) / MS_PER_DAY,
      y: calculateGrandTotal(ds.id).storage.current.amount,
    });
  }

  const modelRates = getModelMonthRates(dsId, anchorStorage, PROJECTION_MONTHS + 1);

  let measuredRatePerDay: number;
  if (points.length >= 2) {
    const n = points.length;
    const mx = points.reduce((s, p) => s + p.x, 0) / n;
    const my = points.reduce((s, p) => s + p.y, 0) / n;
    const denom = points.reduce((s, p) => s + (p.x - mx) ** 2, 0);
    measuredRatePerDay =
      denom > 0
        ? points.reduce((s, p) => s + (p.x - mx) * (p.y - my), 0) / denom
        : 0;
  } else {
    measuredRatePerDay = modelRates?.[0] ?? 0;
  }

  // --- Piecewise projection: measured rate now, shifted by the seasonal
  // model's rate deltas as the projection crosses month boundaries ---
  const segments: ZenSegment[] = [];
  let t = anchorMs;
  let storage = anchorStorage;
  for (let k = 0; k <= PROJECTION_MONTHS; k++) {
    const seasonalShift =
      modelRates && modelRates[k] !== undefined ? modelRates[k] - modelRates[0] : 0;
    const ratePerDay = measuredRatePerDay + seasonalShift;
    segments.push({ startMs: t, startStorage: storage, ratePerDay });

    const boundary = Date.UTC(parsed.year, parsed.month - 1 + k + 1, 1, ANCHOR_HOUR_UTC);
    storage = Math.min(
      capacity,
      Math.max(0, storage + (ratePerDay * (boundary - t)) / MS_PER_DAY),
    );
    t = boundary;
  }

  return {
    datasetId: dsId,
    anchorMs,
    anchorStorage,
    capacity,
    lastYearStorage: grand.storage.lastYear.amount,
    measuredRatePerDay,
    bulletinsUsed: points.length,
    windowDays: WINDOW_DAYS,
    segments,
  };
}

import { Reservoir, ReservoirRegion, RegionTotal, YearlyInflowData, DrainForecast } from '../types';
import { availableDataSets as compiledDataSets, NEWEST_SNAPSHOT, snapshotLoaders } from '../generated/snapshotIndex';
import {
  calculateDrainDate,
  calculateRegionDrainDate,
  getReservoirsByRegion as getReservoirsByRegionUtil,
  calculateRegionTotals as calculateRegionTotalsUtil,
  calculateGrandTotal as calculateGrandTotalUtil,
  getReservoirsWithDrainDates as getReservoirsWithDrainDatesUtil,
  parseReportDate
} from './reservoirUtils';
import type { HistoricalStorageEntry } from '../types';
import { monthlyHistory } from './historyDigest';
import { calculateGrandTotalForecast, calculateForecast, MAIN_RES_KEYS, REGION_KEYS, MAJOR_DAM_KEYS } from './forecastEngine';

// --- Lazy dataset loading ---
// Datasets live in data/snapshots/<id>/ and are compiled by
// scripts/build/build-snapshots.ts into src/generated/ (gitignored).
// Only the newest is bundled; the others are lazy chunks loaded on demand.

export interface DataModule {
  reservoirData: Reservoir[];
  yearlyInflowData: YearlyInflowData[];
  getReportDate: () => string;
  getDamSummary?: (damName: string, language?: 'en' | 'el' | 'ru') => string | null;
  getSummaryChanges?: (language?: 'en' | 'el' | 'ru') => string;
  waterTransferred?: { from: string; to: string; sinceOct: number };
}

const moduleCache = new Map<string, DataModule>([
  [NEWEST_SNAPSHOT.id, snapshotToModule(NEWEST_SNAPSHOT)],
]);

/**
 * A dataset module flattened to plain data, so a Server Component can load it
 * and hand it to the client. Articles use this to render against the bulletin
 * they were written about: without it, a lazy dataset that is not in the cache
 * silently resolves to the latest one (see resolveModule).
 */
export interface DatasetSnapshot {
  id: string;
  reservoirData: Reservoir[];
  yearlyInflowData: YearlyInflowData[];
  reportDate: string;
  waterTransferred: { from: string; to: string; sinceOct: number } | null;
  summaryChanges: Record<'en' | 'el' | 'ru', string | null>;
  damSummaries: Record<string, Record<'en' | 'el' | 'ru', string | null>>;
}

const SNAPSHOT_LANGS = ['en', 'el', 'ru'] as const;

export async function getDatasetSnapshot(id: string): Promise<DatasetSnapshot | null> {
  await ensureDatasetLoaded(id);
  const mod = moduleCache.get(id);
  if (!mod) return null;
  const perLang = (f: (l: 'en' | 'el' | 'ru') => string | null) =>
    Object.fromEntries(SNAPSHOT_LANGS.map(l => [l, f(l)])) as Record<'en' | 'el' | 'ru', string | null>;
  return {
    id,
    reservoirData: mod.reservoirData,
    yearlyInflowData: mod.yearlyInflowData,
    reportDate: mod.getReportDate(),
    waterTransferred: mod.waterTransferred ?? null,
    summaryChanges: perLang(l => mod.getSummaryChanges?.(l) ?? null),
    damSummaries: Object.fromEntries(
      mod.reservoirData.map(r => [r.name, perLang(l => mod.getDamSummary?.(r.name, l) ?? null)]),
    ),
  };
}

/** Turn a plain snapshot back into the module shape the cache holds. */
export function snapshotToModule(s: DatasetSnapshot): DataModule {
  return {
    reservoirData: s.reservoirData,
    yearlyInflowData: s.yearlyInflowData,
    getReportDate: () => s.reportDate,
    waterTransferred: s.waterTransferred ?? undefined,
    getSummaryChanges: s.summaryChanges.en == null ? undefined : (l = 'en') => s.summaryChanges[l] ?? '',
    getDamSummary: (name, l = 'en') => s.damSummaries[name]?.[l] ?? null,
  };
}

/** Put a server-loaded snapshot into the cache. Synchronous, so it can run during render. */
export function registerDatasetSnapshot(s: DatasetSnapshot): void {
  if (moduleCache.has(s.id)) return;
  moduleCache.set(s.id, snapshotToModule(s));
}

/** Load a dataset module into the cache. No-op if already cached. */
export async function ensureDatasetLoaded(id: string): Promise<void> {
  if (moduleCache.has(id)) return;
  const loader = snapshotLoaders[id];
  if (loader) {
    const snapshot = await loader();
    if (!moduleCache.has(id)) moduleCache.set(id, snapshotToModule(snapshot));
  }
}

// Define available data sets (metadata only — modules loaded on demand)
export const availableDataSets = compiledDataSets;

/** The most recent dataset ID (first entry in the sorted array). */
export const DEFAULT_DATASET_ID = availableDataSets[0].id;

// Resolve a dataset module from cache (falls back to default if not yet loaded).
function resolveModule(datasetId?: string): DataModule {
  const id = datasetId || DEFAULT_DATASET_ID;
  return moduleCache.get(id) || moduleCache.get(DEFAULT_DATASET_ID)!;
}

// Resolve a valid dataset ID (defaults to latest).
function resolveId(datasetId?: string): string {
  const id = datasetId || DEFAULT_DATASET_ID;
  return availableDataSets.some(ds => ds.id === id) ? id : DEFAULT_DATASET_ID;
}

// Data access functions — all accept an optional datasetId (defaults to latest).
export const reservoirData = (datasetId?: string): Reservoir[] => {
  return resolveModule(datasetId).reservoirData;
};

// Export utility functions directly
export { calculateDrainDate, calculateRegionDrainDate };

export const getReservoirsByRegion = (region: ReservoirRegion, datasetId?: string): Reservoir[] => {
  return getReservoirsByRegionUtil(reservoirData(datasetId), region);
};

export const calculateRegionTotals = (datasetId?: string): RegionTotal[] => {
  return calculateRegionTotalsUtil(reservoirData(datasetId));
};

export const calculateGrandTotal = (datasetId?: string): RegionTotal => {
  return calculateGrandTotalUtil(reservoirData(datasetId));
};

export const getReservoirsWithDrainDates = (datasetId?: string): Reservoir[] => {
  return getReservoirsWithDrainDatesUtil(reservoirData(datasetId));
};

export const yearlyInflowData = (datasetId?: string): YearlyInflowData[] => {
  return resolveModule(datasetId).yearlyInflowData;
};

export const getReportDate = (datasetId?: string): string => {
  return resolveModule(datasetId).getReportDate();
};

export const getWaterTransferred = (datasetId?: string): { from: string; to: string; sinceOct: number } | undefined => {
  return resolveModule(datasetId).waterTransferred;
};

export { calculateGrandTotalForecast, calculateForecast, MAIN_RES_KEYS, REGION_KEYS, MAJOR_DAM_KEYS };

/**
 * Compute the drain forecast for a dataset's grand total.
 * Uses the ensemble forecast engine.
 */
export const getGrandTotalForecast = (datasetId?: string): DrainForecast => {
  const dsId = resolveId(datasetId);
  const grandTotal = calculateGrandTotalUtil(reservoirData(dsId));
  return calculateGrandTotalForecast(
    grandTotal.storage.current.amount,
    grandTotal.capacity,
    dsId
  );
};

/**
 * Reservoir key → display name mapping (English).
 * Used by the forecast dropdown to match data keys to reservoir names.
 */
const RESERVOIR_KEY_TO_NAMES: Record<string, string[]> = {
  kouris: ['Kouris'],
  kalavasos: ['Kalavasos'],
  lefkara: ['Lefkara'],
  dipotamos: ['Dipotamos'],
  germasoyeia: ['Germasoyeia'],
  arminou: ['Arminou'],
  polemidia: ['Polemidia'],
  achna: ['Achna'],
  asprokremmos: ['Asprokremmos'],
  kannaviou: ['Kannaviou'],
  mavrokolympos: ['Mavrokolympos'],
  evretou: ['Evretou'],
  argaka: ['Argaka'],
  pomos: ['Pomos'],
  agiaMarina: ['Agia Marina'],
  vyzakia: ['Vyzakia'],
  xyliatos: ['Xyliatos'],
  kalopanagiotis: ['Kalopanagiotis'],
};

/**
 * Get storage and capacity for a set of reservoir keys.
 * Matches reservoir data by name using the key→name mapping.
 */
export const getStorageForKeys = (keys: (keyof HistoricalStorageEntry)[], datasetId?: string): { storage: number; capacity: number } => {
  const data = reservoirData(datasetId);
  let storage = 0;
  let capacity = 0;
  for (const key of keys) {
    const names = RESERVOIR_KEY_TO_NAMES[key as string];
    if (!names) continue;
    const res = data.find(r => names.includes(r.name));
    if (res) {
      storage += res.storage.current.amount;
      capacity += res.capacity;
    }
  }
  return { storage, capacity };
};

/**
 * Compute forecast for a specific selection (region, dam, or all).
 * @param selectionId - 'all', region name, or reservoir key
 * @param restrictionThresholdPct - threshold percentage
 * @param datasetId - optional dataset ID (defaults to latest)
 */
export const getForecastForSelection = (
  selectionId: string,
  restrictionThresholdPct: number,
  datasetId?: string,
): DrainForecast => {
  const dsId = resolveId(datasetId);
  let keys: (keyof HistoricalStorageEntry)[];

  if (selectionId === 'all') {
    keys = MAIN_RES_KEYS;
  } else if (selectionId in REGION_KEYS) {
    keys = REGION_KEYS[selectionId];
  } else {
    // Single reservoir key
    keys = [selectionId as keyof HistoricalStorageEntry];
  }

  const { storage, capacity } = getStorageForKeys(keys, dsId);
  return calculateForecast(storage, capacity, dsId, keys, restrictionThresholdPct);
};

/**
 * Look up October storage from historical data for a given year.
 * Uses the earliest October entry (closest to Oct 1st) and sums
 * main reservoirs only (excluding Recharge/Other).
 */
function getOctoberStorageFromHistorical(year: number): number | null {
  const prefix = `${year}-10`;
  // monthlyHistory holds the earliest entry of each month, so this is the earliest Oct entry
  const entry = monthlyHistory.find(e => e.date.startsWith(prefix));
  if (!entry) return null;
  return MAIN_RES_KEYS.reduce((sum, key) => sum + ((entry[key] as number | null) ?? 0), 0);
}

/**
 * Get October baseline storage for water balance calculations.
 * Uses historical storage data to find the correct October baseline
 * for the water year of the given dataset.
 */
export const getOctoberBaselineStorage = (datasetId?: string): { currentStorage: number; lastYearStorage: number | null } | null => {
  const dsId = resolveId(datasetId);
  const parsed = parseReportDate(dsId);
  if (!parsed) return null;

  // Determine water year: Oct–Sep cycle
  const waterYearStart = parsed.month >= 10 ? parsed.year : parsed.year - 1;

  const currentBaseline = getOctoberStorageFromHistorical(waterYearStart);
  if (currentBaseline === null) return null;

  const lastYearBaseline = getOctoberStorageFromHistorical(waterYearStart - 1);

  return {
    currentStorage: currentBaseline,
    lastYearStorage: lastYearBaseline,
  };
};

// Reverse mapping: reservoir display name → historical data key
export const RESERVOIR_NAME_TO_KEY: Record<string, keyof HistoricalStorageEntry> = Object.fromEntries(
  Object.entries(RESERVOIR_KEY_TO_NAMES).flatMap(([k, names]) => names.map(name => [name, k as keyof HistoricalStorageEntry]))
);

const MAIN_REGION_NAMES: ReservoirRegion[] = ['Southern Conveyor', 'Paphos', 'Chrysochou', 'Nicosia'];

/**
 * Get reservoirs with forecast-based expected restriction dates.
 * Main reservoirs use the ensemble forecast engine's median path (7% threshold).
 * Recharge/Other reservoirs fall back to simple linear drain date.
 */
export const getReservoirsWithForecastDates = (datasetId?: string): Reservoir[] => {
  const dsId = resolveId(datasetId);
  const data = reservoirData(dsId);
  return data.map(reservoir => {
    const key = RESERVOIR_NAME_TO_KEY[reservoir.name];
    if (key && reservoir.region !== 'Recharge/Other') {
      const { storage, capacity } = getStorageForKeys([key], dsId);
      const forecast = calculateForecast(storage, capacity, dsId, [key], 7);
      return { ...reservoir, drainDate: forecast.expectedRestriction };
    }
    // Fallback for Recharge/Other (no historical data)
    return { ...reservoir, drainDate: calculateDrainDate(reservoir) };
  });
};

/**
 * Get region totals with forecast-based expected restriction dates.
 * Main regions use the ensemble forecast engine's median path (7% threshold).
 * Recharge/Other keeps the simple linear drain date.
 */
export const getRegionTotalsWithForecasts = (datasetId?: string): RegionTotal[] => {
  const dsId = resolveId(datasetId);
  const totals = calculateRegionTotalsUtil(reservoirData(dsId));
  return totals.map(regionTotal => {
    if (MAIN_REGION_NAMES.includes(regionTotal.region)) {
      const forecast = getForecastForSelection(regionTotal.region, 7, dsId);
      return { ...regionTotal, drainDate: forecast.expectedRestriction };
    }
    return regionTotal;
  });
};

/**
 * Get grand total with forecast-based expected restriction date.
 * Uses the ensemble forecast engine's median path (7% threshold).
 */
export const getGrandTotalWithForecast = (datasetId?: string): RegionTotal => {
  const dsId = resolveId(datasetId);
  const grandTotal = calculateGrandTotalUtil(reservoirData(dsId));
  const forecast = getGrandTotalForecast(dsId);
  return { ...grandTotal, drainDate: forecast.expectedRestriction };
};

/**
 * Typical-year monthly inflow for the "predicted" part of the current season:
 * the average of the middle third of completed seasons, ranked by total
 * inflow. Matches the forecast engine's median path, which assumes neither a
 * wet nor a dry year. `yearType` is kept for the chart's legend label.
 * @param monthKeys - array of month key strings (e.g., ["October", "November", ...])
 * @param latestYear - the latest (current) year label to exclude from averaging
 */
export const getScenarioInflowAverages = (
  monthKeys: string[],
  latestYear: string,
  datasetId?: string,
): { averages: Record<string, number>; yearType: 'dry' | 'moderate' | 'wet' } => {
  const dsId = resolveId(datasetId);
  const completed = yearlyInflowData(dsId)
    .filter(d => d.year !== latestYear)
    .sort((a, b) => a.total - b.total);

  const third = Math.floor(completed.length / 3);
  const seasons = completed.length >= 3
    ? completed.slice(third, completed.length - third)
    : completed;

  const averages: Record<string, number> = {};
  monthKeys.forEach(month => {
    const values = seasons.map(s => s.months[month] || 0);
    averages[month] = values.length > 0
      ? values.reduce((a, b) => a + b, 0) / values.length
      : 0;
  });

  return { averages, yearType: 'moderate' };
};

/**
 * Compute last-7-days inflow for each reservoir by comparing the current dataset
 * to the closest dataset ~7 days prior. Returns a map of reservoir name → 7-day inflow MCM.
 * Returns null if no suitable prior dataset is found.
 */
export const getLast7DaysInflow = async (datasetId?: string): Promise<Map<string, number> | null> => {
  const dsId = resolveId(datasetId);
  const currentParsed = parseReportDate(dsId);
  if (!currentParsed) return null;

  const currentDate = new Date(currentParsed.year, currentParsed.month - 1, currentParsed.day);

  // Find the dataset closest to 7 days before the current one (between 5-10 days)
  let bestDatasetId: string | null = null;
  let bestDiff = Infinity;

  for (const ds of availableDataSets) {
    if (ds.id === dsId) continue;
    const parsed = parseReportDate(ds.id);
    if (!parsed) continue;
    const dsDate = new Date(parsed.year, parsed.month - 1, parsed.day);
    const diffDays = (currentDate.getTime() - dsDate.getTime()) / (1000 * 60 * 60 * 24);
    if (diffDays >= 5 && diffDays <= 10) {
      const distFrom7 = Math.abs(diffDays - 7);
      if (distFrom7 < bestDiff) {
        bestDiff = distFrom7;
        bestDatasetId = ds.id;
      }
    }
  }

  if (!bestDatasetId) return null;

  // Ensure both datasets are loaded before accessing their data
  await ensureDatasetLoaded(dsId);
  await ensureDatasetLoaded(bestDatasetId);

  const currentData = reservoirData(dsId);
  const priorData = reservoirData(bestDatasetId);
  const result = new Map<string, number>();

  for (const reservoir of currentData) {
    const prior = priorData.find(r => r.name === reservoir.name);
    if (prior) {
      const diff = reservoir.inflow.totalSince - prior.inflow.totalSince;
      result.set(reservoir.name, Math.max(0, diff));
    }
  }

  return result;
};

/**
 * Get summary of changes for the selected dataset.
 */
export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en', datasetId?: string): string | null => {
  const mod = resolveModule(datasetId);
  return mod.getSummaryChanges?.(language) ?? null;
};

/**
 * Get a short summary for an individual dam from the selected dataset.
 */
export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en', datasetId?: string): string | null => {
  const mod = resolveModule(datasetId);
  return mod.getDamSummary?.(damName, language) ?? null;
};

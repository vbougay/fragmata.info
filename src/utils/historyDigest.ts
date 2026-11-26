// Compact slices of the historical record for code that runs on first load.
// See scripts/build/history-digest.ts; the full table is in historicalStorageData.ts.
import type { HistoricalStorageEntry } from '../types';
import { DIGEST_KEYS, monthlyRows, recentRows, type DigestRow } from '../generated/historyDigest';

const expand = (rows: DigestRow[]): HistoricalStorageEntry[] =>
  rows.map(([date, ...values]) => {
    const e: Record<string, string | number | null> = { date };
    DIGEST_KEYS.forEach((k, i) => { e[k] = values[i] ?? null; });
    return e as unknown as HistoricalStorageEntry;
  });

/** Earliest entry of each month, chronological. */
export const monthlyHistory: HistoricalStorageEntry[] = expand(monthlyRows);

/** Every entry of the last ~14 months, chronological. */
export const recentHistory: HistoricalStorageEntry[] = expand(recentRows);

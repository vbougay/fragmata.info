// Historical dam storage levels (MCM) for Cyprus reservoirs, 1988 to the latest bulletin.
// Source: Cyprus Water Development Department.
//
// Built by scripts/build/build-history.ts (`pnpm generate`) from:
//   - data/history/archive.json: readings to 1 March 2025 (1st and 15th of each month)
//   - data/snapshots/<id>/data.json: one row per bulletin from 17 March 2025
// Don't add rows by hand: a new dataset folder is its row.
//
// This is the full table (~450 KB). First-render code should read
// historyDigest.ts instead, or the table lands in the first-load bundle.
import type { HistoricalStorageEntry } from '../types';

export type { HistoricalStorageEntry };
export { historicalStorageData } from '../generated/historicalStorage';

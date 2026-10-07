/**
 * Where Cyprus's water came from and where it went in calendar 2024, the last
 * year with complete official figures. All values in mln. m³.
 *
 * Sources and method: community/research/DESALINATION-RESEARCH.md, section 2.
 * - Taps: WDD «Πηγές Ύδρευσης» table (Government Water Works, by origin).
 * - Farms from government works: WDD irrigation-by-source table.
 * - Recharge: Eurostat env_wat_abs. Losses: what is left of the dams' outflow
 *   (storage on 1 Jan + inflow − storage next 1 Jan) after the deliveries above;
 *   mostly evaporation.
 * - Private boreholes: Eurostat's groundwater abstraction for agriculture
 *   (120.0, an estimate that has not moved in years) less the 12.4 from
 *   government boreholes. Nobody meters it.
 * Villages on their own boreholes (about 10% of people, roughly 12 mln. m³) and
 * the 2.3 of desalinated water not delivered straight to taps are left out.
 */

export type WaterSource = 'desalination' | 'dams' | 'govBoreholes' | 'recycled' | 'privateBoreholes';
export type WaterUse = 'taps' | 'losses' | 'recharge' | 'farms';

export interface WaterFlow {
  from: WaterSource;
  to: WaterUse;
  value: number;
}

export const WATER_BALANCE_YEAR = 2024;

/** Order matters: it is the top-to-bottom order of the nodes in the diagram. */
export const WATER_SOURCES: WaterSource[] = ['desalination', 'dams', 'govBoreholes', 'recycled', 'privateBoreholes'];
export const WATER_USES: WaterUse[] = ['taps', 'losses', 'recharge', 'farms'];

export const WATER_FLOWS: WaterFlow[] = [
  { from: 'desalination', to: 'taps', value: 74.9 },
  { from: 'dams', to: 'taps', value: 34.6 },
  { from: 'dams', to: 'losses', value: 13.2 },
  { from: 'dams', to: 'recharge', value: 3.1 },
  { from: 'dams', to: 'farms', value: 33.7 },
  { from: 'govBoreholes', to: 'taps', value: 3.1 },
  { from: 'govBoreholes', to: 'farms', value: 12.4 },
  { from: 'recycled', to: 'farms', value: 14.2 },
  { from: 'privateBoreholes', to: 'farms', value: 107.6 },
];

/** Estimated, not measured: drawn hatched. */
export const ESTIMATED_SOURCES: WaterSource[] = ['privateBoreholes'];

/** The 84.6 that left the 18 main dams: this much came in during the year, the rest came out of storage. */
export const DAM_INFLOW = 29.0;
export const DAM_STORAGE_DRAW = 55.6;

export const totalForSource = (s: WaterSource) =>
  WATER_FLOWS.filter(f => f.from === s).reduce((a, f) => a + f.value, 0);
export const totalForUse = (u: WaterUse) =>
  WATER_FLOWS.filter(f => f.to === u).reduce((a, f) => a + f.value, 0);

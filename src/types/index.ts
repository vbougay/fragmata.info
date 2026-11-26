
// Types for the Cyprus reservoir data

export interface Reservoir {
  name: string;
  capacity: number;
  inflow: {
    last24Hours: number;
    totalSince: number;
  };
  storage: {
    current: {
      amount: number;
      percentage: number;
    };
    lastYear: {
      amount: number;
      percentage: number;
    };
  };
  maxStorage: {
    amount: number;
    date: string;
  };
  region: ReservoirRegion;
  drainDate?: string; // Forecasted date when the reservoir will be fully drained
  drainForecast?: DrainForecast;
}

export type ReservoirRegion = 'Southern Conveyor' | 'Paphos' | 'Chrysochou' | 'Nicosia' | 'Recharge/Other' | 'Total';

export interface RegionTotal {
  region: ReservoirRegion;
  capacity: number;
  inflow: {
    last24Hours: number;
    totalSince: number;
  };
  storage: {
    current: {
      amount: number;
      percentage: number;
    };
    lastYear: {
      amount: number;
      percentage: number;
    };
  };
  maxStorage: {
    amount: number;
    date: string;
  };
  drainDate?: string; // Forecasted date when the region will be fully drained
  drainForecast?: DrainForecast;
}

export interface MonthlyData {
  month: string;
  value: number;
  year: string;
}

export interface YearlyInflowData {
  year: string;
  months: {
    [key: string]: number;
  };
  total: number;
}

export type CyclePhase = 'declining' | 'trough' | 'recovering' | 'peak';

export interface ForecastTrajectoryPoint {
  month: string;       // "MM/YYYY"
  drought: number;     // MCM
  expected: number;
  recovery: number;
}

export interface DrainForecast {
  drought: string;      // "MM/YYYY" or "Not Draining" or "Beyond 10 Years"
  expected: string;
  recovery: string;
  droughtRestriction: string;  // When storage drops below restriction threshold
  expectedRestriction: string;
  recoveryRestriction: string;
  restrictionThresholdPct: number;  // e.g., 7 or 10
  restrictionThresholdMCM: number;  // capacity * threshold / 100
  cyclePhase: CyclePhase;
  yearsInPhase: number;
  analogYears: string[];  // e.g., ["1996/97", "2006/07"]
  confidence: 'low' | 'medium' | 'high';
  trajectories: ForecastTrajectoryPoint[];
}

// One row of the bi-monthly historical record (src/utils/historicalStorageData.ts).
// Lives here so type-only users don't pull the 450 KB table into a bundle.
export interface HistoricalStorageEntry {
  date: string; // ISO date string YYYY-MM-DD
  kouris: number | null;
  kalavasos: number | null;
  lefkara: number | null;
  dipotamos: number | null;
  germasoyeia: number | null;
  arminou: number | null;
  polemidia: number | null;
  asprokremmos: number | null;
  evretou: number | null;
  kannaviou: number | null;
  mavrokolympos: number | null;
  vyzakia: number | null;
  xyliatos: number | null;
  argaka: number | null;
  pomos: number | null;
  kalopanagiotis: number | null;
  agiaMarina: number | null;
  achna: number | null;
  tamassos: number | null;
  klirouMalounta: number | null;
  solea: number | null;
  totalSCP: number | null; // Southern Conveyor Project total
  totalAll: number | null; // All reservoirs total
}

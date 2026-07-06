// Static structural metadata for each Cyprus dam (year built, height, river, type, size).
// Source: Cyprus Water Development Department — https://dams.wdd.moa.gov.cy/api/latest
// This data is static (physical dam attributes) and is baked in rather than fetched at runtime.
// Keyed by the app's display names; WDD API name spellings differ for some dams
// (Germasogeia→Germasoyeia, Kalopanayiotis→Kalopanagiotis, Tamasou→Tamassos, Klirou→Klirou-Malounta).

export type DamType = "earthfill" | "rockfill" | "hybrid";
export type DamSize = "large" | "medium" | "small";

export interface DamMetadata {
  yearBuilt: number;
  height: number; // metres
  river: string | null; // null where the WDD source records no river
  type: DamType;
  size: DamSize;
}

export const DAM_METADATA: Record<string, DamMetadata> = {
  // Southern Conveyor
  "Kouris": { yearBuilt: 1988, height: 110, river: "Kouris", type: "earthfill", size: "large" },
  "Kalavasos": { yearBuilt: 1985, height: 60, river: "Vasilikos", type: "rockfill", size: "large" },
  // yearBuilt per Studio Pietrangeli (designer) & cyprusisland.net; WDD API lists 1981.
  "Lefkara": { yearBuilt: 1973, height: 71, river: "Syriatis", type: "hybrid", size: "medium" },
  "Dipotamos": { yearBuilt: 1986, height: 60, river: "Pentaschoinos", type: "rockfill", size: "large" },
  "Germasoyeia": { yearBuilt: 1968, height: 49, river: "Germasogeia", type: "earthfill", size: "medium" },
  "Arminou": { yearBuilt: 1998, height: 45, river: "Diarizos", type: "hybrid", size: "small" },
  "Polemidia": { yearBuilt: 1965, height: 45, river: "Garyllis", type: "earthfill", size: "small" },
  "Achna": { yearBuilt: 1987, height: 16, river: null, type: "earthfill", size: "medium" },

  // Paphos
  "Asprokremmos": { yearBuilt: 1982, height: 53, river: "Xeropotamos", type: "earthfill", size: "large" },
  "Kannaviou": { yearBuilt: 2005, height: 75, river: "Ezousa", type: "rockfill", size: "large" },
  "Mavrokolympos": { yearBuilt: 1966, height: 45, river: "Mavrokolympos", type: "earthfill", size: "small" },

  // Chrysochou
  "Evretou": { yearBuilt: 1986, height: 70, river: "Stavros tis Psokas", type: "rockfill", size: "large" },
  "Argaka": { yearBuilt: 1964, height: 41, river: "Makounta", type: "rockfill", size: "small" },
  "Pomos": { yearBuilt: 1966, height: 38, river: "Livadi", type: "rockfill", size: "small" },
  "Agia Marina": { yearBuilt: 1965, height: 33, river: "Xeros", type: "rockfill", size: "small" },

  // Nicosia
  "Vyzakia": { yearBuilt: 1994, height: 37, river: "Ovgos", type: "earthfill", size: "small" },
  "Xyliatos": { yearBuilt: 1982, height: 42, river: "Lagoudera", type: "rockfill", size: "small" },
  "Kalopanagiotis": { yearBuilt: 1966, height: 40, river: "Setrachos", type: "earthfill", size: "small" },

  // Recharge/Other
  "Tamassos": { yearBuilt: 2002, height: 34, river: "Pedieos", type: "hybrid", size: "small" },
  "Klirou-Malounta": { yearBuilt: 2007, height: 38, river: "Akaki", type: "earthfill", size: "small" },
  // yearBuilt (completion) per Wikipedia; WDD API lists 2010.
  "Solea": { yearBuilt: 2013, height: 56, river: "Karkotis", type: "rockfill", size: "small" },
};

export function getDamMetadata(name: string): DamMetadata | undefined {
  return DAM_METADATA[name];
}

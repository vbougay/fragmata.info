"use client";

import React, { useState, useEffect } from "react";
import type { HistoricalStorageEntry } from "@/utils/historicalStorageData";
import type { SparklineDataPoint } from "@/utils/sparklineData";

interface HistoricalHeatmapWrapperProps {
  filterRegion?: string;
  filterDamKey?: keyof HistoricalStorageEntry;
  sparklineData?: SparklineDataPoint[];
  linkHref?: string;
  label?: string;
}

// Renders a placeholder during SSR and on initial client render, then lazily
// loads the real HistoricalHeatmap. This avoids shipping ~1.4 MB of inline-styled
// heatmap cells in the server HTML while keeping the component tree stable
// (no next/dynamic ssr:false which would cause Radix useId hydration mismatches).
export default function HistoricalHeatmapWrapper(props: HistoricalHeatmapWrapperProps) {
  const [Component, setComponent] = useState<React.ComponentType<HistoricalHeatmapWrapperProps> | null>(null);

  useEffect(() => {
    import("./HistoricalHeatmap").then((mod) => setComponent(() => mod.default));
  }, []);

  if (!Component) {
    return <div className="w-full h-64 bg-muted/30 rounded-lg animate-pulse" />;
  }

  return <Component {...props} />;
}

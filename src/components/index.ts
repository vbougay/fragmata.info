
export { default as Header } from './Header';
export { default as ReservoirCard } from './ReservoirCard';
export { default as ReservoirTable } from './ReservoirTable';
export { default as RegionSummary } from './RegionSummary';
export { default as CapacityChart } from './CapacityChart';
export { default as MonthlyInflow } from './MonthlyInflow';
// ReservoirMap must be loaded via ReservoirMapWrapper (dynamic import, ssr: false)
// to avoid "window is not defined" from Leaflet during SSR
// HistoricalHeatmap is also loaded via wrapper (ssr: false) to avoid 2MB+ of
// inline-styled heatmap cells in the server-rendered HTML
export { default as HistoricalHeatmap } from './HistoricalHeatmapWrapper';
export { default as MediaHeader } from './MediaHeader';
export { default as ChurchSilhouette } from './ChurchSilhouette';
export { default as StorageSparkline } from './StorageSparkline';
export { default as Footer } from './Footer';

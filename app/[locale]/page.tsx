import { DashboardClient } from "@/components/DashboardClient";
import {
  yearlyInflowData,
  getReportDate,
  getReservoirsWithForecastDates,
  getRegionTotalsWithForecasts,
  getGrandTotalWithForecast,
  getOctoberBaselineStorage,
  DEFAULT_DATASET_ID,
} from "@/utils/dataManager";
import { calculateYTDInflow, calculateYTDOutflow } from "@/utils/reservoirUtils";

export default function HomePage() {
  const dsId = DEFAULT_DATASET_ID;
  const reservoirs = getReservoirsWithForecastDates(dsId);
  const regionTotals = getRegionTotalsWithForecasts(dsId);
  const grandTotal = getGrandTotalWithForecast(dsId);
  const reportDate = getReportDate(dsId);
  const ytdInflow = calculateYTDInflow(yearlyInflowData(dsId), reportDate);
  const octBaseline = getOctoberBaselineStorage(dsId);
  const ytdOutflow =
    ytdInflow && octBaseline && grandTotal
      ? calculateYTDOutflow(grandTotal, ytdInflow, octBaseline)
      : null;

  return (
    <DashboardClient
      initialReservoirs={reservoirs}
      initialRegionTotals={regionTotals}
      initialGrandTotal={grandTotal}
      initialYtdInflow={ytdInflow}
      initialYtdOutflow={ytdOutflow}
    />
  );
}

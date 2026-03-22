import { DashboardClient } from "@/components/DashboardClient";
import { getDashboardProps } from "@/utils/getDashboardProps";

export default function HomePage() {
  return <DashboardClient initialTab="dashboard" {...getDashboardProps()} />;
}

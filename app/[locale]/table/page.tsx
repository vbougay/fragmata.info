import type { Metadata } from "next";
import { DashboardClient } from "@/components/DashboardClient";
import { getDashboardProps } from "@/utils/getDashboardProps";
import { type Locale } from "@/utils/locale";

const titles: Record<Locale, string> = {
  en: "Reservoir Data Table",
  el: "Πίνακας Δεδομένων",
  ru: "Таблица данных",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { title: `${titles[locale as Locale] ?? titles.en} | Fragmata` };
}

export default function TablePage() {
  return <DashboardClient initialTab="table" {...getDashboardProps()} />;
}

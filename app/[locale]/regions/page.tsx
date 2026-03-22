import type { Metadata } from "next";
import { DashboardClient } from "@/components/DashboardClient";
import { getDashboardProps } from "@/utils/getDashboardProps";
import { type Locale } from "@/utils/locale";

const titles: Record<Locale, string> = {
  en: "Reservoirs by Region",
  el: "Ταμιευτήρες ανά Περιοχή",
  ru: "Водохранилища по регионам",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { title: `${titles[locale as Locale] ?? titles.en} | Fragmata` };
}

export default function RegionsPage() {
  return <DashboardClient initialTab="regions" {...getDashboardProps()} />;
}

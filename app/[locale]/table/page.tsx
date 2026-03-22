import type { Metadata } from "next";
import { DashboardClient } from "@/components/DashboardClient";
import { getDashboardProps } from "@/utils/getDashboardProps";
import { locales, type Locale } from "@/utils/locale";

const siteUrl = "https://fragmata.info";
const path = "/table";

const titles: Record<Locale, string> = {
  en: "Reservoir Data Table",
  el: "Πίνακας Δεδομένων",
  ru: "Таблица данных",
};

const descriptions: Record<Locale, string> = {
  en: "Complete data table of all Cyprus reservoirs with capacity, current storage, inflow, and year-over-year comparison.",
  el: "Πλήρης πίνακας δεδομένων ταμιευτήρων Κύπρου με χωρητικότητα, τρέχουσα αποθήκευση, εισροή και ετήσια σύγκριση.",
  ru: "Полная таблица данных водохранилищ Кипра: ёмкость, текущий объём, приток и сравнение по годам.",
};

function localeUrl(locale: string) {
  return locale === "en" ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = (locale as Locale) in titles ? (locale as Locale) : "en";
  const title = `${titles[lang]} | Fragmata`;
  const description = descriptions[lang];
  const canonical = localeUrl(lang);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, localeUrl(l)]),
        ["x-default", localeUrl("en")],
      ]),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Fragmata",
      type: "website",
      images: [{ url: `${siteUrl}/og-image.png` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/og-image.png`],
    },
  };
}

export default function TablePage() {
  return <DashboardClient initialTab="table" {...getDashboardProps()} />;
}

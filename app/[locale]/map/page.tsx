import type { Metadata } from "next";
import { DashboardClient } from "@/components/DashboardClient";
import { getDashboardProps } from "@/utils/getDashboardProps";
import { locales, type Locale } from "@/utils/locale";

const siteUrl = "https://fragmata.info";
const path = "/map";

const titles: Record<Locale, string> = {
  en: "Reservoir Map",
  el: "Χάρτης Ταμιευτήρων",
  ru: "Карта водохранилищ",
};

const descriptions: Record<Locale, string> = {
  en: "Interactive map of all 21 Cyprus dams and reservoirs showing current water storage levels and locations.",
  el: "Διαδραστικός χάρτης 21 φραγμάτων και ταμιευτήρων Κύπρου με τρέχοντα επίπεδα αποθήκευσης νερού.",
  ru: "Интерактивная карта 21 плотины и водохранилища Кипра с текущими уровнями воды.",
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

export default function MapPage() {
  return <DashboardClient initialTab="map" {...getDashboardProps()} />;
}

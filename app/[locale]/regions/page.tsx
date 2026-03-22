import type { Metadata } from "next";
import { DashboardClient } from "@/components/DashboardClient";
import { getDashboardProps } from "@/utils/getDashboardProps";
import { locales, type Locale } from "@/utils/locale";

const siteUrl = "https://fragmata.info";
const path = "/regions";

const titles: Record<Locale, string> = {
  en: "Reservoirs by Region",
  el: "Ταμιευτήρες ανά Περιοχή",
  ru: "Водохранилища по регионам",
};

const descriptions: Record<Locale, string> = {
  en: "View Cyprus reservoir water levels organized by region: Southern Conveyor, Paphos, Chrysochou, Nicosia, and Recharge dams.",
  el: "Επίπεδα νερού ταμιευτήρων Κύπρου ανά περιοχή: Νότιος Αγωγός, Πάφος, Χρυσοχού, Λευκωσία και φράγματα εμπλουτισμού.",
  ru: "Уровни воды в водохранилищах Кипра по регионам: Южный Конвейер, Пафос, Хрисоху, Никосия и водохранилища пополнения.",
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

export default function RegionsPage() {
  return <DashboardClient initialTab="regions" {...getDashboardProps()} />;
}

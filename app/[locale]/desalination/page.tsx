import type { Metadata } from "next";
import { DesalinationClient } from "@/components/DesalinationClient";
import { locales, type Locale } from "@/utils/locale";

const siteUrl = "https://fragmata.info";
const path = "/desalination";

const titles: Record<Locale, string> = {
  en: "Desalination in Cyprus: Plants, Weekly Output and Plans",
  el: "Αφαλάτωση στην Κύπρο: Μονάδες, Εβδομαδιαία Παραγωγή και Σχέδια",
  ru: "Опреснение на Кипре: станции, недельная выработка и планы",
};

const descriptions: Record<Locale, string> = {
  en: "Every desalination plant in Cyprus, running and planned: capacity, status, weekly output from the Water Development Department, and how much of the island's tap water comes from the sea.",
  el: "Όλες οι μονάδες αφαλάτωσης της Κύπρου, σε λειτουργία και σχεδιαζόμενες: δυναμικότητα, κατάσταση, εβδομαδιαία παραγωγή από το Τμήμα Αναπτύξεως Υδάτων και πόσο νερό της βρύσης έρχεται από τη θάλασσα.",
  ru: "Все опреснительные станции Кипра, действующие и планируемые: мощность, статус, недельная выработка по данным Департамента водного развития и доля воды из моря в кране.",
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

export default function DesalinationPage() {
  return <DesalinationClient />;
}

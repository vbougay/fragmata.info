import type { Metadata } from "next";
import { readdirSync } from "fs";
import { join } from "path";
import { ZenClient } from "@/components/ZenClient";
import { getZenModel } from "@/utils/zenUtils";
import { getReportDate, DEFAULT_DATASET_ID } from "@/utils/dataManager";
import { locales, type Locale } from "@/utils/locale";

const siteUrl = "https://fragmata.info";
const path = "/zen";

const titles: Record<Locale, string> = {
  en: "Zen Mode — Cyprus Water Level Live",
  el: "Λειτουργία Ζεν — Ζωντανή Στάθμη Νερού Κύπρου",
  ru: "Дзен-режим — Уровень воды Кипра в реальном времени",
};

const descriptions: Record<Locale, string> = {
  en: "One live number: total Cyprus reservoir storage changing in real time, extrapolated from the latest WDD bulletin, the 4-week trend and the seasonal forecast model.",
  el: "Ένας ζωντανός αριθμός: η συνολική αποθήκευση νερού της Κύπρου σε πραγματικό χρόνο, βάσει του τελευταίου δελτίου, της τάσης 4 εβδομάδων και του εποχικού μοντέλου.",
  ru: "Одно живое число: суммарный запас воды в водохранилищах Кипра в реальном времени — на основе последнего бюллетеня, тренда за 4 недели и сезонной модели.",
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
  // Dedicated per-locale card, cache-busted on each data update.
  const ogImage = `${siteUrl}/og/zen.${lang}.png?v=${getReportDate(DEFAULT_DATASET_ID)}`;

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
      images: [{ url: ogImage, width: 1200, height: 630, type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// Background clips live in public/zen-bg (baked into the static page at build).
function getZenVideos(): string[] {
  try {
    return readdirSync(join(process.cwd(), "public", "zen-bg"))
      .filter((f) => f.endsWith(".mp4"))
      .sort()
      .map((f) => `/zen-bg/${f}`);
  } catch {
    return [];
  }
}

export default async function ZenPage() {
  const model = await getZenModel();
  return <ZenClient model={model} videos={getZenVideos()} />;
}

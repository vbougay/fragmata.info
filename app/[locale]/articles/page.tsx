import type { Metadata } from "next";
import { ArticleListClient } from "@/components/ArticleClient";
import { locales, isValidLocale, type Locale } from "@/utils/locale";
import { getAllArticles } from "@/utils/articles";

const siteUrl = "https://fragmata.info";

const pageMeta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Articles | Fragmata",
    description: "Articles and analysis about Cyprus reservoir water levels, drought forecasts, and hydrological data.",
  },
  el: {
    title: "Άρθρα | Fragmata",
    description: "Άρθρα και αναλύσεις σχετικά με τα επίπεδα νερού των ταμιευτήρων Κύπρου, προβλέψεις ξηρασίας και υδρολογικά δεδομένα.",
  },
  ru: {
    title: "Статьи | Fragmata",
    description: "Статьи и аналитика о состоянии водохранилищ Кипра, прогнозах засухи и гидрологических данных.",
  },
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = isValidLocale(locale) ? locale : "en";
  const { title, description } = pageMeta[lang];
  const localeUrl = (l: string, p: string) =>
    l === "en" ? `${siteUrl}${p}` : `${siteUrl}/${l}${p}`;
  const canonical = localeUrl(lang, "/articles");

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, localeUrl(l, "/articles")]),
        ["x-default", localeUrl("en", "/articles")],
      ]),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Fragmata",
      type: "website",
      images: [{ url: "/og-image.png" }],
    },
  };
}

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = isValidLocale(locale) ? locale : "en";
  const articles = getAllArticles();

  return (
    <ArticleListClient
      articles={articles.map((a) => ({
        slug: a.slug,
        title: a.title[lang],
        description: a.description[lang],
        date: a.date,
        author: a.author,
      }))}
    />
  );
}

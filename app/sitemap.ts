import type { MetadataRoute } from "next";
import { getAllRegionSlugs, getAllDamSlugs } from "@/utils/slugs";
import { getAllArticleSlugs, getArticleBySlug, getAllArticles } from "@/utils/articles";
import { DEFAULT_DATASET_ID } from "@/utils/dataManager";
import { parseReportDate } from "@/utils/reservoirUtils";

const siteUrl = "https://fragmata.info";

const pages = ["", "/regions", "/map", "/table"];
const locales = ["en", "el", "ru"] as const;

function datasetIdToDate(id: string): Date {
  const parsed = parseReportDate(id);
  if (!parsed) return new Date();
  return new Date(parsed.year, parsed.month - 1, parsed.day);
}

const latestDataDate = datasetIdToDate(DEFAULT_DATASET_ID);

function localeUrl(locale: string, path: string) {
  return locale === "en"
    ? `${siteUrl}${path}`
    : `${siteUrl}/${locale}${path}`;
}

function makeEntry(path: string, priority: number, lastModified: Date): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: localeUrl(locale, path),
    lastModified,
    changeFrequency: "daily" as const,
    priority,
    alternates: {
      languages: Object.fromEntries([
        ...locales.map((l) => [l, localeUrl(l, path)]),
        ["x-default", localeUrl("en", path)],
      ]),
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = pages.flatMap((path) =>
    makeEntry(path, path === "" ? 1 : 0.8, latestDataDate)
  );

  const regionPages = getAllRegionSlugs().flatMap((slug) =>
    makeEntry(`/region/${slug}`, 0.7, latestDataDate)
  );

  const damPages = getAllDamSlugs().flatMap((slug) =>
    makeEntry(`/dam/${slug}`, 0.7, latestDataDate)
  );

  const latestArticle = getAllArticles()[0];
  const latestArticleDate = latestArticle ? new Date(latestArticle.date) : latestDataDate;
  const articleListPage = makeEntry("/articles", 0.5, latestArticleDate);

  const articlePages = getAllArticleSlugs().flatMap((slug) => {
    const article = getArticleBySlug(slug);
    const date = article ? new Date(article.date) : latestDataDate;
    return makeEntry(`/articles/${slug}`, 0.6, date);
  });

  return [...mainPages, ...regionPages, ...damPages, ...articleListPage, ...articlePages];
}

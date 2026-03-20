import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { promises as fs } from "fs";
import path from "path";
import { ArticleClient } from "@/components/ArticleClient";
import { locales, isValidLocale } from "@/utils/locale";
import { getAllArticleSlugs, getArticleBySlug } from "@/utils/articles";

const siteUrl = "https://fragmata.info";

function readArticleMd(slug: string, lang: string): Promise<string | null> {
  const mdPath = path.join(process.cwd(), "content", "articles", slug, `${lang}.md`);
  return fs.readFile(mdPath, "utf-8").catch(() => null);
}

function extractDescription(markdown: string): string {
  const lines = markdown.split("\n");
  let subtitle = "";
  let firstParagraph = "";
  let pastSeparator = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!subtitle && /^\*\*.+\*\*$/.test(trimmed)) {
      subtitle = trimmed.replace(/\*\*/g, "");
      continue;
    }
    if (trimmed === "---") {
      pastSeparator = true;
      continue;
    }
    if (pastSeparator && !firstParagraph && trimmed && !trimmed.startsWith("#") && !trimmed.startsWith("{{")) {
      firstParagraph = trimmed;
      break;
    }
  }

  const combined = subtitle && firstParagraph
    ? `${subtitle} ${firstParagraph}`
    : subtitle || firstParagraph;
  return combined.length > 300 ? combined.slice(0, 297) + "..." : combined;
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang = isValidLocale(locale) ? locale : "en";
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const markdown = await readArticleMd(slug, lang);
  const title = `${article.title[lang]} | Fragmata`;
  const description = markdown ? extractDescription(markdown) : article.description[lang];
  const localeUrl = (l: string, p: string) =>
    l === "en" ? `${siteUrl}${p}` : `${siteUrl}/${l}${p}`;
  const canonical = localeUrl(lang, `/articles/${slug}`);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, localeUrl(l, `/articles/${slug}`)]),
        ["x-default", localeUrl("en", `/articles/${slug}`)],
      ]),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Fragmata",
      type: "article",
      images: [{ url: "/og-image.png" }],
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const lang = isValidLocale(locale) ? locale : "en";
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const markdown = await readArticleMd(slug, lang);
  if (!markdown) notFound();

  return (
    <ArticleClient
      markdown={markdown}
      title={article.title[lang]}
      date={article.date}
      dataSetId={article.dataSetId}
    />
  );
}

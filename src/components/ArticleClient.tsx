"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { Header } from "@/components";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/utils/translations";
import { defaultLocale } from "@/utils/locale";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Calendar, User } from "lucide-react";

interface ArticleClientProps {
  markdown: string;
  title: string;
  date: string;
  author: string;
}

export function ArticleClient({ markdown, title, date, author }: ArticleClientProps) {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const localePath = (path: string) =>
    language === defaultLocale ? (path || "/") : `/${language}${path}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 mesh-background transition-colors duration-300">
      <Header />

      <main className="container mx-auto px-4 pb-16 max-w-4xl">
        <Breadcrumb className="mb-6 mt-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={localePath("/")}>{t("cyprus")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={localePath("/articles")}>{t("articles")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1">{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {date}
          </span>
          <span className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" />
            {author}
          </span>
        </div>

        <article className="prose prose-base dark:prose-invert max-w-none prose-headings:text-foreground prose-headings:mt-4 prose-headings:mb-2 prose-p:text-foreground/90 prose-p:my-2 prose-ul:my-2 prose-li:my-0.5 prose-table:text-sm prose-th:text-left prose-strong:text-foreground prose-a:text-water-600 dark:prose-a:text-water-400 prose-hr:my-4">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </article>
      </main>

      <Footer hideLinks />
    </div>
  );
}

interface ArticleListItem {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
}

interface ArticleListClientProps {
  articles: ArticleListItem[];
}

export function ArticleListClient({ articles }: ArticleListClientProps) {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const localePath = (path: string) =>
    language === defaultLocale ? (path || "/") : `/${language}${path}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 mesh-background transition-colors duration-300">
      <Header />

      <main className="container mx-auto px-4 pb-16 max-w-4xl">
        <Breadcrumb className="mb-6 mt-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={localePath("/")}>{t("cyprus")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{t("articles")}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-3xl font-bold mb-8 text-foreground">{t("articles")}</h1>

        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={localePath(`/articles/${article.slug}`)}
              className="block group"
            >
              <article className="rounded-xl border border-border/50 bg-white/70 dark:bg-gray-900/70 p-6 shadow-sm transition-all hover:shadow-md hover:border-water-300 dark:hover:border-water-700">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    {article.author}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-foreground group-hover:text-water-600 dark:group-hover:text-water-400 transition-colors mb-2">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {article.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <Footer hideLinks />
    </div>
  );
}

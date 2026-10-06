"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { WeeklyMixChart, YearlySupplyChart, weeklyMix } from '@/components/ArticleWaterCharts';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { defaultLocale } from '@/utils/locale';
import { DESAL_PLANTS, operatingCapacity, plannedNetCapacity } from '@/utils/desalinationData';
import { WEEKLY_BULLETINS } from '@/utils/desalinationWeekly';
import { DESAL_TEXT, statusLabel } from '@/utils/desalinationText';
import { getArticleBySlug } from '@/utils/articles';

const DesalinationMap = dynamic(() => import('@/components/DesalinationMap'), {
  ssr: false,
  loading: () => <div className="w-full h-[440px] rounded-lg bg-muted animate-pulse" />,
});

const ARTICLE_SLUG = '2026-10-08-cyprus-water-ins-and-outs';
const MONTHS = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  el: ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'],
  ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
};

export function DesalinationClient() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const tx = DESAL_TEXT[language];
  const localePath = (path: string) => (language === defaultLocale ? path || '/' : `/${language}${path}`);
  const fmtDay = (iso: string) => `${+iso.slice(8, 10)} ${MONTHS[language][+iso.slice(5, 7) - 1]}`;
  const num = (v: number) => v.toLocaleString(language === 'en' ? 'en' : language === 'el' ? 'el' : 'ru');

  const weeks = weeklyMix();
  const latest = weeks[weeks.length - 1];
  const latestBulletin = [...WEEKLY_BULLETINS].reverse().find(w => w.desalination);
  const running = DESAL_PLANTS.filter(p => p.status === 'operating');
  const article = getArticleBySlug(ARTICLE_SLUG);

  const tiles = [
    { label: tx.inService, value: num(operatingCapacity()), sub: tx.inServiceSub(running.filter(p => p.kind === 'permanent').length, running.filter(p => p.kind === 'mobile').length) },
    { label: tx.share, value: latest ? `${Math.round(latest.share * 100)}%` : '–', sub: latest ? tx.shareSub(fmtDay(latest.weekEnding)) : '' },
    { label: tx.planned, value: `+${num(plannedNetCapacity())}`, sub: tx.plannedSub },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 mesh-background transition-colors duration-300">
      <Header hideDateNav />

      <main className="container mx-auto px-4 pb-16 max-w-5xl">
        <Breadcrumb className="mb-6 mt-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={localePath('/')}>{t('cyprus')}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{tx.nav}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-3xl font-bold mb-3 text-foreground">{tx.title}</h1>
        <p className="text-base leading-relaxed text-muted-foreground mb-6 max-w-3xl">{tx.intro}</p>

        {article && (
          <Link href={localePath(`/articles/${ARTICLE_SLUG}`)} className="inline-flex items-center gap-2 mb-8 text-sm text-water-600 dark:text-water-400 hover:underline">
            <FileText className="h-4 w-4" />
            {tx.readArticle}
          </Link>
        )}

        <div className="grid gap-4 sm:grid-cols-3 mb-8">
          {tiles.map(tile => (
            <Card key={tile.label} className="glass-card rounded-2xl">
              <CardContent className="p-5">
                <p className="text-sm text-muted-foreground">{tile.label}</p>
                <p className="mt-1 text-3xl font-semibold tabular-nums text-foreground">{tile.value}</p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{tile.sub}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-8">
          <WeeklyMixChart />
          <YearlySupplyChart />

          <Card className="glass-card rounded-2xl">
            <CardContent className="p-4 sm:p-5">
              <h2 className="text-base font-semibold text-foreground mb-3">{tx.mapTitle}</h2>
              <DesalinationMap />
              <p className="mt-3 text-sm text-muted-foreground">{tx.mapNote}</p>
            </CardContent>
          </Card>

          <Card className="glass-card rounded-2xl">
            <CardContent className="p-4 sm:p-5">
              <h2 className="text-base font-semibold text-foreground mb-3">{tx.tableTitle}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-muted-foreground">
                      <th className="py-2 pr-4 font-medium">{tx.plant}</th>
                      <th className="py-2 pr-4 font-medium">{tx.type}</th>
                      <th className="py-2 pr-4 font-medium text-right">{tx.capacity}, {tx.perDay}</th>
                      <th className="py-2 pr-4 font-medium">{tx.status}</th>
                      <th className="py-2 pr-4 font-medium">{tx.startCol}</th>
                      <th className="py-2 font-medium text-right">{tx.lastWeekCol}{latestBulletin ? `, ${fmtDay(latestBulletin.weekEnding)}` : ''}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DESAL_PLANTS.map(p => {
                      const out = p.bulletinKey ? latestBulletin?.desalination?.[p.bulletinKey] : undefined;
                      return (
                        <tr key={p.id} className="border-b border-border/50 last:border-0">
                          <td className="py-2 pr-4 text-foreground">
                            <a href={p.source} target="_blank" rel="noopener noreferrer" className="hover:underline">{p.name[language]}</a>
                          </td>
                          <td className="py-2 pr-4 text-muted-foreground">{p.kind === 'permanent' ? tx.permanent : tx.mobile}</td>
                          <td className="py-2 pr-4 text-right tabular-nums">{num(p.capacity)}</td>
                          <td className="py-2 pr-4">{statusLabel(p.status, language)}</td>
                          <td className="py-2 pr-4 tabular-nums">{p.start}</td>
                          <td className="py-2 text-right tabular-nums">{out !== undefined ? num(out) : ''}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">{tx.netNote}</p>
            </CardContent>
          </Card>

          <p className="text-xs leading-relaxed text-muted-foreground">{tx.sources}</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

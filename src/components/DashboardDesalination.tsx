import React from 'react';
import Link from 'next/link';
import { Waves, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { WeeklyMixChart, weeklyMix } from '@/components/ArticleWaterCharts';
import { useDataContext } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';
import { parseReportDate } from '@/utils/reservoirUtils';
import { PLANNED_AS_OF, plannedNetCapacity } from '@/utils/desalinationData';
import { DESAL_TEXT } from '@/utils/desalinationText';
import { defaultLocale } from '@/utils/locale';

const MONTHS = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  el: ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'],
  ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
};

/**
 * Desalination section of the dashboard. Follows the date picker: it shows the latest weekly
 * bulletin on or before the selected date, and nothing before the first bulletin with plant output.
 */
export function DashboardDesalination() {
  const { currentDataSetId } = useDataContext();
  const { language } = useLanguage();
  const tx = DESAL_TEXT[language];

  const d = parseReportDate(currentDataSetId);
  const asOf = d ? `${d.year}-${String(d.month).padStart(2, '0')}-${String(d.day).padStart(2, '0')}` : undefined;
  const weeks = weeklyMix(asOf);
  if (!weeks.length) return null;

  const week = weeks[weeks.length - 1];
  const num = (v: number) => (Math.round(v / 1000) * 1000).toLocaleString(language);
  const fmtDay = (iso: string) => `${+iso.slice(8, 10)} ${MONTHS[language][+iso.slice(5, 7) - 1]}`;
  const href = language === defaultLocale ? '/desalination' : `/${language}/desalination`;

  const tiles = [
    { label: tx.share, value: `${Math.round(week.share * 100)}%`, sub: tx.shareSub(fmtDay(week.weekEnding)) },
    { label: tx.desalDay, value: num(week.desal), sub: tx.desalDaySub },
    { label: tx.damsDay, value: num(week.dams), sub: tx.damsDaySub },
    ...(!asOf || asOf >= PLANNED_AS_OF
      ? [{ label: tx.planned, value: `+${num(plannedNetCapacity())}`, sub: tx.plannedSub }]
      : []),
  ];

  return (
    <section>
      <h3 className="flex items-center gap-2 text-lg md:text-xl font-semibold tracking-tight mb-2">
        <Waves className="h-5 w-5 text-water-500 dark:text-water-400" />
        <span>{tx.nav}</span>
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground mb-4">{tx.dashIntro}</p>

      <div className={`grid grid-cols-2 gap-3 md:gap-4 mb-4 ${tiles.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
        {tiles.map((tile, i) => (
          <Card key={tile.label} className={`glass-card rounded-2xl ${tiles.length === 3 && i === 0 ? 'col-span-2 md:col-span-1' : ''}`}>
            <CardContent className="p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-muted-foreground">{tile.label}</p>
              <p className="mt-1 text-xl sm:text-2xl font-bold tabular-nums text-foreground">{tile.value}</p>
              <p className="mt-1 text-[11px] sm:text-xs leading-snug text-muted-foreground">{tile.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {weeks.length > 1 && <WeeklyMixChart upTo={asOf} brief />}

      <Link
        href={href}
        className="inline-flex items-center gap-2 mt-3 text-sm text-water-600 dark:text-water-400 hover:underline group"
      >
        {tx.more}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </section>
  );
}

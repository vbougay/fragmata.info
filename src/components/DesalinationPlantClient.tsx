"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { CalendarDays, Gauge, Layers, MapPin, Activity, Repeat } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { PlantWeeklyChart } from '@/components/ArticleWaterCharts';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { defaultLocale } from '@/utils/locale';
import { DESAL_PLANTS, effectiveCapacity, getPlant } from '@/utils/desalinationData';
import { WEEKLY_BULLETINS } from '@/utils/desalinationWeekly';
import { DESAL_TEXT, DISTRICT, PLANT_TEXT, statusLabel } from '@/utils/desalinationText';

const DesalinationMap = dynamic(() => import('@/components/DesalinationMap'), {
  ssr: false,
  loading: () => <div className="w-full h-[320px] rounded-lg bg-muted animate-pulse" />,
});

const MONTHS = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  el: ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'],
  ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
};
// Month-and-year for "until September 2027"; Greek takes the accusative after "ως τον".
const MONTH_YEAR = {
  en: MONTHS.en,
  el: ['Ιανουάριο', 'Φεβρουάριο', 'Μάρτιο', 'Απρίλιο', 'Μάιο', 'Ιούνιο', 'Ιούλιο', 'Αύγουστο', 'Σεπτέμβριο', 'Οκτώβριο', 'Νοέμβριο', 'Δεκέμβριο'],
  ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
};

interface Props {
  id: string;
  aboutMd: Partial<Record<'en' | 'el' | 'ru', string>>;
}

export function DesalinationPlantClient({ id, aboutMd }: Props) {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const tx = DESAL_TEXT[language];
  const px = PLANT_TEXT[language];
  const plant = getPlant(id)!;

  const localePath = (path: string) => (language === defaultLocale ? path || '/' : `/${language}${path}`);
  const num = (v: number) => v.toLocaleString(language);
  const fmtDay = (iso: string) => `${+iso.slice(8, 10)} ${MONTHS[language][+iso.slice(5, 7) - 1]}`;
  const pct = (v: number) => (v > 0 && v < 0.005 ? '<1%' : `${Math.round(v * 100)}%`);
  const fmtMonth = (ym: string) => `${MONTH_YEAR[language][+ym.slice(5, 7) - 1]} ${ym.slice(0, 4)}`;

  const capacity = effectiveCapacity(plant);
  const replaced = plant.replaces ? getPlant(plant.replaces) : undefined;
  const latest = plant.bulletinKey
    ? [...WEEKLY_BULLETINS].reverse().find(w => w.desalination?.[plant.bulletinKey!] !== undefined)
    : undefined;
  const out = latest?.desalination?.[plant.bulletinKey!];
  const allDesal = latest ? Object.values(latest.desalination!).reduce((a, v) => a + v, 0) : 0;
  const about = aboutMd[language] ?? aboutMd.en;
  const hasChart = !!plant.bulletinKey
    && WEEKLY_BULLETINS.filter(w => w.desalination?.[plant.bulletinKey!] !== undefined).length > 1;

  const facts = [
    { icon: Layers, label: tx.type, value: plant.kind === 'permanent' ? tx.permanent : tx.mobile },
    {
      icon: Gauge, label: tx.capacity,
      value: `${num(plant.capacity)} ${tx.perDay}${plant.tempExtra ? ` ${px.tempExtra(num(plant.tempExtra.capacity), fmtMonth(plant.tempExtra.until))}` : ''}`,
    },
    // For running plants "In service since" already says it.
    ...(plant.status !== 'operating' ? [{ icon: Activity, label: tx.status, value: statusLabel(plant.status, language) }] : []),
    ...(plant.start !== '–' ? [{ icon: CalendarDays, label: plant.status === 'operating' ? tx.since : tx.expected, value: plant.start }] : []),
    { icon: MapPin, label: px.district, value: DISTRICT[plant.district][language] },
  ];

  const tiles = out !== undefined && latest ? [
    { label: px.output, value: num(out < 1000 ? Math.round(out / 10) * 10 : Math.round(out / 100) * 100), sub: px.outputSub(fmtDay(latest.weekEnding)) },
    { label: px.utilisation, value: pct(out / capacity), sub: px.utilisationSub(num(capacity)) },
    { label: px.shareOfDesal, value: pct(out / allDesal), sub: px.shareOfDesalSub },
  ] : [];

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
              <BreadcrumbLink href={localePath('/desalination')}>{tx.nav}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{plant.name[language]}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <p className="text-sm font-medium text-water-600 dark:text-water-400">{px.kindLine(plant.kind === 'permanent')}</p>
        <h1 className="text-3xl font-bold mt-1 mb-5 text-foreground">{plant.name[language]}</h1>

        <section aria-label={tx.title} className="mb-8 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-md px-4 py-2.5">
          <dl className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-1.5">
                <Icon className="h-4 w-4 text-water-500 dark:text-water-400 flex-shrink-0" aria-hidden="true" />
                <dt className="text-muted-foreground">{label}:</dt>
                <dd className="font-medium text-foreground">{value}</dd>
              </div>
            ))}
            {replaced && (
              <div className="flex items-center gap-1.5">
                <Repeat className="h-4 w-4 text-water-500 dark:text-water-400 flex-shrink-0" aria-hidden="true" />
                <dt className="text-muted-foreground">{px.replaces}:</dt>
                <dd className="font-medium">
                  <Link href={localePath(`/desalination/${replaced.id}`)} className="text-water-600 dark:text-water-400 hover:underline">{replaced.name[language]}</Link>
                </dd>
              </div>
            )}
          </dl>
        </section>

        {tiles.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
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
        )}

        <div className="space-y-8">
          {hasChart && (
            <PlantWeeklyChart
              plantKey={plant.bulletinKey!}
              capacity={capacity}
              title={px.chartTitle}
              subtitle={px.chartSub(num(capacity)) + px.noAug}
              source={px.chartSource}
            />
          )}
          {plant.status === 'operating' && !plant.bulletinKey && (
            <p className="text-sm text-muted-foreground">{px.notInBulletin}</p>
          )}

          {about && (
            <section className="rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-md px-5 py-5 md:px-8 md:py-6">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-3">{px.about}</h2>
              <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground [&>p]:mb-3 prose-a:text-water-600 dark:prose-a:text-water-400">
                <ReactMarkdown>{about}</ReactMarkdown>
              </div>
            </section>
          )}

          {plant.coords && (
            <Card className="glass-card rounded-2xl">
              <CardContent className="p-4 sm:p-5">
                <h2 className="text-base font-semibold text-foreground mb-3">{px.location}</h2>
                <DesalinationMap focus={{ id: plant.id, lat: plant.coords.lat, lng: plant.coords.lng }} />
                {plant.coords.approx && <p className="mt-3 text-sm italic text-muted-foreground">{tx.approx}</p>}
              </CardContent>
            </Card>
          )}

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">{px.others}</h2>
            <div className="flex flex-wrap gap-2">
              {DESAL_PLANTS.filter(p => p.id !== plant.id).map(p => (
                <Link
                  key={p.id}
                  href={localePath(`/desalination/${p.id}`)}
                  className="rounded-full border border-border bg-white/60 dark:bg-gray-900/60 px-3 py-1 text-sm text-foreground hover:border-water-500 hover:text-water-600 dark:hover:text-water-400 transition-colors"
                >
                  {p.name[language]}
                </Link>
              ))}
            </div>
          </section>

          <p className="text-xs leading-relaxed text-muted-foreground">
            {px.source}: <a href={plant.source} target="_blank" rel="noopener noreferrer" className="underline hover:text-water-600 dark:hover:text-water-400">{new URL(plant.source).hostname.replace(/^www\./, '')}</a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

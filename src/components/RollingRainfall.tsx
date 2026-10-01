"use client";

import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CloudRain, ArrowRight, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { kairikaUrl, trackKairikaClick } from '@/utils/kairika';
import type { Locale } from '@/utils/locale';

const RAIN_SEASON_URL = 'https://kairika.info/api/v1/rain/season';
const FETCH_TIMEOUT_MS = 10_000;
const DAY_MS = 86_400_000;

const LOCALE_TAG: Record<Locale, string> = { en: 'en-GB', el: 'el-GR', ru: 'ru-RU' };

interface YearPoint {
  ms: number;
  rain: number; // cumulative mm since the start of the 12-month window
  normal: number; // cumulative mm
}

// The 365 days to throughDate, as served in the endpoint's `rollingYear`. The
// season-to-date figure is 0 mm against a 0 mm normal on 1 Oct and swings wildly
// for weeks; over a full year the percentage is meaningful from day one.
interface RainYear {
  throughMs: number;
  cumulativeMm: number;
  normalMm: number;
  pctOfNormal: number;
  normalPeriod: string; // e.g. "1991–2020"
  points: YearPoint[];
}

type RainState =
  | { status: 'loading' }
  | { status: 'error' }
  | { status: 'ready'; year: RainYear };

const isNum = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);
const isDate = (v: unknown): v is string => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v);

// Returns null for the API's { error, status } body and for anything else that
// doesn't look like a rolling year, so the section hides instead of rendering half a payload.
function parseYear(json: unknown): RainYear | null {
  const body = json as { rollingYear?: Record<string, unknown>; season?: { baselines?: Record<string, unknown> } } | null;
  const r = body?.rollingYear;
  const normalPeriod = body?.season?.baselines?.normal;
  if (!r || !isDate(r.fromDate) || !isDate(r.throughDate) || !Array.isArray(r.weekly)) return null;
  if (!isNum(r.cumulativeMm) || !isNum(r.normalMm) || !isNum(r.pctOfNormal)) return null;
  if (typeof normalPeriod !== 'string') return null;

  const fromMs = Date.parse(r.fromDate);
  const points: YearPoint[] = r.weekly
    .filter((p) => isNum(p?.i) && isNum(p?.cur) && isNum(p?.normal))
    .map((p) => ({ ms: fromMs + p.i * DAY_MS, rain: p.cur, normal: p.normal }))
    .sort((a, b) => a.ms - b.ms);
  if (points.length < 2) return null;

  return {
    throughMs: Date.parse(r.throughDate),
    cumulativeMm: r.cumulativeMm,
    normalMm: r.normalMm,
    pctOfNormal: r.pctOfNormal,
    normalPeriod,
    points,
  };
}

// First day of every month inside the window.
function monthTicks(fromMs: number, toMs: number): number[] {
  const from = new Date(fromMs);
  const ticks: number[] = [];
  for (let m = from.getUTCMonth(); ; m++) {
    const ms = Date.UTC(from.getUTCFullYear(), m, 1);
    if (ms > toMs) return ticks;
    if (ms >= fromMs) ticks.push(ms);
  }
}

const formatDay = (ms: number, language: Locale) =>
  new Date(ms).toLocaleDateString(LOCALE_TAG[language], { day: 'numeric', month: 'short', timeZone: 'UTC' });

const formatMonth = (ms: number, language: Locale) =>
  new Date(ms).toLocaleDateString(LOCALE_TAG[language], { month: 'short', timeZone: 'UTC' });

// Same blue / yellow / red classes StatCardGrid uses for fill percentages.
function pctColor(pct: number): string {
  if (pct >= 100) return 'text-blue-600 dark:text-blue-400';
  if (pct >= 70) return 'text-yellow-600 dark:text-yellow-400';
  return 'text-red-600 dark:text-red-400';
}

// Dashboard tabs unmount their content, so keep the result across tab switches.
let cachedYear: RainYear | null = null;

const RollingRainfall: React.FC = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [state, setState] = useState<RainState>(() =>
    cachedYear ? { status: 'ready', year: cachedYear } : { status: 'loading' }
  );

  // Fetched in the browser: the site is static and rebuilt only when reservoir data
  // changes, so a build-time fetch would freeze the rain figure between rebuilds.
  useEffect(() => {
    if (cachedYear) return;
    let cancelled = false;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    fetch(RAIN_SEASON_URL, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (cancelled) return;
        const year = parseYear(json);
        if (year) cachedYear = year;
        setState(year ? { status: 'ready', year } : { status: 'error' });
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'error' });
      })
      .finally(() => clearTimeout(timer));
    return () => {
      cancelled = true;
      clearTimeout(timer);
      controller.abort();
    };
  }, []);

  if (state.status === 'error') return null;

  const year = state.status === 'ready' ? state.year : null;
  const trackerUrl = kairikaUrl(language, '/rain');
  const unit = t('rainUnit');
  const normalLabel = year ? t('rainNormal').replace('{period}', year.normalPeriod) : '';

  return (
    <Card
      id="rain"
      className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border border-gray-200 dark:border-gray-800 p-1 animate-fade-in"
      aria-busy={!year}
    >
      <CardHeader className="pb-2 px-3 sm:px-6">
        <CardTitle className="text-lg md:text-xl flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="flex items-center gap-2">
            <CloudRain className="h-5 w-5 text-water-500 dark:text-water-400" />
            <span>{t('rainYearTitle')}</span>
          </div>
          {/* No noreferrer: Kairika's analytics should see these visits as coming from Fragmata */}
          <a
            href={trackerUrl}
            target="_blank"
            rel="noopener"
            onClick={() => trackKairikaClick('dashboard', trackerUrl)}
            className="inline-flex items-center gap-1 text-sm font-medium tracking-normal text-water-600 dark:text-water-400 hover:underline"
          >
            {t('rainSeasonTracker')}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </CardTitle>
      </CardHeader>

      <CardContent className="px-0 sm:px-6">
        {year ? (
          <>
            <div className="px-3 sm:px-0 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <div className="text-2xl font-bold">
                <span className={pctColor(year.pctOfNormal)}>{Math.round(year.pctOfNormal)}%</span>{' '}
                <span className="text-sm font-medium text-muted-foreground">
                  {t('rainOfNormal').replace('{period}', year.normalPeriod)}
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="whitespace-nowrap">
                  {Math.round(year.cumulativeMm)} {unit}{' '}
                  {t('rainTo').replace('{date}', formatDay(year.throughMs, language))}
                </span>
                {' · '}
                <span className="whitespace-nowrap">
                  {t('rainNormalWord')} {Math.round(year.normalMm)} {unit}
                </span>
              </div>
            </div>

            <div className="h-64 md:h-72 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={year.points} margin={{ top: 10, right: 5, left: 0, bottom: 30 }}>
                  <defs>
                    <linearGradient id="rainYearGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="ms"
                    type="number"
                    domain={['dataMin', 'dataMax']}
                    ticks={monthTicks(year.points[0].ms, year.throughMs)}
                    tickFormatter={(ms: number) => formatMonth(ms, language)}
                    angle={-45}
                    textAnchor="end"
                    interval={0}
                    tickMargin={10}
                    tick={{ fontSize: 10, fill: 'currentColor' }}
                    stroke="currentColor"
                    className="text-gray-600 dark:text-gray-400"
                  />
                  <YAxis
                    tick={{ fontSize: 12, fill: 'currentColor' }}
                    stroke="currentColor"
                    className="text-gray-600 dark:text-gray-400"
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      const point = payload?.[0]?.payload as YearPoint | undefined;
                      if (!active || !point) return null;
                      return (
                        <div className="bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-700 rounded shadow-md">
                          <p className="font-medium text-foreground">{formatDay(point.ms, language)}</p>
                          <p style={{ color: '#0ea5e9' }} className="text-sm">
                            {t('rainLast12')}: {Math.round(point.rain)} {unit}
                          </p>
                          <p style={{ color: '#94a3b8' }} className="text-sm">
                            {normalLabel}: {Math.round(point.normal)} {unit}
                          </p>
                        </div>
                      );
                    }}
                  />
                  <Area type="monotone" dataKey="rain" stroke="#0ea5e9" strokeWidth={2.5} fill="url(#rainYearGradient)" animationDuration={1000} />
                  <Area type="monotone" dataKey="normal" stroke="#94a3b8" strokeWidth={2} strokeDasharray="6 3" fill="none" animationDuration={1000} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-2 text-xs px-3 sm:px-0">
              <div className="flex items-center gap-1.5">
                <span className="inline-block w-4 h-0.5 bg-[#0ea5e9] rounded" />
                <span className="text-muted-foreground">{t('rainLast12')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block w-4" style={{ borderTop: '2px dashed #94a3b8', height: 0 }} />
                <span className="text-muted-foreground">{normalLabel}</span>
              </div>
            </div>
          </>
        ) : (
          <div className="mx-3 sm:mx-0 h-[23rem] md:h-[25rem] bg-muted/30 rounded-lg animate-pulse" />
        )}

        <div className="flex items-start gap-1.5 mt-3 px-2 text-[10px] text-muted-foreground">
          <Info className="h-3 w-3 mt-0.5 shrink-0" />
          <span>
            {t('rainModelNote')}{' '}
            <span className="whitespace-nowrap">
              {t('rainDataSource')}: kairika.info ·{' '}
              <a
                href="https://open-meteo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-2 hover:text-water-600 dark:hover:text-water-400 transition-colors"
              >
                Open-Meteo
              </a>{' '}
              (CC BY 4.0)
            </span>
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default RollingRainfall;

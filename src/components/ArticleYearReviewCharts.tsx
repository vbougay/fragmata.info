"use client";

/**
 * Charts for the "Happy New Hydrological Year" review of 2025/26.
 *
 * Storage, inflow and the outlook are computed at render time from the
 * historical series and the article's dataset (see utils/yearReviewStats.ts).
 * Official DoM rainfall is a static table there. Plain SVG, same
 * editorial-figure approach as ArticleSummerCharts and ArticleStormCharts.
 */

import React, { useMemo, useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChartFrame } from '@/components/ChartFrame';
import { useDataContext } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';
import {
  REVIEW_YEAR,
  hydroYearTrace,
  hydroYearBand,
  clipBand,
  damYearRanges,
  DOM_RAIN_2025_26,
  reviewInflow,
  outlookReplay,
  yearNumbers,
  DOM_YEAR_TOTAL,
  ARMINOU_TO_KOURIS_2025_26,
  DAM_COORDS,
  type HydroPoint,
} from '@/utils/yearReviewStats';
import { CYPRUS_OUTLINE } from '@/utils/cyprusOutline';

type Lang = 'en' | 'el' | 'ru';
const L = <T,>(m: { en: T } & Partial<Record<Lang, T>>, lang: string): T => m[lang as Lang] ?? m.en;

const CURRENT = '#2f7fd8';
const PRIOR = '#e2691f';
const RAIN = '#0f9d8a';
const MUTED = '#9aa0a8';
const RECORD = '#d94f2b';

const fmt = (v: number, d = 1) => v.toFixed(d);

const UNIT: Record<Lang, string> = { en: 'mln. m³', el: 'εκατ. κ.μ.', ru: 'млн. м³' };
const MONTHS: Record<Lang, string[]> = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  el: ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαΐ', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ'],
  ru: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
};
const AUG_SEP: Record<Lang, string> = { en: 'Aug–Sep', el: 'Αυγ–Σεπ', ru: 'авг–сен' };
const MONTH_INDEX: Record<string, number> = {
  January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
  July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
};

const lng = (language: string): Lang => (['en', 'el', 'ru'].includes(language) ? language : 'en') as Lang;
const monthLabel = (key: string, lang: Lang) => key === 'Aug-Sep' ? AUG_SEP[lang] : MONTHS[lang][MONTH_INDEX[key]];
const dayLabel = (iso: string, lang: Lang) => `${+iso.slice(8, 10)} ${MONTHS[lang][+iso.slice(5, 7) - 1]}`;
const damName = (name: string, lang: Lang) => {
  const t = translations[lang][name as keyof typeof translations.en];
  return typeof t === 'string' && t ? t : name;
};

/* ---------- shared text marks ---------- */

const AxisText = (p: React.SVGProps<SVGTextElement>) => (
  <text {...p} className="fill-current text-[10px] tabular-nums text-gray-500 dark:text-gray-400" />
);
const Label = (p: React.SVGProps<SVGTextElement>) => (
  <text {...p} className="fill-current text-[12px] text-gray-700 dark:text-gray-300" />
);
const Note = (p: React.SVGProps<SVGTextElement>) => (
  <text {...p} className="fill-current text-[11px] font-medium tabular-nums text-gray-700 dark:text-gray-300" />
);
const Grid = (p: React.SVGProps<SVGLineElement>) => (
  <line {...p} className="stroke-current text-gray-200 dark:text-gray-700" strokeWidth={1} />
);

function useTip() {
  const [tip, setTip] = useState<{ x: number; y: number; html: string } | null>(null);
  const show = useCallback((e: React.MouseEvent, html: string) => setTip({ x: e.clientX, y: e.clientY, html }), []);
  const hide = useCallback(() => setTip(null), []);
  const node = tip ? (
    <div
      className="pointer-events-none fixed z-50 whitespace-nowrap rounded border border-gray-200 bg-white px-2 py-1 text-[11px] leading-relaxed tabular-nums text-gray-900 shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
      style={{ left: Math.min(tip.x + 12, (typeof window !== 'undefined' ? window.innerWidth : 1e4) - 190), top: tip.y - 46 }}
      dangerouslySetInnerHTML={{ __html: tip.html }}
    />
  ) : null;
  return { show, hide, node };
}

/* ================= 1. The year in one line ================= */

// Day offsets of each month start in a hydrological year (1 Oct = 0).
const MONTH_STARTS = [0, 31, 61, 92, 123, 151, 182, 212, 243, 273, 304, 335, 365];
const MONTH_ORDER = [9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8];

export function YearTraceChart() {
  const lang = lng(useLanguage().language);
  const { show, hide, node } = useTip();
  const u = UNIT[lang];

  const { cur, prev, band, low, peak, end, cross } = useMemo(() => {
    const cur = hydroYearTrace(REVIEW_YEAR);
    const prev = hydroYearTrace(REVIEW_YEAR - 1);
    const band = cur.length ? clipBand(hydroYearBand(1988, REVIEW_YEAR - 1), cur[0].day, cur[cur.length - 1].day) : [];
    const low = cur.length ? cur.reduce((a, b) => (b.value < a.value ? b : a)) : null;
    const peak = cur.length ? cur.reduce((a, b) => (b.value > a.value ? b : a)) : null;
    const end = cur.length ? cur[cur.length - 1] : null;
    const cross = cur.find(p => p.value >= 100) ?? null;
    return { cur, prev, band, low, peak, end, cross };
  }, []);
  if (!cur.length || !band.length || !low || !peak || !end) return null;

  const medianAtEnd = band.reduce((a, b) => (Math.abs(b.day - end.day) < Math.abs(a.day - end.day) ? b : a)).median;

  const t = L({
    en: {
      title: '2025/26 in one line: from a 17-year low back to the middle of the pack',
      sub: `Storage in the 18 main dams through the hydrological year. The dams fell to ${fmt(low.value)} ${u} on ${dayLabel(low.date, 'en')}, peaked at ${fmt(peak.value)} on ${dayLabel(peak.date, 'en')} and end the year at ${fmt(end.value)}, against a 1988–2025 median of ${fmt(medianAtEnd, 0)} for the date.`,
      src: 'Cyprus Water Development Department: daily bulletins from 2014, twice-monthly readings before. The grey band spans the lowest and highest of the 37 hydrological years 1988/89–2024/25 on the 1st and 15th of each month.',
      cur: '2025/26', prev: '2024/25', band: 'Range 1988–2025', med: 'Median 1988–2025',
      low: 'low', peak: 'peak', cross: '100 mln. m³ again',
    },
    el: {
      title: 'Το 2025/26 σε μία γραμμή: από το χαμηλότερο σημείο 17 ετών πίσω στη μέση του πίνακα',
      sub: `Αποθέματα των 18 κύριων φραγμάτων στη διάρκεια του υδρολογικού έτους. Τα φράγματα έπεσαν στα ${fmt(low.value)} ${u} στις ${dayLabel(low.date, 'el')}, κορυφώθηκαν στα ${fmt(peak.value)} στις ${dayLabel(peak.date, 'el')} και κλείνουν τη χρονιά στα ${fmt(end.value)}, έναντι διαμέσου ${fmt(medianAtEnd, 0)} για την ίδια ημερομηνία την περίοδο 1988–2025.`,
      src: 'Τμήμα Αναπτύξεως Υδάτων: ημερήσια δελτία από το 2014, μετρήσεις δύο φορές τον μήνα πριν. Η γκρίζα ζώνη καλύπτει το χαμηλότερο και το υψηλότερο των 37 υδρολογικών ετών 1988/89–2024/25, την 1η και τη 15η κάθε μήνα.',
      cur: '2025/26', prev: '2024/25', band: 'Εύρος 1988–2025', med: 'Διάμεσος 1988–2025',
      low: 'χαμηλό', peak: 'κορυφή', cross: 'ξανά 100 εκατ. κ.μ.',
    },
    ru: {
      title: '2025/26 одной линией: от минимума за 17 лет обратно к середине исторического диапазона',
      sub: `Запас в 18 основных дамбах за гидрологический год. Минимум — ${fmt(low.value)} ${u} (${dayLabel(low.date, 'ru')}), пик — ${fmt(peak.value)} (${dayLabel(peak.date, 'ru')}), на конец года — ${fmt(end.value)} при медиане ${fmt(medianAtEnd, 0)} на эту дату за 1988–2025 годы.`,
      src: 'Департамент водного развития Кипра: ежедневные бюллетени с 2014 года, до этого замеры дважды в месяц. Серая полоса — от минимума до максимума 37 гидрологических лет 1988/89–2024/25 на 1-е и 15-е число каждого месяца.',
      cur: '2025/26', prev: '2024/25', band: 'Диапазон 1988–2025', med: 'Медиана 1988–2025',
      low: 'минимум', peak: 'пик', cross: 'снова 100 млн. м³',
    },
  }, lang);

  const W = 1000, H = 400, m = { t: 24, r: 70, b: 36, l: 56 };
  const vMax = 300;
  const x = (day: number) => m.l + (day / 365) * (W - m.l - m.r);
  const y = (v: number) => (H - m.b) - (v / vMax) * (H - m.b - m.t);
  const line = (pts: HydroPoint[]) => pts.map((p, i) => `${i ? 'L' : 'M'}${x(p.day).toFixed(1)},${y(p.value).toFixed(1)}`).join(' ');
  const area = [
    ...band.map((b, i) => `${i ? 'L' : 'M'}${x(b.day).toFixed(1)},${y(b.max).toFixed(1)}`),
    ...[...band].reverse().map(b => `L${x(b.day).toFixed(1)},${y(b.min).toFixed(1)}`),
    'Z',
  ].join(' ');
  const median = band.map((b, i) => `${i ? 'L' : 'M'}${x(b.day).toFixed(1)},${y(b.median).toFixed(1)}`).join(' ');

  return (
    <>
      <ChartFrame name="year-trace" title={t.title} subtitle={t.sub} source={t.src} height={H}
        legend={[
          { color: CURRENT, label: t.cur }, { color: PRIOR, label: t.prev },
          { color: '#d7dbe0', label: t.band }, { color: MUTED, label: t.med, dashed: true },
        ]}>
        {[0, 50, 100, 150, 200, 250, 300].map(v => (
          <g key={v}>
            <Grid x1={m.l} x2={W - m.r} y1={y(v)} y2={y(v)} />
            <AxisText x={m.l - 8} y={y(v) + 3} textAnchor="end">{v}</AxisText>
          </g>
        ))}
        {MONTH_STARTS.slice(0, 12).map((d, i) => (
          <AxisText key={d} x={x(d + 15)} y={H - m.b + 16} textAnchor="middle">{MONTHS[lang][MONTH_ORDER[i]]}</AxisText>
        ))}
        <path d={area} fill={MUTED} opacity={0.22} />
        <path d={median} fill="none" stroke={MUTED} strokeWidth={1.5} strokeDasharray="5 4" />
        <path d={line(prev)} fill="none" stroke={PRIOR} strokeWidth={2} opacity={0.85} />
        <path d={line(cur)} fill="none" stroke={CURRENT} strokeWidth={3} />
        {cur.map(p => (
          <circle key={p.date} cx={x(p.day)} cy={y(p.value)} r={6} fill="transparent"
            onMouseMove={e => show(e, `<b>${p.date}</b><br/>${fmt(p.value)} ${u}`)} onMouseLeave={hide} />
        ))}
        <circle cx={x(low.day)} cy={y(low.value)} r={4.5} fill={CURRENT} />
        <Note x={x(low.day)} y={y(low.value) + 20} textAnchor="middle">{`${t.low} ${fmt(low.value)} · ${dayLabel(low.date, lang)}`}</Note>
        {cross && (
          <>
            <circle cx={x(cross.day)} cy={y(cross.value)} r={3.5} fill={CURRENT} />
            <Note x={x(cross.day) - 8} y={y(cross.value) - 8} textAnchor="end">{`${t.cross} · ${dayLabel(cross.date, lang)}`}</Note>
          </>
        )}
        <circle cx={x(peak.day)} cy={y(peak.value)} r={4.5} fill={CURRENT} />
        <Note x={x(peak.day)} y={y(peak.value) - 18} textAnchor="middle">{`${t.peak} ${fmt(peak.value)} · ${dayLabel(peak.date, lang)}`}</Note>
        <circle cx={x(end.day)} cy={y(end.value)} r={4.5} fill={CURRENT} />
        <Note x={x(end.day) + 8} y={y(end.value) + 4} fontWeight={700}>{fmt(end.value)}</Note>
        {prev.length > 0 && (
          <Note x={x(prev[prev.length - 1].day) + 8} y={y(prev[prev.length - 1].value) + 4}>{t.prev}</Note>
        )}
      </ChartFrame>
      {node}
    </>
  );
}

/* ================= 2. The rain came late ================= */

export function RainLateChart() {
  const lang = lng(useLanguage().language);
  const { currentDataSetId: ds } = useDataContext();
  const { show, hide, node } = useTip();
  const u = UNIT[lang];
  const inflow = useMemo(() => reviewInflow(ds), [ds]);
  if (!inflow.length) return null;

  const total = inflow.reduce((s, r) => s + r.v, 0);
  const afterFeb = inflow.slice(4).reduce((s, r) => s + r.v, 0);
  const crossIdx = DOM_RAIN_2025_26.findIndex(r => r.cumPct >= 100);

  const t = L({
    en: {
      title: 'Five months below normal, then the dams filled from February on',
      sub: `Bars: water reaching the 18 main dams each month. Line: rainfall since 1 October as a share of the normal for the date. The season stood at 42% of normal at the end of November and passed 100% only in March. ${fmt((100 * afterFeb) / total, 0)}% of the year's ${fmt(total, 1)} ${u} of inflow arrived from February onwards.`,
      src: 'Inflow: Cyprus Water Development Department monthly inflow table. Rainfall: Cyprus Department of Meteorology area average for the government-controlled areas, 1961–90 normal. October–April final, May–August preliminary, September provisional to the 25th.',
      inflow: `Inflow, ${u}`, rain: 'Rainfall since 1 Oct, % of normal', normal: 'normal', crossed: 'passes normal',
    },
    el: {
      title: 'Πέντε μήνες κάτω από το κανονικό, μετά τα φράγματα γέμιζαν από τον Φεβρουάριο και μετά',
      sub: `Μπάρες: νερό που έφτασε στα 18 κύρια φράγματα κάθε μήνα. Γραμμή: βροχόπτωση από την 1η Οκτωβρίου ως ποσοστό της κανονικής για την ημερομηνία. Στο τέλος Νοεμβρίου η χρονιά ήταν στο 42% της κανονικής και ξεπέρασε το 100% μόλις τον Μάρτιο. Το ${fmt((100 * afterFeb) / total, 0)}% των ${fmt(total, 1)} ${u} της χρονιάς έφτασε από τον Φεβρουάριο και μετά.`,
      src: 'Εισροή: πίνακας μηνιαίας εισροής του Τμήματος Αναπτύξεως Υδάτων. Βροχόπτωση: Τμήμα Μετεωρολογίας, μέσος όρος για τις ελεύθερες περιοχές, κανονική 1961–90. Οκτώβριος–Απρίλιος τελικά, Μάιος–Αύγουστος προκαταρκτικά, Σεπτέμβριος προσωρινά ως τις 25.',
      inflow: `Εισροή, ${u}`, rain: 'Βροχή από 1 Οκτ, % της κανονικής', normal: 'κανονική', crossed: 'ξεπερνά την κανονική',
    },
    ru: {
      title: 'Пять месяцев ниже нормы, а потом дамбы наполнялись с февраля',
      sub: `Столбцы: вода, поступившая в 18 основных дамб за каждый месяц. Линия: осадки с 1 октября в процентах от нормы на эту дату. В конце ноября сезон был на 42% нормы и превысил 100% только в марте. ${fmt((100 * afterFeb) / total, 0)}% годового притока (${fmt(total, 1)} ${u}) пришлось на февраль и позже.`,
      src: 'Приток: таблица месячного притока Департамента водного развития. Осадки: Департамент метеорологии, среднее по подконтрольной правительству территории, норма 1961–90 годов. Октябрь–апрель — окончательные данные, май–август — предварительные, сентябрь — по 25-е число.',
      inflow: `Приток, ${u}`, rain: 'Осадки с 1 окт, % нормы', normal: 'норма', crossed: 'выше нормы',
    },
  }, lang);

  const W = 1000, H = 380, m = { t: 30, r: 64, b: 40, l: 56 };
  const n = inflow.length;
  const bw = (W - m.l - m.r) / n;
  const iMax = Math.max(40, Math.ceil(Math.max(...inflow.map(r => r.v)) / 10) * 10);
  const pMax = 140;
  const y = (v: number) => (H - m.b) - (v / iMax) * (H - m.b - m.t);
  const yp = (p: number) => (H - m.b) - (Math.min(p, pMax) / pMax) * (H - m.b - m.t);
  const cx = (i: number) => m.l + i * bw + bw / 2;
  const rainPath = DOM_RAIN_2025_26.map((r, i) => `${i ? 'L' : 'M'}${cx(i).toFixed(1)},${yp(r.cumPct).toFixed(1)}`).join(' ');

  return (
    <>
      <ChartFrame name="rain-late" title={t.title} subtitle={t.sub} source={t.src} height={H}
        legend={[{ color: CURRENT, label: t.inflow }, { color: RAIN, label: t.rain }]}>
        {Array.from({ length: iMax / 10 + 1 }, (_, i) => i * 10).map(v => (
          <g key={v}>
            <Grid x1={m.l} x2={W - m.r} y1={y(v)} y2={y(v)} />
            <AxisText x={m.l - 8} y={y(v) + 3} textAnchor="end">{v}</AxisText>
          </g>
        ))}
        {[0, 50, 100].map(p => (
          <AxisText key={p} x={W - m.r + 8} y={yp(p) + 3}>{p}%</AxisText>
        ))}
        <line x1={m.l} x2={W - m.r} y1={yp(100)} y2={yp(100)} stroke={RAIN} strokeWidth={1} strokeDasharray="4 4" opacity={0.7} />
        <AxisText x={m.l + 6} y={yp(100) - 5}>{t.normal}</AxisText>
        {inflow.map((r, i) => {
          const rain = DOM_RAIN_2025_26[i];
          const bx = m.l + i * bw + bw * 0.2;
          return (
            <g key={r.key} onMouseMove={e => show(e, `<b>${monthLabel(r.key, lang)}</b><br/>${fmt(r.v, 2)} ${u}${rain ? `<br/>${fmt(rain.mm)} mm · ${rain.pct}% · Σ ${rain.cumPct}%` : ''}`)} onMouseLeave={hide}>
              <rect x={m.l + i * bw} y={m.t} width={bw} height={H - m.t - m.b} fill="transparent" />
              <rect x={bx} y={y(r.v)} width={bw * 0.6} height={Math.max(1, (H - m.b) - y(r.v))} rx={2} fill={CURRENT} opacity={0.85} />
              {r.v >= 1 && <Note x={bx + bw * 0.3} y={y(r.v) - 6} textAnchor="middle">{fmt(r.v, 1)}</Note>}
              <AxisText x={cx(i)} y={H - m.b + 16} textAnchor="middle">{monthLabel(r.key, lang)}</AxisText>
            </g>
          );
        })}
        <path d={rainPath} fill="none" stroke={RAIN} strokeWidth={2.5} />
        {DOM_RAIN_2025_26.slice(0, n).map((r, i) => (
          <circle key={r.key} cx={cx(i)} cy={yp(r.cumPct)} r={i === 1 || i === crossIdx ? 5 : 3} fill={RAIN} />
        ))}
        <Note x={cx(1)} y={yp(DOM_RAIN_2025_26[1].cumPct) + 20} textAnchor="middle" style={{ fill: RAIN }}>{`${DOM_RAIN_2025_26[1].cumPct}%`}</Note>
        {crossIdx > 0 && (
          <Note x={cx(crossIdx) - 8} y={yp(DOM_RAIN_2025_26[crossIdx].cumPct) - 10} textAnchor="end">
            {`${t.crossed} · ${DOM_RAIN_2025_26[crossIdx].cumPct}%`}
          </Note>
        )}
        <Note x={cx(n - 1)} y={yp(DOM_RAIN_2025_26[n - 1].cumPct) - 10} textAnchor="middle" fontWeight={700}>
          {`${DOM_RAIN_2025_26[n - 1].cumPct}%`}
        </Note>
      </ChartFrame>
      {node}
    </>
  );
}

/* ================= 3. The sponge ================= */

export function SpongeChart() {
  const lang = lng(useLanguage().language);
  const { currentDataSetId: ds } = useDataContext();
  const { show, hide, node } = useTip();
  const u = UNIT[lang];
  const rows = useMemo(() => {
    const inflow = reviewInflow(ds);
    return DOM_RAIN_2025_26.slice(0, 8).map((r, i) => ({
      key: r.key, mm: r.mm, v: inflow[i]?.v ?? 0, per10: r.mm > 0 ? (10 * (inflow[i]?.v ?? 0)) / r.mm : 0,
    }));
  }, [ds]);
  if (!rows.length) return null;
  const dec = rows.find(r => r.key === 'December')!;
  const apr = rows.find(r => r.key === 'April')!;

  const t = L({
    en: {
      title: "December's rain soaked in. April's ran off.",
      sub: `Rain over the island (left) against water reaching the dams (right), month by month. December brought ${fmt(dec.mm, 0)} mm and ${fmt(dec.v, 1)} ${u} of inflow. April brought ${fmt(apr.mm, 0)} mm and ${fmt(apr.v, 1)}. After three dry years the ground had to fill before the rivers ran.`,
      src: 'Rainfall: Cyprus Department of Meteorology area average (October–April final, May preliminary). Inflow: Cyprus Water Development Department, 18 main dams. Part of each month\'s inflow is delayed flow from earlier rain.',
      rain: 'Rainfall, mm', inflow: `Inflow to the dams, ${u}`, per: 'per 10 mm of rain',
    },
    el: {
      title: 'Η βροχή του Δεκεμβρίου ρουφήχτηκε. Του Απριλίου κύλησε στα φράγματα.',
      sub: `Βροχή στο νησί (αριστερά) και νερό που έφτασε στα φράγματα (δεξιά), μήνα με τον μήνα. Ο Δεκέμβριος έφερε ${fmt(dec.mm, 0)} mm και ${fmt(dec.v, 1)} ${u} εισροή. Ο Απρίλιος έφερε ${fmt(apr.mm, 0)} mm και ${fmt(apr.v, 1)}. Μετά από τρία ξηρά χρόνια, το έδαφος έπρεπε να χορτάσει πριν τρέξουν τα ποτάμια.`,
      src: 'Βροχόπτωση: Τμήμα Μετεωρολογίας, μέσος όρος νησιού (Οκτώβριος–Απρίλιος τελικά, Μάιος προκαταρκτικά). Εισροή: Τμήμα Αναπτύξεως Υδάτων, 18 κύρια φράγματα. Μέρος της εισροής κάθε μήνα προέρχεται από παλαιότερες βροχές.',
      rain: 'Βροχή, mm', inflow: `Εισροή στα φράγματα, ${u}`, per: 'ανά 10 mm βροχής',
    },
    ru: {
      title: 'Декабрьский дождь впитался в землю. Апрельский стёк в дамбы.',
      sub: `Осадки над островом (слева) и вода, дошедшая до дамб (справа), по месяцам. Декабрь принёс ${fmt(dec.mm, 0)} мм осадков и ${fmt(dec.v, 1)} ${u} притока, апрель — ${fmt(apr.mm, 0)} мм и ${fmt(apr.v, 1)}. После трёх сухих лет земля должна была насытиться, прежде чем побегут реки.`,
      src: 'Осадки: Департамент метеорологии Кипра, среднее по острову (октябрь–апрель — окончательные данные, май — предварительные). Приток: Департамент водного развития, 18 основных дамб. Часть притока каждого месяца — запоздалый сток от прежних дождей.',
      rain: 'Осадки, мм', inflow: `Приток в дамбы, ${u}`, per: 'на 10 мм осадков',
    },
  }, lang);

  const W = 1000, rowH = 36, m = { t: 40, b: 16 };
  const H = m.t + rows.length * rowH + m.b;
  const mid = 470;                 // month labels sit here
  const rainW = 330, flowW = 300;  // bar lengths at full scale
  const rainMax = 130, flowMax = 40;
  const rx = (mm: number) => (Math.min(mm, rainMax) / rainMax) * rainW;
  const fx = (v: number) => (Math.min(v, flowMax) / flowMax) * flowW;
  const perX = 900;

  return (
    <>
      <ChartFrame name="sponge" title={t.title} subtitle={t.sub} source={t.src} height={H}
        legend={[{ color: RAIN, label: t.rain }, { color: CURRENT, label: t.inflow }]}>
        <Note x={mid - 40} y={m.t - 18} textAnchor="end">{t.rain}</Note>
        <Note x={mid + 40} y={m.t - 18}>{t.inflow}</Note>
        <Note x={perX + 40} y={m.t - 18} textAnchor="middle">{t.per}</Note>
        {rows.map((r, i) => {
          const cy = m.t + i * rowH + rowH / 2;
          const hl = r.key === 'December' || r.key === 'April';
          return (
            <g key={r.key} onMouseMove={e => show(e, `<b>${monthLabel(r.key, lang)}</b><br/>${fmt(r.mm)} mm → ${fmt(r.v, 2)} ${u}`)} onMouseLeave={hide}>
              <rect x={0} y={cy - rowH / 2} width={W} height={rowH} fill="transparent" />
              <rect x={mid - 40 - rx(r.mm)} y={cy - 11} width={Math.max(1, rx(r.mm))} height={22} rx={2} fill={RAIN} opacity={hl ? 1 : 0.55} />
              <AxisText x={mid - 46 - rx(r.mm)} y={cy + 4} textAnchor="end">{fmt(r.mm, 0)} mm</AxisText>
              <Label x={mid} y={cy + 4} textAnchor="middle" fontWeight={hl ? 700 : 400}>{monthLabel(r.key, lang)}</Label>
              <rect x={mid + 40} y={cy - 11} width={Math.max(1, fx(r.v))} height={22} rx={2} fill={CURRENT} opacity={hl ? 1 : 0.55} />
              <AxisText x={mid + 46 + fx(r.v)} y={cy + 4}>{fmt(r.v, 1)}</AxisText>
              <Note x={perX + 40} y={cy + 4} textAnchor="middle" fontWeight={hl ? 700 : 500}>{fmt(r.per10, 2)}</Note>
            </g>
          );
        })}
      </ChartFrame>
      {node}
    </>
  );
}

/* ================= 4. Winners and losers, dam by dam ================= */

export function DamRangeChart() {
  const lang = lng(useLanguage().language);
  const { currentDataSetId: ds } = useDataContext();
  const { show, hide, node } = useTip();
  const rows = useMemo(() => damYearRanges(ds), [ds]);
  if (!rows.length) return null;

  const full = rows.filter(r => r.fullFrom);
  const big = rows.filter(r => r.capacity >= 13);
  const bigBest = big.reduce((a, b) => (b.peakPct > a.peakPct ? b : a));

  const t = L({
    en: {
      title: `${full.length} of ${rows.length} reservoirs filled, and every one of them was small`,
      sub: `Each reservoir's lowest and highest level of the year, and where it stands now, as a share of capacity. Largest at the top. The fullest of the ${big.length} dams over 13 ${UNIT.en}, ${damName(bigBest.name, 'en')}, peaked at ${fmt(bigBest.peakPct, 0)}%.`,
      src: 'Cyprus Water Development Department daily bulletins, 1 October 2025 to the latest bulletin. "Full" is the first reading at 99.5% of capacity or more. Tamassos, Klirou-Malounta and Solea are recharge reservoirs.',
      low: 'Low', peak: 'Peak', now: 'Now', fullL: 'Filled to capacity', from: 'full from',
    },
    el: {
      title: `${full.length} από ${rows.length} ταμιευτήρες γέμισαν, και όλοι τους ήταν μικροί`,
      sub: `Το χαμηλότερο και το υψηλότερο επίπεδο κάθε ταμιευτήρα μέσα στη χρονιά, και πού βρίσκεται σήμερα, ως ποσοστό της χωρητικότητας. Οι μεγαλύτεροι στην κορυφή. Από τα ${big.length} φράγματα άνω των 13 ${UNIT.el}, το πιο γεμάτο (${damName(bigBest.name, 'el')}) κορυφώθηκε στο ${fmt(bigBest.peakPct, 0)}%.`,
      src: 'Ημερήσια δελτία Τμήματος Αναπτύξεως Υδάτων, από 1 Οκτωβρίου 2025 ως το τελευταίο δελτίο. «Γεμάτο»: η πρώτη μέτρηση στο 99.5% της χωρητικότητας ή πάνω. Ταμασός, Κλήρου-Μαλούντα και Σολέα είναι ταμιευτήρες εμπλουτισμού.',
      low: 'Χαμηλό', peak: 'Κορυφή', now: 'Τώρα', fullL: 'Γέμισε', from: 'γεμάτο από',
    },
    ru: {
      title: `Наполнились ${full.length} из ${rows.length} ${rows.length % 10 === 1 && rows.length % 100 !== 11 ? 'водохранилища' : 'водохранилищ'}, и все они маленькие`,
      sub: `Минимальный и максимальный уровень каждого водохранилища за год и текущий уровень, в процентах от ёмкости. Крупнейшие сверху. Из ${big.length} дамб ёмкостью больше 13 ${UNIT.ru} самая полная (${damName(bigBest.name, 'ru')}) достигла пика в ${fmt(bigBest.peakPct, 0)}%.`,
      src: 'Ежедневные бюллетени Департамента водного развития с 1 октября 2025 года по последний бюллетень. «Полная» — первый замер на уровне 99.5% ёмкости или выше. Тамассос, Клиру-Малунта и Солея — подпитывающие водохранилища.',
      low: 'Минимум', peak: 'Пик', now: 'Сейчас', fullL: 'Заполнилась', from: 'полная с',
    },
  }, lang);

  const W = 1000, rowH = 26, m = { t: 16, r: 200, b: 30, l: 190 };
  const H = m.t + rows.length * rowH + m.b;
  const x = (pct: number) => m.l + (Math.min(100, Math.max(0, pct)) / 100) * (W - m.l - m.r);

  return (
    <>
      <ChartFrame name="dam-range" title={t.title} subtitle={t.sub} source={t.src} height={H}
        legend={[{ color: MUTED, label: t.low }, { color: CURRENT, label: t.peak }, { color: RECORD, label: t.fullL }, { color: '#6b7280', label: t.now }]}>
        {[0, 25, 50, 75, 100].map(v => (
          <g key={v}>
            <Grid x1={x(v)} x2={x(v)} y1={m.t - 4} y2={H - m.b} />
            <AxisText x={x(v)} y={H - m.b + 16} textAnchor="middle">{v}%</AxisText>
          </g>
        ))}
        {rows.map((r, i) => {
          const cy = m.t + i * rowH + rowH / 2;
          const isFull = !!r.fullFrom;
          const tip = `<b>${damName(r.name, lang)}</b> · ${fmt(r.capacity, r.capacity < 1 ? 3 : 1)} ${UNIT[lang]}<br/>${t.low}: ${fmt(r.lowPct)}% (${dayLabel(r.lowDate, lang)})<br/>${t.peak}: ${fmt(r.peakPct)}% (${dayLabel(r.peakDate, lang)})<br/>${t.now}: ${fmt(r.nowPct)}%`;
          return (
            <g key={r.name} onMouseMove={e => show(e, tip)} onMouseLeave={hide}>
              <rect x={0} y={cy - rowH / 2} width={W} height={rowH} fill="transparent" />
              <Label x={m.l - 12} y={cy + 4} textAnchor="end" fontWeight={isFull ? 600 : 400}>
                {damName(r.name, lang)}
                <tspan className="fill-current text-[10px] text-gray-400"> {fmt(r.capacity, r.capacity < 1 ? 2 : 1)}</tspan>
              </Label>
              <line x1={x(r.lowPct)} x2={x(r.peakPct)} y1={cy} y2={cy} stroke={isFull ? RECORD : CURRENT} strokeWidth={3} opacity={0.35} />
              <circle cx={x(r.lowPct)} cy={cy} r={4} fill="white" stroke={MUTED} strokeWidth={2} />
              <circle cx={x(r.peakPct)} cy={cy} r={5} fill={isFull ? RECORD : CURRENT} />
              <line x1={x(r.nowPct)} x2={x(r.nowPct)} y1={cy - 8} y2={cy + 8} className="stroke-current text-gray-700 dark:text-gray-200" strokeWidth={2} />
              <Note x={W - m.r + 14} y={cy + 4} fontWeight={isFull ? 600 : 500}>
                {isFull
                  ? `${t.from} ${dayLabel(r.fullFrom as string, lang)} · ${fmt(r.nowPct, 0)}%`
                  : `${fmt(r.lowPct, 0)} → ${fmt(r.peakPct, 0)} → ${fmt(r.nowPct, 0)}%`}
              </Note>
            </g>
          );
        })}
      </ChartFrame>
      {node}
    </>
  );
}

/* ================= 5. 2026/27: replay the last winters ================= */

export function OutlookChart() {
  const lang = lng(useLanguage().language);
  const { currentDataSetId: ds } = useDataContext();
  const { show, hide, node } = useTip();
  const u = UNIT[lang];
  const o = useMemo(() => outlookReplay(ds), [ds]);
  if (!o) return null;
  const n = o.rows.length;
  const twenty = 0.2 * o.capacity;

  const t = L({
    en: {
      title: `Replay the last ${n} winters from today's level: ${o.lower} of ${n} end lower`,
      sub: `Where the 18 main dams would stand a year from now if 2026/27 brought the inflow of each past season. Each bar starts from today's ${fmt(o.start)} ${u}, adds that season's actual inflow and takes away the typical outflow at this level, about ${fmt(o.outflow, 0)} ${u} a year. Breaking even needs a season like the ${n - o.lower} on the right.`,
      src: 'Inflow: Cyprus Water Development Department, seasons 2015/16–2025/26. Outflow (supply, irrigation, recharge releases, evaporation and leakage) = 39.4 + 0.359 × storage on 1 October, fitted on the same eleven seasons (r = 0.96). A range of precedents, not a weather forecast.',
      today: 'today', tw: '20% of capacity', inflowL: 'inflow',
    },
    el: {
      title: `Επαναλαμβάνοντας τους τελευταίους ${n} χειμώνες από τη σημερινή στάθμη: οι ${o.lower} στους ${n} τελειώνουν χαμηλότερα`,
      sub: `Πού θα βρίσκονταν τα 18 κύρια φράγματα σε έναν χρόνο, αν το 2026/27 έφερνε την εισροή κάθε προηγούμενης περιόδου. Κάθε μπάρα ξεκινά από τα σημερινά ${fmt(o.start)} ${u}, προσθέτει την πραγματική εισροή εκείνης της περιόδου και αφαιρεί τη συνηθισμένη εκροή σε αυτό το επίπεδο, περίπου ${fmt(o.outflow, 0)} ${u} τον χρόνο. Για να μείνουν στα ίδια χρειάζεται μια χρονιά σαν τις ${n - o.lower} στα δεξιά.`,
      src: 'Εισροή: Τμήμα Αναπτύξεως Υδάτων, περίοδοι 2015/16–2025/26. Εκροή (ύδρευση, άρδευση, εμπλουτισμός υδροφορέων, εξάτμιση και διαρροές) = 39.4 + 0.359 × αποθέματα την 1η Οκτωβρίου, προσαρμογή στις ίδιες έντεκα περιόδους (r = 0.96). Εύρος προηγουμένων, όχι πρόγνωση καιρού.',
      today: 'σήμερα', tw: '20% της χωρητικότητας', inflowL: 'εισροή',
    },
    ru: {
      title: `Повторим последние ${n} зим с сегодняшнего уровня: в ${o.lower} случаях из ${n} запас снизится`,
      sub: `Где окажутся 18 основных дамб через год, если 2026/27 принесёт приток одного из прошлых сезонов. Каждый столбец начинается с сегодняшних ${fmt(o.start)} ${u}, прибавляет фактический приток того сезона и вычитает обычный для такого уровня расход — около ${fmt(o.outflow, 0)} ${u} в год. Чтобы остаться при своих, нужен сезон вроде тех ${n - o.lower}, что справа.`,
      src: 'Приток: Департамент водного развития, сезоны 2015/16–2025/26. Расход (водоснабжение, орошение, пополнение подземных вод, испарение и утечки) = 39.4 + 0.359 × запас на 1 октября, подобран по тем же одиннадцати сезонам (r = 0.96). Набор прецедентов, а не прогноз погоды.',
      today: 'сегодня', tw: '20% ёмкости', inflowL: 'приток',
    },
  }, lang);

  const W = 1000, H = 380, m = { t: 30, r: 110, b: 50, l: 56 };
  const vMax = 300;
  const bw = (W - m.l - m.r) / n;
  const y = (v: number) => (H - m.b) - (v / vMax) * (H - m.b - m.t);

  return (
    <>
      <ChartFrame name="outlook" title={t.title} subtitle={t.sub} source={t.src} height={H}>
        {[0, 50, 100, 150, 200, 250, 300].map(v => (
          <g key={v}>
            <Grid x1={m.l} x2={W - m.r} y1={y(v)} y2={y(v)} />
            <AxisText x={m.l - 8} y={y(v) + 3} textAnchor="end">{v}</AxisText>
          </g>
        ))}
        {o.rows.map((r, i) => {
          const bx = m.l + i * bw + bw * 0.16;
          const up = r.end >= o.start;
          return (
            <g key={r.season} onMouseMove={e => show(e, `<b>${r.season}</b><br/>${t.inflowL}: ${fmt(r.inflow)} ${u}<br/>→ ${fmt(r.end, 0)} ${u} (${fmt((100 * r.end) / o.capacity, 0)}%)`)} onMouseLeave={hide}>
              <rect x={m.l + i * bw} y={m.t} width={bw} height={H - m.t - m.b} fill="transparent" />
              <rect x={bx} y={y(r.end)} width={bw * 0.68} height={Math.max(1, (H - m.b) - y(r.end))} rx={2}
                fill={up ? CURRENT : MUTED} opacity={up ? 0.9 : 0.7} />
              <Note x={bx + bw * 0.34} y={y(r.end) - 6} textAnchor="middle">{fmt(r.end, 0)}</Note>
              <AxisText x={bx + bw * 0.34} y={H - m.b + 16} textAnchor="middle" fontWeight={600}>{r.season}</AxisText>
              <AxisText x={bx + bw * 0.34} y={H - m.b + 30} textAnchor="middle">{`+${fmt(r.inflow, 0)}`}</AxisText>
            </g>
          );
        })}
        <line x1={m.l} x2={W - m.r} y1={y(o.start)} y2={y(o.start)} stroke={CURRENT} strokeWidth={1.5} strokeDasharray="6 4" />
        <Note x={W - m.r + 8} y={y(o.start) + 4} style={{ fill: CURRENT }}>{`${t.today} ${fmt(o.start, 0)}`}</Note>
        <line x1={m.l} x2={W - m.r} y1={y(twenty)} y2={y(twenty)} stroke={RECORD} strokeWidth={1.5} strokeDasharray="2 4" />
        <Note x={W - m.r + 8} y={y(twenty) + 4} style={{ fill: RECORD }}>{t.tw}</Note>
      </ChartFrame>
      {node}
    </>
  );
}

/* ================= 6. The year in twelve numbers ================= */

interface Tile { value: string; label: string; accent: string }

export function NumbersGrid() {
  const lang = lng(useLanguage().language);
  const { currentDataSetId: ds } = useDataContext();
  const y = useMemo(() => yearNumbers(ds), [ds]);
  if (!y) return null;
  const u = UNIT[lang];
  const pct = (v: number) => `${fmt((100 * v) / y.capacity)}%`;
  const d = (iso: string) => dayLabel(iso, lang);
  const nov = DOM_RAIN_2025_26[1].cumPct;
  const spring = DOM_RAIN_2025_26.slice(5, 8).map(r => `${r.pct}%`).join(' · ');
  const x = (r: number | null) => (r ? `×${fmt(r)}` : '');

  const text = L({
    en: {
      title: '2025/26 in twelve numbers',
      first: `${d(y.first.date)}: first bulletin, the lowest start since 2008`,
      low: `the low point, ${d(y.low.date)}: lowest since January 2009`,
      nov: 'of normal rain by the end of November',
      spring: 'March, April and May rainfall against normal',
      gain: 'rise from 1 March to 1 June, the largest spring gain in 39 years',
      peak: `the peak, ${d(y.peak.date)}: tied with 2009 as the latest on record`,
      full: `reservoirs filled to capacity (last year: none)`,
      inflow: `inflow for the season, ${x(y.inflowVsPrev)} last year's`,
      relay: 'passed from little Arminou to Kouris',
      rain: `official rainfall: ${DOM_YEAR_TOTAL.rank}th-wettest year since 1901`,
      end: `in storage at year end, ${x(y.endVsLastYear)} a year earlier`,
      need: 'of inflow 2026/27 needs just to stay level',
      of: 'of',
    },
    el: {
      title: 'Το 2025/26 σε δώδεκα αριθμούς',
      first: `${d(y.first.date)}: πρώτο δελτίο, η χαμηλότερη αφετηρία από το 2008`,
      low: `το χαμηλότερο σημείο, ${d(y.low.date)}: το χαμηλότερο από τον Ιανουάριο του 2009`,
      nov: 'της κανονικής βροχής στο τέλος Νοεμβρίου',
      spring: 'βροχή Μαρτίου, Απριλίου και Μαΐου έναντι κανονικής',
      gain: 'άνοδος 1 Μαρτίου – 1 Ιουνίου, η μεγαλύτερη ανοιξιάτικη σε 39 χρόνια',
      peak: `η κορυφή, ${d(y.peak.date)}: μαζί με το 2009 η πιο αργοπορημένη`,
      full: 'ταμιευτήρες γέμισαν ως πάνω (πέρυσι: κανένας)',
      inflow: `εισροή της χρονιάς, ${x(y.inflowVsPrev)} η περυσινή`,
      relay: 'πέρασαν από τον μικρό Αρμίνου στον Κούρη',
      rain: `επίσημη βροχόπτωση: η ${DOM_YEAR_TOTAL.rank}η πιο βροχερή χρονιά από το 1901`,
      end: `αποθέματα στο τέλος της χρονιάς, ${x(y.endVsLastYear)} τα περυσινά`,
      need: 'εισροής χρειάζεται το 2026/27 μόνο για να μείνουμε στα ίδια',
      of: 'από',
    },
    ru: {
      title: '2025/26 в двенадцати цифрах',
      first: `${d(y.first.date)}: первый бюллетень, самый низкий старт с 2008 года`,
      low: `минимум года, ${d(y.low.date)}: самый низкий с января 2009 года`,
      nov: 'нормы осадков к концу ноября',
      spring: 'осадки марта, апреля и мая к норме',
      gain: 'прирост с 1 марта по 1 июня — крупнейший весенний за 39 лет',
      peak: `пик, ${d(y.peak.date)}: вместе с 2009-м самый поздний`,
      full: 'водохранилищ заполнились до краёв (год назад — ни одного)',
      inflow: `приток за сезон, ${x(y.inflowVsPrev)} к прошлому году`,
      relay: 'передал маленький Арминоу в Курис',
      rain: `официальные осадки: ${DOM_YEAR_TOTAL.rank}-й по дождливости год с 1901`,
      end: `запас на конец года, ${x(y.endVsLastYear)} к прошлому году`,
      need: 'притока нужно в 2026/27, только чтобы остаться на уровне',
      of: 'из',
    },
  }, lang);

  const tiles: Tile[] = [
    { value: `${fmt(y.first.value)} ${u}`, label: `${pct(y.first.value)} · ${text.first}`, accent: RECORD },
    { value: `${fmt(y.low.value)} ${u}`, label: `${pct(y.low.value)} · ${text.low}`, accent: RECORD },
    { value: `${nov}%`, label: text.nov, accent: PRIOR },
    { value: spring, label: text.spring, accent: RAIN },
    { value: y.springGain != null ? `+${fmt(y.springGain)} ${u}` : '—', label: text.gain, accent: RAIN },
    { value: `${fmt(y.peak.value)} ${u}`, label: `${pct(y.peak.value)} · ${text.peak}`, accent: CURRENT },
    { value: `${y.full} ${text.of} ${y.reservoirs}`, label: text.full, accent: CURRENT },
    { value: `${fmt(y.inflow)} ${u}`, label: text.inflow, accent: CURRENT },
    { value: `${fmt(ARMINOU_TO_KOURIS_2025_26)} ${u}`, label: text.relay, accent: CURRENT },
    { value: `${fmt(DOM_YEAR_TOTAL.mm)} mm · ${DOM_YEAR_TOTAL.pct}%`, label: text.rain, accent: RAIN },
    { value: `${fmt(y.end.value, 0)} ${u}`, label: `${pct(y.end.value)} · ${text.end}`, accent: CURRENT },
    { value: y.breakEven != null ? `≈${fmt(y.breakEven, 0)} ${u}` : '—', label: text.need, accent: PRIOR },
  ];

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4 sm:p-5">
        <h4 className="text-base font-semibold leading-snug text-gray-900 dark:text-gray-100">{text.title}</h4>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t, i) => (
            <div key={i} className="rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800/50"
              style={{ borderTop: `3px solid ${t.accent}` }}>
              <div className="text-xl font-bold tabular-nums leading-tight text-gray-900 dark:text-gray-100">{t.value}</div>
              <div className="mt-1 text-xs leading-snug text-gray-600 dark:text-gray-400">{t.label}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

/* ================= 7. The overflow club, on the map ================= */

// Where each big dam's name sits relative to its circle (SVG units).
const BIG_LABEL: Record<string, { dx: number; dy: number; anchor: 'start' | 'middle' | 'end' }> = {
  Kouris: { dx: -6, dy: 44, anchor: 'end' },
  Germasoyeia: { dx: 10, dy: 34, anchor: 'start' },
  Asprokremmos: { dx: 0, dy: 40, anchor: 'middle' },
  Evretou: { dx: -22, dy: 5, anchor: 'end' },
  Kannaviou: { dx: 4, dy: 36, anchor: 'middle' },
  Kalavasos: { dx: 0, dy: 34, anchor: 'middle' },
  Dipotamos: { dx: 20, dy: 14, anchor: 'start' },
  Lefkara: { dx: 18, dy: -10, anchor: 'start' },
};

export function OverflowMap() {
  const lang = lng(useLanguage().language);
  const { currentDataSetId: ds } = useDataContext();
  const { show, hide, node } = useTip();
  const rows = useMemo(() => damYearRanges(ds), [ds]);
  if (!rows.length) return null;
  const full = rows.filter(r => r.fullFrom).sort((a, b) => (a.fullFrom! < b.fullFrom! ? -1 : 1));
  const order = new Map(full.map((r, i) => [r.name, i + 1]));

  const t = L({
    en: {
      title: `The overflow club: ${full.length} reservoirs filled, all of them small`,
      sub: 'Circles are sized by capacity. Red: filled to the brim this year, numbered in the order they spilled. Blue: the other dams, shaded by their highest level of the year.',
      src: 'Cyprus Water Development Department daily bulletins, 1 October 2025 to the latest bulletin. Coastline: Natural Earth.',
      peak: 'peak', list: 'In the order they filled', filled: 'Filled to capacity', other: 'Other dams (shade = peak level)',
    },
    el: {
      title: `Η λέσχη των υπερχειλίσεων: ${full.length} ταμιευτήρες γέμισαν, όλοι μικροί`,
      sub: 'Το μέγεθος του κύκλου δείχνει τη χωρητικότητα. Κόκκινο: γέμισε φέτος ως πάνω, με αρίθμηση κατά σειρά υπερχείλισης. Μπλε: τα υπόλοιπα φράγματα, με απόχρωση ανάλογα με το υψηλότερο επίπεδο της χρονιάς.',
      src: 'Ημερήσια δελτία Τμήματος Αναπτύξεως Υδάτων, από 1 Οκτωβρίου 2025 ως το τελευταίο δελτίο. Ακτογραμμή: Natural Earth.',
      peak: 'κορυφή', list: 'Με τη σειρά που γέμισαν', filled: 'Γέμισε ως πάνω', other: 'Άλλα φράγματα (απόχρωση = κορυφή)',
    },
    ru: {
      title: `Клуб переливов: заполнились ${full.length} водохранилищ, и все маленькие`,
      sub: 'Размер кружка — ёмкость. Красные заполнились до краёв в этом году, номера — по порядку перелива. Синие — остальные дамбы, оттенок по максимальному уровню за год.',
      src: 'Ежедневные бюллетени Департамента водного развития с 1 октября 2025 года по последний бюллетень. Береговая линия: Natural Earth.',
      peak: 'пик', list: 'По порядку заполнения', filled: 'Заполнилась до краёв', other: 'Остальные дамбы (оттенок = пик)',
    },
  }, lang);

  const W = 1000, lngMin = 32.2, lngMax = 34.65, latMax = 35.75, latMin = 34.5;
  const k = W / (lngMax - lngMin);                        // px per degree of longitude
  const kLat = k / Math.cos((35.1 * Math.PI) / 180);       // keep the island's proportions
  const H = Math.round((latMax - latMin) * kLat);
  const px = (lon: number) => (lon - lngMin) * k;
  const py = (lat: number) => (latMax - lat) * kLat;
  const coast = CYPRUS_OUTLINE.map(([lon, lat], i) => `${i ? 'L' : 'M'}${px(lon).toFixed(1)},${py(lat).toFixed(1)}`).join(' ') + 'Z';
  const radius = (cap: number) => 4 + Math.sqrt(cap) * 2.4;
  const bySize = [...rows].sort((a, b) => b.capacity - a.capacity);

  return (
    <>
      <ChartFrame name="overflow-map" title={t.title} subtitle={t.sub} source={t.src} height={H}
        legend={[{ color: RECORD, label: t.filled }, { color: CURRENT, label: t.other }]}>
        <path d={coast} className="fill-current text-gray-100 dark:text-gray-800" stroke={MUTED} strokeWidth={1} />
        {bySize.map(r => {
          const c = DAM_COORDS[r.name];
          if (!c) return null;
          const cx = px(c[0]), cy = py(c[1]);
          const n = order.get(r.name);
          const tip = `<b>${damName(r.name, lang)}</b> · ${fmt(r.capacity, r.capacity < 1 ? 2 : 1)} ${UNIT[lang]}<br/>${t.peak}: ${fmt(r.peakPct, 0)}%${r.fullFrom ? ` · ${dayLabel(r.fullFrom, lang)}` : ''}`;
          return (
            <g key={r.name} onMouseMove={e => show(e, tip)} onMouseLeave={hide}>
              <circle cx={cx} cy={cy} r={radius(r.capacity)} fill={n ? RECORD : CURRENT}
                fillOpacity={n ? 0.9 : 0.2 + 0.6 * (r.peakPct / 100)} stroke="white" strokeWidth={1.5} />
              {n && <Note x={cx + radius(r.capacity) + 3} y={cy - 4} fontWeight={700} style={{ fill: RECORD }}>{n}</Note>}
              {BIG_LABEL[r.name] && (
                <Note x={cx + BIG_LABEL[r.name].dx} y={cy + BIG_LABEL[r.name].dy} textAnchor={BIG_LABEL[r.name].anchor}>
                  {`${damName(r.name, lang)} ${fmt(r.peakPct, 0)}%`}
                </Note>
              )}
            </g>
          );
        })}
        <Label x={24} y={32} fontWeight={600}>{t.list}</Label>
        {full.map((r, i) => (
          <Note key={r.name} x={24} y={56 + i * 21}>
            <tspan fontWeight={700} style={{ fill: RECORD }}>{i + 1}</tspan>
            {`  ${damName(r.name, lang)} · ${dayLabel(r.fullFrom!, lang)}`}
          </Note>
        ))}
      </ChartFrame>
      {node}
    </>
  );
}

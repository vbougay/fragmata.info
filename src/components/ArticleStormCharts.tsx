"use client";

/**
 * Charts for the late-summer storms article (Aug–Sep 2026).
 *
 * Station rainfall is a static table rolled up from Cyprus Department of
 * Meteorology AWS gauges via kairika.info (see
 * community/research/LATE-SUMMER-STORMS-RESEARCH.md). Inflow and Achna storage
 * come from the dataset / historical series at render time.
 * Plain SVG, same editorial-figure approach as ArticleSummerCharts.
 */

import React, { useMemo, useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useDataContext } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';
import { yearlyInflowData } from '@/utils/dataManager';
import { historicalStorageData } from '@/utils/historicalStorageData';

type Lang = 'en' | 'el' | 'ru';
const L = <T,>(m: { en: T } & Partial<Record<Lang, T>>, lang: string): T => m[lang as Lang] ?? m.en;

const ACCENT = '#2f7fd8';
const RAIN = '#0f9d8a';
const MUTED = '#9aa0a8';
const RECORD = '#d94f2b';

const fmt = (v: number, d = 1) => v.toFixed(d);

/* ---------- shared frame (mirrors ArticleSummerCharts) ---------- */

interface FrameProps {
  title: string; subtitle: string; source: string; height: number;
  children: React.ReactNode; legend?: { color: string; label: string }[]; minWidth?: number;
}

function Frame({ title, subtitle, source, height, children, legend, minWidth = 640 }: FrameProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4 sm:p-5">
        <h4 className="text-base font-semibold leading-snug text-gray-900 dark:text-gray-100">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{subtitle}</p>
        {legend && legend.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
            {legend.map(l => (
              <span key={l.label} className="inline-flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <i className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ background: l.color }} />
                {l.label}
              </span>
            ))}
          </div>
        )}
        <div className="relative mt-3">
          <div className="overflow-x-auto [mask-image:linear-gradient(to_right,black_calc(100%-20px),transparent)] sm:[mask-image:none]">
            <svg viewBox={`0 0 1000 ${height}`} className="block h-auto w-full" style={{ minWidth }}
              role="img" aria-label={`${title}. ${subtitle}`}>
              {children}
            </svg>
          </div>
        </div>
        <p className="mt-1.5 text-[11px] text-gray-400 dark:text-gray-500 sm:hidden">← swipe to see the full chart →</p>
        <p className="mt-3 border-t border-gray-200 pt-2 text-[11px] leading-relaxed text-gray-500 dark:border-gray-700 dark:text-gray-500">{source}</p>
      </CardContent>
    </Card>
  );
}

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

/* ================= 1. Station rainfall, Aug 1 – Sep 24 ================= */

interface StationRow {
  name: Record<Lang, string>;
  y2026: number;
  median: number;
  best: number;     // best year other than 2026
  bestYear: number;
  since: number;
  rank: number;
  years: number;
}

// Aug 1 – Sep 24 totals, years with ≥90% daily coverage. DoM AWS via kairika.info.
const STATIONS: StationRow[] = [
  { name: { en: 'Achna', el: 'Άχνα', ru: 'Ахна' }, y2026: 68.8, median: 0.3, best: 29.1, bestYear: 2005, since: 2004, rank: 1, years: 23 },
  { name: { en: 'Larnaca Airport', el: 'Αεροδρόμιο Λάρνακας', ru: 'Аэропорт Ларнаки' }, y2026: 57.1, median: 3.4, best: 45.8, bestYear: 2002, since: 2000, rank: 1, years: 17 },
  { name: { en: 'Kouris Dam', el: 'Φράγμα Κούρη', ru: 'Дамба Курис' }, y2026: 20.6, median: 0.4, best: 11.4, bestYear: 2017, since: 2010, rank: 1, years: 17 },
  { name: { en: 'Polystypos', el: 'Πολύστυπος', ru: 'Полистипос' }, y2026: 79.9, median: 32.0, best: 42.1, bestYear: 2018, since: 2011, rank: 1, years: 16 },
  { name: { en: 'Nicosia', el: 'Λευκωσία', ru: 'Никосия' }, y2026: 30.7, median: 1.6, best: 130.2, bestYear: 2003, since: 2000, rank: 2, years: 24 },
  { name: { en: 'Lefkara', el: 'Λεύκαρα', ru: 'Лефкара' }, y2026: 106.7, median: 20.8, best: 367.2, bestYear: 2009, since: 2004, rank: 2, years: 22 },
  { name: { en: 'Troodos', el: 'Τρόοδος', ru: 'Троодос' }, y2026: 91.9, median: 41.5, best: 242.4, bestYear: 2009, since: 2005, rank: 5, years: 22 },
  { name: { en: 'Prodromos', el: 'Πρόδρομος', ru: 'Продромос' }, y2026: 58.9, median: 32.6, best: 222.7, bestYear: 2009, since: 2003, rank: 6, years: 24 },
];

export function StationRainChart() {
  const { language } = useLanguage();
  const { show, hide, node } = useTip();

  const t = L({
    en: {
      title: 'Four gauges set late-summer records',
      sub: 'Rainfall from 1 August to 24 September at eight Met Department stations. Bars are 2026; the grey tick is a typical year (median); the red tick is the wettest other year on record. At Achna, Larnaca Airport, Kouris Dam and Polystypos, 2026 beat every year on file. In the high Troodos, 2009 was far wetter.',
      src: 'Cyprus Department of Meteorology automatic weather stations (CC BY 4.0), daily totals via kairika.info. Years with at least 90% of days reported. Scale capped at 250 mm.',
      y26: '2026', med: 'Typical year (median)', best: 'Wettest other year', rank: (r: number, n: number, s: number) => r === 1 ? `record since ${s}` : `#${r} of ${n} since ${s}`,
    },
    el: {
      title: 'Τέσσερις σταθμοί κατέγραψαν ρεκόρ τέλους καλοκαιριού',
      sub: 'Βροχόπτωση από 1 Αυγούστου έως 24 Σεπτεμβρίου σε οκτώ σταθμούς του Τμήματος Μετεωρολογίας. Οι μπάρες είναι το 2026· η γκρίζα γραμμή μια συνηθισμένη χρονιά (διάμεσος)· η κόκκινη η πιο βροχερή άλλη χρονιά. Στην Άχνα, στο Αεροδρόμιο Λάρνακας, στο Φράγμα Κούρη και στον Πολύστυπο, το 2026 ξεπέρασε κάθε χρονιά των καταγραφών. Στο ψηλό Τρόοδος, το 2009 ήταν πολύ πιο βροχερό.',
      src: 'Αυτόματοι μετεωρολογικοί σταθμοί Τμήματος Μετεωρολογίας (CC BY 4.0), ημερήσια σύνολα μέσω kairika.info. Χρονιές με τουλάχιστον 90% των ημερών. Κλίμακα έως 250 mm.',
      y26: '2026', med: 'Συνηθισμένη χρονιά (διάμεσος)', best: 'Πιο βροχερή άλλη χρονιά', rank: (r: number, n: number, s: number) => r === 1 ? `ρεκόρ από το ${s}` : `${r}η από ${n} από το ${s}`,
    },
    ru: {
      title: 'Четыре станции установили рекорды конца лета',
      sub: 'Осадки с 1 августа по 24 сентября на восьми станциях Департамента метеорологии. Столбцы — 2026 год; серая отметка — обычный год (медиана); красная — самый дождливый другой год. В Ахне, аэропорту Ларнаки, на дамбе Курис и в Полистипосе 2026-й превзошёл все годы наблюдений. В высоком Троодосе 2009-й был намного дождливее.',
      src: 'Автоматические метеостанции Департамента метеорологии Кипра (CC BY 4.0), суточные суммы через kairika.info. Годы, где есть данные минимум за 90% дней. Шкала ограничена 250 мм.',
      y26: '2026', med: 'Обычный год (медиана)', best: 'Самый дождливый другой год', rank: (r: number, n: number, s: number) => r === 1 ? `рекорд с ${s}` : `${r}-е из ${n} с ${s}`,
    },
  }, language);

  const W = 1000, rowH = 40, m = { t: 20, r: 190, b: 30, l: 170 };
  const H = m.t + STATIONS.length * rowH + m.b;
  const CAP = 250;
  const x = (v: number) => m.l + (Math.min(v, CAP) / CAP) * (W - m.l - m.r);
  const ticks = [0, 50, 100, 150, 200, 250];

  return (
    <>
      <Frame title={t.title} subtitle={t.sub} source={t.src} height={H}
        legend={[{ color: RAIN, label: t.y26 }, { color: MUTED, label: t.med }, { color: RECORD, label: t.best }]}>
        {ticks.map(v => (
          <g key={v}>
            <Grid x1={x(v)} x2={x(v)} y1={m.t - 6} y2={H - m.b} />
            <AxisText x={x(v)} y={H - m.b + 16} textAnchor="middle">{v === CAP ? `${v}+ mm` : v}</AxisText>
          </g>
        ))}
        {STATIONS.map((s, i) => {
          const cy = m.t + i * rowH + rowH / 2;
          const record = s.rank === 1;
          const tip = `<b>${L(s.name, language)}</b><br/>2026: ${fmt(s.y2026)} mm<br/>${t.med}: ${fmt(s.median)} mm<br/>${t.best}: ${fmt(s.best)} mm (${s.bestYear})`;
          return (
            <g key={s.name.en} onMouseMove={e => show(e, tip)} onMouseLeave={hide}>
              <rect x={0} y={cy - rowH / 2} width={W} height={rowH} fill="transparent" />
              <Label x={m.l - 10} y={cy + 4} textAnchor="end" fontWeight={record ? 600 : 400}>{L(s.name, language)}</Label>
              <rect x={m.l} y={cy - 9} width={x(s.y2026) - m.l} height={18} rx={2} fill={RAIN} opacity={record ? 1 : 0.55} />
              <line x1={x(s.median)} x2={x(s.median)} y1={cy - 13} y2={cy + 13} stroke={MUTED} strokeWidth={3} />
              <line x1={x(s.best)} x2={x(s.best)} y1={cy - 13} y2={cy + 13} stroke={RECORD} strokeWidth={3} />
              {s.best > CAP && <AxisText x={x(s.best) - 6} y={cy - 12} textAnchor="end">{fmt(s.best, 0)} mm ({s.bestYear}) →</AxisText>}
              <Note x={W - m.r + 12} y={cy + 4} fontWeight={record ? 700 : 500}>
                {fmt(s.y2026)} mm · {t.rank(s.rank, s.years, s.since)}
              </Note>
            </g>
          );
        })}
      </Frame>
      {node}
    </>
  );
}

/* ================= 2. Aug–Sep inflow by season ================= */

export function AugSepInflowChart() {
  const { language } = useLanguage();
  const { currentDataSetId: ds } = useDataContext();
  const { show, hide, node } = useTip();
  const rows = useMemo(() => yearlyInflowData(ds).map(y => ({ year: y.year, v: y.months['Aug-Sep'] ?? 0, jul: y.months['July'] ?? 0 })), [ds]);
  const cur = rows[rows.length - 1];
  const prevBest = rows.slice(0, -1).reduce((a, b) => (b.v > a.v ? b : a));

  const t = L({
    en: {
      title: `Aug–Sep inflow: ${fmt(cur.v, 2)} mln. m³, ${fmt(cur.v / prevBest.v, 1)}× the previous best`,
      sub: `Water that reached the dams in August and September, by hydrological season. The previous high was ${prevBest.year} at ${fmt(prevBest.v, 2)} mln. m³. In six of the other ten seasons it was under 0.1 mln. m³.`,
      src: 'Cyprus Water Development Department, monthly inflow table in the daily bulletin; 2025/26 through the latest bulletin, with the last days of September still to come.',
      unit: 'mln. m³',
    },
    el: {
      title: `Εισροή Αυγ–Σεπ: ${fmt(cur.v, 2)} εκατ. κ.μ., ${fmt(cur.v / prevBest.v, 1)}× το προηγούμενο ρεκόρ`,
      sub: `Νερό που έφτασε στα φράγματα τον Αύγουστο και τον Σεπτέμβριο, ανά υδρολογική περίοδο. Το προηγούμενο υψηλό ήταν το ${prevBest.year} με ${fmt(prevBest.v, 2)} εκατ. κ.μ. Σε έξι από τις άλλες δέκα περιόδους ήταν κάτω από 0.1 εκατ. κ.μ.`,
      src: 'Τμήμα Αναπτύξεως Υδάτων, πίνακας μηνιαίας εισροής στο ημερήσιο δελτίο· 2025/26 ως το τελευταίο δελτίο, με τις τελευταίες μέρες του Σεπτεμβρίου να απομένουν.',
      unit: 'εκατ. κ.μ.',
    },
    ru: {
      title: `Приток за авг–сен: ${fmt(cur.v, 2)} млн. м³, в ${fmt(cur.v / prevBest.v, 1)} раза больше прежнего рекорда`,
      sub: `Вода, поступившая в дамбы в августе и сентябре, по гидрологическим сезонам. Прежний максимум — ${prevBest.year}, ${fmt(prevBest.v, 2)} млн. м³. В шести из остальных десяти сезонов — меньше 0.1 млн. м³.`,
      src: 'Департамент водного развития Кипра, таблица месячного притока в ежедневном бюллетене; 2025/26 по последний бюллетень, последние дни сентября ещё впереди.',
      unit: 'млн. м³',
    },
  }, language);

  const W = 1000, H = 320, m = { t: 30, r: 20, b: 36, l: 50 };
  const max = Math.ceil(cur.v * 1.15 * 10) / 10;
  const bw = (W - m.l - m.r) / rows.length;
  const y = (v: number) => (H - m.b) - (v / max) * (H - m.b - m.t);
  const ticks = [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5].filter(v => v <= max);

  return (
    <>
      <Frame title={t.title} subtitle={t.sub} source={t.src} height={H} minWidth={560}>
        {ticks.map(v => (
          <g key={v}>
            <Grid x1={m.l} x2={W - m.r} y1={y(v)} y2={y(v)} />
            <AxisText x={m.l - 8} y={y(v) + 3} textAnchor="end">{fmt(v, 2)}</AxisText>
          </g>
        ))}
        {rows.map((r, i) => {
          const isCur = r === cur;
          const bx = m.l + i * bw + bw * 0.18;
          return (
            <g key={r.year} onMouseMove={e => show(e, `<b>${r.year}</b><br/>Aug–Sep: ${fmt(r.v, 3)} ${t.unit}`)} onMouseLeave={hide}>
              <rect x={m.l + i * bw} y={m.t} width={bw} height={H - m.t - m.b} fill="transparent" />
              <rect x={bx} y={y(r.v)} width={bw * 0.64} height={Math.max(1, (H - m.b) - y(r.v))} rx={2}
                fill={isCur ? ACCENT : MUTED} opacity={isCur ? 1 : 0.6} />
              {(isCur || r === prevBest) && (
                <Note x={bx + bw * 0.32} y={y(r.v) - 7} textAnchor="middle" fontWeight={isCur ? 700 : 500}>{fmt(r.v, 3)}</Note>
              )}
              <AxisText x={bx + bw * 0.32} y={H - m.b + 16} textAnchor="middle" fontWeight={isCur ? 700 : 400}>{r.year}</AxisText>
            </g>
          );
        })}
      </Frame>
      {node}
    </>
  );
}

/* ================= 3. Achna: storage vs rain at the Achna gauge ================= */

// Daily rain at the Achna AWS, June–September 2026 (all non-zero days).
const ACHNA_RAIN: { day: string; mm: number }[] = [
  { day: '2026-07-25', mm: 0.1 },
  { day: '2026-08-29', mm: 68.1 },
  { day: '2026-09-17', mm: 0.1 },
  { day: '2026-09-18', mm: 0.6 },
];

export function AchnaRefillChart() {
  const { language } = useLanguage();
  const { show, hide, node } = useTip();
  const pts = useMemo(
    () => historicalStorageData
      .filter(e => e.date >= '2026-06-01' && e.achna != null)
      .map(e => ({ day: e.date, v: e.achna as number })),
    [],
  );
  const last = pts[pts.length - 1];
  const low = pts.reduce((a, b) => (b.v < a.v ? b : a));

  const t = L({
    en: {
      title: 'Achna: a record storm did nothing; a dry fortnight later it tripled',
      sub: `Storage in Achna dam (line) against daily rain at the Achna weather station (bars). The 68 mm downpour of 29 August stopped the slide but added nothing. The rise began in mid-September, on days with almost no rain, from ${fmt(low.v, 3)} to ${fmt(last.v, 3)} mln. m³.`,
      src: 'Storage: Cyprus Water Development Department daily bulletins (Achna inflow recorded as zero all season). Rain: Cyprus Department of Meteorology, Achna AWS, via kairika.info.',
      storage: 'Storage, mln. m³', rain: 'Rain at Achna, mm', storm: '29 Aug · 68 mm', farmers: '16 Sep · cabinet releases extra Southern Conveyor water to farmers',
      months: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    el: {
      title: 'Άχνα: η καταιγίδα-ρεκόρ δεν άλλαξε τίποτα· μετά από ένα ξερό δεκαπενθήμερο τα αποθέματα τριπλασιάστηκαν',
      sub: `Αποθέματα του φράγματος της Άχνας (γραμμή) και ημερήσια βροχή στον μετεωρολογικό σταθμό της Άχνας (μπάρες). Η νεροποντή των 68 mm της 29ης Αυγούστου σταμάτησε την πτώση αλλά δεν πρόσθεσε τίποτα. Η άνοδος ξεκίνησε στα μέσα Σεπτεμβρίου, σχεδόν χωρίς βροχή, από ${fmt(low.v, 3)} σε ${fmt(last.v, 3)} εκατ. κ.μ.`,
      src: 'Αποθέματα: ημερήσια δελτία Τμήματος Αναπτύξεως Υδάτων (μηδενική εισροή στην Άχνα όλη τη σεζόν). Βροχή: Τμήμα Μετεωρολογίας, σταθμός Άχνας, μέσω kairika.info.',
      storage: 'Αποθέματα, εκατ. κ.μ.', rain: 'Βροχή στην Άχνα, mm', storm: '29 Αυγ · 68 mm', farmers: '16 Σεπ · επιπλέον νερό του Νότιου Αγωγού για γεωργούς',
      months: ['Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ'],
    },
    ru: {
      title: 'Ахна: рекордный ливень ничего не дал, а после двух сухих недель запас утроился',
      sub: `Запас дамбы Ахна (линия) и суточные осадки на метеостанции Ахна (столбцы). Ливень 29 августа (68 мм) остановил снижение, но ничего не добавил. Рост начался в середине сентября, когда дождей почти не было: с ${fmt(low.v, 3)} до ${fmt(last.v, 3)} млн. м³.`,
      src: 'Запас: ежедневные бюллетени Департамента водного развития (приток в Ахну весь сезон нулевой). Осадки: Департамент метеорологии, станция Ахна, через kairika.info.',
      storage: 'Запас, млн. м³', rain: 'Осадки в Ахне, мм', storm: '29 авг · 68 мм', farmers: '16 сен · кабмин выделяет фермерам доп. воду Южного водовода',
      months: ['июн', 'июл', 'авг', 'сен', 'окт'],
    },
  }, language);

  const W = 1000, H = 360, m = { t: 30, r: 60, b: 36, l: 56 };
  const t0 = Date.parse('2026-06-01'), t1 = Date.parse('2026-10-01');
  const x = (d: string) => m.l + ((Date.parse(d) - t0) / (t1 - t0)) * (W - m.l - m.r);
  const vMax = 0.3;
  const y = (v: number) => (H - m.b) - (v / vMax) * (H - m.b - m.t);
  const rMax = 75;
  const yr = (mm: number) => (H - m.b) - (mm / rMax) * (H - m.b - m.t);
  const path = pts.map((p, i) => `${i ? 'L' : 'M'}${x(p.day).toFixed(1)},${y(p.v).toFixed(1)}`).join(' ');
  const monthStarts = ['2026-06-01', '2026-07-01', '2026-08-01', '2026-09-01', '2026-10-01'];

  return (
    <>
      <Frame title={t.title} subtitle={t.sub} source={t.src} height={H}
        legend={[{ color: ACCENT, label: t.storage }, { color: RAIN, label: t.rain }]}>
        {[0, 0.1, 0.2, 0.3].map(v => (
          <g key={v}>
            <Grid x1={m.l} x2={W - m.r} y1={y(v)} y2={y(v)} />
            <AxisText x={m.l - 8} y={y(v) + 3} textAnchor="end">{fmt(v, 1)}</AxisText>
          </g>
        ))}
        {[0, 25, 50, 75].map(v => (
          <AxisText key={v} x={W - m.r + 8} y={yr(v) + 3}>{v} mm</AxisText>
        ))}
        {monthStarts.map((d, i) => (
          <AxisText key={d} x={x(d)} y={H - m.b + 16} textAnchor="middle">{t.months[i]}</AxisText>
        ))}
        {ACHNA_RAIN.map(r => (
          <rect key={r.day} x={x(r.day) - 3} y={yr(r.mm)} width={6} height={Math.max(1, (H - m.b) - yr(r.mm))} fill={RAIN} opacity={0.8}
            onMouseMove={e => show(e, `<b>${r.day}</b><br/>${fmt(r.mm)} mm`)} onMouseLeave={hide} />
        ))}
        <Note x={x('2026-08-29') - 8} y={yr(68.1) + 4} textAnchor="end">{t.storm}</Note>
        <line x1={x('2026-09-16')} x2={x('2026-09-16')} y1={m.t} y2={H - m.b} stroke={RECORD} strokeDasharray="4 4" strokeWidth={1.5} />
        <Note x={x('2026-09-16') - 6} y={m.t + 4} textAnchor="end">{t.farmers}</Note>
        <path d={path} fill="none" stroke={ACCENT} strokeWidth={2.5} />
        {pts.map(p => (
          <circle key={p.day} cx={x(p.day)} cy={y(p.v)} r={p === last ? 5 : 2.5} fill={ACCENT}
            onMouseMove={e => show(e, `<b>${p.day}</b><br/>${fmt(p.v, 3)} mln. m³`)} onMouseLeave={hide} />
        ))}
        <Note x={x(last.day) + 8} y={y(last.v) + 4}>{fmt(last.v, 3)}</Note>
      </Frame>
      {node}
    </>
  );
}

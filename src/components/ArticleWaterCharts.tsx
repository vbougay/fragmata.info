"use client";

/**
 * Charts for the "where Cyprus's water comes from and where it goes" article.
 *
 * The flow diagram draws the static 2024 ledger in utils/waterBalanceData.ts.
 * Plain SVG, same editorial-figure approach as ArticleYearReviewCharts.
 */

import React, { useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import {
  WATER_BALANCE_YEAR,
  WATER_SOURCES,
  WATER_USES,
  WATER_FLOWS,
  ESTIMATED_SOURCES,
  DAM_INFLOW,
  DAM_STORAGE_DRAW,
  totalForSource,
  totalForUse,
  type WaterSource,
  type WaterUse,
} from '@/utils/waterBalanceData';
import { WEEKLY_BULLETINS } from '@/utils/desalinationWeekly';
import { SUPPLY_BY_SOURCE } from '@/utils/desalinationData';

type Lang = 'en' | 'el' | 'ru';
const L = <T,>(m: { en: T } & Partial<Record<Lang, T>>, lang: string): T => m[lang as Lang] ?? m.en;
const lng = (language: string): Lang => (['en', 'el', 'ru'].includes(language) ? language : 'en') as Lang;

const UNIT: Record<Lang, string> = { en: 'mln. m³', el: 'εκατ. κ.μ.', ru: 'млн. м³' };

const SOURCE_COLOR: Record<WaterSource, string> = {
  desalination: '#0f9d8a',
  dams: '#2f7fd8',
  govBoreholes: '#e2691f',
  recycled: '#8a63d2',
  privateBoreholes: '#9aa0a8',
};
const USE_COLOR = '#6b7280';

const fmt = (v: number, d = 1) => v.toFixed(d);

/* ---------- shared frame (mirrors ArticleYearReviewCharts) ---------- */

interface FrameProps {
  title: string; subtitle: string; source: string; height: number;
  children: React.ReactNode; minWidth?: number; legend?: { color: string; label: string }[];
}

function Frame({ title, subtitle, source, height, children, minWidth = 640, legend }: FrameProps) {
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
              role="img" aria-label={`${title.replace(/[.!?]$/, '')}. ${subtitle}`}>
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

const SubText = (p: React.SVGProps<SVGTextElement>) => (
  <text {...p} className="fill-current text-[10px] tabular-nums text-gray-500 dark:text-gray-400" />
);
const Label = (p: React.SVGProps<SVGTextElement>) => (
  <text {...p} className="fill-current text-[12px] tabular-nums text-gray-700 dark:text-gray-300" />
);
const Note = (p: React.SVGProps<SVGTextElement>) => (
  <text {...p} className="fill-current text-[11px] font-medium tabular-nums text-gray-700 dark:text-gray-200" />
);

function useTip() {
  const [tip, setTip] = useState<{ x: number; y: number; html: string } | null>(null);
  const show = useCallback((e: React.MouseEvent, html: string) => setTip({ x: e.clientX, y: e.clientY, html }), []);
  const hide = useCallback(() => setTip(null), []);
  const node = tip ? (
    <div
      className="pointer-events-none fixed z-50 whitespace-nowrap rounded border border-gray-200 bg-white px-2 py-1 text-[11px] leading-relaxed tabular-nums text-gray-900 shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
      style={{ left: Math.min(tip.x + 12, (typeof window !== 'undefined' ? window.innerWidth : 1e4) - 230), top: tip.y - 46 }}
      dangerouslySetInnerHTML={{ __html: tip.html }}
    />
  ) : null;
  return { show, hide, node };
}

/* ================= Sources to uses, one year ================= */

export function WaterFlowChart() {
  const lang = lng(useLanguage().language);
  const { show, hide, node } = useTip();
  const [hot, setHot] = useState<number | null>(null);
  const u = UNIT[lang];

  const est = (s: WaterSource) => ESTIMATED_SOURCES.includes(s);
  const num = (v: number, approx: boolean) => (approx ? `≈${Math.round(v)}` : fmt(v));
  const privateTotal = totalForSource('privateBoreholes');

  const t = L({
    en: {
      title: `Where Cyprus's water came from in ${WATER_BALANCE_YEAR}, and where it went`,
      sub: `Sources on the left, uses on the right, in ${u}; the width of each band is its volume. The dams gave out ${fmt(totalForSource('dams'))} while only ${fmt(DAM_INFLOW)} flowed in, so most of it came out of storage. Hatched bands are estimates.`,
      src: `Taps and farms: Water Development Department supply and irrigation tables for the Government Water Works, ${WATER_BALANCE_YEAR}. Recharge and private boreholes: Eurostat (env_wat_abs); the borehole figure is a standing estimate, not a measurement. Evaporation and other losses: what is left of the 18 main dams' outflow after deliveries, Fragmata's calculation from WDD storage and inflow. Villages on their own boreholes (roughly 12 ${u}) are not shown.`,
      sources: {
        desalination: 'Desalination', dams: 'Dams', govBoreholes: 'Government boreholes',
        recycled: 'Recycled water', privateBoreholes: 'Private boreholes',
      } as Record<WaterSource, string>,
      uses: {
        taps: 'Taps', losses: 'Evaporation and other losses', recharge: 'Aquifer recharge', farms: 'Farms',
      } as Record<WaterUse, string>,
      damSub: [`${fmt(DAM_INFLOW)} flowed in during the year,`, `${fmt(DAM_STORAGE_DRAW)} came out of storage`],
      privateSub: ['estimated: nobody meters it'],
      tapsSub: ['two thirds of it desalinated'],
      farmsSub: [`about ${Math.round(privateTotal)} of it from private boreholes`],
      to: 'to',
    },
    el: {
      title: `Από πού ήρθε το νερό της Κύπρου το ${WATER_BALANCE_YEAR} και πού πήγε`,
      sub: `Οι πηγές αριστερά, οι χρήσεις δεξιά, σε ${u}· το πλάτος κάθε ζώνης είναι ο όγκος της. Τα φράγματα έδωσαν ${fmt(totalForSource('dams'))} ενώ δέχτηκαν μόνο ${fmt(DAM_INFLOW)}, άρα το μεγαλύτερο μέρος βγήκε από τα αποθέματα. Οι διαγραμμισμένες ζώνες είναι εκτιμήσεις.`,
      src: `Βρύσες και γεωργία: πίνακες υδατοπρομήθειας και άρδευσης του Τμήματος Αναπτύξεως Υδάτων για τα Κυβερνητικά Υδατικά Έργα, ${WATER_BALANCE_YEAR}. Εμπλουτισμός και ιδιωτικές γεωτρήσεις: Eurostat (env_wat_abs)· ο αριθμός των γεωτρήσεων είναι πάγια εκτίμηση, όχι μέτρηση. Εξάτμιση και άλλες απώλειες: ό,τι απομένει από τις εκροές των 18 κύριων φραγμάτων μετά τις διαθέσεις, υπολογισμός του Fragmata από τα αποθέματα και τις εισροές του ΤΑΥ. Δεν εμφανίζονται οι κοινότητες με δικές τους γεωτρήσεις (περίπου 12 ${u}).`,
      sources: {
        desalination: 'Αφαλάτωση', dams: 'Φράγματα', govBoreholes: 'Κυβερνητικές γεωτρήσεις',
        recycled: 'Ανακυκλωμένο νερό', privateBoreholes: 'Ιδιωτικές γεωτρήσεις',
      } as Record<WaterSource, string>,
      uses: {
        taps: 'Βρύσες', losses: 'Εξάτμιση και άλλες απώλειες', recharge: 'Εμπλουτισμός υδροφορέων', farms: 'Γεωργία',
      } as Record<WaterUse, string>,
      damSub: [`${fmt(DAM_INFLOW)} μπήκαν μέσα στη χρονιά,`, `${fmt(DAM_STORAGE_DRAW)} βγήκαν από τα αποθέματα`],
      privateSub: ['εκτίμηση: κανείς δεν τις μετρά'],
      tapsSub: ['τα δύο τρίτα από αφαλάτωση'],
      farmsSub: [`περίπου ${Math.round(privateTotal)} από ιδιωτικές γεωτρήσεις`],
      to: '→',
    },
    ru: {
      title: `Откуда на Кипре взялась вода в ${WATER_BALANCE_YEAR} году и куда она ушла`,
      sub: `Источники слева, потребители справа, в ${u}; ширина каждой полосы — объём. Водохранилища отдали ${fmt(totalForSource('dams'))}, а получили лишь ${fmt(DAM_INFLOW)}, так что бо́льшая часть ушла из запасов. Заштрихованные полосы — оценки.`,
      src: `Краны и сельское хозяйство: таблицы водоснабжения и полива Департамента водного развития по государственным водным системам, ${WATER_BALANCE_YEAR}. Подпитка и частные скважины: Евростат (env_wat_abs); цифра по скважинам — постоянная оценка, а не измерение. Испарение и прочие потери: остаток оттока 18 основных водохранилищ после поставок, расчёт Fragmata по запасам и притоку ДВР. Деревни на собственных скважинах (около 12 ${u}) не показаны.`,
      sources: {
        desalination: 'Опреснение', dams: 'Водохранилища', govBoreholes: 'Государственные скважины',
        recycled: 'Очищенные стоки', privateBoreholes: 'Частные скважины',
      } as Record<WaterSource, string>,
      uses: {
        taps: 'Краны', losses: 'Испарение и прочие потери', recharge: 'Подпитка водоносных горизонтов', farms: 'Сельское хозяйство',
      } as Record<WaterUse, string>,
      damSub: [`${fmt(DAM_INFLOW)} поступило за год,`, `${fmt(DAM_STORAGE_DRAW)} взято из запасов`],
      privateSub: ['оценка: их никто не учитывает'],
      tapsSub: ['две трети — опреснённая'],
      farmsSub: [`около ${Math.round(privateTotal)} из частных скважин`],
      to: '→',
    },
  }, lang);

  const W = 1000, H = 540, top = 18, bottom = 14;
  const x0 = 268, x1 = 690, bw = 14;
  const gapS = 20, gapU = 28;
  const total = WATER_FLOWS.reduce((a, f) => a + f.value, 0);
  const gaps = Math.max(gapS * (WATER_SOURCES.length - 1), gapU * (WATER_USES.length - 1));
  const s = (H - top - bottom - gaps) / total;

  // Node positions, stacked top to bottom in the declared order.
  const place = <K extends string>(keys: K[], size: (k: K) => number, gap: number) => {
    const pos = {} as Record<K, { y: number; h: number }>;
    let y = top;
    for (const k of keys) {
      const h = size(k) * s;
      pos[k] = { y, h };
      y += h + gap;
    }
    return pos;
  };
  const src = place(WATER_SOURCES, totalForSource, gapS);
  const use = place(WATER_USES, totalForUse, gapU);

  // Bands leave each source in the order of the uses and arrive in the order of the sources, so none cross needlessly.
  const outAt = Object.fromEntries(WATER_SOURCES.map(k => [k, src[k].y])) as Record<WaterSource, number>;
  const inAt = Object.fromEntries(WATER_USES.map(k => [k, use[k].y])) as Record<WaterUse, number>;
  const ordered = [...WATER_FLOWS].sort((a, b) =>
    WATER_SOURCES.indexOf(a.from) - WATER_SOURCES.indexOf(b.from) || WATER_USES.indexOf(a.to) - WATER_USES.indexOf(b.to));
  const bands = ordered.map(f => {
    const h = f.value * s;
    const ya = outAt[f.from]; outAt[f.from] += h;
    return { ...f, h, ya, yb: 0 };
  });
  for (const k of WATER_USES) {
    for (const b of bands.filter(b => b.to === k)) { b.yb = inAt[k]; inAt[k] += b.h; }
  }

  const xa = x0 + bw, mx = (xa + x1) / 2;
  const path = (b: { ya: number; yb: number; h: number }) =>
    `M${xa},${b.ya.toFixed(1)} C${mx},${b.ya.toFixed(1)} ${mx},${b.yb.toFixed(1)} ${x1},${b.yb.toFixed(1)} ` +
    `L${x1},${(b.yb + b.h).toFixed(1)} C${mx},${(b.yb + b.h).toFixed(1)} ${mx},${(b.ya + b.h).toFixed(1)} ${xa},${(b.ya + b.h).toFixed(1)} Z`;

  const subs: Partial<Record<WaterSource | WaterUse, string[]>> = {
    dams: t.damSub, privateBoreholes: t.privateSub, taps: t.tapsSub, farms: t.farmsSub,
  };
  // Name and value on one line, optional small lines under it, centred on the node.
  const nodeLabel = (key: WaterSource | WaterUse, name: string, value: string, x: number, yc: number, anchor: 'start' | 'end') => {
    const extra = subs[key] ?? [];
    const y = yc - (extra.length * 13) / 2 + 4;
    return (
      <g key={key}>
        <Label x={x} y={y} textAnchor={anchor}>
          {name} <tspan className="font-semibold fill-gray-900 dark:fill-gray-100">{value}</tspan>
        </Label>
        {extra.map((line, i) => (
          <SubText key={line} x={x} y={y + 13 * (i + 1)} textAnchor={anchor}>{line}</SubText>
        ))}
      </g>
    );
  };

  return (
    <>
      <Frame title={t.title} subtitle={t.sub} source={t.src} height={H}>
        <defs>
          <pattern id="wf-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="6" height="6" fill={SOURCE_COLOR.privateBoreholes} opacity={0.18} />
            <line x1="0" y1="0" x2="0" y2="6" stroke={SOURCE_COLOR.privateBoreholes} strokeWidth="2.5" />
          </pattern>
        </defs>

        {bands.map((b, i) => (
          <path key={`${b.from}-${b.to}`} d={path(b)}
            fill={est(b.from) ? 'url(#wf-hatch)' : SOURCE_COLOR[b.from]}
            opacity={est(b.from) ? (hot === i ? 0.95 : 0.7) : (hot === i ? 0.6 : 0.34)}
            onMouseMove={e => { setHot(i); show(e, `${t.sources[b.from]} ${t.to} ${lang === 'en' ? t.uses[b.to].toLowerCase() : t.uses[b.to]}: <b>${num(b.value, est(b.from))}</b> ${u}`); }}
            onMouseLeave={() => { setHot(null); hide(); }} />
        ))}
        {bands.filter(b => b.h >= 12 && !est(b.from)).map(b => (
          <Note key={`n-${b.from}-${b.to}`} x={xa + 8} y={b.ya + b.h / 2 + 4} pointerEvents="none">
            {num(b.value, est(b.from))}
          </Note>
        ))}

        {WATER_SOURCES.map(k => (
          <rect key={k} x={x0} y={src[k].y} width={bw} height={Math.max(src[k].h, 2)} rx={2}
            fill={SOURCE_COLOR[k]} />
        ))}
        {WATER_USES.map(k => (
          <rect key={k} x={x1} y={use[k].y} width={bw} height={Math.max(use[k].h, 2)} rx={2} fill={USE_COLOR} />
        ))}

        {WATER_SOURCES.map(k =>
          nodeLabel(k, t.sources[k], num(totalForSource(k), est(k)), x0 - 10, src[k].y + src[k].h / 2, 'end'))}
        {WATER_USES.map(k =>
          nodeLabel(k, t.uses[k], num(totalForUse(k), k === 'farms'), x1 + bw + 10, use[k].y + use[k].h / 2, 'start'))}
      </Frame>
      {node}
    </>
  );
}

/* ================= Tap water by source, week by week ================= */

const MONTHS: Record<Lang, string[]> = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  el: ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαΐ', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ'],
  ru: ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
};
const dayLabel = (iso: string, lang: Lang) => `${+iso.slice(8, 10)} ${MONTHS[lang][+iso.slice(5, 7) - 1]}`;
const sum = (r?: Record<string, number>) => Object.values(r ?? {}).reduce((a, v) => a + v, 0);
const thousands = (v: number) => `${Math.round(v / 1000)}k`;

const DESAL = SOURCE_COLOR.desalination;
const DAMS = SOURCE_COLOR.dams;
const BOREHOLES = SOURCE_COLOR.govBoreholes;

/** Weeks of the WDD weekly bulletin that report plant output, optionally only those ending on or before `upTo` (ISO date). */
export const weeklyMix = (upTo?: string) =>
  weeksWithOutput().filter(w => !upTo || w.weekEnding <= upTo).map(w => {
    const desal = sum(w.desalination), dams = sum(w.treatment);
    return { weekEnding: w.weekEnding, desal, dams, share: desal / (desal + dams), plants: w.desalination ?? {} };
  });
function weeksWithOutput() {
  return WEEKLY_BULLETINS.filter(w => w.desalination && w.treatment);
}

/** `upTo` hides weeks after a date; `brief` drops the sentence on the share's trend (for the dashboard, where tiles state it). */
export function WeeklyMixChart({ upTo, brief = false }: { upTo?: string; brief?: boolean } = {}) {
  const lang = lng(useLanguage().language);
  const { show, hide, node } = useTip();
  const weeks = weeklyMix(upTo);
  if (!weeks.length) return null;
  const first = weeks[0], last = weeks[weeks.length - 1];
  const pct = (v: number) => `${Math.round(v * 100)}%`;

  const t = L({
    en: {
      title: 'Where the tap water came from, week by week',
      sub: 'Drinking water produced each week by the desalination units and by the treatment plants that take water from the dams, m³ a day.',
      trend: ` Desalination's share fell from ${pct(first.share)} in the week to ${dayLabel(first.weekEnding, 'en')} to ${pct(last.share)} in the week to ${dayLabel(last.weekEnding, 'en')}.`,
      gap: ' Only weeks with a published bulletin are shown', noAug: '; there is none for August',
      src: 'Cyprus Water Development Department, weekly «Δελτίο Νερού» workbooks, 2026 (plant output published from June). Treatment-plant output is mostly dam water; Tersefanou also treats some desalinated water from Vasilikos a second time.',
      desal: 'Desalination', dams: 'Treatment plants (dam water)', week: 'week to',
    },
    el: {
      title: 'Από πού ήρθε το νερό της βρύσης, εβδομάδα με εβδομάδα',
      sub: 'Πόσιμο νερό που παρήγαγαν κάθε εβδομάδα οι μονάδες αφαλάτωσης και τα διυλιστήρια που παίρνουν νερό από τα φράγματα, σε κ.μ. την ημέρα.',
      trend: ` Το μερίδιο της αφαλάτωσης έπεσε από ${pct(first.share)} την εβδομάδα ως τις ${dayLabel(first.weekEnding, 'el')} σε ${pct(last.share)} την εβδομάδα ως τις ${dayLabel(last.weekEnding, 'el')}.`,
      gap: ' Εμφανίζονται μόνο οι εβδομάδες με δημοσιευμένο δελτίο', noAug: '· για τον Αύγουστο δεν υπάρχει',
      src: 'Τμήμα Αναπτύξεως Υδάτων, εβδομαδιαία αρχεία «Δελτίο Νερού», 2026 (παραγωγή μονάδων από τον Ιούνιο). Η παραγωγή των διυλιστηρίων είναι κυρίως νερό φραγμάτων· το διυλιστήριο Τερσεφάνου επεξεργάζεται ξανά και μέρος του αφαλατωμένου νερού του Βασιλικού.',
      desal: 'Αφαλάτωση', dams: 'Διυλιστήρια (νερό φραγμάτων)', week: 'εβδομάδα ως',
    },
    ru: {
      title: 'Откуда шла вода в кране, неделя за неделей',
      sub: 'Питьевая вода, произведённая за неделю опреснителями и станциями очистки, которые берут воду из водохранилищ, м³ в сутки.',
      trend: ` Доля опреснения упала с ${pct(first.share)} за неделю до ${dayLabel(first.weekEnding, 'ru')} до ${pct(last.share)} за неделю до ${dayLabel(last.weekEnding, 'ru')}.`,
      gap: ' Показаны только недели с опубликованным бюллетенем', noAug: '; за август его нет',
      src: 'Департамент водного развития Кипра, еженедельные файлы «Δελτίο Νερού», 2026 (выработка станций публикуется с июня). Выработка станций очистки — в основном вода из водохранилищ; станция Терсефану также повторно очищает часть опреснённой воды из Василикоса.',
      desal: 'Опреснение', dams: 'Станции очистки (вода водохранилищ)', week: 'неделя до',
    },
  }, lang);
  // The trend sentence is written for a fall; the dashboard states the share in tiles instead.
  const spansAugust = first.weekEnding < '2026-08-01' && last.weekEnding > '2026-08-31';
  const subtitle = t.sub + (brief ? '' : t.trend) + t.gap + (spansAugust ? t.noAug : '') + '.';

  const W = 1000, H = 340, m = { t: 34, r: 20, b: 40, l: 60 };
  const vMax = 400000;
  const band = (W - m.l - m.r) / weeks.length, bw = Math.min(90, band * 0.5);
  const y = (v: number) => (H - m.b) - (v / vMax) * (H - m.b - m.t);
  return (
    <>
      <Frame title={t.title} subtitle={subtitle} source={t.src} height={H}
        legend={[{ color: DESAL, label: t.desal }, { color: DAMS, label: t.dams }]}>
        {[0, 100000, 200000, 300000, 400000].map(v => (
          <g key={v}>
            <line x1={m.l} x2={W - m.r} y1={y(v)} y2={y(v)} className="stroke-current text-gray-200 dark:text-gray-700" strokeWidth={1} />
            <SubText x={m.l - 8} y={y(v) + 4} textAnchor="end">{v ? thousands(v) : '0'}</SubText>
          </g>
        ))}
        {weeks.map((w, i) => {
          const cx = m.l + band * (i + 0.5), x = cx - bw / 2;
          const tip = `${t.week} ${dayLabel(w.weekEnding, lang)}<br>${t.desal}: <b>${Math.round(w.desal).toLocaleString('en')}</b><br>${t.dams}: <b>${Math.round(w.dams).toLocaleString('en')}</b>`;
          return (
            <g key={w.weekEnding} onMouseMove={e => show(e, tip)} onMouseLeave={hide}>
              <rect x={cx - band / 2} y={m.t} width={band} height={H - m.t - m.b} fill="transparent" />
              <rect x={x} y={y(w.desal)} width={bw} height={y(0) - y(w.desal)} fill={DESAL} />
              <rect x={x} y={y(w.desal + w.dams)} width={bw} height={y(w.desal) - y(w.desal + w.dams) - 2} rx={3} fill={DAMS} />
              <Note x={cx} y={y(w.desal + w.dams) - 8} textAnchor="middle">{pct(w.share)}</Note>
              <SubText x={cx} y={H - m.b + 16} textAnchor="middle">{dayLabel(w.weekEnding, lang)}</SubText>
            </g>
          );
        })}
      </Frame>
      {node}
    </>
  );
}

/* ================= Tap water by source, every year since 1997 ================= */

export function YearlySupplyChart() {
  const lang = lng(useLanguage().language);
  const { show, hide, node } = useTip();
  const u = UNIT[lang];
  const last = SUPPLY_BY_SOURCE[SUPPLY_BY_SOURCE.length - 1];
  const total = (r: typeof last) => r.dams + r.desalination + r.boreholes + (r.tankers ?? 0);
  const share = (r: typeof last) => Math.round((100 * r.desalination) / total(r));
  const y2016 = SUPPLY_BY_SOURCE.find(r => r.year === 2016)!, y2020 = SUPPLY_BY_SOURCE.find(r => r.year === 2020)!;

  const t = L({
    en: {
      title: 'Desalination and the dams take turns at the tap',
      sub: `Drinking water supplied by the Government Water Works each year, by source, ${u}. When the dams are full the plants are throttled back: desalination was ${share(y2016)}% of supply in 2016 and ${share(y2020)}% in 2020. In ${last.year} it was ${share(last)}%.`,
      src: 'Cyprus Water Development Department, «Πηγές Ύδρευσης» (water supply by source), 1997–2024. Tankers: water shipped from Greece in 2008–09.',
      desal: 'Desalination', dams: 'Dams', bore: 'Boreholes', tank: 'Tankers from Greece',
    },
    el: {
      title: 'Αφαλάτωση και φράγματα εναλλάσσονται στη βρύση',
      sub: `Πόσιμο νερό από τα Κυβερνητικά Υδατικά Έργα κάθε χρόνο, ανά πηγή, ${u}. Όταν τα φράγματα είναι γεμάτα, οι μονάδες περιορίζονται: η αφαλάτωση ήταν το ${share(y2016)}% της υδατοπρομήθειας το 2016 και το ${share(y2020)}% το 2020. Το ${last.year} ήταν το ${share(last)}%.`,
      src: 'Τμήμα Αναπτύξεως Υδάτων, «Πηγές Ύδρευσης», 1997–2024. Δεξαμενόπλοια: νερό από την Ελλάδα το 2008–09.',
      desal: 'Αφαλάτωση', dams: 'Φράγματα', bore: 'Γεωτρήσεις', tank: 'Δεξαμενόπλοια από Ελλάδα',
    },
    ru: {
      title: 'Опреснение и водохранилища сменяют друг друга в кране',
      sub: `Питьевая вода государственных водных систем по источникам за каждый год, ${u}. Когда водохранилища полны, опреснители притормаживают: в 2016 году опреснение дало ${share(y2016)}% воды, в 2020-м — ${share(y2020)}%. В ${last.year} году — ${share(last)}%.`,
      src: 'Департамент водного развития Кипра, «Πηγές Ύδρευσης» (источники водоснабжения), 1997–2024. Танкеры: вода, привезённая из Греции в 2008–09 годах.',
      desal: 'Опреснение', dams: 'Водохранилища', bore: 'Скважины', tank: 'Танкеры из Греции',
    },
  }, lang);

  const W = 1000, H = 360, m = { t: 20, r: 16, b: 34, l: 48 };
  const vMax = 120;
  const n = SUPPLY_BY_SOURCE.length, band = (W - m.l - m.r) / n, bw = band * 0.68;
  const y = (v: number) => (H - m.b) - (v / vMax) * (H - m.b - m.t);
  return (
    <>
      <Frame title={t.title} subtitle={t.sub} source={t.src} height={H}
        legend={[{ color: DESAL, label: t.desal }, { color: DAMS, label: t.dams }, { color: BOREHOLES, label: t.bore }, { color: '#9aa0a8', label: t.tank }]}>
        {[0, 20, 40, 60, 80, 100, 120].map(v => (
          <g key={v}>
            <line x1={m.l} x2={W - m.r} y1={y(v)} y2={y(v)} className="stroke-current text-gray-200 dark:text-gray-700" strokeWidth={1} />
            <SubText x={m.l - 8} y={y(v) + 4} textAnchor="end">{v}</SubText>
          </g>
        ))}
        {SUPPLY_BY_SOURCE.map((r, i) => {
          const x = m.l + band * i + (band - bw) / 2;
          const parts: [number, string][] = [[r.desalination, DESAL], [r.dams, DAMS], [r.boreholes, BOREHOLES], [r.tankers ?? 0, '#9aa0a8']];
          let acc = 0;
          const tip = `<b>${r.year}</b><br>${t.desal}: ${fmt(r.desalination)}<br>${t.dams}: ${fmt(r.dams)}<br>${t.bore}: ${fmt(r.boreholes)}${r.tankers ? `<br>${t.tank}: ${fmt(r.tankers)}` : ''}`;
          return (
            <g key={r.year} onMouseMove={e => show(e, tip)} onMouseLeave={hide}>
              <rect x={m.l + band * i} y={m.t} width={band} height={H - m.t - m.b} fill="transparent" />
              {parts.map(([v, c], k) => {
                if (!v) return null;
                const y0 = y(acc), y1 = y(acc + v);
                acc += v;
                return <rect key={k} x={x} y={y1} width={bw} height={Math.max(0, y0 - y1 - (k ? 1.5 : 0))} fill={c} />;
              })}
              {(r.year % 3 === 0 || r.year === last.year) && (
                <SubText x={x + bw / 2} y={H - m.b + 16} textAnchor="middle">{r.year}</SubText>
              )}
            </g>
          );
        })}
      </Frame>
      {node}
    </>
  );
}


/* ================= One plant's output, week by week ================= */

/** Weekly output of one desalination unit against its capacity (plant pages). Text comes from the caller. */
export function PlantWeeklyChart({ plantKey, capacity, title, subtitle, source }: {
  plantKey: string; capacity: number; title: string; subtitle: string; source: string;
}) {
  const lang = lng(useLanguage().language);
  const { show, hide, node } = useTip();
  const weeks = weeksWithOutput()
    .map(w => ({ weekEnding: w.weekEnding, out: w.desalination?.[plantKey] }))
    .filter((w): w is { weekEnding: string; out: number } => w.out !== undefined);
  if (weeks.length < 2) return null;

  // Small outputs (a unit winding down) need more than whole thousands.
  const k = (v: number) => (v >= 10000 ? `${Math.round(v / 1000)}k` : v >= 1000 ? `${(v / 1000).toFixed(1)}k` : String(Math.round(v)));
  const top = Math.max(capacity, ...weeks.map(w => w.out)) * 1.15;
  const step = [2000, 5000, 10000, 20000].find(s => top / s <= 6) ?? 20000;
  const vMax = Math.ceil(top / step) * step;
  const W = 1000, H = 260, m = { t: 28, r: 20, b: 40, l: 60 };
  const band = (W - m.l - m.r) / weeks.length, bw = Math.min(80, band * 0.5);
  const y = (v: number) => (H - m.b) - (v / vMax) * (H - m.b - m.t);
  const ticks = Array.from({ length: vMax / step + 1 }, (_, i) => i * step);
  return (
    <>
      <Frame title={title} subtitle={subtitle} source={source} height={H}>
        {ticks.map(v => (
          <g key={v}>
            <line x1={m.l} x2={W - m.r} y1={y(v)} y2={y(v)} className="stroke-current text-gray-200 dark:text-gray-700" strokeWidth={1} />
            <SubText x={m.l - 8} y={y(v) + 4} textAnchor="end">{v ? thousands(v) : '0'}</SubText>
          </g>
        ))}
        <line x1={m.l} x2={W - m.r} y1={y(capacity)} y2={y(capacity)} stroke={DESAL} strokeWidth={1.5} strokeDasharray="6 4" />
        {weeks.map((w, i) => {
          const cx = m.l + band * (i + 0.5);
          const tip = `${dayLabel(w.weekEnding, lang)}: <b>${Math.round(w.out).toLocaleString('en')}</b> m³`;
          return (
            <g key={w.weekEnding} onMouseMove={e => show(e, tip)} onMouseLeave={hide}>
              <rect x={cx - band / 2} y={m.t} width={band} height={H - m.t - m.b} fill="transparent" />
              <rect x={cx - bw / 2} y={y(w.out)} width={bw} height={Math.max(1, y(0) - y(w.out))} rx={3} fill={DESAL} />
              <Note x={cx} y={y(w.out) - 6} textAnchor="middle">{k(w.out)}</Note>
              <SubText x={cx} y={H - m.b + 16} textAnchor="middle">{dayLabel(w.weekEnding, lang)}</SubText>
            </g>
          );
        })}
      </Frame>
      {node}
    </>
  );
}

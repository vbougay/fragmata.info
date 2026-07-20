"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { formatDataSetDate } from '@/utils/dateFormatting';
import { defaultLocale } from '@/utils/locale';
import { ZenVideoBackground } from '@/components/ZenVideoBackground';
import type { ZenModel } from '@/utils/zenUtils';

// The Zen page is deliberately always dark — a calm, cinematic backdrop for
// the video loop regardless of the site-wide theme.

const MS_PER_DAY = 86_400_000;
const THIN_SPACE = ' ';
const MINUS = '−';

// Evaluate the piecewise-linear projection at a wall-clock time.
// Duplicated from zenUtils to keep the heavy data modules out of the client bundle.
function segmentAt(model: ZenModel, ms: number) {
  let seg = model.segments[0];
  for (const s of model.segments) {
    if (s.startMs <= ms) seg = s;
    else break;
  }
  return seg;
}

function storageAt(model: ZenModel, ms: number): number {
  if (ms <= model.anchorMs) return model.anchorStorage;
  const seg = segmentAt(model, ms);
  const raw = seg.startStorage + (seg.ratePerDay * (ms - seg.startMs)) / MS_PER_DAY;
  return Math.min(model.capacity, Math.max(0, raw));
}

function groupDigits(intPart: string): string {
  return intPart.replace(/\B(?=(\d{3})+(?!\d))/g, THIN_SPACE);
}

function signed(n: number, formatted: string): string {
  return `${n < 0 ? MINUS : '+'}${formatted}`;
}

type ZenMode = 'percent' | 'volume';

export function ZenClient({ model, videos = [] }: { model: ZenModel; videos?: string[] }) {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [mode, setMode] = useState<ZenMode>('volume');
  // Sound defaults on; ZenVideoBackground reports back if the browser's
  // autoplay policy forces a muted start, keeping the toggle truthful.
  const [soundOn, setSoundOn] = useState(true);
  // null until mounted so SSR markup and first client render agree.
  const [nowMs, setNowMs] = useState<number | null>(null);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      setNowMs(Date.now());
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const ms = nowMs ?? model.anchorMs;
  const storage = storageAt(model, ms);
  const ratePerDay = nowMs === null ? model.segments[0].ratePerDay : segmentAt(model, ms).ratePerDay;

  const homeHref = language === defaultLocale ? '/' : `/${language}`;
  const reportDateStr = formatDataSetDate(model.datasetId, language);

  // --- Display strings ---
  const pct = (storage / model.capacity) * 100;
  const pctStr = pct.toFixed(7);
  const pctMain = pctStr.slice(0, -5);
  const pctDim = pctStr.slice(-5);

  const volumeStr = (storage * 1e6).toFixed(1);
  const [volInt, volDec] = volumeStr.split('.');
  const volMain = groupDigits(volInt);

  const litersPerSecond = (ratePerDay * 1e9) / 86_400;
  const rateDayStr = signed(ratePerDay, Math.abs(ratePerDay).toFixed(3));
  const rateSecStr = signed(litersPerSecond, groupDigits(Math.abs(litersPerSecond).toFixed(0)));
  const vsLastYearDiff = model.anchorStorage - model.lastYearStorage;
  const vsLastYearStr = signed(vsLastYearDiff, Math.abs(vsLastYearDiff).toFixed(1));

  const methodNote = t('zenMethodNote')
    .replace('{date}', reportDateStr)
    .replace('{n}', String(model.bulletinsUsed));

  const toggleMode = () => setMode((m) => (m === 'percent' ? 'volume' : 'percent'));

  const toggleButton = (target: ZenMode, label: string) => (
    <button
      onClick={() => setMode(target)}
      aria-pressed={mode === target}
      className={`px-3 py-1 rounded-full font-mono text-xs transition-colors ${
        mode === target
          ? 'bg-water-500 text-white'
          : 'text-water-300/70 hover:text-water-200'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="relative min-h-svh overflow-hidden flex flex-col select-none bg-gradient-to-b from-gray-950 via-gray-950 to-water-950/40 text-gray-100">
      <ZenVideoBackground
        videos={videos}
        soundEnabled={soundOn}
        onSoundBlocked={() => setSoundOn(false)}
      />
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[55vmin] h-[55vmin] rounded-full bg-water-500/10 blur-3xl animate-data-pulse" />
      </div>

      <header className="relative z-10 flex items-center justify-between px-5 py-4">
        <Link
          href={homeHref}
          className="inline-flex items-center gap-2 text-sm text-water-300/60 hover:text-water-200 transition-colors [text-shadow:0_1px_8px_rgba(0,0,0,0.9)]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{t('appTitle')}</span>
        </Link>
        <div className="flex items-center gap-2">
          {videos.length > 0 && (
            <button
              onClick={() => setSoundOn((s) => !s)}
              aria-pressed={soundOn}
              aria-label="Sound"
              className={`h-[26px] w-[26px] rounded-full flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-sm transition-colors ${
                soundOn ? 'text-water-300' : 'text-water-300/50 hover:text-water-200'
              }`}
            >
              {soundOn ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
            </button>
          )}
          <div className="flex rounded-full border border-white/10 bg-white/5 backdrop-blur-sm p-0.5">
            {toggleButton('percent', '%')}
            {toggleButton('volume', 'm³')}
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 gap-6">
        <h1 className="sr-only">{t('zenPageTitle')}</h1>
        {/* Static value for assistive tech; the ticking digits below are decorative-precision */}
        <p className="sr-only">
          {`${((model.anchorStorage / model.capacity) * 100).toFixed(1)}% ${t('zenOfCapacity')} — ${reportDateStr}`}
        </p>

        <button
          onClick={toggleMode}
          aria-hidden
          tabIndex={-1}
          className={`cursor-pointer font-mono font-light tabular-nums tracking-tight leading-none text-water-100 whitespace-nowrap [text-shadow:0_1px_30px_rgba(0,0,0,0.8)] transition-opacity duration-700 ${nowMs === null ? 'opacity-0' : 'opacity-100'}`}
        >
          {mode === 'percent' ? (
            <span className="text-[clamp(3rem,13vw,10rem)]">
              {pctMain}
              <span className="text-water-100/35">{pctDim}</span>
              <span className="text-[0.4em] text-water-400/80 align-baseline ml-2">%</span>
            </span>
          ) : (
            <span className="text-[clamp(1.9rem,9vw,6.5rem)]">
              {volMain}
              <span className="text-water-100/35">.{volDec}</span>
              <span className="text-[0.4em] text-water-400/80 align-baseline ml-2">m³</span>
            </span>
          )}
        </button>

        <div
          className={`flex flex-col items-center gap-1.5 font-mono text-base md:text-lg text-water-100 text-center rounded-2xl bg-gray-950/40 backdrop-blur-sm px-5 py-3 [text-shadow:0_1px_10px_rgba(0,0,0,0.95)] transition-opacity duration-700 ${nowMs === null ? 'opacity-0' : 'opacity-100'}`}
        >
          <p>
            {rateDayStr} {t('volumeUnit')} {t('zenPerDay')}
            <span className="opacity-50 mx-2">·</span>
            {rateSecStr} {t('zenLitersPerSecond')}
          </p>
          <p className="text-water-200/90 text-sm md:text-base">
            {vsLastYearStr} {t('volumeUnit')} {t('vsLastYear').toLowerCase()}
          </p>
        </div>
      </main>

      <footer className="relative z-10 px-6 pb-6 text-center">
        <p className="mx-auto max-w-xl text-[11px] leading-relaxed text-water-300/60 [text-shadow:0_1px_8px_rgba(0,0,0,0.9)]">
          {methodNote}
        </p>
      </footer>
    </div>
  );
}

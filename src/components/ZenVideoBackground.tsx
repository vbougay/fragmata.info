"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';

// Ambient looping video background for the Zen page.
//
// Each of the two alternating slots renders a synced pair of <video> elements
// sharing one clip: a blurred, zoomed, full-bleed backdrop plus the main video
// fitted to the viewport height and centered (the classic letterbox-blur look
// for vertical footage on wide screens; on portrait viewports the centered
// video simply covers the screen). The back slot preloads the next clip and
// starts playing just before the front one ends, while a CSS opacity
// transition crossfades the slot wrappers. Audio lives on the centered video
// only and crossfades along with the visuals when sound is enabled. The hidden
// slot's src is swapped only after the fade completes so the outgoing clip
// never flickers.

const FADE_MS = 1500;

export function ZenVideoBackground({
  videos,
  soundEnabled,
  onSoundBlocked,
}: {
  videos: string[];
  soundEnabled: boolean;
  /** Called when the browser refuses un-muted autoplay and playback fell back to muted. */
  onSoundBlocked?: () => void;
}) {
  const [order, setOrder] = useState<string[] | null>(null);
  const [slotSrcs, setSlotSrcs] = useState<[string, string] | null>(null);
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const bgRef0 = useRef<HTMLVideoElement | null>(null);
  const bgRef1 = useRef<HTMLVideoElement | null>(null);
  const fgRef0 = useRef<HTMLVideoElement | null>(null);
  const fgRef1 = useRef<HTMLVideoElement | null>(null);
  const transitioning = useRef(false);
  const currentRef = useRef(0);
  const orderRef = useRef<string[] | null>(null);
  const soundRef = useRef(soundEnabled);
  const kickedOff = useRef(false);
  const onSoundBlockedRef = useRef(onSoundBlocked);
  useEffect(() => {
    onSoundBlockedRef.current = onSoundBlocked;
  });

  const bgFor = useCallback((slot: number) => (slot === 0 ? bgRef0 : bgRef1), []);
  const fgFor = useCallback((slot: number) => (slot === 0 ? fgRef0 : fgRef1), []);

  const playSlot = useCallback((slot: number) => {
    bgFor(slot).current?.play().catch(() => {});
    fgFor(slot).current?.play().catch(() => {});
  }, [bgFor, fgFor]);
  const pauseSlot = useCallback((slot: number) => {
    bgFor(slot).current?.pause();
    fgFor(slot).current?.pause();
  }, [bgFor, fgFor]);
  const rewindSlot = useCallback((slot: number) => {
    for (const ref of [bgFor(slot), fgFor(slot)]) {
      const el = ref.current;
      if (!el) continue;
      try {
        el.currentTime = 0;
      } catch {
        // not seekable yet — it will start from 0 anyway
      }
    }
  }, [bgFor, fgFor]);

  // Shuffle once per visit; skip videos entirely for reduced-motion users.
  // Deferred to a frame callback: the shuffle must not run during SSR/hydration
  // (Math.random would mismatch), and this keeps the effect body setState-free.
  useEffect(() => {
    if (videos.length === 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = requestAnimationFrame(() => {
      const shuffled = [...videos];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setOrder(shuffled);
      orderRef.current = shuffled;
      setSlotSrcs([shuffled[0], shuffled[1 % shuffled.length]]);
    });
    return () => cancelAnimationFrame(id);
  }, [videos]);

  // Mute/unmute the currently fronted clip when the sound toggle changes.
  // Audio is managed imperatively (not via the muted prop) so the crossfade
  // ramps below aren't clobbered by React re-renders.
  useEffect(() => {
    soundRef.current = soundEnabled;
    const front = fgFor(currentRef.current % 2).current;
    if (front) {
      front.muted = !soundEnabled;
      front.volume = 1;
    }
    if (!soundEnabled) {
      const back = fgFor(1 - (currentRef.current % 2)).current;
      if (back) back.muted = true;
    }
  }, [soundEnabled, fgFor]);

  // Kick off the first pair explicitly (instead of the autoplay attribute):
  // try un-muted when sound is on, and fall back to muted playback if the
  // browser's autoplay policy rejects it.
  useEffect(() => {
    if (!slotSrcs || kickedOff.current) return;
    kickedOff.current = true;
    const bg = bgFor(0).current;
    const fg = fgFor(0).current;
    if (!bg || !fg) return;
    fg.muted = !soundRef.current;
    bg.play().catch(() => {});
    fg.play().catch(() => {
      fg.muted = true;
      onSoundBlockedRef.current?.();
      fg.play().catch(() => {});
    });
  }, [slotSrcs, bgFor, fgFor]);

  const advance = useCallback(() => {
    const ord = orderRef.current;
    if (!ord || ord.length < 2 || transitioning.current) return;
    transitioning.current = true;
    const cur = currentRef.current;
    const oldSlot = cur % 2;
    const newSlot = 1 - oldSlot;

    rewindSlot(newSlot);
    const outFg = fgFor(oldSlot).current;
    const inFg = fgFor(newSlot).current;
    if (soundRef.current && inFg) {
      inFg.volume = 0;
      inFg.muted = false;
    }
    playSlot(newSlot);
    if (soundRef.current) {
      const steps = 20;
      let step = 0;
      const ramp = window.setInterval(() => {
        step++;
        const t = step / steps;
        if (inFg) inFg.volume = Math.min(1, t);
        if (outFg) outFg.volume = Math.max(0, 1 - t);
        if (step >= steps) window.clearInterval(ramp);
      }, FADE_MS / steps);
    }

    currentRef.current = cur + 1;
    setCurrent(cur + 1);
    window.setTimeout(() => {
      pauseSlot(oldSlot);
      if (outFg) {
        outFg.muted = true;
        outFg.volume = 1;
      }
      const preload = ord[(cur + 2) % ord.length];
      setSlotSrcs((s) => {
        if (!s) return s;
        const next: [string, string] = [s[0], s[1]];
        next[oldSlot] = preload;
        return next;
      });
      transitioning.current = false;
    }, FADE_MS + 120);
  }, [fgFor, playSlot, pauseSlot, rewindSlot]);

  const onTimeUpdate = useCallback(() => {
    const frontEl = fgFor(currentRef.current % 2).current;
    if (!frontEl || !isFinite(frontEl.duration) || frontEl.duration === 0) return;
    if (frontEl.duration - frontEl.currentTime <= FADE_MS / 1000) advance();
  }, [fgFor, advance]);

  // Pause the front pair while the tab is hidden.
  useEffect(() => {
    const onVis = () => {
      const slot = currentRef.current % 2;
      if (document.hidden) pauseSlot(slot);
      else playSlot(slot);
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, [playSlot, pauseSlot]);

  if (!order || !slotSrcs) return null;
  const single = order.length === 1;
  const frontSlot = current % 2;

  // fg videos start muted via ref callback (imperative — see comment above);
  // marking a data attribute keeps re-renders from re-muting an unmuted video.
  const attachFg = (slot: number) => (el: HTMLVideoElement | null) => {
    fgFor(slot).current = el;
    if (el && !el.dataset.zenInit) {
      el.muted = true;
      el.dataset.zenInit = '1';
    }
  };

  return (
    <div
      aria-hidden
      className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ${started ? 'opacity-100' : 'opacity-0'}`}
    >
      {[0, 1].map((slot) => {
        if (single && slot === 1) return null;
        const isFront = slot === frontSlot;
        return (
          <div
            key={slot}
            className={`absolute inset-0 transition-opacity ease-in-out ${isFront ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDuration: `${FADE_MS}ms` }}
          >
            {/* Blurred, zoomed backdrop filling the whole viewport */}
            <video
              ref={bgFor(slot)}
              src={slotSrcs[slot]}
              muted
              playsInline
              loop={single}
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover blur-2xl scale-110 brightness-[0.55]"
            />
            {/* Main video fitted to viewport height, centered */}
            <video
              ref={attachFg(slot)}
              src={slotSrcs[slot]}
              playsInline
              loop={single}
              preload="auto"
              onPlaying={isFront ? () => setStarted(true) : undefined}
              onTimeUpdate={isFront && !single ? onTimeUpdate : undefined}
              onEnded={isFront && !single ? advance : undefined}
              className="absolute left-1/2 top-1/2 h-full w-auto max-w-none -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        );
      })}
      {/* Scrim keeps the numbers readable over bright water */}
      <div className="absolute inset-0 bg-gray-950/45" />
    </div>
  );
}

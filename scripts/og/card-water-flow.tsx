import React from "react";

// OG card for the water ins-and-outs article: a small version of the article's
// sources-to-uses diagram, with the headline numbers beside it. The generator
// does all formatting and translation; this stays a dumb renderer.

export type WaterFlowCardData = {
  brand: string;
  site: string;
  kicker: string;
  title: string;
  subtitle: string;
  unitLabel: string; // caption above the diagram
  sources: { key: string; label: string; value: string; color: string; estimated?: boolean }[];
  uses: { key: string; label: string; value: string }[];
  flows: { from: string; to: string; value: number }[];
  stats: { value: string; label: string; color?: string }[];
};

const C = {
  white: "#ffffff",
  w200: "#bae6fd",
  w300: "#7dd3fc",
  use: "#cbd5e1",
};

function Flow({ d, w, h }: { d: WaterFlowCardData; w: number; h: number }) {
  const top = 34, bottom = 6, bw = 10, gapS = 16, gapU = 24;
  const xL = 240, xR = w - 150; // node bars; labels sit outside them
  const sum = (k: string, side: "from" | "to") => d.flows.filter((f) => f[side] === k).reduce((a, f) => a + f.value, 0);
  const total = d.flows.reduce((a, f) => a + f.value, 0);
  const gaps = Math.max(gapS * (d.sources.length - 1), gapU * (d.uses.length - 1));
  const s = (h - top - bottom - gaps) / total;

  const place = (keys: string[], side: "from" | "to", gap: number) => {
    const pos: Record<string, { y: number; h: number }> = {};
    let y = top;
    for (const k of keys) {
      const hh = sum(k, side) * s;
      pos[k] = { y, h: hh };
      y += hh + gap;
    }
    return pos;
  };
  const srcKeys = d.sources.map((x) => x.key), useKeys = d.uses.map((x) => x.key);
  const src = place(srcKeys, "from", gapS);
  const use = place(useKeys, "to", gapU);

  // Same ordering as the article chart, so bands don't cross needlessly.
  const outAt: Record<string, number> = Object.fromEntries(srcKeys.map((k) => [k, src[k].y]));
  const inAt: Record<string, number> = Object.fromEntries(useKeys.map((k) => [k, use[k].y]));
  const bands = [...d.flows]
    .sort((a, b) => srcKeys.indexOf(a.from) - srcKeys.indexOf(b.from) || useKeys.indexOf(a.to) - useKeys.indexOf(b.to))
    .map((f) => {
      const hh = f.value * s;
      const ya = outAt[f.from];
      outAt[f.from] += hh;
      return { ...f, h: hh, ya, yb: 0 };
    });
  for (const k of useKeys) for (const b of bands.filter((b) => b.to === k)) { b.yb = inAt[k]; inAt[k] += b.h; }

  const xa = xL + bw, mx = (xa + xR) / 2;
  const path = (b: { ya: number; yb: number; h: number }) =>
    `M${xa},${b.ya.toFixed(1)} C${mx},${b.ya.toFixed(1)} ${mx},${b.yb.toFixed(1)} ${xR},${b.yb.toFixed(1)} ` +
    `L${xR},${(b.yb + b.h).toFixed(1)} C${mx},${(b.yb + b.h).toFixed(1)} ${mx},${(b.ya + b.h).toFixed(1)} ${xa},${(b.ya + b.h).toFixed(1)} Z`;
  const color = (k: string) => d.sources.find((x) => x.key === k)!.color;
  const estimated = (k: string) => !!d.sources.find((x) => x.key === k)?.estimated;

  const label = (text: string, value: string, yc: number, side: "left" | "right") => (
    <div
      key={text}
      style={{
        position: "absolute",
        top: yc - 12,
        ...(side === "left" ? { left: 0, width: xL - 10, justifyContent: "flex-end" } : { left: xR + bw + 10, width: w - xR - bw - 10 }),
        display: "flex",
        gap: 7,
        fontSize: 17,
        lineHeight: 1.4,
        color: C.w200,
        whiteSpace: "nowrap",
      }}
    >
      {text}
      <span style={{ fontWeight: 700, color: C.white }}>{value}</span>
    </div>
  );

  return (
    <div style={{ display: "flex", position: "relative", width: w, height: h }}>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <defs>
          <pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="7" height="7" fill="#9aa0a8" opacity="0.2" />
            <line x1="0" y1="0" x2="0" y2="7" stroke="#9aa0a8" strokeWidth="3" />
          </pattern>
        </defs>
        {bands.map((b) => (
          <path key={`${b.from}-${b.to}`} d={path(b)} fill={estimated(b.from) ? "url(#hatch)" : color(b.from)} opacity={estimated(b.from) ? 0.75 : 0.55} />
        ))}
        {srcKeys.map((k) => (
          <rect key={k} x={xL} y={src[k].y} width={bw} height={Math.max(src[k].h, 2)} rx={2} fill={color(k)} />
        ))}
        {useKeys.map((k) => (
          <rect key={k} x={xR} y={use[k].y} width={bw} height={Math.max(use[k].h, 2)} rx={2} fill={C.use} />
        ))}
      </svg>
      {d.sources.map((x) => label(x.label, x.value, src[x.key].y + src[x.key].h / 2, "left"))}
      {d.uses.map((x) => label(x.label, x.value, use[x.key].y + use[x.key].h / 2, "right"))}
      <div style={{ position: "absolute", left: 0, top: 0, display: "flex", fontSize: 16, color: C.w300 }}>{d.unitLabel}</div>
    </div>
  );
}

export function waterFlowCard(d: WaterFlowCardData) {
  return (
    <div
      style={{
        width: 1200,
        height: 630,
        display: "flex",
        flexDirection: "column",
        padding: "40px 52px",
        color: C.white,
        fontFamily: "Inter",
        background: "linear-gradient(135deg, #0c4a6e 0%, #0a4a78 48%, #075985 100%)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
          <div style={{ display: "flex", fontSize: 32, fontWeight: 700, letterSpacing: -1 }}>{d.brand}</div>
          <div style={{ display: "flex", fontSize: 20, fontWeight: 500, color: C.w300 }}>{d.site}</div>
        </div>
        <div style={{ display: "flex", fontSize: 18, fontWeight: 700, color: C.w300, letterSpacing: 2 }}>{d.kicker}</div>
      </div>

      <div style={{ display: "flex", fontSize: 42, fontWeight: 700, letterSpacing: -1.1, lineHeight: 1.1, marginTop: 20, textWrap: "balance", flexShrink: 0 }}>
        {d.title}
      </div>
      <div style={{ display: "flex", fontSize: 23, fontWeight: 500, color: C.w200, marginTop: 8, flexShrink: 0 }}>{d.subtitle}</div>

      <div style={{ display: "flex", flexGrow: 1, alignItems: "flex-end", gap: 32, marginTop: 14 }}>
        <Flow d={d} w={770} h={336} />
        <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
          {d.stats.map((s, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", padding: "10px 16px", borderRadius: 14, background: "rgba(255,255,255,0.08)" }}>
              <div style={{ display: "flex", fontSize: 38, fontWeight: 700, lineHeight: 1, color: s.color ?? C.white }}>{s.value}</div>
              <div style={{ display: "flex", fontSize: 16, fontWeight: 500, lineHeight: 1.25, color: C.w200, marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";

// OG card for the 2025/26 year-in-review article: the year's storage curve
// against the 1988–2025 range, with the headline numbers beside it. The
// generator does all formatting and translation; this stays a dumb renderer.

export type YearReviewCardData = {
  brand: string;
  site: string;
  kicker: string; // e.g. "2025/26 IN REVIEW"
  title: string;
  subtitle: string;
  // Chart, in MCM against days since 1 October
  trace: { day: number; value: number }[];
  band: { day: number; min: number; max: number }[];
  low: { day: number; value: number; label: string };
  peak: { day: number; value: number; label: string };
  end: { day: number; value: number; label: string };
  monthLabels: string[]; // 12 labels, Oct..Sep
  bandLabel: string; // caption for the grey range
  stats: { value: string; label: string; color?: string }[];
};

const C = {
  white: "#ffffff",
  w200: "#bae6fd",
  w300: "#7dd3fc",
  line: "#38bdf8",
  red: "#f87171",
  green: "#34d399",
};

function Chart({ d, w, h }: { d: YearReviewCardData; w: number; h: number }) {
  const padB = 50, padT = 34, vMax = 300;
  const MONTH_STARTS = [0, 31, 61, 92, 123, 151, 182, 212, 243, 273, 304, 335];
  const X = (day: number) => (day / 365) * w;
  const Y = (v: number) => padT + (1 - v / vMax) * (h - padT - padB);
  const line = d.trace.map((p, i) => `${i ? "L" : "M"}${X(p.day).toFixed(1)} ${Y(p.value).toFixed(1)}`).join(" ");
  const band = [
    ...d.band.map((b, i) => `${i ? "L" : "M"}${X(b.day).toFixed(1)} ${Y(b.max).toFixed(1)}`),
    ...[...d.band].reverse().map((b) => `L${X(b.day).toFixed(1)} ${Y(b.min).toFixed(1)}`),
    "Z",
  ].join(" ");
  const area = `${line} L ${X(d.trace[d.trace.length - 1].day).toFixed(1)} ${Y(0)} L ${X(d.trace[0].day).toFixed(1)} ${Y(0)} Z`;
  const dot = (p: { day: number; value: number }, color: string, r = 7) => (
    <circle cx={X(p.day)} cy={Y(p.value)} r={r} fill={color} stroke={C.white} strokeWidth={3} />
  );
  return (
    <div style={{ display: "flex", position: "relative", width: w, height: h }}>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <path d={band} fill="rgba(255,255,255,0.10)" />
        <path d={area} fill="rgba(56,189,248,0.25)" />
        <path d={line} fill="none" stroke={C.line} strokeWidth={5} strokeLinejoin="round" />
        {dot(d.low, C.red)}
        {dot(d.peak, C.green)}
        {dot(d.end, C.white, 6)}
      </svg>
      {/* Point labels as HTML so satori lays out the text */}
      <div style={{ position: "absolute", left: X(d.low.day) - 60, top: Y(d.low.value) - 42, display: "flex", fontSize: 21, fontWeight: 700, color: C.red }}>
        {d.low.label}
      </div>
      <div style={{ position: "absolute", left: X(d.peak.day) - 120, top: Y(d.peak.value) - 40, display: "flex", fontSize: 21, fontWeight: 700, color: C.green }}>
        {d.peak.label}
      </div>
      <div style={{ position: "absolute", left: X(d.end.day) - 60, top: Y(d.end.value) + 14, display: "flex", fontSize: 21, fontWeight: 700, color: C.white }}>
        {d.end.label}
      </div>
      {d.monthLabels.map((m, i) => (
        <div key={i} style={{ position: "absolute", left: X(MONTH_STARTS[i] + 15) - 30, width: 60, top: h - padB + 8, display: "flex", justifyContent: "center", fontSize: 15, color: C.w300 }}>
          {m}
        </div>
      ))}
      <div style={{ position: "absolute", left: 0, top: 0, display: "flex", alignItems: "center", gap: 8, fontSize: 16, color: C.w200 }}>
        <div style={{ display: "flex", width: 18, height: 12, borderRadius: 3, background: "rgba(255,255,255,0.18)" }} />
        {d.bandLabel}
      </div>
    </div>
  );
}

export function yearReviewCard(d: YearReviewCardData) {
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

      <div style={{ display: "flex", fontSize: 56, fontWeight: 700, letterSpacing: -1.5, lineHeight: 1.05, marginTop: 22 }}>
        {d.title}
      </div>
      <div style={{ display: "flex", fontSize: 26, fontWeight: 500, color: C.w200, marginTop: 8 }}>{d.subtitle}</div>

      <div style={{ display: "flex", flexGrow: 1, alignItems: "flex-end", gap: 36, marginTop: 10 }}>
        <Chart d={d} w={760} h={330} />
        <div style={{ display: "flex", flexDirection: "column", gap: 16, flex: 1, paddingBottom: 26 }}>
          {d.stats.map((s, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", padding: "12px 16px", borderRadius: 14, background: "rgba(255,255,255,0.08)" }}>
              <div style={{ display: "flex", fontSize: 44, fontWeight: 700, lineHeight: 1, color: s.color ?? C.white }}>{s.value}</div>
              <div style={{ display: "flex", fontSize: 18, fontWeight: 500, color: C.w200, marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

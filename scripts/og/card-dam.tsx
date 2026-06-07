import React from "react";

export type DamStat = {
  label: string;
  value: string;
  sub: string;
  arrow?: "up" | "down";
  valueColor?: string;
};

// Fully-localized, presentational props. The generator does all formatting and
// translation so this component stays a dumb renderer.
export type DamCardData = {
  brand: string;
  site: string;
  latestLabel: string;
  dateLabel: string;
  name: string;
  subtitle: string;
  percentage: number; // drives the level color
  pctText: string; // e.g. "41.8%"
  ofCapacity: string;
  sparkTitle: string;
  sparkRange: string;
  spark: { points: number[]; startLabel: string; endLabel: string };
  stats: DamStat[];
};

// Brand water palette (mirrors --color-water-* in app/globals.css)
const C = {
  white: "#ffffff",
  w200: "#bae6fd",
  w300: "#7dd3fc",
  green: "#34d399",
  red: "#f87171",
};

// Same level -> color scheme the in-app StorageSparkline uses.
function levelColor(pct: number) {
  if (pct >= 100) return "#3b82f6"; // blue
  if (pct < 25) return "#ef4444"; // red
  if (pct < 50) return "#f97316"; // orange
  if (pct < 75) return "#eab308"; // yellow
  return "#22c55e"; // green
}

function Droplet({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M12 2C12 2 4.5 10 4.5 15.2A7.5 7.5 0 0 0 19.5 15.2C19.5 10 12 2 12 2Z"
        fill={C.w300}
      />
    </svg>
  );
}

function Tri({ up, color, size = 26 }: { up: boolean; color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d={up ? "M12 5 L21 19 L3 19 Z" : "M12 19 L3 5 L21 5 Z"} fill={color} />
    </svg>
  );
}

// Area-chart sparkline drawn as raw SVG (satori can't run recharts). Mirrors the
// in-app StorageSparkline: 0-100 domain, area fill, dashed 25/50/75 gridlines,
// green max dot, red min dot, and a highlighted current point.
function Sparkline({ points, w, h, color }: { points: number[]; w: number; h: number; color: string }) {
  const pad = 8;
  const n = points.length;
  if (n < 2) return <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} />;

  const X = (i: number) => (i / (n - 1)) * w;
  const Y = (p: number) => pad + (1 - Math.min(Math.max(p, 0), 100) / 100) * (h - 2 * pad);

  const pts = points.map((p, i) => [X(i), Y(p)] as const);
  const line = "M " + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(" L ");
  const area = `${line} L ${w.toFixed(1)} ${h.toFixed(1)} L 0 ${h.toFixed(1)} Z`;

  let maxI = 0;
  let minI = 0;
  for (let i = 1; i < n; i++) {
    if (points[i] > points[maxI]) maxI = i;
    if (points[i] < points[minI]) minI = i;
  }

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      {[25, 50, 75].map((lv) => (
        <line
          key={lv}
          x1={0}
          y1={Y(lv)}
          x2={w}
          y2={Y(lv)}
          stroke="#ffffff"
          strokeOpacity={0.16}
          strokeWidth={1}
          strokeDasharray="3 5"
        />
      ))}
      <path d={area} fill={color} fillOpacity={0.28} />
      <path d={line} fill="none" stroke={color} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={X(maxI)} cy={Y(points[maxI])} r={5} fill="#22c55e" stroke="#0c4a6e" strokeWidth={2} />
      <circle cx={X(minI)} cy={Y(points[minI])} r={5} fill="#ef4444" stroke="#0c4a6e" strokeWidth={2} />
      <circle cx={X(n - 1)} cy={Y(points[n - 1])} r={6} fill={color} stroke="#ffffff" strokeWidth={2} />
    </svg>
  );
}

function Stat({ label, value, sub, valueColor, arrow }: DamStat) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        gap: 8,
        padding: "20px 24px",
        borderRadius: 20,
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.14)",
      }}
    >
      <div style={{ display: "flex", fontSize: 16, fontWeight: 600, color: C.w300, letterSpacing: 1 }}>{label}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {arrow ? <Tri up={arrow === "up"} color={arrow === "up" ? C.green : C.red} /> : null}
        <div style={{ display: "flex", fontSize: 36, fontWeight: 700, color: valueColor ?? C.white, lineHeight: 1 }}>
          {value}
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 18, fontWeight: 500, color: C.w200 }}>{sub}</div>
    </div>
  );
}

export function damCard(d: DamCardData) {
  const pctColor = levelColor(d.percentage);

  return (
    <div
      style={{
        width: 1200,
        height: 630,
        display: "flex",
        flexDirection: "column",
        padding: "46px 60px",
        fontFamily: "Inter",
        color: C.white,
        background: "linear-gradient(135deg, #0c4a6e 0%, #0a4a78 48%, #075985 100%)",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Droplet size={46} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>{d.brand}</div>
            <div style={{ display: "flex", fontSize: 21, fontWeight: 500, color: C.w300 }}>{d.site}</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <div style={{ display: "flex", fontSize: 18, fontWeight: 700, color: C.w300, letterSpacing: 2 }}>
            {d.latestLabel}
          </div>
          <div style={{ display: "flex", fontSize: 31, fontWeight: 700 }}>{d.dateLabel}</div>
        </div>
      </div>

      {/* Main: name + % (left), sparkline (right) */}
      <div style={{ display: "flex", flexGrow: 1, alignItems: "center", gap: 36 }}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700, letterSpacing: -2, lineHeight: 1 }}>
            {d.name}
          </div>
          <div style={{ display: "flex", fontSize: 26, fontWeight: 600, color: C.w200, marginTop: 8 }}>
            {d.subtitle}
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 16, marginTop: 20 }}>
            <div style={{ display: "flex", fontSize: 108, fontWeight: 700, color: pctColor, lineHeight: 0.9, letterSpacing: -3 }}>
              {d.pctText}
            </div>
            <div style={{ display: "flex", fontSize: 26, fontWeight: 500, color: C.w200, marginBottom: 16 }}>
              {d.ofCapacity}
            </div>
          </div>
        </div>

        {/* Sparkline panel */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 500,
            padding: "20px 22px",
            borderRadius: 20,
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.14)",
            gap: 8,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", fontSize: 15, fontWeight: 600, color: C.w300, letterSpacing: 1 }}>
              {d.sparkTitle}
            </div>
            <div style={{ display: "flex", fontSize: 14, fontWeight: 500, color: C.w300 }}>{d.sparkRange}</div>
          </div>
          <Sparkline points={d.spark.points} w={456} h={172} color={pctColor} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", fontSize: 14, fontWeight: 500, color: C.w300 }}>{d.spark.startLabel}</div>
            <div style={{ display: "flex", fontSize: 14, fontWeight: 500, color: C.w300 }}>{d.spark.endLabel}</div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: 18, marginTop: 8 }}>
        {d.stats.map((s, i) => (
          <Stat key={i} {...s} />
        ))}
      </div>
    </div>
  );
}

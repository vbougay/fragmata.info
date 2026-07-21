import React from "react";

// OG card for the Zen page: a real frame from the background footage
// (pre-composited letterbox-blur still in zen-bg.jpg) with the live storage
// number in the page's monospace style. Fully-localized presentational props —
// the generator does all formatting and translation.
export type ZenCardData = {
  bgDataUri: string;
  brand: string; // "Fragmata"
  title: string; // localized zenPageTitle
  number: string; // e.g. "118 069 743"
  unit: string; // "m³"
  rateLine: string; // e.g. "−1 727 litres every second"
  pctLine: string; // e.g. "40.6% of total capacity"
  url: string; // "fragmata.info/zen"
  dateLabel: string; // localized report date
};

const C = {
  white: "#ffffff",
  w200: "#bae6fd",
  w300: "#7dd3fc",
  w400: "#38bdf8",
};

function Waves({ size = 30, color = C.w400 }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  );
}

export function zenCard(d: ZenCardData) {
  return (
    <div
      style={{
        width: 1200,
        height: 630,
        display: "flex",
        position: "relative",
        fontFamily: "Inter",
        backgroundColor: "#020617",
      }}
    >
      <img
        src={d.bgDataUri}
        width={1200}
        height={630}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      {/* Readability scrim: light at the top, near-opaque at the bottom */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1200,
          height: 630,
          background:
            "linear-gradient(to bottom, rgba(2,6,23,0.35) 0%, rgba(2,6,23,0.05) 30%, rgba(2,6,23,0.55) 62%, rgba(2,6,23,0.93) 100%)",
        }}
      />

      {/* Top bar: brand left, date right */}
      <div
        style={{
          position: "absolute",
          top: 34,
          left: 46,
          right: 46,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Waves size={34} />
          <span style={{ fontSize: 32, fontWeight: 700, color: C.white }}>{d.brand}</span>
        </div>
        <span style={{ fontSize: 24, fontWeight: 400, color: "rgba(186,230,253,0.85)" }}>
          {d.dateLabel}
        </span>
      </div>

      {/* Bottom stack: title, live number, rate, capacity line, url */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 36,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span
          style={{
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: C.w300,
          }}
        >
          {d.title}
        </span>
        <div style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
          <span
            style={{
              fontFamily: "Roboto Mono",
              fontSize: 92,
              fontWeight: 500,
              color: C.white,
            }}
          >
            {d.number}
          </span>
          <span
            style={{
              fontFamily: "Roboto Mono",
              fontSize: 44,
              fontWeight: 400,
              color: C.w400,
            }}
          >
            {d.unit}
          </span>
        </div>
        <span style={{ fontSize: 30, fontWeight: 600, color: C.w200 }}>{d.rateLine}</span>
        <span style={{ fontSize: 25, fontWeight: 400, color: "rgba(255,255,255,0.78)" }}>
          {d.pctLine}
        </span>
        <span style={{ fontSize: 24, fontWeight: 600, color: C.w300, marginTop: 6 }}>
          {d.url}
        </span>
      </div>
    </div>
  );
}

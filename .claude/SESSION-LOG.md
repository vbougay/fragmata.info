# Session Log

## 2026-06-18 — Session `4d2b2aec-8204-4dcf-adee-622a98461fca`

- Diagnosed why `https://fragmata.info/llms.txt` served stale data (frozen at 24-FEB-2026 while the dashboard showed current 17-JUN-2026)
- Root cause: [app/llms.txt/route.ts](app/llms.txt/route.ts) hardcoded `import ... from "@/utils/data-24-FEB-2026"`, so it never followed the latest dataset; the `fetch-and-update` skill only bumps `dataManager.ts`, never this route
- Fix: wired the route to `dataManager` accessors (`reservoirData`, `yearlyInflowData`, `getReportDate`, `getWaterTransferred`, `calculateRegionTotals`, `calculateGrandTotal`) so it auto-follows the default/latest dataset — no more manual bumps
- Added a `getWaterTransferred()` getter to [dataManager.ts](src/utils/dataManager.ts) (the only field the route used that wasn't already exposed)
- Verified locally: route now renders `Report date: 17-JUN-2026`, `42.3%` storage, `20.4 mln. m³` transferred; `tsc` clean aside from pre-existing `baseUrl` deprecation warning

---

## 2026-06-07 — Session `926e850b-2088-4c7b-b223-b8352e4265d7`

- Built dynamic SVG-based OG (social-share) cards for fragmata, modeled on monopatia.info's build-time SVG→PNG pipeline; chose satori + `@resvg/resvg-js` over hand-authored SVG for reliable multilingual fonts + flexbox layout
- New pipeline under `scripts/og/`: `generate.tsx` (generator) + `card-dam.tsx` (presentational 1200×630 card)
- Card content: name, region · Cyprus, big % of capacity (level-colored to match the app's `StorageSparkline` scheme), 3 stat blocks (current storage, vs-last-year with up/down arrow, inflow since Oct), and a 12-month storage sparkline; no QR / no fill-gauge per user
- Sparkline reuses `getAllSparklineData` for dams and a new aggregate-over-member-dams computation for region/dashboard (0–100 domain, dashed 25/50/75 gridlines, min/max/current dots)
- Localized EN/EL/RU: names/regions from `translations.ts`, volume unit from `translations.volumeUnit` (`mln. m³` / `εκατ. κ.μ.` / `млн. м³`), full month names with correct grammar (genitive dates, nominative axis)
- Font gotcha: satori does NOT glyph-fall-back across split Google subset files (rendered "NO GLYPH" tofu) — fixed by vendoring Inter's full-charset static TTFs (Regular/SemiBold/Bold) under `scripts/og/fonts/`
- Region + dashboard cards reuse the same template; numbers from real `calculateRegionTotals`/`calculateGrandTotal` (dashboard excludes Recharge/Other, matches site: 42.4% / 123.4 mln m³ / 112 mln m³)
- Generator sources `reservoirData()`/`getReportDate()` from `dataManager` (latest/default dataset), so daily data updates flow through with no code change
- Rollout: 81 cards (21 dams + 5 regions + dashboard × 3 locales); wired `generateMetadata` in dam + region pages and the `[locale]/layout.tsx` site default (dashboard card); `?v=<report-date>` query busts platform OG caches
- Build hook: `package.json` `build` → `tsx scripts/og/generate.tsx && next build` (+ standalone `og` script); added devDeps `satori`, `@resvg/resvg-js`, `tsx`
- `.gitignore`: track `scripts/og/` (generator + fonts as build inputs), ignore generated `public/og/`, keep local `scripts/post-telegram.ts` ignored
- Verified full production build passes; confirmed `og:image` meta tags in prerendered HTML (dam/region/home → correct per-locale cards); committed `cd6b05c` and pushed to `main`

---

## Archives

- [2026-04](SESSION-LOG-2026-04.md) — 3 sessions

# Fragmata.info: Cyprus Reservoir Visualizer

A comprehensive dashboard for monitoring and visualizing water reservoir data across all 21 major reservoirs in Cyprus. Built with Next.js App Router for server-side rendering and SEO. Track storage levels, inflow trends, drain forecasts, and historical changes with data spanning March 2025 to March 2026.

![Fragmata Dashboard](/public/fragmata.info-screenshot.png)

## Features

- **Dashboard Overview**: Key metrics at a glance — total capacity, current storage, year-over-year change, forecasted restriction date, YTD inflow, and YTD outflow
- **Animated Date Navigation**: Play through all historical snapshots to see how reservoir levels evolved over time
- **Historical Heatmap**: Visual heat map of reservoir fill levels across months and years, organized by region
- **Regional Breakdown**: Aggregate statistics for 5 regions (Southern Conveyor, Paphos, Chrysochou, Nicosia, Recharge/Other) with forecasted restriction dates and recent changes summaries
- **Individual Reservoir Cards**: Detailed view per reservoir with capacity charts, current vs. last year storage, inflow data, max storage history, and restriction forecast
- **Interactive Map**: Leaflet-based map of Cyprus with color-coded markers — green (>75%), yellow (50–75%), orange (25–50%), red (<25%) — sized by capacity
- **Data Table**: Searchable, filterable, and sortable table with all reservoir metrics
- **Monthly Inflow Charts**: Monthly and cumulative inflow views with multi-year comparison and typical-year prediction
- **Storage Forecast**: Per-reservoir, per-region, and system-wide storage projections (median with 1-in-10 dry and wet outcomes) with restriction threshold visualization
- **Individual Dam Pages**: Dedicated page per reservoir with detailed statistics, capacity chart, and storage forecast
- **Articles**: News and analysis articles about the Cyprus water situation
- **Media Export**: Download dashboard snapshots as PNG images for sharing
- **Multi-language Support**: English, Greek, and Russian with locale-based routing
- **Dark/Light Theme**: System-aware theme with manual toggle
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **SSR & SEO**: Next.js App Router with server-side rendering, auto-generated sitemap and robots.txt

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Charts**: Recharts
- **Maps**: Leaflet / React-Leaflet
- **Package Manager**: pnpm

## Data Source

All data is sourced from the [Cyprus Water Development Department](https://www.moa.gov.cy/moa/wdd/Wdd.nsf/page18_en/page18_en?opendocument) of the Ministry of Agriculture. The application includes data covering March 2025 through March 2026, with information on all 21 reservoirs including capacity, current storage, inflow rates, and historical comparisons.

## Forecasting Approach

The dashboard's forecast replays past years' weather from today's storage, using the WDD storage record since 1995/96.

**Storage Forecast** — For the selected reservoirs the engine fits a monthly water balance, ΔS = w − b·S:

- **b** (drawdown): the extra loss per unit of water stored. Releases, evaporation and spills all grow with the amount in the dams.
- **w** (weather): what each past year's month delivered net of fixed demand. It does not depend on how full the dams happened to be.

It then runs 300 fixed-seed simulations over 10 years. Each one replays a random sequence of past years' weather, and every month it reports three percentiles:

- **Dry years (1 in 10)**: 10th percentile (API field `drought`)
- **Median**: 50th percentile (API field `expected`), the main forecast
- **Wet years (1 in 10)**: 90th percentile (API field `recovery`)

The cycle phase (declining, trough, recovering, peak) and analog years are shown for context but do not steer the forecast. Annual rainfall has no useful year-to-year persistence: the lag-1 correlation is 0.04 since 1961. In a backtest on 174 start dates from 2003–2024, actual storage finished above the median path about half the time at horizons of 6–36 months, at low, middle and high storage alike.

Forecasts can be viewed for the entire system, individual regions (Southern Conveyor, Paphos, Chrysochou, Nicosia), or major dams (Kouris, Asprokremmos, Evretou, Kannaviou). Water restriction dates show when storage is projected to drop below a 7% capacity threshold — the point where restrictions typically begin, well before actual depletion.

**Inflow Prediction** — The Monthly Inflow chart predicts the remaining months of the current water year from a typical year: the average of the middle third of completed seasons, ranked by total inflow.

## API

A public REST API is available at `https://fragmata.info/api/v1/` — no authentication required. It provides endpoints for reservoir summary, individual reservoirs, regional totals, inflow data, and historical storage levels. See [API.md](API.md) for full documentation and Home Assistant integration examples.

## Community

Follow us for updates and discussion:

- [Telegram](https://t.me/fragmatainfo)
- [WhatsApp](https://chat.whatsapp.com/JZxEYFqo1mGDBZoi0pZBaA)

## Contact

For questions, feedback, or contributions, please contact:

- Email: [v@bougay.com](mailto:v@bougay.com)

## License

This project is open source and available under the MIT License.

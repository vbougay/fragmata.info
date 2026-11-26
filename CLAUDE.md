# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Development commands:
- `pnpm dev` - Start Next.js development server (port 8080)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality checks

## Architecture Overview

This is a React-based Cyprus reservoir monitoring dashboard built with TypeScript, Next.js App Router, and Tailwind CSS. The application visualizes water reservoir data across Cyprus with multi-language support and server-side rendering for SEO.

### Key Architectural Patterns

**Data Management System**: The core architecture revolves around a dynamic data management system in `src/utils/dataManager.ts`. This module:
- Manages every dataset (one per WDD bulletin since March 2025), each stored as a folder in `data/snapshots/DD-MMM-YYYY/`
- Provides a unified API that switches between datasets dynamically; older datasets are lazy chunks loaded on demand (`ensureDatasetLoaded`; `DataContext.setDataSet` waits for it)
- `availableDataSets` and the default (newest) dataset come from the compiled folder list, not a hand-kept array
- All data access goes through this central manager, not direct imports

**Context-Based State Management**:
- `DataContext` manages current dataset selection and animated playback state (`isPlaying`) across the app
- `LanguageContext` handles multi-language support (English, Greek, Russian)
- Both contexts wrap the entire application via `src/components/providers.tsx` (imported by `app/layout.tsx`)

**Next.js App Router Structure**:
- `app/layout.tsx` — Root Server Component, imports `providers.tsx` (the `"use client"` boundary)
- `app/page.tsx` — Homepage Server Component, imports `DashboardClient.tsx`
- `app/not-found.tsx` — 404 page (Server Component, no client boundary needed)
- `app/robots.ts`, `app/sitemap.ts` — SEO route handlers
- `providers.tsx` and the page-level `*Client.tsx` components carry `"use client"` — most other components inherit the client boundary

**Component Structure**:
- Client components: `src/components/DashboardClient.tsx` (main tabbed dashboard), `src/components/ChartFrame.tsx` (article chart card with Copy image / Download PNG, via `src/lib/export-image.ts`)
- Main page tabs: Dashboard, By Region, Map, Data Table
- Reusable components in `src/components/` for charts, maps, tables, cards, heatmaps, and headers
- UI components from shadcn/ui in `src/components/ui/`

### Data Flow

1. **Data Sources**: Raw Excel files in `/data/` directory containing reservoir data
2. **Dataset folders**: Each bulletin is a folder `data/snapshots/DD-MMM-YYYY/` (`data.json`, `dams.json`, `summary.<lang>.md`). `pnpm generate` validates them and compiles them into `src/generated/` (gitignored; also run by `postinstall`, `dev:next`, `og` and `build`)
3. **Data Manager**: `dataManager.ts` provides unified access to current dataset
4. **Utilities**: `reservoirUtils.ts` contains calculation functions for drain dates, region totals, water balance (`getOctoberBaselineStorage`), etc.
5. **Historical record**: `historicalStorageData.ts` is the full bi-monthly table since 1988. First-render code (forecast, October baseline, sparklines) reads `historyDigest.ts` instead, which expands `src/generated/historyDigest.ts` (gitignored, written by `scripts/build/history-digest.ts` on `postinstall`, `dev:next`, `og` and `build`). Only the lazy heatmap, article charts and the API import the full table. Import the `HistoricalStorageEntry` type from `@/types`, not from the table, or the table lands in that bundle
6. **Components**: Use hooks like `useDataContext()` to access current data

### Key Features Implementation

**Multi-Dataset Support**: Add a dataset by adding a folder `data/snapshots/DD-MMM-YYYY/` (uppercase month; the name is the dataset id and the report date) and running `pnpm generate`. The newest folder is the default dataset. Nothing in `src/` changes. The `fetch-and-update` skill has the full procedure.

**Creating a Dataset from Excel**:
To add a dataset from an Excel file (e.g., `data/[DATE]UK.xlsx`):

1. **Extract data structure**: Use Node.js with xlsx package to understand the Excel layout:
   ```bash
   node -e "
   const XLSX = require('xlsx');
   const workbook = XLSX.readFile('./data/[DATE]UK.xlsx');
   const sheetName = workbook.SheetNames[0];
   const worksheet = workbook.Sheets[sheetName];
   const jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1, defval: ''});
   // Examine rows for reservoir data
   "
   ```

2. **Create the folder**: copy the previous `data/snapshots/<id>/` and edit:
   - `data.json`: `waterTransferred`, `reservoirData` (all 21 reservoirs, one per line: capacity, inflow, storage current/lastYear, maxStorage, region) and `yearlyInflowData` (usually copied from the previous dataset)
   - `summary.en.md`, `summary.el.md`, `summary.ru.md`: the Recent Changes narrative
   - `dams.json`: one-line summary per dam and language

3. **Data extraction mapping**:
   - Column 0: Reservoir name
   - Column 3: Capacity (MCM)
   - Column 4: Last 24h inflow (usually 0)
   - Column 5: Total inflow since October
   - Column 6: Current storage amount (MCM)
   - Column 7: Current storage percentage
   - Column 8: Last year storage amount (MCM)
   - Column 9: Last year storage percentage
   - Column 10: Max storage amount (MCM)
   - Column 11: Max storage date

4. **Regional classification** (enforced by `pnpm generate`):
   - Southern Conveyor: Kouris, Kalavasos, Lefkara, Dipotamos, Germasoyeia, Arminou, Polemidia, Achna
   - Paphos: Asprokremmos, Kannaviou, Mavrokolympos
   - Chrysochou: Evretou, Argaka, Pomos, Agia Marina
   - Nicosia: Vyzakia, Xyliatos, Kalopanagiotis
   - Recharge/Other: Tamassos, Klirou-Malounta, Solea

5. **Validate**: run `pnpm generate`. It rejects a dataset with missing or unknown reservoirs, wrong regions, non-numeric fields, percentages more than 0.6 pp from amount / capacity, a folder name that isn't a real date, or `dams.json` names not in `data.json`. Also verify the total storage percentage matches the dashboard: (total current storage / total capacity) * 100

**Internationalization**: Translations in `src/utils/translations.ts` with language switching via `LanguageContext`

**Interactive Visualizations**:
- Leaflet maps for geographical reservoir display
- Recharts for inflow data visualization
- Custom capacity charts with percentage indicators

### Data Types

Core types defined in `src/types/index.ts`:
- `Reservoir`: Individual reservoir data structure
- `ReservoirRegion`: Regional classification system
- `RegionTotal`: Aggregated regional data
- `MonthlyData`: Monthly inflow data point
- `YearlyInflowData`: Historical inflow data structure

### Important Notes

- The app uses absolute imports with `@/` alias pointing to `src/`
- ESLint is configured but unused variables are disabled
- Development server runs on port 8080 (configured in `package.json` via `next dev --port 8080`)
- The application expects specific data structure from Cyprus Water Development Department
- All reservoir calculations (drain dates, totals) are computed client-side using utility functions
- Global styles are in `app/globals.css` (imported by `app/layout.tsx`)
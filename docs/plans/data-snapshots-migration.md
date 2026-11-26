# Plan: move dataset modules from TypeScript to data files

**Date:** 2026-11-26
**Session:** 23524c54-2c72-4435-83c4-a8617b15867d
**Status:** sketch, nothing converted yet; generated output gitignored (decided 2026-11-26)

## Why, and why not SQLite

Fragmata's data is small (182 snapshots as of 26 Nov 2026, × 21 reservoirs) and mostly consumed in the
browser: `DataContext` switching, playback, `forecastEngine`, heatmap, charts. An embedded
SQLite (Giatroi's better-sqlite3 setup) only runs on the server, so it would force a rewrite
of every client consumer, swap reviewable text diffs for a binary blob, and add the Vercel
`/tmp` workaround. Not worth it here.

What actually hurts today:

- 182 `src/utils/data-*.ts` files, 4.1 MB of TypeScript that tsc, ESLint and the bundler all
  process, though it is data. (Measured in phase 0: this costs about 1 s of type-checking and
  2.6 s of lint, and almost nothing in the build. The payoff of this migration is the update
  workflow, not speed.)
- `dataManager.ts` carries a hand-maintained `importMap` and `availableDataSets` (two edits
  per update, plus the static import of the newest module).
- Prose (`getSummaryChanges`, `getDamSummary`) is wrapped in functions with the same
  boilerplate in every file. 19 older files use lowercase names (`data-22-sep-2025.ts`) for
  uppercase ids (`22-SEP-2025`).

## What already exists

`DatasetSnapshot` in [dataManager.ts](../../src/utils/dataManager.ts) is already a JSON-safe
flattening of one module (readings, inflow, report date, transfer, summaries in 3
languages), and `registerDatasetSnapshot` already turns one back into a working cache
entry. **The new file format is `DatasetSnapshot`; the new loader works like
`registerDatasetSnapshot`.** Every public function of `dataManager` stays as it is, so no
component changes.

## Target layout

```
data/snapshots/
  30-OCT-2026/
    data.json                 # reservoirData, yearlyInflowData, reportDate, waterTransferred
    dams.json                 # { "Kouris": { en, el, ru }, ... }  one-line dam summaries
    summary.en.md             # getSummaryChanges, as plain markdown
    summary.el.md
    summary.ru.md
```

- No manifest: the compile step lists the folders, sorts them by parsed date and derives
  the labels ("October 30, 2026"). All 182 current labels follow that format (checked), so
  adding a dataset is adding a folder and nothing else.
- Folders are named **exactly by dataset id**. Ids are public (`dataApi` validates them,
  articles pin to them, URLs carry them) and must not change; no switch to ISO dates as a
  side effect.
- `summary.*.md` as real markdown files, because the multi-paragraph summaries become
  unreadable as escaped `\n` strings in JSON, both for the skill writing them and for diff
  review. Dam summaries are one-liners and fine in JSON.

### Compile step

The browser can't read `.md` without a raw loader, and Turbopack's support for one (and
for splitting a template-literal `import()` into per-file chunks) is not something to
assume. So a small script, `scripts/build-snapshots.ts`, compiles each folder into
one `DatasetSnapshot` JSON and writes:

- `src/generated/snapshots/<id>.json`, one per dataset
- `src/generated/snapshotIndex.ts`: `availableDataSets`, a static import of the newest
  snapshot, and one literal `import('./snapshots/<id>.json')` per older one, the same
  lazy-loading shape as today's `importMap`

`pnpm build`, `dev` and `og` run the compile themselves, so Vercel and the dev server can
never serve stale output. A missing `snapshotIndex.ts` fails loudly at import time; the only
quiet failure is stale output (a new folder not yet compiled), which the build-time compile
rules out.

**Decided (2026-11-26): `src/generated/` is gitignored.** One source of truth; daily diffs
touch only the new folder. Consequences:
- Add `postinstall` (alongside `build`, `dev`, `og`) to run the compile, so a fresh checkout,
  including cloud routine runs, has the output as soon as `pnpm install` finishes; `tsc
  --noEmit` and lint need it too.
- Standalone `tsx` scripts (`post-telegram.ts`, `summer-article-figures.ts`) call a one-line
  `ensureCompiled()` first, so they never read stale output after a new folder is added.
- The skill runs the compile right after writing a folder, before `pnpm og` and the
  Telegram step.

## Phases

### 0. Baseline (before touching anything)

**Done 2026-11-26** at `d8aa263` (182 datasets, newest 26-NOV-2026). M2 Pro, 10 cores,
32 GB, Node 22.16, Next 16.3.4 (Turbopack). Every run is cold: no `.next`, no tsc
incremental cache.

| Measure | Today | Without the 181 older modules* |
|---|---|---|
| `tsc --noEmit` | 6.5–7.5 s (check 5.4 s, 1,748 files, 67.6k lines) | 5.9–6.4 s (check 4.7 s, 1,567 files, 24.0k lines) |
| `pnpm lint` (as configured) | 13.1–14.2 s, 168 problems | not measured |
| ESLint, main checkout only (`.claude/**` ignored) | 6.4 s, 28 problems | 5.2 s† |
| ESLint, `src/utils/data-*.ts` alone | 2.6 s | – |
| `next build` (tsc 7.0 s, compile 4.7–4.9 s, 215 static pages 1.6 s) | 15.3–15.7 s | 14.3–17.5 s (tsc 6.6–6.9 s, compile 4.3–4.4 s) |

\*A scratch copy with every dataset module except the newest deleted and its `importMap`
lines removed. This is an upper bound on what the migration can save, since the JSON still
has to be bundled.
†Measured in the real checkout with `src/utils/data-*.ts` ignored, not in the scratch copy.

**Bundle** (client chunks in `.next/static/chunks`, gzip −9):
- Per-dataset splitting already works: 182 lazy single-dataset chunks for the 181 older
  datasets, median 17.8 KB raw / 6.8 KB gzipped (min 6.8 KB, total about 2.9 MB raw). The
  one extra chunk is unexplained (possibly the newest dataset shipped twice); phase 2 should
  compare against 182, not assume one per dataset.
- The homepage (`/en`) loads 19 scripts, 2,063 KB raw / 579 KB gzipped.
- The largest of them, 473 KB raw / 96 KB gzipped, is mostly `historicalStorageData`
  (about 447 KB raw of it), plus `dataManager` and the newest dataset. Dam and region pages load
  the same chunk.
- **So the datasets aren't what makes first load heavy; the historical table is.** Moving the
  datasets to JSON won't change first-load JS. If first load matters, the bigger lever is
  `historicalStorageData` (see "Later"), though it is not a drop-in lazy load.

**Found while measuring, separate from this migration:**
- `pnpm lint` (`eslint .`) also lints `.claude/worktrees/` (330 extra TS files), which
  doubles its time and adds 140 problems. The main checkout alone has 23 errors and 5
  warnings, so lint currently fails.
- 3 of 9 cold `next build` runs failed with `Module not found:
  '@vercel/turbopack-next/internal/font/google/font'` ("next/font/google queries have
  exactly one entry") on all 20 Google font imports. Fonts were reachable from Node; a retry
  succeeded. Unknown whether Vercel builds hit this too.

### 1. Exporter and equivalence check

- `scripts/export-snapshots.ts` imports every module through the current `dataManager`,
  calls `getDatasetSnapshot(id)` for all 182 ids, and writes the folder layout above. Going
  through the real modules handles the old files' differing formats (older ones have no
  summaries; some are formatted across many lines) without parsing TypeScript.
- `scripts/check-snapshots.ts` compares the **public `dataManager` outputs** per id, old
  loader vs. new: `reservoirData`, `getReportDate`, `yearlyInflowData`,
  `getWaterTransferred`, `getSummaryChanges` × 3 languages, `getDamSummary` × 21 dams × 3
  languages. Comparing snapshot files alone isn't enough, because `registerDatasetSnapshot`
  behaves slightly differently from a real module (`getSummaryChanges` is `undefined` when
  `en` is null; a missing language returns `''`). **Nothing is deleted until this passes for
  all 182 ids.**

### 2. Switch the loader

- `dataManager.ts` imports `availableDataSets`, the default snapshot and the lazy loaders
  from `src/generated/snapshotIndex.ts`, and registers JSON snapshots into `moduleCache` the
  way `registerDatasetSnapshot` does.
- `DEFAULT_DATASET_ID` is the newest folder.
- Run the equivalence check again, then delete the 182 `data-*.ts` files.

### 3. Validation that replaces tsc

tsc catches a malformed module for free today; JSON gets no such check. `scripts/validate-snapshots.ts`,
run by the skill after writing a dataset and as part of `pnpm build`, checks for each snapshot:
- exactly 21 reservoirs, names from the known list, regions as in CLAUDE.md
- every required field present and numeric
- storage % agrees with amount / capacity (CLAUDE.md validation rule)
- the folder name is a valid id (`DD-MMM-YYYY`) that matches `reportDate`

### 4. Update the workflow docs, in the same commit as the code

- `.claude/skills/fetch-and-update/SKILL.md`: "Data Module Creation" becomes "add a folder, run
  compile + validate"; replace the `data-20-MAR-2026.ts`
  reference; the cloud git-flow comment (`...edit data-DD-MMM-YYYY.ts, dataManager.ts...`);
  the `getDamSummary` section (now `dams.json`); the narrative-context note about reading
  `data-*.ts` modules.
- CLAUDE.md: "Multi-Dataset Support", "Creating New Data Files from Excel" step 2 and 5, and
  the Data Flow list.
- No route changes expected: `app/api/internal/narrative` and `llms.txt` go through
  `dataManager`, so they follow the loader.

### Later, not in this migration

- **`historicalStorageData.ts`** (454 KB) duplicates each new dataset's readings. It could be
  derived from snapshots for dates from March 2025 on, but only **at compile time**; deriving
  it at runtime would make the heatmap load all 182 snapshots in the browser.
  **Done 2026-11-26: out of first-load JS.** First-render code now reads a generated digest
  (`scripts/build/history-digest.ts` → `src/generated/historyDigest.ts`, gitignored, built on
  `postinstall`, `dev:next`, `og` and `build`): the earliest entry of each month plus the
  last 14 months in full. Outputs were byte-identical for all 182 datasets (every forecast
  selection at 7% and 20%, October baselines, sparklines). First-load JS went from 579 to
  542 KB gzipped on `/en` and from 549 to 511 KB on dam and region pages (about 305 KB less
  raw JS each); the digest itself costs 32 KB gzipped. The full table is now one lazy
  chunk (396 KB raw, 71 KB gzipped) that the heatmap fetches after hydration. **Trade-off:**
  the heatmap is on the homepage, dam and region pages, so those pages still download the
  table, just after hydration; total bytes per view are about 34 KB gzipped *higher* (the
  digest duplicates part of the table). The gain is a lighter critical path, not fewer bytes. Article pages still load it through
  `ArticleStormCharts`. **This is the first `src/generated/` output, so phase 2 reuses the
  same hooks.**
- `yearlyInflowData` differs between most snapshots, so it stays per snapshot for now.

## Rollout risks

- **The daily routine follows whatever `SKILL.md` says in the checkout** and pushes straight
  to `main`. If the loader changes before the skill does, the next run writes a `data-*.ts`
  file the new loader ignores, and the site silently stays on the old dataset. Land loader,
  validator, `SKILL.md` and CLAUDE.md in **one commit, between bulletin runs**, and watch the
  next run.
- **Open branches and worktrees that touch data files will conflict**, e.g.
  `.claude/worktrees/soil-moisture-exploration-3fa2a7` (has its own `dataManager.ts` with
  the old `importMap`). Merge or rebase them before, or redo their data edits after.
- **Chunk splitting:** confirm after phase 2 that the build still emits one chunk per
  snapshot and the first-load JS for `/` did not grow (compare with phase 0).
- **Silent fallback:** `resolveModule` returns the latest dataset when an id isn't cached, so
  a broken lazy load shows wrong data rather than an error. The equivalence check plus a
  spot check of one article pinned to an old dataset covers this.

## Verification gate before merging

1. `check-snapshots` passes for all 182 ids (before deleting the `.ts` files).
2. `validate-snapshots` passes; `pnpm build` and `pnpm lint` pass.
3. Phase 0 numbers measured again and compared.
4. In the browser: dashboard on latest, playback across the full range, a dam page, a region
   page, an article pinned to an older dataset, `/api` datasets and summary endpoints,
   `llms.txt`.
5. `pnpm og` and `post-telegram.ts --dry-run` still read the latest dataset.

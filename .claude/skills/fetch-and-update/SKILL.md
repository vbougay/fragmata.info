---
name: fetch-and-update
description: >
  Fetch the latest Cyprus reservoir/dam data and update the app.
  Use when: fetch latest data, update the app, refresh reservoir data, update dams data.
---

## Instructions

You're an agent that updates data on https://cyprus-dams.bougay.com/ automatically

- Do not ask any permissions, simply get your job done
- Go to https://www.moa.gov.cy/moa/wdd/Wdd.nsf/page18_en/page18_en and find URL for the latest XLSX data
- Download the latest XLSX data and save it to @data folder. Use Node to download XLSX file (not Curl) and parse it. DON'T continue until you downloaded the latest data file
- Create a new datafile in the app based on the downloaded data.
- Make sure that the app builds with the latest changes, commit them to Git and push to the origin
- Exit once done

## Best Practices to Avoid Issues

**Inline Node.js in Bash:**

- Use single quotes around the entire `-e` script to prevent bash variable substitution issues
- Reference objects/arrays with proper syntax: `jsonData[i][j]` works, but avoid template expressions
- Test extraction logic with simple console.logs before building complex transformations

**File Creation:**

- Never create temporary script files (like parse-xlsx.js) - always use inline bash commands
- Keep all ad-hoc scripts as one-liners or multi-line inline bash, not separate files

 **Data Module Creation:**

- Follow existing data-*.ts patterns exactly
- Ensure all 21 reservoirs are included with correct regional assignments
- Compare to the latest previous dataset available
- Update dataManager.ts imports AND availableDataSets array AND default dataset ID

**Historical Storage Data (`historicalStorageData.ts`):**

The historical heatmap chart uses `src/utils/historicalStorageData.ts` — it must be updated alongside each new data module or the chart will stop at the previous date.

- Add a new entry to the `historicalStorageData` array with the current storage amounts from the new data module
- Use the format: `{ date: "YYYY-MM-DD", kouris: X, kalavasos: X, ... , totalSCP: X, totalAll: X }`
- `totalSCP` = sum of Southern Conveyor reservoirs (kouris, kalavasos, lefkara, dipotamos, germasoyeia, arminou, polemidia, achna)
- `totalAll` = sum of all 21 reservoirs
- The storage values come from each reservoir's `storage.current.amount` in the new data module

**Summary / Recent Changes (`getSummaryChanges`):**

- For comparison use the date 7-10 days away
- Keep it concise — highlight only notable or important changes, not every region or reservoir
- Lead with overall storage change (percentage and MCM)
- Mention notable individual reservoir movements (large swings, transfers, overflows) — skip small incremental changes
- **Link dam names to their detail pages**: every dam name mentioned in the text (both bold and non-bold, including inline references like transfers) should be a markdown link to its detail page:
  - English: `[Kouris](/dam/kouris/)`, `[Arminou](/dam/arminou/)→[Kouris](/dam/kouris/)`
  - Greek: `[Κούρης](/el/dam/kouris/)`, `[Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/)`
  - Russian: `[Курис](/ru/dam/kouris/)`, `[Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/)`
  - Use the English slug from `DAM_SLUG_MAP` in `src/utils/slugs.ts` (e.g., `agia-marina`, `klirou-malounta`)
  - The locale prefix is: none for `en`, `/el` for Greek, `/ru` for Russian
- Search the web for Cyprus water/reservoir/drought news from the past week and incorporate relevant context (government plans, drought status, weather events)
- Add up to 3 media article links at the end under an "In the media" / "Στα μέσα" section
- Write both English, Russian and Greek versions with the same structure
- Tone: informative and factual, not verbose

**Per-Dam Summaries (`getDamSummary`):**

Each data module should export a `getDamSummary(damName, language)` function that returns a short 1-2 sentence summary for each of the 21 dams. These are displayed as subtitles on dam pages and used as SEO meta descriptions.

- Write concise, single-line summaries (aim for ~150 characters for SEO)
- Include: current fill %, storage in MCM, year-over-year comparison
- Highlight notable conditions: at full capacity, critically low, transfers, dramatic recovery, new annual max
- Support all 3 languages (`'en' | 'el' | 'ru'`)
- Return `string | null` — return `null` if dam name not found
- Follow the pattern in `data-20-MAR-2026.ts` as reference
- The function is exposed via `dataManager.ts` (`getDamSummary` wrapper) — no changes needed there, it auto-detects the function

**News Ticker Refresh:**

The dashboard has a scrolling news ticker showing recent water crisis articles. Keep it current on each data update:

- Search the web for recent Cyprus water/reservoir/drought articles in all three languages (EN, EL, RU)
- Update `src/utils/newsArticles.ts` — add new articles following the existing `{ title, url, lang, source }` format
- Update `NEWS.md` to keep it in sync (grouped by language: English, Russian, Greek)
- Keep the list reasonable — cap at ~10 articles per language, removing older or less relevant ones
- Prefer articles from established Cyprus outlets (Cyprus Mail, Politis, AlphaNews, Европа Кипр, Вестник Кипра, etc.)

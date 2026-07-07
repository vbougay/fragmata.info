---
name: google-search-console
description: Google Search Console insights from local SQLite database. Use when the user asks about SEO performance, search keywords, rankings, impressions, CTR, organic traffic, landing pages, or search trends for fragmata.info.
user-invocable: true
---

# GSC Insights

Use these instructions when answering questions about search performance, SEO, keywords, rankings, or organic traffic for fragmata.info (the Cyprus reservoir monitoring dashboard).

## Database

**Location:** `.claude/skills/google-search-console/gsc-data.sqlite` (SQLite, populated by `gsc-sync`). The skill is self-contained: the sync script, the database, and the credentials all live in this directory.

**Run queries with:**
```
sqlite3 -header -separator '|' .claude/skills/google-search-console/gsc-data.sqlite "SQL"
```

If the file does not exist yet, the pipeline has not been synced — see **Syncing data** below.

## Schema & Table Selection

### `query_data` — Keyword analysis (accurate impressions)

| Column | Type | Notes |
|--------|------|-------|
| date | TEXT | YYYY-MM-DD |
| query | TEXT | Search query (NOT NULL) |
| clicks | INTEGER | |
| impressions | INTEGER | Accurate per-query count |
| ctr | REAL | 0-1 |
| position | REAL | |

**Use for:** keyword rankings, aggregate site metrics, time trends.

### `performance_data` — Page/device/country analysis

| Column | Type | Notes |
|--------|------|-------|
| date | TEXT | YYYY-MM-DD |
| query | TEXT | Nullable |
| page | TEXT | Full URL |
| country | TEXT | 3-letter code (cyp, grc, rus, gbr, etc.) |
| device | TEXT | MOBILE, DESKTOP, TABLET |
| clicks | INTEGER | |
| impressions | INTEGER | Inflated when aggregating by query |
| ctr | REAL | 0-1 |
| position | REAL | |

**Use for:** landing page performance, device breakdown, country breakdown, page-level keyword analysis.

## Critical Rules

1. **Always use `query_data` for keyword-level or aggregate metrics.** The `performance_data` table inflates impressions because the same impression appears once per page that ranked. Never sum `performance_data` impressions across queries for totals.
2. **Use `performance_data` only when you need page, device, or country dimensions** — it's the only table with those columns.
3. **Weighted averages are required:**
   - CTR: `ROUND(100.0 * SUM(clicks) / SUM(impressions), 2)` (not `AVG(ctr)`)
   - Position: `ROUND(1.0 * SUM(position * impressions) / SUM(impressions), 1)` (not `AVG(position)`)
4. **Data lags 2-3 days** from the current date. The most recent date with data is typically 2-3 days ago.
5. **GSC data is synced manually** via `pnpm exec tsx scripts/gsc-sync.tsx sync`. If data seems stale, suggest running the sync (see below).

## Syncing data

The database is populated from the Google Search Console API by `gsc-sync.tsx` (in this skill directory). It authenticates with a Google Cloud service account key at `.claude/skills/google-search-console/gsc-credentials.json` (gitignored) that must be added as a user on the **fragmata.info** property in Search Console.

```bash
GSC=.claude/skills/google-search-console/gsc-sync.tsx
pnpm exec tsx $GSC status          # show coverage / last sync
pnpm exec tsx $GSC sync            # last 30 days (default)
pnpm exec tsx $GSC sync --days 90  # last N days
pnpm exec tsx $GSC sync -s 2025-01-01 -e 2025-03-31   # explicit range
```

The property is configured as a **domain property** (`sc-domain:fragmata.info`) in the script's `SITE_URL` constant. If GSC verification ever changes to a URL-prefix property, update that constant to `https://fragmata.info/`.

## Common Query Patterns

### Top keywords by clicks
```sql
SELECT query, SUM(clicks) AS clicks, SUM(impressions) AS impressions,
  ROUND(100.0 * SUM(clicks) / SUM(impressions), 2) AS ctr_pct,
  ROUND(1.0 * SUM(position * impressions) / SUM(impressions), 1) AS avg_pos
FROM query_data
WHERE date >= '{start}' AND date <= '{end}'
GROUP BY query ORDER BY clicks DESC LIMIT 20;
```

### Top landing pages by clicks
```sql
SELECT page, SUM(clicks) AS clicks, SUM(impressions) AS impressions,
  ROUND(100.0 * SUM(clicks) / SUM(impressions), 2) AS ctr_pct,
  ROUND(1.0 * SUM(position * impressions) / SUM(impressions), 1) AS avg_pos
FROM performance_data
WHERE date >= '{start}' AND date <= '{end}'
GROUP BY page ORDER BY clicks DESC LIMIT 15;
```

### Aggregate metrics with period-over-period comparison
```sql
SELECT 'current' AS period,
  SUM(clicks) AS clicks, SUM(impressions) AS impressions,
  ROUND(100.0 * SUM(clicks) / SUM(impressions), 2) AS ctr_pct,
  ROUND(1.0 * SUM(position * impressions) / SUM(impressions), 1) AS avg_pos
FROM query_data WHERE date >= '{start}' AND date <= '{end}'
UNION ALL
SELECT 'previous' AS period,
  SUM(clicks), SUM(impressions),
  ROUND(100.0 * SUM(clicks) / SUM(impressions), 2),
  ROUND(1.0 * SUM(position * impressions) / SUM(impressions), 1)
FROM query_data WHERE date >= '{prev_start}' AND date <= '{prev_end}';
```

### Device breakdown
```sql
SELECT device, SUM(clicks) AS clicks, SUM(impressions) AS impressions,
  ROUND(100.0 * SUM(clicks) / SUM(impressions), 2) AS ctr_pct,
  ROUND(1.0 * SUM(position * impressions) / SUM(impressions), 1) AS avg_pos
FROM performance_data
WHERE date >= '{start}' AND date <= '{end}'
GROUP BY device ORDER BY clicks DESC;
```

### Top countries
```sql
SELECT country, SUM(clicks) AS clicks, SUM(impressions) AS impressions,
  ROUND(100.0 * SUM(clicks) / SUM(impressions), 2) AS ctr_pct
FROM performance_data
WHERE date >= '{start}' AND date <= '{end}'
GROUP BY country ORDER BY clicks DESC LIMIT 10;
```

### Weekly trend
```sql
SELECT strftime('%Y-W%W', date) AS week, MIN(date) AS week_start,
  SUM(clicks) AS clicks, SUM(impressions) AS impressions,
  ROUND(100.0 * SUM(clicks) / SUM(impressions), 2) AS ctr_pct,
  ROUND(1.0 * SUM(position * impressions) / SUM(impressions), 1) AS avg_pos
FROM query_data
WHERE date >= '{start}' AND date <= '{end}'
GROUP BY week ORDER BY week;
```

### High-impression / low-CTR opportunities
```sql
SELECT query, SUM(clicks) AS clicks, SUM(impressions) AS impressions,
  ROUND(100.0 * SUM(clicks) / SUM(impressions), 2) AS ctr_pct,
  ROUND(1.0 * SUM(position * impressions) / SUM(impressions), 1) AS avg_pos
FROM query_data
WHERE date >= '{start}' AND date <= '{end}'
GROUP BY query
HAVING SUM(impressions) > 50 AND (1.0 * SUM(clicks) / SUM(impressions)) < 0.02
ORDER BY impressions DESC LIMIT 15;
```

## Multilingual queries

fragmata.info serves English, Greek, and Russian, so search queries arrive in multiple scripts. When analyzing themes, account for all three:

- **English:** cyprus reservoirs, cyprus dams, water levels cyprus, kouris dam, asprokremmos
- **Greek:** φράγματα κύπρου, στάθμη νερού, ταμιευτήρες, κούρης
- **Russian:** водохранилища кипра, плотины кипра, уровень воды кипр

Reservoir/dam names (Kouris, Asprokremmos, Kalavasos, Evretou, etc.) are common query stems — group by name across languages when reporting on specific dams. Don't assume ASCII; Greek and Cyrillic queries will appear verbatim in the `query` column.

## Formatting Guidelines

- Shorten page URLs: strip `https://fragmata.info` prefix, show path only (e.g., `/dam/kouris`, `/media`)
- Format CTR as percentage with 2 decimals (e.g., `2.45%`)
- Format position with 1 decimal (e.g., `12.3`)
- Map common country codes: cyp → Cyprus, grc → Greece, rus → Russia, gbr → United Kingdom, ukr → Ukraine, usa → United States, deu → Germany
- Use markdown tables for structured results
- When user doesn't specify a date range, default to last 30 days
- For period-over-period, compare against the immediately preceding period of equal length

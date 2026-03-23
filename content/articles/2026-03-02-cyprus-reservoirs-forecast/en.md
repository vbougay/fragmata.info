**The free Fragmata dashboard shows: the crisis is real, but cyclical — not catastrophic**

---

Cyprus reservoirs stand at 20.6% — 59.9 million cubic metres out of 316. According to the Water Development Department's report of 2 March 2026, the situation remains severe: the government has already imposed a 10% island-wide cut in water supply, and the largest reservoir, Kouris, holds just 18.9% of its capacity. However, a fresh analysis of 38 years of hydrological data reveals what the headlines miss: Cyprus droughts are cyclical, and the current cycle is approaching its turning point.

### February Brought Hope

The past two weeks gave reason for cautious optimism. Total storage rose from 18.7% to 20.6% — an increase of 5.4 million cubic metres in 10 days. February 2026 ended with inflow of 24.2 mln. m³ — the best February in four years, since the 2021/22 season. Total inflow for the current water year (since October 2025) reached 39.4 mln. m³, already more than double the entire 2024/25 season, when reservoirs received just 18.7 mln. m³.

Three reservoirs are at 100%: Pomos, Kalopanagiotis, and Klirou-Malounta. Evretou (Chrysochou area) is approaching its annual maximum at 25.8%. Since October, 6.92 mln. m³ of water has been pumped from Arminou to Kouris.

Yet the picture is uneven. Achna in the southeast is nearly empty at 2.1%. Kalavasos holds 8.3%, Lefkara — 12%. Germasoyeia — 11.7%. Reserves remain below last year's levels: on the same date in 2025, reservoirs were at 25.5%.

{{chart:inflow}}

### What the Forecast Model Shows

It was precisely to see the full picture that Fragmata (fragmata.info) was created — a free, open-source dashboard that visualizes the state of all 21 Cyprus reservoirs on a weekly basis. The platform is available in three languages — English, Greek, and Russian.

Fragmata's key feature is a forecast engine trained on data from 1988 to 2026. Unlike simple linear extrapolation ("if the level drops by X per month, the reservoir will be empty in Y months"), the model accounts for multi-year drought and recovery cycles — a defining characteristic of the Cypriot climate.

The model builds three scenarios:

- **Drought** (worst case): dry conditions persist year after year
- **Expected** (most likely): a typical multi-year cycle — decline, trough, recovery
- **Recovery** (best case): two wet years in a row, then normalisation

Under the expected scenario, reserves will continue declining and reach the ~7% threshold by November–December 2026 — a level at which severe restrictions are imposed. But then the model forecasts a sharp reversal: rising to ~28% by February 2027 and ~50% by May 2027.

{{chart:forecast}}

### Why This Is Not a Linear Catastrophe

Droughts in Cyprus historically last about four years, followed by a recovery period. The current drought, which began around 2022–2023, is now entering its fourth year. The model identifies analogous periods in the past and uses them to forecast.

"The current media narrative focuses on record lows and drying reservoirs. The situation is serious — that's not an exaggeration," says Fragmata developer Vladimir Bugay. "But when you look at 38 years of data, you see something else: reservoirs are most likely to hit bottom and begin recovering. The crisis is real, but history is cyclical, not catastrophic."

For journalists, this is a crucial nuance. Headlines about drying dams accurately capture the current moment — but not the trend. The data shows that Cyprus has seen this film before — and it has always ended with rain.

{{chart:heatmap}}

### How Fragmata Works

The dashboard updates weekly and includes:

- **Overview panel** with the current state of all 21 reservoirs
- **Regional analysis** across five areas: Southern Conveyor, Paphos, Chrysochou, Nicosia, Recharge
- **Interactive map** with Leaflet-based visualisation
- **Heatmaps** spanning 10 years — clearly showing drought and recovery cycles
- **10-year forecast** with three scenarios and a restriction threshold
- **Media mode** (fragmata.info/media) — generates publication-ready PNG infographics

All data comes from public reports by the Cyprus Water Development Department. The project's source code is open. The platform is entirely free.

### Current Situation by Region

| Region | Capacity (mln. m³) | Storage (mln. m³) | Percentage |
|--------|---------------|---------------|------------|
| Southern Conveyor | 189.5 | 33.0 | 17.4% |
| Paphos | 71.7 | 17.2 | 24.0% |
| Chrysochou | 26.1 | 8.0 | 30.5% |
| Nicosia | 3.5 | 1.7 | 50.0% |
| Recharge/Other | 9.3 | 7.6 | 81.6% |
| **Total** | **316.0** | **59.9** | **20.6%** |

The Southern Conveyor faces the greatest pressure — eight reservoirs supplying Limassol and the island's southeast. Storage here is just 17.4%. Meanwhile, smaller reservoirs in the mountains and the northwest are faring significantly better.

### What's Next

March and April are the last months when rainfall can meaningfully replenish the reservoirs. From May, the dry season begins and levels will decline until next autumn. Fragmata's forecast model shows that the coming months will be critical — but 38 years of data say that after the trough comes recovery.

Follow the situation in real time: **fragmata.info**

---

*Author: Vladimir Bugay, Fragmata developer*
*Data: Cyprus Water Development Department, report of 2 March 2026*

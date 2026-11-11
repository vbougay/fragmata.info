import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.022, totalSince: 1.520 }, storage: { current: { amount: 41.970, percentage: 36.5 }, lastYear: { amount: 10.568, percentage: 9.2 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.004, totalSince: 0.069 }, storage: { current: { amount: 3.649, percentage: 21.3 }, lastYear: { amount: 1.731, percentage: 10.1 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 0.019 }, storage: { current: { amount: 2.385, percentage: 17.2 }, lastYear: { amount: 1.972, percentage: 14.2 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.002, totalSince: 0.108 }, storage: { current: { amount: 3.651, percentage: 23.6 }, lastYear: { amount: 2.937, percentage: 18.9 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 0.072 }, storage: { current: { amount: 6.237, percentage: 46.2 }, lastYear: { amount: 0.623, percentage: 4.6 } }, maxStorage: { amount: 8.140, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.015, totalSince: 0.749 }, storage: { current: { amount: 3.154, percentage: 73.3 }, lastYear: { amount: 1.692, percentage: 39.3 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 0.019 }, storage: { current: { amount: 1.463, percentage: 43 }, lastYear: { amount: 0.807, percentage: 23.7 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.533, percentage: 7.8 }, lastYear: { amount: 0.092, percentage: 1.4 } }, maxStorage: { amount: 0.380, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.001, totalSince: 0.191 }, storage: { current: { amount: 18.300, percentage: 34.9 }, lastYear: { amount: 4.536, percentage: 8.7 } }, maxStorage: { amount: 22.011, date: "29,5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 0.151 }, storage: { current: { amount: 6.987, percentage: 40.7 }, lastYear: { amount: 1.861, percentage: 10.8 } }, maxStorage: { amount: 8.990, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.037 }, storage: { current: { amount: 0.795, percentage: 36.5 }, lastYear: { amount: 0.000, percentage: 0 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 0.072 }, storage: { current: { amount: 9.162, percentage: 38.2 }, lastYear: { amount: 2.618, percentage: 10.9 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 0.011 }, storage: { current: { amount: 0.421, percentage: 42.5 }, lastYear: { amount: 0.000, percentage: 0 } }, maxStorage: { amount: 0.990, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.007 }, storage: { current: { amount: 0.496, percentage: 57.7 }, lastYear: { amount: 0.108, percentage: 12.6 } }, maxStorage: { amount: 0.860, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.025 }, storage: { current: { amount: 0.158, percentage: 53 }, lastYear: { amount: 0.057, percentage: 19.1 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 0.001 }, storage: { current: { amount: 1.162, percentage: 68.8 }, lastYear: { amount: 0.002, percentage: 0.1 } }, maxStorage: { amount: 1.690, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.001, totalSince: 0.018 }, storage: { current: { amount: 1.059, percentage: 74.1 }, lastYear: { amount: 0.022, percentage: 1.5 } }, maxStorage: { amount: 1.430, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.363, percentage: 100 }, lastYear: { amount: 0.046, percentage: 12.7 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 0.021 }, storage: { current: { amount: 2.147, percentage: 76.7 }, lastYear: { amount: 0.481, percentage: 17.2 } }, maxStorage: { amount: 2.800, date: "2/4-5/6" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.001, totalSince: 0.106 }, storage: { current: { amount: 1.822, percentage: 91.1 }, lastYear: { amount: 1.088, percentage: 54.4 } }, maxStorage: { amount: 2.000, date: "14/2-30/6" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 3.667, percentage: 82.3 }, lastYear: { amount: 1.876, percentage: 42.1 } }, maxStorage: { amount: 4.454, date: "10/3-2/6" }, region: "Recharge/Other" },
];

// Yearly inflow data — 25/26 finalized at year's close; 26/27 begins October 1, 2026
export const yearlyInflowData: YearlyInflowData[] = [
  { year: "15/16", months: { October:1.024, November:0.608, December:1.248, January:3.685, February:2.824, March:6.132, April:1.314, May:0.961, June:0.105, July:0.0, "Aug-Sep":0.006 }, total:17.907 },
  { year: "16/17", months: { October:0.247, November:0.657, December:7.424, January:21.083, February:4.181, March:8.891, April:4.398, May:1.78, June:0.228, July:0.0, "Aug-Sep":0.0 }, total:48.889 },
  { year: "17/18", months: { October:0.142, November:0.614, December:0.881, January:20.661, February:9.528, March:5.944, April:2.176, May:2.802, June:2.022, July:0.05, "Aug-Sep":0.077 }, total:44.897 },
  { year: "18/19", months: { October:0.858, November:0.757, December:16.665, January:118.11, February:53.909, March:32.283, April:25.326, May:8.869, June:6.199, July:1.524, "Aug-Sep":0.542 }, total:265.042 },
  { year: "19/20", months: { October:2.43, November:1.545, December:30.495, January:47.74, February:15.916, March:15.67, April:11.062, May:7.317, June:2.747, July:0.866, "Aug-Sep":0.161 }, total:135.949 },
  { year: "20/21", months: { October:0.165, November:0.942, December:3.107, January:12.54, February:8.016, March:6.022, April:4.156, May:0.899, June:0.192, July:0.024, "Aug-Sep":0.035 }, total:36.098 },
  { year: "21/22", months: { October:0.084, November:0.397, December:11.923, January:74.614, February:33.963, March:19.801, April:8.139, May:3.44, June:1.264, July:0.093, "Aug-Sep":0.035 }, total:153.753 },
  { year: "22/23", months: { October:3.946, November:2.976, December:2.922, January:8.268, February:12.603, March:9.517, April:4.741, May:2.728, June:0.891, July:0.0, "Aug-Sep":0.186 }, total:48.778 },
  { year: "23/24", months: { October:0.583, November:1.581, December:2.34, January:7.3, February:6.676, March:2.92, April:1.801, May:0.91, June:0.297, July:0.098, "Aug-Sep":0.208 }, total:24.714 },
  { year: "24/25", months: { October:0.0, November:3.084, December:5.71, January:4.062, February:2.451, March:1.465, April:1.096, May:0.716, June:0.076, July:0.0, "Aug-Sep":0.004 }, total:18.664 },
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":1.596 }, total:117.091 },
  { year: "26/27", months: { October:2.293, November:0.776, December:0, January:0, February:0, March:0, April:0, May:0, June:0, July:0, "Aug-Sep":0 }, total:3.069 },
];

export const getReportDate = (): string => "10-NOV-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris held at 36.5% (41.97 MCM), 27.3pp above last year\'s 9.2%.',
      el: 'Κούρης παρέμεινε στο 36.5% (41.97 ΕΚΜ), 27.3μ.π. πάνω από πέρυσι (9.2%).',
      ru: 'Курис без изменений — 36.5% (41.97 МКМ), +27.3пп выше прошлогодних 9.2%.',
    },
    'Kalavasos': {
      en: 'Kalavasos held at 21.3% (3.65 MCM), 11.2pp above last year\'s 10.1%.',
      el: 'Καλαβασός παρέμεινε στο 21.3% (3.65 ΕΚΜ), 11.2μ.π. πάνω από πέρυσι (10.1%).',
      ru: 'Калавасос без изменений — 21.3% (3.65 МКМ), +11.2пп выше прошлогодних 10.1%.',
    },
    'Lefkara': {
      en: 'Lefkara held at 17.2% (2.38 MCM), 3pp above last year\'s 14.2%.',
      el: 'Λεύκαρα παρέμεινε στο 17.2% (2.38 ΕΚΜ), 3μ.π. πάνω από πέρυσι (14.2%).',
      ru: 'Лефкара без изменений — 17.2% (2.38 МКМ), +3пп выше прошлогодних 14.2%.',
    },
    'Dipotamos': {
      en: 'Dipotamos held at 23.6% (3.65 MCM), 4.7pp above last year\'s 18.9%.',
      el: 'Διπόταμος παρέμεινε στο 23.6% (3.65 ΕΚΜ), 4.7μ.π. πάνω από πέρυσι (18.9%).',
      ru: 'Дипотамос без изменений — 23.6% (3.65 МКМ), +4.7пп выше прошлогодних 18.9%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia eased to 46.2% (6.24 MCM), 41.6pp above last year\'s 4.6%.',
      el: 'Γερμασόγεια υποχώρησε στο 46.2% (6.24 ΕΚΜ), 41.6μ.π. πάνω από πέρυσι (4.6%).',
      ru: 'Гермасойя снизился — 46.2% (6.24 МКМ), +41.6пп выше прошлогодних 4.6%.',
    },
    'Arminou': {
      en: 'Arminou rose to 73.3% (3.15 MCM), 34pp above last year\'s 39.3%.',
      el: 'Αρμίνου ανέβηκε στο 73.3% (3.15 ΕΚΜ), 34μ.π. πάνω από πέρυσι (39.3%).',
      ru: 'Арминоу вырос — 73.3% (3.15 МКМ), +34пп выше прошлогодних 39.3%.',
    },
    'Polemidia': {
      en: 'Polemidia held at 43% (1.46 MCM), 19.3pp above last year\'s 23.7%.',
      el: 'Πολεμίδια παρέμεινε στο 43% (1.46 ΕΚΜ), 19.3μ.π. πάνω από πέρυσι (23.7%).',
      ru: 'Полемидия без изменений — 43% (1.46 МКМ), +19.3пп выше прошлогодних 23.7%.',
    },
    'Achna': {
      en: 'Achna held at 7.8% (0.53 MCM), 6.4pp above last year\'s 1.4%.',
      el: 'Αχνά παρέμεινε στο 7.8% (0.53 ΕΚΜ), 6.4μ.π. πάνω από πέρυσι (1.4%).',
      ru: 'Ахна без изменений — 7.8% (0.53 МКМ), +6.4пп выше прошлогодних 1.4%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos eased to 34.9% (18.3 MCM), 26.2pp above last year\'s 8.7%.',
      el: 'Ασπρόκρεμμος υποχώρησε στο 34.9% (18.3 ΕΚΜ), 26.2μ.π. πάνω από πέρυσι (8.7%).',
      ru: 'Аспрокреммос снизился — 34.9% (18.3 МКМ), +26.2пп выше прошлогодних 8.7%.',
    },
    'Kannaviou': {
      en: 'Kannaviou eased to 40.7% (6.99 MCM), 29.9pp above last year\'s 10.8%.',
      el: 'Καννάβιου υποχώρησε στο 40.7% (6.99 ΕΚΜ), 29.9μ.π. πάνω από πέρυσι (10.8%).',
      ru: 'Каннавиу снизился — 40.7% (6.99 МКМ), +29.9пп выше прошлогодних 10.8%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos held at 36.5% (0.8 MCM), 36.5pp above last year\'s 0%.',
      el: 'Μαυροκόλυμπος παρέμεινε στο 36.5% (0.8 ΕΚΜ), 36.5μ.π. πάνω από πέρυσι (0%).',
      ru: 'Мавроколимпос без изменений — 36.5% (0.8 МКМ), +36.5пп выше прошлогодних 0%.',
    },
    'Evretou': {
      en: 'Evretou held at 38.2% (9.16 MCM), 27.3pp above last year\'s 10.9%.',
      el: 'Εύρετου παρέμεινε στο 38.2% (9.16 ΕΚΜ), 27.3μ.π. πάνω από πέρυσι (10.9%).',
      ru: 'Эвретоу без изменений — 38.2% (9.16 МКМ), +27.3пп выше прошлогодних 10.9%.',
    },
    'Argaka': {
      en: 'Argaka held at 42.5% (0.42 MCM), 42.5pp above last year\'s 0%.',
      el: 'Αργάκα παρέμεινε στο 42.5% (0.42 ΕΚΜ), 42.5μ.π. πάνω από πέρυσι (0%).',
      ru: 'Аргака без изменений — 42.5% (0.42 МКМ), +42.5пп выше прошлогодних 0%.',
    },
    'Pomos': {
      en: 'Pomos held at 57.7% (0.5 MCM), 45.1pp above last year\'s 12.6%.',
      el: 'Πόμος παρέμεινε στο 57.7% (0.5 ΕΚΜ), 45.1μ.π. πάνω από πέρυσι (12.6%).',
      ru: 'Помос без изменений — 57.7% (0.5 МКМ), +45.1пп выше прошлогодних 12.6%.',
    },
    'Agia Marina': {
      en: 'Agia Marina held at 53% (0.16 MCM), 33.9pp above last year\'s 19.1%.',
      el: 'Αγία Μαρίνα παρέμεινε στο 53% (0.16 ΕΚΜ), 33.9μ.π. πάνω από πέρυσι (19.1%).',
      ru: 'Агия без изменений — 53% (0.16 МКМ), +33.9пп выше прошлогодних 19.1%.',
    },
    'Vyzakia': {
      en: 'Vyzakia held at 68.8% (1.16 MCM), 68.7pp above last year\'s 0.1%.',
      el: 'Βυζακιά παρέμεινε στο 68.8% (1.16 ΕΚΜ), 68.7μ.π. πάνω από πέρυσι (0.1%).',
      ru: 'Визакия без изменений — 68.8% (1.16 МКМ), +68.7пп выше прошлогодних 0.1%.',
    },
    'Xyliatos': {
      en: 'Xyliatos held at 74.1% (1.06 MCM), 72.6pp above last year\'s 1.5%.',
      el: 'Ξυλιάτος παρέμεινε στο 74.1% (1.06 ΕΚΜ), 72.6μ.π. πάνω από πέρυσι (1.5%).',
      ru: 'Ксилиатос без изменений — 74.1% (1.06 МКМ), +72.6пп выше прошлогодних 1.5%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 100% (0.36 MCM), still the only dam overflowing. Up from 12.7% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 100% (0.36 ΕΚΜ), το μόνο φράγμα που υπερχειλίζει. Από 12.7% πέρυσι.',
      ru: 'Калопанайотис без изменений на 100% (0.36 МКМ), единственная переполненная дамба. Год назад 12.7%.',
    },
    'Tamassos': {
      en: 'Tamassos held at 76.7% (2.15 MCM), 59.5pp above last year\'s 17.2%.',
      el: 'Ταμασός παρέμεινε στο 76.7% (2.15 ΕΚΜ), 59.5μ.π. πάνω από πέρυσι (17.2%).',
      ru: 'Тамассос без изменений — 76.7% (2.15 МКМ), +59.5пп выше прошлогодних 17.2%.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta held at 91.1% (1.82 MCM), 36.7pp above last year\'s 54.4%.',
      el: 'Κλήρου-Μαλούντα παρέμεινε στο 91.1% (1.82 ΕΚΜ), 36.7μ.π. πάνω από πέρυσι (54.4%).',
      ru: 'Клиру-Малунта без изменений — 91.1% (1.82 МКМ), +36.7пп выше прошлогодних 54.4%.',
    },
    'Solea': {
      en: 'Solea eased to 82.3% (3.67 MCM), 40.2pp above last year\'s 42.1%.',
      el: 'Σολέα υποχώρησε στο 82.3% (3.67 ΕΚΜ), 40.2μ.π. πάνω από πέρυσι (42.1%).',
      ru: 'Солеа снизился — 82.3% (3.67 МКМ), +40.2пп выше прошлогодних 42.1%.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (2 — 10 Νοεμβρίου 2026)

Δελτίο Τρίτης: συνολική αποθήκευση **35.1%** (101.95 ΕΚΜ) — μείωση 0.06 ΕΚΜ από τη Δευτέρα (102.01 ΕΚΜ) και 0.03 ΕΚΜ από τις 2 Νοεμβρίου (101.97 ΕΚΜ), με το επίπεδο να παραμένει ουσιαστικά σταθερό. Η εισροή 24ώρου ήταν μόλις 0.05 ΕΚΜ και η εισροή σεζόν φτάνει τα 3.07 ΕΚΜ. Το προβάδισμα έναντι πέρυσι είναι **24.9 μονάδες**.

**Αξιοσημείωτα (έναντι 2 Νοεμβρίου):**
- [Κούρης](/el/dam/kouris/) **36.5%** (+0.10 ΕΚΜ την εβδομάδα, 41.97 ΕΚΜ) — εισροή 0.02 ΕΚΜ το τελευταίο 24ωρο
- [Αρμίνου](/el/dam/arminou/) **73.3%** (+2.3μ.π. την εβδομάδα, 3.15 ΕΚΜ) — συνεχίζει να ανεβαίνει
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **36.5%** (+4.2μ.π. την εβδομάδα, 0.80 ΕΚΜ) — η μεγαλύτερη άνοδος
- [Ασπρόκρεμμος](/el/dam/asprokremmos/) **34.9%** (−0.3μ.π. την εβδομάδα, 18.30 ΕΚΜ) — ελαφρά υποχώρηση
- [Αχνά](/el/dam/achna/) **7.8%** — μηδενική εισροή
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — το μόνο φράγμα που υπερχειλίζει

**Στα μέσα:**
- [Έρχονται βροχές: Ποιες περιοχές επηρεάζονται, ο καιρός μέχρι το Σάββατο](https://www.alphanews.live/cyprus/erchontai-vroches-poies-perioches-epireazontai-o-kairos-mechri-to-savvato/) — AlphaNews
- [Αλλάζει το σκηνικό του καιρού στην Κύπρο – Έρχονται βροχές και καταιγίδες](https://dialogos.com.cy/allazei-to-skiniko-toy-kairoy-stin-kypro-erchontai-vroches-kai-kataigides-pote-tha-epireastei-to-nisi/) — Dialogos
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (2 — 10 ноября 2026)

Бюллетень вторника: общий запас **35.1%** (101.95 МКМ) — на 0.06 МКМ меньше, чем в понедельник (102.01 МКМ), и на 0.03 МКМ меньше, чем 2 ноября (101.97 МКМ): уровень практически не меняется. Приток за сутки — всего 0.05 МКМ, за сезон — 3.07 МКМ. Отрыв от прошлого года — **24.9 пункта**.

**Основные изменения (за период со 2 ноября):**
- [Курис](/ru/dam/kouris/) **36.5%** (+0.10 МКМ за неделю, 41.97 МКМ) — приток за сутки 0.02 МКМ
- [Арминоу](/ru/dam/arminou/) **73.3%** (+2.3пп за неделю, 3.15 МКМ) — продолжает расти
- [Мавроколимбос](/ru/dam/mavrokolympos/) **36.5%** (+4.2пп за неделю, 0.80 МКМ) — наибольший рост
- [Аспрокреммос](/ru/dam/asprokremmos/) **34.9%** (−0.3пп за неделю, 18.30 МКМ) — небольшое снижение
- [Ахна](/ru/dam/achna/) **7.8%** — притока нет
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — единственная переполненная дамба
`;
  }
  return `
### Recent Changes (November 2 — 10, 2026)

Tuesday's bulletin: total storage **35.1%** (101.95 MCM) — down 0.06 MCM from Monday (102.01 MCM) and 0.03 MCM from November 2 (101.97 MCM), so levels are essentially flat. 24-hour inflow was just 0.05 MCM, bringing the season total to 3.07 MCM. The gap over last year is **24.9 points**.

**Notable movements (vs. November 2):**
- [Kouris](/dam/kouris/) **36.5%** (+0.10 MCM on the week, 41.97 MCM) — 0.02 MCM of inflow in the last 24 hours
- [Arminou](/dam/arminou/) **73.3%** (+2.3pp on the week, 3.15 MCM) — still the steady riser
- [Mavrokolympos](/dam/mavrokolympos/) **36.5%** (+4.2pp on the week, 0.80 MCM) — the biggest rise
- [Asprokremmos](/dam/asprokremmos/) **34.9%** (−0.3pp on the week, 18.30 MCM) — easing slightly
- [Achna](/dam/achna/) **7.8%** — zero inflow
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing

**In the media:**
- [Mazotos residents reject compensation measures over desalination plant](https://cyprus-mail.com/2026/11/03/mazotos-residents-reject-compensation-measures-over-desalination-plant) — Cyprus Mail
- [Agriculture Ministry Budget Rises to €532m, With 43% Allocated to Water](https://en.politis.com.cy/news/environment/1061681/agriculture-ministry-budget-rises-to-eur532m-with-43-allocated-to-water) — Politis
`;
};

import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.022, totalSince: 1.163 }, storage: { current: { amount: 41.748, percentage: 36.3 }, lastYear: { amount: 10.855, percentage: 9.4 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 0.041 }, storage: { current: { amount: 3.636, percentage: 21.3 }, lastYear: { amount: 1.777, percentage: 10.4 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 0.017 }, storage: { current: { amount: 2.385, percentage: 17.2 }, lastYear: { amount: 1.981, percentage: 14.3 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 0.086 }, storage: { current: { amount: 3.654, percentage: 23.6 }, lastYear: { amount: 2.998, percentage: 19.3 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 0.062 }, storage: { current: { amount: 6.251, percentage: 46.3 }, lastYear: { amount: 0.662, percentage: 4.9 } }, maxStorage: { amount: 8.140, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.019, totalSince: 0.688 }, storage: { current: { amount: 3.109, percentage: 72.3 }, lastYear: { amount: 1.705, percentage: 39.7 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 0.017 }, storage: { current: { amount: 1.462, percentage: 43 }, lastYear: { amount: 0.811, percentage: 23.9 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.533, percentage: 7.8 }, lastYear: { amount: 0.094, percentage: 1.4 } }, maxStorage: { amount: 0.380, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.001, totalSince: 0.185 }, storage: { current: { amount: 18.366, percentage: 35.1 }, lastYear: { amount: 4.602, percentage: 8.8 } }, maxStorage: { amount: 22.011, date: "29,5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 0.148 }, storage: { current: { amount: 7.023, percentage: 40.9 }, lastYear: { amount: 1.903, percentage: 11.1 } }, maxStorage: { amount: 8.990, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.001, totalSince: 0.036 }, storage: { current: { amount: 0.761, percentage: 34.9 }, lastYear: { amount: 0.000, percentage: 0 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 0.071 }, storage: { current: { amount: 9.194, percentage: 38.3 }, lastYear: { amount: 2.647, percentage: 11 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 0.011 }, storage: { current: { amount: 0.422, percentage: 42.6 }, lastYear: { amount: 0.000, percentage: 0 } }, maxStorage: { amount: 0.990, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.001, totalSince: 0.007 }, storage: { current: { amount: 0.497, percentage: 57.8 }, lastYear: { amount: 0.113, percentage: 13.1 } }, maxStorage: { amount: 0.860, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.002, totalSince: 0.024 }, storage: { current: { amount: 0.157, percentage: 52.7 }, lastYear: { amount: 0.057, percentage: 19.1 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 0.001 }, storage: { current: { amount: 1.168, percentage: 69.1 }, lastYear: { amount: 0.002, percentage: 0.1 } }, maxStorage: { amount: 1.690, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 0.016 }, storage: { current: { amount: 1.060, percentage: 74.1 }, lastYear: { amount: 0.026, percentage: 1.8 } }, maxStorage: { amount: 1.430, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.363, percentage: 100 }, lastYear: { amount: 0.042, percentage: 11.6 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 0.021 }, storage: { current: { amount: 2.150, percentage: 76.8 }, lastYear: { amount: 0.489, percentage: 17.5 } }, maxStorage: { amount: 2.800, date: "2/4-5/6" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.003, totalSince: 0.085 }, storage: { current: { amount: 1.805, percentage: 90.3 }, lastYear: { amount: 1.092, percentage: 54.6 } }, maxStorage: { amount: 2.000, date: "14/2-30/6" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 3.679, percentage: 82.6 }, lastYear: { amount: 1.885, percentage: 42.3 } }, maxStorage: { amount: 4.454, date: "10/3-2/6" }, region: "Recharge/Other" },
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
  { year: "26/27", months: { October:2.293, November:0.28, December:0, January:0, February:0, March:0, April:0, May:0, June:0, July:0, "Aug-Sep":0 }, total:2.573 },
];

export const getReportDate = (): string => "06-NOV-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris eased to 36.3% (41.75 MCM), 26.9pp above last year\'s 9.4%.',
      el: 'Κούρης υποχώρησε στο 36.3% (41.75 ΕΚΜ), 26.9μ.π. πάνω από πέρυσι (9.4%).',
      ru: 'Курис снизился — 36.3% (41.75 МКМ), +26.9пп выше прошлогодних 9.4%.',
    },
    'Kalavasos': {
      en: 'Kalavasos eased to 21.3% (3.64 MCM), 10.9pp above last year\'s 10.4%.',
      el: 'Καλαβασός υποχώρησε στο 21.3% (3.64 ΕΚΜ), 10.9μ.π. πάνω από πέρυσι (10.4%).',
      ru: 'Калавасос снизился — 21.3% (3.64 МКМ), +10.9пп выше прошлогодних 10.4%.',
    },
    'Lefkara': {
      en: 'Lefkara held at 17.2% (2.38 MCM), 2.9pp above last year\'s 14.3%.',
      el: 'Λεύκαρα παρέμεινε στο 17.2% (2.38 ΕΚΜ), 2.9μ.π. πάνω από πέρυσι (14.3%).',
      ru: 'Лефкара без изменений — 17.2% (2.38 МКМ), +2.9пп выше прошлогодних 14.3%.',
    },
    'Dipotamos': {
      en: 'Dipotamos eased to 23.6% (3.65 MCM), 4.3pp above last year\'s 19.3%.',
      el: 'Διπόταμος υποχώρησε στο 23.6% (3.65 ΕΚΜ), 4.3μ.π. πάνω από πέρυσι (19.3%).',
      ru: 'Дипотамос снизился — 23.6% (3.65 МКМ), +4.3пп выше прошлогодних 19.3%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia eased to 46.3% (6.25 MCM), 41.4pp above last year\'s 4.9%.',
      el: 'Γερμασόγεια υποχώρησε στο 46.3% (6.25 ΕΚΜ), 41.4μ.π. πάνω από πέρυσι (4.9%).',
      ru: 'Гермасойя снизился — 46.3% (6.25 МКМ), +41.4пп выше прошлогодних 4.9%.',
    },
    'Arminou': {
      en: 'Arminou rose to 72.3% (3.11 MCM), 32.6pp above last year\'s 39.7%.',
      el: 'Αρμίνου ανέβηκε στο 72.3% (3.11 ΕΚΜ), 32.6μ.π. πάνω από πέρυσι (39.7%).',
      ru: 'Арминоу вырос — 72.3% (3.11 МКМ), +32.6пп выше прошлогодних 39.7%.',
    },
    'Polemidia': {
      en: 'Polemidia held at 43% (1.46 MCM), 19.1pp above last year\'s 23.9%.',
      el: 'Πολεμίδια παρέμεινε στο 43% (1.46 ΕΚΜ), 19.1μ.π. πάνω από πέρυσι (23.9%).',
      ru: 'Полемидия без изменений — 43% (1.46 МКМ), +19.1пп выше прошлогодних 23.9%.',
    },
    'Achna': {
      en: 'Achna held at 7.8% (0.53 MCM), 6.4pp above last year\'s 1.4%.',
      el: 'Αχνά παρέμεινε στο 7.8% (0.53 ΕΚΜ), 6.4μ.π. πάνω από πέρυσι (1.4%).',
      ru: 'Ахна без изменений — 7.8% (0.53 МКМ), +6.4пп выше прошлогодних 1.4%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos eased to 35.1% (18.37 MCM), 26.3pp above last year\'s 8.8%.',
      el: 'Ασπρόκρεμμος υποχώρησε στο 35.1% (18.37 ΕΚΜ), 26.3μ.π. πάνω από πέρυσι (8.8%).',
      ru: 'Аспрокреммос снизился — 35.1% (18.37 МКМ), +26.3пп выше прошлогодних 8.8%.',
    },
    'Kannaviou': {
      en: 'Kannaviou eased to 40.9% (7.02 MCM), 29.8pp above last year\'s 11.1%.',
      el: 'Καννάβιου υποχώρησε στο 40.9% (7.02 ΕΚΜ), 29.8μ.π. πάνω από πέρυσι (11.1%).',
      ru: 'Каннавиу снизился — 40.9% (7.02 МКМ), +29.8пп выше прошлогодних 11.1%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos rose to 34.9% (0.76 MCM), 34.9pp above last year\'s 0%.',
      el: 'Μαυροκόλυμπος ανέβηκε στο 34.9% (0.76 ΕΚΜ), 34.9μ.π. πάνω από πέρυσι (0%).',
      ru: 'Мавроколимпос вырос — 34.9% (0.76 МКМ), +34.9пп выше прошлогодних 0%.',
    },
    'Evretou': {
      en: 'Evretou eased to 38.3% (9.19 MCM), 27.3pp above last year\'s 11%.',
      el: 'Εύρετου υποχώρησε στο 38.3% (9.19 ΕΚΜ), 27.3μ.π. πάνω από πέρυσι (11%).',
      ru: 'Эвретоу снизился — 38.3% (9.19 МКМ), +27.3пп выше прошлогодних 11%.',
    },
    'Argaka': {
      en: 'Argaka held at 42.6% (0.42 MCM), 42.6pp above last year\'s 0%.',
      el: 'Αργάκα παρέμεινε στο 42.6% (0.42 ΕΚΜ), 42.6μ.π. πάνω από πέρυσι (0%).',
      ru: 'Аргака без изменений — 42.6% (0.42 МКМ), +42.6пп выше прошлогодних 0%.',
    },
    'Pomos': {
      en: 'Pomos rose to 57.8% (0.5 MCM), 44.7pp above last year\'s 13.1%.',
      el: 'Πόμος ανέβηκε στο 57.8% (0.5 ΕΚΜ), 44.7μ.π. πάνω από πέρυσι (13.1%).',
      ru: 'Помос вырос — 57.8% (0.5 МКМ), +44.7пп выше прошлогодних 13.1%.',
    },
    'Agia Marina': {
      en: 'Agia Marina rose to 52.7% (0.16 MCM), 33.6pp above last year\'s 19.1%.',
      el: 'Αγία Μαρίνα ανέβηκε στο 52.7% (0.16 ΕΚΜ), 33.6μ.π. πάνω από πέρυσι (19.1%).',
      ru: 'Агия вырос — 52.7% (0.16 МКМ), +33.6пп выше прошлогодних 19.1%.',
    },
    'Vyzakia': {
      en: 'Vyzakia eased to 69.1% (1.17 MCM), 69pp above last year\'s 0.1%.',
      el: 'Βυζακιά υποχώρησε στο 69.1% (1.17 ΕΚΜ), 69μ.π. πάνω από πέρυσι (0.1%).',
      ru: 'Визакия снизился — 69.1% (1.17 МКМ), +69пп выше прошлогодних 0.1%.',
    },
    'Xyliatos': {
      en: 'Xyliatos held at 74.1% (1.06 MCM), 72.3pp above last year\'s 1.8%.',
      el: 'Ξυλιάτος παρέμεινε στο 74.1% (1.06 ΕΚΜ), 72.3μ.π. πάνω από πέρυσι (1.8%).',
      ru: 'Ксилиатос без изменений — 74.1% (1.06 МКМ), +72.3пп выше прошлогодних 1.8%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 100% (0.36 MCM), still the only dam overflowing. Up from 11.6% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 100% (0.36 ΕΚΜ), το μόνο φράγμα που υπερχειλίζει. Από 11.6% πέρυσι.',
      ru: 'Калопанайотис без изменений на 100% (0.36 МКМ), единственная переполненная дамба. Год назад 11.6%.',
    },
    'Tamassos': {
      en: 'Tamassos eased to 76.8% (2.15 MCM), 59.3pp above last year\'s 17.5%.',
      el: 'Ταμασός υποχώρησε στο 76.8% (2.15 ΕΚΜ), 59.3μ.π. πάνω από πέρυσι (17.5%).',
      ru: 'Тамассос снизился — 76.8% (2.15 МКМ), +59.3пп выше прошлогодних 17.5%.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta rose to 90.3% (1.8 MCM), 35.7pp above last year\'s 54.6%.',
      el: 'Κλήρου-Μαλούντα ανέβηκε στο 90.3% (1.8 ΕΚΜ), 35.7μ.π. πάνω από πέρυσι (54.6%).',
      ru: 'Клиру-Малунта вырос — 90.3% (1.8 МКМ), +35.7пп выше прошлогодних 54.6%.',
    },
    'Solea': {
      en: 'Solea held at 82.6% (3.68 MCM), 40.3pp above last year\'s 42.3%.',
      el: 'Σολέα παρέμεινε στο 82.6% (3.68 ΕΚΜ), 40.3μ.π. πάνω από πέρυσι (42.3%).',
      ru: 'Солеа без изменений — 82.6% (3.68 МКМ), +40.3пп выше прошлогодних 42.3%.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (30 Οκτωβρίου — 6 Νοεμβρίου 2026)

Δελτίο Παρασκευής: συνολική αποθήκευση **35.0%** (101.79 ΕΚΜ) — μείωση 0.06 ΕΚΜ από χθες και 0.17 ΕΚΜ από τις 30 Οκτωβρίου (101.96 ΕΚΜ), καθώς το οροπέδιο μετά τις βροχές γίνεται αργή υποχώρηση. Η εισροή των τελευταίων 24 ωρών ήταν 0.05 ΕΚΜ και η εισροή σεζόν φτάνει τα 2.57 ΕΚΜ. Το προβάδισμα έναντι πέρυσι παραμένει **24.6 μονάδες**.

**Αξιοσημείωτα (έναντι 30 Οκτωβρίου):**
- [Αρμίνου](/el/dam/arminou/) **72.3%** (+2.6μ.π. την εβδομάδα, 3.11 ΕΚΜ) — συνεχίζει να ανεβαίνει
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **34.9%** (+4.3μ.π. την εβδομάδα, 0.76 ΕΚΜ) — η μεγαλύτερη άνοδος
- [Κούρης](/el/dam/kouris/) **36.3%** (41.75 ΕΚΜ) — εισροή 0.02 ΕΚΜ, ελαφριά υποχώρηση
- [Ασπρόκρεμμος](/el/dam/asprokremmos/) **35.1%** (18.37 ΕΚΜ) — σταθερός
- [Αχνά](/el/dam/achna/) **7.8%** — μηδενική εισροή
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — το μόνο φράγμα που υπερχειλίζει

**Στα μέσα:**
- [Αλλάζει το σκηνικό του καιρού στην Κύπρο – Έρχονται βροχές και καταιγίδες](https://dialogos.com.cy/allazei-to-skiniko-toy-kairoy-stin-kypro-erchontai-vroches-kai-kataigides-pote-tha-epireastei-to-nisi/) — Dialogos
- [Φράγματα: Από το 10,7% στο 35,1% η πληρότητα, πόσο νερό έφεραν οι τελευταίες βροχές](https://www.alphanews.live/cyprus/fragmata-apo-to-107-sto-351-i-plirotita-poso-nero-eferan-oi-teleftaies-vroches/) — AlphaNews
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (30 октября — 6 ноября 2026)

Бюллетень пятницы: общий запас **35.0%** (101.79 МКМ) — на 0.06 МКМ меньше, чем вчера, и на 0.17 МКМ меньше, чем 30 октября (101.96 МКМ): плато после дождей сменяется медленным снижением. Приток за сутки — 0.05 МКМ, за сезон — 2.57 МКМ. Отрыв от прошлого года — **24.6 пункта**.

**Основные изменения (за период с 30 октября):**
- [Арминоу](/ru/dam/arminou/) **72.3%** (+2.6пп за неделю, 3.11 МКМ) — продолжает расти
- [Мавроколимбос](/ru/dam/mavrokolympos/) **34.9%** (+4.3пп за неделю, 0.76 МКМ) — наибольший рост
- [Курис](/ru/dam/kouris/) **36.3%** (41.75 МКМ) — приток 0.02 МКМ, слегка снижается
- [Аспрокреммос](/ru/dam/asprokremmos/) **35.1%** (18.37 МКМ) — стабилен
- [Ахна](/ru/dam/achna/) **7.8%** — притока нет
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — единственная переполненная дамба
`;
  }
  return `
### Recent Changes (October 30 — November 6, 2026)

Friday's bulletin: total storage **35.0%** (101.79 MCM) — down 0.06 MCM from yesterday and 0.17 MCM from October 30 (101.96 MCM), as the post-rain plateau turns into a slow drawdown. Inflow over the last 24 hours was 0.05 MCM, bringing the season total to 2.57 MCM. The gap over last year stays at **24.6 points**.

**Notable movements (vs. October 30):**
- [Arminou](/dam/arminou/) **72.3%** (+2.6pp on the week, 3.11 MCM) — still the steady riser
- [Mavrokolympos](/dam/mavrokolympos/) **34.9%** (+4.3pp on the week, 0.76 MCM) — the biggest rise
- [Kouris](/dam/kouris/) **36.3%** (41.75 MCM) — 0.02 MCM of inflow, easing slightly
- [Asprokremmos](/dam/asprokremmos/) **35.1%** (18.37 MCM) — holding
- [Achna](/dam/achna/) **7.8%** — zero inflow
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing

**In the media:**
- [Mazotos residents reject compensation measures over desalination plant](https://cyprus-mail.com/2026/11/03/mazotos-residents-reject-compensation-measures-over-desalination-plant) — Cyprus Mail
- [Agriculture Ministry Budget Rises to €532m, With 43% Allocated to Water](https://en.politis.com.cy/news/environment/1061681/agriculture-ministry-budget-rises-to-eur532m-with-43-allocated-to-water) — Politis
`;
};

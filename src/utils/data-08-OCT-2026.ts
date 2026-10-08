import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.015, totalSince: 0.144 }, storage: { current: { amount: 42.467, percentage: 36.9 }, lastYear: { amount: 12.581, percentage: 10.9 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.005, totalSince: 0.008 }, storage: { current: { amount: 3.724, percentage: 21.8 }, lastYear: { amount: 2.110, percentage: 12.3 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.002, totalSince: 0.005 }, storage: { current: { amount: 2.397, percentage: 17.3 }, lastYear: { amount: 2.031, percentage: 14.7 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 0.011 }, storage: { current: { amount: 3.890, percentage: 25.1 }, lastYear: { amount: 3.418, percentage: 22.1 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 0.017 }, storage: { current: { amount: 6.525, percentage: 48.3 }, lastYear: { amount: 0.967, percentage: 7.2 } }, maxStorage: { amount: 8.140, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.024, totalSince: 0.111 }, storage: { current: { amount: 2.648, percentage: 61.6 }, lastYear: { amount: 1.830, percentage: 42.6 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 0.007 }, storage: { current: { amount: 1.465, percentage: 43.1 }, lastYear: { amount: 0.860, percentage: 25.3 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.562, percentage: 8.3 }, lastYear: { amount: 0.120, percentage: 1.8 } }, maxStorage: { amount: 0.380, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.005, totalSince: 0.019 }, storage: { current: { amount: 18.723, percentage: 35.7 }, lastYear: { amount: 5.350, percentage: 10.2 } }, maxStorage: { amount: 22.011, date: "29/5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 0.061 }, storage: { current: { amount: 7.271, percentage: 42.4 }, lastYear: { amount: 2.206, percentage: 12.8 } }, maxStorage: { amount: 8.990, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.001, totalSince: 0.008 }, storage: { current: { amount: 0.647, percentage: 29.7 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 0.021 }, storage: { current: { amount: 9.318, percentage: 38.8 }, lastYear: { amount: 2.975, percentage: 12.4 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.431, percentage: 43.5 }, lastYear: { amount: 0.003, percentage: 0.3 } }, maxStorage: { amount: 0.990, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.004 }, storage: { current: { amount: 0.520, percentage: 60.5 }, lastYear: { amount: 0.118, percentage: 13.7 } }, maxStorage: { amount: 0.860, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.007 }, storage: { current: { amount: 0.142, percentage: 47.7 }, lastYear: { amount: 0.055, percentage: 18.5 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 1.217, percentage: 72.0 }, lastYear: { amount: 0.006, percentage: 0.4 } }, maxStorage: { amount: 1.690, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.002, totalSince: 0.002 }, storage: { current: { amount: 1.076, percentage: 75.2 }, lastYear: { amount: 0.036, percentage: 2.5 } }, maxStorage: { amount: 1.430, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.037, percentage: 10.2 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 2.233, percentage: 79.8 }, lastYear: { amount: 0.535, percentage: 19.1 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 1.752, percentage: 87.6 }, lastYear: { amount: 1.143, percentage: 57.2 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 3.798, percentage: 85.3 }, lastYear: { amount: 1.987, percentage: 44.6 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

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
  { year: "26/27", months: { October:0.425, November:0, December:0, January:0, February:0, March:0, April:0, May:0, June:0, July:0, "Aug-Sep":0 }, total:0.425 },
];

export const getReportDate = (): string => "08-OCT-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris eased to 36.9% (42.5 MCM), barely moved, still 26.0pp above last year\'s 10.9%.',
      el: 'Ο Κούρης υποχώρησε στο 36.9% (42.5 ΕΚΜ), 26.0μ.π. πάνω από πέρυσι (10.9%).',
      ru: 'Курис снизился — 36.9% (42.5 МКМ), +26.0пп выше прошлогодних 10.9%.',
    },
    'Kalavasos': {
      en: 'Kalavasos steady at 21.8% (3.72 MCM), still 9.5pp above last year\'s 12.3%.',
      el: 'Ο Καλαβασός σταθερός στο 21.8% (3.72 ΕΚΜ), 9.5μ.π. πάνω από πέρυσι (12.3%).',
      ru: 'Калавасос стабильно — 21.8% (3.72 МКМ), выше прошлогодних 12.3%.',
    },
    'Lefkara': {
      en: 'Lefkara unchanged at 17.3% (2.40 MCM), 2.6pp above last year\'s 14.7%.',
      el: 'Η Λεύκαρα αμετάβλητη στο 17.3% (2.40 ΕΚΜ), πάνω από πέρυσι (14.7%).',
      ru: 'Лефкара без изменений — 17.3% (2.40 МКМ), выше прошлогодних 14.7%.',
    },
    'Dipotamos': {
      en: 'Dipotamos down slightly to 25.1% (3.89 MCM), 3.0pp above last year\'s 22.1%.',
      el: 'Ο Διπόταμος ελαφρώς χαμηλότερος στο 25.1% (3.89 ΕΚΜ), 3.0μ.π. πάνω από πέρυσι (22.1%).',
      ru: 'Дипотамос немного снизился — 25.1% (3.89 МКМ), +3.0пп выше прошлогодних 22.1%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia eased to 48.3% (6.53 MCM), still 41.1pp above last year\'s 7.2%.',
      el: 'Η Γερμασόγεια υποχώρησε στο 48.3% (6.53 ΕΚΜ). 41.1μ.π. πάνω από πέρυσι (7.2%).',
      ru: 'Гермасойя снизилась — 48.3% (6.53 МКМ). +41.1пп выше прошлогодних 7.2%.',
    },
    'Arminou': {
      en: 'Arminou rose to 61.6% (2.65 MCM, +0.6pp over two days), still the only Southern Conveyor dam rising, 19.0pp above last year\'s 42.6%.',
      el: 'Ο Αρμίνου ανέβηκε στο 61.6% (2.65 ΕΚΜ, +0.6μ.π. σε δύο μέρες), το μόνο φράγμα του Νότιου Αγωγού που ανεβαίνει, 19.0μ.π. πάνω από πέρυσι (42.6%).',
      ru: 'Арминоу вырос — 61.6% (2.65 МКМ, +0.6пп за два дня), по-прежнему единственная растущая дамба Южного водовода, +19.0пп выше прошлогодних 42.6%.',
    },
    'Polemidia': {
      en: 'Polemidia steady at 43.1% (1.47 MCM), still 17.8pp above last year\'s 25.3%.',
      el: 'Η Πολεμίδια σταθερή στο 43.1% (1.47 ΕΚΜ), 17.8μ.π. πάνω από πέρυσι (25.3%).',
      ru: 'Полемидия стабильна — 43.1% (1.47 МКМ), +17.8пп выше прошлогодних 25.3%.',
    },
    'Achna': {
      en: 'Achna unchanged at 8.3% (0.56 MCM) for a second straight bulletin, still zero recorded inflow all season.',
      el: 'Η Αχνά αμετάβλητη στο 8.3% (0.56 ΕΚΜ) για δεύτερο συνεχόμενο δελτίο, παρά τη μηδενική εισροή.',
      ru: 'Ахна без изменений — 8.3% (0.56 МКМ) второй бюллетень подряд, приток по-прежнему нулевой.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos eased to 35.7% (18.7 MCM), 25.5pp above last year\'s 10.2%.',
      el: 'Ο Ασπρόκρεμμος υποχώρησε στο 35.7% (18.7 ΕΚΜ), 25.5μ.π. πάνω από πέρυσι (10.2%).',
      ru: 'Аспрокреммос снизился — 35.7% (18.7 МКМ), +25.5пп выше прошлогодних 10.2%.',
    },
    'Kannaviou': {
      en: 'Kannaviou steady at 42.4% (7.27 MCM), still 29.6pp above last year\'s 12.8%.',
      el: 'Ο Καννάβιου σταθερός στο 42.4% (7.27 ΕΚΜ), 29.6μ.π. πάνω από πέρυσι (12.8%).',
      ru: 'Каннавиу стабильно — 42.4% (7.27 МКМ), +29.6пп выше прошлогодних 12.8%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos edged up to 29.7% (0.65 MCM). Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος ανέβηκε ελαφρώς στο 29.7% (0.65 ΕΚΜ). Από 0% πέρυσι.',
      ru: 'Мавроколимпос немного вырос — 29.7% (0.65 МКМ). Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou unchanged at 38.8% (9.32 MCM), still 26.4pp above last year\'s 12.4%.',
      el: 'Ο Εύρετου αμετάβλητος στο 38.8% (9.32 ΕΚΜ). 26.4μ.π. πάνω από πέρυσι (12.4%).',
      ru: 'Эвретоу без изменений — 38.8% (9.32 МКМ). +26.4пп выше прошлогодних 12.4%.',
    },
    'Argaka': {
      en: 'Argaka unchanged at 43.5% (0.43 MCM) for a second straight bulletin. Up from 0.3% last year.',
      el: 'Η Αργάκα αμετάβλητη στο 43.5% (0.43 ΕΚΜ) για δεύτερο συνεχόμενο δελτίο. Από 0.3% πέρυσι.',
      ru: 'Аргака без изменений — 43.5% (0.43 МКМ) второй бюллетень подряд. Год назад 0.3%.',
    },
    'Pomos': {
      en: 'Pomos unchanged at 60.5% (0.52 MCM). Up from 13.7% last year.',
      el: 'Ο Πόμος αμετάβλητος στο 60.5% (0.52 ΕΚΜ). Από 13.7% πέρυσι.',
      ru: 'Помос без изменений — 60.5% (0.52 МКМ). Год назад 13.7%.',
    },
    'Agia Marina': {
      en: 'Agia Marina steady at 47.7% (0.14 MCM). Up from 18.5% last year.',
      el: 'Η Αγία Μαρίνα σταθερή στο 47.7% (0.14 ΕΚΜ). Από 18.5% πέρυσι.',
      ru: 'Агия Марина стабильна — 47.7% (0.14 МКМ). Год назад 18.5%.',
    },
    'Vyzakia': {
      en: 'Vyzakia eased to 72.0% (1.22 MCM). Was 0.4% last year.',
      el: 'Τα Βυζακιά υποχώρησαν στο 72.0% (1.22 ΕΚΜ). Από 0.4% πέρυσι.',
      ru: 'Визакия снизилась — 72.0% (1.22 МКМ). Год назад 0.4%.',
    },
    'Xyliatos': {
      en: 'Xyliatos eased to 75.2% (1.08 MCM). Was 2.5% last year.',
      el: 'Ο Ξυλιάτος υποχώρησε στο 75.2% (1.08 ΕΚΜ). Από 2.5% πέρυσι.',
      ru: 'Ксилиатос снизился — 75.2% (1.08 МКМ). Год назад 2.5%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 100% (0.36 MCM), still the only dam overflowing. Up from 10.2% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 100% (0.36 ΕΚΜ), το μόνο φράγμα που υπερχειλίζει. Από 10.2% πέρυσι.',
      ru: 'Калопанайотис без изменений на 100% (0.36 МКМ), единственная переполненная дамба. Год назад 10.2%.',
    },
    'Tamassos': {
      en: 'Tamassos down slightly to 79.8% (2.23 MCM). Was 19.1% last year — a 4.2× year-over-year recovery.',
      el: 'Ο Ταμασός ελαφρώς χαμηλότερος στο 79.8% (2.23 ΕΚΜ). Από 19.1% πέρυσι — 4.2× ανάκαμψη.',
      ru: 'Тамассос немного снизился — 79.8% (2.23 МКМ). Год назад 19.1% — восстановление в 4.2×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta down slightly to 87.6% (1.75 MCM). Up from 57.2% one year ago.',
      el: 'Η Κλήρου-Μαλούντα ελαφρώς χαμηλότερη στο 87.6% (1.75 ΕΚΜ). Αύξηση από 57.2% πέρυσι.',
      ru: 'Клиру-Малунта немного снизилась — 87.6% (1.75 МКМ). Рост с 57.2% год назад.',
    },
    'Solea': {
      en: 'Solea unchanged at 85.3% (3.80 MCM). Up from 44.6% last year — a 1.91× year-over-year improvement.',
      el: 'Η Σολέα αμετάβλητη στο 85.3% (3.80 ΕΚΜ). Αύξηση από 44.6% πέρυσι — 1.91× βελτίωση.',
      ru: 'Солеа без изменений — 85.3% (3.80 МКМ). Рост с 44.6% год назад — улучшение в 1.91×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (6 — 8 Οκτωβρίου 2026)

Πέμπτη, δύο μέρες μετά την Τρίτη: συνολική αποθήκευση **35.55%** (103.4 ΕΚΜ) — κάτω από το 35.64% (103.6 ΕΚΜ) της Τρίτης, με τον ίδιο αργό ρυθμό απόσυρσης να συνεχίζεται. Ο [Αρμίνου](/el/dam/arminou/) επιτάχυνε την άνοδό του στο 61.6% (+0.6μ.π. σε δύο μέρες), παραμένοντας το μόνο φράγμα του Νότιου Αγωγού που ανεβαίνει. Η [Αχνά](/el/dam/achna/) στο 8.3% και η [Αργάκα](/el/dam/argaka/) στο 43.5% παρέμειναν αμετάβλητες για δεύτερο συνεχόμενο δελτίο. Ο [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) παραμένει το μόνο φράγμα που υπερχειλίζει, αμετάβλητος στο 100%. Το χάσμα με πέρυσι παραμένει στις **23.6 μονάδες**. Εισροή σεζόν: 0.43 ΕΚΜ μέχρι στιγμής. Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στο μηδέν.

**Αξιοσημείωτα (έναντι 6 Οκτωβρίου):**
- [Αρμίνου](/el/dam/arminou/) **61.6%** (+0.6μ.π.) — η άνοδος επιταχύνει, το μόνο φράγμα του Νότιου Αγωγού που ανεβαίνει
- [Αχνά](/el/dam/achna/) **8.3%** (αμετάβλητη) — το πλατό κρατά για δεύτερο δελτίο
- [Αργάκα](/el/dam/argaka/) **43.5%** (αμετάβλητη) — το πλατό κρατά για δεύτερο δελτίο
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — αμετάβλητος, το μόνο φράγμα που υπερχειλίζει
- [Κούρης](/el/dam/kouris/) **36.9%** (-0.1μ.π.) — σχεδόν αμετάβλητος

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (6 — 8 октября 2026)

Четверг, спустя два дня после вторника: общий запас **35.55%** (103.4 МКМ) — ниже 35.64% (103.6 МКМ) во вторник, тот же медленный темп снижения продолжается. [Арминоу](/ru/dam/arminou/) ускорил рост до 61.6% (+0.6пп за два дня), оставаясь единственной растущей дамбой Южного водовода. [Ахна](/ru/dam/achna/) на 8.3% и [Аргака](/ru/dam/argaka/) на 43.5% остались без изменений второй бюллетень подряд. [Калопанайотис](/ru/dam/kalopanagiotis/) остаётся единственной переполненной дамбой, без изменений на 100%. Разрыв с прошлым годом остаётся на уровне **23.6 пункта**. Приток за сезон: 0.43 МКМ пока. Перекачка [Арминоу](/ru/dam/arminou/)→[Куриса](/ru/dam/kouris/) остаётся на нуле.

**Основные изменения (за период с 6 октября):**
- [Арминоу](/ru/dam/arminou/) **61.6%** (+0.6пп) — рост ускоряется, единственная растущая дамба Южного водовода
- [Ахна](/ru/dam/achna/) **8.3%** (без изменений) — плато держится второй бюллетень подряд
- [Аргака](/ru/dam/argaka/) **43.5%** (без изменений) — плато держится второй бюллетень подряд
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — без изменений, единственная переполненная дамба
- [Курис](/ru/dam/kouris/) **36.9%** (-0.1пп) — почти без изменений

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (October 6 — 8, 2026)

Thursday's bulletin, two days since Tuesday: total storage **35.55%** (103.4 MCM) — down from Tuesday's 35.64% (103.6 MCM), the same slow drawdown pace continuing. [Arminou](/dam/arminou/) accelerated its climb to 61.6% (+0.6pp over two days), remaining the only Southern Conveyor dam still rising. [Achna](/dam/achna/) at 8.3% and [Argaka](/dam/argaka/) at 43.5% both held their plateau for a second straight bulletin. [Kalopanagiotis](/dam/kalopanagiotis/) remains the only dam overflowing, unchanged at 100%. The gap over last year holds at **23.6 points**. Season inflow so far: 0.43 MCM. The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at zero.

**Notable movements (vs. October 6):**
- [Arminou](/dam/arminou/) **61.6%** (+0.6pp) — rise accelerates, only Southern Conveyor dam still climbing
- [Achna](/dam/achna/) **8.3%** (unchanged) — plateau holds for a second bulletin
- [Argaka](/dam/argaka/) **43.5%** (unchanged) — plateau holds for a second bulletin
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — unchanged, still the only dam overflowing
- [Kouris](/dam/kouris/) **36.9%** (-0.1pp) — barely moved

🔗 https://fragmata.info
`;
};

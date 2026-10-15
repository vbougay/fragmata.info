import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.036, totalSince: 0.202 }, storage: { current: { amount: 42.278, percentage: 36.8 }, lastYear: { amount: 12.356, percentage: 10.7 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 0.008 }, storage: { current: { amount: 3.707, percentage: 21.7 }, lastYear: { amount: 2.059, percentage: 12.0 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 0.005 }, storage: { current: { amount: 2.395, percentage: 17.3 }, lastYear: { amount: 2.026, percentage: 14.6 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 0.011 }, storage: { current: { amount: 3.850, percentage: 24.8 }, lastYear: { amount: 3.369, percentage: 21.7 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 0.017 }, storage: { current: { amount: 6.464, percentage: 47.9 }, lastYear: { amount: 0.927, percentage: 6.9 } }, maxStorage: { amount: 8.140, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.037, totalSince: 0.158 }, storage: { current: { amount: 2.679, percentage: 62.3 }, lastYear: { amount: 1.808, percentage: 42.0 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 0.007 }, storage: { current: { amount: 1.462, percentage: 43.0 }, lastYear: { amount: 0.859, percentage: 25.3 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.548, percentage: 8.1 }, lastYear: { amount: 0.103, percentage: 1.5 } }, maxStorage: { amount: 0.380, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 0.019 }, storage: { current: { amount: 18.604, percentage: 35.5 }, lastYear: { amount: 5.241, percentage: 10.0 } }, maxStorage: { amount: 22.011, date: "29/5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 0.061 }, storage: { current: { amount: 7.205, percentage: 42.0 }, lastYear: { amount: 2.170, percentage: 12.6 } }, maxStorage: { amount: 8.990, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.004, totalSince: 0.012 }, storage: { current: { amount: 0.650, percentage: 29.8 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 0.021 }, storage: { current: { amount: 9.285, percentage: 38.7 }, lastYear: { amount: 2.950, percentage: 12.3 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.003, totalSince: 0.003 }, storage: { current: { amount: 0.433, percentage: 43.7 }, lastYear: { amount: 0.003, percentage: 0.3 } }, maxStorage: { amount: 0.990, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.004 }, storage: { current: { amount: 0.512, percentage: 59.5 }, lastYear: { amount: 0.116, percentage: 13.5 } }, maxStorage: { amount: 0.860, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.009 }, storage: { current: { amount: 0.143, percentage: 48.0 }, lastYear: { amount: 0.055, percentage: 18.5 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 1.205, percentage: 71.3 }, lastYear: { amount: 0.005, percentage: 0.3 } }, maxStorage: { amount: 1.690, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 0.002 }, storage: { current: { amount: 1.069, percentage: 74.8 }, lastYear: { amount: 0.033, percentage: 2.3 } }, maxStorage: { amount: 1.430, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.038, percentage: 10.5 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 2.208, percentage: 78.9 }, lastYear: { amount: 0.528, percentage: 18.9 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 1.744, percentage: 87.2 }, lastYear: { amount: 1.129, percentage: 56.5 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 3.772, percentage: 84.7 }, lastYear: { amount: 1.971, percentage: 44.3 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

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
  { year: "26/27", months: { October:0.539, November:0, December:0, January:0, February:0, March:0, April:0, May:0, June:0, July:0, "Aug-Sep":0 }, total:0.539 },
];

export const getReportDate = (): string => "12-OCT-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris eased to 36.8% (42.3 MCM), barely moved, still 26.1pp above last year\'s 10.7%.',
      el: 'Ο Κούρης υποχώρησε στο 36.8% (42.3 ΕΚΜ), 26.1μ.π. πάνω από πέρυσι (10.7%).',
      ru: 'Курис снизился — 36.8% (42.3 МКМ), +26.1пп выше прошлогодних 10.7%.',
    },
    'Kalavasos': {
      en: 'Kalavasos eased to 21.7% (3.71 MCM), still 9.7pp above last year\'s 12.0%.',
      el: 'Ο Καλαβασός υποχώρησε στο 21.7% (3.71 ΕΚΜ), 9.7μ.π. πάνω από πέρυσι (12.0%).',
      ru: 'Калавасос снизился — 21.7% (3.71 МКМ), выше прошлогодних 12.0%.',
    },
    'Lefkara': {
      en: 'Lefkara unchanged at 17.3% (2.40 MCM), 2.7pp above last year\'s 14.6%.',
      el: 'Η Λεύκαρα αμετάβλητη στο 17.3% (2.40 ΕΚΜ), πάνω από πέρυσι (14.6%).',
      ru: 'Лефкара без изменений — 17.3% (2.40 МКМ), выше прошлогодних 14.6%.',
    },
    'Dipotamos': {
      en: 'Dipotamos down slightly to 24.8% (3.85 MCM), 3.1pp above last year\'s 21.7%.',
      el: 'Ο Διπόταμος ελαφρώς χαμηλότερος στο 24.8% (3.85 ΕΚΜ), 3.1μ.π. πάνω από πέρυσι (21.7%).',
      ru: 'Дипотамос немного снизился — 24.8% (3.85 МКМ), +3.1пп выше прошлогодних 21.7%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia eased to 47.9% (6.46 MCM), still 41.0pp above last year\'s 6.9%.',
      el: 'Η Γερμασόγεια υποχώρησε στο 47.9% (6.46 ΕΚΜ). 41.0μ.π. πάνω από πέρυσι (6.9%).',
      ru: 'Гермасойя снизилась — 47.9% (6.46 МКМ). +41.0пп выше прошлогодних 6.9%.',
    },
    'Arminou': {
      en: 'Arminou rose to 62.3% (2.68 MCM, +0.7pp over four days), still the only Southern Conveyor dam rising, 20.3pp above last year\'s 42.0%.',
      el: 'Ο Αρμίνου ανέβηκε στο 62.3% (2.68 ΕΚΜ, +0.7μ.π. σε τέσσερις μέρες), το μόνο φράγμα του Νότιου Αγωγού που ανεβαίνει, 20.3μ.π. πάνω από πέρυσι (42.0%).',
      ru: 'Арминоу вырос — 62.3% (2.68 МКМ, +0.7пп за четыре дня), по-прежнему единственная растущая дамба Южного водовода, +20.3пп выше прошлогодних 42.0%.',
    },
    'Polemidia': {
      en: 'Polemidia eased to 43.0% (1.46 MCM), still 17.7pp above last year\'s 25.3%.',
      el: 'Η Πολεμίδια υποχώρησε στο 43.0% (1.46 ΕΚΜ), 17.7μ.π. πάνω από πέρυσι (25.3%).',
      ru: 'Полемидия снизилась — 43.0% (1.46 МКМ), +17.7пп выше прошлогодних 25.3%.',
    },
    'Achna': {
      en: 'Achna slipped to 8.1% (0.55 MCM), breaking its months-long unexplained rise streak — still 6.6pp above last year\'s 1.5%.',
      el: 'Η Αχνά υποχώρησε στο 8.1% (0.55 ΕΚΜ), σπάζοντας το πολύμηνο σερί ανόδου — πάνω από πέρυσι (1.5%).',
      ru: 'Ахна снизилась — 8.1% (0.55 МКМ), прервав многомесячную серию роста — выше прошлогодних 1.5%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos eased to 35.5% (18.6 MCM), 25.5pp above last year\'s 10.0%.',
      el: 'Ο Ασπρόκρεμμος υποχώρησε στο 35.5% (18.6 ΕΚΜ), 25.5μ.π. πάνω από πέρυσι (10.0%).',
      ru: 'Аспрокреммос снизился — 35.5% (18.6 МКМ), +25.5пп выше прошлогодних 10.0%.',
    },
    'Kannaviou': {
      en: 'Kannaviou eased to 42.0% (7.21 MCM), still 29.4pp above last year\'s 12.6%.',
      el: 'Ο Καννάβιου υποχώρησε στο 42.0% (7.21 ΕΚΜ), 29.4μ.π. πάνω από πέρυσι (12.6%).',
      ru: 'Каннавиу снизился — 42.0% (7.21 МКМ), +29.4пп выше прошлогодних 12.6%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos edged up to 29.8% (0.65 MCM). Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος ανέβηκε ελαφρώς στο 29.8% (0.65 ΕΚΜ). Από 0% πέρυσι.',
      ru: 'Мавроколимпос немного вырос — 29.8% (0.65 МКМ). Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou eased to 38.7% (9.29 MCM), still 26.4pp above last year\'s 12.3%.',
      el: 'Ο Εύρετου υποχώρησε στο 38.7% (9.29 ΕΚΜ). 26.4μ.π. πάνω από πέρυσι (12.3%).',
      ru: 'Эвретоу снизился — 38.7% (9.29 МКМ). +26.4пп выше прошлогодних 12.3%.',
    },
    'Argaka': {
      en: 'Argaka edged up to 43.7% (0.43 MCM), ending its two-bulletin plateau. Up from 0.3% last year.',
      el: 'Η Αργάκα ανέβηκε ελαφρώς στο 43.7% (0.43 ΕΚΜ), τερματίζοντας το πλατό δύο δελτίων. Από 0.3% πέρυσι.',
      ru: 'Аргака немного выросла — 43.7% (0.43 МКМ), завершив плато двух бюллетеней. Год назад 0.3%.',
    },
    'Pomos': {
      en: 'Pomos down to 59.5% (0.51 MCM), its steepest single-bulletin drop in weeks. Up from 13.5% last year.',
      el: 'Ο Πόμος υποχώρησε στο 59.5% (0.51 ΕΚΜ), η μεγαλύτερη πτώση εβδομάδων. Από 13.5% πέρυσι.',
      ru: 'Помос снизился — 59.5% (0.51 МКМ), самое резкое падение за недели. Год назад 13.5%.',
    },
    'Agia Marina': {
      en: 'Agia Marina edged up to 48.0% (0.14 MCM). Up from 18.5% last year.',
      el: 'Η Αγία Μαρίνα ανέβηκε ελαφρώς στο 48.0% (0.14 ΕΚΜ). Από 18.5% πέρυσι.',
      ru: 'Агия Марина немного выросла — 48.0% (0.14 МКМ). Год назад 18.5%.',
    },
    'Vyzakia': {
      en: 'Vyzakia eased to 71.3% (1.21 MCM). Was 0.3% last year.',
      el: 'Τα Βυζακιά υποχώρησαν στο 71.3% (1.21 ΕΚΜ). Από 0.3% πέρυσι.',
      ru: 'Визакия снизилась — 71.3% (1.21 МКМ). Год назад 0.3%.',
    },
    'Xyliatos': {
      en: 'Xyliatos eased to 74.8% (1.07 MCM). Was 2.3% last year.',
      el: 'Ο Ξυλιάτος υποχώρησε στο 74.8% (1.07 ΕΚΜ). Από 2.3% πέρυσι.',
      ru: 'Ксилиатос снизился — 74.8% (1.07 МКМ). Год назад 2.3%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 100% (0.36 MCM), still the only dam overflowing. Up from 10.5% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 100% (0.36 ΕΚΜ), το μόνο φράγμα που υπερχειλίζει. Από 10.5% πέρυσι.',
      ru: 'Калопанайотис без изменений на 100% (0.36 МКМ), единственная переполненная дамба. Год назад 10.5%.',
    },
    'Tamassos': {
      en: 'Tamassos down slightly to 78.9% (2.21 MCM). Was 18.9% last year — a 4.2× year-over-year recovery.',
      el: 'Ο Ταμασός ελαφρώς χαμηλότερος στο 78.9% (2.21 ΕΚΜ). Από 18.9% πέρυσι — 4.2× ανάκαμψη.',
      ru: 'Тамассос немного снизился — 78.9% (2.21 МКМ). Год назад 18.9% — восстановление в 4.2×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta down slightly to 87.2% (1.74 MCM). Up from 56.5% one year ago.',
      el: 'Η Κλήρου-Μαλούντα ελαφρώς χαμηλότερη στο 87.2% (1.74 ΕΚΜ). Αύξηση από 56.5% πέρυσι.',
      ru: 'Клиру-Малунта немного снизилась — 87.2% (1.74 МКМ). Рост с 56.5% год назад.',
    },
    'Solea': {
      en: 'Solea down slightly to 84.7% (3.77 MCM). Up from 44.3% last year — a 1.91× year-over-year improvement.',
      el: 'Η Σολέα ελαφρώς χαμηλότερη στο 84.7% (3.77 ΕΚΜ). Αύξηση από 44.3% πέρυσι — 1.91× βελτίωση.',
      ru: 'Солеа немного снизилась — 84.7% (3.77 МКМ). Рост с 44.3% год назад — улучшение в 1.91×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (8 — 12 Οκτωβρίου 2026)

Δευτέρα, κάλυψη του Σαββατοκύριακου μετά το δελτίο της Πέμπτης: συνολική αποθήκευση **35.4%** (102.9 ΕΚΜ) — κάτω από το 35.55% (103.4 ΕΚΜ) της Πέμπτης, με τον ίδιο αργό ρυθμό απόσυρσης να συνεχίζεται. Ο [Αρμίνου](/el/dam/arminou/) συνέχισε την άνοδό του στο 62.3% (+0.7μ.π. σε τέσσερις μέρες), παραμένοντας το μόνο φράγμα του Νότιου Αγωγού που ανεβαίνει. Η [Αχνά](/el/dam/achna/) έσπασε το πολύμηνο σερί ανεξήγητης ανόδου, υποχωρώντας στο 8.1% (-0.2μ.π.). Ο [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) παραμένει το μόνο φράγμα που υπερχειλίζει, αμετάβλητος στο 100%. Το χάσμα με πέρυσι παραμένει στις **23.6 μονάδες**. Εισροή σεζόν: 0.54 ΕΚΜ μέχρι στιγμής. Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στο μηδέν.

**Αξιοσημείωτα (έναντι 8 Οκτωβρίου):**
- [Αρμίνου](/el/dam/arminou/) **62.3%** (+0.7μ.π.) — συνεχίζει να ανεβαίνει, το μόνο φράγμα του Νότιου Αγωγού που ανεβαίνει
- [Αχνά](/el/dam/achna/) **8.1%** (-0.2μ.π.) — σπάει το πολύμηνο σερί ανόδου, πρώτη πτώση εδώ και εβδομάδες
- [Πόμος](/el/dam/pomos/) **59.5%** (-1.0μ.π.) — η μεγαλύτερη πτώση δελτίου εδώ και εβδομάδες
- [Αργάκα](/el/dam/argaka/) **43.7%** (+0.2μ.π.) — μικρή άνοδος τερματίζει το πλατό δύο δελτίων
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — αμετάβλητος, το μόνο φράγμα που υπερχειλίζει
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (8 — 12 октября 2026)

Понедельник, с учётом выходных после четверга: общий запас **35.4%** (102.9 МКМ) — ниже 35.55% (103.4 МКМ) в четверг, тот же медленный темп снижения продолжается. [Арминоу](/ru/dam/arminou/) продолжил рост до 62.3% (+0.7пп за четыре дня), оставаясь единственной растущей дамбой Южного водовода. [Ахна](/ru/dam/achna/) прервала свою многомесячную серию необъяснимого роста, снизившись до 8.1% (-0.2пп). [Калопанайотис](/ru/dam/kalopanagiotis/) остаётся единственной переполненной дамбой, без изменений на 100%. Разрыв с прошлым годом остаётся на уровне **23.6 пункта**. Приток за сезон: 0.54 МКМ пока. Перекачка [Арминоу](/ru/dam/arminou/)→[Куриса](/ru/dam/kouris/) остаётся на нуле.

**Основные изменения (за период с 8 октября):**
- [Арминоу](/ru/dam/arminou/) **62.3%** (+0.7пп) — продолжает расти, единственная растущая дамба Южного водовода
- [Ахна](/ru/dam/achna/) **8.1%** (-0.2пп) — прерывает многомесячную серию роста, первое падение за недели
- [Помос](/ru/dam/pomos/) **59.5%** (-1.0пп) — самое резкое падение за недели
- [Аргака](/ru/dam/argaka/) **43.7%** (+0.2пп) — небольшой рост завершает плато двух бюллетеней
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — без изменений, единственная переполненная дамба
`;
  }
  return `
### Recent Changes (October 8 — 12, 2026)

Monday's bulletin, covering the weekend after Thursday's update: total storage **35.4%** (102.9 MCM) — down from Thursday's 35.55% (103.4 MCM), the same slow drawdown pace continuing. [Arminou](/dam/arminou/) kept climbing to 62.3% (+0.7pp over four days), remaining the only Southern Conveyor dam still rising. [Achna](/dam/achna/) broke its months-long unexplained rise streak, slipping to 8.1% (-0.2pp) for its first drop in weeks. [Kalopanagiotis](/dam/kalopanagiotis/) remains the only dam overflowing, unchanged at 100%. The gap over last year holds at **23.6 points**. Season inflow so far: 0.54 MCM. The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at zero.

**Notable movements (vs. October 8):**
- [Arminou](/dam/arminou/) **62.3%** (+0.7pp) — keeps climbing, only Southern Conveyor dam still rising
- [Achna](/dam/achna/) **8.1%** (-0.2pp) — breaks its months-long rise streak, first drop in weeks
- [Pomos](/dam/pomos/) **59.5%** (-1.0pp) — steepest single-bulletin drop in weeks
- [Argaka](/dam/argaka/) **43.7%** (+0.2pp) — small uptick ends its two-bulletin plateau
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — unchanged, still the only dam overflowing
`;
};

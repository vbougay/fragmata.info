import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.035, totalSince: 0.095 }, storage: { current: { amount: 42.657, percentage: 37.1 }, lastYear: { amount: 12.746, percentage: 11.1 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.003, totalSince: 0.003 }, storage: { current: { amount: 3.724, percentage: 21.8 }, lastYear: { amount: 2.147, percentage: 12.6 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.003, totalSince: 0.003 }, storage: { current: { amount: 2.397, percentage: 17.3 }, lastYear: { amount: 2.035, percentage: 14.7 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.011, totalSince: 0.011 }, storage: { current: { amount: 3.937, percentage: 25.4 }, lastYear: { amount: 3.462, percentage: 22.3 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.010, totalSince: 0.016 }, storage: { current: { amount: 6.545, percentage: 48.5 }, lastYear: { amount: 0.991, percentage: 7.3 } }, maxStorage: { amount: 8.140, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.057, totalSince: 0.069 }, storage: { current: { amount: 2.618, percentage: 60.9 }, lastYear: { amount: 1.844, percentage: 42.9 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.007, totalSince: 0.007 }, storage: { current: { amount: 1.465, percentage: 43.1 }, lastYear: { amount: 0.863, percentage: 25.4 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.562, percentage: 8.3 }, lastYear: { amount: 0.130, percentage: 1.9 } }, maxStorage: { amount: 0.380, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.013, totalSince: 0.014 }, storage: { current: { amount: 18.817, percentage: 35.9 }, lastYear: { amount: 5.432, percentage: 10.4 } }, maxStorage: { amount: 22.011, date: "29/5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.034, totalSince: 0.045 }, storage: { current: { amount: 7.301, percentage: 42.5 }, lastYear: { amount: 2.233, percentage: 13.0 } }, maxStorage: { amount: 8.990, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.005, totalSince: 0.005 }, storage: { current: { amount: 0.644, percentage: 29.5 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.015, totalSince: 0.021 }, storage: { current: { amount: 9.344, percentage: 38.9 }, lastYear: { amount: 3.015, percentage: 12.6 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.431, percentage: 43.5 }, lastYear: { amount: 0.003, percentage: 0.3 } }, maxStorage: { amount: 0.990, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.004, totalSince: 0.004 }, storage: { current: { amount: 0.520, percentage: 60.5 }, lastYear: { amount: 0.119, percentage: 13.8 } }, maxStorage: { amount: 0.860, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.006, totalSince: 0.007 }, storage: { current: { amount: 0.142, percentage: 47.7 }, lastYear: { amount: 0.055, percentage: 18.5 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 1.226, percentage: 72.5 }, lastYear: { amount: 0.006, percentage: 0.4 } }, maxStorage: { amount: 1.690, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 1.079, percentage: 75.5 }, lastYear: { amount: 0.038, percentage: 2.7 } }, maxStorage: { amount: 1.430, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.037, percentage: 10.2 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 2.239, percentage: 80.0 }, lastYear: { amount: 0.538, percentage: 19.2 } }, maxStorage: { amount: 2.800, date: "2/4-5/6" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 1.755, percentage: 87.8 }, lastYear: { amount: 1.143, percentage: 57.2 } }, maxStorage: { amount: 2.000, date: "14/2-30/6" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 3.805, percentage: 85.4 }, lastYear: { amount: 2.009, percentage: 45.1 } }, maxStorage: { amount: 4.454, date: "10/3-2/6" }, region: "Recharge/Other" },

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
  { year: "26/27", months: { October:0.300, November:0, December:0, January:0, February:0, March:0, April:0, May:0, June:0, July:0, "Aug-Sep":0 }, total:0.300 },
];

export const getReportDate = (): string => "05-OCT-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris eased to 37.1% (42.7 MCM), barely moved over three days, still 26.0pp above last year\'s 11.1%.',
      el: 'Ο Κούρης υποχώρησε ελαφρώς στο 37.1% (42.7 ΕΚΜ), 26.0μ.π. πάνω από πέρυσι (11.1%).',
      ru: 'Курис немного снизился — 37.1% (42.7 МКМ), +26.0пп выше прошлогодних 11.1%.',
    },
    'Kalavasos': {
      en: 'Kalavasos steady at 21.8% (3.72 MCM), still 9.2pp above last year\'s 12.6%.',
      el: 'Ο Καλαβασός σταθερός στο 21.8% (3.72 ΕΚΜ), 9.2μ.π. πάνω από πέρυσι (12.6%).',
      ru: 'Калавасос стабильно — 21.8% (3.72 МКМ), выше прошлогодних 12.6%.',
    },
    'Lefkara': {
      en: 'Lefkara unchanged at 17.3% (2.40 MCM), 2.6pp above last year\'s 14.7%.',
      el: 'Η Λεύκαρα αμετάβλητη στο 17.3% (2.40 ΕΚΜ), πάνω από πέρυσι (14.7%).',
      ru: 'Лефкара без изменений — 17.3% (2.40 МКМ), выше прошлогодних 14.7%.',
    },
    'Dipotamos': {
      en: 'Dipotamos down slightly to 25.4% (3.94 MCM), 3.1pp above last year\'s 22.3%.',
      el: 'Ο Διπόταμος ελαφρώς χαμηλότερος στο 25.4% (3.94 ΕΚΜ), 3.1μ.π. πάνω από πέρυσι (22.3%).',
      ru: 'Дипотамос немного снизился — 25.4% (3.94 МКМ), +3.1пп выше прошлогодних 22.3%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia eased to 48.5% (6.55 MCM), still 41.2pp above last year\'s 7.3%.',
      el: 'Η Γερμασόγεια υποχώρησε στο 48.5% (6.55 ΕΚΜ). 41.2μ.π. πάνω από πέρυσι (7.3%).',
      ru: 'Гермасойя снизилась — 48.5% (6.55 МКМ). +41.2пп выше прошлогодних 7.3%.',
    },
    'Arminou': {
      en: 'Arminou up to 60.9% (2.62 MCM, +1.1pp), the only Southern Conveyor dam still rising, 18.0pp above last year\'s 42.9%.',
      el: 'Ο Αρμίνου ανέβηκε στο 60.9% (2.62 ΕΚΜ, +1.1μ.π.), 18.0μ.π. πάνω από πέρυσι (42.9%).',
      ru: 'Арминоу вырос — 60.9% (2.62 МКМ, +1.1пп), +18.0пп выше прошлогодних 42.9%.',
    },
    'Polemidia': {
      en: 'Polemidia edged up to 43.1% (1.47 MCM), still 17.7pp above last year\'s 25.4%.',
      el: 'Η Πολεμίδια ανέβηκε ελαφρώς στο 43.1% (1.47 ΕΚΜ), 17.7μ.π. πάνω από πέρυσι (25.4%).',
      ru: 'Полемидия немного выросла — 43.1% (1.47 МКМ), +17.7пп выше прошлогодних 25.4%.',
    },
    'Achna': {
      en: 'Achna jumped to 8.3% (0.56 MCM, +1.9pp) — its biggest single-bulletin rise yet, despite zero recorded inflow all season.',
      el: 'Η Αχνά αναπήδησε στο 8.3% (0.56 ΕΚΜ, +1.9μ.π.) — η μεγαλύτερη άνοδος μέχρι στιγμής, παρά τη μηδενική εισροή.',
      ru: 'Ахна резко выросла — 8.3% (0.56 МКМ, +1.9пп), крупнейший скачок пока, несмотря на нулевой приток.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos down slightly to 35.9% (18.82 MCM), 25.5pp above last year\'s 10.4%.',
      el: 'Ο Ασπρόκρεμμος ελαφρώς χαμηλότερος στο 35.9% (18.82 ΕΚΜ), 25.5μ.π. πάνω από πέρυσι (10.4%).',
      ru: 'Аспрокреммос немного снизился — 35.9% (18.82 МКМ), +25.5пп выше прошлогодних 10.4%.',
    },
    'Kannaviou': {
      en: 'Kannaviou steady at 42.5% (7.30 MCM), still 29.5pp above last year\'s 13.0%.',
      el: 'Ο Καννάβιου σταθερός στο 42.5% (7.30 ΕΚΜ), 29.5μ.π. πάνω από πέρυσι (13.0%).',
      ru: 'Каннавиу стабильно — 42.5% (7.30 МКМ), +29.5пп выше прошлогодних 13.0%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos edged up to 29.5% (0.64 MCM). Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος ανέβηκε ελαφρώς στο 29.5% (0.64 ΕΚΜ). Από 0% πέρυσι.',
      ru: 'Мавроколимпос немного вырос — 29.5% (0.64 МКМ). Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou unchanged at 38.9% (9.34 MCM), still 26.3pp above last year\'s 12.6%.',
      el: 'Ο Εύρετου αμετάβλητος στο 38.9% (9.34 ΕΚΜ). 26.3μ.π. πάνω από πέρυσι (12.6%).',
      ru: 'Эвретоу без изменений — 38.9% (9.34 МКМ). +26.3пп выше прошлогодних 12.6%.',
    },
    'Argaka': {
      en: 'Argaka down to 43.5% (0.43 MCM), continuing its multi-week slide. Up from 0.3% last year.',
      el: 'Η Αργάκα χαμηλότερα στο 43.5% (0.43 ΕΚΜ), συνεχίζεται η πολυεβδομαδιαία πτώση. Από 0.3% πέρυσι.',
      ru: 'Аргака снизилась — 43.5% (0.43 МКМ), многонедельное снижение продолжается. Год назад 0.3%.',
    },
    'Pomos': {
      en: 'Pomos unchanged at 60.5% (0.52 MCM). Up from 13.8% last year.',
      el: 'Ο Πόμος αμετάβλητος στο 60.5% (0.52 ΕΚΜ). Από 13.8% πέρυσι.',
      ru: 'Помос без изменений — 60.5% (0.52 МКМ). Год назад 13.8%.',
    },
    'Agia Marina': {
      en: 'Agia Marina up to 47.7% (0.14 MCM, +1.7pp), a second straight gain extending its recovery. Up from 18.5% last year.',
      el: 'Η Αγία Μαρίνα ανέβηκε στο 47.7% (0.14 ΕΚΜ, +1.7μ.π.), δεύτερη συνεχόμενη άνοδος. Από 18.5% πέρυσι.',
      ru: 'Агия Марина выросла — 47.7% (0.14 МКМ, +1.7пп), второй подряд рост. Год назад 18.5%.',
    },
    'Vyzakia': {
      en: 'Vyzakia down slightly to 72.5% (1.23 MCM). Was 0.4% last year.',
      el: 'Τα Βυζακιά ελαφρώς χαμηλότερα στο 72.5% (1.23 ΕΚΜ). Από 0.4% πέρυσι.',
      ru: 'Визакия немного снизилась — 72.5% (1.23 МКМ). Год назад 0.4%.',
    },
    'Xyliatos': {
      en: 'Xyliatos down to 75.5% (1.08 MCM). Was 2.7% last year.',
      el: 'Ο Ξυλιάτος χαμηλότερος στο 75.5% (1.08 ΕΚΜ). Από 2.7% πέρυσι.',
      ru: 'Ксилиатос снизился — 75.5% (1.08 МКМ). Год назад 2.7%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis unchanged at 100% (0.36 MCM), still the only dam overflowing. Up from 10.2% last year.',
      el: 'Ο Καλοπαναγιώτης αμετάβλητος στο 100% (0.36 ΕΚΜ), το μόνο φράγμα που υπερχειλίζει. Από 10.2% πέρυσι.',
      ru: 'Калопанайотис без изменений на 100% (0.36 МКМ), единственная переполненная дамба. Год назад 10.2%.',
    },
    'Tamassos': {
      en: 'Tamassos down slightly to 80.0% (2.24 MCM). Was 19.2% last year — a 4.2× year-over-year recovery.',
      el: 'Ο Ταμασός ελαφρώς χαμηλότερος στο 80.0% (2.24 ΕΚΜ). Από 19.2% πέρυσι — 4.2× ανάκαμψη.',
      ru: 'Тамассос немного снизился — 80.0% (2.24 МКМ). Год назад 19.2% — восстановление в 4.2×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta down slightly to 87.8% (1.76 MCM). Up from 57.2% one year ago.',
      el: 'Η Κλήρου-Μαλούντα ελαφρώς χαμηλότερη στο 87.8% (1.76 ΕΚΜ). Αύξηση από 57.2% πέρυσι.',
      ru: 'Клиру-Малунта немного снизилась — 87.8% (1.76 МКМ). Рост с 57.2% год назад.',
    },
    'Solea': {
      en: 'Solea down slightly to 85.4% (3.81 MCM). Up from 45.1% last year — 1.89× year-over-year improvement.',
      el: 'Η Σολέα ελαφρώς χαμηλότερη στο 85.4% (3.81 ΕΚΜ). Αύξηση από 45.1% πέρυσι — 1.89× βελτίωση.',
      ru: 'Солеа немного снизилась — 85.4% (3.81 МКМ). Рост с 45.1% год назад — улучшение в 1.89×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (2 — 5 Οκτωβρίου 2026)

Δευτέρα, τρεις μέρες μετά την Παρασκευή: συνολική αποθήκευση **35.68%** (103.8 ΕΚΜ) — ελαφρώς χαμηλότερη από το 35.75% (104.0 ΕΚΜ) της 2ας Οκτωβρίου, μείωση περίπου 0.2 ΕΚΜ σε τρεις μέρες, ο ίδιος αργός ρυθμός κατανάλωσης συνεχίζεται στη νέα σεζόν. Ο [Αρμίνου](/el/dam/arminou/) παραμένει το μόνο φράγμα του Νότιου Αγωγού που ανεβαίνει, +1.1μ.π. στο 60.9%. Η [Αχνά](/el/dam/achna/) αναπήδησε ξανά, +1.9μ.π. στο 8.3%, η μεγαλύτερη μονή άνοδος μέχρι στιγμής στην ανεξήγητη σειρά της, παρά τη μηδενική καταγεγραμμένη εισροή. Ο [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) παραμένει το μόνο φράγμα που υπερχειλίζει, αμετάβλητος στο 100%. Το χάσμα με πέρυσι διευρύνθηκε ελαφρώς στις **23.6 μονάδες**. Εισροή σεζόν: 0.3 ΕΚΜ μέχρι στιγμής. Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στο μηδέν για τη νέα σεζόν.

**Αξιοσημείωτα (έναντι 2 Οκτωβρίου):**
- [Αχνά](/el/dam/achna/) **8.3%** (+1.9μ.π.) — η μεγαλύτερη μονή άνοδος μέχρι στιγμής, παρά τη μηδενική εισροή
- [Αγία Μαρίνα](/el/dam/agia-marina/) **47.7%** (+1.7μ.π.) — δεύτερη συνεχόμενη άνοδος
- [Αρμίνου](/el/dam/arminou/) **60.9%** (+1.1μ.π.) — το μόνο φράγμα του Νότιου Αγωγού που ανεβαίνει
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — αμετάβλητος, το μόνο φράγμα που υπερχειλίζει
- [Αργάκα](/el/dam/argaka/) **43.5%** (-0.4μ.π.) — συνεχίζεται η πολυεβδομαδιαία πτώση
- [Κούρης](/el/dam/kouris/) **37.1%** (-0.2μ.π.) — σχεδόν αμετάβλητος

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (2 — 5 октября 2026)

Понедельник, спустя три дня после пятницы: общий запас **35.68%** (103.8 МКМ) — немного ниже 35.75% (104.0 МКМ) 2 октября, потеря около 0.2 МКМ за три дня, тот же медленный темп сработки продолжается в новом сезоне. [Арминоу](/ru/dam/arminou/) остаётся единственной дамбой Южного водовода, которая растёт, +1.1пп до 60.9%. [Ахна](/ru/dam/achna/) снова подскочила, +1.9пп до 8.3% — крупнейший единичный скачок пока в её необъяснимой серии, несмотря на нулевой зафиксированный приток. [Калопанайотис](/ru/dam/kalopanagiotis/) остаётся единственной переполненной дамбой, без изменений на 100%. Разрыв с прошлым годом немного увеличился — **23.6 пункта**. Приток за сезон: 0.3 МКМ пока. Перекачка [Арминоу](/ru/dam/arminou/)→[Куриса](/ru/dam/kouris/) остаётся на нуле для нового сезона.

**Основные изменения (за период со 2 октября):**
- [Ахна](/ru/dam/achna/) **8.3%** (+1.9пп) — крупнейший единичный скачок пока, несмотря на нулевой приток
- [Агия Марина](/ru/dam/agia-marina/) **47.7%** (+1.7пп) — второй подряд рост
- [Арминоу](/ru/dam/arminou/) **60.9%** (+1.1пп) — единственная дамба Южного водовода, которая растёт
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — без изменений, единственная переполненная дамба
- [Аргака](/ru/dam/argaka/) **43.5%** (-0.4пп) — многонедельное снижение продолжается
- [Курис](/ru/dam/kouris/) **37.1%** (-0.2пп) — почти без изменений

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (October 2 — 5, 2026)

Monday's bulletin, three days since Friday: total storage **35.68%** (103.8 MCM) — down slightly from 35.75% (104.0 MCM) on October 2, a loss of roughly 0.2 MCM over three days, the same slow drawdown pace continuing into the new season. [Arminou](/dam/arminou/) remains the only Southern Conveyor dam still rising, up 1.1pp to 60.9%. [Achna](/dam/achna/) jumped again, up 1.9pp to 8.3% — its biggest single-bulletin rise yet in that unexplained streak, despite zero recorded inflow all season. [Kalopanagiotis](/dam/kalopanagiotis/) remains the only dam overflowing, unchanged at 100%. The gap over last year widened slightly to **23.6 points**. Season inflow so far: 0.3 MCM. The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at zero for the new season.

**Notable movements (vs. October 2):**
- [Achna](/dam/achna/) **8.3%** (+1.9pp) — biggest single-bulletin rise yet, still zero recorded inflow
- [Agia Marina](/dam/agia-marina/) **47.7%** (+1.7pp) — second straight gain
- [Arminou](/dam/arminou/) **60.9%** (+1.1pp) — only Southern Conveyor dam still rising
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — unchanged, still the only dam overflowing
- [Argaka](/dam/argaka/) **43.5%** (-0.4pp) — continues its multi-week slide
- [Kouris](/dam/kouris/) **37.1%** (-0.2pp) — barely moved

🔗 https://fragmata.info
`;
};

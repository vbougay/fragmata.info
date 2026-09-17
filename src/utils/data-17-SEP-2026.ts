import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.004, totalSince: 27.152 }, storage: { current: { amount: 44.142, percentage: 38.4 }, lastYear: { amount: 13.832, percentage: 12.0 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.202 }, storage: { current: { amount: 3.806, percentage: 22.3 }, lastYear: { amount: 2.379, percentage: 13.9 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.738 }, storage: { current: { amount: 2.421, percentage: 17.5 }, lastYear: { amount: 2.084, percentage: 15.0 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.772 }, storage: { current: { amount: 4.280, percentage: 27.6 }, lastYear: { amount: 3.819, percentage: 24.6 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 6.744, percentage: 50.0 }, lastYear: { amount: 1.175, percentage: 8.7 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.000, totalSince: 22.427 }, storage: { current: { amount: 2.506, percentage: 58.3 }, lastYear: { amount: 1.960, percentage: 45.6 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.635 }, storage: { current: { amount: 1.466, percentage: 43.1 }, lastYear: { amount: 0.905, percentage: 26.6 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.110, percentage: 1.6 }, lastYear: { amount: 0.219, percentage: 3.2 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.330 }, storage: { current: { amount: 19.356, percentage: 37.0 }, lastYear: { amount: 6.081, percentage: 11.6 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 7.526, percentage: 43.8 }, lastYear: { amount: 2.468, percentage: 14.4 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 0.675, percentage: 31.0 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 9.562, percentage: 39.8 }, lastYear: { amount: 3.374, percentage: 14.1 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.477, percentage: 48.2 }, lastYear: { amount: 0.005, percentage: 0.5 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.550, percentage: 64.0 }, lastYear: { amount: 0.125, percentage: 14.5 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.151, percentage: 50.7 }, lastYear: { amount: 0.057, percentage: 19.1 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.280, percentage: 75.7 }, lastYear: { amount: 0.010, percentage: 0.6 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.125, percentage: 78.7 }, lastYear: { amount: 0.059, percentage: 4.1 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.322 }, storage: { current: { amount: 0.351, percentage: 96.7 }, lastYear: { amount: 0.057, percentage: 15.7 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.339, percentage: 83.5 }, lastYear: { amount: 0.583, percentage: 20.8 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.781, percentage: 89.1 }, lastYear: { amount: 1.171, percentage: 58.6 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 3.887, percentage: 87.3 }, lastYear: { amount: 2.084, percentage: 46.8 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through September 17, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":1.222 }, total:116.717 },
];

export const getReportDate = (): string => "17-SEP-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 38.4% (44.1 MCM) — down slightly, still 26.4pp above last year\'s 12.0%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 38.4% (44.1 ΕΚΜ) — ελαφριά υποχώρηση, 26.4μ.π. πάνω από πέρυσι (12.0%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 38.4% (44.1 МКМ) — небольшое снижение, +26.4пп выше прошлогодних 12.0%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 22.3% (3.81 MCM) — essentially flat, still 8.4pp above last year\'s 13.9%. Seasonal inflow 4.20 MCM.',
      el: 'Ο Καλαβασός στο 22.3% (3.81 ΕΚΜ) — σχεδόν σταθερός, πάνω από πέρυσι (13.9%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 22.3% (3.81 МКМ) — почти без изменений, выше прошлогодних 13.9%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara unchanged at 17.5% (2.42 MCM), 2.5pp above last year\'s 15.0%. Seasonal inflow 1.74 MCM.',
      el: 'Η Λεύκαρα αμετάβλητη στο 17.5% (2.42 ΕΚΜ), πάνω από πέρυσι (15.0%). Εισροή σεζόν 1.74 ΕΚΜ.',
      ru: 'Лефкара без изменений — 17.5% (2.42 МКМ), выше прошлогодних 15.0%. Приток 1.74 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 27.6% (4.28 MCM) — down slightly, still 3.0pp above last year\'s 24.6%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 27.6% (4.28 ΕΚΜ) — ελαφριά υποχώρηση, 3.0μ.π. πάνω από πέρυσι (24.6%).',
      ru: 'Дипотамос на 27.6% (4.28 МКМ) — небольшое снижение, +3.0пп выше прошлогодних 24.6%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 50.0% (6.74 MCM) — down slightly, still 41.3pp above last year\'s 8.7%.',
      el: 'Η Γερμασόγεια στο 50.0% (6.74 ΕΚΜ) — ελαφριά υποχώρηση. 41.3μ.π. πάνω από πέρυσι (8.7%).',
      ru: 'Гермасойя на 50.0% (6.74 МКМ) — небольшое снижение. +41.3пп выше прошлогодних 8.7%.',
    },
    'Arminou': {
      en: 'Arminou at 58.3% (2.51 MCM) — essentially flat, still 12.7pp above last year\'s 45.6%. Season inflow 22.4 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 58.3% (2.51 ΕΚΜ) — σχεδόν σταθερός, 12.7μ.π. πάνω από πέρυσι (45.6%).',
      ru: 'Арминоу на 58.3% (2.51 МКМ) — почти без изменений, +12.7пп выше прошлогодних 45.6%.',
    },
    'Polemidia': {
      en: 'Polemidia at 43.1% (1.47 MCM) — essentially flat, still 16.5pp above last year\'s 26.6%.',
      el: 'Η Πολεμίδια στο 43.1% (1.47 ΕΚΜ) — σχεδόν σταθερή, 16.5μ.π. πάνω από πέρυσι (26.6%).',
      ru: 'Полемидия на 43.1% (1.47 МКМ) — почти без изменений, +16.5пп выше прошлогодних 26.6%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.6% (0.11 MCM), a small rise despite zero recorded inflow all season. Still below last year\'s 3.2%.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.6% (0.11 ΕΚΜ), μικρή άνοδος παρά τη μηδενική εισροή. Κάτω από πέρυσι (3.2%).',
      ru: 'Ахна критически низкая — 1.6% (0.11 МКМ), небольшой рост несмотря на нулевой приток. По-прежнему ниже прошлогодних 3.2%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 37.0% (19.36 MCM) — down slightly, 25.4pp above last year\'s 11.6%. Seasonal inflow 20.3 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 37.0% (19.36 ΕΚΜ) — ελαφριά υποχώρηση, 25.4μ.π. πάνω από πέρυσι (11.6%).',
      ru: 'Аспрокреммос на 37.0% (19.36 МКМ) — небольшое снижение, +25.4пп выше прошлогодних 11.6%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 43.8% (7.53 MCM) — down slightly, still 29.4pp above last year\'s 14.4%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 43.8% (7.53 ΕΚΜ) — ελαφριά υποχώρηση, 29.4μ.π. πάνω από πέρυσι (14.4%).',
      ru: 'Каннавиу на 43.8% (7.53 МКМ) — небольшое снижение, +29.4пп выше прошлогодних 14.4%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos down 0.4pp to 31.0% (0.68 MCM) — a sixth straight period of decline. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος -0.4μ.π., στο 31.0% (0.68 ΕΚΜ) — έκτη συνεχόμενη περίοδος πτώσης. Από 0% πέρυσι.',
      ru: 'Мавроколимпос -0.4пп, до 31.0% (0.68 МКМ) — шестой период подряд среди снижения. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 39.8% (9.56 MCM) — down slightly, still 25.7pp above last year\'s 14.1%.',
      el: 'Ο Εύρετου στο 39.8% (9.56 ΕΚΜ) — ελαφριά υποχώρηση. 25.7μ.π. πάνω από πέρυσι (14.1%).',
      ru: 'Эвретоу на 39.8% (9.56 МКМ) — небольшое снижение. +25.7пп выше прошлогодних 14.1%.',
    },
    'Argaka': {
      en: 'Argaka down 2.3pp to 48.2% (0.48 MCM), extending its multi-week slide. Up from 0.5% last year — a 96× year-over-year recovery.',
      el: 'Η Αργάκα -2.3μ.π., στο 48.2% (0.48 ΕΚΜ), συνεχίζει η πολυεβδομαδιαία πτώση. Από 0.5% πέρυσι — 96× ανάκαμψη.',
      ru: 'Аргака -2.3пп, до 48.2% (0.48 МКМ), многонедельное снижение продолжается. Год назад 0.5% — рост в 96×.',
    },
    'Pomos': {
      en: 'Pomos down 1.3pp to 64.0% (0.55 MCM), continued retreat from near-full. Up from 14.5% last year.',
      el: 'Ο Πόμος -1.3μ.π., στο 64.0% (0.55 ΕΚΜ). Από 14.5% πέρυσι.',
      ru: 'Помос -1.3пп, до 64.0% (0.55 МКМ). Год назад 14.5%.',
    },
    'Agia Marina': {
      en: 'Agia Marina down 1.3pp to 50.7% (0.15 MCM), its multi-week slide continuing. Up from 19.1% last year.',
      el: 'Η Αγία Μαρίνα -1.3μ.π., στο 50.7% (0.15 ΕΚΜ), η πολυεβδομαδιαία πτώση συνεχίζεται. Από 19.1% πέρυσι.',
      ru: 'Агия Марина -1.3пп, до 50.7% (0.15 МКМ), многонедельное снижение продолжается. Год назад 19.1%.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 75.7% (1.28 MCM) — down 0.8pp. Was 0.6% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 75.7% (1.28 ΕΚΜ) — -0.8μ.π. Από 0.6% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 75.7% (1.28 МКМ) — -0.8пп. Год назад 0.6% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 78.7% (1.13 MCM) — down 0.5pp. Was 4.1% last year.',
      el: 'Ο Ξυλιάτος στο 78.7% (1.13 ΕΚΜ) — -0.5μ.π. Από 4.1% πέρυσι.',
      ru: 'Ксилиатос на 78.7% (1.13 МКМ) — -0.5пп. Год назад 4.1%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis down 1.4pp to 96.7% (0.35 MCM), further off its overflow plateau. Up from 15.7% last year.',
      el: 'Ο Καλοπαναγιώτης -1.4μ.π. στο 96.7% (0.35 ΕΚΜ), απομακρύνεται περαιτέρω από το οροπέδιο υπερχείλισης. Αύξηση από 15.7% πέρυσι.',
      ru: 'Калопанайотис -1.4пп, до 96.7% (0.35 МКМ), продолжает отходить от плато перелива. Рост с 15.7% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 83.5% (2.34 MCM) — down slightly. Was 20.8% last year — a 4.0× year-over-year recovery.',
      el: 'Ο Ταμασός στο 83.5% (2.34 ΕΚΜ) — ελαφριά υποχώρηση. Από 20.8% πέρυσι — 4.0× ανάκαμψη.',
      ru: 'Тамассос на 83.5% (2.34 МКМ) — небольшое снижение. Год назад 20.8% — восстановление в 4.0×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 89.1% (1.78 MCM) — essentially flat. Up from 58.6% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 89.1% (1.78 ΕΚΜ) — σχεδόν σταθερή. Αύξηση από 58.6% πέρυσι.',
      ru: 'Клиру-Малунта на 89.1% (1.78 МКМ) — почти без изменений. Рост с 58.6% год назад.',
    },
    'Solea': {
      en: 'Solea at 87.3% (3.89 MCM) — down slightly as the dry season progresses. Up from 46.8% last year — 1.87× year-over-year improvement.',
      el: 'Η Σολέα στο 87.3% (3.89 ΕΚΜ) — ελαφριά υποχώρηση. Αύξηση από 46.8% πέρυσι — 1.87× βελτίωση.',
      ru: 'Солеа на 87.3% (3.89 МКМ) — небольшое снижение. Рост с 46.8% год назад — улучшение в 1.87×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (14 — 17 Σεπτεμβρίου 2026)

Δελτίο Πέμπτης, τρεις ημέρες μετά τη Δευτέρα: συνολική αποθήκευση **36.6%** (106.5 ΕΚΜ) — από 36.8% (107.2 ΕΚΜ) στις 14 Σεπτεμβρίου, απώλεια περίπου 0.6 ΕΚΜ σε τρεις ημέρες, ίδιος αργός ρυθμός άντλησης. Ο [Αργάκα](/el/dam/argaka/) είχε την μεγαλύτερη πτώση, -2.3μ.π., καθώς η πολυεβδομαδιαία πτώση του συνεχίζεται. Ο [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) απομακρύνθηκε περαιτέρω από το οροπέδιο υπερχείλισης, -1.4μ.π. στο 96.7%. Το χάσμα με πέρυσι διευρύνθηκε ελαφρώς στις **23.4 μονάδες**. Εισροή σεζόν: 116.7 ΕΚΜ (Αύγ-Σεπ μέχρι στιγμής: 1.22 ΕΚΜ). Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι 14 Σεπτεμβρίου):**
- [Αργάκα](/el/dam/argaka/) **48.2%** (-2.3μ.π.) — συνεχίζεται η πολυεβδομαδιαία πτώση
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **96.7%** (-1.4μ.π.) — απομακρύνεται περαιτέρω από το οροπέδιο υπερχείλισης
- [Πόμος](/el/dam/pomos/) **64.0%** (-1.3μ.π.) — συνεχής υποχώρηση από σχεδόν γεμάτο
- [Αγία Μαρίνα](/el/dam/agia-marina/) **50.7%** (-1.3μ.π.) — η πολυεβδομαδιαία πτώση συνεχίζεται
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **31.0%** (-0.4μ.π.) — έκτη συνεχόμενη περίοδος πτώσης
- [Αχνά](/el/dam/achna/) **1.6%** (+0.4μ.π.) — μικρή άνοδος παρά τη μηδενική εισροή όλη τη σεζόν

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (14 — 17 сентября 2026)

Бюллетень четверга, спустя три дня после понедельника: общий запас **36.6%** (106.5 МКМ) — против 36.8% (107.2 МКМ) 14 сентября, потеря примерно 0.6 МКМ за три дня, тот же медленный темп сработки. [Аргака](/ru/dam/argaka/) показала крупнейшее снижение, -2.3пп, многонедельное снижение продолжается. [Калопанайотис](/ru/dam/kalopanagiotis/) продолжил отходить от плато перелива, -1.4пп до 96.7%. Разрыв с прошлым годом немного расширился до **23.4 пункта**. Приток сезона: 116.7 МКМ (авг-сен пока: 1.22 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Куриса](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за период с 14 сентября):**
- [Аргака](/ru/dam/argaka/) **48.2%** (-2.3пп) — многонедельное снижение продолжается
- [Калопанайотис](/ru/dam/kalopanagiotis/) **96.7%** (-1.4пп) — продолжает отходить от плато перелива
- [Помос](/ru/dam/pomos/) **64.0%** (-1.3пп) — продолжающийся откат от почти полного
- [Агия Марина](/ru/dam/agia-marina/) **50.7%** (-1.3пп) — многонедельное снижение продолжается
- [Мавроколимпос](/ru/dam/mavrokolympos/) **31.0%** (-0.4пп) — шестой период подряд снижения
- [Ахна](/ru/dam/achna/) **1.6%** (+0.4пп) — небольшой рост несмотря на нулевой приток за весь сезон

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (September 14 — September 17, 2026)

Thursday's bulletin, three days since Monday: total storage at **36.6%** (106.5 MCM) — down from 36.8% (107.2 MCM) on September 14, a loss of roughly 0.6 MCM over three days, the same slow drawdown pace continuing. [Argaka](/dam/argaka/) posted the biggest drop, down 2.3pp, extending its multi-week slide. [Kalopanagiotis](/dam/kalopanagiotis/) moved further off its overflow plateau, down 1.4pp to 96.7%. The gap over last year widened slightly to **23.4 points**. Season inflow: 116.7 MCM (Aug-Sep so far: 1.22 MCM). The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. September 14):**
- [Argaka](/dam/argaka/) **48.2%** (-2.3pp) — extending its multi-week slide
- [Kalopanagiotis](/dam/kalopanagiotis/) **96.7%** (-1.4pp) — further off the overflow plateau
- [Pomos](/dam/pomos/) **64.0%** (-1.3pp) — continued retreat from near-full
- [Agia Marina](/dam/agia-marina/) **50.7%** (-1.3pp) — multi-week slide continues
- [Mavrokolympos](/dam/mavrokolympos/) **31.0%** (-0.4pp) — a sixth straight period of decline
- [Achna](/dam/achna/) **1.6%** (+0.4pp) — a small rise despite zero recorded inflow all season

🔗 https://fragmata.info
`;
};

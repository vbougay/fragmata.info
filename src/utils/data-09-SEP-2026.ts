import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.014, totalSince: 27.079 }, storage: { current: { amount: 44.675, percentage: 38.8 }, lastYear: { amount: 14.352, percentage: 12.5 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.202 }, storage: { current: { amount: 3.865, percentage: 22.6 }, lastYear: { amount: 2.476, percentage: 14.5 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.738 }, storage: { current: { amount: 2.438, percentage: 17.6 }, lastYear: { amount: 2.106, percentage: 15.2 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.772 }, storage: { current: { amount: 4.451, percentage: 28.7 }, lastYear: { amount: 3.977, percentage: 25.7 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 6.849, percentage: 50.7 }, lastYear: { amount: 1.252, percentage: 9.3 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.000, totalSince: 22.427 }, storage: { current: { amount: 2.521, percentage: 58.6 }, lastYear: { amount: 2.011, percentage: 46.8 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.635 }, storage: { current: { amount: 1.474, percentage: 43.4 }, lastYear: { amount: 0.923, percentage: 27.1 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.082, percentage: 1.2 }, lastYear: { amount: 0.260, percentage: 3.8 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.330 }, storage: { current: { amount: 19.643, percentage: 37.5 }, lastYear: { amount: 6.534, percentage: 12.5 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 7.647, percentage: 44.5 }, lastYear: { amount: 2.582, percentage: 15.0 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 0.718, percentage: 32.9 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 9.776, percentage: 40.7 }, lastYear: { amount: 3.528, percentage: 14.7 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.528, percentage: 53.3 }, lastYear: { amount: 0.005, percentage: 0.5 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.580, percentage: 67.4 }, lastYear: { amount: 0.126, percentage: 14.7 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.164, percentage: 55.0 }, lastYear: { amount: 0.057, percentage: 19.1 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.308, percentage: 77.4 }, lastYear: { amount: 0.011, percentage: 0.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.148, percentage: 80.3 }, lastYear: { amount: 0.069, percentage: 4.8 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.322 }, storage: { current: { amount: 0.360, percentage: 99.2 }, lastYear: { amount: 0.057, percentage: 15.7 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.363, percentage: 84.4 }, lastYear: { amount: 0.600, percentage: 21.4 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.792, percentage: 89.6 }, lastYear: { amount: 1.190, percentage: 59.5 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 3.928, percentage: 88.2 }, lastYear: { amount: 2.141, percentage: 48.1 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through September 9, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":1.149 }, total:116.644 },
];

export const getReportDate = (): string => "09-SEP-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 38.8% (44.7 MCM) — down slightly over two days, 26.3pp above last year\'s 12.5%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 38.8% (44.7 ΕΚΜ) — ελαφριά υποχώρηση, 26.3μ.π. πάνω από πέρυσι (12.5%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 38.8% (44.7 МКМ) — небольшое снижение, +26.3пп выше прошлогодних 12.5%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 22.6% (3.87 MCM) — essentially flat over two days, still 8.1pp above last year\'s 14.5%. Seasonal inflow 4.20 MCM.',
      el: 'Ο Καλαβασός στο 22.6% (3.87 ΕΚΜ) — σχεδόν σταθερός, πάνω από πέρυσι (14.5%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 22.6% (3.87 МКМ) — почти без изменений, выше прошлогодних 14.5%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 17.6% (2.44 MCM) — unchanged over two days, 2.4pp above last year\'s 15.2%. Seasonal inflow 1.74 MCM.',
      el: 'Η Λεύκαρα στο 17.6% (2.44 ΕΚΜ) — αμετάβλητη, πάνω από πέρυσι (15.2%). Εισροή σεζόν 1.74 ΕΚΜ.',
      ru: 'Лефкара на 17.6% (2.44 МКМ) — без изменений, выше прошлогодних 15.2%. Приток 1.74 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 28.7% (4.45 MCM) — holding steady over two days, 3.0pp above last year\'s 25.7%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 28.7% (4.45 ΕΚΜ) — σταθερός, 3.0μ.π. πάνω από πέρυσι (25.7%).',
      ru: 'Дипотамос на 28.7% (4.45 МКМ) — стабилен, +3.0пп выше прошлогодних 25.7%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 50.7% (6.85 MCM) — down slightly over two days, still 41.4pp above last year\'s 9.3%.',
      el: 'Η Γερμασόγεια στο 50.7% (6.85 ΕΚΜ) — ελαφριά υποχώρηση. 41.4μ.π. πάνω από πέρυσι (9.3%).',
      ru: 'Гермасойя на 50.7% (6.85 МКМ) — небольшое снижение. +41.4пп выше прошлогодних 9.3%.',
    },
    'Arminou': {
      en: 'Arminou at 58.6% (2.52 MCM) — eased back slightly after last week\'s rise, still 11.8pp above last year\'s 46.8%. Season inflow 22.4 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 58.6% (2.52 ΕΚΜ) — ελαφριά υποχώρηση μετά την άνοδο της προηγούμενης εβδομάδας, 11.8μ.π. πάνω από πέρυσι (46.8%).',
      ru: 'Арминоу на 58.6% (2.52 МКМ) — небольшой откат после роста на прошлой неделе, +11.8пп выше прошлогодних 46.8%.',
    },
    'Polemidia': {
      en: 'Polemidia at 43.4% (1.47 MCM) — essentially flat over two days, still 16.3pp above last year\'s 27.1%.',
      el: 'Η Πολεμίδια στο 43.4% (1.47 ΕΚΜ) — σχεδόν αμετάβλητη, 16.3μ.π. πάνω από πέρυσι (27.1%).',
      ru: 'Полемидия на 43.4% (1.47 МКМ) — почти без изменений, +16.3пп выше прошлогодних 27.1%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.2% (0.08 MCM), zero inflow all season. Still below last year\'s 3.8%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.2% (0.08 ΕΚΜ), χωρίς εισροή εφέτος. Κάτω από πέρυσι (3.8%).',
      ru: 'Ахна критически низкая — 1.2% (0.08 МКМ), без притока за сезон. По-прежнему ниже прошлогодних 3.8%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 37.5% (19.64 MCM) — essentially flat over two days, 25.0pp above last year\'s 12.5%. Seasonal inflow 20.3 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 37.5% (19.64 ΕΚΜ) — σχεδόν αμετάβλητος, 25.0μ.π. πάνω από πέρυσι (12.5%).',
      ru: 'Аспрокреммос на 37.5% (19.64 МКМ) — почти без изменений, +25.0пп выше прошлогодних 12.5%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 44.5% (7.65 MCM) — down slightly over two days, still 29.5pp above last year\'s 15.0%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 44.5% (7.65 ΕΚΜ) — ελαφριά υποχώρηση, 29.5μ.π. πάνω από πέρυσι (15.0%).',
      ru: 'Каннавиу на 44.5% (7.65 МКМ) — небольшое снижение, +29.5пп выше прошлогодних 15.0%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos down 1.3pp over two days to 32.9% (0.72 MCM) — the steepest drop again, a third straight period leading the slide. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος -1.3μ.π. σε δύο ημέρες, στο 32.9% (0.72 ΕΚΜ) — η μεγαλύτερη πτώση, τρίτη συνεχόμενη περίοδος. Από 0% πέρυσι.',
      ru: 'Мавроколимпос -1.3пп за два дня, до 32.9% (0.72 МКМ) — вновь самое резкое снижение, третий период подряд. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 40.7% (9.78 MCM) — down slightly over two days, still 26.0pp above last year\'s 14.7%.',
      el: 'Ο Εύρετου στο 40.7% (9.78 ΕΚΜ) — ελαφριά υποχώρηση. 26.0μ.π. πάνω από πέρυσι (14.7%).',
      ru: 'Эвретоу на 40.7% (9.78 МКМ) — небольшое снижение. +26.0пп выше прошлогодних 14.7%.',
    },
    'Argaka': {
      en: 'Argaka down 0.8pp over two days to 53.3% (0.53 MCM), its multi-week slide continuing. Up from 0.5% last year — a 107× year-over-year recovery.',
      el: 'Η Αργάκα -0.8μ.π. σε δύο ημέρες, στο 53.3% (0.53 ΕΚΜ). Από 0.5% πέρυσι — 107× ανάκαμψη.',
      ru: 'Аргака -0.8пп за два дня, до 53.3% (0.53 МКМ). Год назад 0.5% — рост в 107×.',
    },
    'Pomos': {
      en: 'Pomos down 0.4pp over two days to 67.4% (0.58 MCM), continued retreat from near-full. Up from 14.7% last year.',
      el: 'Ο Πόμος -0.4μ.π. σε δύο ημέρες, στο 67.4% (0.58 ΕΚΜ). Από 14.7% πέρυσι.',
      ru: 'Помос -0.4пп за два дня, до 67.4% (0.58 МКМ). Год назад 14.7%.',
    },
    'Agia Marina': {
      en: 'Agia Marina down 1.0pp over two days to 55.0% (0.16 MCM), its multi-week slide continuing. Up from 19.1% last year.',
      el: 'Η Αγία Μαρίνα -1.0μ.π. σε δύο ημέρες, στο 55.0% (0.16 ΕΚΜ), η πολυεβδομαδιαία πτώση συνεχίζεται. Από 19.1% πέρυσι.',
      ru: 'Агия Марина -1.0пп за два дня, до 55.0% (0.16 МКМ), многонедельное снижение продолжается. Год назад 19.1%.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 77.4% (1.31 MCM) — down 0.6pp over two days. Was 0.7% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 77.4% (1.31 ΕΚΜ) — -0.6μ.π. Από 0.7% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 77.4% (1.31 МКМ) — -0.6пп. Год назад 0.7% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 80.3% (1.15 MCM) — down 0.9pp over two days, still below 90%. Was 4.8% last year.',
      el: 'Ο Ξυλιάτος στο 80.3% (1.15 ΕΚΜ) — -0.9μ.π., κάτω από το 90%. Από 4.8% πέρυσι.',
      ru: 'Ксилиатос на 80.3% (1.15 МКМ) — -0.9пп, ниже 90%. Год назад 4.8%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis slipped off its overflow plateau to 99.2% (0.36 MCM), down 0.8pp after two weeks at 100%. Up from 15.7% last year.',
      el: 'Ο Καλοπαναγιώτης έφυγε από το οροπέδιο υπερχείλισης στο 99.2% (0.36 ΕΚΜ), -0.8μ.π. μετά από δύο εβδομάδες στο 100%. Αύξηση από 15.7% πέρυσι.',
      ru: 'Калопанайотис сошёл с плато перелива до 99.2% (0.36 МКМ), -0.8пп после двух недель на уровне 100%. Рост с 15.7% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 84.4% (2.36 MCM) — down 0.5pp over two days. Was 21.4% last year — a 3.9× year-over-year recovery.',
      el: 'Ο Ταμασός στο 84.4% (2.36 ΕΚΜ) — -0.5μ.π. Από 21.4% πέρυσι — 3.9× ανάκαμψη.',
      ru: 'Тамассос на 84.4% (2.36 МКМ) — -0.5пп. Год назад 21.4% — восстановление в 3.9×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 89.6% (1.79 MCM) — unchanged over two days. Up from 59.5% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 89.6% (1.79 ΕΚΜ) — αμετάβλητη. Αύξηση από 59.5% πέρυσι.',
      ru: 'Клиру-Малунта на 89.6% (1.79 МКМ) — без изменений. Рост с 59.5% год назад.',
    },
    'Solea': {
      en: 'Solea at 88.2% (3.93 MCM) — down slightly as the dry season progresses. Up from 48.1% last year — 1.83× year-over-year improvement.',
      el: 'Η Σολέα στο 88.2% (3.93 ΕΚΜ) — ελαφριά υποχώρηση. Αύξηση από 48.1% πέρυσι — 1.83× βελτίωση.',
      ru: 'Солеа на 88.2% (3.93 МКМ) — небольшое снижение. Рост с 48.1% год назад — улучшение в 1.83×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (7 — 9 Σεπτεμβρίου 2026)

Δελτίο Τετάρτης, καλύπτοντας δύο ημέρες από τη Δευτέρα: συνολική αποθήκευση **37.2%** (108.2 ΕΚΜ) — από 37.4% (108.6 ΕΚΜ) στις 7 Σεπτεμβρίου, απώλεια περίπου 0.4 ΕΚΜ σε δύο ημέρες, στον ίδιο αργό ρυθμό των τελευταίων εβδομάδων. Ο [Μαυροκόλυμπος](/el/dam/mavrokolympos/) είχε ξανά τη μεγαλύτερη πτώση, -1.3μ.π. στο 32.9% — τρίτη συνεχόμενη περίοδος στην κορυφή της πτώσης. Ο [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) έφυγε από το οροπέδιο υπερχείλισης στο 99.2%, μετά από δύο εβδομάδες στο 100%. Ο [Αρμίνου](/el/dam/arminou/), ο μόνος που ανέβηκε την προηγούμενη εβδομάδα, υποχώρησε κι αυτός ελαφρά στο 58.6%. Το χάσμα με πέρυσι διευρύνθηκε ελαφρά στις **23.3 μονάδες**. Εισροή σεζόν: 116.6 ΕΚΜ (Αύγ-Σεπ μέχρι στιγμής: 1.15 ΕΚΜ). Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι 7 Σεπτεμβρίου):**
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **32.9%** (-1.3μ.π.) — η μεγαλύτερη πτώση, τρίτη συνεχόμενη περίοδος
- [Αγία Μαρίνα](/el/dam/agia-marina/) **55.0%** (-1.0μ.π.) — η πολυεβδομαδιαία πτώση συνεχίζεται
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **99.2%** (-0.8μ.π.) — έφυγε από το οροπέδιο υπερχείλισης μετά από δύο εβδομάδες στο 100%
- [Αργάκα](/el/dam/argaka/) **53.3%** (-0.8μ.π.) — συνεχίζεται η πτώση
- [Ξυλιάτος](/el/dam/xyliatos/) **80.3%** (-0.9μ.π.) — σταθερή υποχώρηση
- [Αχνά](/el/dam/achna/) **1.2%** — αμετάβλητη, μηδέν εισροή όλη τη σεζόν

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (7 — 9 сентября 2026)

Бюллетень среды, за два дня после понедельника: общий запас **37.2%** (108.2 МКМ) — против 37.4% (108.6 МКМ) 7 сентября, потеря около 0.4 МКМ за два дня, тот же медленный темп последних недель. [Мавроколимпос](/ru/dam/mavrokolympos/) снова показал крупнейшее снижение, -1.3пп до 32.9% — третий период подряд во главе падения. [Калопанайотис](/ru/dam/kalopanagiotis/) сошёл с плато перелива до 99.2% после двух недель на уровне 100%. [Арминоу](/ru/dam/arminou/), единственный, кто рос на прошлой неделе, тоже немного откатился — до 58.6%. Разрыв с прошлым годом немного увеличился — до **23.3 пункта**. Приток сезона: 116.6 МКМ (авг-сен пока: 1.15 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за период с 7 сентября):**
- [Мавроколимпос](/ru/dam/mavrokolympos/) **32.9%** (-1.3пп) — крупнейшее снижение, третий период подряд
- [Агия Марина](/ru/dam/agia-marina/) **55.0%** (-1.0пп) — многонедельное снижение продолжается
- [Калопанайотис](/ru/dam/kalopanagiotis/) **99.2%** (-0.8пп) — сошёл с плато перелива после двух недель на уровне 100%
- [Аргака](/ru/dam/argaka/) **53.3%** (-0.8пп) — снижение продолжается
- [Ксилиатос](/ru/dam/xyliatos/) **80.3%** (-0.9пп) — устойчивый откат
- [Ахна](/ru/dam/achna/) **1.2%** — без изменений, без притока за весь сезон

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (September 7 — September 9, 2026)

Wednesday's bulletin, covering two days since Monday's: total storage at **37.2%** (108.2 MCM) — down from 37.4% (108.6 MCM) on September 7, a loss of roughly 0.4 MCM over two days, in line with the recent slow drawdown pace. [Mavrokolympos](/dam/mavrokolympos/) again posted the steepest drop, down 1.3pp to 32.9% — a third straight period leading the slide. [Kalopanagiotis](/dam/kalopanagiotis/) slipped off its overflow plateau to 99.2%, ending a two-week stretch at 100%. [Arminou](/dam/arminou/), last week's lone riser, also eased back slightly to 58.6%. The gap over last year widened slightly to **23.3 points**. Season inflow: 116.6 MCM (Aug-Sep so far: 1.15 MCM). The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. September 7):**
- [Mavrokolympos](/dam/mavrokolympos/) **32.9%** (-1.3pp) — steepest drop, a third straight period
- [Agia Marina](/dam/agia-marina/) **55.0%** (-1.0pp) — multi-week slide continues
- [Kalopanagiotis](/dam/kalopanagiotis/) **99.2%** (-0.8pp) — off its overflow plateau after two weeks at 100%
- [Argaka](/dam/argaka/) **53.3%** (-0.8pp) — continuing to slide
- [Xyliatos](/dam/xyliatos/) **80.3%** (-0.9pp) — steady pullback
- [Achna](/dam/achna/) **1.2%** — unchanged, zero inflow all season

🔗 https://fragmata.info
`;
};

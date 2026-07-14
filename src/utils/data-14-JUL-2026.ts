import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.017, totalSince: 25.891 }, storage: { current: { amount: 47.184, percentage: 41.0 }, lastYear: { amount: 18.273, percentage: 15.9 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.197 }, storage: { current: { amount: 4.162, percentage: 24.3 }, lastYear: { amount: 3.050, percentage: 17.8 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.724 }, storage: { current: { amount: 2.536, percentage: 18.3 }, lastYear: { amount: 2.262, percentage: 16.3 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.004, totalSince: 3.754 }, storage: { current: { amount: 5.451, percentage: 35.2 }, lastYear: { amount: 5.112, percentage: 33.0 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.017, totalSince: 8.976 }, storage: { current: { amount: 7.757, percentage: 57.5 }, lastYear: { amount: 2.254, percentage: 16.7 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.000, totalSince: 22.178 }, storage: { current: { amount: 2.469, percentage: 57.4 }, lastYear: { amount: 2.396, percentage: 55.7 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.620 }, storage: { current: { amount: 1.719, percentage: 50.6 }, lastYear: { amount: 1.059, percentage: 31.1 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.127, percentage: 1.9 }, lastYear: { amount: 0.382, percentage: 5.6 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.007, totalSince: 20.274 }, storage: { current: { amount: 21.242, percentage: 40.6 }, lastYear: { amount: 9.411, percentage: 18.0 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.639 }, storage: { current: { amount: 8.569, percentage: 49.9 }, lastYear: { amount: 3.405, percentage: 19.8 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.605, percentage: 73.6 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 11.237, percentage: 46.8 }, lastYear: { amount: 4.624, percentage: 19.3 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.871, percentage: 88.0 }, lastYear: { amount: 0.185, percentage: 18.7 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.766, percentage: 89.1 }, lastYear: { amount: 0.217, percentage: 25.2 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.257, percentage: 86.2 }, lastYear: { amount: 0.061, percentage: 20.5 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.534, percentage: 90.8 }, lastYear: { amount: 0.018, percentage: 1.1 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.493 }, storage: { current: { amount: 1.343, percentage: 93.9 }, lastYear: { amount: 0.183, percentage: 12.8 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.312 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.174, percentage: 47.9 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.647 }, storage: { current: { amount: 2.680, percentage: 95.7 }, lastYear: { amount: 0.772, percentage: 27.6 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: -0.002, totalSince: 1.151 }, storage: { current: { amount: 1.931, percentage: 96.6 }, lastYear: { amount: 1.320, percentage: 66.0 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.002, totalSince: 2.624 }, storage: { current: { amount: 4.210, percentage: 94.5 }, lastYear: { amount: 2.434, percentage: 54.6 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through July 14, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:0.718, "Aug-Sep":0.0 }, total:115.101 },
];

export const getReportDate = (): string => "14-JUL-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 41.0% (47.2 MCM) — essentially flat, 25.1pp above last year\'s 15.9%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 41.0% (47.2 ΕΚΜ) — σχεδόν αμετάβλητος. 25.1μ.π. πάνω από πέρυσι (15.9%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 41.0% (47.2 МКМ) — почти без изменений. +25.1пп выше прошлогодних 15.9%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 24.3% (4.16 MCM) — stable, well above last year\'s 17.8%. Seasonal inflow 4.20 MCM, slow drawdown continues.',
      el: 'Ο Καλαβασός στο 24.3% (4.16 ΕΚΜ) — σταθερός, πάνω από πέρυσι (17.8%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 24.3% (4.16 МКМ) — стабильно, выше прошлогодних 17.8%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.3% (2.54 MCM) — essentially unchanged, above last year\'s 16.3%. Seasonal inflow 1.72 MCM.',
      el: 'Η Λεύκαρα στο 18.3% (2.54 ΕΚΜ) — αμετάβλητη, πάνω από πέρυσι (16.3%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Лефкара на 18.3% (2.54 МКМ) — без изменений, выше прошлогодних 16.3%. Приток 1.72 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 35.2% (5.45 MCM) — easing in dry season; 2.2pp above last year\'s 33.0%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 35.2% (5.45 ΕΚΜ) — υποχωρεί στην ξηρή περίοδο, 2.2μ.π. πάνω από πέρυσι (33.0%).',
      ru: 'Дипотамос на 35.2% (5.45 МКМ) — снижение в сухой сезон, +2.2пп выше прошлогодних 33.0%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 57.5% (7.76 MCM) — holding near season high, 40.8pp above last year\'s 16.7%. Highest level since 2020.',
      el: 'Η Γερμασόγεια στο 57.5% (7.76 ΕΚΜ) — κοντά στο μέγιστο σεζόν. 40.8μ.π. πάνω από πέρυσι (16.7%).',
      ru: 'Гермасойя на 57.5% (7.76 МКМ) — вблизи максимума сезона. +40.8пп выше прошлогодних 16.7%.',
    },
    'Arminou': {
      en: 'Arminou at 57.4% (2.47 MCM) — easing slightly off its season high, still 1.7pp above last year\'s 55.7%. Season inflow 22.2 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 57.4% (2.47 ΕΚΜ) — ελαφρά υποχώρηση από το μέγιστο σεζόν. Εισροή σεζόν: 22.2 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 57.4% (2.47 МКМ) — небольшое снижение от максимума сезона. Приток сезона: 22.2 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 50.6% (1.72 MCM) — continuing decline from season peak; still 19.5pp above last year\'s 31.1%.',
      el: 'Η Πολεμίδια στο 50.6% (1.72 ΕΚΜ) — συνεχής υποχώρηση από το μέγιστο. 19.5μ.π. πάνω από πέρυσι (31.1%).',
      ru: 'Полемидия на 50.6% (1.72 МКМ) — продолжает снижаться от пика; +19.5пп выше прошлогодних 31.1%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.9% (0.13 MCM), zero inflow all season. Far below last year\'s 5.6%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.9% (0.13 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (5.6%).',
      ru: 'Ахна критически низкая — 1.9% (0.13 МКМ), без притока за сезон. Далеко ниже прошлогодних 5.6%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 40.6% (21.24 MCM) — slow drawdown, 22.6pp above last year\'s 18.0%. Seasonal inflow 20.3 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 40.6% (21.24 ΕΚΜ) — αργή υποχώρηση, 22.6μ.π. πάνω από πέρυσι (18.0%).',
      ru: 'Аспрокреммос на 40.6% (21.24 МКМ) — медленное снижение, +22.6пп выше прошлогодних 18.0%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 49.9% (8.57 MCM) — easing from season high, 30.1pp above last year\'s 19.8%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 49.9% (8.57 ΕΚΜ) — υποχωρεί ελαφρά, 30.1μ.π. πάνω από πέρυσι (19.8%).',
      ru: 'Каннавиу на 49.9% (8.57 МКМ) — снижается от пика, +30.1пп выше прошлогодних 19.8%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 73.6% (1.61 MCM) — steady decline continues. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 73.6% (1.61 ΕΚΜ) — σταθερή υποχώρηση συνεχίζεται. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 73.6% (1.61 МКМ) — устойчивое снижение продолжается. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 46.8% (11.24 MCM) — drifting further below 50%; 27.5pp above last year\'s 19.3%.',
      el: 'Ο Εύρετου στο 46.8% (11.24 ΕΚΜ) — υποχωρεί περαιτέρω κάτω από 50%. 27.5μ.π. πάνω από πέρυσι (19.3%).',
      ru: 'Эвретоу на 46.8% (11.24 МКМ) — опускается дальше ниже 50%. +27.5пп выше прошлогодних 19.3%.',
    },
    'Argaka': {
      en: 'Argaka at 88.0% (0.87 MCM) — easing further off full, down 0.3pp from July 13. Up from 18.7% last year — more than 4× year over year.',
      el: 'Η Αργάκα στο 88.0% (0.87 ΕΚΜ) — αργή υποχώρηση, -0.3μ.π. από τις 13 Ιουλίου. Από 18.7% πέρυσι — πάνω από 4× ανάκαμψη.',
      ru: 'Аргака на 88.0% (0.87 МКМ) — небольшое снижение, -0.3пп с 13 июля. Год назад 18.7% — более чем 4-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 89.1% (0.77 MCM) — easing further below full, down 0.4pp. Up from 25.2% last year — more than tripled.',
      el: 'Ο Πόμος στο 89.1% (0.77 ΕΚΜ) — αργή υποχώρηση κάτω από 100%, -0.4μ.π. Από 25.2% πέρυσι — πάνω από τριπλασιασμός.',
      ru: 'Помос на 89.1% (0.77 МКМ) — медленное снижение ниже полного уровня, -0.4пп. Год назад 25.2%.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 86.2% (0.26 MCM) — unchanged for days. Up from 20.5% last year — more than 4× year-over-year recovery.',
      el: 'Η Αγία Μαρίνα στο 86.2% (0.26 ΕΚΜ) — αμετάβλητη επί ημέρες. Από 20.5% πέρυσι — πάνω από 4× ανάκαμψη.',
      ru: 'Агия Марина на 86.2% (0.26 МКМ) — без изменений уже несколько дней. Год назад 20.5% — рост более чем в 4×.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 90.8% (1.53 MCM) — slow decline from peak. Was 1.1% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 90.8% (1.53 ΕΚΜ) — αργή υποχώρηση. Από 1.1% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 90.8% (1.53 МКМ) — медленное снижение от пика. Год назад 1.1% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 93.9% (1.34 MCM) — very slow decline continues. Was 12.8% last year — 7.3× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 93.9% (1.34 ΕΚΜ) — πολύ αργή υποχώρηση συνεχίζεται. Από 12.8% πέρυσι — 7.3× ανάκαμψη.',
      ru: 'Ксилиатос на 93.9% (1.34 МКМ) — очень медленное снижение продолжается. Год назад 12.8% — восстановление в 7.3×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 47.9% last year, holding at capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 47.9% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 47.9% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 95.7% (2.68 MCM) — easing slowly from full. Was 27.6% last year — 3.5× year-over-year recovery.',
      el: 'Ο Ταμασός στο 95.7% (2.68 ΕΚΜ) — αργή υποχώρηση από το πλήρες. Από 27.6% πέρυσι — 3.5× ανάκαμψη.',
      ru: 'Тамассос на 95.7% (2.68 МКМ) — медленное снижение от полного уровня. Год назад 27.6% — восстановление в 3.5×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 96.6% (1.93 MCM) — steady near full. Up from 66.0% last year.',
      el: 'Η Κλήρου-Μαλούντα στο 96.6% (1.93 ΕΚΜ) — σταθερή κοντά στο πλήρες. Αύξηση από 66.0% πέρυσι.',
      ru: 'Клиру-Малунта на 96.6% (1.93 МКМ) — стабильно у полного уровня. Рост с 66.0% год назад.',
    },
    'Solea': {
      en: 'Solea at 94.5% (4.21 MCM) — holding near full as dry season progresses. Up from 54.6% last year — 1.73× year-over-year improvement.',
      el: 'Η Σολέα στο 94.5% (4.21 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 54.6% πέρυσι — 1.73× βελτίωση.',
      ru: 'Солеа на 94.5% (4.21 МКМ) — удерживается вблизи полного уровня. Рост с 54.6% год назад — улучшение в 1.73×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (13 — 14 Ιουλίου 2026)

Συνολική αποθήκευση **41.0%** (119.2 ΕΚΜ) — σχεδόν αμετάβλητη από 41.1% χθες, καθώς η καλοκαιρινή αποστράγγιση παραμένει η πιο αργή εδώ και χρόνια. Το χάσμα με πέρυσι παραμένει κοντά στο **+22.7μ.π.** Εισροή σεζόν 25/26: **115.1 ΕΚΜ** (Ιούλιος: 0.72 ΕΚΜ). Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**, αμετάβλητη.

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 57.4%** (-0.1μ.π.) — ελαφρά υποχώρηση από το μέγιστο σεζόν, μετά από πολλές διαδοχικές ημέρες ανόδου
- [Αργάκα](/el/dam/argaka/) **88.0%** (-0.3μ.π.) — συνεχίζει την αργή πτώση από το πλήρες
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — παραμένει το μόνο φράγμα σε υπερχείλιση
- [Αχνά](/el/dam/achna/) **1.9%** — αμετάβλητη, μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [Government investing €168m to tackle water shortage, minister says](https://cyprus-mail.com/2026/07/05/government-investing-e168m-to-tackle-water-shortage-minister-says) — Cyprus Mail
- [Τελευταίες βροχές: Μικρή συνεισφορά στα φράγματα, όμως «στρώνουν χαλί» για πρώιμες μεγάλες εισροές](https://www.politis.com.cy/politis-news/cyprus/1018398/teleftaies-vrokhes-mikri-sineisfora-sta-fraghmata-omos-strwnoyn-khali-ghia-prwimes-meghales-eisroes) — Politis
- [MPs warn water crisis threatens future of farming](https://cyprus-mail.com/2026/06/30/mps-warn-water-crisis-threatens-future-of-farming) — Cyprus Mail
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (13 — 14 июля 2026)

Общий запас **41.0%** (119.2 МКМ) — почти без изменений с 41.1% вчера, летний расход по-прежнему самый медленный за последние годы. Разрыв с прошлым годом держится около **+22.7пп**. Приток сезона 25/26: **115.1 МКМ** (июль: 0.72 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) держится на **20.44 МКМ**, без изменений.

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 57.4%** (-0.1пп) — небольшое снижение от максимума сезона после нескольких дней роста подряд
- [Аргака](/ru/dam/argaka/) **88.0%** (-0.3пп) — продолжает медленно снижаться от полного уровня
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — по-прежнему единственное переливающееся водохранилище
- [Ахна](/ru/dam/achna/) **1.9%** — без изменений, без притока за весь сезон

**В СМИ:**
- [Government investing €168m to tackle water shortage, minister says](https://cyprus-mail.com/2026/07/05/government-investing-e168m-to-tackle-water-shortage-minister-says) — Cyprus Mail
- [Летние дожди дают небольшую подпитку водохранилищам, но готовят почву для больших притоков](https://www.politis.com.cy/politis-news/cyprus/1018398/teleftaies-vrokhes-mikri-sineisfora-sta-fraghmata-omos-strwnoyn-khali-ghia-prwimes-meghales-eisroes) — Politis
- [MPs warn water crisis threatens future of farming](https://cyprus-mail.com/2026/06/30/mps-warn-water-crisis-threatens-future-of-farming) — Cyprus Mail
`;
  }
  return `
### Recent Changes (July 13 — July 14, 2026)

Total storage held at **41.0%** (119.2 MCM) — essentially unchanged from 41.1% yesterday, keeping the slowest summer drawdown pace in years. The gap over last year holds near **+22.7pp**. Season total inflow: **115.1 MCM** (July so far: 0.72 MCM). The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**, unchanged.

**Notable movements:**
- **[Arminou](/dam/arminou/) 57.4%** (-0.1pp) — easing slightly off its season high after several straight days of gains
- [Argaka](/dam/argaka/) **88.0%** (-0.3pp) — continues its slow slide off full capacity
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing
- [Achna](/dam/achna/) **1.9%** — unchanged, zero inflow all season

**In the media:**
- [Government investing €168m to tackle water shortage, minister says](https://cyprus-mail.com/2026/07/05/government-investing-e168m-to-tackle-water-shortage-minister-says) — Cyprus Mail
- [Summer rains give reservoirs a small boost, but set up conditions for larger inflows ahead](https://www.politis.com.cy/politis-news/cyprus/1018398/teleftaies-vrokhes-mikri-sineisfora-sta-fraghmata-omos-strwnoyn-khali-ghia-prwimes-meghales-eisroes) — Politis
- [MPs warn water crisis threatens future of farming](https://cyprus-mail.com/2026/06/30/mps-warn-water-crisis-threatens-future-of-farming) — Cyprus Mail
`;
};

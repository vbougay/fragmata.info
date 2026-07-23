import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.014, totalSince: 26.041 }, storage: { current: { amount: 46.851, percentage: 40.7 }, lastYear: { amount: 17.744, percentage: 15.4 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.197 }, storage: { current: { amount: 4.122, percentage: 24.1 }, lastYear: { amount: 2.928, percentage: 17.1 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 2.521, percentage: 18.2 }, lastYear: { amount: 2.237, percentage: 16.2 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.750 }, storage: { current: { amount: 5.299, percentage: 34.2 }, lastYear: { amount: 4.938, percentage: 31.9 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 7.652, percentage: 56.7 }, lastYear: { amount: 2.120, percentage: 15.7 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.009, totalSince: 22.271 }, storage: { current: { amount: 2.523, percentage: 58.7 }, lastYear: { amount: 2.347, percentage: 54.6 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.680, percentage: 49.4 }, lastYear: { amount: 1.039, percentage: 30.6 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.127, percentage: 1.9 }, lastYear: { amount: 0.368, percentage: 5.4 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 21.042, percentage: 40.2 }, lastYear: { amount: 9.021, percentage: 17.2 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 8.439, percentage: 49.2 }, lastYear: { amount: 3.292, percentage: 19.2 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.475, percentage: 67.7 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 11.032, percentage: 46.0 }, lastYear: { amount: 4.474, percentage: 18.6 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.800, percentage: 80.8 }, lastYear: { amount: 0.153, percentage: 15.5 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.731, percentage: 85.0 }, lastYear: { amount: 0.201, percentage: 23.4 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.257, percentage: 86.2 }, lastYear: { amount: 0.061, percentage: 20.5 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.502, percentage: 88.9 }, lastYear: { amount: 0.013, percentage: 0.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.317, percentage: 92.1 }, lastYear: { amount: 0.167, percentage: 11.7 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.312 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.153, percentage: 42.1 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.632, percentage: 94.0 }, lastYear: { amount: 0.748, percentage: 26.7 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.904, percentage: 95.2 }, lastYear: { amount: 1.298, percentage: 64.9 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 4.171, percentage: 93.6 }, lastYear: { amount: 2.388, percentage: 53.6 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through July 22, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:0.912, "Aug-Sep":0.0 }, total:115.295 },
];

export const getReportDate = (): string => "22-JUL-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 40.7% (46.9 MCM) — easing slightly, 25.3pp above last year\'s 15.4%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 40.7% (46.9 ΕΚΜ) — ελαφρά υποχώρηση. 25.3μ.π. πάνω από πέρυσι (15.4%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 40.7% (46.9 МКМ) — небольшое снижение. +25.3пп выше прошлогодних 15.4%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 24.1% (4.12 MCM) — stable, well above last year\'s 17.1%. Seasonal inflow 4.20 MCM, slow drawdown continues.',
      el: 'Ο Καλαβασός στο 24.1% (4.12 ΕΚΜ) — σταθερός, πάνω από πέρυσι (17.1%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 24.1% (4.12 МКМ) — стабильно, выше прошлогодних 17.1%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.2% (2.52 MCM) — essentially unchanged for weeks, above last year\'s 16.2%. Seasonal inflow 1.72 MCM.',
      el: 'Η Λεύκαρα στο 18.2% (2.52 ΕΚΜ) — αμετάβλητη επί εβδομάδες, πάνω από πέρυσι (16.2%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Лефкара на 18.2% (2.52 МКМ) — без изменений неделями, выше прошлогодних 16.2%. Приток 1.72 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 34.2% (5.30 MCM) — easing in dry season; 2.3pp above last year\'s 31.9%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 34.2% (5.30 ΕΚΜ) — υποχωρεί στην ξηρή περίοδο, 2.3μ.π. πάνω από πέρυσι (31.9%).',
      ru: 'Дипотамос на 34.2% (5.30 МКМ) — снижение в сухой сезон, +2.3пп выше прошлогодних 31.9%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 56.7% (7.65 MCM) — gradual summer decline, 41.0pp above last year\'s 15.7%. Highest mid-July level since 2020.',
      el: 'Η Γερμασόγεια στο 56.7% (7.65 ΕΚΜ) — σταδιακή υποχώρηση. 41.0μ.π. πάνω από πέρυσι (15.7%).',
      ru: 'Гермасойя на 56.7% (7.65 МКМ) — постепенное летнее снижение. +41.0пп выше прошлогодних 15.7%.',
    },
    'Arminou': {
      en: 'Arminou at 58.7% (2.52 MCM) — still rising, +0.1pp on continued inflow. Season inflow 22.3 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 58.7% (2.52 ΕΚΜ) — συνεχίζει να ανεβαίνει, +0.1μ.π. Εισροή σεζόν: 22.3 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 58.7% (2.52 МКМ) — продолжает расти, +0.1пп. Приток сезона: 22.3 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 49.4% (1.68 MCM) — slipped further below the 50% mark; still 18.8pp above last year\'s 30.6%. Slow decline from peak.',
      el: 'Η Πολεμίδια στο 49.4% (1.68 ΕΚΜ) — παραμένει κάτω από το 50%. 18.8μ.π. πάνω από πέρυσι (30.6%).',
      ru: 'Полемидия на 49.4% (1.68 МКМ) — держится ниже отметки 50%; +18.8пп выше прошлогодних 30.6%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.9% (0.13 MCM), zero inflow all season. Far below last year\'s 5.4%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.9% (0.13 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (5.4%).',
      ru: 'Ахна критически низкая — 1.9% (0.13 МКМ), без притока за сезон. Далеко ниже прошлогодних 5.4%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 40.2% (21.04 MCM) — slow drawdown, 23.0pp above last year\'s 17.2%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 40.2% (21.04 ΕΚΜ) — αργή υποχώρηση, 23.0μ.π. πάνω από πέρυσι (17.2%).',
      ru: 'Аспрокреммос на 40.2% (21.04 МКМ) — медленное снижение, +23.0пп выше прошлогодних 17.2%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 49.2% (8.44 MCM) — eased slightly below 50%, still 30.0pp above last year\'s 19.2%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 49.2% (8.44 ΕΚΜ) — υποχώρησε κάτω από το 50%, 30.0μ.π. πάνω από πέρυσι (19.2%).',
      ru: 'Каннавиу на 49.2% (8.44 МКМ) — немного снизился ниже 50%, +30.0пп выше прошлогодних 19.2%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 67.7% (1.48 MCM) — down a full point, the largest single-day drop across all dams. Was 0% last year — exceptional recovery.',
      el: 'Ο Μαυροκόλυμπος στο 67.7% (1.48 ΕΚΜ) — μεγαλύτερη πτώση ημέρας. Από 0% πέρυσι.',
      ru: 'Мавроколимпос на 67.7% (1.48 МКМ) — крупнейшее суточное падение среди всех водохранилищ. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 46.0% (11.03 MCM) — drifting steadily lower through the dry season; still 27.4pp above last year\'s 18.6%.',
      el: 'Ο Εύρετου στο 46.0% (11.03 ΕΚΜ) — σταθερή υποχώρηση στην ξηρή περίοδο. 27.4μ.π. πάνω από πέρυσι (18.6%).',
      ru: 'Эвретоу на 46.0% (11.03 МКМ) — устойчивое снижение в сухой сезон. +27.4пп выше прошлогодних 18.6%.',
    },
    'Argaka': {
      en: 'Argaka at 80.8% (0.80 MCM) — continued easing after last week\'s drop. Up from 15.5% last year — a 5.2× year-over-year recovery.',
      el: 'Η Αργάκα στο 80.8% (0.80 ΕΚΜ) — συνεχίζει να υποχωρεί. Από 15.5% πέρυσι — 5.2× ανάκαμψη.',
      ru: 'Аргака на 80.8% (0.80 МКМ) — продолжает снижаться. Год назад 15.5% — 5.2-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 85.0% (0.73 MCM) — easing back from near-full. Up from 23.4% last year — more than 3.6× year over year.',
      el: 'Ο Πόμος στο 85.0% (0.73 ΕΚΜ) — υποχωρεί από το σχεδόν πλήρες. Από 23.4% πέρυσι — πάνω από 3.6× ανάκαμψη.',
      ru: 'Помос на 85.0% (0.73 МКМ) — отступает от почти полного уровня. Год назад 23.4% — рост более чем в 3.6×.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 86.2% (0.26 MCM) — unchanged for over a week. Up from 20.5% last year — more than 4× year-over-year recovery.',
      el: 'Η Αγία Μαρίνα στο 86.2% (0.26 ΕΚΜ) — αμετάβλητη πάνω από εβδομάδα. Από 20.5% πέρυσι — πάνω από 4× ανάκαμψη.',
      ru: 'Агия Марина на 86.2% (0.26 МКМ) — без изменений больше недели. Год назад 20.5% — рост более чем в 4×.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 88.9% (1.50 MCM) — continued slow decline below 90%. Was 0.8% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 88.9% (1.50 ΕΚΜ) — αργή υποχώρηση κάτω από το 90%. Από 0.8% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 88.9% (1.50 МКМ) — продолжает медленно снижаться ниже 90%. Год назад 0.8% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 92.1% (1.32 MCM) — very slow decline continues. Was 11.7% last year — a 7.9× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 92.1% (1.32 ΕΚΜ) — πολύ αργή υποχώρηση συνεχίζεται. Από 11.7% πέρυσι — 7.9× ανάκαμψη.',
      ru: 'Ксилиатос на 92.1% (1.32 МКМ) — очень медленное снижение продолжается. Год назад 11.7% — восстановление в 7.9×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 42.1% last year, holding at capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 42.1% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 42.1% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 94.0% (2.63 MCM) — easing slowly from full. Was 26.7% last year — a 3.5× year-over-year recovery.',
      el: 'Ο Ταμασός στο 94.0% (2.63 ΕΚΜ) — αργή υποχώρηση από το πλήρες. Από 26.7% πέρυσι — 3.5× ανάκαμψη.',
      ru: 'Тамассос на 94.0% (2.63 МКМ) — медленное снижение от полного уровня. Год назад 26.7% — восстановление в 3.5×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 95.2% (1.90 MCM) — holding steady near full through the dry season. Up from 64.9% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 95.2% (1.90 ΕΚΜ) — σταθερή κοντά στο πλήρες. Αύξηση από 64.9% πέρυσι.',
      ru: 'Клиру-Малунта на 95.2% (1.90 МКМ) — стабильно у полного уровня. Рост с 64.9% год назад.',
    },
    'Solea': {
      en: 'Solea at 93.6% (4.17 MCM) — holding near full as dry season progresses. Up from 53.6% last year — 1.75× year-over-year improvement.',
      el: 'Η Σολέα στο 93.6% (4.17 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 53.6% πέρυσι — 1.75× βελτίωση.',
      ru: 'Солеа на 93.6% (4.17 МКМ) — удерживается вблизи полного уровня. Рост с 53.6% год назад — улучшение в 1.75×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (16 — 22 Ιουλίου 2026)

Δελτίο Τετάρτης: συνολική αποθήκευση **40.5%** (117.7 ΕΚΜ) — ακόμη μία αργή ημέρα υποχώρησης, μόλις -0.2 ΕΚΜ από την Τρίτη. Ο πιο αργός καλοκαιρινός ρυθμός εδώ και χρόνια συνεχίζεται αμετάβλητος. Το χάσμα με πέρυσι κρατά στο **+22.9μ.π.** Εισροή σεζόν 25/26: **115.3 ΕΚΜ** (Ιούλιος: 0.91 ΕΚΜ). Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα:**
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **67.7%** (-1.0μ.π.) — η μεγαλύτερη πτώση ημέρας, μετά από εβδομάδες κοντά στο 70%
- [Αρμίνου](/el/dam/arminou/) **58.7%** (+0.1μ.π.) — συνεχίζει να ανεβαίνει, το μόνο φράγμα σε άνοδο
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** — παραμένει το μόνο φράγμα σε υπερχείλιση
- [Αργάκα](/el/dam/argaka/) **80.8%** (-0.5μ.π.) και [Πόμος](/el/dam/pomos/) **85.0%** (-0.3μ.π.) — συνεχής σταδιακή υποχώρηση
- [Αχνά](/el/dam/achna/) **1.9%** — αμετάβλητη, μηδέν εισροή όλη τη σεζόν
- Τα υπόλοιπα φράγματα κινήθηκαν κατά 0.2μ.π. ή λιγότερο

**Στα μέσα:**
- [Cyprus targets full reliance upon desalination plants by next year](https://cyprus-mail.com/2026/06/29/cyprus-targets-full-reliance-upon-desalination-plants-by-next-year) — Cyprus Mail
- [Μετρήσεις βροχόπτωσης: Ιούλιος στο 215% του κανονικού](https://kitasweather.com/news/fragmata-vroxoptosi/metriseis-vroxoptosis-telefteou-triimerou-plirotita-fragmaton-20-7/) — Cyprus Weather
- [MPs warn water crisis threatens future of farming](https://cyprus-mail.com/2026/06/30/mps-warn-water-crisis-threatens-future-of-farming) — Cyprus Mail
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (16 — 22 июля 2026)

Бюллетень среды: общий запас **40.5%** (117.7 МКМ) — ещё один медленный день снижения, всего -0.2 МКМ со вторника. Самый медленный летний расход за последние годы продолжается без изменений. Разрыв с прошлым годом держится на **+22.9пп**. Приток сезона 25/26: **115.3 МКМ** (июль: 0.91 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения:**
- [Мавроколимпос](/ru/dam/mavrokolympos/) **67.7%** (-1.0пп) — крупнейшее суточное падение, после недель у отметки 70%
- [Арминоу](/ru/dam/arminou/) **58.7%** (+0.1пп) — продолжает расти, единственное растущее водохранилище
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — по-прежнему единственное переливающееся водохранилище
- [Аргака](/ru/dam/argaka/) **80.8%** (-0.5пп) и [Помос](/ru/dam/pomos/) **85.0%** (-0.3пп) — продолжающееся постепенное снижение
- [Ахна](/ru/dam/achna/) **1.9%** — без изменений, без притока за весь сезон
- Остальные водохранилища изменились не более чем на 0.2пп

**В СМИ:**
- [Cyprus targets full reliance upon desalination plants by next year](https://cyprus-mail.com/2026/06/29/cyprus-targets-full-reliance-upon-desalination-plants-by-next-year) — Cyprus Mail
- [Измерения дождя: июль на уровне 215% от нормы](https://kitasweather.com/news/fragmata-vroxoptosi/metriseis-vroxoptosis-telefteou-triimerou-plirotita-fragmaton-20-7/) — Cyprus Weather
- [MPs warn water crisis threatens future of farming](https://cyprus-mail.com/2026/06/30/mps-warn-water-crisis-threatens-future-of-farming) — Cyprus Mail
`;
  }
  return `
### Recent Changes (July 16 — July 22, 2026)

Wednesday bulletin: total storage at **40.5%** (117.7 MCM) — another slow day of drawdown, down just 0.2 MCM from Tuesday, as the slowest summer drawdown in years continues unchanged. The gap over last year holds at **+22.9pp**. Season total inflow: **115.3 MCM** (July so far: 0.91 MCM). The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements:**
- [Mavrokolympos](/dam/mavrokolympos/) **67.7%** (-1.0pp) — the largest single-day drop, cooling off after weeks near 70%
- [Arminou](/dam/arminou/) **58.7%** (+0.1pp) — still rising, the only dam gaining
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing
- [Argaka](/dam/argaka/) **80.8%** (-0.5pp) and [Pomos](/dam/pomos/) **85.0%** (-0.3pp) — continued gradual easing
- [Achna](/dam/achna/) **1.9%** — unchanged, zero inflow all season
- Every other dam moved 0.2pp or less

**In the media:**
- [Cyprus targets full reliance upon desalination plants by next year](https://cyprus-mail.com/2026/06/29/cyprus-targets-full-reliance-upon-desalination-plants-by-next-year) — Cyprus Mail
- [Rainfall measurements: July running at 215% of normal](https://kitasweather.com/news/fragmata-vroxoptosi/metriseis-vroxoptosis-telefteou-triimerou-plirotita-fragmaton-20-7/) — Cyprus Weather
- [MPs warn water crisis threatens future of farming](https://cyprus-mail.com/2026/06/30/mps-warn-water-crisis-threatens-future-of-farming) — Cyprus Mail
`;
};

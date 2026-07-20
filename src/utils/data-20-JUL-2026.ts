import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.056, totalSince: 26.005 }, storage: { current: { amount: 46.944, percentage: 40.8 }, lastYear: { amount: 17.899, percentage: 15.6 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.197 }, storage: { current: { amount: 4.136, percentage: 24.2 }, lastYear: { amount: 2.942, percentage: 17.2 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 2.525, percentage: 18.2 }, lastYear: { amount: 2.245, percentage: 16.2 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.750 }, storage: { current: { amount: 5.333, percentage: 34.4 }, lastYear: { amount: 4.985, percentage: 32.2 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 7.667, percentage: 56.8 }, lastYear: { amount: 2.152, percentage: 15.9 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.029, totalSince: 22.253 }, storage: { current: { amount: 2.513, percentage: 58.4 }, lastYear: { amount: 2.362, percentage: 54.9 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.619 }, storage: { current: { amount: 1.697, percentage: 49.9 }, lastYear: { amount: 1.045, percentage: 30.7 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.127, percentage: 1.9 }, lastYear: { amount: 0.372, percentage: 5.5 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.243 }, storage: { current: { amount: 21.099, percentage: 40.3 }, lastYear: { amount: 9.114, percentage: 17.4 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 8.473, percentage: 49.4 }, lastYear: { amount: 3.320, percentage: 19.3 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 1.508, percentage: 69.2 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 11.083, percentage: 46.2 }, lastYear: { amount: 4.513, percentage: 18.8 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.811, percentage: 81.9 }, lastYear: { amount: 0.161, percentage: 16.3 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.738, percentage: 85.8 }, lastYear: { amount: 0.205, percentage: 23.8 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.257, percentage: 86.2 }, lastYear: { amount: 0.061, percentage: 20.5 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.508, percentage: 89.2 }, lastYear: { amount: 0.013, percentage: 0.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.322, percentage: 92.4 }, lastYear: { amount: 0.170, percentage: 11.9 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.312 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.157, percentage: 43.3 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.644, percentage: 94.4 }, lastYear: { amount: 0.754, percentage: 26.9 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.907, percentage: 95.4 }, lastYear: { amount: 1.305, percentage: 65.3 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 4.182, percentage: 93.9 }, lastYear: { amount: 2.397, percentage: 53.8 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through July 20, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:0.858, "Aug-Sep":0.0 }, total:115.241 },
];

export const getReportDate = (): string => "20-JUL-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 40.8% (46.9 MCM) — slow summer drawdown, 25.2pp above last year\'s 15.6%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 40.8% (46.9 ΕΚΜ) — αργή καλοκαιρινή υποχώρηση. 25.2μ.π. πάνω από πέρυσι (15.6%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 40.8% (46.9 МКМ) — медленный летний спад. +25.2пп выше прошлогодних 15.6%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 24.2% (4.14 MCM) — stable, well above last year\'s 17.2%. Seasonal inflow 4.20 MCM, slow drawdown continues.',
      el: 'Ο Καλαβασός στο 24.2% (4.14 ΕΚΜ) — σταθερός, πάνω από πέρυσι (17.2%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 24.2% (4.14 МКМ) — стабильно, выше прошлогодних 17.2%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.2% (2.53 MCM) — essentially unchanged for weeks, above last year\'s 16.2%. Seasonal inflow 1.72 MCM.',
      el: 'Η Λεύκαρα στο 18.2% (2.53 ΕΚΜ) — αμετάβλητη επί εβδομάδες, πάνω από πέρυσι (16.2%). Εισροή σεζόν 1.72 ΕΚΜ.',
      ru: 'Лефкара на 18.2% (2.53 МКМ) — без изменений неделями, выше прошлогодних 16.2%. Приток 1.72 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 34.4% (5.33 MCM) — easing in dry season; 2.2pp above last year\'s 32.2%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 34.4% (5.33 ΕΚΜ) — υποχωρεί στην ξηρή περίοδο, 2.2μ.π. πάνω από πέρυσι (32.2%).',
      ru: 'Дипотамос на 34.4% (5.33 МКМ) — снижение в сухой сезон, +2.2пп выше прошлогодних 32.2%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 56.8% (7.67 MCM) — gradual summer decline, 40.9pp above last year\'s 15.9%. Highest mid-July level since 2020.',
      el: 'Η Γερμασόγεια στο 56.8% (7.67 ΕΚΜ) — σταδιακή υποχώρηση. 40.9μ.π. πάνω από πέρυσι (15.9%).',
      ru: 'Гермасойя на 56.8% (7.67 МКМ) — постепенное летнее снижение. +40.9пп выше прошлогодних 15.9%.',
    },
    'Arminou': {
      en: 'Arminou at 58.4% (2.51 MCM) — the only dam rising, +1.2pp on fresh weekend inflow. Season inflow 22.3 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 58.4% (2.51 ΕΚΜ) — το μόνο φράγμα σε άνοδο, +1.2μ.π. με νέα εισροή. Εισροή σεζόν: 22.3 ΕΚΜ = 5.2× χωρητικότητα.',
      ru: 'Арминоу на 58.4% (2.51 МКМ) — единственное растущее водохранилище, +1.2пп. Приток сезона: 22.3 МКМ = 5.2× ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 49.9% (1.70 MCM) — slipped just below the 50% mark; still 19.2pp above last year\'s 30.7%. Slow decline from peak.',
      el: 'Η Πολεμίδια στο 49.9% (1.70 ΕΚΜ) — μόλις κάτω από το 50%. 19.2μ.π. πάνω από πέρυσι (30.7%).',
      ru: 'Полемидия на 49.9% (1.70 МКМ) — опустилась чуть ниже отметки 50%; +19.2пп выше прошлогодних 30.7%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.9% (0.13 MCM), zero inflow all season. Far below last year\'s 5.5%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.9% (0.13 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (5.5%).',
      ru: 'Ахна критически низкая — 1.9% (0.13 МКМ), без притока за сезон. Далеко ниже прошлогодних 5.5%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 40.3% (21.10 MCM) — slow drawdown, 22.9pp above last year\'s 17.4%. Seasonal inflow 20.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 40.3% (21.10 ΕΚΜ) — αργή υποχώρηση, 22.9μ.π. πάνω από πέρυσι (17.4%).',
      ru: 'Аспрокреммос на 40.3% (21.10 МКМ) — медленное снижение, +22.9пп выше прошлогодних 17.4%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 49.4% (8.47 MCM) — slipped below 50%, still 30.1pp above last year\'s 19.3%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 49.4% (8.47 ΕΚΜ) — κάτω από το 50%, 30.1μ.π. πάνω από πέρυσι (19.3%).',
      ru: 'Каннавиу на 49.4% (8.47 МКМ) — опустился ниже 50%, +30.1пп выше прошлогодних 19.3%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 69.2% (1.51 MCM) — fell below 70%, the sharpest weekend decline. Was 0% last year — exceptional recovery.',
      el: 'Ο Μαυροκόλυμπος στο 69.2% (1.51 ΕΚΜ) — κάτω από το 70%, η μεγαλύτερη πτώση του διημέρου. Από 0% πέρυσι.',
      ru: 'Мавроколимпос на 69.2% (1.51 МКМ) — упал ниже 70%, самое резкое снижение за выходные. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 46.2% (11.08 MCM) — drifting steadily lower through the dry season; still 27.4pp above last year\'s 18.8%.',
      el: 'Ο Εύρετου στο 46.2% (11.08 ΕΚΜ) — σταθερή υποχώρηση στην ξηρή περίοδο. 27.4μ.π. πάνω από πέρυσι (18.8%).',
      ru: 'Эвретоу на 46.2% (11.08 МКМ) — устойчивое снижение в сухой сезон. +27.4пп выше прошлогодних 18.8%.',
    },
    'Argaka': {
      en: 'Argaka at 81.9% (0.81 MCM) — the biggest weekend drop at -5.6pp. Up from 16.3% last year — a 5× year-over-year recovery.',
      el: 'Η Αργάκα στο 81.9% (0.81 ΕΚΜ) — η μεγαλύτερη πτώση του διημέρου (-5.6μ.π.). Από 16.3% πέρυσι — 5× ανάκαμψη.',
      ru: 'Аргака на 81.9% (0.81 МКМ) — крупнейшее падение за выходные (-5.6пп). Год назад 16.3% — 5-кратный рост.',
    },
    'Pomos': {
      en: 'Pomos at 85.8% (0.74 MCM) — easing back from near-full. Up from 23.8% last year — more than 3.6× year over year.',
      el: 'Ο Πόμος στο 85.8% (0.74 ΕΚΜ) — υποχωρεί από το σχεδόν πλήρες. Από 23.8% πέρυσι — πάνω από 3.6× ανάκαμψη.',
      ru: 'Помос на 85.8% (0.74 МКМ) — отступает от почти полного уровня. Год назад 23.8% — рост более чем в 3.6×.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 86.2% (0.26 MCM) — unchanged for over a week. Up from 20.5% last year — more than 4× year-over-year recovery.',
      el: 'Η Αγία Μαρίνα στο 86.2% (0.26 ΕΚΜ) — αμετάβλητη πάνω από εβδομάδα. Από 20.5% πέρυσι — πάνω από 4× ανάκαμψη.',
      ru: 'Агия Марина на 86.2% (0.26 МКМ) — без изменений больше недели. Год назад 20.5% — рост более чем в 4×.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 89.2% (1.51 MCM) — slipped below 90% in slow decline. Was 0.8% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 89.2% (1.51 ΕΚΜ) — κάτω από το 90% σε αργή υποχώρηση. Από 0.8% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 89.2% (1.51 МКМ) — опустилась ниже 90% в медленном снижении. Год назад 0.8% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 92.4% (1.32 MCM) — very slow decline continues. Was 11.9% last year — a 7.8× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 92.4% (1.32 ΕΚΜ) — πολύ αργή υποχώρηση συνεχίζεται. Από 11.9% πέρυσι — 7.8× ανάκαμψη.',
      ru: 'Ксилиатос на 92.4% (1.32 МКМ) — очень медленное снижение продолжается. Год назад 11.9% — восстановление в 7.8×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 43.3% last year, holding at capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 43.3% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 43.3% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 94.4% (2.64 MCM) — easing slowly from full. Was 26.9% last year — a 3.5× year-over-year recovery.',
      el: 'Ο Ταμασός στο 94.4% (2.64 ΕΚΜ) — αργή υποχώρηση από το πλήρες. Από 26.9% πέρυσι — 3.5× ανάκαμψη.',
      ru: 'Тамассос на 94.4% (2.64 МКМ) — медленное снижение от полного уровня. Год назад 26.9% — восстановление в 3.5×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 95.4% (1.91 MCM) — holding steady near full through the dry season. Up from 65.3% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 95.4% (1.91 ΕΚΜ) — σταθερή κοντά στο πλήρες. Αύξηση από 65.3% πέρυσι.',
      ru: 'Клиру-Малунта на 95.4% (1.91 МКМ) — стабильно у полного уровня. Рост с 65.3% год назад.',
    },
    'Solea': {
      en: 'Solea at 93.9% (4.18 MCM) — holding near full as dry season progresses. Up from 53.8% last year — 1.75× year-over-year improvement.',
      el: 'Η Σολέα στο 93.9% (4.18 ΕΚΜ) — παραμένει κοντά στο μέγιστο. Αύξηση από 53.8% πέρυσι — 1.75× βελτίωση.',
      ru: 'Солеа на 93.9% (4.18 МКМ) — удерживается вблизи полного уровня. Рост с 53.8% год назад — улучшение в 1.75×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (16 — 20 Ιουλίου 2026)

Δελτίο Δευτέρας: συνολική αποθήκευση **40.6%** (118.1 ΕΚΜ) — από 40.9% στις 16 Ιουλίου, μόλις 0.74 ΕΚΜ απώλεια σε τέσσερις ημέρες. Ο πιο αργός καλοκαιρινός ρυθμός εδώ και χρόνια συνεχίζεται. Το χάσμα με πέρυσι κρατά στο **+22.8μ.π.** Εισροή σεζόν 25/26: **115.2 ΕΚΜ** (Ιούλιος: 0.86 ΕΚΜ). Εισροή τριημέρου 0.085 ΕΚΜ, σχεδόν όλη σε [Κούρης](/el/dam/kouris/) και [Αρμίνου](/el/dam/arminou/). Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα:**
- [Αρμίνου](/el/dam/arminou/) **58.4%** (+1.2μ.π.) — το μόνο φράγμα σε άνοδο, με νέα εισροή
- [Αργάκα](/el/dam/argaka/) **81.9%** (-5.6μ.π.) — η μεγαλύτερη πτώση της περιόδου
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **69.2%** (-3.4μ.π.) — κάτω από το 70%
- [Πολεμίδια](/el/dam/polemidia/) **49.9%** και [Καννάβιου](/el/dam/kannaviou/) **49.4%** — και τα δύο κάτω από το 50%
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
### Последние изменения (16 — 20 июля 2026)

Бюллетень понедельника: общий запас **40.6%** (118.1 МКМ) — против 40.9% на 16 июля, всего -0.74 МКМ за четыре дня. Самый медленный летний расход за последние годы продолжается. Разрыв с прошлым годом держится на **+22.8пп**. Приток сезона 25/26: **115.2 МКМ** (июль: 0.86 МКМ). Приток за три дня 0.085 МКМ — почти весь в [Курис](/ru/dam/kouris/) и [Арминоу](/ru/dam/arminou/). Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения:**
- [Арминоу](/ru/dam/arminou/) **58.4%** (+1.2пп) — единственное растущее водохранилище, свежий приток
- [Аргака](/ru/dam/argaka/) **81.9%** (-5.6пп) — крупнейшее падение периода
- [Мавроколимпос](/ru/dam/mavrokolympos/) **69.2%** (-3.4пп) — опустился ниже 70%
- [Полемидия](/ru/dam/polemidia/) **49.9%** и [Каннавиу](/ru/dam/kannaviou/) **49.4%** — оба ниже отметки 50%
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** — по-прежнему единственное переливающееся водохранилище
- [Ахна](/ru/dam/achna/) **1.9%** — без изменений, без притока за весь сезон

**В СМИ:**
- [Government investing €168m to tackle water shortage, minister says](https://cyprus-mail.com/2026/07/05/government-investing-e168m-to-tackle-water-shortage-minister-says) — Cyprus Mail
- [Летние дожди дают небольшую подпитку водохранилищам, но готовят почву для больших притоков](https://www.politis.com.cy/politis-news/cyprus/1018398/teleftaies-vrokhes-mikri-sineisfora-sta-fraghmata-omos-strwnoyn-khali-ghia-prwimes-meghales-eisroes) — Politis
- [MPs warn water crisis threatens future of farming](https://cyprus-mail.com/2026/06/30/mps-warn-water-crisis-threatens-future-of-farming) — Cyprus Mail
`;
  }
  return `
### Recent Changes (July 16 — July 20, 2026)

Monday bulletin: total storage at **40.6%** (118.1 MCM) — down from 40.9% on July 16, losing just 0.74 MCM over four days as the slowest summer drawdown in years continues. The gap over last year holds at **+22.8pp**. Season total inflow: **115.2 MCM** (July so far: 0.86 MCM). Three-day inflow 0.085 MCM, almost all at [Kouris](/dam/kouris/) and [Arminou](/dam/arminou/). The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements:**
- [Arminou](/dam/arminou/) **58.4%** (+1.2pp) — the only dam rising, on fresh weekend inflow
- [Argaka](/dam/argaka/) **81.9%** (-5.6pp) — the biggest drop of the period
- [Mavrokolympos](/dam/mavrokolympos/) **69.2%** (-3.4pp) — fell below 70%
- [Polemidia](/dam/polemidia/) **49.9%** and [Kannaviou](/dam/kannaviou/) **49.4%** — both slipped below the 50% mark
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** — still the only dam overflowing
- [Achna](/dam/achna/) **1.9%** — unchanged, zero inflow all season

**In the media:**
- [Government investing €168m to tackle water shortage, minister says](https://cyprus-mail.com/2026/07/05/government-investing-e168m-to-tackle-water-shortage-minister-says) — Cyprus Mail
- [Summer rains give reservoirs a small boost, but set up conditions for larger inflows ahead](https://www.politis.com.cy/politis-news/cyprus/1018398/teleftaies-vrokhes-mikri-sineisfora-sta-fraghmata-omos-strwnoyn-khali-ghia-prwimes-meghales-eisroes) — Politis
- [MPs warn water crisis threatens future of farming](https://cyprus-mail.com/2026/06/30/mps-warn-water-crisis-threatens-future-of-farming) — Cyprus Mail
`;
};

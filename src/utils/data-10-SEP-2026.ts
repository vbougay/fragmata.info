import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.009, totalSince: 27.088 }, storage: { current: { amount: 44.604, percentage: 38.8 }, lastYear: { amount: 14.283, percentage: 12.4 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.202 }, storage: { current: { amount: 3.862, percentage: 22.6 }, lastYear: { amount: 2.463, percentage: 14.4 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.738 }, storage: { current: { amount: 2.436, percentage: 17.6 }, lastYear: { amount: 2.104, percentage: 15.2 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.772 }, storage: { current: { amount: 4.425, percentage: 28.5 }, lastYear: { amount: 3.957, percentage: 25.5 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 6.828, percentage: 50.6 }, lastYear: { amount: 1.247, percentage: 9.2 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.000, totalSince: 22.427 }, storage: { current: { amount: 2.516, percentage: 58.5 }, lastYear: { amount: 2.004, percentage: 46.6 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.635 }, storage: { current: { amount: 1.474, percentage: 43.4 }, lastYear: { amount: 0.930, percentage: 27.4 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.082, percentage: 1.2 }, lastYear: { amount: 0.250, percentage: 3.7 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.330 }, storage: { current: { amount: 19.615, percentage: 37.5 }, lastYear: { amount: 6.476, percentage: 12.4 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 7.632, percentage: 44.5 }, lastYear: { amount: 2.568, percentage: 15.0 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 0.707, percentage: 32.4 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 9.749, percentage: 40.6 }, lastYear: { amount: 3.514, percentage: 14.6 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.527, percentage: 53.2 }, lastYear: { amount: 0.005, percentage: 0.5 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.579, percentage: 67.3 }, lastYear: { amount: 0.126, percentage: 14.7 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.163, percentage: 54.7 }, lastYear: { amount: 0.057, percentage: 19.1 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.304, percentage: 77.2 }, lastYear: { amount: 0.011, percentage: 0.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.144, percentage: 80.0 }, lastYear: { amount: 0.069, percentage: 4.8 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.322 }, storage: { current: { amount: 0.358, percentage: 98.6 }, lastYear: { amount: 0.057, percentage: 15.7 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.358, percentage: 84.2 }, lastYear: { amount: 0.600, percentage: 21.4 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.790, percentage: 89.5 }, lastYear: { amount: 1.190, percentage: 59.5 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 3.921, percentage: 88.0 }, lastYear: { amount: 2.134, percentage: 47.9 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through September 10, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":1.158 }, total:116.653 },
];

export const getReportDate = (): string => "10-SEP-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 38.8% (44.6 MCM) — essentially flat, 26.4pp above last year\'s 12.4%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 38.8% (44.6 ΕΚΜ) — σχεδόν σταθερός, 26.4μ.π. πάνω από πέρυσι (12.4%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 38.8% (44.6 МКМ) — почти без изменений, +26.4пп выше прошлогодних 12.4%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 22.6% (3.86 MCM) — unchanged, still 8.2pp above last year\'s 14.4%. Seasonal inflow 4.20 MCM.',
      el: 'Ο Καλαβασός στο 22.6% (3.86 ΕΚΜ) — αμετάβλητος, πάνω από πέρυσι (14.4%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 22.6% (3.86 МКМ) — без изменений, выше прошлогодних 14.4%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 17.6% (2.44 MCM) — unchanged, 2.4pp above last year\'s 15.2%. Seasonal inflow 1.74 MCM.',
      el: 'Η Λεύκαρα στο 17.6% (2.44 ΕΚΜ) — αμετάβλητη, πάνω από πέρυσι (15.2%). Εισροή σεζόν 1.74 ΕΚΜ.',
      ru: 'Лефкара на 17.6% (2.44 МКМ) — без изменений, выше прошлогодних 15.2%. Приток 1.74 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 28.5% (4.43 MCM) — down slightly, still 3.0pp above last year\'s 25.5%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 28.5% (4.43 ΕΚΜ) — ελαφριά υποχώρηση, 3.0μ.π. πάνω από πέρυσι (25.5%).',
      ru: 'Дипотамос на 28.5% (4.43 МКМ) — небольшое снижение, +3.0пп выше прошлогодних 25.5%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 50.6% (6.83 MCM) — down slightly, still 41.4pp above last year\'s 9.2%.',
      el: 'Η Γερμασόγεια στο 50.6% (6.83 ΕΚΜ) — ελαφριά υποχώρηση. 41.4μ.π. πάνω από πέρυσι (9.2%).',
      ru: 'Гермасойя на 50.6% (6.83 МКМ) — небольшое снижение. +41.4пп выше прошлогодних 9.2%.',
    },
    'Arminou': {
      en: 'Arminou at 58.5% (2.52 MCM) — easing slightly, still 11.9pp above last year\'s 46.6%. Season inflow 22.4 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 58.5% (2.52 ΕΚΜ) — ελαφριά υποχώρηση, 11.9μ.π. πάνω από πέρυσι (46.6%).',
      ru: 'Арминоу на 58.5% (2.52 МКМ) — небольшое снижение, +11.9пп выше прошлогодних 46.6%.',
    },
    'Polemidia': {
      en: 'Polemidia at 43.4% (1.47 MCM) — unchanged, still 16.0pp above last year\'s 27.4%.',
      el: 'Η Πολεμίδια στο 43.4% (1.47 ΕΚΜ) — αμετάβλητη, 16.0μ.π. πάνω από πέρυσι (27.4%).',
      ru: 'Полемидия на 43.4% (1.47 МКМ) — без изменений, +16.0пп выше прошлогодних 27.4%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.2% (0.08 MCM), zero inflow all season. Still below last year\'s 3.7%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.2% (0.08 ΕΚΜ), χωρίς εισροή εφέτος. Κάτω από πέρυσι (3.7%).',
      ru: 'Ахна критически низкая — 1.2% (0.08 МКМ), без притока за сезон. По-прежнему ниже прошлогодних 3.7%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 37.5% (19.62 MCM) — unchanged, 25.1pp above last year\'s 12.4%. Seasonal inflow 20.3 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 37.5% (19.62 ΕΚΜ) — αμετάβλητος, 25.1μ.π. πάνω από πέρυσι (12.4%).',
      ru: 'Аспрокреммос на 37.5% (19.62 МКМ) — без изменений, +25.1пп выше прошлогодних 12.4%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 44.5% (7.63 MCM) — unchanged, still 29.5pp above last year\'s 15.0%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 44.5% (7.63 ΕΚΜ) — αμετάβλητος, 29.5μ.π. πάνω από πέρυσι (15.0%).',
      ru: 'Каннавиу на 44.5% (7.63 МКМ) — без изменений, +29.5пп выше прошлогодних 15.0%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos down 0.5pp to 32.4% (0.71 MCM) — a fourth straight period among the steepest slides. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος -0.5μ.π., στο 32.4% (0.71 ΕΚΜ) — τέταρτη συνεχόμενη περίοδος πτώσης. Από 0% πέρυσι.',
      ru: 'Мавроколимпос -0.5пп, до 32.4% (0.71 МКМ) — четвёртый период подряд среди самых резких снижений. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 40.6% (9.75 MCM) — down slightly, still 26.0pp above last year\'s 14.6%.',
      el: 'Ο Εύρετου στο 40.6% (9.75 ΕΚΜ) — ελαφριά υποχώρηση. 26.0μ.π. πάνω από πέρυσι (14.6%).',
      ru: 'Эвретоу на 40.6% (9.75 МКМ) — небольшое снижение. +26.0пп выше прошлогодних 14.6%.',
    },
    'Argaka': {
      en: 'Argaka down 0.1pp to 53.2% (0.53 MCM), its multi-week slide continuing. Up from 0.5% last year — a 106× year-over-year recovery.',
      el: 'Η Αργάκα -0.1μ.π., στο 53.2% (0.53 ΕΚΜ). Από 0.5% πέρυσι — 106× ανάκαμψη.',
      ru: 'Аргака -0.1пп, до 53.2% (0.53 МКМ). Год назад 0.5% — рост в 106×.',
    },
    'Pomos': {
      en: 'Pomos down 0.1pp to 67.3% (0.58 MCM), continued retreat from near-full. Up from 14.7% last year.',
      el: 'Ο Πόμος -0.1μ.π., στο 67.3% (0.58 ΕΚΜ). Από 14.7% πέρυσι.',
      ru: 'Помос -0.1пп, до 67.3% (0.58 МКМ). Год назад 14.7%.',
    },
    'Agia Marina': {
      en: 'Agia Marina down 0.3pp to 54.7% (0.16 MCM), its multi-week slide continuing. Up from 19.1% last year.',
      el: 'Η Αγία Μαρίνα -0.3μ.π., στο 54.7% (0.16 ΕΚΜ), η πολυεβδομαδιαία πτώση συνεχίζεται. Από 19.1% πέρυσι.',
      ru: 'Агия Марина -0.3пп, до 54.7% (0.16 МКМ), многонедельное снижение продолжается. Год назад 19.1%.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 77.2% (1.30 MCM) — down 0.2pp. Was 0.7% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 77.2% (1.30 ΕΚΜ) — -0.2μ.π. Από 0.7% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 77.2% (1.30 МКМ) — -0.2пп. Год назад 0.7% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 80.0% (1.14 MCM) — down 0.3pp, right at the 80% line. Was 4.8% last year.',
      el: 'Ο Ξυλιάτος στο 80.0% (1.14 ΕΚΜ) — -0.3μ.π., ακριβώς στο 80%. Από 4.8% πέρυσι.',
      ru: 'Ксилиатос на 80.0% (1.14 МКМ) — -0.3пп, ровно на отметке 80%. Год назад 4.8%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis down 0.6pp to 98.6% (0.36 MCM), continuing off its overflow plateau. Up from 15.7% last year.',
      el: 'Ο Καλοπαναγιώτης -0.6μ.π. στο 98.6% (0.36 ΕΚΜ), συνεχίζει να απομακρύνεται από το οροπέδιο υπερχείλισης. Αύξηση από 15.7% πέρυσι.',
      ru: 'Калопанайотис -0.6пп, до 98.6% (0.36 МКМ), продолжает отходить от плато перелива. Рост с 15.7% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 84.2% (2.36 MCM) — down 0.2pp. Was 21.4% last year — a 3.9× year-over-year recovery.',
      el: 'Ο Ταμασός στο 84.2% (2.36 ΕΚΜ) — -0.2μ.π. Από 21.4% πέρυσι — 3.9× ανάκαμψη.',
      ru: 'Тамассос на 84.2% (2.36 МКМ) — -0.2пп. Год назад 21.4% — восстановление в 3.9×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 89.5% (1.79 MCM) — essentially flat. Up from 59.5% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 89.5% (1.79 ΕΚΜ) — σχεδόν σταθερή. Αύξηση από 59.5% πέρυσι.',
      ru: 'Клиру-Малунта на 89.5% (1.79 МКМ) — почти без изменений. Рост с 59.5% год назад.',
    },
    'Solea': {
      en: 'Solea at 88.0% (3.92 MCM) — down slightly as the dry season progresses. Up from 47.9% last year — 1.84× year-over-year improvement.',
      el: 'Η Σολέα στο 88.0% (3.92 ΕΚΜ) — ελαφριά υποχώρηση. Αύξηση από 47.9% πέρυσι — 1.84× βελτίωση.',
      ru: 'Солеа на 88.0% (3.92 МКМ) — небольшое снижение. Рост с 47.9% год назад — улучшение в 1.84×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (9 — 10 Σεπτεμβρίου 2026)

Δελτίο Πέμπτης: συνολική αποθήκευση **37.1%** (108.0 ΕΚΜ) — από 37.2% (108.2 ΕΚΜ) χθες, μια ήσυχη ημέρα με σχεδόν καθόλου εισροή (0.009 ΕΚΜ συνολικά, μόνο στον [Κούρη](/el/dam/kouris/)). Ο [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) είχε τη μεγαλύτερη πτώση της ημέρας, -0.6μ.π. στο 98.6%, καθώς συνεχίζει να απομακρύνεται από το οροπέδιο υπερχείλισης. Ο [Μαυροκόλυμπος](/el/dam/mavrokolympos/) συνέχισε επίσης να υποχωρεί, τέταρτη συνεχόμενη περίοδος. Το χάσμα με πέρυσι παραμένει στις **23.3 μονάδες**. Εισροή σεζόν: 116.7 ΕΚΜ (Αύγ-Σεπ μέχρι στιγμής: 1.16 ΕΚΜ). Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι 9 Σεπτεμβρίου):**
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **98.6%** (-0.6μ.π.) — η μεγαλύτερη πτώση της ημέρας, συνεχίζει μακριά από την υπερχείλιση
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **32.4%** (-0.5μ.π.) — τέταρτη συνεχόμενη περίοδος πτώσης
- [Αγία Μαρίνα](/el/dam/agia-marina/) **54.7%** (-0.3μ.π.) — η πολυεβδομαδιαία πτώση συνεχίζεται
- [Ξυλιάτος](/el/dam/xyliatos/) **80.0%** (-0.3μ.π.) — σταθερή υποχώρηση, ακριβώς στο 80%
- [Σολέα](/el/dam/solea/) **88.0%** (-0.2μ.π.) — ελαφριά υποχώρηση
- [Αχνά](/el/dam/achna/) **1.2%** — αμετάβλητη, μηδέν εισροή όλη τη σεζόν

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (9 — 10 сентября 2026)

Бюллетень четверга: общий запас **37.1%** (108.0 МКМ) — против 37.2% (108.2 МКМ) вчера, тихий день почти без притока (0.009 МКМ всего, только у [Куриса](/ru/dam/kouris/)). [Калопанайотис](/ru/dam/kalopanagiotis/) показал крупнейшее снижение за день, -0.6пп до 98.6%, продолжая отходить от плато перелива. [Мавроколимпос](/ru/dam/mavrokolympos/) тоже продолжил снижение, четвёртый период подряд. Разрыв с прошлым годом остаётся на уровне **23.3 пункта**. Приток сезона: 116.7 МКМ (авг-сен пока: 1.16 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Куриса](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за период с 9 сентября):**
- [Калопанайотис](/ru/dam/kalopanagiotis/) **98.6%** (-0.6пп) — крупнейшее снижение за день, всё дальше от перелива
- [Мавроколимпос](/ru/dam/mavrokolympos/) **32.4%** (-0.5пп) — четвёртый период подряд снижения
- [Агия Марина](/ru/dam/agia-marina/) **54.7%** (-0.3пп) — многонедельное снижение продолжается
- [Ксилиатос](/ru/dam/xyliatos/) **80.0%** (-0.3пп) — устойчивый откат, ровно на отметке 80%
- [Солеа](/ru/dam/solea/) **88.0%** (-0.2пп) — небольшое снижение
- [Ахна](/ru/dam/achna/) **1.2%** — без изменений, без притока за весь сезон

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (September 9 — September 10, 2026)

Thursday's bulletin: total storage at **37.1%** (108.0 MCM) — down from 37.2% (108.2 MCM) yesterday, a quiet day with virtually no inflow (0.009 MCM total, all at [Kouris](/dam/kouris/)). [Kalopanagiotis](/dam/kalopanagiotis/) posted the day's biggest drop, down 0.6pp to 98.6%, continuing off its overflow plateau. [Mavrokolympos](/dam/mavrokolympos/) also kept easing, a fourth straight period among the steepest slides. The gap over last year held at **23.3 points**. Season inflow: 116.7 MCM (Aug-Sep so far: 1.16 MCM). The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. September 9):**
- [Kalopanagiotis](/dam/kalopanagiotis/) **98.6%** (-0.6pp) — biggest drop of the day, still descending from overflow
- [Mavrokolympos](/dam/mavrokolympos/) **32.4%** (-0.5pp) — a fourth straight period of decline
- [Agia Marina](/dam/agia-marina/) **54.7%** (-0.3pp) — multi-week slide continues
- [Xyliatos](/dam/xyliatos/) **80.0%** (-0.3pp) — steady pullback, right at the 80% line
- [Solea](/dam/solea/) **88.0%** (-0.2pp) — easing as dry season progresses
- [Achna](/dam/achna/) **1.2%** — unchanged, zero inflow all season

🔗 https://fragmata.info
`;
};

import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.023, totalSince: 27.118 }, storage: { current: { amount: 44.355, percentage: 38.6 }, lastYear: { amount: 14.163, percentage: 12.3 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.202 }, storage: { current: { amount: 3.844, percentage: 22.5 }, lastYear: { amount: 2.447, percentage: 14.3 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.738 }, storage: { current: { amount: 2.427, percentage: 17.5 }, lastYear: { amount: 2.100, percentage: 15.2 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.772 }, storage: { current: { amount: 4.340, percentage: 28.0 }, lastYear: { amount: 3.925, percentage: 25.3 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 6.765, percentage: 50.1 }, lastYear: { amount: 1.230, percentage: 9.1 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.000, totalSince: 22.427 }, storage: { current: { amount: 2.511, percentage: 58.4 }, lastYear: { amount: 1.992, percentage: 46.3 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.635 }, storage: { current: { amount: 1.470, percentage: 43.2 }, lastYear: { amount: 0.940, percentage: 27.6 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.082, percentage: 1.2 }, lastYear: { amount: 0.234, percentage: 3.4 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.330 }, storage: { current: { amount: 19.465, percentage: 37.2 }, lastYear: { amount: 6.381, percentage: 12.2 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 7.574, percentage: 44.1 }, lastYear: { amount: 2.542, percentage: 14.8 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 0.685, percentage: 31.4 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 9.642, percentage: 40.2 }, lastYear: { amount: 3.457, percentage: 14.4 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.500, percentage: 50.5 }, lastYear: { amount: 0.005, percentage: 0.5 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.562, percentage: 65.3 }, lastYear: { amount: 0.126, percentage: 14.7 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.155, percentage: 52.0 }, lastYear: { amount: 0.057, percentage: 19.1 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.293, percentage: 76.5 }, lastYear: { amount: 0.011, percentage: 0.7 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.133, percentage: 79.2 }, lastYear: { amount: 0.066, percentage: 4.6 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.322 }, storage: { current: { amount: 0.356, percentage: 98.1 }, lastYear: { amount: 0.058, percentage: 16.0 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.349, percentage: 83.9 }, lastYear: { amount: 0.593, percentage: 21.2 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.786, percentage: 89.3 }, lastYear: { amount: 1.178, percentage: 58.9 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 3.894, percentage: 87.4 }, lastYear: { amount: 2.121, percentage: 47.6 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through September 14, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":1.188 }, total:116.683 },
];

export const getReportDate = (): string => "14-SEP-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 38.6% (44.4 MCM) — down slightly, still 26.3pp above last year\'s 12.3%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 38.6% (44.4 ΕΚΜ) — ελαφριά υποχώρηση, 26.3μ.π. πάνω από πέρυσι (12.3%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 38.6% (44.4 МКМ) — небольшое снижение, +26.3пп выше прошлогодних 12.3%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 22.5% (3.84 MCM) — essentially flat, still 8.2pp above last year\'s 14.3%. Seasonal inflow 4.20 MCM.',
      el: 'Ο Καλαβασός στο 22.5% (3.84 ΕΚΜ) — σχεδόν σταθερός, πάνω από πέρυσι (14.3%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 22.5% (3.84 МКМ) — почти без изменений, выше прошлогодних 14.3%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 17.5% (2.43 MCM) — essentially flat, 2.3pp above last year\'s 15.2%. Seasonal inflow 1.74 MCM.',
      el: 'Η Λεύκαρα στο 17.5% (2.43 ΕΚΜ) — σχεδόν σταθερή, πάνω από πέρυσι (15.2%). Εισροή σεζόν 1.74 ΕΚΜ.',
      ru: 'Лефкара на 17.5% (2.43 МКМ) — почти без изменений, выше прошлогодних 15.2%. Приток 1.74 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 28.0% (4.34 MCM) — down slightly, still 2.7pp above last year\'s 25.3%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 28.0% (4.34 ΕΚΜ) — ελαφριά υποχώρηση, 2.7μ.π. πάνω από πέρυσι (25.3%).',
      ru: 'Дипотамос на 28.0% (4.34 МКМ) — небольшое снижение, +2.7пп выше прошлогодних 25.3%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 50.1% (6.77 MCM) — down slightly, still 41.0pp above last year\'s 9.1%.',
      el: 'Η Γερμασόγεια στο 50.1% (6.77 ΕΚΜ) — ελαφριά υποχώρηση. 41.0μ.π. πάνω από πέρυσι (9.1%).',
      ru: 'Гермасойя на 50.1% (6.77 МКМ) — небольшое снижение. +41.0пп выше прошлогодних 9.1%.',
    },
    'Arminou': {
      en: 'Arminou at 58.4% (2.51 MCM) — essentially flat, still 12.1pp above last year\'s 46.3%. Season inflow 22.4 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου στο 58.4% (2.51 ΕΚΜ) — σχεδόν σταθερός, 12.1μ.π. πάνω από πέρυσι (46.3%).',
      ru: 'Арминоу на 58.4% (2.51 МКМ) — почти без изменений, +12.1пп выше прошлогодних 46.3%.',
    },
    'Polemidia': {
      en: 'Polemidia at 43.2% (1.47 MCM) — essentially flat, still 15.6pp above last year\'s 27.6%.',
      el: 'Η Πολεμίδια στο 43.2% (1.47 ΕΚΜ) — σχεδόν σταθερή, 15.6μ.π. πάνω από πέρυσι (27.6%).',
      ru: 'Полемидия на 43.2% (1.47 МКМ) — почти без изменений, +15.6пп выше прошлогодних 27.6%.',
    },
    'Achna': {
      en: 'Achna critically low at 1.2% (0.08 MCM), zero inflow all season. Still below last year\'s 3.4%. No recovery expected before autumn.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.2% (0.08 ΕΚΜ), χωρίς εισροή εφέτος. Κάτω από πέρυσι (3.4%).',
      ru: 'Ахна критически низкая — 1.2% (0.08 МКМ), без притока за сезон. По-прежнему ниже прошлогодних 3.4%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 37.2% (19.47 MCM) — down slightly, 25.0pp above last year\'s 12.2%. Seasonal inflow 20.3 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 37.2% (19.47 ΕΚΜ) — ελαφριά υποχώρηση, 25.0μ.π. πάνω από πέρυσι (12.2%).',
      ru: 'Аспрокреммос на 37.2% (19.47 МКМ) — небольшое снижение, +25.0пп выше прошлогодних 12.2%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 44.1% (7.57 MCM) — down slightly, still 29.3pp above last year\'s 14.8%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 44.1% (7.57 ΕΚΜ) — ελαφριά υποχώρηση, 29.3μ.π. πάνω από πέρυσι (14.8%).',
      ru: 'Каннавиу на 44.1% (7.57 МКМ) — небольшое снижение, +29.3пп выше прошлогодних 14.8%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos down 1.0pp to 31.4% (0.69 MCM) — a fifth straight period among the steepest slides. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος -1.0μ.π., στο 31.4% (0.69 ΕΚΜ) — πέμπτη συνεχόμενη περίοδος πτώσης. Από 0% πέρυσι.',
      ru: 'Мавроколимпос -1.0пп, до 31.4% (0.69 МКМ) — пятый период подряд среди самых резких снижений. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 40.2% (9.64 MCM) — down slightly, still 25.8pp above last year\'s 14.4%.',
      el: 'Ο Εύρετου στο 40.2% (9.64 ΕΚΜ) — ελαφριά υποχώρηση. 25.8μ.π. πάνω από πέρυσι (14.4%).',
      ru: 'Эвретоу на 40.2% (9.64 МКМ) — небольшое снижение. +25.8пп выше прошлогодних 14.4%.',
    },
    'Argaka': {
      en: 'Argaka down 2.7pp to 50.5% (0.50 MCM), a steep slide continuing for weeks. Up from 0.5% last year — a 100× year-over-year recovery.',
      el: 'Η Αργάκα -2.7μ.π., στο 50.5% (0.50 ΕΚΜ), απότομη πτώση εβδομάδων. Από 0.5% πέρυσι — 100× ανάκαμψη.',
      ru: 'Аргака -2.7пп, до 50.5% (0.50 МКМ), крутое снижение продолжается неделями. Год назад 0.5% — рост в 100×.',
    },
    'Pomos': {
      en: 'Pomos down 2.0pp to 65.3% (0.56 MCM), continued retreat from near-full. Up from 14.7% last year.',
      el: 'Ο Πόμος -2.0μ.π., στο 65.3% (0.56 ΕΚΜ). Από 14.7% πέρυσι.',
      ru: 'Помос -2.0пп, до 65.3% (0.56 МКМ). Год назад 14.7%.',
    },
    'Agia Marina': {
      en: 'Agia Marina down 2.7pp to 52.0% (0.16 MCM), its multi-week slide continuing. Up from 19.1% last year.',
      el: 'Η Αγία Μαρίνα -2.7μ.π., στο 52.0% (0.16 ΕΚΜ), η πολυεβδομαδιαία πτώση συνεχίζεται. Από 19.1% πέρυσι.',
      ru: 'Агия Марина -2.7пп, до 52.0% (0.16 МКМ), многонедельное снижение продолжается. Год назад 19.1%.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 76.5% (1.29 MCM) — down 0.7pp. Was 0.7% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 76.5% (1.29 ΕΚΜ) — -0.7μ.π. Από 0.7% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 76.5% (1.29 МКМ) — -0.7пп. Год назад 0.7% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 79.2% (1.13 MCM) — down 0.8pp, slipping below the 80% line. Was 4.6% last year.',
      el: 'Ο Ξυλιάτος στο 79.2% (1.13 ΕΚΜ) — -0.8μ.π., κάτω από το 80%. Από 4.6% πέρυσι.',
      ru: 'Ксилиатос на 79.2% (1.13 МКМ) — -0.8пп, ниже отметки 80%. Год назад 4.6%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis down 0.5pp to 98.1% (0.36 MCM), continuing off its overflow plateau. Up from 16.0% last year.',
      el: 'Ο Καλοπαναγιώτης -0.5μ.π. στο 98.1% (0.36 ΕΚΜ), συνεχίζει να απομακρύνεται από το οροπέδιο υπερχείλισης. Αύξηση από 16.0% πέρυσι.',
      ru: 'Калопанайотис -0.5пп, до 98.1% (0.36 МКМ), продолжает отходить от плато перелива. Рост с 16.0% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 83.9% (2.35 MCM) — down slightly. Was 21.2% last year — a 3.9× year-over-year recovery.',
      el: 'Ο Ταμασός στο 83.9% (2.35 ΕΚΜ) — ελαφριά υποχώρηση. Από 21.2% πέρυσι — 3.9× ανάκαμψη.',
      ru: 'Тамассос на 83.9% (2.35 МКМ) — небольшое снижение. Год назад 21.2% — восстановление в 3.9×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 89.3% (1.79 MCM) — essentially flat. Up from 58.9% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 89.3% (1.79 ΕΚΜ) — σχεδόν σταθερή. Αύξηση από 58.9% πέρυσι.',
      ru: 'Клиру-Малунта на 89.3% (1.79 МКМ) — почти без изменений. Рост с 58.9% год назад.',
    },
    'Solea': {
      en: 'Solea at 87.4% (3.89 MCM) — down slightly as the dry season progresses. Up from 47.6% last year — 1.84× year-over-year improvement.',
      el: 'Η Σολέα στο 87.4% (3.89 ΕΚΜ) — ελαφριά υποχώρηση. Αύξηση από 47.6% πέρυσι — 1.84× βελτίωση.',
      ru: 'Солеа на 87.4% (3.89 МКМ) — небольшое снижение. Рост с 47.6% год назад — улучшение в 1.84×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (10 — 14 Σεπτεμβρίου 2026)

Δελτίο Δευτέρας, τεσσάρων ημερών: συνολική αποθήκευση **36.8%** (107.2 ΕΚΜ) — από 37.1% (108.0 ΕΚΜ) στις 10 Σεπτεμβρίου, απώλεια περίπου 0.8 ΕΚΜ σε τέσσερις ημέρες, ίδιος αργός ρυθμός άντλησης. Ο [Αργάκα](/el/dam/argaka/) και η [Αγία Μαρίνα](/el/dam/agia-marina/) είχαν τις μεγαλύτερες πτώσεις, από -2.7μ.π. η καθεμία, καθώς η πολυεβδομαδιαία πτώση τους στα μικρά φράγματα της Χρυσοχούς συνεχίζεται. Ο [Μαυροκόλυμπος](/el/dam/mavrokolympos/) σημείωσε πέμπτη συνεχόμενη περίοδο πτώσης, -1.0μ.π. στο 31.4%. Ο [Ξυλιάτος](/el/dam/xyliatos/) γλίστρησε κάτω από το 80%. Το χάσμα με πέρυσι παραμένει γύρω στις **23.2 μονάδες**. Εισροή σεζόν: 116.7 ΕΚΜ (Αύγ-Σεπ μέχρι στιγμής: 1.19 ΕΚΜ). Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι 10 Σεπτεμβρίου):**
- [Αργάκα](/el/dam/argaka/) **50.5%** (-2.7μ.π.) — απότομη πτώση εβδομάδων
- [Αγία Μαρίνα](/el/dam/agia-marina/) **52.0%** (-2.7μ.π.) — η πολυεβδομαδιαία πτώση συνεχίζεται
- [Πόμος](/el/dam/pomos/) **65.3%** (-2.0μ.π.) — συνεχής υποχώρηση από σχεδόν γεμάτο
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) **31.4%** (-1.0μ.π.) — πέμπτη συνεχόμενη περίοδος πτώσης
- [Ξυλιάτος](/el/dam/xyliatos/) **79.2%** (-0.8μ.π.) — γλίστρησε κάτω από το 80%
- [Αχνά](/el/dam/achna/) **1.2%** — αμετάβλητη, μηδέν εισροή όλη τη σεζόν

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (10 — 14 сентября 2026)

Бюллетень понедельника, спустя четыре дня: общий запас **36.8%** (107.2 МКМ) — против 37.1% (108.0 МКМ) 10 сентября, потеря примерно 0.8 МКМ за четыре дня, тот же медленный темп сработки. [Аргака](/ru/dam/argaka/) и [Агия Марина](/ru/dam/agia-marina/) показали крупнейшее снижение, по -2.7пп каждая — многонедельное снижение малых дамб Хрисохус продолжается. [Мавроколимпос](/ru/dam/mavrokolympos/) зафиксировал пятый период подряд снижения, -1.0пп до 31.4%. [Ксилиатос](/ru/dam/xyliatos/) опустился ниже отметки 80%. Разрыв с прошлым годом остаётся около **23.2 пункта**. Приток сезона: 116.7 МКМ (авг-сен пока: 1.19 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Куриса](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за период с 10 сентября):**
- [Аргака](/ru/dam/argaka/) **50.5%** (-2.7пп) — крутое снижение продолжается неделями
- [Агия Марина](/ru/dam/agia-marina/) **52.0%** (-2.7пп) — многонедельное снижение продолжается
- [Помос](/ru/dam/pomos/) **65.3%** (-2.0пп) — продолжающийся откат от почти полного
- [Мавроколимпос](/ru/dam/mavrokolympos/) **31.4%** (-1.0пп) — пятый период подряд снижения
- [Ксилиатос](/ru/dam/xyliatos/) **79.2%** (-0.8пп) — опустился ниже отметки 80%
- [Ахна](/ru/dam/achna/) **1.2%** — без изменений, без притока за весь сезон

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (September 10 — September 14, 2026)

Monday's bulletin, covering four days: total storage at **36.8%** (107.2 MCM) — down from 37.1% (108.0 MCM) on September 10, a loss of roughly 0.8 MCM over four days, the same slow drawdown pace continuing. [Argaka](/dam/argaka/) and [Agia Marina](/dam/agia-marina/) posted the biggest drops, down 2.7pp each, as the multi-week slide across the small Chrysochou dams continues. [Mavrokolympos](/dam/mavrokolympos/) logged a fifth straight period of decline, down 1.0pp to 31.4%. [Xyliatos](/dam/xyliatos/) slipped below the 80% line. The gap over last year held around **23.2 points**. Season inflow: 116.7 MCM (Aug-Sep so far: 1.19 MCM). The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. September 10):**
- [Argaka](/dam/argaka/) **50.5%** (-2.7pp) — a steep slide continuing for weeks
- [Agia Marina](/dam/agia-marina/) **52.0%** (-2.7pp) — multi-week slide continues
- [Pomos](/dam/pomos/) **65.3%** (-2.0pp) — continued retreat from near-full
- [Mavrokolympos](/dam/mavrokolympos/) **31.4%** (-1.0pp) — a fifth straight period of decline
- [Xyliatos](/dam/xyliatos/) **79.2%** (-0.8pp) — slipped below the 80% line
- [Achna](/dam/achna/) **1.2%** — unchanged, zero inflow all season

🔗 https://fragmata.info
`;
};

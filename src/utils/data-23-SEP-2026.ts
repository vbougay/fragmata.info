import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.007, totalSince: 27.208 }, storage: { current: { amount: 43.702, percentage: 38.0 }, lastYear: { amount: 13.465, percentage: 11.7 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.204 }, storage: { current: { amount: 3.785, percentage: 22.1 }, lastYear: { amount: 2.297, percentage: 13.4 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.742 }, storage: { current: { amount: 2.417, percentage: 17.5 }, lastYear: { amount: 2.071, percentage: 15.0 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.772 }, storage: { current: { amount: 4.164, percentage: 26.9 }, lastYear: { amount: 3.694, percentage: 23.8 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 6.668, percentage: 49.4 }, lastYear: { amount: 1.114, percentage: 8.3 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.004, totalSince: 22.487 }, storage: { current: { amount: 2.548, percentage: 59.3 }, lastYear: { amount: 1.919, percentage: 44.6 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.635 }, storage: { current: { amount: 1.461, percentage: 43.0 }, lastYear: { amount: 0.890, percentage: 26.2 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.205, percentage: 3.0 }, lastYear: { amount: 0.186, percentage: 2.7 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.330 }, storage: { current: { amount: 19.193, percentage: 36.6 }, lastYear: { amount: 5.829, percentage: 11.1 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 7.416, percentage: 43.2 }, lastYear: { amount: 2.384, percentage: 13.9 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 0.663, percentage: 30.4 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 9.469, percentage: 39.5 }, lastYear: { amount: 3.244, percentage: 13.5 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.468, percentage: 47.3 }, lastYear: { amount: 0.004, percentage: 0.4 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.541, percentage: 62.9 }, lastYear: { amount: 0.124, percentage: 14.4 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.144, percentage: 48.3 }, lastYear: { amount: 0.057, percentage: 19.1 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.262, percentage: 74.7 }, lastYear: { amount: 0.007, percentage: 0.4 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.109, percentage: 77.6 }, lastYear: { amount: 0.050, percentage: 3.5 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.322 }, storage: { current: { amount: 0.349, percentage: 96.1 }, lastYear: { amount: 0.047, percentage: 12.9 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.297, percentage: 82.0 }, lastYear: { amount: 0.554, percentage: 19.8 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.771, percentage: 88.6 }, lastYear: { amount: 1.153, percentage: 57.7 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 3.856, percentage: 86.6 }, lastYear: { amount: 2.073, percentage: 46.5 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through September 23, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":1.344 }, total:116.839 },
];

export const getReportDate = (): string => "23-SEP-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 38.0% (43.7 MCM) — down slightly, still 26.3pp above last year\'s 11.7%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης στο 38.0% (43.7 ΕΚΜ) — ελαφριά υποχώρηση, 26.3μ.π. πάνω από πέρυσι (11.7%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис на 38.0% (43.7 МКМ) — небольшое снижение, +26.3пп выше прошлогодних 11.7%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 22.1% (3.79 MCM) — essentially flat, still 8.7pp above last year\'s 13.4%. Seasonal inflow 4.20 MCM.',
      el: 'Ο Καλαβασός στο 22.1% (3.79 ΕΚΜ) — σχεδόν σταθερός, πάνω από πέρυσι (13.4%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос на 22.1% (3.79 МКМ) — почти без изменений, выше прошлогодних 13.4%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara unchanged at 17.5% (2.42 MCM), 2.5pp above last year\'s 15.0%. Seasonal inflow 1.74 MCM.',
      el: 'Η Λεύκαρα αμετάβλητη στο 17.5% (2.42 ΕΚΜ), πάνω από πέρυσι (15.0%). Εισροή σεζόν 1.74 ΕΚΜ.',
      ru: 'Лефкара без изменений — 17.5% (2.42 МКМ), выше прошлогодних 15.0%. Приток 1.74 МКМ за сезон.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 26.9% (4.16 MCM) — down slightly, still 3.1pp above last year\'s 23.8%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος στο 26.9% (4.16 ΕΚΜ) — ελαφριά υποχώρηση, 3.1μ.π. πάνω από πέρυσι (23.8%).',
      ru: 'Дипотамос на 26.9% (4.16 МКМ) — небольшое снижение, +3.1пп выше прошлогодних 23.8%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 49.4% (6.67 MCM) — down slightly, still 41.1pp above last year\'s 8.3%.',
      el: 'Η Γερμασόγεια στο 49.4% (6.67 ΕΚΜ) — ελαφριά υποχώρηση. 41.1μ.π. πάνω από πέρυσι (8.3%).',
      ru: 'Гермасойя на 49.4% (6.67 МКМ) — небольшое снижение. +41.1пп выше прошлогодних 8.3%.',
    },
    'Arminou': {
      en: 'Arminou up 1.0pp to 59.3% (2.55 MCM), the region\'s steady riser again. Still 14.7pp above last year\'s 44.6%. Season inflow 22.5 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου +1.0μ.π., στο 59.3% (2.55 ΕΚΜ), ξανά ο σταθερός ανερχόμενος της περιοχής. 14.7μ.π. πάνω από πέρυσι (44.6%).',
      ru: 'Арминоу +1.0пп, до 59.3% (2.55 МКМ), снова стабильно растёт. +14.7пп выше прошлогодних 44.6%.',
    },
    'Polemidia': {
      en: 'Polemidia at 43.0% (1.46 MCM) — essentially flat, still 16.8pp above last year\'s 26.2%.',
      el: 'Η Πολεμίδια στο 43.0% (1.46 ΕΚΜ) — σχεδόν σταθερή, 16.8μ.π. πάνω από πέρυσι (26.2%).',
      ru: 'Полемидия на 43.0% (1.46 МКМ) — почти без изменений, +16.8пп выше прошлогодних 26.2%.',
    },
    'Achna': {
      en: 'Achna up 1.4pp to 3.0% (0.21 MCM), nearly doubling despite zero recorded inflow all season — now narrowly above last year\'s 2.7%.',
      el: 'Η Αχνά +1.4μ.π., στο 3.0% (0.21 ΕΚΜ), σχεδόν διπλασιάστηκε παρά τη μηδενική εισροή. Πάνω από πέρυσι (2.7%).',
      ru: 'Ахна +1.4пп, до 3.0% (0.21 МКМ), почти удвоилась несмотря на нулевой приток. Выше прошлогодних 2.7%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 36.6% (19.19 MCM) — down slightly, 25.5pp above last year\'s 11.1%. Seasonal inflow 20.3 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 36.6% (19.19 ΕΚΜ) — ελαφριά υποχώρηση, 25.5μ.π. πάνω από πέρυσι (11.1%).',
      ru: 'Аспрокреммос на 36.6% (19.19 МКМ) — небольшое снижение, +25.5пп выше прошлогодних 11.1%.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 43.2% (7.42 MCM) — down slightly, still 29.3pp above last year\'s 13.9%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου στο 43.2% (7.42 ΕΚΜ) — ελαφριά υποχώρηση, 29.3μ.π. πάνω από πέρυσι (13.9%).',
      ru: 'Каннавиу на 43.2% (7.42 МКМ) — небольшое снижение, +29.3пп выше прошлогодних 13.9%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos down 0.6pp to 30.4% (0.66 MCM) — a seventh straight period of decline. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος -0.6μ.π., στο 30.4% (0.66 ΕΚΜ) — έβδομη συνεχόμενη περίοδος πτώσης. Από 0% πέρυσι.',
      ru: 'Мавроколимпос -0.6пп, до 30.4% (0.66 МКМ) — седьмой период подряд среди снижения. Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou at 39.5% (9.47 MCM) — down slightly, still 26.0pp above last year\'s 13.5%.',
      el: 'Ο Εύρετου στο 39.5% (9.47 ΕΚΜ) — ελαφριά υποχώρηση. 26.0μ.π. πάνω από πέρυσι (13.5%).',
      ru: 'Эвретоу на 39.5% (9.47 МКМ) — небольшое снижение. +26.0пп выше прошлогодних 13.5%.',
    },
    'Argaka': {
      en: 'Argaka down 0.9pp to 47.3% (0.47 MCM), the multi-week slide continuing. Up from 0.4% last year — a 117× year-over-year recovery.',
      el: 'Η Αργάκα -0.9μ.π., στο 47.3% (0.47 ΕΚΜ), συνεχίζει η πολυεβδομαδιαία πτώση. Από 0.4% πέρυσι — 117× ανάκαμψη.',
      ru: 'Аргака -0.9пп, до 47.3% (0.47 МКМ), многонедельное снижение продолжается. Год назад 0.4% — рост в 117×.',
    },
    'Pomos': {
      en: 'Pomos down 1.1pp to 62.9% (0.54 MCM), continued retreat from near-full. Up from 14.4% last year.',
      el: 'Ο Πόμος -1.1μ.π., στο 62.9% (0.54 ΕΚΜ). Από 14.4% πέρυσι.',
      ru: 'Помос -1.1пп, до 62.9% (0.54 МКМ). Год назад 14.4%.',
    },
    'Agia Marina': {
      en: 'Agia Marina down 2.4pp to 48.3% (0.14 MCM), the biggest drop this period as its multi-week slide continues. Up from 19.1% last year.',
      el: 'Η Αγία Μαρίνα -2.4μ.π., στο 48.3% (0.14 ΕΚΜ), η μεγαλύτερη πτώση της περιόδου. Από 19.1% πέρυσι.',
      ru: 'Агия Марина -2.4пп, до 48.3% (0.14 МКМ), крупнейшее снижение за период. Год назад 19.1%.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 74.7% (1.26 MCM) — down 1.0pp. Was 0.4% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά στο 74.7% (1.26 ΕΚΜ) — -1.0μ.π. Από 0.4% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия на 74.7% (1.26 МКМ) — -1.0пп. Год назад 0.4% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 77.6% (1.11 MCM) — down 1.1pp. Was 3.5% last year.',
      el: 'Ο Ξυλιάτος στο 77.6% (1.11 ΕΚΜ) — -1.1μ.π. Από 3.5% πέρυσι.',
      ru: 'Ксилиатос на 77.6% (1.11 МКМ) — -1.1пп. Год назад 3.5%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis down 0.6pp to 96.1% (0.35 MCM), still drifting off its overflow plateau. Up from 12.9% last year.',
      el: 'Ο Καλοπαναγιώτης -0.6μ.π. στο 96.1% (0.35 ΕΚΜ), συνεχίζει να απομακρύνεται από το οροπέδιο υπερχείλισης. Αύξηση από 12.9% πέρυσι.',
      ru: 'Калопанайотис -0.6пп, до 96.1% (0.35 МКМ), продолжает отходить от плато перелива. Рост с 12.9% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 82.0% (2.30 MCM) — down 1.5pp, the steepest Recharge-group drop this period. Was 19.8% last year — a 4.1× year-over-year recovery.',
      el: 'Ο Ταμασός στο 82.0% (2.30 ΕΚΜ) — -1.5μ.π. Από 19.8% πέρυσι — 4.1× ανάκαμψη.',
      ru: 'Тамассос на 82.0% (2.30 МКМ) — -1.5пп. Год назад 19.8% — восстановление в 4.1×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta at 88.6% (1.77 MCM) — down slightly. Up from 57.7% one year ago.',
      el: 'Η Κλήρου-Μαλούντα στο 88.6% (1.77 ΕΚΜ) — ελαφριά υποχώρηση. Αύξηση από 57.7% πέρυσι.',
      ru: 'Клиру-Малунта на 88.6% (1.77 МКМ) — небольшое снижение. Рост с 57.7% год назад.',
    },
    'Solea': {
      en: 'Solea at 86.6% (3.86 MCM) — down slightly as the dry season progresses. Up from 46.5% last year — 1.86× year-over-year improvement.',
      el: 'Η Σολέα στο 86.6% (3.86 ΕΚΜ) — ελαφριά υποχώρηση. Αύξηση από 46.5% πέρυσι — 1.86× βελτίωση.',
      ru: 'Солеа на 86.6% (3.86 МКМ) — небольшое снижение. Рост с 46.5% год назад — улучшение в 1.86×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (17 — 23 Σεπτεμβρίου 2026)

Δελτίο Τετάρτης, έξι ημέρες μετά την Πέμπτη: συνολική αποθήκευση **36.3%** (105.6 ΕΚΜ) — από 36.6% (106.5 ΕΚΜ) στις 17 Σεπτεμβρίου, απώλεια περίπου 1.0 ΕΚΜ σε έξι ημέρες, ίδιος αργός ρυθμός άντλησης. Ο [Αρμίνου](/el/dam/arminou/) ήταν ξανά ο μοναδικός ανερχόμενος, +1.0μ.π. στο 59.3%. Η [Αγία Μαρίνα](/el/dam/agia-marina/) είχε τη μεγαλύτερη πτώση, -2.4μ.π., καθώς η πολυεβδομαδιαία πτώση της συνεχίζεται. Το χάσμα με πέρυσι παρέμεινε σταθερό στις **23.4 μονάδες**. Εισροή σεζόν: 116.8 ΕΚΜ (Αύγ-Σεπ μέχρι στιγμής: 1.34 ΕΚΜ). Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι 17 Σεπτεμβρίου):**
- [Αγία Μαρίνα](/el/dam/agia-marina/) **48.3%** (-2.4μ.π.) — η μεγαλύτερη πτώση της περιόδου
- [Ταμασός](/el/dam/tamassos/) **82.0%** (-1.5μ.π.) — η μεγαλύτερη πτώση στην ομάδα Recharge
- [Πόμος](/el/dam/pomos/) **62.9%** (-1.1μ.π.) — συνεχής υποχώρηση από σχεδόν γεμάτο
- [Ξυλιάτος](/el/dam/xyliatos/) **77.6%** (-1.1μ.π.) — σταθερή υποχώρηση
- [Αρμίνου](/el/dam/arminou/) **59.3%** (+1.0μ.π.) — ξανά ο μοναδικός ανερχόμενος
- [Αχνά](/el/dam/achna/) **3.0%** (+1.4μ.π.) — σχεδόν διπλασιάστηκε παρά τη μηδενική εισροή όλη τη σεζόν

**Στα μέσα:**
- [Ο Χρίστος Σενέκης στον «Π»: Περισσότερο νερό στους γεωργούς](https://www.politis.com.cy/cyprus/perivallon/1034164/o-xristos-senekis-ston-p-perissotero-nero-stoys-gheorghous-ipo-tin-proypothesi-oti-den-tithetai-se-kindino-i-ydrefsi) — Πολίτης
- [Υπουργικό: Πρόταση από Σενέκη για επιπρόσθετες ποσότητες νερού σε γεωργούς](https://www.politis.com.cy/politis-news/cyprus/1033164/ypoyrghiko-protasi-apo-seneki-ghia-epiprosthetes-posotites-nerou-se-gheorghous) — Πολίτης

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (17 — 23 сентября 2026)

Бюллетень среды, спустя шесть дней после четверга: общий запас **36.3%** (105.6 МКМ) — против 36.6% (106.5 МКМ) 17 сентября, потеря примерно 1.0 МКМ за шесть дней, тот же медленный темп сработки. [Арминоу](/ru/dam/arminou/) снова был единственным растущим водохранилищем, +1.0пп до 59.3%. [Агия Марина](/ru/dam/agia-marina/) показала крупнейшее снижение, -2.4пп, многонедельное снижение продолжается. Разрыв с прошлым годом остался стабильным на уровне **23.4 пункта**. Приток сезона: 116.8 МКМ (авг-сен пока: 1.34 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Куриса](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за период с 17 сентября):**
- [Агия Марина](/ru/dam/agia-marina/) **48.3%** (-2.4пп) — крупнейшее снижение за период
- [Тамассос](/ru/dam/tamassos/) **82.0%** (-1.5пп) — крупнейшее снижение в группе Recharge
- [Помос](/ru/dam/pomos/) **62.9%** (-1.1пп) — продолжающийся откат от почти полного
- [Ксилиатос](/ru/dam/xyliatos/) **77.6%** (-1.1пп) — стабильное снижение
- [Арминоу](/ru/dam/arminou/) **59.3%** (+1.0пп) — снова единственный растущий
- [Ахна](/ru/dam/achna/) **3.0%** (+1.4пп) — почти удвоилась несмотря на нулевой приток за весь сезон

**В СМИ:**
- [Депутаты Кипра предупреждают, что водная политика может вынудить профессиональных фермеров уйти из сельского хозяйства](https://ruscyprus.com/news/deputaty-kipra-preduprezhdayut-chto-vodnaya/60057) — RusCyprus
- [Фермеры долины Хрисохус планируют акцию протеста из-за перебоев с орошением](https://www.kiprinform.com/news/fermery-doliny-hrisohus-planiruyut-akciyu-protesta-iz-za-pereboev-s-orosheniem/) — Cyprus Inform

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (September 17 — September 23, 2026)

Wednesday's bulletin, six days since Thursday: total storage at **36.3%** (105.6 MCM) — down from 36.6% (106.5 MCM) on September 17, a loss of roughly 1.0 MCM over six days, the same slow drawdown pace continuing. [Arminou](/dam/arminou/) was again the sole riser, up 1.0pp to 59.3%. [Agia Marina](/dam/agia-marina/) posted the biggest drop, down 2.4pp, its multi-week slide continuing. The gap over last year held steady at **23.4 points**. Season inflow: 116.8 MCM (Aug-Sep so far: 1.34 MCM). The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. September 17):**
- [Agia Marina](/dam/agia-marina/) **48.3%** (-2.4pp) — the biggest drop this period
- [Tamassos](/dam/tamassos/) **82.0%** (-1.5pp) — steepest drop among the Recharge dams
- [Pomos](/dam/pomos/) **62.9%** (-1.1pp) — continued retreat from near-full
- [Xyliatos](/dam/xyliatos/) **77.6%** (-1.1pp) — steady pullback
- [Arminou](/dam/arminou/) **59.3%** (+1.0pp) — again the region's sole riser
- [Achna](/dam/achna/) **3.0%** (+1.4pp) — nearly doubled despite zero recorded inflow all season

**In the media:**
- [Plan for irrigation water heads to cabinet](https://cyprus-mail.com/2026/09/15/plan-for-irrigation-water-heads-to-cabinet) — Cyprus Mail
- [Farmers to get additional 3.5m cubic metres of water](https://cyprus-mail.com/2026/09/16/farmers-to-get-additional-3-5m-cubic-metres-of-water) — Cyprus Mail
- [Implementation of four new desalination plants underway, minister says](https://www.parikiaki.com/2026/09/implementation-of-four-new-desalination-plants-underway-in-cyprus-minister-says/) — Parikiaki

🔗 https://fragmata.info
`;
};

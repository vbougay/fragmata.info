import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.187, totalSince: 19.552 }, storage: { current: { amount: 41.867, percentage: 36.4 }, lastYear: { amount: 22.042, percentage: 19.2 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.030, totalSince: 3.316 }, storage: { current: { amount: 3.572, percentage: 20.9 }, lastYear: { amount: 4.511, percentage: 26.4 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.007, totalSince: 1.513 }, storage: { current: { amount: 2.445, percentage: 17.6 }, lastYear: { amount: 3.31, percentage: 23.9 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.020, totalSince: 3.156 }, storage: { current: { amount: 5.764, percentage: 37.2 }, lastYear: { amount: 5.774, percentage: 37.3 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.029, totalSince: 7.509 }, storage: { current: { amount: 7.132, percentage: 52.8 }, lastYear: { amount: 3.4, percentage: 25.2 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.0, totalSince: 17.031 }, storage: { current: { amount: 1.517, percentage: 35.3 }, lastYear: { amount: 2.636, percentage: 61.3 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.004, totalSince: 1.321 }, storage: { current: { amount: 1.948, percentage: 57.3 }, lastYear: { amount: 1.275, percentage: 37.5 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.149, percentage: 2.2 }, lastYear: { amount: 1.141, percentage: 16.8 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.042, totalSince: 17.924 }, storage: { current: { amount: 20.377, percentage: 38.9 }, lastYear: { amount: 12.545, percentage: 24.0 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.011, totalSince: 8.308 }, storage: { current: { amount: 8.355, percentage: 48.7 }, lastYear: { amount: 4.332, percentage: 25.2 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.0, totalSince: 0.917 }, storage: { current: { amount: 1.974, percentage: 90.6 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.037, totalSince: 8.788 }, storage: { current: { amount: 10.887, percentage: 45.4 }, lastYear: { amount: 5.74, percentage: 23.9 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.385, percentage: 38.9 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.378, percentage: 44.0 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.243 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.177, percentage: 59.4 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.008, totalSince: 1.636 }, storage: { current: { amount: 1.637, percentage: 96.9 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.002, totalSince: 1.418 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.315, percentage: 22.0 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.318, percentage: 87.6 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.0, totalSince: 2.588 }, storage: { current: { amount: 2.8, percentage: 100.0 }, lastYear: { amount: 1.004, percentage: 35.9 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.0, totalSince: 1.067 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.461, percentage: 73.1 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.909, percentage: 65.3 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through April 23, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:20.25, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:94.733 },
];

export const getReportDate = (): string => "23-APR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 16.55 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 36.4% (41.9 MCM) — new season high, 17.2pp above last year\'s 19.2%. Arminou→Kouris transfer: 16.55 MCM since October.',
      el: 'Ο Κούρης στο 36.4% (41.9 ΕΚΜ) — νέο μέγιστο σεζόν, 17.2μ.π. πάνω από πέρυσι (19.2%). Μεταφορά Αρμίνου→Κούρης: 16.55 ΕΚΜ.',
      ru: 'Курис на 36.4% (41.9 МКМ) — новый сезонный максимум, +17.2пп выше прошлогодних 19.2%. Перекачка Арминоу→Курис: 16.55 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 20.9% (3.57 MCM) — still 5.5pp below last year\'s 26.4%. Steady inflow with 3.32 MCM received this season.',
      el: 'Ο Καλαβασός στο 20.9% (3.57 ΕΚΜ) — 5.5μ.π. κάτω από πέρυσι (26.4%). Σταθερή εισροή, 3.32 ΕΚΜ εφέτος.',
      ru: 'Калавасос на 20.9% (3.57 МКМ) — на 5.5пп ниже прошлогодних 26.4%. Стабильный приток, 3.32 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 17.6% (2.45 MCM) — 6.3pp below last year\'s 23.9%. Seasonal inflow 1.51 MCM — gradual recovery continues.',
      el: 'Η Λεύκαρα στο 17.6% (2.45 ΕΚΜ) — 6.3μ.π. κάτω από πέρυσι (23.9%). Εισροή σεζόν 1.51 ΕΚΜ — σταδιακή ανάκαμψη.',
      ru: 'Лефкара на 17.6% (2.45 МКМ) — на 6.3пп ниже прошлогодних 23.9%. Приток 1.51 МКМ — постепенное восстановление продолжается.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 37.2% (5.76 MCM) — nearly matching last year\'s 37.3%. Seasonal inflow 3.16 MCM, stable position.',
      el: 'Ο Διπόταμος στο 37.2% (5.76 ΕΚΜ) — σχεδόν ισόβαθμος με πέρυσι (37.3%). Εισροή 3.16 ΕΚΜ, σταθερή θέση.',
      ru: 'Дипотамос на 37.2% (5.76 МКМ) — почти наравне с прошлогодними 37.3%. Приток 3.16 МКМ — стабильная позиция.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 52.8% (7.13 MCM) — new season high, holding above 50% for the fourth day. 27.6pp above last year\'s 25.2%.',
      el: 'Η Γερμασόγεια στο 52.8% (7.13 ΕΚΜ) — νέο μέγιστο, τέταρτη ημέρα πάνω από 50%. 27.6μ.π. πάνω από πέρυσι (25.2%).',
      ru: 'Гермасойя на 52.8% (7.13 МКМ) — новый максимум, четвёртый день выше 50%. +27.6пп выше прошлогодних 25.2%.',
    },
    'Arminou': {
      en: 'Arminou at 35.3% (1.52 MCM) — 16.55 MCM pumped to Kouris since October; transfer pace continues. 26.0pp below last year.',
      el: 'Ο Αρμίνου στο 35.3% (1.52 ΕΚΜ) — 16.55 ΕΚΜ στον Κούρη από τον Οκτώβριο. 26.0μ.π. κάτω από πέρυσι.',
      ru: 'Арминоу на 35.3% (1.52 МКМ) — 16.55 МКМ перекачано в Курис с октября. На 26.0пп ниже прошлогодних.',
    },
    'Polemidia': {
      en: 'Polemidia at 57.3% (1.95 MCM) — new season high, 19.8pp above last year\'s 37.5%. Steady climb continues.',
      el: 'Η Πολεμίδια στο 57.3% (1.95 ΕΚΜ) — νέο μέγιστο σεζόν, 19.8μ.π. πάνω από πέρυσι (37.5%). Σταθερή άνοδος.',
      ru: 'Полемидия на 57.3% (1.95 МКМ) — новый сезонный максимум, +19.8пп выше прошлогодних 37.5%. Устойчивый рост.',
    },
    'Achna': {
      en: 'Achna critically low at 2.2% (0.15 MCM), zero inflow all season. Far below last year\'s 16.8%. No recovery in sight.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.2% (0.15 ΕΚΜ), χωρίς εισροή. Πολύ κάτω από πέρυσι (16.8%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.2% (0.15 МКМ), без притока за сезон. Далеко ниже прошлогодних 16.8%. Без перспектив.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 38.9% (20.4 MCM) — new season high, holding above 20 MCM. 14.9pp above last year\'s 24.0%. Inflow 17.92 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 38.9% (20.4 ΕΚΜ) — νέο μέγιστο, πάνω από 20 ΕΚΜ. 14.9μ.π. πάνω από πέρυσι (24.0%). Εισροή 17.92 ΕΚΜ.',
      ru: 'Аспрокреммос на 38.9% (20.4 МКМ) — новый максимум, выше 20 МКМ. +14.9пп выше прошлого года (24.0%). Приток 17.92 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 48.7% (8.36 MCM) — new season high, 23.5pp above last year\'s 25.2%. One good rain from the 50% milestone.',
      el: 'Ο Καννάβιου στο 48.7% (8.36 ΕΚΜ) — νέο μέγιστο, 23.5μ.π. πάνω από πέρυσι (25.2%). Μια καλή βροχή από το 50%.',
      ru: 'Каннавиу на 48.7% (8.36 МКМ) — новый максимум, +23.5пп выше прошлогодних 25.2%. Одного дождя до отметки 50%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 90.6% (1.97 MCM) — holding above 90%, new season high. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 90.6% (1.97 ΕΚΜ) — πάνω από 90%, νέο μέγιστο. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 90.6% (1.97 МКМ) — выше 90%, новый максимум. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 45.4% (10.9 MCM) — new season high, 21.5pp above last year\'s 23.9%. Inflow 8.79 MCM since October.',
      el: 'Ο Εύρετου στο 45.4% (10.9 ΕΚΜ) — νέο μέγιστο σεζόν, 21.5μ.π. πάνω από πέρυσι (23.9%). Εισροή 8.79 ΕΚΜ.',
      ru: 'Эвретоу на 45.4% (10.9 МКМ) — новый сезонный максимум, +21.5пп выше прошлогодних 23.9%. Приток 8.79 МКМ.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), continuously overflowing. Up from 38.9% last year — more than doubled year over year.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), συνεχής υπερχείλιση. Από 38.9% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), продолжает переливаться. Год назад 38.9% — более чем удвоение.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), continuously overflowing. Up from 44.0% last year — more than doubled year over year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), συνεχής υπερχείλιση. Αύξηση από 44.0% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), продолжает переливаться. Рост с 44.0% год назад — более чем удвоение.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 100% (0.30 MCM), overflowing since late March. Up from 59.4% last year — Chrysochou region fully topped up.',
      el: 'Η Αγία Μαρίνα στο 100% (0.30 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Από 59.4% πέρυσι — Χρυσοχούς πλήρης.',
      ru: 'Агия Марина на 100% (0.30 МКМ), переливается с конца марта. Рост с 59.4% год назад — Хрисоху полностью заполнена.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 96.9% (1.64 MCM) — new season high, overflow imminent. Was 2.8% last year — 34× year-over-year recovery.',
      el: 'Τα Βυζακιά στο 96.9% (1.64 ΕΚΜ) — νέο μέγιστο σεζόν, επικείμενη υπερχείλιση. Από 2.8% πέρυσι — ανάκαμψη 34×.',
      ru: 'Визакия на 96.9% (1.64 МКМ) — новый сезонный максимум, переполнение неизбежно. Год назад 2.8% — восстановление в 34×.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 100% (1.43 MCM) — at overflow capacity for weeks. Was 22.0% last year — 4.5× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 100% (1.43 ΕΚΜ) — σε υπερχείλιση εδώ και εβδομάδες. Από 22.0% πέρυσι — 4.5× ανάκαμψη.',
      ru: 'Ксилиатос на 100% (1.43 МКМ) — на уровне перелива уже несколько недель. Год назад 22.0% — восстановление в 4.5×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 87.6% last year, now at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 87.6% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 87.6% год назад, полная мощность.',
    },
    'Tamassos': {
      en: 'Tamassos full at 100% (2.80 MCM) — overflowing since late March. Was 35.9% last year — 2.8× year-over-year recovery.',
      el: 'Ο Ταμασός γεμάτος στο 100% (2.80 ΕΚΜ) — υπερχείλιση από τέλη Μαρτίου. Από 35.9% πέρυσι — 2.8× ΕΤΕ.',
      ru: 'Тамассос заполнен на 100% (2.80 МКМ) — переливается с конца марта. Год назад 35.9% — в 2.8× год к году.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 73.1% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 73.1% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 73.1% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 65.3% last year — 1.5× year-over-year improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 65.3% πέρυσι — 1.5× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 65.3% год назад — улучшение в 1.5×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (15 Απριλίου — 23 Απριλίου 2026)

Συνολική αποθήκευση **38.3%** (111.6 ΕΚΜ), άνοδος από 36.8% (107.2 ΕΚΜ) στις 15/4 — **+4.4 ΕΚΜ σε 8 ημέρες**. Νέο μέγιστο σεζόν. **14.8μ.π. πάνω από πέρυσι** (23.5%). Εισροή σεζόν 25/26: **94.7 ΕΚΜ** — Απρίλιος 2026 με 20.3 ΕΚΜ παραμένει ο **2ος καλύτερος Απρίλιος** στα αρχεία (πίσω μόνο από το 2018/19 με 25.3 ΕΚΜ). Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 16.55 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Βυζακιά](/el/dam/vyzakia/) 96.9%** (+7.8μ.π. από 15/4) — νέο μέγιστο σεζόν, επικείμενη υπερχείλιση, 34× πέρυσι (2.8%)
- **[Γερμασόγεια](/el/dam/germasoyeia/) 52.8%** (+3.5μ.π.) — 4η ημέρα πάνω από 50%, νέο μέγιστο, 27.6μ.π. πάνω από πέρυσι
- **[Πολεμίδια](/el/dam/polemidia/) 57.3%** (+1.8μ.π.) — νέο μέγιστο σεζόν, 19.8μ.π. πάνω από πέρυσι
- [Κούρης](/el/dam/kouris/) 36.4% (41.9 ΕΚΜ, +2.5 ΕΚΜ) — νέο μέγιστο, 17.2μ.π. πάνω από πέρυσι
- [Καννάβιου](/el/dam/kannaviou/) 48.7% (+0.8μ.π.) — πλησιάζει το 50%, νέο μέγιστο
- [Αρμίνου](/el/dam/arminou/) 35.3% — πτώση 15.4μ.π. λόγω μεταφοράς 16.55 ΕΚΜ στον Κούρη
- 8 φράγματα στο 100% — [Αχνά](/el/dam/achna/) εξακολουθεί στο 2.2% χωρίς εισροή

**Στα μέσα:**
- [Εισροές νερού άνω των 2 ΕΚΜ το τελευταίο τριήμερο — πλησιάζει 40%](https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-ta-2-ekm-oi-eisroes-nerou-to-telefteo-triimero-plisiazei-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
- [Υπερκαλύφθηκε η μέση βροχόπτωση υδρολογικού έτους](https://kitasweather.com/news/fragmata-vroxoptosi/iperkalifthike-i-mesi-vroxoptosi-tou-idrologikou-etous-apo-arxes-apriliou-plirotita-fragmaton/) — KitasWeather
- [Ζήτημα διαχείρισης νερού στην Κύπρο — πως να διαχειριστούμε αποτελεσματικά](https://cyprus-mail.com/2026/04/22/water-scarcity-in-cyprus-how-can-we-effectively-manage-the-crisis) — Cyprus Mail
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (15 апреля — 23 апреля 2026)

Общий запас **38.3%** (111.6 МКМ), рост с 36.8% (107.2 МКМ) на 15/4 — **+4.4 МКМ за 8 дней**. Новый сезонный максимум. Запасы **на 14.8пп выше прошлогодних** (23.5%). Приток сезона 25/26: **94.7 МКМ** — апрель 2026 с 20.3 МКМ по-прежнему остаётся **2-м лучшим апрелем в истории** (уступает только 2018/19 с 25.3 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 16.55 МКМ.

**Основные изменения:**
- **[Визакия](/ru/dam/vyzakia/) 96.9%** (+7.8пп с 15/4) — новый максимум, переполнение неизбежно, 34× прошлогодних 2.8%
- **[Гермасойя](/ru/dam/germasoyeia/) 52.8%** (+3.5пп) — четвёртый день выше 50%, новый максимум, +27.6пп выше прошлого года
- **[Полемидия](/ru/dam/polemidia/) 57.3%** (+1.8пп) — новый сезонный максимум, +19.8пп выше прошлого года
- [Курис](/ru/dam/kouris/) 36.4% (41.9 МКМ, +2.5 МКМ) — новый максимум, +17.2пп выше прошлого года
- [Каннавиу](/ru/dam/kannaviou/) 48.7% (+0.8пп) — приближается к 50%, новый максимум
- [Арминоу](/ru/dam/arminou/) 35.3% — снижение на 15.4пп из-за перекачки 16.55 МКМ в Курис
- 8 дамб переполнены; [Ахна](/ru/dam/achna/) по-прежнему 2.2% — без притока за сезон

**В СМИ:**
- [Приток воды превысил 2 МКМ за последние 3 дня — наполненность приближается к 40%](https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-ta-2-ekm-oi-eisroes-nerou-to-telefteo-triimero-plisiazei-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
- [Водохранилища Кипра заполнились до 37.9% после недавних дождей](https://ruscyprus.com/news/vodohranilishcha-kipra-zapolnilis-do-37-9/55028) — RusCyprus
- [Управление водными ресурсами Кипра: как справиться с кризисом](https://cyprus-mail.com/2026/04/22/water-scarcity-in-cyprus-how-can-we-effectively-manage-the-crisis) — Cyprus Mail
`;
  }
  return `
### Recent Changes (April 15 — April 23, 2026)

Total storage at **38.3%** (111.6 MCM), up from 36.8% (107.2 MCM) on Apr 15 — **+4.4 MCM in 8 days**. New season high. **14.8pp above last year** (23.5%). Season total: **94.7 MCM** — April 2026 at 20.3 MCM remains the **2nd highest April on record** (behind only 2018/19's 25.3 MCM). [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 16.55 MCM.

**Notable movements:**
- **[Vyzakia](/dam/vyzakia/) at 96.9%** (+7.8pp since Apr 15) — new season high, overflow imminent, 34× last year's 2.8%
- **[Germasoyeia](/dam/germasoyeia/) 52.8%** (+3.5pp) — fourth day above 50%, new season high, 27.6pp above last year
- **[Polemidia](/dam/polemidia/) 57.3%** (+1.8pp) — new season high, 19.8pp above last year
- [Kouris](/dam/kouris/) 36.4% (41.9 MCM, +2.5 MCM) — new season high, 17.2pp above last year
- [Kannaviou](/dam/kannaviou/) 48.7% (+0.8pp) — approaching 50%, new season high
- [Arminou](/dam/arminou/) 35.3% — down 15.4pp as 16.55 MCM pumped to [Kouris](/dam/kouris/) since October
- 8 dams overflowing at 100%; [Achna](/dam/achna/) still 2.2% — zero inflow all season

**In the media:**
- [2+ MCM inflow in three days, dam fullness approaching 40%](https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-ta-2-ekm-oi-eisroes-nerou-to-telefteo-triimero-plisiazei-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
- [Water scarcity in Cyprus: how can we effectively manage the crisis?](https://cyprus-mail.com/2026/04/22/water-scarcity-in-cyprus-how-can-we-effectively-manage-the-crisis) — Cyprus Mail
- [Dam capacity reaches 38%, up from last year](https://cyprus-mail.com/2026/04/20/dam-capacity-reaches-38-up-from-last-year) — Cyprus Mail
`;
};

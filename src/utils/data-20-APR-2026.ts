import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for April 20, 2026 (parsed from 20-APR-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.625, totalSince: 19.105 }, storage: { current: { amount: 41.24, percentage: 35.9 }, lastYear: { amount: 22.088, percentage: 19.2 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.181, totalSince: 3.208 }, storage: { current: { amount: 3.47, percentage: 20.3 }, lastYear: { amount: 4.537, percentage: 26.5 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.043, totalSince: 1.483 }, storage: { current: { amount: 2.419, percentage: 17.5 }, lastYear: { amount: 3.361, percentage: 24.3 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.107, totalSince: 3.074 }, storage: { current: { amount: 5.682, percentage: 36.7 }, lastYear: { amount: 5.756, percentage: 37.1 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.239, totalSince: 7.408 }, storage: { current: { amount: 7.039, percentage: 52.1 }, lastYear: { amount: 3.418, percentage: 25.3 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.343, totalSince: 16.807 }, storage: { current: { amount: 1.501, percentage: 34.9 }, lastYear: { amount: 2.631, percentage: 61.2 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.016, totalSince: 1.292 }, storage: { current: { amount: 1.921, percentage: 56.5 }, lastYear: { amount: 1.287, percentage: 37.9 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.149, percentage: 2.2 }, lastYear: { amount: 1.148, percentage: 16.9 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.327, totalSince: 17.731 }, storage: { current: { amount: 20.21, percentage: 38.6 }, lastYear: { amount: 12.607, percentage: 24.1 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.095, totalSince: 8.246 }, storage: { current: { amount: 8.317, percentage: 48.4 }, lastYear: { amount: 4.351, percentage: 25.3 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.008, totalSince: 0.914 }, storage: { current: { amount: 1.974, percentage: 90.6 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.134, totalSince: 8.657 }, storage: { current: { amount: 10.764, percentage: 44.9 }, lastYear: { amount: 5.76, percentage: 24.0 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.387, percentage: 39.1 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.378, percentage: 44.0 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.243 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.176, percentage: 59.1 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.059, totalSince: 1.599 }, storage: { current: { amount: 1.6, percentage: 94.7 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 1.413 }, storage: { current: { amount: 1.425, percentage: 99.7 }, lastYear: { amount: 0.318, percentage: 22.2 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.319, percentage: 87.9 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.009, totalSince: 2.586 }, storage: { current: { amount: 2.8, percentage: 100.0 }, lastYear: { amount: 1.009, percentage: 36.0 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.003, totalSince: 1.065 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.463, percentage: 73.2 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.916, percentage: 65.5 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data - updated with 25/26 data through April 20, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:18.795, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:93.278 },
];

export const getReportDate = (): string => "20-APR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 16.31 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 35.9% (41.2 MCM) — new season high, 16.7pp above last year\'s 19.2%. Arminou→Kouris transfer: 16.31 MCM since October.',
      el: 'Ο Κούρης στο 35.9% (41.2 ΕΚΜ) — νέο μέγιστο σεζόν, 16.7μ.π. πάνω από πέρυσι (19.2%). Μεταφορά Αρμίνου→Κούρης: 16.31 ΕΚΜ.',
      ru: 'Курис на 35.9% (41.2 МКМ) — новый сезонный максимум, +16.7пп выше прошлогодних 19.2%. Перекачка Арминоу→Курис: 16.31 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 20.3% (3.47 MCM) — still 6.2pp below last year\'s 26.5%. Recovering with 3.21 MCM seasonal inflow.',
      el: 'Ο Καλαβασός στο 20.3% (3.47 ΕΚΜ) — 6.2μ.π. κάτω από πέρυσι (26.5%). Σταδιακή ανάκαμψη, εισροή σεζόν 3.21 ΕΚΜ.',
      ru: 'Калавасос на 20.3% (3.47 МКМ) — на 6.2пп ниже прошлогодних 26.5%. Постепенное восстановление, приток 3.21 МКМ.',
    },
    'Lefkara': {
      en: 'Lefkara at 17.5% (2.42 MCM) — 6.8pp below last year\'s 24.3%. Seasonal inflow 1.48 MCM — gradual recovery continues.',
      el: 'Η Λεύκαρα στο 17.5% (2.42 ΕΚΜ) — 6.8μ.π. κάτω από πέρυσι (24.3%). Εισροή σεζόν 1.48 ΕΚΜ — σταδιακή ανάκαμψη.',
      ru: 'Лефкара на 17.5% (2.42 МКМ) — на 6.8пп ниже прошлогодних 24.3%. Приток 1.48 МКМ — постепенное восстановление продолжается.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 36.7% (5.68 MCM) — nearly matching last year\'s 37.1%. Seasonal inflow 3.07 MCM, stable recovery.',
      el: 'Ο Διπόταμος στο 36.7% (5.68 ΕΚΜ) — σχεδόν ισόβαθμος με πέρυσι (37.1%). Εισροή 3.07 ΕΚΜ, σταθερή ανάκαμψη.',
      ru: 'Дипотамос на 36.7% (5.68 МКМ) — почти наравне с прошлогодними 37.1%. Приток 3.07 МКМ — стабильное восстановление.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia crossed 50% — now at 52.1% (7.04 MCM), new season high. 26.8pp above last year\'s 25.3%. Inflow 7.41 MCM.',
      el: 'Η Γερμασόγεια πέρασε το 50% — τώρα στο 52.1% (7.04 ΕΚΜ), νέο μέγιστο. 26.8μ.π. πάνω από πέρυσι (25.3%). Εισροή 7.41 ΕΚΜ.',
      ru: 'Гермасойя пересекла 50% — теперь 52.1% (7.04 МКМ), новый сезонный максимум. +26.8пп выше прошлого года (25.3%).',
    },
    'Arminou': {
      en: 'Arminou down to 34.9% (1.50 MCM) as 16.31 MCM pumped to Kouris since October — transfer accelerated in April. 26.3pp below last year.',
      el: 'Ο Αρμίνου στο 34.9% (1.50 ΕΚΜ) — 16.31 ΕΚΜ μεταφέρθηκαν στον Κούρη, με επιτάχυνση τον Απρίλιο. 26.3μ.π. κάτω από πέρυσι.',
      ru: 'Арминоу снизился до 34.9% (1.50 МКМ) — 16.31 МКМ перекачано в Курис с октября, ускорение в апреле. На 26.3пп ниже прошлогодних.',
    },
    'Polemidia': {
      en: 'Polemidia at 56.5% (1.92 MCM) — new season high, 18.6pp above last year\'s 37.9%. Steady progress since January.',
      el: 'Η Πολεμίδια στο 56.5% (1.92 ΕΚΜ) — νέο μέγιστο σεζόν, 18.6μ.π. πάνω από πέρυσι (37.9%). Σταθερή άνοδος από τον Ιανουάριο.',
      ru: 'Полемидия на 56.5% (1.92 МКМ) — новый сезонный максимум, +18.6пп выше прошлогодних 37.9%. Устойчивый рост с января.',
    },
    'Achna': {
      en: 'Achna critically low at 2.2% (0.15 MCM), zero inflow all season. Far below last year\'s 16.9%. No recovery in sight.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.2% (0.15 ΕΚΜ), χωρίς εισροή. Πολύ κάτω από πέρυσι (16.9%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.2% (0.15 МКМ), без притока за сезон. Далеко ниже прошлогодних 16.9%. Без перспектив.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 38.6% (20.2 MCM) — crossed 20 MCM, new season high. 14.5pp above last year\'s 24.1%. Inflow 17.73 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 38.6% (20.2 ΕΚΜ) — νέο μέγιστο, πέρασε τα 20 ΕΚΜ. 14.5μ.π. πάνω από πέρυσι (24.1%). Εισροή 17.73 ΕΚΜ.',
      ru: 'Аспрокреммос на 38.6% (20.2 МКМ) — пересёк 20 МКМ, новый максимум. +14.5пп выше прошлого года (24.1%). Приток 17.73 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 48.4% (8.32 MCM) — new season high, 23.1pp above last year\'s 25.3%. Approaching the 50% milestone.',
      el: 'Ο Καννάβιου στο 48.4% (8.32 ΕΚΜ) — νέο μέγιστο, 23.1μ.π. πάνω από πέρυσι (25.3%). Πλησιάζει το 50%.',
      ru: 'Каннавиу на 48.4% (8.32 МКМ) — новый максимум, +23.1пп выше прошлогодних 25.3%. Приближается к 50%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos crossed 90% — now at 90.6% (1.97 MCM), new season high. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος πέρασε το 90% — τώρα στο 90.6% (1.97 ΕΚΜ), νέο μέγιστο. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос пересёк 90% — теперь 90.6% (1.97 МКМ), новый максимум. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 44.9% (10.8 MCM) — new season high, 20.9pp above last year\'s 24.0%. Inflow 8.66 MCM since October.',
      el: 'Ο Εύρετου στο 44.9% (10.8 ΕΚΜ) — νέο μέγιστο σεζόν, 20.9μ.π. πάνω από πέρυσι (24.0%). Εισροή 8.66 ΕΚΜ.',
      ru: 'Эвретоу на 44.9% (10.8 МКМ) — новый сезонный максимум, +20.9пп выше прошлогодних 24.0%. Приток 8.66 МКМ.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), continuously overflowing. Up from 39.1% last year — more than doubled year over year.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), συνεχής υπερχείλιση. Από 39.1% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), продолжает переливаться. Год назад 39.1% — более чем удвоение.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), continuously overflowing. Up from 44.0% last year — more than doubled year over year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), συνεχής υπερχείλιση. Αύξηση από 44.0% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), продолжает переливаться. Рост с 44.0% год назад — более чем удвоение.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 100% (0.30 MCM), overflowing since late March. Up from 59.1% last year — Chrysochou region fully topped up.',
      el: 'Η Αγία Μαρίνα στο 100% (0.30 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Από 59.1% πέρυσι — Χρυσοχούς πλήρης.',
      ru: 'Агия Марина на 100% (0.30 МКМ), переливается с конца марта. Рост с 59.1% год назад — Хрисоху полностью заполнена.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 94.7% (1.60 MCM) — new season high, approaching full capacity. Was 2.8% last year — 33× year-over-year recovery.',
      el: 'Τα Βυζακιά στο 94.7% (1.60 ΕΚΜ) — νέο μέγιστο σεζόν, πλησιάζει το 100%. Από 2.8% πέρυσι — ανάκαμψη 33×.',
      ru: 'Визакия на 94.7% (1.60 МКМ) — новый сезонный максимум, приближается к 100%. Год назад 2.8% — восстановление в 33×.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 99.7% (1.43 MCM) — essentially full, nearly overflowing. Was 22.2% last year — 4.5× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 99.7% (1.43 ΕΚΜ) — σχεδόν γεμάτος, οριακά κάτω από υπερχείλιση. Από 22.2% πέρυσι — 4.5× ανάκαμψη.',
      ru: 'Ксилиатос на 99.7% (1.43 МКМ) — практически полный, на грани перелива. Был 22.2% год назад — восстановление в 4.5×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 87.9% last year, now at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 87.9% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 87.9% год назад, полная мощность.',
    },
    'Tamassos': {
      en: 'Tamassos reached 100% (2.80 MCM) — now full after weeks of strong inflow. Was 36.0% last year — 2.8× year-over-year recovery.',
      el: 'Ο Ταμασός έφτασε στο 100% (2.80 ΕΚΜ) — πλήρης μετά από εβδομάδες έντονης εισροής. Από 36.0% πέρυσι — 2.8× ΕΤΕ.',
      ru: 'Тамассос достиг 100% (2.80 МКМ) — теперь полный после недель сильного притока. Год назад 36.0% — в 2.8× год к году.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 73.2% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 73.2% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 73.2% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 65.5% last year — 1.5× year-over-year improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 65.5% πέρυσι — 1.5× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 65.5% год назад — улучшение в 1.5×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (9 Απριλίου — 20 Απριλίου 2026)

Συνολική αποθήκευση **37.9%** (110.2 ΕΚΜ), άνοδος από 35.3% (102.6 ΕΚΜ) στις 9/4 — **+7.6 ΕΚΜ σε 11 ημέρες**. Τώρα **14.3μ.π. πάνω από πέρυσι** (23.6%). Εισροή σεζόν 25/26: **93.3 ΕΚΜ** — ο Απρίλιος 2026 με 18.8 ΕΚΜ είναι ήδη ο **2ος καλύτερος Απρίλιος** στα αρχεία (πίσω μόνο από το 2018/19). Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 16.31 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Γερμασόγεια](/el/dam/germasoyeia/) 52.1%** (+7.0μ.π. από 9/4) — πέρασε το 50%, νέο μέγιστο, 26.8μ.π. πάνω από πέρυσι
- **[Βυζακιά](/el/dam/vyzakia/) 94.7%** (+14.8μ.π.) — νέο μέγιστο σεζόν, πλησιάζει το 100%, από 2.8% πέρυσι
- **[Μαυροκόλυμπος](/el/dam/mavrokolympos/) 90.6%** (+4.8μ.π.) — πέρασε το 90%, από 0% πέρυσι
- [Κούρης](/el/dam/kouris/) 35.9% (41.2 ΕΚΜ, +3.7 ΕΚΜ) — νέο μέγιστο, 16.7μ.π. πάνω από πέρυσι
- [Ασπρόκρεμμος](/el/dam/asprokremmos/) 38.6% — πέρασε τα 20 ΕΚΜ, νέο μέγιστο
- [Αρμίνου](/el/dam/arminou/) 34.9% — απότομη πτώση λόγω επιτάχυνσης άντλησης (+1.06 ΕΚΜ τελευταίες 4 ημέρες)
- [Ταμασός](/el/dam/tamassos/) έφτασε στο 100% — πλήρης
- 8 φράγματα στο 100% — [Αχνά](/el/dam/achna/) εξακολουθεί στο 2.2% χωρίς εισροή

**Στα μέσα:**
- [Υπερκαλύφθηκε η μέση βροχόπτωση Απριλίου — μετρήσεις 24ωρου](https://kitasweather.com/news/fragmata-vroxoptosi/iperkalifthike-i-mesi-vroxoptosi-apriliou-metriseis-vroxoptosis-telefteou-24orou/) — KitasWeather
- [Υπερκαλύφθηκε η μέση βροχόπτωση υδρολογικού έτους από αρχές Απριλίου](https://kitasweather.com/news/fragmata-vroxoptosi/iperkalifthike-i-mesi-vroxoptosi-tou-idrologikou-etous-apo-arxes-apriliou-plirotita-fragmaton/) — KitasWeather
- [ΤΑΥ: Μέτρα για εξασφάλιση υδροδότησης καλοκαιριού](https://cyprus-mail.com/2026/04/06/water-development-department-acts-to-secure-summer-water-supply/) — Cyprus Mail
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (9 апреля — 20 апреля 2026)

Общий запас **37.9%** (110.2 МКМ), рост с 35.3% (102.6 МКМ) на 9/4 — **+7.6 МКМ за 11 дней**. Запасы теперь **на 14.3пп выше прошлогодних** (23.6%). Приток сезона 25/26: **93.3 МКМ** — апрель 2026 с 18.8 МКМ уже стал **2-м лучшим апрелем в истории наблюдений** (уступает только 2018/19). Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 16.31 МКМ.

**Основные изменения:**
- **[Гермасойя](/ru/dam/germasoyeia/) 52.1%** (+7.0пп с 9/4) — пересекла 50%, новый сезонный максимум, +26.8пп выше прошлого года
- **[Визакия](/ru/dam/vyzakia/) 94.7%** (+14.8пп) — новый максимум, приближается к 100%, год назад 2.8%
- **[Мавроколимпос](/ru/dam/mavrokolympos/) 90.6%** (+4.8пп) — пересёк 90%, год назад 0%
- [Курис](/ru/dam/kouris/) 35.9% (41.2 МКМ, +3.7 МКМ) — новый максимум, +16.7пп выше прошлого года
- [Аспрокреммос](/ru/dam/asprokremmos/) 38.6% — пересёк 20 МКМ, новый максимум
- [Арминоу](/ru/dam/arminou/) 34.9% — резкое падение из-за ускорения перекачки (+1.06 МКМ за последние 4 дня)
- [Тамассос](/ru/dam/tamassos/) достиг 100% — теперь полный
- 8 дамб переполнены; [Ахна](/ru/dam/achna/) по-прежнему 2.2% — без притока за сезон

**В СМИ:**
- [Апрельская норма осадков превышена — данные за последние 24 часа](https://kitasweather.com/news/fragmata-vroxoptosi/iperkalifthike-i-mesi-vroxoptosi-apriliou-metriseis-vroxoptosis-telefteou-24orou/) — KitasWeather
- [Годовая норма осадков превышена с начала апреля — уровень водохранилищ](https://kitasweather.com/news/fragmata-vroxoptosi/iperkalifthike-i-mesi-vroxoptosi-tou-idrologikou-etous-apo-arxes-apriliou-plirotita-fragmaton/) — KitasWeather
- [WDD принимает меры для обеспечения водоснабжения летом](https://cyprus-mail.com/2026/04/06/water-development-department-acts-to-secure-summer-water-supply/) — Cyprus Mail
`;
  }
  return `
### Recent Changes (April 9 — April 20, 2026)

Total storage at **37.9%** (110.2 MCM), up from 35.3% (102.6 MCM) on Apr 9 — **+7.6 MCM in 11 days**. **14.3pp above last year** (23.6%). Season total: **93.3 MCM** — April 2026 alone has delivered 18.8 MCM, already the **2nd highest April on record** (behind only 2018/19's 25.3 MCM). [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 16.31 MCM.

**Notable movements:**
- **[Germasoyeia](/dam/germasoyeia/) crossed 50% to 52.1%** (+7.0pp since Apr 9) — new season high, 26.8pp above last year
- **[Vyzakia](/dam/vyzakia/) at 94.7%** (+14.8pp) — new season high, approaching full capacity, was 2.8% last year
- **[Mavrokolympos](/dam/mavrokolympos/) crossed 90% to 90.6%** (+4.8pp) — was 0% last year
- [Kouris](/dam/kouris/) 35.9% (41.2 MCM, +3.7 MCM) — new season high, 16.7pp above last year
- [Asprokremmos](/dam/asprokremmos/) crossed 20 MCM at 38.6% — new season high
- [Arminou](/dam/arminou/) dropped to 34.9% — transfer to [Kouris](/dam/kouris/) accelerated (+1.06 MCM in last 4 days)
- [Tamassos](/dam/tamassos/) reached 100% — now full
- 8 dams overflowing at 100%; [Achna](/dam/achna/) still 2.2% — zero inflow all season

**In the media:**
- [April rainfall average exceeded — 24-hour measurements](https://kitasweather.com/news/fragmata-vroxoptosi/iperkalifthike-i-mesi-vroxoptosi-apriliou-metriseis-vroxoptosis-telefteou-24orou/) — KitasWeather
- [Hydrological year rainfall average exceeded since early April](https://kitasweather.com/news/fragmata-vroxoptosi/iperkalifthike-i-mesi-vroxoptosi-tou-idrologikou-etous-apo-arxes-apriliou-plirotita-fragmaton/) — KitasWeather
- [Water development department acts to secure summer water supply](https://cyprus-mail.com/2026/04/06/water-development-department-acts-to-secure-summer-water-supply/) — Cyprus Mail
`;
};

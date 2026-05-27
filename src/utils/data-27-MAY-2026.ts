import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.093, totalSince: 23.869 }, storage: { current: { amount: 47.63, percentage: 41.4 }, lastYear: { amount: 20.865, percentage: 18.1 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.006, totalSince: 3.997 }, storage: { current: { amount: 4.147, percentage: 24.3 }, lastYear: { amount: 4.111, percentage: 24.0 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.002, totalSince: 1.673 }, storage: { current: { amount: 2.554, percentage: 18.4 }, lastYear: { amount: 2.454, percentage: 17.7 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.004, totalSince: 3.616 }, storage: { current: { amount: 5.909, percentage: 38.1 }, lastYear: { amount: 5.97, percentage: 38.5 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.016, totalSince: 8.71 }, storage: { current: { amount: 8.125, percentage: 60.2 }, lastYear: { amount: 2.983, percentage: 22.1 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.074, totalSince: 20.733 }, storage: { current: { amount: 1.779, percentage: 41.4 }, lastYear: { amount: 2.696, percentage: 62.7 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.011, totalSince: 1.63 }, storage: { current: { amount: 2.174, percentage: 63.9 }, lastYear: { amount: 1.208, percentage: 35.5 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.149, percentage: 2.2 }, lastYear: { amount: 0.601, percentage: 8.8 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.036, totalSince: 20.024 }, storage: { current: { amount: 21.982, percentage: 42.0 }, lastYear: { amount: 11.414, percentage: 21.8 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.018, totalSince: 9.335 }, storage: { current: { amount: 8.984, percentage: 52.3 }, lastYear: { amount: 3.98, percentage: 23.2 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.0, totalSince: 0.951 }, storage: { current: { amount: 1.928, percentage: 88.4 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.015, totalSince: 10.087 }, storage: { current: { amount: 12.036, percentage: 50.2 }, lastYear: { amount: 5.395, percentage: 22.5 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.001, totalSince: 1.033 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.33, percentage: 33.3 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.001, totalSince: 0.818 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.327, percentage: 38.0 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.001, totalSince: 0.279 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.147, percentage: 49.3 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.0, totalSince: 1.719 }, storage: { current: { amount: 1.675, percentage: 99.1 }, lastYear: { amount: 0.041, percentage: 2.4 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.001, totalSince: 1.453 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.273, percentage: 19.1 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.258, percentage: 71.1 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.003, totalSince: 2.617 }, storage: { current: { amount: 2.8, percentage: 100.0 }, lastYear: { amount: 0.922, percentage: 32.9 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.003, totalSince: 1.1 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.42, percentage: 71.0 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.744, percentage: 61.6 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through May 27, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:12.146, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:110.238 },
];

export const getReportDate = (): string => "27-MAY-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 19.87 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 41.4% (47.6 MCM) — new season high, 23.3pp above last year\'s 18.1%. Arminou→Kouris transfer: 19.87 MCM since October.',
      el: 'Ο Κούρης στο 41.4% (47.6 ΕΚΜ) — νέο μέγιστο σεζόν, 23.3μ.π. πάνω από πέρυσι (18.1%). Μεταφορά Αρμίνου→Κούρης: 19.87 ΕΚΜ.',
      ru: 'Курис на 41.4% (47.6 МКМ) — новый сезонный максимум, +23.3пп выше прошлогодних 18.1%. Перекачка Арминоу→Курис: 19.87 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 24.3% (4.15 MCM) — near last year\'s 24.0%. Seasonal inflow 4.00 MCM, gradual recovery continuing.',
      el: 'Ο Καλαβασός στο 24.3% (4.15 ΕΚΜ) — κοντά στο πέρυσι (24.0%). Εισροή σεζόν 4.00 ΕΚΜ, σταδιακή ανάκαμψη.',
      ru: 'Калавасос на 24.3% (4.15 МКМ) — близко к прошлогодним 24.0%. Приток 4.00 МКМ за сезон, постепенное восстановление.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.4% (2.55 MCM) — slightly above last year\'s 17.7%. Seasonal inflow 1.67 MCM, slow recovery continues.',
      el: 'Η Λεύκαρα στο 18.4% (2.55 ΕΚΜ) — ελαφρά πάνω από πέρυσι (17.7%). Εισροή σεζόν 1.67 ΕΚΜ — αργή ανάκαμψη.',
      ru: 'Лефкара на 18.4% (2.55 МКМ) — чуть выше прошлогодних 17.7%. Приток 1.67 МКМ за сезон — медленное восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 38.1% (5.91 MCM) — slightly below last year\'s 38.5%. Steady with 3.62 MCM seasonal inflow.',
      el: 'Ο Διπόταμος στο 38.1% (5.91 ΕΚΜ) — ελαφρά κάτω από πέρυσι (38.5%). Σταθερός με 3.62 ΕΚΜ εισροή σεζόν.',
      ru: 'Дипотамос на 38.1% (5.91 МКМ) — чуть ниже прошлогодних 38.5%. Стабильное положение, приток 3.62 МКМ за сезон.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 60.2% (8.13 MCM) — new season high, above 60% milestone; 38.1pp above last year\'s 22.1%. Highest level since 2020.',
      el: 'Η Γερμασόγεια στο 60.2% (8.13 ΕΚΜ) — νέο μέγιστο σεζόν, πάνω από 60%. 38.1μ.π. πάνω από πέρυσι (22.1%). Υψηλότερο επίπεδο από το 2020.',
      ru: 'Гермасойя на 60.2% (8.13 МКМ) — новый сезонный максимум, выше 60%. +38.1пп выше прошлогодних 22.1%. Высший уровень с 2020 года.',
    },
    'Arminou': {
      en: 'Arminou at 41.4% (1.78 MCM) — new season high. Seasonal inflow 20.73 MCM = 4.8× capacity; 19.87 MCM pumped to Kouris.',
      el: 'Ο Αρμίνου στο 41.4% (1.78 ΕΚΜ) — νέο μέγιστο σεζόν. Εισροή σεζόν: 20.73 ΕΚΜ = 4.8× χωρητικότητα· 19.87 ΕΚΜ στον Κούρη.',
      ru: 'Арминоу на 41.4% (1.78 МКМ) — новый сезонный максимум. Приток: 20.73 МКМ = 4.8× ёмкости; 19.87 МКМ перекачано в Курис.',
    },
    'Polemidia': {
      en: 'Polemidia at 63.9% (2.17 MCM) — near season high, 28.4pp above last year\'s 35.5%. Consistent gains throughout spring.',
      el: 'Η Πολεμίδια στο 63.9% (2.17 ΕΚΜ) — κοντά στο μέγιστο σεζόν, 28.4μ.π. πάνω από πέρυσι (35.5%). Συνεχής άνοδος εφέτος.',
      ru: 'Полемидия на 63.9% (2.17 МКМ) — близко к сезонному максимуму, +28.4пп выше прошлогодних 35.5%. Постоянный рост весной.',
    },
    'Achna': {
      en: 'Achna critically low at 2.2% (0.15 MCM), zero inflow all season. Far below last year\'s 8.8%. No recovery expected.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.2% (0.15 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (8.8%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.2% (0.15 МКМ), без притока за сезон. Далеко ниже прошлогодних 8.8%. Восстановление не ожидается.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 42.0% (21.98 MCM) — new season high, 20.2pp above last year\'s 21.8%. Seasonal inflow 20.02 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 42.0% (21.98 ΕΚΜ) — νέο μέγιστο σεζόν, 20.2μ.π. πάνω από πέρυσι (21.8%). Εισροή 20.02 ΕΚΜ.',
      ru: 'Аспрокреммос на 42.0% (21.98 МКМ) — новый сезонный максимум, +20.2пп выше прошлогодних 21.8%. Приток 20.02 МКМ за сезон.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 52.3% (8.98 MCM) — new season high, 29.1pp above last year\'s 23.2%. Seasonal inflow 9.34 MCM.',
      el: 'Ο Καννάβιου στο 52.3% (8.98 ΕΚΜ) — νέο μέγιστο σεζόν, 29.1μ.π. πάνω από πέρυσι (23.2%). Εισροή σεζόν 9.34 ΕΚΜ.',
      ru: 'Каннавиу на 52.3% (8.98 МКМ) — новый сезонный максимум, +29.1пп выше прошлогодних 23.2%. Приток 9.34 МКМ за сезон.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 88.4% (1.93 MCM) — near full capacity. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 88.4% (1.93 ΕΚΜ) — σχεδόν πλήρης. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 88.4% (1.93 МКМ) — близко к заполнению. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 50.2% (12.04 MCM) — new season high, 27.7pp above last year\'s 22.5%. Holding above 50% milestone.',
      el: 'Ο Εύρετου στο 50.2% (12.04 ΕΚΜ) — νέο μέγιστο σεζόν, 27.7μ.π. πάνω από πέρυσι (22.5%). Παραμένει πάνω από το 50%.',
      ru: 'Эвретоу на 50.2% (12.04 МКМ) — новый сезонный максимум, +27.7пп выше прошлогодних 22.5%. Удерживается выше 50%.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), continuously overflowing. Up from 33.3% last year — nearly tripled year over year.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), συνεχής υπερχείλιση. Από 33.3% πέρυσι — σχεδόν τριπλασιάστηκε.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), продолжает переливаться. Год назад 33.3% — почти утроение.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), continuously overflowing. Up from 38.0% last year — more than doubled year over year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), συνεχής υπερχείλιση. Αύξηση από 38.0% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), продолжает переливаться. Рост с 38.0% год назад — более чем удвоение.',
    },
    'Agia Marina': {
      en: 'Agia Marina full at 100% (0.30 MCM). Up from 49.3% last year; all four Chrysochou dams remain at full capacity.',
      el: 'Η Αγία Μαρίνα γεμάτη στο 100% (0.30 ΕΚΜ). Από 49.3% πέρυσι — ο Χρυσοχούς εξακολουθεί να είναι πλήρης.',
      ru: 'Агия Марина заполнена на 100% (0.30 МКМ). Рост с 49.3% год назад; все дамбы Хрисоху по-прежнему полны.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 99.1% (1.68 MCM) — effectively at capacity. Was 2.4% last year — dramatic 40× year-over-year recovery.',
      el: 'Τα Βυζακιά στο 99.1% (1.68 ΕΚΜ) — ουσιαστικά στη χωρητικότητα. Από 2.4% πέρυσι — 40× ανάκαμψη.',
      ru: 'Визакия на 99.1% (1.68 МКМ) — фактически при максимальной ёмкости. Год назад 2.4% — восстановление в 40×.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM) — holding at capacity. Was 19.1% last year — 5× year-over-year recovery.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ) — παραμένει στη χωρητικότητα. Από 19.1% πέρυσι — 5× ανάκαμψη.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ). Год назад 19.1% — восстановление в 5×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 71.1% last year, at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 71.1% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 71.1% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos full at 100% (2.80 MCM) — reached full capacity last week. Was 32.9% last year — 3× year-over-year recovery.',
      el: 'Ο Ταμασός γεμάτος στο 100% (2.80 ΕΚΜ) — έφτασε στη χωρητικότητα την περασμένη εβδομάδα. Από 32.9% πέρυσι — 3× ΕΤΕ.',
      ru: 'Тамассос заполнен на 100% (2.80 МКМ) — достиг максимума на прошлой неделе. Год назад 32.9% — восстановление в 3×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 71.0% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 71.0% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 71.0% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 61.6% last year — 1.6× year-over-year improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 61.6% πέρυσι — 1.6× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 61.6% год назад — улучшение в 1.6×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (20 — 27 Μαΐου 2026)

Συνολική αποθήκευση **42.3%** (123.0 ΕΚΜ), άνοδος από 41.8% (121.6 ΕΚΜ) στις 20/5 — **+0.5μ.π., +1.4 ΕΚΜ σε 7 ημέρες**. Νέο μέγιστο σεζόν. **+20.6μ.π. πάνω από πέρυσι** (21.7%). Εισροή σεζόν 25/26: **110.2 ΕΚΜ** — ρεκόρ από το 1987. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): **19.87 ΕΚΜ**.

**Αξιοσημείωτα:**
- **[Γερμασόγεια](/el/dam/germasoyeia/) 60.2%** (+0.9μ.π.) — νέο μέγιστο σεζόν, πάνω από 60%, υψηλότερο από το 2020
- **[Εύρετου](/el/dam/evretou/) 50.2%** — παραμένει πάνω από 50%· νέο μέγιστο σεζόν
- **[Ταμασός](/el/dam/tamassos/) 100%** — 10 φράγματα στο 100%
- [Αρμίνου](/el/dam/arminou/) **41.4%** (+6.5μ.π.) — νέο μέγιστο σεζόν· μεταφορά [Κούρης](/el/dam/kouris/) 19.87 ΕΚΜ
- [Ασπρόκρεμμος](/el/dam/asprokremmos/) **42.0%** — νέο μέγιστο σεζόν, +20.2μ.π. από πέρυσι
- [Αχνά](/el/dam/achna/) 2.2% — μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [Ρεκόρ συνολικών εισροών νερού τον φετινό Μάιο](https://www.politis.com.cy/politis-news/cyprus/1005944/rekor-sinolikwn-eisrown-nerou-ghia-mina-maio-sta-fraghmata-sinekhizei-i-auksisi-sinolikis-plirotitas) — Πολίτης
- [Ξεπέρασε το 160% η μέση βροχόπτωση Μαΐου](https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-160-tis-ekato-i-mesi-vroxoptosi-tou-mina-apotimisi-tis-diataraxis-maiou-kai-sinolika-ipsi-vroxis/) — KitasWeather
- [Έργα υδροδότησης Λεμεσού «προχωρούν»](https://cyprus-mail.com/2026/05/14/limassol-water-reservoir-projects-progressing-says-district-government) — Cyprus Mail
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (20 — 27 мая 2026)

Общий запас **42.3%** (123.0 МКМ), рост с 41.8% (121.6 МКМ) на 20/5 — **+0.5пп, +1.4 МКМ за 7 дней**. Новый сезонный максимум. Запасы **на +20.6пп выше прошлогодних** (21.7%). Приток сезона 25/26: **110.2 МКМ** — рекорд с 1987 года. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): **19.87 МКМ**.

**Основные изменения:**
- **[Гермасойя](/ru/dam/germasoyeia/) 60.2%** (+0.9пп) — новый сезонный максимум, выше 60%, высший уровень с 2020
- **[Эвретоу](/ru/dam/evretou/) 50.2%** — удерживается выше 50%; новый сезонный максимум
- **[Тамассос](/ru/dam/tamassos/) 100%** — 10 дамб на 100%
- [Арминоу](/ru/dam/arminou/) **41.4%** (+6.5пп) — новый сезонный максимум; перекачка в [Курис](/ru/dam/kouris/) 19.87 МКМ
- [Аспрокреммос](/ru/dam/asprokremmos/) **42.0%** — новый максимум, +20.2пп выше прошлогодних
- [Ахна](/ru/dam/achna/) 2.2% — без притока за весь сезон

**В СМИ:**
- [Рекордный приток в дамбы мая — лучший с 1987 года](https://cyprus-mail.com/2026/05/21/dams-record-best-may-inflows-since-1987) — Cyprus Mail
- [Новые водохранилища Лимассола «в стадии строительства»](https://cyprus-mail.com/2026/05/14/limassol-water-reservoir-projects-progressing-says-district-government) — Cyprus Mail
- [Рекорд притока воды в водохранилища в мае](https://kitasweather.com/news/fragmata-vroxoptosi/rekor-sinolikon-eisroon-nerou-gia-mina-maio-sta-fragmata-sinexizei-i-afksisi-tis-sinolikis-plirotitas/) — KitasWeather
`;
  }
  return `
### Recent Changes (May 20 — May 27, 2026)

Total storage at **42.3%** (123.0 MCM), up from 41.8% (121.6 MCM) on May 20 — **+0.5pp, +1.4 MCM in 7 days**. New season high. **+20.6pp above last year** (21.7%). Season total: **110.2 MCM** — record since 1987. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: **19.87 MCM**.

**Notable movements:**
- **[Germasoyeia](/dam/germasoyeia/) 60.2%** (+0.9pp) — new season high, above 60%, highest since 2020
- **[Evretou](/dam/evretou/) 50.2%** — holding above 50%; new season high
- **[Tamassos](/dam/tamassos/) 100%** — 10 dams now at 100%
- [Arminou](/dam/arminou/) **41.4%** (+6.5pp vs week ago) — new season high; transfer to [Kouris](/dam/kouris/) now 19.87 MCM
- [Asprokremmos](/dam/asprokremmos/) **42.0%** — new season high, +20.2pp above last year
- [Achna](/dam/achna/) 2.2% — zero inflow all season

**In the media:**
- [Dams record best May inflows since 1987](https://cyprus-mail.com/2026/05/21/dams-record-best-may-inflows-since-1987) — Cyprus Mail
- [Limassol water reservoir projects 'progressing'](https://cyprus-mail.com/2026/05/14/limassol-water-reservoir-projects-progressing-says-district-government) — Cyprus Mail
- [Record May inflows for dams — filling continues](https://kitasweather.com/news/fragmata-vroxoptosi/rekor-sinolikon-eisroon-nerou-gia-mina-maio-sta-fragmata-sinexizei-i-afksisi-tis-sinolikis-plirotitas/) — KitasWeather
`;
};

import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.07, totalSince: 23.382 }, storage: { current: { amount: 47.221, percentage: 41.1 }, lastYear: { amount: 21.101, percentage: 18.3 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.015, totalSince: 3.857 }, storage: { current: { amount: 4.024, percentage: 23.5 }, lastYear: { amount: 4.217, percentage: 24.7 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.002, totalSince: 1.658 }, storage: { current: { amount: 2.541, percentage: 18.3 }, lastYear: { amount: 2.596, percentage: 18.7 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.005, totalSince: 3.547 }, storage: { current: { amount: 5.868, percentage: 37.9 }, lastYear: { amount: 5.941, percentage: 38.3 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.031, totalSince: 8.559 }, storage: { current: { amount: 8.024, percentage: 59.4 }, lastYear: { amount: 3.063, percentage: 22.7 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.081, totalSince: 20.298 }, storage: { current: { amount: 1.548, percentage: 36.0 }, lastYear: { amount: 2.721, percentage: 63.3 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.008, totalSince: 1.583 }, storage: { current: { amount: 2.166, percentage: 63.7 }, lastYear: { amount: 1.228, percentage: 36.1 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.149, percentage: 2.2 }, lastYear: { amount: 0.728, percentage: 10.7 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.057, totalSince: 19.749 }, storage: { current: { amount: 21.821, percentage: 41.7 }, lastYear: { amount: 11.655, percentage: 22.2 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.014, totalSince: 9.235 }, storage: { current: { amount: 8.949, percentage: 52.1 }, lastYear: { amount: 4.043, percentage: 23.5 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.001, totalSince: 0.951 }, storage: { current: { amount: 1.938, percentage: 88.9 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.026, totalSince: 9.956 }, storage: { current: { amount: 11.936, percentage: 49.7 }, lastYear: { amount: 5.486, percentage: 22.9 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.002, totalSince: 1.026 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.344, percentage: 34.7 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.002, totalSince: 0.811 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.343, percentage: 39.9 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.002, totalSince: 0.272 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.157, percentage: 52.7 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.002, totalSince: 1.714 }, storage: { current: { amount: 1.69, percentage: 100.0 }, lastYear: { amount: 0.042, percentage: 2.5 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.002, totalSince: 1.445 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.285, percentage: 19.9 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.267, percentage: 73.6 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.0, totalSince: 2.614 }, storage: { current: { amount: 2.788, percentage: 99.6 }, lastYear: { amount: 0.942, percentage: 33.6 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.096 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.432, percentage: 71.6 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.778, percentage: 62.4 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through May 21, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:10.262, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:108.354 },
];

export const getReportDate = (): string => "21-MAY-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 19.69 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 41.1% (47.2 MCM) — new season high, 22.8pp above last year\'s 18.3%. Arminou→Kouris transfer: 19.69 MCM since October.',
      el: 'Ο Κούρης στο 41.1% (47.2 ΕΚΜ) — νέο μέγιστο σεζόν, 22.8μ.π. πάνω από πέρυσι (18.3%). Μεταφορά Αρμίνου→Κούρης: 19.69 ΕΚΜ.',
      ru: 'Курис на 41.1% (47.2 МКМ) — новый сезонный максимум, +22.8пп выше прошлогодних 18.3%. Перекачка Арминоу→Курис: 19.69 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 23.5% (4.02 MCM) — 1.2pp below last year\'s 24.7%. Seasonal inflow 3.86 MCM, gradual recovery continuing.',
      el: 'Ο Καλαβασός στο 23.5% (4.02 ΕΚΜ) — 1.2μ.π. κάτω από πέρυσι (24.7%). Εισροή σεζόν 3.86 ΕΚΜ, σταδιακή ανάκαμψη.',
      ru: 'Калавасос на 23.5% (4.02 МКМ) — на 1.2пп ниже прошлогодних 24.7%. Приток 3.86 МКМ за сезон, постепенное восстановление.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.3% (2.54 MCM) — 0.4pp below last year\'s 18.7%. Seasonal inflow 1.66 MCM, slow recovery continues.',
      el: 'Η Λεύκαρα στο 18.3% (2.54 ΕΚΜ) — 0.4μ.π. κάτω από πέρυσι (18.7%). Εισροή σεζόν 1.66 ΕΚΜ — αργή ανάκαμψη.',
      ru: 'Лефкара на 18.3% (2.54 МКМ) — на 0.4пп ниже прошлогодних 18.7%. Приток 1.66 МКМ за сезон — медленное восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 37.9% (5.87 MCM) — 0.4pp below last year\'s 38.3%. Steady with 3.55 MCM seasonal inflow.',
      el: 'Ο Διπόταμος στο 37.9% (5.87 ΕΚΜ) — 0.4μ.π. κάτω από πέρυσι (38.3%). Σταθερός με 3.55 ΕΚΜ εισροή σεζόν.',
      ru: 'Дипотамос на 37.9% (5.87 МКМ) — на 0.4пп ниже прошлогодних 38.3%. Стабильное положение, приток 3.55 МКМ за сезон.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 59.4% (8.02 MCM) — new season high, 36.7pp above last year\'s 22.7%. Highest level since 2020.',
      el: 'Η Γερμασόγεια στο 59.4% (8.02 ΕΚΜ) — νέο μέγιστο σεζόν, 36.7μ.π. πάνω από πέρυσι (22.7%). Υψηλότερο επίπεδο από το 2020.',
      ru: 'Гермасойя на 59.4% (8.02 МКМ) — новый максимум, +36.7пп выше прошлогодних 22.7%. Высший уровень с 2020 года.',
    },
    'Arminou': {
      en: 'Arminou at 36.0% (1.55 MCM) — low after transfer to Kouris accelerated. Seasonal inflow 20.3 MCM = 4.7× capacity; 19.69 MCM pumped to Kouris.',
      el: 'Ο Αρμίνου στο 36.0% (1.55 ΕΚΜ) — χαμηλά μετά την επιτάχυνση μεταφοράς στον Κούρη. Εισροή: 20.3 ΕΚΜ = 4.7× χωρητικότητα· 19.69 ΕΚΜ στον Κούρη.',
      ru: 'Арминоу на 36.0% (1.55 МКМ) — низкий уровень после ускорения перекачки в Курис. Приток: 20.3 МКМ = 4.7× ёмкости; 19.69 МКМ перекачано в Курис.',
    },
    'Polemidia': {
      en: 'Polemidia at 63.7% (2.17 MCM) — new season high, 27.6pp above last year\'s 36.1%. Consistent gains throughout spring.',
      el: 'Η Πολεμίδια στο 63.7% (2.17 ΕΚΜ) — νέο μέγιστο σεζόν, 27.6μ.π. πάνω από πέρυσι (36.1%). Συνεχής άνοδος εφέτος.',
      ru: 'Полемидия на 63.7% (2.17 МКМ) — новый сезонный максимум, +27.6пп выше прошлогодних 36.1%. Постоянный рост весной.',
    },
    'Achna': {
      en: 'Achna critically low at 2.2% (0.15 MCM), zero inflow all season. Far below last year\'s 10.7%. No recovery expected.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.2% (0.15 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (10.7%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.2% (0.15 МКМ), без притока за сезон. Далеко ниже прошлогодних 10.7%. Восстановление не ожидается.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 41.7% (21.8 MCM) — new season high, 19.5pp above last year\'s 22.2%. Seasonal inflow 19.75 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 41.7% (21.8 ΕΚΜ) — νέο μέγιστο σεζόν, 19.5μ.π. πάνω από πέρυσι (22.2%). Εισροή 19.75 ΕΚΜ.',
      ru: 'Аспрокреммос на 41.7% (21.8 МКМ) — новый максимум, +19.5пп выше прошлогодних 22.2%. Приток 19.75 МКМ за сезон.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 52.1% (8.95 MCM) — new season high, 28.6pp above last year\'s 23.5%. Seasonal inflow 9.24 MCM.',
      el: 'Ο Καννάβιου στο 52.1% (8.95 ΕΚΜ) — νέο μέγιστο σεζόν, 28.6μ.π. πάνω από πέρυσι (23.5%). Εισροή σεζόν 9.24 ΕΚΜ.',
      ru: 'Каннавиу на 52.1% (8.95 МКМ) — новый сезонный максимум, +28.6пп выше прошлогодних 23.5%. Приток 9.24 МКМ за сезон.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 88.9% (1.94 MCM) — holding near full capacity. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 88.9% (1.94 ΕΚΜ) — σχεδόν πλήρης. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 88.9% (1.94 МКМ) — близко к заполнению. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 49.7% (11.9 MCM) — new season high, 26.8pp above last year\'s 22.9%. Approaching 50%; seasonal inflow 9.96 MCM.',
      el: 'Ο Εύρετου στο 49.7% (11.9 ΕΚΜ) — νέο μέγιστο σεζόν, 26.8μ.π. πάνω από πέρυσι (22.9%). Προσέγγιση 50%; εισροή 9.96 ΕΚΜ.',
      ru: 'Эвретоу на 49.7% (11.9 МКМ) — новый сезонный максимум, +26.8пп выше прошлогодних 22.9%. Приближается к 50%; приток 9.96 МКМ.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), continuously overflowing. Up from 34.7% last year — nearly tripled year over year.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), συνεχής υπερχείλιση. Από 34.7% πέρυσι — σχεδόν τριπλασιάστηκε.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), продолжает переливаться. Год назад 34.7% — почти утроение.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), continuously overflowing. Up from 39.9% last year — more than doubled year over year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), συνεχής υπερχείλιση. Αύξηση από 39.9% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), продолжает переливаться. Рост с 39.9% год назад — более чем удвоение.',
    },
    'Agia Marina': {
      en: 'Agia Marina full at 100% (0.30 MCM). Up from 52.7% last year; all four Chrysochou dams remain at full capacity.',
      el: 'Η Αγία Μαρίνα γεμάτη στο 100% (0.30 ΕΚΜ). Από 52.7% πέρυσι — ο Χρυσοχούς εξακολουθεί να είναι πλήρης.',
      ru: 'Агия Марина заполнена на 100% (0.30 МКМ). Рост с 52.7% год назад; все дамбы Хрисоху по-прежнему полны.',
    },
    'Vyzakia': {
      en: 'Vyzakia full at 100% (1.69 MCM) — maintaining capacity. Was 2.5% last year — 40× year-over-year recovery.',
      el: 'Τα Βυζακιά γεμάτα στο 100% (1.69 ΕΚΜ) — στη χωρητικότητα. Από 2.5% πέρυσι — 40× ανάκαμψη.',
      ru: 'Визакия заполнена на 100% (1.69 МКМ). Год назад 2.5% — восстановление в 40×.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM) — holding at capacity. Was 19.9% last year — 5× year-over-year recovery.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ) — παραμένει στη χωρητικότητα. Από 19.9% πέρυσι — 5× ανάκαμψη.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ). Год назад 19.9% — восстановление в 5×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 73.6% last year, at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 73.6% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 73.6% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 99.6% (2.79 MCM) — near full. Was 33.6% last year — 3× year-over-year recovery.',
      el: 'Ο Ταμασός στο 99.6% (2.79 ΕΚΜ) — σχεδόν γεμάτος. Από 33.6% πέρυσι — 3× ΕΤΕ.',
      ru: 'Тамассос на 99.6% (2.79 МКМ) — почти полон. Год назад 33.6% — в 3× год к году.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 71.6% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 71.6% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 71.6% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 62.4% last year — 1.6× year-over-year improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 62.4% πέρυσι — 1.6× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 62.4% год назад — улучшение в 1.6×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (12 — 21 Μαΐου 2026)

Συνολική αποθήκευση **41.9%** (121.8 ΕΚΜ), άνοδος από 41.2% (119.8 ΕΚΜ) στις 12/5 — **+0.7μ.π., +2.0 ΕΚΜ σε 9 ημέρες**. Νέο μέγιστο σεζόν. **19.6μ.π. πάνω από πέρυσι** (22.3%). Εισροή σεζόν 25/26: **108.4 ΕΚΜ** — ρεκόρ εισροής Μαΐου από το 1987. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): **19.69 ΕΚΜ**.

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 36.0%** — χαμηλά μετά τη μεταφορά στον [Κούρη](/el/dam/kouris/); εισροή σεζόν 20.3 ΕΚΜ (4.7× χωρητικότητα)
- [Κούρης](/el/dam/kouris/) **41.1%** — νέο μέγιστο σεζόν, πέρασε τα 47.2 ΕΚΜ
- [Γερμασόγεια](/el/dam/germasoyeia/) **59.4%** — νέο μέγιστο, υψηλότερο από το 2020
- [Εύρετου](/el/dam/evretou/) **49.7%** — νέο μέγιστο, πλησιάζει το 50%
- 9 φράγματα στο 100%· [Αχνά](/el/dam/achna/) 2.2% — μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [Ρεκόρ εισροών Μαΐου στα φράγματα — καλύτερος από το 1987](https://kitasweather.com/news/fragmata-vroxoptosi/rekor-sinolikon-eisroon-nerou-gia-mina-maio-sta-fragmata-sinexizei-i-afksisi-tis-sinolikis-plirotitas/) — KitasWeather
- [Συνεχίζουν σημαντικές εισροές Μαΐου — Ξεπέρασε το 41%](https://kitasweather.com/news/fragmata-vroxoptosi/sinexizoun-simantikes-eisroes-gia-mina-maio-kseperase-to-41-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (12 — 21 мая 2026)

Общий запас **41.9%** (121.8 МКМ), рост с 41.2% (119.8 МКМ) на 12/5 — **+0.7пп, +2.0 МКМ за 9 дней**. Новый сезонный максимум. Запасы **на 19.6пп выше прошлогодних** (22.3%). Приток сезона 25/26: **108.4 МКМ** — рекорд мая с 1987 года. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): **19.69 МКМ**.

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 36.0%** — низкий уровень после перекачки в [Курис](/ru/dam/kouris/); приток сезона 20.3 МКМ (4.7× ёмкости)
- [Курис](/ru/dam/kouris/) **41.1%** — новый сезонный максимум, перешёл отметку 47.2 МКМ
- [Гермасойя](/ru/dam/germasoyeia/) **59.4%** — новый максимум, высший уровень с 2020
- [Эвретоу](/ru/dam/evretou/) **49.7%** — новый максимум, приближается к 50%
- 9 дамб на 100%; [Ахна](/ru/dam/achna/) 2.2% — без притока за весь сезон

**В СМИ:**
- [Рекордный приток в дамбы мая — лучший с 1987 года](https://cyprus-mail.com/2026/05/21/dams-record-best-may-inflows-since-1987) — Cyprus Mail
- [Май 2026 — рекорд притока воды в дамбы](https://kitasweather.com/news/fragmata-vroxoptosi/rekor-sinolikon-eisroon-nerou-gia-mina-maio-sta-fragmata-sinexizei-i-afksisi-tis-sinolikis-plirotitas/) — KitasWeather
`;
  }
  return `
### Recent Changes (May 12 — May 21, 2026)

Total storage at **41.9%** (121.8 MCM), up from 41.2% (119.8 MCM) on May 12 — **+0.7pp, +2.0 MCM in 9 days**. New season high. **19.6pp above last year** (22.3%). Season total: **108.4 MCM** — best May inflow since records began in 1987. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: **19.69 MCM**.

**Notable movements:**
- **[Arminou](/dam/arminou/) 36.0%** — low after transfer to [Kouris](/dam/kouris/) accelerated; seasonal inflow 20.3 MCM (4.7× capacity)
- [Kouris](/dam/kouris/) **41.1%** — new season high, crossed 47.2 MCM mark
- [Germasoyeia](/dam/germasoyeia/) **59.4%** — new season high, highest level since 2020
- [Evretou](/dam/evretou/) **49.7%** — new season high, approaching 50% milestone
- 9 dams at 100%; [Achna](/dam/achna/) 2.2% — zero inflow all season

**In the media:**
- [Dams record best May inflows since 1987](https://cyprus-mail.com/2026/05/21/dams-record-best-may-inflows-since-1987) — Cyprus Mail
- [Record May inflows for dams — filling continues](https://kitasweather.com/news/fragmata-vroxoptosi/rekor-sinolikon-eisroon-nerou-gia-mina-maio-sta-fragmata-sinexizei-i-afksisi-tis-sinolikis-plirotitas/) — KitasWeather
- [Cyprus has recorded highest May inflow in four decades](https://famagusta-gazette.com/cyprus-has-recorded-the-highest-may-inflow-of-water-into-its-dams-in-four-decades/) — Famagusta Gazette
`;
};

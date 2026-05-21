import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.094, totalSince: 23.312 }, storage: { current: { amount: 47.166, percentage: 41.0 }, lastYear: { amount: 21.145, percentage: 18.4 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.013, totalSince: 3.842 }, storage: { current: { amount: 4.013, percentage: 23.5 }, lastYear: { amount: 4.228, percentage: 24.7 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.002, totalSince: 1.656 }, storage: { current: { amount: 2.541, percentage: 18.3 }, lastYear: { amount: 2.621, percentage: 18.9 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.009, totalSince: 3.542 }, storage: { current: { amount: 5.868, percentage: 37.9 }, lastYear: { amount: 5.936, percentage: 38.3 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.024, totalSince: 8.528 }, storage: { current: { amount: 8.001, percentage: 59.3 }, lastYear: { amount: 3.076, percentage: 22.8 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.071, totalSince: 20.217 }, storage: { current: { amount: 1.501, percentage: 34.9 }, lastYear: { amount: 2.723, percentage: 63.3 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.007, totalSince: 1.575 }, storage: { current: { amount: 2.159, percentage: 63.5 }, lastYear: { amount: 1.231, percentage: 36.2 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.149, percentage: 2.2 }, lastYear: { amount: 0.756, percentage: 11.1 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.059, totalSince: 19.692 }, storage: { current: { amount: 21.778, percentage: 41.6 }, lastYear: { amount: 11.696, percentage: 22.3 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.016, totalSince: 9.221 }, storage: { current: { amount: 8.944, percentage: 52.1 }, lastYear: { amount: 4.054, percentage: 23.6 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.0, totalSince: 0.95 }, storage: { current: { amount: 1.94, percentage: 89.0 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.019, totalSince: 9.93 }, storage: { current: { amount: 11.913, percentage: 49.6 }, lastYear: { amount: 5.496, percentage: 22.9 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.002, totalSince: 1.024 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.346, percentage: 34.9 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.002, totalSince: 0.809 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.344, percentage: 40.0 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.002, totalSince: 0.27 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.158, percentage: 53.0 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.002, totalSince: 1.712 }, storage: { current: { amount: 1.69, percentage: 100.0 }, lastYear: { amount: 0.042, percentage: 2.5 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.002, totalSince: 1.443 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.286, percentage: 20.0 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.269, percentage: 74.1 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 2.614 }, storage: { current: { amount: 2.794, percentage: 99.8 }, lastYear: { amount: 0.942, percentage: 33.6 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.095 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.432, percentage: 71.6 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.788, percentage: 62.6 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through May 20, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:9.942, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:108.034 },
];

export const getReportDate = (): string => "20-MAY-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 19.66 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 41.0% (47.2 MCM) — new season high, 22.6pp above last year\'s 18.4%. Arminou→Kouris transfer: 19.66 MCM since October.',
      el: 'Ο Κούρης στο 41.0% (47.2 ΕΚΜ) — νέο μέγιστο σεζόν, 22.6μ.π. πάνω από πέρυσι (18.4%). Μεταφορά Αρμίνου→Κούρης: 19.66 ΕΚΜ.',
      ru: 'Курис на 41.0% (47.2 МКМ) — новый сезонный максимум, +22.6пп выше прошлогодних 18.4%. Перекачка Арминоу→Курис: 19.66 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 23.5% (4.01 MCM) — 1.2pp below last year\'s 24.7%. Seasonal inflow 3.84 MCM, gradual recovery continuing.',
      el: 'Ο Καλαβασός στο 23.5% (4.01 ΕΚΜ) — 1.2μ.π. κάτω από πέρυσι (24.7%). Εισροή σεζόν 3.84 ΕΚΜ, σταδιακή ανάκαμψη.',
      ru: 'Калавасос на 23.5% (4.01 МКМ) — на 1.2пп ниже прошлогодних 24.7%. Приток 3.84 МКМ за сезон, постепенное восстановление.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.3% (2.54 MCM) — 0.6pp below last year\'s 18.9%. Seasonal inflow 1.66 MCM, slow recovery continues.',
      el: 'Η Λεύκαρα στο 18.3% (2.54 ΕΚΜ) — 0.6μ.π. κάτω από πέρυσι (18.9%). Εισροή σεζόν 1.66 ΕΚΜ — αργή ανάκαμψη.',
      ru: 'Лефкара на 18.3% (2.54 МКМ) — на 0.6пп ниже прошлогодних 18.9%. Приток 1.66 МКМ за сезон — медленное восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 37.9% (5.87 MCM) — 0.4pp below last year\'s 38.3%. Steady with 3.54 MCM seasonal inflow.',
      el: 'Ο Διπόταμος στο 37.9% (5.87 ΕΚΜ) — 0.4μ.π. κάτω από πέρυσι (38.3%). Σταθερός με 3.54 ΕΚΜ εισροή σεζόν.',
      ru: 'Дипотамос на 37.9% (5.87 МКМ) — на 0.4пп ниже прошлогодних 38.3%. Стабильное положение, приток 3.54 МКМ за сезон.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 59.3% (8.00 MCM) — new season high, 36.5pp above last year\'s 22.8%. Crossed 8 MCM mark — highest level since 2020.',
      el: 'Η Γερμασόγεια στο 59.3% (8.00 ΕΚΜ) — νέο μέγιστο σεζόν, 36.5μ.π. πάνω από πέρυσι (22.8%). Πέρασε τα 8 ΕΚΜ — υψηλότερο επίπεδο από το 2020.',
      ru: 'Гермасойя на 59.3% (8.00 МКМ) — новый максимум, +36.5пп выше прошлогодних 22.8%. Перешла отметку 8 МКМ — высший уровень с 2020.',
    },
    'Arminou': {
      en: 'Arminou at 34.9% (1.50 MCM) — dropped from 72% as transfer to Kouris accelerated. Seasonal inflow 20.2 MCM = 4.7× capacity; 19.66 MCM pumped to Kouris.',
      el: 'Ο Αρμίνου στο 34.9% (1.50 ΕΚΜ) — έπεσε από 72% με την επιτάχυνση μεταφοράς στον Κούρη. Εισροή: 20.2 ΕΚΜ = 4.7× χωρητικότητα· 19.66 ΕΚΜ στον Κούρη.',
      ru: 'Арминоу на 34.9% (1.50 МКМ) — упал с 72% из-за ускорения перекачки в Курис. Приток: 20.2 МКМ = 4.7× ёмкости; 19.66 МКМ перекачано в Курис.',
    },
    'Polemidia': {
      en: 'Polemidia at 63.5% (2.16 MCM) — new season high, 27.3pp above last year\'s 36.2%. Consistent gains throughout spring.',
      el: 'Η Πολεμίδια στο 63.5% (2.16 ΕΚΜ) — νέο μέγιστο σεζόν, 27.3μ.π. πάνω από πέρυσι (36.2%). Συνεχής άνοδος εφέτος.',
      ru: 'Полемидия на 63.5% (2.16 МКМ) — новый сезонный максимум, +27.3пп выше прошлогодних 36.2%. Постоянный рост весной.',
    },
    'Achna': {
      en: 'Achna critically low at 2.2% (0.15 MCM), zero inflow all season. Far below last year\'s 11.1%. No recovery expected.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.2% (0.15 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (11.1%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.2% (0.15 МКМ), без притока за сезон. Далеко ниже прошлогодних 11.1%. Восстановление не ожидается.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 41.6% (21.8 MCM) — new season high, 19.3pp above last year\'s 22.3%. Seasonal inflow 19.7 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 41.6% (21.8 ΕΚΜ) — νέο μέγιστο σεζόν, 19.3μ.π. πάνω από πέρυσι (22.3%). Εισροή 19.7 ΕΚΜ.',
      ru: 'Аспрокреммос на 41.6% (21.8 МКМ) — новый максимум, +19.3пп выше прошлогодних 22.3%. Приток 19.7 МКМ за сезон.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 52.1% (8.94 MCM) — new season high, 28.5pp above last year\'s 23.6%. Seasonal inflow 9.22 MCM.',
      el: 'Ο Καννάβιου στο 52.1% (8.94 ΕΚΜ) — νέο μέγιστο σεζόν, 28.5μ.π. πάνω από πέρυσι (23.6%). Εισροή σεζόν 9.22 ΕΚΜ.',
      ru: 'Каннавиу на 52.1% (8.94 МКМ) — новый сезонный максимум, +28.5пп выше прошлогодних 23.6%. Приток 9.22 МКМ за сезон.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 89.0% (1.94 MCM) — holding near full capacity. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 89.0% (1.94 ΕΚΜ) — σχεδόν πλήρης. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 89.0% (1.94 МКМ) — близко к заполнению. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 49.6% (11.9 MCM) — new season high, 26.7pp above last year\'s 22.9%. Just below 50%; seasonal inflow 9.93 MCM.',
      el: 'Ο Εύρετου στο 49.6% (11.9 ΕΚΜ) — νέο μέγιστο σεζόν, 26.7μ.π. πάνω από πέρυσι (22.9%). Ακριβώς κάτω από 50%; εισροή 9.93 ΕΚΜ.',
      ru: 'Эвретоу на 49.6% (11.9 МКМ) — новый сезонный максимум, +26.7пп выше прошлогодних 22.9%. Чуть ниже 50%; приток 9.93 МКМ.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), continuously overflowing. Up from 34.9% last year — nearly tripled year over year.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), συνεχής υπερχείλιση. Από 34.9% πέρυσι — σχεδόν τριπλασιάστηκε.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), продолжает переливаться. Год назад 34.9% — почти утроение.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), continuously overflowing. Up from 40.0% last year — more than doubled year over year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), συνεχής υπερχείλιση. Αύξηση από 40.0% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), продолжает переливаться. Рост с 40.0% год назад — более чем удвоение.',
    },
    'Agia Marina': {
      en: 'Agia Marina full at 100% (0.30 MCM). Up from 53.0% last year; all four Chrysochou dams remain at full capacity.',
      el: 'Η Αγία Μαρίνα γεμάτη στο 100% (0.30 ΕΚΜ). Από 53.0% πέρυσι — ο Χρυσοχούς εξακολουθεί να είναι πλήρης.',
      ru: 'Агия Марина заполнена на 100% (0.30 МКМ). Рост с 53.0% год назад; все дамбы Хрисоху по-прежнему полны.',
    },
    'Vyzakia': {
      en: 'Vyzakia full at 100% (1.69 MCM) — maintaining capacity. Was 2.5% last year — 40× year-over-year recovery.',
      el: 'Τα Βυζακιά γεμάτα στο 100% (1.69 ΕΚΜ) — στη χωρητικότητα. Από 2.5% πέρυσι — 40× ανάκαμψη.',
      ru: 'Визакия заполнена на 100% (1.69 МКМ). Год назад 2.5% — восстановление в 40×.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM) — holding at capacity. Was 20.0% last year — 5× year-over-year recovery.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ) — παραμένει στη χωρητικότητα. Από 20.0% πέρυσι — 5× ανάκαμψη.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ). Год назад 20.0% — восстановление в 5×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 74.1% last year, at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 74.1% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 74.1% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 99.8% (2.79 MCM) — near full. Was 33.6% last year — 3× year-over-year recovery.',
      el: 'Ο Ταμασός στο 99.8% (2.79 ΕΚΜ) — σχεδόν γεμάτος. Από 33.6% πέρυσι — 3× ΕΤΕ.',
      ru: 'Тамассос на 99.8% (2.79 МКМ) — почти полон. Год назад 33.6% — в 3× год к году.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 71.6% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 71.6% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 71.6% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 62.6% last year — 1.6× year-over-year improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 62.6% πέρυσι — 1.6× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 62.6% год назад — улучшение в 1.6×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (12 — 20 Μαΐου 2026)

Συνολική αποθήκευση **41.8%** (121.6 ΕΚΜ), άνοδος από 41.2% (119.8 ΕΚΜ) στις 12/5 — **+0.6μ.π., +1.8 ΕΚΜ σε 8 ημέρες**. Νέο μέγιστο σεζόν. **19.7μ.π. πάνω από πέρυσι** (22.1%). Εισροή σεζόν 25/26: **108.0 ΕΚΜ**. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) επιταχύνθηκε στα **19.66 ΕΚΜ** (από 17.4 ΕΚΜ).

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 34.9%** — απότομη πτώση από 72.4% καθώς η μεταφορά στον [Κούρη](/el/dam/kouris/) επιταχύνθηκε (+2.26 ΕΚΜ σε 8 ημέρες)
- [Κούρης](/el/dam/kouris/) **41.0%** — νέο μέγιστο σεζόν, +2.3μ.π., πέρασε τα 47 ΕΚΜ
- [Γερμασόγεια](/el/dam/germasoyeia/) **59.3%** — νέο μέγιστο, πέρασε τα 8 ΕΚΜ· πλησιάζει το 60%
- [Εύρετου](/el/dam/evretou/) **49.6%** — νέο μέγιστο, μόλις κάτω από το 50%
- [Καννάβιου](/el/dam/kannaviou/) **52.1%** — νέο μέγιστο, +28.5μ.π. πάνω από πέρυσι
- 9 φράγματα στο 100%· [Αχνά](/el/dam/achna/) 2.2% — μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [Συνεχίζουν σημαντικές εισροές Μαΐου — Ξεπέρασε το 41% η πληρότητα](https://kitasweather.com/news/fragmata-vroxoptosi/sinexizoun-simantikes-eisroes-gia-mina-maio-kseperase-to-41-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
- [Φράγματα στο 41.2% — νέο σεζόν υψηλό](https://cyprus-mail.com/2026/05/13/dams-at-41-2-per-cent) — Cyprus Mail
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (12 — 20 мая 2026)

Общий запас **41.8%** (121.6 МКМ), рост с 41.2% (119.8 МКМ) на 12/5 — **+0.6пп, +1.8 МКМ за 8 дней**. Новый сезонный максимум. Запасы **на 19.7пп выше прошлогодних** (22.1%). Приток сезона 25/26: **108.0 МКМ**. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/) ускорилась до **19.66 МКМ** (с 17.4 МКМ).

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 34.9%** — резкое падение с 72.4% из-за ускорения перекачки в [Курис](/ru/dam/kouris/) (+2.26 МКМ за 8 дней)
- [Курис](/ru/dam/kouris/) **41.0%** — новый сезонный максимум, +2.3пп, перешёл отметку 47 МКМ
- [Гермасойя](/ru/dam/germasoyeia/) **59.3%** — новый максимум, перешла 8 МКМ; приближается к 60%
- [Эвретоу](/ru/dam/evretou/) **49.6%** — новый максимум, чуть ниже отметки 50%
- [Каннавиу](/ru/dam/kannaviou/) **52.1%** — новый максимум, +28.5пп выше прошлого года
- 9 дамб на 100%; [Ахна](/ru/dam/achna/) 2.2% — без притока за весь сезон

**В СМИ:**
- [Майские притоки продолжаются — заполненность превысила 41%](https://kitasweather.com/news/fragmata-vroxoptosi/sinexizoun-simantikes-eisroes-gia-mina-maio-kseperase-to-41-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
- [Плотины Кипра на 41.2% — новый сезонный максимум](https://ruscyprus.com/news/plotiny-kipra-na-41-2) — RusCyprus
`;
  }
  return `
### Recent Changes (May 12 — May 20, 2026)

Total storage at **41.8%** (121.6 MCM), up from 41.2% (119.8 MCM) on May 12 — **+0.6pp, +1.8 MCM in 8 days**. New season high. **19.7pp above last year** (22.1%). Season total: **108.0 MCM**. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer accelerated to **19.66 MCM** (from 17.4 MCM).

**Notable movements:**
- **[Arminou](/dam/arminou/) 34.9%** — sharp drop from 72.4% as transfer to [Kouris](/dam/kouris/) accelerated (+2.26 MCM pumped in 8 days)
- [Kouris](/dam/kouris/) **41.0%** — new season high, +2.3pp, crossed 47 MCM mark
- [Germasoyeia](/dam/germasoyeia/) **59.3%** — new season high, crossed 8 MCM; approaching 60%
- [Evretou](/dam/evretou/) **49.6%** — new season high, just below 50% milestone
- [Kannaviou](/dam/kannaviou/) **52.1%** — new season high, +28.5pp above last year
- 9 dams at 100%; [Achna](/dam/achna/) 2.2% — zero inflow all season

**In the media:**
- [Significant May inflows continue — dam fullness exceeds 41%](https://kitasweather.com/news/fragmata-vroxoptosi/sinexizoun-simantikes-eisroes-gia-mina-maio-kseperase-to-41-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
- [Dams at 41.2 per cent capacity — new season high](https://cyprus-mail.com/2026/05/13/dams-at-41-2-per-cent) — Cyprus Mail
`;
};

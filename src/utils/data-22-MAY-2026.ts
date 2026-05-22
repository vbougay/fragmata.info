import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.066, totalSince: 23.448 }, storage: { current: { amount: 47.277, percentage: 41.1 }, lastYear: { amount: 21.057, percentage: 18.3 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.072, totalSince: 3.929 }, storage: { current: { amount: 4.093, percentage: 23.9 }, lastYear: { amount: 4.206, percentage: 24.6 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.001, totalSince: 1.659 }, storage: { current: { amount: 2.541, percentage: 18.3 }, lastYear: { amount: 2.572, percentage: 18.6 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.004, totalSince: 3.551 }, storage: { current: { amount: 5.862, percentage: 37.8 }, lastYear: { amount: 5.946, percentage: 38.4 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.039, totalSince: 8.598 }, storage: { current: { amount: 8.055, percentage: 59.7 }, lastYear: { amount: 3.05, percentage: 22.6 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.071, totalSince: 20.369 }, storage: { current: { amount: 1.585, percentage: 36.9 }, lastYear: { amount: 2.718, percentage: 63.2 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.011, totalSince: 1.594 }, storage: { current: { amount: 2.176, percentage: 64.0 }, lastYear: { amount: 1.225, percentage: 36.0 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.149, percentage: 2.2 }, lastYear: { amount: 0.663, percentage: 9.8 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.061, totalSince: 19.810 }, storage: { current: { amount: 21.865, percentage: 41.7 }, lastYear: { amount: 11.615, percentage: 22.2 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.018, totalSince: 9.253 }, storage: { current: { amount: 8.955, percentage: 52.2 }, lastYear: { amount: 4.032, percentage: 23.5 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.0, totalSince: 0.951 }, storage: { current: { amount: 1.937, percentage: 88.9 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.021, totalSince: 9.977 }, storage: { current: { amount: 11.951, percentage: 49.8 }, lastYear: { amount: 5.476, percentage: 22.8 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.002, totalSince: 1.028 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.343, percentage: 34.6 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.002, totalSince: 0.813 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.342, percentage: 39.8 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.002, totalSince: 0.274 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.156, percentage: 52.3 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.001, totalSince: 1.715 }, storage: { current: { amount: 1.69, percentage: 100.0 }, lastYear: { amount: 0.041, percentage: 2.4 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.001, totalSince: 1.446 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.283, percentage: 19.8 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.266, percentage: 73.3 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.0, totalSince: 2.614 }, storage: { current: { amount: 2.785, percentage: 99.5 }, lastYear: { amount: 0.939, percentage: 33.5 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.097 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.429, percentage: 71.5 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.774, percentage: 62.3 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through May 22, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:10.634, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:108.726 },
];

export const getReportDate = (): string => "22-MAY-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 19.72 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 41.1% (47.3 MCM) — new season high, 22.8pp above last year\'s 18.3%. Arminou→Kouris transfer: 19.72 MCM since October.',
      el: 'Ο Κούρης στο 41.1% (47.3 ΕΚΜ) — νέο μέγιστο σεζόν, 22.8μ.π. πάνω από πέρυσι (18.3%). Μεταφορά Αρμίνου→Κούρης: 19.72 ΕΚΜ.',
      ru: 'Курис на 41.1% (47.3 МКМ) — новый сезонный максимум, +22.8пп выше прошлогодних 18.3%. Перекачка Арминоу→Курис: 19.72 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 23.9% (4.09 MCM) — 0.7pp below last year\'s 24.6%. Seasonal inflow 3.93 MCM, gradual recovery continuing.',
      el: 'Ο Καλαβασός στο 23.9% (4.09 ΕΚΜ) — 0.7μ.π. κάτω από πέρυσι (24.6%). Εισροή σεζόν 3.93 ΕΚΜ, σταδιακή ανάκαμψη.',
      ru: 'Калавасос на 23.9% (4.09 МКМ) — на 0.7пп ниже прошлогодних 24.6%. Приток 3.93 МКМ за сезон, постепенное восстановление.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.3% (2.54 MCM) — 0.3pp below last year\'s 18.6%. Seasonal inflow 1.66 MCM, slow recovery continues.',
      el: 'Η Λεύκαρα στο 18.3% (2.54 ΕΚΜ) — 0.3μ.π. κάτω από πέρυσι (18.6%). Εισροή σεζόν 1.66 ΕΚΜ — αργή ανάκαμψη.',
      ru: 'Лефкара на 18.3% (2.54 МКМ) — на 0.3пп ниже прошлогодних 18.6%. Приток 1.66 МКМ за сезон — медленное восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 37.8% (5.86 MCM) — 0.6pp below last year\'s 38.4%. Steady with 3.55 MCM seasonal inflow.',
      el: 'Ο Διπόταμος στο 37.8% (5.86 ΕΚΜ) — 0.6μ.π. κάτω από πέρυσι (38.4%). Σταθερός με 3.55 ΕΚΜ εισροή σεζόν.',
      ru: 'Дипотамос на 37.8% (5.86 МКМ) — на 0.6пп ниже прошлогодних 38.4%. Стабильное положение, приток 3.55 МКМ за сезон.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 59.7% (8.06 MCM) — new season high, 37.1pp above last year\'s 22.6%. Highest level since 2020.',
      el: 'Η Γερμασόγεια στο 59.7% (8.06 ΕΚΜ) — νέο μέγιστο σεζόν, 37.1μ.π. πάνω από πέρυσι (22.6%). Υψηλότερο επίπεδο από το 2020.',
      ru: 'Гермасойя на 59.7% (8.06 МКМ) — новый сезонный максимум, +37.1пп выше прошлогодних 22.6%. Высший уровень с 2020 года.',
    },
    'Arminou': {
      en: 'Arminou at 36.9% (1.59 MCM) — recovering slightly after transfer to Kouris. Seasonal inflow 20.4 MCM = 4.7× capacity; 19.72 MCM pumped to Kouris.',
      el: 'Ο Αρμίνου στο 36.9% (1.59 ΕΚΜ) — ελαφρά ανάκαμψη μετά τη μεταφορά. Εισροή: 20.4 ΕΚΜ = 4.7× χωρητικότητα· 19.72 ΕΚΜ στον Κούρη.',
      ru: 'Арминоу на 36.9% (1.59 МКМ) — небольшое восстановление после перекачки в Курис. Приток: 20.4 МКМ = 4.7× ёмкости; 19.72 МКМ перекачано в Курис.',
    },
    'Polemidia': {
      en: 'Polemidia at 64.0% (2.18 MCM) — new season high, 28.0pp above last year\'s 36.0%. Consistent gains throughout spring.',
      el: 'Η Πολεμίδια στο 64.0% (2.18 ΕΚΜ) — νέο μέγιστο σεζόν, 28.0μ.π. πάνω από πέρυσι (36.0%). Συνεχής άνοδος εφέτος.',
      ru: 'Полемидия на 64.0% (2.18 МКМ) — новый сезонный максимум, +28.0пп выше прошлогодних 36.0%. Постоянный рост весной.',
    },
    'Achna': {
      en: 'Achna critically low at 2.2% (0.15 MCM), zero inflow all season. Far below last year\'s 9.8%. No recovery expected.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.2% (0.15 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (9.8%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.2% (0.15 МКМ), без притока за сезон. Далеко ниже прошлогодних 9.8%. Восстановление не ожидается.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 41.7% (21.9 MCM) — new season high, 19.5pp above last year\'s 22.2%. Seasonal inflow 19.81 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 41.7% (21.9 ΕΚΜ) — νέο μέγιστο σεζόν, 19.5μ.π. πάνω από πέρυσι (22.2%). Εισροή 19.81 ΕΚΜ.',
      ru: 'Аспрокреммос на 41.7% (21.9 МКМ) — новый максимум, +19.5пп выше прошлогодних 22.2%. Приток 19.81 МКМ за сезон.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 52.2% (8.96 MCM) — new season high, 28.7pp above last year\'s 23.5%. Seasonal inflow 9.25 MCM.',
      el: 'Ο Καννάβιου στο 52.2% (8.96 ΕΚΜ) — νέο μέγιστο σεζόν, 28.7μ.π. πάνω από πέρυσι (23.5%). Εισροή σεζόν 9.25 ΕΚΜ.',
      ru: 'Каннавиу на 52.2% (8.96 МКМ) — новый сезонный максимум, +28.7пп выше прошлогодних 23.5%. Приток 9.25 МКМ за сезон.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 88.9% (1.94 MCM) — holding near full capacity. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 88.9% (1.94 ΕΚΜ) — σχεδόν πλήρης. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 88.9% (1.94 МКМ) — близко к заполнению. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 49.8% (11.95 MCM) — new season high, 27.0pp above last year\'s 22.8%. Just under 50%; seasonal inflow 9.98 MCM.',
      el: 'Ο Εύρετου στο 49.8% (11.95 ΕΚΜ) — νέο μέγιστο σεζόν, 27.0μ.π. πάνω από πέρυσι (22.8%). Μόλις κάτω από 50%; εισροή 9.98 ΕΚΜ.',
      ru: 'Эвретоу на 49.8% (11.95 МКМ) — новый сезонный максимум, +27.0пп выше прошлогодних 22.8%. Чуть ниже 50%; приток 9.98 МКМ.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), continuously overflowing. Up from 34.6% last year — nearly tripled year over year.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), συνεχής υπερχείλιση. Από 34.6% πέρυσι — σχεδόν τριπλασιάστηκε.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), продолжает переливаться. Год назад 34.6% — почти утроение.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), continuously overflowing. Up from 39.8% last year — more than doubled year over year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), συνεχής υπερχείλιση. Αύξηση από 39.8% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), продолжает переливаться. Рост с 39.8% год назад — более чем удвоение.',
    },
    'Agia Marina': {
      en: 'Agia Marina full at 100% (0.30 MCM). Up from 52.3% last year; all four Chrysochou dams remain at full capacity.',
      el: 'Η Αγία Μαρίνα γεμάτη στο 100% (0.30 ΕΚΜ). Από 52.3% πέρυσι — ο Χρυσοχούς εξακολουθεί να είναι πλήρης.',
      ru: 'Агия Марина заполнена на 100% (0.30 МКМ). Рост с 52.3% год назад; все дамбы Хрисоху по-прежнему полны.',
    },
    'Vyzakia': {
      en: 'Vyzakia full at 100% (1.69 MCM) — maintaining capacity. Was 2.4% last year — 40× year-over-year recovery.',
      el: 'Τα Βυζακιά γεμάτα στο 100% (1.69 ΕΚΜ) — στη χωρητικότητα. Από 2.4% πέρυσι — 40× ανάκαμψη.',
      ru: 'Визакия заполнена на 100% (1.69 МКМ). Год назад 2.4% — восстановление в 40×.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM) — holding at capacity. Was 19.8% last year — 5× year-over-year recovery.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ) — παραμένει στη χωρητικότητα. Από 19.8% πέρυσι — 5× ανάκαμψη.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ). Год назад 19.8% — восстановление в 5×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 73.3% last year, at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 73.3% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 73.3% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 99.5% (2.79 MCM) — near full. Was 33.5% last year — 3× year-over-year recovery.',
      el: 'Ο Ταμασός στο 99.5% (2.79 ΕΚΜ) — σχεδόν γεμάτος. Από 33.5% πέρυσι — 3× ΕΤΕ.',
      ru: 'Тамассос на 99.5% (2.79 МКМ) — почти полон. Год назад 33.5% — в 3× год к году.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 71.5% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 71.5% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 71.5% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 62.3% last year — 1.6× year-over-year improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 62.3% πέρυσι — 1.6× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 62.3% год назад — улучшение в 1.6×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (12 — 22 Μαΐου 2026)

Συνολική αποθήκευση **42.0%** (122.1 ΕΚΜ), άνοδος από 41.2% (119.8 ΕΚΜ) στις 12/5 — **+0.8μ.π., +2.3 ΕΚΜ σε 10 ημέρες**. Νέο μέγιστο σεζόν. **+20.0μ.π. πάνω από πέρυσι** (22.0%). Εισροή σεζόν 25/26: **108.7 ΕΚΜ** — ρεκόρ εισροής Μαΐου από το 1987 συνεχίζεται. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): **19.72 ΕΚΜ**.

**Αξιοσημείωτα:**
- **[Γερμασόγεια](/el/dam/germasoyeia/) 59.7%** — νέο μέγιστο σεζόν, υψηλότερο από το 2020
- **[Πολεμίδια](/el/dam/polemidia/) 64.0%** — νέο μέγιστο σεζόν (+28μ.π. από πέρυσι)
- [Εύρετου](/el/dam/evretou/) **49.8%** — ξυστά κάτω από το 50%, νέο μέγιστο σεζόν
- [Αρμίνου](/el/dam/arminou/) **36.9%** — ελαφρά ανάκαμψη· μεταφορά στον [Κούρη](/el/dam/kouris/) 19.72 ΕΚΜ
- 9 φράγματα στο 100%· [Αχνά](/el/dam/achna/) 2.2% — μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [Ρεκόρ εισροών Μαΐου στα φράγματα — καλύτερος από το 1987](https://kitasweather.com/news/fragmata-vroxoptosi/rekor-sinolikon-eisroon-nerou-gia-mina-maio-sta-fragmata-sinexizei-i-afksisi-tis-sinolikis-plirotitas/) — KitasWeather
- [Ρεκόρ συνολικών εισροών νερού τον φετινό Μάιο](https://www.politis.com.cy/politis-news/cyprus/1005944/rekor-sinolikwn-eisrown-nerou-ghia-mina-maio-sta-fraghmata-sinekhizei-i-auksisi-sinolikis-plirotitas) — Πολίτης
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (12 — 22 мая 2026)

Общий запас **42.0%** (122.1 МКМ), рост с 41.2% (119.8 МКМ) на 12/5 — **+0.8пп, +2.3 МКМ за 10 дней**. Новый сезонный максимум. Запасы **на +20.0пп выше прошлогодних** (22.0%). Приток сезона 25/26: **108.7 МКМ** — рекорд мая с 1987 года продолжает расти. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): **19.72 МКМ**.

**Основные изменения:**
- **[Гермасойя](/ru/dam/germasoyeia/) 59.7%** — новый сезонный максимум, высший уровень с 2020
- **[Полемидия](/ru/dam/polemidia/) 64.0%** — новый сезонный максимум (+28пп к прошлому году)
- [Эвретоу](/ru/dam/evretou/) **49.8%** — чуть ниже 50%, новый сезонный максимум
- [Арминоу](/ru/dam/arminou/) **36.9%** — небольшое восстановление; перекачка в [Курис](/ru/dam/kouris/) 19.72 МКМ
- 9 дамб на 100%; [Ахна](/ru/dam/achna/) 2.2% — без притока за весь сезон

**В СМИ:**
- [Рекордный приток в дамбы мая — лучший с 1987 года](https://cyprus-mail.com/2026/05/21/dams-record-best-may-inflows-since-1987) — Cyprus Mail
- [Май 2026 — рекорд притока воды в дамбы](https://kitasweather.com/news/fragmata-vroxoptosi/rekor-sinolikon-eisroon-nerou-gia-mina-maio-sta-fragmata-sinexizei-i-afksisi-tis-sinolikis-plirotitas/) — KitasWeather
`;
  }
  return `
### Recent Changes (May 12 — May 22, 2026)

Total storage at **42.0%** (122.1 MCM), up from 41.2% (119.8 MCM) on May 12 — **+0.8pp, +2.3 MCM in 10 days**. New season high. **+20.0pp above last year** (22.0%). Season total: **108.7 MCM** — the record May inflow since 1987 keeps extending. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: **19.72 MCM**.

**Notable movements:**
- **[Germasoyeia](/dam/germasoyeia/) 59.7%** — new season high, highest level since 2020
- **[Polemidia](/dam/polemidia/) 64.0%** — new season high, 28pp above last year's 36.0%
- [Evretou](/dam/evretou/) **49.8%** — tantalizingly close to 50%, new season high
- [Arminou](/dam/arminou/) **36.9%** — slight natural rebound; transfer to [Kouris](/dam/kouris/) reaches 19.72 MCM
- 9 dams at 100%; [Achna](/dam/achna/) 2.2% — zero inflow all season

**In the media:**
- [Dams record best May inflows since 1987](https://cyprus-mail.com/2026/05/21/dams-record-best-may-inflows-since-1987) — Cyprus Mail
- [Record May inflows for dams — filling continues](https://kitasweather.com/news/fragmata-vroxoptosi/rekor-sinolikon-eisroon-nerou-gia-mina-maio-sta-fragmata-sinexizei-i-afksisi-tis-sinolikis-plirotitas/) — KitasWeather
- [Cyprus has recorded highest May inflow in four decades](https://famagusta-gazette.com/cyprus-has-recorded-the-highest-may-inflow-of-water-into-its-dams-in-four-decades/) — Famagusta Gazette
`;
};

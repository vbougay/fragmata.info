import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.106, totalSince: 23.975 }, storage: { current: { amount: 47.705, percentage: 41.5 }, lastYear: { amount: 20.826, percentage: 18.1 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.022, totalSince: 4.019 }, storage: { current: { amount: 4.165, percentage: 24.4 }, lastYear: { amount: 4.093, percentage: 23.9 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.004, totalSince: 1.677 }, storage: { current: { amount: 2.556, percentage: 18.5 }, lastYear: { amount: 2.43, percentage: 17.5 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.021, totalSince: 3.637 }, storage: { current: { amount: 5.925, percentage: 38.2 }, lastYear: { amount: 5.978, percentage: 38.6 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.017, totalSince: 8.727 }, storage: { current: { amount: 8.132, percentage: 60.2 }, lastYear: { amount: 2.972, percentage: 22.0 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.068, totalSince: 20.801 }, storage: { current: { amount: 1.813, percentage: 42.2 }, lastYear: { amount: 2.692, percentage: 62.6 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.0, totalSince: 1.63 }, storage: { current: { amount: 2.166, percentage: 63.7 }, lastYear: { amount: 1.205, percentage: 35.4 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.125, percentage: 1.8 }, lastYear: { amount: 0.588, percentage: 8.6 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.04, totalSince: 20.064 }, storage: { current: { amount: 21.997, percentage: 42.0 }, lastYear: { amount: 11.374, percentage: 21.7 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.018, totalSince: 9.353 }, storage: { current: { amount: 8.99, percentage: 52.4 }, lastYear: { amount: 3.969, percentage: 23.1 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.0, totalSince: 0.951 }, storage: { current: { amount: 1.927, percentage: 88.4 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.0, totalSince: 10.087 }, storage: { current: { amount: 12.028, percentage: 50.1 }, lastYear: { amount: 5.383, percentage: 22.4 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.001, totalSince: 1.034 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.328, percentage: 33.1 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.001, totalSince: 0.819 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.324, percentage: 37.7 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.001, totalSince: 0.28 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.145, percentage: 48.7 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.0, totalSince: 1.719 }, storage: { current: { amount: 1.675, percentage: 99.1 }, lastYear: { amount: 0.041, percentage: 2.4 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.001, totalSince: 1.454 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.271, percentage: 19.0 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.256, percentage: 70.5 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.003, totalSince: 2.617 }, storage: { current: { amount: 2.8, percentage: 100.0 }, lastYear: { amount: 0.92, percentage: 32.9 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.003, totalSince: 1.1 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.418, percentage: 70.9 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.737, percentage: 61.5 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through May 28, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:12.446, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:110.538 },
];

export const getReportDate = (): string => "28-MAY-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 19.9 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 41.5% (47.7 MCM) — new season high, 23.4pp above last year\'s 18.1%. Arminou→Kouris transfer: 19.9 MCM since October.',
      el: 'Ο Κούρης στο 41.5% (47.7 ΕΚΜ) — νέο μέγιστο σεζόν, 23.4μ.π. πάνω από πέρυσι (18.1%). Μεταφορά Αρμίνου→Κούρης: 19.9 ΕΚΜ.',
      ru: 'Курис на 41.5% (47.7 МКМ) — новый сезонный максимум, +23.4пп выше прошлогодних 18.1%. Перекачка Арминоу→Курис: 19.9 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 24.4% (4.17 MCM) — near last year\'s 23.9%. Seasonal inflow 4.02 MCM, gradual recovery continuing.',
      el: 'Ο Καλαβασός στο 24.4% (4.17 ΕΚΜ) — κοντά στο πέρυσι (23.9%). Εισροή σεζόν 4.02 ΕΚΜ, σταδιακή ανάκαμψη.',
      ru: 'Калавасос на 24.4% (4.17 МКМ) — близко к прошлогодним 23.9%. Приток 4.02 МКМ за сезон, постепенное восстановление.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.5% (2.56 MCM) — slightly above last year\'s 17.5%. Seasonal inflow 1.68 MCM, slow recovery continues.',
      el: 'Η Λεύκαρα στο 18.5% (2.56 ΕΚΜ) — ελαφρά πάνω από πέρυσι (17.5%). Εισροή σεζόν 1.68 ΕΚΜ — αργή ανάκαμψη.',
      ru: 'Лефкара на 18.5% (2.56 МКМ) — чуть выше прошлогодних 17.5%. Приток 1.68 МКМ за сезон — медленное восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 38.2% (5.93 MCM) — near last year\'s 38.6%. Steady with 3.64 MCM seasonal inflow.',
      el: 'Ο Διπόταμος στο 38.2% (5.93 ΕΚΜ) — κοντά στο πέρυσι (38.6%). Σταθερός με 3.64 ΕΚΜ εισροή σεζόν.',
      ru: 'Дипотамос на 38.2% (5.93 МКМ) — близко к прошлогодним 38.6%. Стабильное положение, приток 3.64 МКМ за сезон.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 60.2% (8.13 MCM) — season high, above 60% milestone; 38.2pp above last year\'s 22.0%. Highest level since 2020.',
      el: 'Η Γερμασόγεια στο 60.2% (8.13 ΕΚΜ) — μέγιστο σεζόν, πάνω από 60%. 38.2μ.π. πάνω από πέρυσι (22.0%). Υψηλότερο επίπεδο από το 2020.',
      ru: 'Гермасойя на 60.2% (8.13 МКМ) — сезонный максимум, выше 60%. +38.2пп выше прошлогодних 22.0%. Высший уровень с 2020 года.',
    },
    'Arminou': {
      en: 'Arminou at 42.2% (1.81 MCM) — new season high. Seasonal inflow 20.80 MCM = 4.8× capacity; 19.9 MCM pumped to Kouris.',
      el: 'Ο Αρμίνου στο 42.2% (1.81 ΕΚΜ) — νέο μέγιστο σεζόν. Εισροή σεζόν: 20.80 ΕΚΜ = 4.8× χωρητικότητα· 19.9 ΕΚΜ στον Κούρη.',
      ru: 'Арминоу на 42.2% (1.81 МКМ) — новый сезонный максимум. Приток: 20.80 МКМ = 4.8× ёмкости; 19.9 МКМ перекачано в Курис.',
    },
    'Polemidia': {
      en: 'Polemidia at 63.7% (2.17 MCM) — near season high, 28.3pp above last year\'s 35.4%. Strong gains throughout spring.',
      el: 'Η Πολεμίδια στο 63.7% (2.17 ΕΚΜ) — κοντά στο μέγιστο σεζόν, 28.3μ.π. πάνω από πέρυσι (35.4%). Ισχυρά κέρδη εφέτος.',
      ru: 'Полемидия на 63.7% (2.17 МКМ) — близко к сезонному максимуму, +28.3пп выше прошлогодних 35.4%. Сильный рост весной.',
    },
    'Achna': {
      en: 'Achna critically low at 1.8% (0.13 MCM), zero inflow all season. Far below last year\'s 8.6%. No recovery expected.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 1.8% (0.13 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (8.6%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 1.8% (0.13 МКМ), без притока за сезон. Далеко ниже прошлогодних 8.6%. Восстановление не ожидается.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 42.0% (22.0 MCM) — season high, 20.3pp above last year\'s 21.7%. Seasonal inflow 20.06 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 42.0% (22.0 ΕΚΜ) — μέγιστο σεζόν, 20.3μ.π. πάνω από πέρυσι (21.7%). Εισροή 20.06 ΕΚΜ.',
      ru: 'Аспрокреммос на 42.0% (22.0 МКМ) — сезонный максимум, +20.3пп выше прошлогодних 21.7%. Приток 20.06 МКМ за сезон.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 52.4% (8.99 MCM) — new season high, 29.3pp above last year\'s 23.1%. Seasonal inflow 9.35 MCM.',
      el: 'Ο Καννάβιου στο 52.4% (8.99 ΕΚΜ) — νέο μέγιστο σεζόν, 29.3μ.π. πάνω από πέρυσι (23.1%). Εισροή σεζόν 9.35 ΕΚΜ.',
      ru: 'Каннавиу на 52.4% (8.99 МКМ) — новый сезонный максимум, +29.3пп выше прошлогодних 23.1%. Приток 9.35 МКМ за сезон.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 88.4% (1.93 MCM) — near full capacity. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 88.4% (1.93 ΕΚΜ) — σχεδόν πλήρης. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 88.4% (1.93 МКМ) — близко к заполнению. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 50.1% (12.03 MCM) — season high, 27.7pp above last year\'s 22.4%. Holding above 50% milestone.',
      el: 'Ο Εύρετου στο 50.1% (12.03 ΕΚΜ) — μέγιστο σεζόν, 27.7μ.π. πάνω από πέρυσι (22.4%). Παραμένει πάνω από το 50%.',
      ru: 'Эвретоу на 50.1% (12.03 МКМ) — сезонный максимум, +27.7пп выше прошлогодних 22.4%. Удерживается выше 50%.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), continuously overflowing. Up from 33.1% last year — nearly tripled year over year.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), συνεχής υπερχείλιση. Από 33.1% πέρυσι — σχεδόν τριπλασιάστηκε.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), продолжает переливаться. Год назад 33.1% — почти утроение.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), continuously overflowing. Up from 37.7% last year — more than doubled year over year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), συνεχής υπερχείλιση. Αύξηση από 37.7% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), продолжает переливаться. Рост с 37.7% год назад — более чем удвоение.',
    },
    'Agia Marina': {
      en: 'Agia Marina full at 100% (0.30 MCM). Up from 48.7% last year; all four Chrysochou dams remain at full capacity.',
      el: 'Η Αγία Μαρίνα γεμάτη στο 100% (0.30 ΕΚΜ). Από 48.7% πέρυσι — ο Χρυσοχούς εξακολουθεί να είναι πλήρης.',
      ru: 'Агия Марина заполнена на 100% (0.30 МКМ). Рост с 48.7% год назад; все дамбы Хрисоху по-прежнему полны.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 99.1% (1.68 MCM) — effectively at capacity. Was 2.4% last year — dramatic 40× year-over-year recovery.',
      el: 'Τα Βυζακιά στο 99.1% (1.68 ΕΚΜ) — ουσιαστικά στη χωρητικότητα. Από 2.4% πέρυσι — 40× ανάκαμψη.',
      ru: 'Визакия на 99.1% (1.68 МКМ) — фактически при максимальной ёмкости. Год назад 2.4% — восстановление в 40×.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM) — holding at capacity. Was 19.0% last year — 5× year-over-year recovery.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ) — παραμένει στη χωρητικότητα. Από 19.0% πέρυσι — 5× ανάκαμψη.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ). Год назад 19.0% — восстановление в 5×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 70.5% last year, at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 70.5% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 70.5% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos full at 100% (2.80 MCM) — reached full capacity in mid-March. Was 32.9% last year — 3× year-over-year recovery.',
      el: 'Ο Ταμασός γεμάτος στο 100% (2.80 ΕΚΜ) — έφτασε στη χωρητικότητα στα μέσα Μαρτίου. Από 32.9% πέρυσι — 3× ΕΤΕ.',
      ru: 'Тамассос заполнен на 100% (2.80 МКМ) — достиг максимума в середине марта. Год назад 32.9% — восстановление в 3×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 70.9% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 70.9% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 70.9% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 61.5% last year — 1.6× year-over-year improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 61.5% πέρυσι — 1.6× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 61.5% год назад — улучшение в 1.6×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (21 — 28 Μαΐου 2026)

Συνολική αποθήκευση **42.3%** (123.1 ΕΚΜ), άνοδος από 41.8% (121.8 ΕΚΜ) στις 21/5 — **+0.5μ.π., +1.3 ΕΚΜ σε 7 ημέρες**. Νέο μέγιστο σεζόν. **+20.7μ.π. πάνω από πέρυσι** (21.7%). Εισροή σεζόν 25/26: **110.5 ΕΚΜ** — ρεκόρ από το 1987. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): **19.9 ΕΚΜ**.

**Αξιοσημείωτα:**
- **[Γερμασόγεια](/el/dam/germasoyeia/) 60.2%** — νέο μέγιστο σεζόν, υψηλότερο από το 2020
- **[Εύρετου](/el/dam/evretou/) 50.1%** — παραμένει πάνω από 50%· νέο μέγιστο σεζόν
- [Αρμίνου](/el/dam/arminou/) **42.2%** — νέο μέγιστο σεζόν· μεταφορά [Κούρης](/el/dam/kouris/) 19.9 ΕΚΜ
- [Καννάβιου](/el/dam/kannaviou/) **52.4%** — νέο μέγιστο σεζόν
- **10 φράγματα στο 100%** συμπ. [Ταμασός](/el/dam/tamassos/), [Κλήρου-Μαλούντα](/el/dam/klirou-malounta/), [Σολέα](/el/dam/solea/)
- [Αχνά](/el/dam/achna/) **1.8%** — μηδέν εισροή όλη τη σεζόν, ελαφρά μείωση λόγω εξάτμισης

**Στα μέσα:**
- [Ρεκόρ συνολικών εισροών νερού τον φετινό Μάιο](https://www.politis.com.cy/politis-news/cyprus/1005944/rekor-sinolikwn-eisrown-nerou-ghia-mina-maio-sta-fraghmata-sinekhizei-i-auksisi-sinolikis-plirotitas) — Πολίτης
- [Ξεπέρασε το 160% η μέση βροχόπτωση Μαΐου](https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-160-tis-ekato-i-mesi-vroxoptosi-tou-mina-apotimisi-tis-diataraxis-maiou-kai-sinolika-ipsi-vroxis/) — KitasWeather
- [Έργα υδροδότησης Λεμεσού «προχωρούν»](https://cyprus-mail.com/2026/05/14/limassol-water-reservoir-projects-progressing-says-district-government) — Cyprus Mail
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (21 — 28 мая 2026)

Общий запас **42.3%** (123.1 МКМ), рост с 41.8% (121.8 МКМ) на 21/5 — **+0.5пп, +1.3 МКМ за 7 дней**. Новый сезонный максимум. Запасы **на +20.7пп выше прошлогодних** (21.7%). Приток сезона 25/26: **110.5 МКМ** — рекорд с 1987 года. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): **19.9 МКМ**.

**Основные изменения:**
- **[Гермасойя](/ru/dam/germasoyeia/) 60.2%** — сезонный максимум, высший уровень с 2020
- **[Эвретоу](/ru/dam/evretou/) 50.1%** — удерживается выше 50%; сезонный максимум
- [Арминоу](/ru/dam/arminou/) **42.2%** — новый сезонный максимум; перекачка в [Курис](/ru/dam/kouris/) 19.9 МКМ
- [Каннавиу](/ru/dam/kannaviou/) **52.4%** — новый сезонный максимум
- **10 дамб на 100%** включая [Тамассос](/ru/dam/tamassos/), [Клиру-Малунта](/ru/dam/klirou-malounta/), [Солеа](/ru/dam/solea/)
- [Ахна](/ru/dam/achna/) **1.8%** — без притока за весь сезон, лёгкое снижение из-за испарения

**В СМИ:**
- [Рекордный приток в дамбы мая — лучший с 1987 года](https://cyprus-mail.com/2026/05/21/dams-record-best-may-inflows-since-1987) — Cyprus Mail
- [К 25 мая выпало 220% месячной нормы осадков](https://ruscyprus.com/news/k-25-maya-na-kipre-vypalo-220-mesyachnoy/57521) — RusCyprus
- [Новые водохранилища Лимассола «в стадии строительства»](https://cyprus-mail.com/2026/05/14/limassol-water-reservoir-projects-progressing-says-district-government) — Cyprus Mail
`;
  }
  return `
### Recent Changes (May 21 — May 28, 2026)

Total storage at **42.3%** (123.1 MCM), up from 41.8% (121.8 MCM) on May 21 — **+0.5pp, +1.3 MCM in 7 days**. New season high. **+20.7pp above last year** (21.7%). Season total: **110.5 MCM** — record since 1987. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: **19.9 MCM**.

**Notable movements:**
- **[Germasoyeia](/dam/germasoyeia/) 60.2%** — season high, highest since 2020
- **[Evretou](/dam/evretou/) 50.1%** — holding above 50%; season high
- [Arminou](/dam/arminou/) **42.2%** — new season high; transfer to [Kouris](/dam/kouris/) now 19.9 MCM
- [Kannaviou](/dam/kannaviou/) **52.4%** — new season high
- **10 dams at 100%** including [Tamassos](/dam/tamassos/), [Klirou-Malounta](/dam/klirou-malounta/), [Solea](/dam/solea/)
- [Achna](/dam/achna/) **1.8%** — zero inflow all season; slight dip due to evaporation

**In the media:**
- [Dams record best May inflows since 1987](https://cyprus-mail.com/2026/05/21/dams-record-best-may-inflows-since-1987) — Cyprus Mail
- [May precipitation exceeds 160% of average](https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-160-tis-ekato-i-mesi-vroxoptosi-tou-mina-apotimisi-tis-diataraxis-maiou-kai-sinolika-ipsi-vroxis/) — KitasWeather
- [Limassol water reservoir projects 'progressing'](https://cyprus-mail.com/2026/05/14/limassol-water-reservoir-projects-progressing-says-district-government) — Cyprus Mail
`;
};

import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.473, totalSince: 22.433 }, storage: { current: { amount: 44.426, percentage: 38.6 }, lastYear: { amount: 21.501, percentage: 18.7 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.04, totalSince: 3.713 }, storage: { current: { amount: 3.914, percentage: 22.9 }, lastYear: { amount: 4.339, percentage: 25.4 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.011, totalSince: 1.629 }, storage: { current: { amount: 2.53, percentage: 18.3 }, lastYear: { amount: 2.835, percentage: 20.5 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.043, totalSince: 3.458 }, storage: { current: { amount: 5.909, percentage: 38.1 }, lastYear: { amount: 5.878, percentage: 37.9 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.089, totalSince: 8.266 }, storage: { current: { amount: 7.817, percentage: 57.9 }, lastYear: { amount: 3.181, percentage: 23.6 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.407, totalSince: 19.447 }, storage: { current: { amount: 3.097, percentage: 72.0 }, lastYear: { amount: 2.733, percentage: 63.6 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.022, totalSince: 1.513 }, storage: { current: { amount: 2.123, percentage: 62.4 }, lastYear: { amount: 1.255, percentage: 36.9 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.149, percentage: 2.2 }, lastYear: { amount: 0.853, percentage: 12.5 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.201, totalSince: 19.23 }, storage: { current: { amount: 21.444, percentage: 40.9 }, lastYear: { amount: 12.013, percentage: 22.9 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.114, totalSince: 9.011 }, storage: { current: { amount: 8.841, percentage: 51.5 }, lastYear: { amount: 4.148, percentage: 24.2 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.004, totalSince: 0.948 }, storage: { current: { amount: 1.963, percentage: 90.0 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.116, totalSince: 9.664 }, storage: { current: { amount: 11.7, percentage: 48.8 }, lastYear: { amount: 5.591, percentage: 23.3 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.003, totalSince: 1.006 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.366, percentage: 37.0 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.003, totalSince: 0.791 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.359, percentage: 41.7 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.003, totalSince: 0.252 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.171, percentage: 57.4 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.003, totalSince: 1.693 }, storage: { current: { amount: 1.69, percentage: 100.0 }, lastYear: { amount: 0.043, percentage: 2.5 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.003, totalSince: 1.424 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.299, percentage: 20.9 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.289, percentage: 79.6 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.003, totalSince: 2.605 }, storage: { current: { amount: 2.8, percentage: 100.0 }, lastYear: { amount: 0.972, percentage: 34.7 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.003, totalSince: 1.084 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.446, percentage: 72.3 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.832, percentage: 63.6 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through May 11, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:6.697, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:104.789 },
];

export const getReportDate = (): string => "11-MAY-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 17.31 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 38.6% (44.4 MCM) — new season high, 19.9pp above last year\'s 18.7%. Arminou→Kouris transfer: 17.31 MCM since October.',
      el: 'Ο Κούρης στο 38.6% (44.4 ΕΚΜ) — νέο μέγιστο σεζόν, 19.9μ.π. πάνω από πέρυσι (18.7%). Μεταφορά Αρμίνου→Κούρης: 17.31 ΕΚΜ.',
      ru: 'Курис на 38.6% (44.4 МКМ) — новый сезонный максимум, +19.9пп выше прошлогодних 18.7%. Перекачка Арминоу→Курис: 17.31 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 22.9% (3.91 MCM) — 2.5pp below last year\'s 25.4%. Seasonal inflow 3.71 MCM, gradual recovery continuing.',
      el: 'Ο Καλαβασός στο 22.9% (3.91 ΕΚΜ) — 2.5μ.π. κάτω από πέρυσι (25.4%). Εισροή σεζόν 3.71 ΕΚΜ, σταδιακή ανάκαμψη.',
      ru: 'Калавасос на 22.9% (3.91 МКМ) — на 2.5пп ниже прошлогодних 25.4%. Приток 3.71 МКМ за сезон, постепенное восстановление.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.3% (2.53 MCM) — 2.2pp below last year\'s 20.5%. Seasonal inflow 1.63 MCM, slow recovery continues.',
      el: 'Η Λεύκαρα στο 18.3% (2.53 ΕΚΜ) — 2.2μ.π. κάτω από πέρυσι (20.5%). Εισροή σεζόν 1.63 ΕΚΜ — αργή ανάκαμψη.',
      ru: 'Лефкара на 18.3% (2.53 МКМ) — на 2.2пп ниже прошлогодних 20.5%. Приток 1.63 МКМ за сезон — медленное восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 38.1% (5.91 MCM) — slightly above last year\'s 37.9%. Steady with 3.46 MCM seasonal inflow.',
      el: 'Ο Διπόταμος στο 38.1% (5.91 ΕΚΜ) — ελαφρά πάνω από πέρυσι (37.9%). Σταθερός με 3.46 ΕΚΜ εισροή σεζόν.',
      ru: 'Дипотамос на 38.1% (5.91 МКМ) — незначительно выше прошлогодних 37.9%. Стабильное положение, приток 3.46 МКМ за сезон.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 57.9% (7.82 MCM) — new season high, 34.3pp above last year\'s 23.6%. Up from 14% in mid-March — a 44pp gain in 8 weeks.',
      el: 'Η Γερμασόγεια στο 57.9% (7.82 ΕΚΜ) — νέο μέγιστο σεζόν, 34.3μ.π. πάνω από πέρυσι (23.6%). Τον Μάρτιο ήταν 14% — 44μ.π. άνοδος σε 8 εβδομάδες.',
      ru: 'Гермасойя на 57.9% (7.82 МКМ) — новый максимум, +34.3пп выше прошлогодних 23.6%. В марте была 14% — прирост в 44пп за 8 недель.',
    },
    'Arminou': {
      en: 'Arminou at 72.0% (3.10 MCM) — new all-time season high (last year\'s peak was 2.73 MCM). Inflow: 19.4 MCM = 4.5× capacity; 17.31 MCM pumped to Kouris.',
      el: 'Ο Αρμίνου στο 72.0% (3.10 ΕΚΜ) — νέο ρεκόρ σεζόν (μέγιστο πέρυσι: 2.73 ΕΚΜ). Εισροή: 19.4 ΕΚΜ = 4.5× η χωρητικότητά του· 17.31 ΕΚΜ στον Κούρη.',
      ru: 'Арминоу на 72.0% (3.10 МКМ) — новый рекорд сезона (пик прошлого года: 2.73 МКМ). Приток: 19.4 МКМ = 4.5× ёмкости; 17.31 МКМ перекачано в Курис.',
    },
    'Polemidia': {
      en: 'Polemidia at 62.4% (2.12 MCM) — new season high, 25.5pp above last year\'s 36.9%. Consistent gains throughout spring.',
      el: 'Η Πολεμίδια στο 62.4% (2.12 ΕΚΜ) — νέο μέγιστο σεζόν, 25.5μ.π. πάνω από πέρυσι (36.9%). Συνεχής άνοδος εφέτος.',
      ru: 'Полемидия на 62.4% (2.12 МКМ) — новый сезонный максимум, +25.5пп выше прошлогодних 36.9%. Постоянный рост весной.',
    },
    'Achna': {
      en: 'Achna critically low at 2.2% (0.15 MCM), zero inflow all season. Far below last year\'s 12.5%. No recovery expected.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.2% (0.15 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (12.5%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.2% (0.15 МКМ), без притока за сезон. Далеко ниже прошлогодних 12.5%. Восстановление не ожидается.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 40.9% (21.4 MCM) — new season high, 18.0pp above last year\'s 22.9%. Seasonal inflow 19.2 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 40.9% (21.4 ΕΚΜ) — νέο μέγιστο σεζόν, 18.0μ.π. πάνω από πέρυσι (22.9%). Εισροή 19.2 ΕΚΜ.',
      ru: 'Аспрокреммос на 40.9% (21.4 МКМ) — новый максимум, +18.0пп выше прошлогодних 22.9%. Приток 19.2 МКМ за сезон.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 51.5% (8.84 MCM) — new season high, 27.3pp above last year\'s 24.2%. Seasonal inflow 9.01 MCM.',
      el: 'Ο Καννάβιου στο 51.5% (8.84 ΕΚΜ) — νέο μέγιστο σεζόν, 27.3μ.π. πάνω από πέρυσι (24.2%). Εισροή σεζόν 9.01 ΕΚΜ.',
      ru: 'Каннавиу на 51.5% (8.84 МКМ) — новый сезонный максимум, +27.3пп выше прошлогодних 24.2%. Приток 9.01 МКМ за сезон.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 90.0% (1.96 MCM) — holding near full capacity. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 90.0% (1.96 ΕΚΜ) — σχεδόν πλήρης. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 90.0% (1.96 МКМ) — близко к заполнению. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 48.8% (11.7 MCM) — new season high, 25.5pp above last year\'s 23.3%. Approaching 50% milestone; seasonal inflow 9.66 MCM.',
      el: 'Ο Εύρετου στο 48.8% (11.7 ΕΚΜ) — νέο μέγιστο σεζόν, 25.5μ.π. πάνω από πέρυσι (23.3%). Πλησιάζει 50%; εισροή 9.66 ΕΚΜ.',
      ru: 'Эвретоу на 48.8% (11.7 МКМ) — новый сезонный максимум, +25.5пп выше прошлогодних 23.3%. Приближается к 50%; приток 9.66 МКМ.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), continuously overflowing. Up from 37.0% last year — more than doubled year over year.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), συνεχής υπερχείλιση. Από 37.0% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), продолжает переливаться. Год назад 37.0% — более чем удвоение.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), continuously overflowing. Up from 41.7% last year — more than doubled year over year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), συνεχής υπερχείλιση. Αύξηση από 41.7% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), продолжает переливаться. Рост с 41.7% год назад — более чем удвоение.',
    },
    'Agia Marina': {
      en: 'Agia Marina full at 100% (0.30 MCM). Up from 57.4% last year; all four Chrysochou dams remain at full capacity.',
      el: 'Η Αγία Μαρίνα γεμάτη στο 100% (0.30 ΕΚΜ). Από 57.4% πέρυσι — ο Χρυσοχούς εξακολουθεί να είναι πλήρης.',
      ru: 'Агия Марина заполнена на 100% (0.30 МКМ). Рост с 57.4% год назад; все дамбы Хрисоху по-прежнему полны.',
    },
    'Vyzakia': {
      en: 'Vyzakia full at 100% (1.69 MCM) — filled Apr 27, maintaining capacity. Was 2.5% last year — 40× year-over-year recovery.',
      el: 'Τα Βυζακιά γεμάτα στο 100% (1.69 ΕΚΜ) — γέμισαν 27/4, στη χωρητικότητα. Από 2.5% πέρυσι — 40× ανάκαμψη.',
      ru: 'Визакия заполнена на 100% (1.69 МКМ) — заполнена 27 апреля. Год назад 2.5% — восстановление в 40×.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM) — filled Apr 28, holding at capacity. Was 20.9% last year — 4.8× year-over-year recovery.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ) — γέμισε 28/4, παραμένει στη χωρητικότητα. Από 20.9% πέρυσι — 4.8× ανάκαμψη.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ) — заполнен 28 апреля. Год назад 20.9% — восстановление в 4.8×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 79.6% last year, at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 79.6% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 79.6% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos full at 100% (2.80 MCM) — overflowing since late March. Was 34.7% last year — 2.9× year-over-year recovery.',
      el: 'Ο Ταμασός γεμάτος στο 100% (2.80 ΕΚΜ) — υπερχείλιση από τέλη Μαρτίου. Από 34.7% πέρυσι — 2.9× ΕΤΕ.',
      ru: 'Тамассос заполнен на 100% (2.80 МКМ) — переливается с конца марта. Год назад 34.7% — в 2.9× год к году.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 72.3% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 72.3% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 72.3% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 63.6% last year — 1.6× year-over-year improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 63.6% πέρυσι — 1.6× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 63.6% год назад — улучшение в 1.6×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (4 — 11 Μαΐου 2026)

Συνολική αποθήκευση **41.1%** (119.5 ΕΚΜ), άνοδος από 39.6% (115.2 ΕΚΜ) στις 4/5 — **+1.5μ.π., +4.3 ΕΚΜ σε 7 ημέρες**. Νέο μέγιστο σεζόν. **18.5μ.π. πάνω από πέρυσι** (22.6%). Εισροή σεζόν 25/26: **104.8 ΕΚΜ**. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 17.31 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 72.0%** — από 49.2% πριν 7 ημέρες (+22.8μ.π.). Νέο ρεκόρ σεζόν: 3.10 ΕΚΜ, ξεπέρασε το μέγιστο πέρυσι (2.73 ΕΚΜ). Εισροή: 19.4 ΕΚΜ = 4.5× η χωρητικότητά του
- [Εύρετου](/el/dam/evretou/) **48.8%** — νέο μέγιστο, 25.5μ.π. πάνω από πέρυσι· πλησιάζει το 50%
- [Γερμασόγεια](/el/dam/germasoyeia/) **57.9%** — νέο μέγιστο, 34.3μ.π. πάνω από πέρυσι
- [Καννάβιου](/el/dam/kannaviou/) **51.5%** — νέο μέγιστο, 27.3μ.π. πάνω από πέρυσι
- [Ασπρόκρεμμος](/el/dam/asprokremmos/) **40.9%** — νέο μέγιστο· ξεπέρασε το 40%
- 9 φράγματα στο 100%· [Αχνά](/el/dam/achna/) 2.2% — μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [Ρεκόρ 24ωρης εισροής για Μάιο — Ξεπέρασε το 40% η πληρότητα φραγμάτων](https://kitasweather.com/news/fragmata-vroxoptosi/rekor-24oris-sinolikis-eisrois-nerou-sta-fragmata-gia-mina-maio-kseperase-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
- [Ξεπέρασε το 160% η μέση βροχόπτωση Μαΐου — αποτίμηση διαταραχής](https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-160-tis-ekato-i-mesi-vroxoptosi-tou-mina-apotimisi-tis-diataraxis-maiou-kai-sinolika-ipsi-vroxis/) — KitasWeather
- [Φράγματα στο 39.6% — συνεχής άνοδος αποθεμάτων](https://cyprus-mail.com/2026/05/04/dams-at-39-6-per-cent-capacity) — Cyprus Mail
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (4 — 11 мая 2026)

Общий запас **41.1%** (119.5 МКМ), рост с 39.6% (115.2 МКМ) на 4/5 — **+1.5пп, +4.3 МКМ за 7 дней**. Новый сезонный максимум. Запасы **на 18.5пп выше прошлогодних** (22.6%). Приток сезона 25/26: **104.8 МКМ**. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 17.31 МКМ.

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 72.0%** — с 49.2% неделю назад (+22.8пп). Новый рекорд сезона: 3.10 МКМ, превысил прошлогодний пик (2.73 МКМ). Приток: 19.4 МКМ = 4.5× его ёмкости
- [Эвретоу](/ru/dam/evretou/) **48.8%** — новый максимум, +25.5пп выше прошлого года; приближается к 50%
- [Гермасойя](/ru/dam/germasoyeia/) **57.9%** — новый максимум, +34.3пп выше прошлого года
- [Каннавиу](/ru/dam/kannaviou/) **51.5%** — новый максимум, +27.3пп выше прошлого года
- [Аспрокреммос](/ru/dam/asprokremmos/) **40.9%** — новый максимум; пересёк отметку 40%
- 9 дамб на 100%; [Ахна](/ru/dam/achna/) 2.2% — без притока за весь сезон

**В СМИ:**
- [Рекордный суточный приток для мая — наполненность дамб превысила 40%](https://kitasweather.com/news/fragmata-vroxoptosi/rekor-24oris-sinolikis-eisrois-nerou-sta-fragmata-gia-mina-maio-kseperase-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
- [Осадки превысили 160% нормы мая — итоги майского циклона](https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-160-tis-ekato-i-mesi-vroxoptosi-tou-mina-apotimisi-tis-diataraxis-maiou-kai-sinolika-ipsi-vroxis/) — KitasWeather
- [Плотины Кипра заполнены на 39.6% — запасы продолжают расти](https://ruscyprus.com/news/vodohranilishcha-kipra-zapolneny-uzhe-na-39/56014) — RusCyprus
`;
  }
  return `
### Recent Changes (May 4 — May 11, 2026)

Total storage at **41.1%** (119.5 MCM), up from 39.6% (115.2 MCM) on May 4 — **+1.5pp, +4.3 MCM in 7 days**. New season high. **18.5pp above last year** (22.6%). Season total: **104.8 MCM**. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 17.31 MCM.

**Notable movements:**
- **[Arminou](/dam/arminou/) 72.0%** — up from 49.2% a week ago (+22.8pp). New all-time season high: 3.10 MCM, exceeding last year's peak of 2.73 MCM. Seasonal inflow: 19.4 MCM = 4.5× its own capacity
- [Evretou](/dam/evretou/) **48.8%** — new season high, 25.5pp above last year; approaching 50% milestone
- [Germasoyeia](/dam/germasoyeia/) **57.9%** — new season high, 34.3pp above last year
- [Kannaviou](/dam/kannaviou/) **51.5%** — new season high, 27.3pp above last year
- [Asprokremmos](/dam/asprokremmos/) **40.9%** — new season high; crossed 40% mark
- 9 dams at 100%; [Achna](/dam/achna/) 2.2% — zero inflow all season

**In the media:**
- [Record 24-hour inflow for May — dam fullness crosses 40%](https://kitasweather.com/news/fragmata-vroxoptosi/rekor-24oris-sinolikis-eisrois-nerou-sta-fragmata-gia-mina-maio-kseperase-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
- [May precipitation exceeds 160% of average — assessment of May disturbance](https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-160-tis-ekato-i-mesi-vroxoptosi-tou-mina-apotimisi-tis-diataraxis-maiou-kai-sinolika-ipsi-vroxis/) — KitasWeather
- [Dams at 39.6 per cent capacity](https://cyprus-mail.com/2026/05/04/dams-at-39-6-per-cent-capacity) — Cyprus Mail
`;
};

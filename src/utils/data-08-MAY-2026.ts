import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.209, totalSince: 21.96 }, storage: { current: { amount: 43.966, percentage: 38.2 }, lastYear: { amount: 21.591, percentage: 18.8 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.008, totalSince: 3.673 }, storage: { current: { amount: 3.883, percentage: 22.7 }, lastYear: { amount: 4.37, percentage: 25.6 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.002, totalSince: 1.618 }, storage: { current: { amount: 2.525, percentage: 18.2 }, lastYear: { amount: 2.908, percentage: 21.0 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.01, totalSince: 3.415 }, storage: { current: { amount: 5.909, percentage: 38.1 }, lastYear: { amount: 5.852, percentage: 37.8 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.037, totalSince: 8.177 }, storage: { current: { amount: 7.749, percentage: 57.4 }, lastYear: { amount: 3.218, percentage: 23.8 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.149, totalSince: 19.04 }, storage: { current: { amount: 2.972, percentage: 69.1 }, lastYear: { amount: 2.729, percentage: 63.5 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.013, totalSince: 1.491 }, storage: { current: { amount: 2.106, percentage: 61.9 }, lastYear: { amount: 1.267, percentage: 37.3 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.149, percentage: 2.2 }, lastYear: { amount: 0.865, percentage: 12.7 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.07, totalSince: 19.029 }, storage: { current: { amount: 21.3, percentage: 40.7 }, lastYear: { amount: 12.106, percentage: 23.1 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.045, totalSince: 8.897 }, storage: { current: { amount: 8.762, percentage: 51.0 }, lastYear: { amount: 4.174, percentage: 24.3 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.002, totalSince: 0.944 }, storage: { current: { amount: 1.963, percentage: 90.0 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.065, totalSince: 9.548 }, storage: { current: { amount: 11.602, percentage: 48.3 }, lastYear: { amount: 5.622, percentage: 23.4 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.001, totalSince: 1.003 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.373, percentage: 37.7 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.001, totalSince: 0.788 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.371, percentage: 43.1 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.001, totalSince: 0.249 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.176, percentage: 59.1 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.001, totalSince: 1.69 }, storage: { current: { amount: 1.69, percentage: 100.0 }, lastYear: { amount: 0.043, percentage: 2.5 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.001, totalSince: 1.421 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.302, percentage: 21.1 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.297, percentage: 81.8 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 2.602 }, storage: { current: { amount: 2.8, percentage: 100.0 }, lastYear: { amount: 0.985, percentage: 35.2 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.081 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.45, percentage: 72.5 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.84, percentage: 63.8 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through May 8, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:5.162, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:103.254 },
];

export const getReportDate = (): string => "08-MAY-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 17.06 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 38.2% (44.0 MCM) — new season high, 19.4pp above last year\'s 18.8%. Arminou→Kouris transfer: 17.06 MCM since October.',
      el: 'Ο Κούρης στο 38.2% (44.0 ΕΚΜ) — νέο μέγιστο σεζόν, 19.4μ.π. πάνω από πέρυσι (18.8%). Μεταφορά Αρμίνου→Κούρης: 17.06 ΕΚΜ.',
      ru: 'Курис на 38.2% (44.0 МКМ) — новый сезонный максимум, +19.4пп выше прошлогодних 18.8%. Перекачка Арминоу→Курис: 17.06 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 22.7% (3.88 MCM) — 2.9pp below last year\'s 25.6%. Seasonal inflow 3.67 MCM, gradual recovery continuing.',
      el: 'Ο Καλαβασός στο 22.7% (3.88 ΕΚΜ) — 2.9μ.π. κάτω από πέρυσι (25.6%). Εισροή σεζόν 3.67 ΕΚΜ, σταδιακή ανάκαμψη.',
      ru: 'Калавасос на 22.7% (3.88 МКМ) — на 2.9пп ниже прошлогодних 25.6%. Приток 3.67 МКМ за сезон, постепенное восстановление.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.2% (2.53 MCM) — 2.8pp below last year\'s 21.0%. Seasonal inflow 1.62 MCM, slow recovery continues.',
      el: 'Η Λεύκαρα στο 18.2% (2.53 ΕΚΜ) — 2.8μ.π. κάτω από πέρυσι (21.0%). Εισροή σεζόν 1.62 ΕΚΜ — αργή ανάκαμψη.',
      ru: 'Лефкара на 18.2% (2.53 МКМ) — на 2.8пп ниже прошлогодних 21.0%. Приток 1.62 МКМ за сезон — медленное восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 38.1% (5.91 MCM) — slightly above last year\'s 37.8%. Steady with 3.42 MCM seasonal inflow.',
      el: 'Ο Διπόταμος στο 38.1% (5.91 ΕΚΜ) — ελαφρά πάνω από πέρυσι (37.8%). Σταθερός με 3.42 ΕΚΜ εισροή σεζόν.',
      ru: 'Дипотамос на 38.1% (5.91 МКМ) — незначительно выше прошлогодних 37.8%. Стабильное положение, приток 3.42 МКМ за сезон.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 57.4% (7.75 MCM) — new season high, 33.6pp above last year\'s 23.8%. Was at 14% in mid-March — a 43pp gain in 7 weeks.',
      el: 'Η Γερμασόγεια στο 57.4% (7.75 ΕΚΜ) — νέο μέγιστο σεζόν, 33.6μ.π. πάνω από πέρυσι (23.8%). Τον Μάρτιο ήταν στο 14% — άνοδος 43μ.π. σε 7 εβδομάδες.',
      ru: 'Гермасойя на 57.4% (7.75 МКМ) — новый максимум, +33.6пп выше прошлогодних 23.8%. В марте была 14% — прирост в 43пп за 7 недель.',
    },
    'Arminou': {
      en: 'Arminou at 69.1% (2.97 MCM) — new season high, 5.6pp above last year despite 17.06 MCM pumped to Kouris. Seasonal inflow 19.04 MCM = 4.4× its own capacity.',
      el: 'Ο Αρμίνου στο 69.1% (2.97 ΕΚΜ) — νέο μέγιστο σεζόν, 5.6μ.π. πάνω από πέρυσι παρά τη μεταφορά 17.06 ΕΚΜ στον Κούρη. Εισροή 19.04 ΕΚΜ = 4.4× η χωρητικότητά του.',
      ru: 'Арминоу на 69.1% (2.97 МКМ) — новый максимум сезона, +5.6пп выше прошлого года несмотря на 17.06 МКМ перекачанных в Курис. Приток 19.04 МКМ = 4.4× его ёмкости.',
    },
    'Polemidia': {
      en: 'Polemidia at 61.9% (2.11 MCM) — new season high, 24.6pp above last year\'s 37.3%. Consistent gains throughout spring.',
      el: 'Η Πολεμίδια στο 61.9% (2.11 ΕΚΜ) — νέο μέγιστο σεζόν, 24.6μ.π. πάνω από πέρυσι (37.3%). Συνεχής άνοδος εφέτος.',
      ru: 'Полемидия на 61.9% (2.11 МКМ) — новый сезонный максимум, +24.6пп выше прошлогодних 37.3%. Постоянный рост весной.',
    },
    'Achna': {
      en: 'Achna critically low at 2.2% (0.15 MCM), zero inflow all season. Far below last year\'s 12.7%. No recovery expected.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.2% (0.15 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (12.7%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.2% (0.15 МКМ), без притока за сезон. Далеко ниже прошлогодних 12.7%. Восстановление не ожидается.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 40.7% (21.3 MCM) — new season high, 17.6pp above last year\'s 23.1%. Seasonal inflow 19.0 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 40.7% (21.3 ΕΚΜ) — νέο μέγιστο σεζόν, 17.6μ.π. πάνω από πέρυσι (23.1%). Εισροή 19.0 ΕΚΜ.',
      ru: 'Аспрокреммос на 40.7% (21.3 МКМ) — новый максимум, +17.6пп выше прошлогодних 23.1%. Приток 19.0 МКМ за сезон.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 51.0% (8.76 MCM) — above 50% milestone; 26.7pp above last year\'s 24.3%. Seasonal inflow 8.90 MCM.',
      el: 'Ο Καννάβιου στο 51.0% (8.76 ΕΚΜ) — πάνω από 50%; 26.7μ.π. πάνω από πέρυσι (24.3%). Εισροή σεζόν 8.90 ΕΚΜ.',
      ru: 'Каннавиу на 51.0% (8.76 МКМ) — выше отметки 50%; +26.7пп выше прошлогодних 24.3%. Приток 8.90 МКМ за сезон.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 90.0% (1.96 MCM) — holding near full capacity. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 90.0% (1.96 ΕΚΜ) — σχεδόν πλήρης. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 90.0% (1.96 МКМ) — близко к заполнению. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 48.3% (11.6 MCM) — new season high, 24.9pp above last year\'s 23.4%. Seasonal inflow 9.55 MCM.',
      el: 'Ο Εύρετου στο 48.3% (11.6 ΕΚΜ) — νέο μέγιστο σεζόν, 24.9μ.π. πάνω από πέρυσι (23.4%). Εισροή 9.55 ΕΚΜ.',
      ru: 'Эвретоу на 48.3% (11.6 МКМ) — новый сезонный максимум, +24.9пп выше прошлогодних 23.4%. Приток 9.55 МКМ.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), continuously overflowing. Up from 37.7% last year — more than doubled year over year.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), συνεχής υπερχείλιση. Από 37.7% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), продолжает переливаться. Год назад 37.7% — более чем удвоение.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), continuously overflowing. Up from 43.1% last year — more than doubled year over year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), συνεχής υπερχείλιση. Αύξηση από 43.1% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), продолжает переливаться. Рост с 43.1% год назад — более чем удвоение.',
    },
    'Agia Marina': {
      en: 'Agia Marina full at 100% (0.30 MCM). Up from 59.1% last year; all four Chrysochou dams remain at full capacity.',
      el: 'Η Αγία Μαρίνα γεμάτη στο 100% (0.30 ΕΚΜ). Από 59.1% πέρυσι — ο Χρυσοχούς εξακολουθεί να είναι πλήρης.',
      ru: 'Агия Марина заполнена на 100% (0.30 МКМ). Рост с 59.1% год назад; все дамбы Хрисоху по-прежнему полны.',
    },
    'Vyzakia': {
      en: 'Vyzakia full at 100% (1.69 MCM) — filled Apr 27, maintaining capacity. Was 2.5% last year — 40× year-over-year recovery.',
      el: 'Τα Βυζακιά γεμάτα στο 100% (1.69 ΕΚΜ) — γέμισαν 27/4, στη χωρητικότητα. Από 2.5% πέρυσι — 40× ανάκαμψη.',
      ru: 'Визакия заполнена на 100% (1.69 МКМ) — заполнена 27 апреля. Год назад 2.5% — восстановление в 40×.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM) — filled Apr 28, holding at capacity. Was 21.1% last year — 4.7× year-over-year recovery.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ) — γέμισε 28/4, παραμένει στη χωρητικότητα. Από 21.1% πέρυσι — 4.7× ανάκαμψη.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ) — заполнен 28 апреля. Год назад 21.1% — восстановление в 4.7×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 81.8% last year, at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 81.8% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 81.8% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos full at 100% (2.80 MCM) — overflowing since late March. Was 35.2% last year — 2.8× year-over-year recovery.',
      el: 'Ο Ταμασός γεμάτος στο 100% (2.80 ΕΚΜ) — υπερχείλιση από τέλη Μαρτίου. Από 35.2% πέρυσι — 2.8× ΕΤΕ.',
      ru: 'Тамассос заполнен на 100% (2.80 МКМ) — переливается с конца марта. Год назад 35.2% — в 2.8× год к году.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 72.5% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 72.5% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 72.5% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 63.8% last year — 1.6× year-over-year improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 63.8% πέρυσι — 1.6× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 63.8% год назад — улучшение в 1.6×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (30 Απριλίου — 8 Μαΐου 2026)

Συνολική αποθήκευση **40.8%** (118.5 ΕΚΜ), άνοδος από 39.2% (114.0 ΕΚΜ) στις 30/4 — **+1.6μ.π., +4.5 ΕΚΜ σε 8 ημέρες**. Νέο μέγιστο σεζόν. **18.0μ.π. πάνω από πέρυσι** (22.8%). Εισροή σεζόν 25/26: **103.3 ΕΚΜ**. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 17.06 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 69.1%** — νέο μέγιστο σεζόν, 5.6μ.π. πάνω από πέρυσι (63.5%) παρά 17.06 ΕΚΜ μεταφοράς στον [Κούρη](/el/dam/kouris/). Εισροή 19.04 ΕΚΜ = 4.4× η χωρητικότητά του
- [Γερμασόγεια](/el/dam/germasoyeia/) **57.4%** — νέο μέγιστο, 33.6μ.π. πάνω από πέρυσι
- [Εύρετου](/el/dam/evretou/) **48.3%** — νέο μέγιστο, 24.9μ.π. πάνω από πέρυσι
- [Ασπρόκρεμμος](/el/dam/asprokremmos/) **40.7%** — νέο μέγιστο, 17.6μ.π. πάνω από πέρυσι
- 9 φράγματα στο 100%· [Αχνά](/el/dam/achna/) 2.2% — μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [Ξεπέρασε το 160% η μέση βροχόπτωση Μαΐου — αποτίμηση διαταραχής](https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-160-tis-ekato-i-mesi-vroxoptosi-tou-mina-apotimisi-tis-diataraxis-maiou-kai-sinolika-ipsi-vroxis/) — KitasWeather
- [Συνεχίζουν αυξημένες εισροές νερού για Μάιο — πλησίασαν 1 ΕΚΜ το τελευταίο 24ωρο](https://kitasweather.com/news/fragmata-vroxoptosi/sinexizoun-afksimenes-eisroes-nerou-gia-mina-maio-plisiasan-to-1-ekm-to-telefteo-24oro/) — KitasWeather
- [Ρεκόρ 24ωρης εισροής για Μάιο — Ξεπέρασε το 40% η πληρότητα φραγμάτων](https://kitasweather.com/news/fragmata-vroxoptosi/rekor-24oris-sinolikis-eisrois-nerou-sta-fragmata-gia-mina-maio-kseperase-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (30 апреля — 8 мая 2026)

Общий запас **40.8%** (118.5 МКМ), рост с 39.2% (114.0 МКМ) на 30/4 — **+1.6пп, +4.5 МКМ за 8 дней**. Новый сезонный максимум. Запасы **на 18.0пп выше прошлогодних** (22.8%). Приток сезона 25/26: **103.3 МКМ**. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 17.06 МКМ.

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 69.1%** — новый максимум сезона, +5.6пп выше прошлого года (63.5%) несмотря на 17.06 МКМ перекачанных в [Курис](/ru/dam/kouris/). Приток 19.04 МКМ = 4.4× его ёмкости
- [Гермасойя](/ru/dam/germasoyeia/) **57.4%** — новый максимум, +33.6пп выше прошлого года
- [Эвретоу](/ru/dam/evretou/) **48.3%** — новый максимум, +24.9пп выше прошлого года
- [Аспрокреммос](/ru/dam/asprokremmos/) **40.7%** — новый максимум, +17.6пп выше прошлого года
- 9 дамб на 100%; [Ахна](/ru/dam/achna/) 2.2% — без притока за весь сезон

**В СМИ:**
- [Осадки превысили 160% нормы мая — итоги майского циклона](https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-160-tis-ekato-i-mesi-vroxoptosi-tou-mina-apotimisi-tis-diataraxis-maiou-kai-sinolika-ipsi-vroxis/) — KitasWeather
- [Повышенный приток в дамбы продолжается — почти 1 МКМ за сутки](https://kitasweather.com/news/fragmata-vroxoptosi/sinexizoun-afksimenes-eisroes-nerou-gia-mina-maio-plisiasan-to-1-ekm-to-telefteo-24oro/) — KitasWeather
- [Рекордный суточный приток для мая — наполненность дамб превысила 40%](https://kitasweather.com/news/fragmata-vroxoptosi/rekor-24oris-sinolikis-eisrois-nerou-sta-fragmata-gia-mina-maio-kseperase-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
`;
  }
  return `
### Recent Changes (April 30 — May 8, 2026)

Total storage at **40.8%** (118.5 MCM), up from 39.2% (114.0 MCM) on Apr 30 — **+1.6pp, +4.5 MCM in 8 days**. New season high. **18.0pp above last year** (22.8%). Season total: **103.3 MCM**. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 17.06 MCM.

**Notable movements:**
- **[Arminou](/dam/arminou/) 69.1%** — new season high, 5.6pp above last year's 63.5% despite 17.06 MCM pumped to [Kouris](/dam/kouris/). Season inflow: 19.04 MCM = 4.4× its own capacity
- [Germasoyeia](/dam/germasoyeia/) **57.4%** — new season high, 33.6pp above last year
- [Evretou](/dam/evretou/) **48.3%** — new season high, 24.9pp above last year
- [Asprokremmos](/dam/asprokremmos/) **40.7%** — new season high, 17.6pp above last year
- 9 dams at 100%; [Achna](/dam/achna/) 2.2% — zero inflow all season

**In the media:**
- [May precipitation exceeds 160% of average — assessment of May disturbance](https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-160-tis-ekato-i-mesi-vroxoptosi-tou-mina-apotimisi-tis-diataraxis-maiou-kai-sinolika-ipsi-vroxis/) — KitasWeather
- [Elevated May inflows continue — nearly 1 MCM in the last 24 hours](https://kitasweather.com/news/fragmata-vroxoptosi/sinexizoun-afksimenes-eisroes-nerou-gia-mina-maio-plisiasan-to-1-ekm-to-telefteo-24oro/) — KitasWeather
- [Record 24h inflow for May — dam fullness crosses 40%](https://kitasweather.com/news/fragmata-vroxoptosi/rekor-24oris-sinolikis-eisrois-nerou-sta-fragmata-gia-mina-maio-kseperase-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
`;
};

import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.124, totalSince: 19.229 }, storage: { current: { amount: 41.477, percentage: 36.1 }, lastYear: { amount: 22.065, percentage: 19.2 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.042, totalSince: 3.25 }, storage: { current: { amount: 3.509, percentage: 20.5 }, lastYear: { amount: 4.524, percentage: 26.5 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.013, totalSince: 1.496 }, storage: { current: { amount: 2.43, percentage: 17.5 }, lastYear: { amount: 3.336, percentage: 24.1 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.035, totalSince: 3.109 }, storage: { current: { amount: 5.718, percentage: 36.9 }, lastYear: { amount: 5.765, percentage: 37.2 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.039, totalSince: 7.447 }, storage: { current: { amount: 7.074, percentage: 52.4 }, lastYear: { amount: 3.409, percentage: 25.3 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.113, totalSince: 16.92 }, storage: { current: { amount: 1.51, percentage: 35.1 }, lastYear: { amount: 2.633, percentage: 61.2 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.013, totalSince: 1.305 }, storage: { current: { amount: 1.933, percentage: 56.9 }, lastYear: { amount: 1.281, percentage: 37.7 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.149, percentage: 2.2 }, lastYear: { amount: 1.145, percentage: 16.8 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.095, totalSince: 17.826 }, storage: { current: { amount: 20.293, percentage: 38.7 }, lastYear: { amount: 12.576, percentage: 24.0 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.028, totalSince: 8.274 }, storage: { current: { amount: 8.333, percentage: 48.5 }, lastYear: { amount: 4.341, percentage: 25.3 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.002, totalSince: 0.916 }, storage: { current: { amount: 1.974, percentage: 90.6 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.047, totalSince: 8.704 }, storage: { current: { amount: 10.807, percentage: 45.0 }, lastYear: { amount: 5.75, percentage: 24.0 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.386, percentage: 39.0 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.378, percentage: 44.0 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.243 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.176, percentage: 59.1 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.022, totalSince: 1.621 }, storage: { current: { amount: 1.622, percentage: 96.0 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.001, totalSince: 1.414 }, storage: { current: { amount: 1.426, percentage: 99.7 }, lastYear: { amount: 0.316, percentage: 22.1 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.318, percentage: 87.6 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 2.587 }, storage: { current: { amount: 2.8, percentage: 100.0 }, lastYear: { amount: 1.006, percentage: 35.9 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.066 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.462, percentage: 73.1 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.912, percentage: 65.4 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through April 21, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:19.369, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:93.852 },
];

export const getReportDate = (): string => "21-APR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 16.45 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 36.1% (41.5 MCM) — new season high, 16.9pp above last year\'s 19.2%. Arminou→Kouris transfer: 16.45 MCM since October.',
      el: 'Ο Κούρης στο 36.1% (41.5 ΕΚΜ) — νέο μέγιστο σεζόν, 16.9μ.π. πάνω από πέρυσι (19.2%). Μεταφορά Αρμίνου→Κούρης: 16.45 ΕΚΜ.',
      ru: 'Курис на 36.1% (41.5 МКМ) — новый сезонный максимум, +16.9пп выше прошлогодних 19.2%. Перекачка Арминоу→Курис: 16.45 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 20.5% (3.51 MCM) — still 6.0pp below last year\'s 26.5%. Recovering with 3.25 MCM seasonal inflow.',
      el: 'Ο Καλαβασός στο 20.5% (3.51 ΕΚΜ) — 6.0μ.π. κάτω από πέρυσι (26.5%). Σταδιακή ανάκαμψη, εισροή σεζόν 3.25 ΕΚΜ.',
      ru: 'Калавасос на 20.5% (3.51 МКМ) — на 6.0пп ниже прошлогодних 26.5%. Постепенное восстановление, приток 3.25 МКМ.',
    },
    'Lefkara': {
      en: 'Lefkara at 17.5% (2.43 MCM) — 6.6pp below last year\'s 24.1%. Seasonal inflow 1.50 MCM — gradual recovery continues.',
      el: 'Η Λεύκαρα στο 17.5% (2.43 ΕΚΜ) — 6.6μ.π. κάτω από πέρυσι (24.1%). Εισροή σεζόν 1.50 ΕΚΜ — σταδιακή ανάκαμψη.',
      ru: 'Лефкара на 17.5% (2.43 МКМ) — на 6.6пп ниже прошлогодних 24.1%. Приток 1.50 МКМ — постепенное восстановление продолжается.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 36.9% (5.72 MCM) — nearly matching last year\'s 37.2%. Seasonal inflow 3.11 MCM, stable recovery.',
      el: 'Ο Διπόταμος στο 36.9% (5.72 ΕΚΜ) — σχεδόν ισόβαθμος με πέρυσι (37.2%). Εισροή 3.11 ΕΚΜ, σταθερή ανάκαμψη.',
      ru: 'Дипотамос на 36.9% (5.72 МКМ) — почти наравне с прошлогодними 37.2%. Приток 3.11 МКМ — стабильное восстановление.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 52.4% (7.07 MCM) — above 50% for a second day, new season high. 27.1pp above last year\'s 25.3%. Inflow 7.45 MCM.',
      el: 'Η Γερμασόγεια στο 52.4% (7.07 ΕΚΜ) — δεύτερη ημέρα πάνω από 50%, νέο μέγιστο. 27.1μ.π. πάνω από πέρυσι (25.3%). Εισροή 7.45 ΕΚΜ.',
      ru: 'Гермасойя на 52.4% (7.07 МКМ) — второй день выше 50%, новый сезонный максимум. +27.1пп выше прошлогодних 25.3%.',
    },
    'Arminou': {
      en: 'Arminou at 35.1% (1.51 MCM) — 16.45 MCM pumped to Kouris since October. Net inflow slightly outpaced transfer today. 26.1pp below last year.',
      el: 'Ο Αρμίνου στο 35.1% (1.51 ΕΚΜ) — 16.45 ΕΚΜ στον Κούρη από τον Οκτώβριο. Εισροή ελαφρά πάνω από την άντληση σήμερα. 26.1μ.π. κάτω από πέρυσι.',
      ru: 'Арминоу на 35.1% (1.51 МКМ) — 16.45 МКМ перекачано в Курис с октября. Сегодня приток чуть обогнал перекачку. На 26.1пп ниже прошлогодних.',
    },
    'Polemidia': {
      en: 'Polemidia at 56.9% (1.93 MCM) — new season high, 19.2pp above last year\'s 37.7%. Steady progress since January.',
      el: 'Η Πολεμίδια στο 56.9% (1.93 ΕΚΜ) — νέο μέγιστο σεζόν, 19.2μ.π. πάνω από πέρυσι (37.7%). Σταθερή άνοδος από τον Ιανουάριο.',
      ru: 'Полемидия на 56.9% (1.93 МКМ) — новый сезонный максимум, +19.2пп выше прошлогодних 37.7%. Устойчивый рост с января.',
    },
    'Achna': {
      en: 'Achna critically low at 2.2% (0.15 MCM), zero inflow all season. Far below last year\'s 16.8%. No recovery in sight.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.2% (0.15 ΕΚΜ), χωρίς εισροή. Πολύ κάτω από πέρυσι (16.8%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.2% (0.15 МКМ), без притока за сезон. Далеко ниже прошлогодних 16.8%. Без перспектив.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 38.7% (20.3 MCM) — new season high, above 20 MCM for a second day. 14.7pp above last year\'s 24.0%. Inflow 17.83 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 38.7% (20.3 ΕΚΜ) — νέο μέγιστο, δεύτερη ημέρα πάνω από 20 ΕΚΜ. 14.7μ.π. πάνω από πέρυσι (24.0%). Εισροή 17.83 ΕΚΜ.',
      ru: 'Аспрокреммос на 38.7% (20.3 МКМ) — новый максимум, второй день выше 20 МКМ. +14.7пп выше прошлого года (24.0%). Приток 17.83 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 48.5% (8.33 MCM) — new season high, 23.2pp above last year\'s 25.3%. Closing in on the 50% milestone.',
      el: 'Ο Καννάβιου στο 48.5% (8.33 ΕΚΜ) — νέο μέγιστο, 23.2μ.π. πάνω από πέρυσι (25.3%). Πλησιάζει το 50%.',
      ru: 'Каннавиу на 48.5% (8.33 МКМ) — новый максимум, +23.2пп выше прошлогодних 25.3%. На подходе к 50%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 90.6% (1.97 MCM) — above 90% for a second day, new season high. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 90.6% (1.97 ΕΚΜ) — δεύτερη ημέρα πάνω από 90%, νέο μέγιστο. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 90.6% (1.97 МКМ) — второй день выше 90%, новый максимум. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 45.0% (10.8 MCM) — new season high, 21.0pp above last year\'s 24.0%. Inflow 8.70 MCM since October.',
      el: 'Ο Εύρετου στο 45.0% (10.8 ΕΚΜ) — νέο μέγιστο σεζόν, 21.0μ.π. πάνω από πέρυσι (24.0%). Εισροή 8.70 ΕΚΜ.',
      ru: 'Эвретоу на 45.0% (10.8 МКМ) — новый сезонный максимум, +21.0пп выше прошлогодних 24.0%. Приток 8.70 МКМ.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), continuously overflowing. Up from 39.0% last year — more than doubled year over year.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), συνεχής υπερχείλιση. Από 39.0% πέρυσι — πάνω από διπλασιασμός.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), продолжает переливаться. Год назад 39.0% — более чем удвоение.',
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
      en: 'Vyzakia at 96.0% (1.62 MCM) — new season high, on the brink of overflowing. Was 2.8% last year — 34× year-over-year recovery.',
      el: 'Τα Βυζακιά στο 96.0% (1.62 ΕΚΜ) — νέο μέγιστο σεζόν, στο χείλος της υπερχείλισης. Από 2.8% πέρυσι — ανάκαμψη 34×.',
      ru: 'Визакия на 96.0% (1.62 МКМ) — новый сезонный максимум, на грани переполнения. Год назад 2.8% — восстановление в 34×.',
    },
    'Xyliatos': {
      en: 'Xyliatos at 99.7% (1.43 MCM) — essentially full, holding just below overflow. Was 22.1% last year — 4.5× year-over-year recovery.',
      el: 'Ο Ξυλιάτος στο 99.7% (1.43 ΕΚΜ) — σχεδόν γεμάτος, οριακά κάτω από υπερχείλιση. Από 22.1% πέρυσι — 4.5× ανάκαμψη.',
      ru: 'Ксилиатос на 99.7% (1.43 МКМ) — практически полный, чуть ниже перелива. Был 22.1% год назад — восстановление в 4.5×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-April. Up from 87.6% last year, now at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Απριλίου. Αύξηση από 87.6% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины апреля. Рост с 87.6% год назад, полная мощность.',
    },
    'Tamassos': {
      en: 'Tamassos full at 100% (2.80 MCM) — overflowing after weeks of strong inflow. Was 35.9% last year — 2.8× year-over-year recovery.',
      el: 'Ο Ταμασός γεμάτος στο 100% (2.80 ΕΚΜ) — υπερχείλιση μετά από εβδομάδες έντονης εισροής. Από 35.9% πέρυσι — 2.8× ΕΤΕ.',
      ru: 'Тамассос заполнен на 100% (2.80 МКМ) — переливается после недель сильного притока. Год назад 35.9% — в 2.8× год к году.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 73.1% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 73.1% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 73.1% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 65.4% last year — 1.5× year-over-year improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 65.4% πέρυσι — 1.5× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 65.4% год назад — улучшение в 1.5×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (9 Απριλίου — 21 Απριλίου 2026)

Συνολική αποθήκευση **38.1%** (110.8 ΕΚΜ), άνοδος από 36.4% (102.6 ΕΚΜ) στις 9/4 — **+8.2 ΕΚΜ σε 12 ημέρες**. Τώρα **14.5μ.π. πάνω από πέρυσι** (23.6%). Εισροή σεζόν 25/26: **93.9 ΕΚΜ** — Απρίλιος 2026 με 19.4 ΕΚΜ παραμένει ο **2ος καλύτερος Απρίλιος** στα αρχεία (πίσω μόνο από το 2018/19). Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 16.45 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Βυζακιά](/el/dam/vyzakia/) 96.0%** (+6.9μ.π. από 9/4) — νέο μέγιστο σεζόν, στο χείλος υπερχείλισης, 34× πέρυσι (2.8%)
- **[Γερμασόγεια](/el/dam/germasoyeia/) 52.4%** (+3.1μ.π.) — δεύτερη ημέρα πάνω από 50%, νέο μέγιστο, 27.1μ.π. πάνω από πέρυσι
- **[Μαυροκόλυμπος](/el/dam/mavrokolympos/) 90.6%** (+2.0μ.π.) — πάνω από 90%, από 0% πέρυσι
- [Κούρης](/el/dam/kouris/) 36.1% (41.5 ΕΚΜ, +2.1 ΕΚΜ) — νέο μέγιστο, 16.9μ.π. πάνω από πέρυσι
- [Ασπρόκρεμμος](/el/dam/asprokremmos/) 38.7% — δεύτερη ημέρα πάνω από 20 ΕΚΜ, νέο μέγιστο
- [Αρμίνου](/el/dam/arminou/) 35.1% — πτώση λόγω μεταφοράς 16.45 ΕΚΜ στον Κούρη
- 8 φράγματα στο 100% — [Αχνά](/el/dam/achna/) εξακολουθεί στο 2.2% χωρίς εισροή

**Στα μέσα:**
- [Πληρότητα φραγμάτων στο 38% — βελτίωση σε σχέση με πέρυσι](https://cyprus-mail.com/2026/04/20/dam-capacity-reaches-38-up-from-last-year) — Cyprus Mail
- [Υπερκαλύφθηκε η μέση βροχόπτωση Απριλίου — μετρήσεις 24ωρου](https://kitasweather.com/news/fragmata-vroxoptosi/iperkalifthike-i-mesi-vroxoptosi-apriliou-metriseis-vroxoptosis-telefteou-24orou/) — KitasWeather
- [ΤΑΥ: Μέτρα για εξασφάλιση υδροδότησης καλοκαιριού](https://cyprus-mail.com/2026/04/06/water-development-department-acts-to-secure-summer-water-supply/) — Cyprus Mail
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (9 апреля — 21 апреля 2026)

Общий запас **38.1%** (110.8 МКМ), рост с 36.4% (102.6 МКМ) на 9/4 — **+8.2 МКМ за 12 дней**. Запасы теперь **на 14.5пп выше прошлогодних** (23.6%). Приток сезона 25/26: **93.9 МКМ** — апрель 2026 с 19.4 МКМ по-прежнему остаётся **2-м лучшим апрелем в истории наблюдений** (уступает только 2018/19). Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 16.45 МКМ.

**Основные изменения:**
- **[Визакия](/ru/dam/vyzakia/) 96.0%** (+6.9пп с 9/4) — новый максимум, на грани переполнения, 34× прошлогодних 2.8%
- **[Гермасойя](/ru/dam/germasoyeia/) 52.4%** (+3.1пп) — второй день выше 50%, новый максимум, +27.1пп выше прошлого года
- **[Мавроколимпос](/ru/dam/mavrokolympos/) 90.6%** (+2.0пп) — выше 90%, год назад 0%
- [Курис](/ru/dam/kouris/) 36.1% (41.5 МКМ, +2.1 МКМ) — новый максимум, +16.9пп выше прошлого года
- [Аспрокреммос](/ru/dam/asprokremmos/) 38.7% — второй день выше 20 МКМ, новый максимум
- [Арминоу](/ru/dam/arminou/) 35.1% — снижение из-за перекачки 16.45 МКМ в Курис
- 8 дамб переполнены; [Ахна](/ru/dam/achna/) по-прежнему 2.2% — без притока за сезон

**В СМИ:**
- [Вместимость дамб достигла 38% — улучшение относительно прошлого года](https://cyprus-mail.com/2026/04/20/dam-capacity-reaches-38-up-from-last-year) — Cyprus Mail
- [Апрельская норма осадков превышена — данные за последние 24 часа](https://kitasweather.com/news/fragmata-vroxoptosi/iperkalifthike-i-mesi-vroxoptosi-apriliou-metriseis-vroxoptosis-telefteou-24orou/) — KitasWeather
- [WDD принимает меры для обеспечения водоснабжения летом](https://cyprus-mail.com/2026/04/06/water-development-department-acts-to-secure-summer-water-supply/) — Cyprus Mail
`;
  }
  return `
### Recent Changes (April 9 — April 21, 2026)

Total storage at **38.1%** (110.8 MCM), up from 36.4% (102.6 MCM) on Apr 9 — **+8.2 MCM in 12 days**. **14.5pp above last year** (23.6%). Season total: **93.9 MCM** — April 2026 at 19.4 MCM remains the **2nd highest April on record** (behind only 2018/19's 25.3 MCM). [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 16.45 MCM.

**Notable movements:**
- **[Vyzakia](/dam/vyzakia/) at 96.0%** (+6.9pp since Apr 9) — new season high, on the brink of overflowing, 34× last year's 2.8%
- **[Germasoyeia](/dam/germasoyeia/) 52.4%** (+3.1pp) — second day above 50%, new season high, 27.1pp above last year
- **[Mavrokolympos](/dam/mavrokolympos/) 90.6%** (+2.0pp) — holding above 90%, was 0% last year
- [Kouris](/dam/kouris/) 36.1% (41.5 MCM, +2.1 MCM) — new season high, 16.9pp above last year
- [Asprokremmos](/dam/asprokremmos/) 38.7% — second day above 20 MCM, new season high
- [Arminou](/dam/arminou/) at 35.1% — down due to 16.45 MCM pumped to [Kouris](/dam/kouris/) since October
- 8 dams overflowing at 100%; [Achna](/dam/achna/) still 2.2% — zero inflow all season

**In the media:**
- [Dam capacity reaches 38%, up from last year](https://cyprus-mail.com/2026/04/20/dam-capacity-reaches-38-up-from-last-year) — Cyprus Mail
- [April rainfall average exceeded — 24-hour measurements](https://kitasweather.com/news/fragmata-vroxoptosi/iperkalifthike-i-mesi-vroxoptosi-apriliou-metriseis-vroxoptosis-telefteou-24orou/) — KitasWeather
- [Water development department acts to secure summer water supply](https://cyprus-mail.com/2026/04/06/water-development-department-acts-to-secure-summer-water-supply/) — Cyprus Mail
`;
};

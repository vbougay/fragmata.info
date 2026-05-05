import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.373, totalSince: 21.201 }, storage: { current: { amount: 43.386, percentage: 37.7 }, lastYear: { amount: 21.703, percentage: 18.9 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.021, totalSince: 3.642 }, storage: { current: { amount: 3.862, percentage: 22.6 }, lastYear: { amount: 4.408, percentage: 25.8 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.008, totalSince: 1.611 }, storage: { current: { amount: 2.523, percentage: 18.2 }, lastYear: { amount: 3.001, percentage: 21.7 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.029, totalSince: 3.376 }, storage: { current: { amount: 5.915, percentage: 38.2 }, lastYear: { amount: 5.842, percentage: 37.7 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.039, totalSince: 8.073 }, storage: { current: { amount: 7.659, percentage: 56.7 }, lastYear: { amount: 3.249, percentage: 24.1 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.379, totalSince: 18.465 }, storage: { current: { amount: 2.469, percentage: 57.4 }, lastYear: { amount: 2.703, percentage: 62.9 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.015, totalSince: 1.445 }, storage: { current: { amount: 2.064, percentage: 60.7 }, lastYear: { amount: 1.276, percentage: 37.5 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.149, percentage: 2.2 }, lastYear: { amount: 0.932, percentage: 13.7 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.236, totalSince: 18.682 }, storage: { current: { amount: 20.985, percentage: 40.1 }, lastYear: { amount: 12.189, percentage: 23.3 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.130, totalSince: 8.715 }, storage: { current: { amount: 8.614, percentage: 50.2 }, lastYear: { amount: 4.207, percentage: 24.5 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.008, totalSince: 0.935 }, storage: { current: { amount: 1.960, percentage: 89.9 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.180, totalSince: 9.282 }, storage: { current: { amount: 11.348, percentage: 47.3 }, lastYear: { amount: 5.641, percentage: 23.5 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.373, percentage: 37.7 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.371, percentage: 43.1 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.247 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.176, percentage: 59.1 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.0, totalSince: 1.689 }, storage: { current: { amount: 1.69, percentage: 100.0 }, lastYear: { amount: 0.044, percentage: 2.6 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 1.419 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.304, percentage: 21.3 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.297, percentage: 81.8 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 2.599 }, storage: { current: { amount: 2.8, percentage: 100.0 }, lastYear: { amount: 0.985, percentage: 35.2 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.078 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.45, percentage: 72.5 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.84, percentage: 63.8 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data — updated with 25/26 data through May 5, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:2.788, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:100.880 },
];

export const getReportDate = (): string => "05-MAY-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 17.0 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 37.7% (43.4 MCM) — new season high, 18.8pp above last year\'s 18.9%. Arminou→Kouris transfer: 17.0 MCM since October.',
      el: 'Ο Κούρης στο 37.7% (43.4 ΕΚΜ) — νέο μέγιστο σεζόν, 18.8μ.π. πάνω από πέρυσι (18.9%). Μεταφορά Αρμίνου→Κούρης: 17.0 ΕΚΜ.',
      ru: 'Курис на 37.7% (43.4 МКМ) — новый сезонный максимум, +18.8пп выше прошлогодних 18.9%. Перекачка Арминоу→Курис: 17.0 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 22.6% (3.86 MCM) — 3.2pp below last year\'s 25.8%. Seasonal inflow 3.64 MCM, gradual recovery continuing.',
      el: 'Ο Καλαβασός στο 22.6% (3.86 ΕΚΜ) — 3.2μ.π. κάτω από πέρυσι (25.8%). Εισροή σεζόν 3.64 ΕΚΜ, σταδιακή ανάκαμψη.',
      ru: 'Калавасос на 22.6% (3.86 МКМ) — на 3.2пп ниже прошлогодних 25.8%. Приток 3.64 МКМ за сезон, постепенное восстановление.',
    },
    'Lefkara': {
      en: 'Lefkara at 18.2% (2.52 MCM) — 3.5pp below last year\'s 21.7%. Seasonal inflow 1.61 MCM, slow recovery continues.',
      el: 'Η Λεύκαρα στο 18.2% (2.52 ΕΚΜ) — 3.5μ.π. κάτω από πέρυσι (21.7%). Εισροή σεζόν 1.61 ΕΚΜ — αργή ανάκαμψη.',
      ru: 'Лефкара на 18.2% (2.52 МКМ) — на 3.5пп ниже прошлогодних 21.7%. Приток 1.61 МКМ за сезон — медленное восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 38.2% (5.92 MCM) — slightly above last year\'s 37.7%. Holding steady at 3.38 MCM seasonal inflow.',
      el: 'Ο Διπόταμος στο 38.2% (5.92 ΕΚΜ) — ελαφρά πάνω από πέρυσι (37.7%). Σταθερός με 3.38 ΕΚΜ εισροή σεζόν.',
      ru: 'Дипотамос на 38.2% (5.92 МКМ) — незначительно выше прошлогодних 37.7%. Стабильное положение, приток 3.38 МКМ за сезон.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 56.7% (7.66 MCM) — new season high, 32.6pp above last year\'s 24.1%. Was at 14% in mid-March — a 42pp gain in 7 weeks.',
      el: 'Η Γερμασόγεια στο 56.7% (7.66 ΕΚΜ) — νέο μέγιστο σεζόν, 32.6μ.π. πάνω από πέρυσι (24.1%). Τον Μάρτιο ήταν στο 14% — άνοδος 42μ.π. σε 7 εβδομάδες.',
      ru: 'Гермасойя на 56.7% (7.66 МКМ) — новый максимум, +32.6пп выше прошлогодних 24.1%. В марте была 14% — прирост в 42пп за 7 недель.',
    },
    'Arminou': {
      en: 'Arminou at 57.4% (2.47 MCM) — new season high, +8.2pp jump in 24 hours. Despite 17.0 MCM pumped to Kouris since Oct; seasonal inflow 18.5 MCM.',
      el: 'Ο Αρμίνου στο 57.4% (2.47 ΕΚΜ) — νέο μέγιστο σεζόν, +8.2μ.π. άνοδος σε 24 ώρες. Παρά τη μεταφορά 17.0 ΕΚΜ στον Κούρη· εισροή 18.5 ΕΚΜ σεζόν.',
      ru: 'Арминоу на 57.4% (2.47 МКМ) — новый максимум сезона, +8.2пп за 24 часа. Несмотря на 17.0 МКМ перекачанных в Курис; приток 18.5 МКМ за сезон.',
    },
    'Polemidia': {
      en: 'Polemidia at 60.7% (2.06 MCM) — new season high, 23.2pp above last year\'s 37.5%. Consistent gains throughout spring.',
      el: 'Η Πολεμίδια στο 60.7% (2.06 ΕΚΜ) — νέο μέγιστο σεζόν, 23.2μ.π. πάνω από πέρυσι (37.5%). Συνεχής άνοδος εφέτος.',
      ru: 'Полемидия на 60.7% (2.06 МКМ) — новый сезонный максимум, +23.2пп выше прошлогодних 37.5%. Постоянный рост весной.',
    },
    'Achna': {
      en: 'Achna critically low at 2.2% (0.15 MCM), zero inflow all season. Far below last year\'s 13.7%. No recovery expected.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.2% (0.15 ΕΚΜ), χωρίς εισροή εφέτος. Πολύ κάτω από πέρυσι (13.7%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.2% (0.15 МКМ), без притока за сезон. Далеко ниже прошлогодних 13.7%. Восстановление не ожидается.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 40.1% (21.0 MCM) — new season high, just crossed 40%; 16.8pp above last year\'s 23.3%. Seasonal inflow 18.7 MCM.',
      el: 'Ο Ασπρόκρεμμος στο 40.1% (21.0 ΕΚΜ) — νέο μέγιστο, μόλις πέρασε το 40%; 16.8μ.π. πάνω από πέρυσι (23.3%). Εισροή 18.7 ΕΚΜ σεζόν.',
      ru: 'Аспрокреммос на 40.1% (21.0 МКМ) — новый максимум, только что пересёк отметку 40%; +16.8пп выше прошлого года (23.3%). Приток 18.7 МКМ за сезон.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 50.2% (8.61 MCM) — crossed the 50% milestone on May 5, now 25.7pp above last year\'s 24.5%. Seasonal inflow 8.72 MCM.',
      el: 'Ο Καννάβιου στο 50.2% (8.61 ΕΚΜ) — πέρασε το 50% στις 5/5, 25.7μ.π. πάνω από πέρυσι (24.5%). Εισροή σεζόν 8.72 ΕΚΜ.',
      ru: 'Каннавиу на 50.2% (8.61 МКМ) — пересёк отметку 50% 5 мая, +25.7пп выше прошлогодних 24.5%. Приток 8.72 МКМ за сезон.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 89.9% (1.96 MCM) — holding near full capacity. Was 0% last year — exceptional year-over-year recovery.',
      el: 'Ο Μαυροκόλυμπος στο 89.9% (1.96 ΕΚΜ) — σχεδόν πλήρης. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 89.9% (1.96 МКМ) — близко к заполнению. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 47.3% (11.35 MCM) — new season high, 23.8pp above last year\'s 23.5%. Seasonal inflow 9.28 MCM.',
      el: 'Ο Εύρετου στο 47.3% (11.35 ΕΚΜ) — νέο μέγιστο σεζόν, 23.8μ.π. πάνω από πέρυσι (23.5%). Εισροή 9.28 ΕΚΜ.',
      ru: 'Эвретоу на 47.3% (11.35 МКМ) — новый сезонный максимум, +23.8пп выше прошлогодних 23.5%. Приток 9.28 МКМ.',
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
      en: 'Agia Marina full at 100% (0.30 MCM) — at capacity since May 4. Up from 59.1% last year; all four Chrysochou dams at full.',
      el: 'Η Αγία Μαρίνα γεμάτη στο 100% (0.30 ΕΚΜ) — στη χωρητικότητα από 4/5. Από 59.1% πέρυσι — ο Χρυσοχούς πλήρης.',
      ru: 'Агия Марина заполнена на 100% (0.30 МКМ) — при максимуме с 4 мая. Рост с 59.1% год назад; все дамбы Хрисоху полны.',
    },
    'Vyzakia': {
      en: 'Vyzakia full at 100% (1.69 MCM) — filled Apr 27, maintaining capacity. Was 2.6% last year — 38× year-over-year recovery.',
      el: 'Τα Βυζακιά γεμάτα στο 100% (1.69 ΕΚΜ) — γέμισαν 27/4, στη χωρητικότητα. Από 2.6% πέρυσι — 38× ανάκαμψη.',
      ru: 'Визакия заполнена на 100% (1.69 МКМ) — заполнена 27 апреля. Год назад 2.6% — восстановление в 38×.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM) — filled Apr 28, holding at capacity. Was 21.3% last year — 4.7× year-over-year recovery.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ) — γέμισε 28/4, παραμένει στη χωρητικότητα. Από 21.3% πέρυσι — 4.7× ανάκαμψη.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ) — заполнен 28 апреля. Год назад 21.3% — восстановление в 4.7×.',
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
### Πρόσφατες Αλλαγές (27 Απριλίου — 5 Μαΐου 2026)

Συνολική αποθήκευση **40.1%** (116.6 ΕΚΜ), άνοδος από 38.8% (113.0 ΕΚΜ) στις 27/4 — **+1.3μ.π., +3.6 ΕΚΜ σε 8 ημέρες**. Νέο μέγιστο σεζόν. **17.1μ.π. πάνω από πέρυσι** (23.0%). Εισροή σεζόν 25/26: **100.9 ΕΚΜ** — ξεπέρασε το ορόσημο των 100 ΕΚΜ! Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 17.0 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Αρμίνου](/el/dam/arminou/) 57.4%** (+8.2μ.π. σε 24 ώρες) — νέο μέγιστο σεζόν, εντυπωσιακή άνοδος παρά τη μεταφορά 17.0 ΕΚΜ στον [Κούρη](/el/dam/kouris/)
- **[Καννάβιου](/el/dam/kannaviou/) 50.2%** — πέρασε το ορόσημο 50% στις 5/5, 25.7μ.π. πάνω από πέρυσι
- **[Ασπρόκρεμμος](/el/dam/asprokremmos/) 40.1%** — πέρασε το 40%, νέο μέγιστο σεζόν
- [Γερμασόγεια](/el/dam/germasoyeia/) 56.7% — νέο μέγιστο, 32.6μ.π. πάνω από πέρυσι. Τον Μάρτιο ήταν στο 14%
- [Πολεμίδια](/el/dam/polemidia/) 60.7% — νέο μέγιστο, 23.2μ.π. πάνω από πέρυσι
- 9 φράγματα στο 100%· [Αχνά](/el/dam/achna/) 2.2% — μηδέν εισροή όλη τη σεζόν

**Στα μέσα:**
- [Τα φράγματα στο 39.6% — 115.2 ΕΚΜ](https://cyprus-mail.com/2026/05/04/dams-at-39-6-per-cent-capacity) — Cyprus Mail
- [Ξεπέρασαν τα 1.3 ΕΚΜ οι εισροές το τελευταίο 3ήμερο — θα ξεπεράσει το 40% η πληρότητα](https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-to-13ekm-oi-eisroes-nerou-to-telefteo-triimero-tha-kseperasei-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
- [Υπερκαλύφθηκε η μέση βροχόπτωση Μαΐου μέσα σε 2 ημέρες — εξαιρετικά πολύομβρος και ο Μάιος](https://kitasweather.com/news/fragmata-vroxoptosi/iperkalifthike-i-mesi-vroxoptosi-maiou-mesa-se-2-imeres-ekseretika-poliomvros-kai-o-maios/) — KitasWeather
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (27 апреля — 5 мая 2026)

Общий запас **40.1%** (116.6 МКМ), рост с 38.8% (113.0 МКМ) на 27/4 — **+1.3пп, +3.6 МКМ за 8 дней**. Новый сезонный максимум. Запасы **на 17.1пп выше прошлогодних** (23.0%). Приток сезона 25/26: **100.9 МКМ** — пересёк символическую отметку 100 МКМ! Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 17.0 МКМ.

**Основные изменения:**
- **[Арминоу](/ru/dam/arminou/) 57.4%** (+8.2пп за 24 часа) — новый максимум сезона, несмотря на 17.0 МКМ перекачанных в [Курис](/ru/dam/kouris/)
- **[Каннавиу](/ru/dam/kannaviou/) 50.2%** — пересёк отметку 50% 5 мая, +25.7пп выше прошлого года
- **[Аспрокреммос](/ru/dam/asprokremmos/) 40.1%** — пересёк отметку 40%, новый максимум сезона
- [Гермасойя](/ru/dam/germasoyeia/) 56.7% — новый максимум, +32.6пп выше прошлого года. В марте была 14%
- [Полемидия](/ru/dam/polemidia/) 60.7% — новый максимум, +23.2пп выше прошлого года
- 9 дамб на 100%; [Ахна](/ru/dam/achna/) 2.2% — без притока за весь сезон

**В СМИ:**
- [Дамбы на 39.6% — 115.2 млн кубометров воды](https://cyprus-mail.com/2026/05/04/dams-at-39-6-per-cent-capacity) — Cyprus Mail
- [За 3 дня приток воды превысил 1.3 МКМ — наполненность дамб превысит 40%](https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-to-13ekm-oi-eisroes-nerou-to-telefteo-triimero-tha-kseperasei-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
- [Майские осадки превышены за 2 дня — исключительно дождливый май продолжается](https://kitasweather.com/news/fragmata-vroxoptosi/iperkalifthike-i-mesi-vroxoptosi-maiou-mesa-se-2-imeres-ekseretika-poliomvros-kai-o-maios/) — KitasWeather
`;
  }
  return `
### Recent Changes (April 27 — May 5, 2026)

Total storage at **40.1%** (116.6 MCM), up from 38.8% (113.0 MCM) on Apr 27 — **+1.3pp, +3.6 MCM in 8 days**. New season high. **17.1pp above last year** (23.0%). Season total: **100.9 MCM** — the 100 MCM milestone has been crossed! [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 17.0 MCM.

**Notable movements:**
- **[Arminou](/dam/arminou/) 57.4%** (+8.2pp in 24 hours) — new season high; extraordinary recovery despite 17.0 MCM pumped to [Kouris](/dam/kouris/) since October
- **[Kannaviou](/dam/kannaviou/) 50.2%** — crossed the 50% milestone on May 5, 25.7pp above last year
- **[Asprokremmos](/dam/asprokremmos/) 40.1%** — crossed 40%, new season high
- [Germasoyeia](/dam/germasoyeia/) 56.7% — new season high, 32.6pp above last year. Was at 14% in mid-March
- [Polemidia](/dam/polemidia/) 60.7% — new season high, 23.2pp above last year
- 9 dams at 100%; [Achna](/dam/achna/) 2.2% — zero inflow all season

**In the media:**
- [Dams at 39.6 per cent capacity](https://cyprus-mail.com/2026/05/04/dams-at-39-6-per-cent-capacity) — Cyprus Mail
- [Over 1.3 MCM inflow in 3 days — total dam fullness to exceed 40%](https://kitasweather.com/news/fragmata-vroxoptosi/kseperasan-to-13ekm-oi-eisroes-nerou-to-telefteo-triimero-tha-kseperasei-to-40-tis-ekato-i-sinoliki-plirotita-fragmaton/) — KitasWeather
- [May rainfall average surpassed within 2 days — exceptional May continues](https://kitasweather.com/news/fragmata-vroxoptosi/iperkalifthike-i-mesi-vroxoptosi-maiou-mesa-se-2-imeres-ekseretika-poliomvros-kai-o-maios/) — KitasWeather
`;
};

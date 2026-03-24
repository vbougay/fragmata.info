import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for March 24, 2026 (parsed from 24-MAR-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.403, totalSince: 12.052 }, storage: { current: { amount: 28.852, percentage: 25.1 }, lastYear: { amount: 22.995, percentage: 20.0 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.076, totalSince: 1.14 }, storage: { current: { amount: 1.496, percentage: 8.7 }, lastYear: { amount: 4.726, percentage: 27.6 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.044, totalSince: 0.776 }, storage: { current: { amount: 1.745, percentage: 12.6 }, lastYear: { amount: 3.983, percentage: 28.8 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.07, totalSince: 1.531 }, storage: { current: { amount: 4.07, percentage: 26.3 }, lastYear: { amount: 5.561, percentage: 35.9 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.232, totalSince: 3.549 }, storage: { current: { amount: 3.249, percentage: 24.1 }, lastYear: { amount: 3.583, percentage: 26.5 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.468, totalSince: 11.457 }, storage: { current: { amount: 2.349, percentage: 54.6 }, lastYear: { amount: 2.511, percentage: 58.4 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.025, totalSince: 0.833 }, storage: { current: { amount: 1.471, percentage: 43.3 }, lastYear: { amount: 1.336, percentage: 39.3 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.142, percentage: 2.1 }, lastYear: { amount: 1.361, percentage: 20.0 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.539, totalSince: 13.159 }, storage: { current: { amount: 15.949, percentage: 30.5 }, lastYear: { amount: 13.396, percentage: 25.6 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.285, totalSince: 6.281 }, storage: { current: { amount: 6.625, percentage: 38.6 }, lastYear: { amount: 4.594, percentage: 26.8 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.016, totalSince: 0.773 }, storage: { current: { amount: 1.515, percentage: 69.5 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.311, totalSince: 6.275 }, storage: { current: { amount: 8.437, percentage: 35.2 }, lastYear: { amount: 6.006, percentage: 25.0 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.375, percentage: 37.9 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.369, percentage: 42.9 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.01, totalSince: 0.21 }, storage: { current: { amount: 0.265, percentage: 88.9 }, lastYear: { amount: 0.165, percentage: 55.4 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.036, totalSince: 0.786 }, storage: { current: { amount: 0.787, percentage: 46.6 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 1.413 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.335, percentage: 23.4 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.313, percentage: 86.2 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.111, totalSince: 2.084 }, storage: { current: { amount: 2.445, percentage: 87.3 }, lastYear: { amount: 1.051, percentage: 37.5 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.038 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.473, percentage: 73.7 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 3.004, percentage: 67.4 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data - updated with new 25/26 data from current report
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:23.264, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:62.333 },
];

export const getReportDate = (): string => "24-MAR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 10.18 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 25.1% (28.9 MCM), new season high and above last year\'s 20.0%. Transfer from Arminou reached 10.18 MCM since October.',
      el: 'Ο Κούρης στο 25.1% (28.9 ΕΚΜ), νέο μέγιστο σεζόν, πάνω από πέρυσι (20.0%). Μεταφορά από Αρμίνου: 10.18 ΕΚΜ από Οκτώβριο.',
      ru: 'Курис на 25.1% (28.9 МКМ) — новый сезонный максимум, выше прошлогодних 20.0%. Перекачка из Арминоу: 10.18 МКМ с октября.',
    },
    'Kalavasos': {
      en: 'Kalavasos holds 8.7% (1.5 MCM), well below last year\'s 27.6%. Limited inflow of 1.14 MCM this season.',
      el: 'Ο Καλαβασός στο 8.7% (1.5 ΕΚΜ), πολύ κάτω από πέρυσι (27.6%). Περιορισμένη εισροή 1.14 ΕΚΜ.',
      ru: 'Калавасос на 8.7% (1.5 МКМ), значительно ниже прошлогодних 27.6%. Ограниченный приток 1.14 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 12.6% (1.7 MCM), still well below last year\'s 28.8%. Seasonal inflow only 0.78 MCM.',
      el: 'Η Λεύκαρα στο 12.6% (1.7 ΕΚΜ), πολύ κάτω από πέρυσι (28.8%). Εισροή σεζόν μόλις 0.78 ΕΚΜ.',
      ru: 'Лефкара на 12.6% (1.7 МКМ), значительно ниже прошлогодних 28.8%. Приток за сезон — всего 0.78 МКМ.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 26.3% (4.1 MCM), below last year\'s 35.9%. Seasonal inflow of 1.53 MCM.',
      el: 'Ο Διπόταμος στο 26.3% (4.1 ΕΚΜ), κάτω από πέρυσι (35.9%). Εισροή σεζόν 1.53 ΕΚΜ.',
      ru: 'Дипотамос на 26.3% (4.1 МКМ), ниже прошлогодних 35.9%. Сезонный приток 1.53 МКМ.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 24.1% (3.25 MCM), nearly doubled in the past week. Approaching last year\'s 26.5%.',
      el: 'Η Γερμασόγεια στο 24.1% (3.25 ΕΚΜ), σχεδόν διπλασιάστηκε την τελευταία εβδομάδα. Πλησιάζει πέρυσι (26.5%).',
      ru: 'Гермасойя на 24.1% (3.25 МКМ), почти удвоилась за последнюю неделю. Приближается к прошлогодним 26.5%.',
    },
    'Arminou': {
      en: 'Arminou at 54.6% (2.35 MCM) after massive inflows. Continues pumping to Kouris — 10.18 MCM transferred since October.',
      el: 'Ο Αρμίνου στο 54.6% (2.35 ΕΚΜ) μετά από μεγάλες εισροές. Συνεχίζει μεταφορά στον Κούρη — 10.18 ΕΚΜ από Οκτώβριο.',
      ru: 'Арминоу на 54.6% (2.35 МКМ) после крупных притоков. Продолжает перекачку в Курис — 10.18 МКМ с октября.',
    },
    'Polemidia': {
      en: 'Polemidia at 43.3% (1.47 MCM), above last year\'s 39.3%. A steady performer this season.',
      el: 'Η Πολεμίδια στο 43.3% (1.47 ΕΚΜ), πάνω από πέρυσι (39.3%). Σταθερή απόδοση φέτος.',
      ru: 'Полемидия на 43.3% (1.47 МКМ), выше прошлогодних 39.3%. Стабильный показатель этого сезона.',
    },
    'Achna': {
      en: 'Achna remains critically low at 2.1% (0.14 MCM) with zero inflow this season, far below last year\'s 20.0%.',
      el: 'Η Αχνα παραμένει κρίσιμα χαμηλά στο 2.1% (0.14 ΕΚΜ) χωρίς εισροή, πολύ κάτω από πέρυσι (20.0%).',
      ru: 'Ахна по-прежнему критически низкая — 2.1% (0.14 МКМ) без притока, далеко ниже прошлогодних 20.0%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos surged to 30.5% (15.95 MCM), a new season high exceeding last year\'s peak. Total inflow 13.16 MCM.',
      el: 'Ο Ασπρόκρεμμος εκτοξεύθηκε στο 30.5% (15.95 ΕΚΜ), νέο μέγιστο σεζόν, ξεπερνά το περσινό ρεκόρ. Εισροή 13.16 ΕΚΜ.',
      ru: 'Аспрокреммос вырос до 30.5% (15.95 МКМ) — новый сезонный максимум, выше прошлогоднего пика. Приток 13.16 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 38.6% (6.63 MCM), well above last year\'s 26.8% — new season high. Inflow of 6.28 MCM since October.',
      el: 'Ο Καννάβιου στο 38.6% (6.63 ΕΚΜ), πολύ πάνω από πέρυσι (26.8%) — νέο μέγιστο σεζόν. Εισροή 6.28 ΕΚΜ.',
      ru: 'Каннавиу на 38.6% (6.63 МКМ), значительно выше прошлогодних 26.8% — новый сезонный максимум. Приток 6.28 МКМ.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 69.5% (1.52 MCM), new all-time season high, up from 0% last year. Exceptional recovery.',
      el: 'Ο Μαυροκόλυμπος στο 69.5% (1.52 ΕΚΜ), νέο μέγιστο σεζόν, από 0% πέρυσι. Εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 69.5% (1.52 МКМ) — новый сезонный максимум, рост с 0% год назад. Исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 35.2% (8.44 MCM), new season high, well above last year\'s 25.0%. Seasonal inflow 6.28 MCM.',
      el: 'Ο Εύρετου στο 35.2% (8.44 ΕΚΜ), νέο μέγιστο σεζόν, πολύ πάνω από πέρυσι (25.0%). Εισροή 6.28 ΕΚΜ.',
      ru: 'Эвретоу на 35.2% (8.44 МКМ) — новый сезонный максимум, значительно выше прошлогодних 25.0%. Приток 6.28 МКМ.',
    },
    'Argaka': {
      en: 'Argaka is full at 100% (0.99 MCM), a major recovery from 37.9% last year.',
      el: 'Η Αργάκα είναι γεμάτη στο 100% (0.99 ΕΚΜ), μεγάλη βελτίωση από 37.9% πέρυσι.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ) — значительное улучшение с 37.9% в прошлом году.',
    },
    'Pomos': {
      en: 'Pomos is full at 100% (0.86 MCM), up from 42.9% last year.',
      el: 'Ο Πόμος είναι γεμάτος στο 100% (0.86 ΕΚΜ), αύξηση από 42.9% πέρυσι.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), рост с 42.9% год назад.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 88.9% (0.27 MCM), up from 55.4% last year. Near capacity.',
      el: 'Η Αγία Μαρίνα στο 88.9% (0.27 ΕΚΜ), αύξηση από 55.4% πέρυσι. Κοντά στη χωρητικότητα.',
      ru: 'Агия Марина на 88.9% (0.27 МКМ), рост с 55.4% в прошлом году. Почти заполнена.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 46.6% (0.79 MCM), remarkable recovery from just 2.8% last year. Seasonal inflow 0.79 MCM.',
      el: 'Τα Βυζακιά στο 46.6% (0.79 ΕΚΜ), εντυπωσιακή ανάκαμψη από μόλις 2.8% πέρυσι. Εισροή 0.79 ΕΚΜ.',
      ru: 'Визакия на 46.6% (0.79 МКМ) — замечательное восстановление с 2.8% год назад. Приток 0.79 МКМ.',
    },
    'Xyliatos': {
      en: 'Xyliatos is full at 100% (1.43 MCM), over 4× last year\'s 23.4%. Outstanding recovery this season.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ), 4× πέρυσι (23.4%). Εξαιρετική ανάκαμψη φέτος.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ), более чем в 4 раза выше прошлогодних 23.4%. Выдающееся восстановление.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis is full at 100% (0.36 MCM), up from 86.2% last year.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), αύξηση από 86.2% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), рост с 86.2% в прошлом году.',
    },
    'Tamassos': {
      en: 'Tamassos at 87.3% (2.45 MCM), more than double last year\'s 37.5%. Approaching full capacity after strong Troodos rainfall.',
      el: 'Ο Ταμασός στο 87.3% (2.45 ΕΚΜ), πάνω από 2× πέρυσι (37.5%). Πλησιάζει χωρητικότητα μετά βροχές Τροόδους.',
      ru: 'Тамассос на 87.3% (2.45 МКМ), более чем вдвое выше прошлогодних 37.5%. Приближается к полной вместимости после дождей на Троодосе.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta is full at 100% (2.0 MCM), up from 73.7% last year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), αύξηση από 73.7% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), рост с 73.7% в прошлом году.',
    },
    'Solea': {
      en: 'Solea is full at 100% (4.45 MCM), up from 67.4% last year. Seasonal inflow of 2.64 MCM.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), αύξηση από 67.4% πέρυσι. Εισροή σεζόν 2.64 ΕΚΜ.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), рост с 67.4% в прошлом году. Приток за сезон 2.64 МКМ.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (16 — 24 Μαρτίου 2026)

Συνολική αποθήκευση **27.7%** (80.6 ΕΚΜ), αύξηση από 24.5% (71.4 ΕΚΜ) στις 16/3 — +9.2 ΕΚΜ σε 8 ημέρες. Τα αποθέματα παραμένουν **πάνω από πέρυσι** (24.6%, 71.7 ΕΚΜ). Εισροή σεζόν 25/26: 62.3 ΕΚΜ — 3.3× από τη ξηρή χρονιά 24/25 (18.7 ΕΚΜ). Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 10.18 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Κούρης](/el/dam/kouris/) 25.1%** (28.9 ΕΚΜ) — +5.9 ΕΚΜ σε μια εβδομάδα, νέο μέγιστο σεζόν
- **[Ασπρόκρεμμος](/el/dam/asprokremmos/) 30.5%** (15.95 ΕΚΜ) — +4.2 ΕΚΜ, ξεπέρασε το περσινό μέγιστο
- **[Γερμασόγεια](/el/dam/germasoyeia/) σχεδόν διπλασιάστηκε** — από 12.2% σε 24.1% σε 8 ημέρες
- **[Καννάβιου](/el/dam/kannaviou/) 38.6%** (6.63 ΕΚΜ) — +1.9 ΕΚΜ, νέο μέγιστο σεζόν
- **[Εύρετου](/el/dam/evretou/) 35.2%** (8.44 ΕΚΜ) — +1.8 ΕΚΜ, νέο μέγιστο σεζόν
- [Αχνα](/el/dam/achna/) παραμένει στο 2.1% χωρίς εισροή

Η μείωση υδροδότησης 10% παραμένει σε ισχύ παρά τις σημαντικές βροχοπτώσεις.

**Στα μέσα:**
- [«Ανάσα» για τα φράγματα μετά την κακοκαιρία](https://www.24sports.com.cy/gr/news/nea/koinonia/anasa-gia-ta-fragmata-meta-tin-kakokairia-pinakas) — 24Sports
- [Στο 77% η μέση βροχόπτωση Μαρτίου — Έρχονται πολύ σημαντικές εισροές](https://kitasweather.com/news/fragmata-vroxoptosi/sto-77-tis-ekato-i-mesi-vroxoptosi-martiou-erxontai-poli-simantikes-eisroes-nerou-sta-fragmata-tis-epomenes-imeres/) — KitasWeather
- [Αισιόδοξο το ΤΑΥ για καλές εισροές ως τέλος Μαρτίου](https://cyprustimes.com/koinonia/aisiodoxo-to-taf-gia-kales-eisroes-os-telos-martiou-se-kalyteri-moira-apo-persi/) — CyprusTimes
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (16 — 24 марта 2026)

Общий запас **27.7%** (80.6 МКМ), рост с 24.5% (71.4 МКМ) на 16/3 — +9.2 МКМ за 8 дней. Запасы остаются **выше прошлогодних** (24.6%, 71.7 МКМ). Приток сезона 25/26: 62.3 МКМ — в 3.3 раза больше засушливого 24/25 (18.7 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 10.18 МКМ.

**Основные изменения:**
- **[Курис](/ru/dam/kouris/) 25.1%** (28.9 МКМ) — +5.9 МКМ за неделю, новый сезонный максимум
- **[Аспрокреммос](/ru/dam/asprokremmos/) 30.5%** (15.95 МКМ) — +4.2 МКМ, превысил прошлогодний пик
- **[Гермасойя](/ru/dam/germasoyeia/) почти удвоилась** — с 12.2% до 24.1% за 8 дней
- **[Каннавиу](/ru/dam/kannaviou/) 38.6%** (6.63 МКМ) — +1.9 МКМ, новый сезонный максимум
- **[Эвретоу](/ru/dam/evretou/) 35.2%** (8.44 МКМ) — +1.8 МКМ, новый сезонный максимум
- [Ахна](/ru/dam/achna/) остаётся на 2.1% без притока

Сокращение водоснабжения на 10% продолжает действовать несмотря на значительные осадки.

**В СМИ:**
- [На Кипре — сезон дождей, но власти утверждают, что засуха продолжается](https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god) — Европа Кипр
- [Кипр переживает худший водный кризис за десятилетие](https://cyprusbutterfly.com.cy/news/kipr-perezhivaet-xudshij-vodnyij-krizis) — Cyprus Butterfly
- [Кипр не остался «без воды»](https://russiancyprus.news/news/society/cyprus-has-not-been-left-without-water/) — Russian Cyprus
`;
  }
  return `
### Recent Changes (March 16 — 24, 2026)

Total storage at **27.7%** (80.6 MCM), up from 24.5% (71.4 MCM) on Mar 16 — +9.2 MCM in 8 days. Reserves remain **above last year's level** (24.6%, 71.7 MCM). Total 25/26 inflow: 62.3 MCM — 3.3× the 2024/25 drought season (18.7 MCM). [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 10.18 MCM since October.

**Notable movements:**
- **[Kouris](/dam/kouris/) at 25.1%** (28.9 MCM) — +5.9 MCM in one week, new season high
- **[Asprokremmos](/dam/asprokremmos/) at 30.5%** (15.95 MCM) — +4.2 MCM, surpassed last year's peak
- **[Germasoyeia](/dam/germasoyeia/) nearly doubled** — from 12.2% to 24.1% in 8 days
- **[Kannaviou](/dam/kannaviou/) at 38.6%** (6.63 MCM) — +1.9 MCM, new season high
- **[Evretou](/dam/evretou/) at 35.2%** (8.44 MCM) — +1.8 MCM, new season high
- [Achna](/dam/achna/) remains at 2.1% with zero inflow

The 10% island-wide water supply cut remains in effect despite the significant rainfall.

**In the media:**
- [Heavy rainfall welcome, but warnings over water usage remain](https://cyprus-mail.com/2026/03/21/heavy-rainfall-welcome-but-warnings-over-water-usage-remain) — Cyprus Mail
- [Cyprus dam water levels rise after rainfall](https://en.sigmalive.com/cyprus-dam-water-levels-rise-after-rainfall/) — Sigmalive
- [Heavy rain a welcome boost to water reserves](https://cyprus-mail.com/2026/03/16/heavy-rain-a-welcome-boost-to-water-reserves) — Cyprus Mail
`;
};

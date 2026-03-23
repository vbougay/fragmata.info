import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for March 23, 2026 (parsed from 23-MAR-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 1.95, totalSince: 11.649 }, storage: { current: { amount: 27.918, percentage: 24.3 }, lastYear: { amount: 23.084, percentage: 20.1 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.182, totalSince: 1.064 }, storage: { current: { amount: 1.432, percentage: 8.4 }, lastYear: { amount: 4.726, percentage: 27.6 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.205, totalSince: 0.732 }, storage: { current: { amount: 1.702, percentage: 12.3 }, lastYear: { amount: 4.011, percentage: 29.0 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.18, totalSince: 1.461 }, storage: { current: { amount: 4.009, percentage: 25.9 }, lastYear: { amount: 5.556, percentage: 35.8 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 1.137, totalSince: 3.317 }, storage: { current: { amount: 3.02, percentage: 22.4 }, lastYear: { amount: 3.591, percentage: 26.6 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 2.459, totalSince: 10.989 }, storage: { current: { amount: 2.435, percentage: 56.6 }, lastYear: { amount: 2.504, percentage: 58.2 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.086, totalSince: 0.808 }, storage: { current: { amount: 1.446, percentage: 42.5 }, lastYear: { amount: 1.338, percentage: 39.4 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.142, percentage: 2.1 }, lastYear: { amount: 1.375, percentage: 20.2 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 3.234, totalSince: 12.61 }, storage: { current: { amount: 15.42, percentage: 29.4 }, lastYear: { amount: 13.418, percentage: 25.6 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 1.348, totalSince: 5.996 }, storage: { current: { amount: 6.348, percentage: 37.0 }, lastYear: { amount: 4.602, percentage: 26.8 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.059, totalSince: 0.757 }, storage: { current: { amount: 1.48, percentage: 67.9 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 1.121, totalSince: 5.964 }, storage: { current: { amount: 8.127, percentage: 33.9 }, lastYear: { amount: 6.013, percentage: 25.1 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.374, percentage: 37.8 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.368, percentage: 42.8 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.02, totalSince: 0.2 }, storage: { current: { amount: 0.255, percentage: 85.6 }, lastYear: { amount: 0.165, percentage: 55.4 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.107, totalSince: 0.75 }, storage: { current: { amount: 0.751, percentage: 44.4 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.239, totalSince: 1.413 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.335, percentage: 23.4 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.312, percentage: 86.0 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.438, totalSince: 1.973 }, storage: { current: { amount: 2.335, percentage: 83.4 }, lastYear: { amount: 1.052, percentage: 37.6 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.003, totalSince: 1.037 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.473, percentage: 73.7 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 3.002, percentage: 67.4 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:20.739, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:59.808 },
];

export const getReportDate = (): string => "23-MAR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 9.63 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris surged to 24.3% (27.9 MCM), now above last year\'s 20.1%. Heavy Troodos rainfall and 9.63 MCM pumped from Arminou since October.',
      el: 'Ο Κούρης ανήλθε στο 24.3% (27.9 ΕΚΜ), πάνω από πέρυσι (20.1%). Ισχυρές βροχές Τροόδους και 9.63 ΕΚΜ από Αρμίνου από τον Οκτώβριο.',
      ru: 'Курис вырос до 24.3% (27.9 МКМ), превысив прошлогодний уровень 20.1%. Сильные дожди на Троодосе и 9.63 МКМ перекачано из Арминоу с октября.',
    },
    'Kalavasos': {
      en: 'Kalavasos holds 8.4% (1.4 MCM), well below last year\'s 27.6%. Limited inflow of 1.06 MCM this season.',
      el: 'Ο Καλαβασός βρίσκεται στο 8.4% (1.4 ΕΚΜ), πολύ κάτω από πέρυσι (27.6%). Περιορισμένη εισροή 1.06 ΕΚΜ φέτος.',
      ru: 'Калавасос на 8.4% (1.4 МКМ), значительно ниже прошлогодних 27.6%. Скромный приток 1.06 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara at 12.3% (1.7 MCM), up slightly from recent weeks but still well below last year\'s 29.0%. Seasonal inflow only 0.73 MCM.',
      el: 'Η Λεύκαρα στο 12.3% (1.7 ΕΚΜ), ελαφρά αύξηση αλλά κάτω από πέρυσι (29.0%). Εισροή σεζόν μόλις 0.73 ΕΚΜ.',
      ru: 'Лефкара на 12.3% (1.7 МКМ), незначительный рост, но всё ещё значительно ниже прошлогодних 29.0%. Приток за сезон — 0.73 МКМ.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 25.9% (4.0 MCM), slightly below last year\'s 35.8%. Seasonal inflow of 1.46 MCM.',
      el: 'Ο Διπόταμος στο 25.9% (4.0 ΕΚΜ), ελαφρώς κάτω από πέρυσι (35.8%). Εισροή σεζόν 1.46 ΕΚΜ.',
      ru: 'Дипотамос на 25.9% (4.0 МКМ), немного ниже прошлогодних 35.8%. Сезонный приток 1.46 МКМ.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia nearly doubled to 22.4% (3.02 MCM) after heavy rain, up from 14.1% on March 20. Still below last year\'s 26.6%.',
      el: 'Η Γερμασόγεια σχεδόν διπλασιάστηκε στο 22.4% (3.02 ΕΚΜ) μετά από βροχές, από 14.1% στις 20/3. Κάτω από πέρυσι (26.6%).',
      ru: 'Гермасойя почти удвоилась до 22.4% (3.02 МКМ) после сильных дождей, рост с 14.1% 20 марта. Всё ещё ниже прошлогодних 26.6%.',
    },
    'Arminou': {
      en: 'Arminou surged to 56.6% (2.44 MCM) after exceptional 3-day inflow of 2.46 MCM. Continues transferring to Kouris — 9.63 MCM pumped since October.',
      el: 'Ο Αρμίνου εκτινάχθηκε στο 56.6% (2.44 ΕΚΜ) μετά από εξαιρετική εισροή 2.46 ΕΚΜ σε 3 ημέρες. Συνεχίζει μεταφορά στον Κούρη — 9.63 ΕΚΜ από Οκτώβριο.',
      ru: 'Арминоу резко вырос до 56.6% (2.44 МКМ) после исключительного притока 2.46 МКМ за 3 дня. Продолжает перекачку в Курис — 9.63 МКМ с октября.',
    },
    'Polemidia': {
      en: 'Polemidia at 42.5% (1.45 MCM), marginally above last year\'s 39.4%. One of the steadier dams this season.',
      el: 'Η Πολεμίδια στο 42.5% (1.45 ΕΚΜ), ελαφρώς πάνω από πέρυσι (39.4%). Ένα από τα πιο σταθερά φράγματα.',
      ru: 'Полемидия на 42.5% (1.45 МКМ), немного выше прошлогодних 39.4%. Одна из самых стабильных плотин сезона.',
    },
    'Achna': {
      en: 'Achna remains critically low at 2.1% (0.14 MCM) with zero inflow this season, far below last year\'s 20.2%.',
      el: 'Η Αχνα παραμένει κρίσιμα χαμηλά στο 2.1% (0.14 ΕΚΜ) χωρίς εισροή, πολύ κάτω από πέρυσι (20.2%).',
      ru: 'Ахна по-прежнему критически низкая — 2.1% (0.14 МКМ) без притока, далеко ниже прошлогодних 20.2%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 29.4% (15.42 MCM), a new season high surpassing last year\'s peak (15.35 MCM). Total inflow 12.61 MCM this season.',
      el: 'Ο Ασπρόκρεμμος στο 29.4% (15.42 ΕΚΜ), νέο μέγιστο σεζόν που ξεπερνά το πέρυσι (15.35 ΕΚΜ). Εισροή σεζόν 12.61 ΕΚΜ.',
      ru: 'Аспрокреммос на 29.4% (15.42 МКМ) — новый сезонный максимум, превысивший прошлогодний пик (15.35 МКМ). Приток за сезон 12.61 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 37.0% (6.35 MCM), well above last year\'s 26.8% — a new season high. Inflow of 6.0 MCM since October.',
      el: 'Ο Καννάβιου στο 37.0% (6.35 ΕΚΜ), πολύ πάνω από πέρυσι (26.8%) — νέο μέγιστο σεζόν. Εισροή 6.0 ΕΚΜ από Οκτώβριο.',
      ru: 'Каннавиу на 37.0% (6.35 МКМ), значительно выше прошлогодних 26.8% — новый сезонный максимум. Приток 6.0 МКМ с октября.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 67.9% (1.48 MCM), a new all-time season maximum, up from 0% last year. Exceptional recovery this season.',
      el: 'Ο Μαυροκόλυμπος στο 67.9% (1.48 ΕΚΜ), νέο μέγιστο ιστορικής σεζόν, από 0% πέρυσι. Εξαιρετική ανάκαμψη φέτος.',
      ru: 'Мавроколимпос на 67.9% (1.48 МКМ) — новый исторический сезонный максимум, рост с 0% в прошлом году. Исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 33.9% (8.13 MCM), a new season high well above last year\'s peak (6.20 MCM, 25.1%). Seasonal inflow 5.96 MCM.',
      el: 'Ο Εύρετου στο 33.9% (8.13 ΕΚΜ), νέο μέγιστο σεζόν, πολύ πάνω από πέρυσι (6.20 ΕΚΜ, 25.1%). Εισροή σεζόν 5.96 ΕΚΜ.',
      ru: 'Эвретоу на 33.9% (8.13 МКМ) — новый сезонный максимум, значительно выше прошлогоднего пика (6.20 МКМ, 25.1%). Приток 5.96 МКМ.',
    },
    'Argaka': {
      en: 'Argaka is full at 100% (0.99 MCM), a major recovery from 37.8% last year. Seasonal inflow of 1.0 MCM.',
      el: 'Η Αργάκα είναι γεμάτη στο 100% (0.99 ΕΚΜ), μεγάλη βελτίωση από 37.8% πέρυσι. Εισροή σεζόν 1.0 ΕΚΜ.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ) — значительное улучшение с 37.8% в прошлом году. Приток за сезон 1.0 МКМ.',
    },
    'Pomos': {
      en: 'Pomos is full at 100% (0.86 MCM), up from 42.8% last year. Seasonal inflow of 0.79 MCM.',
      el: 'Ο Πόμος είναι γεμάτος στο 100% (0.86 ΕΚΜ), αύξηση από 42.8% πέρυσι. Εισροή σεζόν 0.79 ΕΚΜ.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), рост с 42.8% год назад. Сезонный приток 0.79 МКМ.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 85.6% (0.26 MCM), up from 55.4% last year. The small Chrysochou dam benefiting from good seasonal rainfall.',
      el: 'Η Αγία Μαρίνα στο 85.6% (0.26 ΕΚΜ), αύξηση από 55.4% πέρυσι. Το μικρό φράγμα Χρυσοχούς ωφελείται από τις βροχές.',
      ru: 'Агия Марина на 85.6% (0.26 МКМ), рост с 55.4% в прошлом году. Небольшая плотина Хрисоху выигрывает от хорошего сезонного количества осадков.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 44.4% (0.75 MCM), a remarkable recovery from just 2.8% last year. Seasonal inflow of 0.75 MCM revived this Nicosia dam.',
      el: 'Τα Βυζακιά στο 44.4% (0.75 ΕΚΜ), εντυπωσιακή ανάκαμψη από μόλις 2.8% πέρυσι. Εισροή 0.75 ΕΚΜ αναζωογόνησε το φράγμα.',
      ru: 'Визакия на 44.4% (0.75 МКМ) — замечательное восстановление с 2.8% год назад. Приток 0.75 МКМ оживил никосийскую плотину.',
    },
    'Xyliatos': {
      en: 'Xyliatos is full at 100% (1.43 MCM), over 4× last year\'s 23.4%. Seasonal inflow of 1.41 MCM — outstanding recovery this season.',
      el: 'Ο Ξυλιάτος είναι γεμάτος στο 100% (1.43 ΕΚΜ), 4× πέρυσι (23.4%). Εισροή σεζόν 1.41 ΕΚΜ — εξαιρετική ανάκαμψη φέτος.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ), более чем в 4 раза выше прошлогодних 23.4%. Приток за сезон 1.41 МКМ — выдающееся восстановление.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis is full at 100% (0.36 MCM), up from 86.0% last year. The small Nicosia recharge dam is at capacity.',
      el: 'Ο Καλοπαναγιώτης είναι γεμάτος στο 100% (0.36 ΕΚΜ), αύξηση από 86.0% πέρυσι. Το μικρό φράγμα εφεδρείας Λευκωσίας είναι γεμάτο.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), рост с 86.0% в прошлом году. Небольшая подпитывающая плотина Никосии достигла вместимости.',
    },
    'Tamassos': {
      en: 'Tamassos surged to 83.4% (2.34 MCM), more than double last year\'s 37.6%. Seasonal inflow of 1.97 MCM after heavy Troodos rain.',
      el: 'Ο Ταμασός εκτινάχθηκε στο 83.4% (2.34 ΕΚΜ), πάνω από διπλάσιο του περσινού 37.6%. Εισροή 1.97 ΕΚΜ μετά από βροχές Τροόδους.',
      ru: 'Тамассос резко вырос до 83.4% (2.34 МКМ), более чем вдвое выше прошлогодних 37.6%. Приток 1.97 МКМ после сильных дождей на Троодосе.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta is full at 100% (2.0 MCM), up from 73.7% last year. Seasonal inflow of 1.04 MCM kept the recharge dam at capacity.',
      el: 'Η Κλήρου-Μαλούντα είναι γεμάτη στο 100% (2.0 ΕΚΜ), αύξηση από 73.7% πέρυσι. Εισροή 1.04 ΕΚΜ διατήρησε το φράγμα γεμάτο.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), рост с 73.7% в прошлом году. Приток 1.04 МКМ поддерживал плотину подпитки заполненной.',
    },
    'Solea': {
      en: 'Solea is full at 100% (4.45 MCM), up from 67.4% last year. Seasonal inflow of 2.64 MCM has kept the recharge dam at full capacity.',
      el: 'Η Σολέα είναι γεμάτη στο 100% (4.45 ΕΚΜ), αύξηση από 67.4% πέρυσι. Εισροή 2.64 ΕΚΜ διατήρησε το φράγμα γεμάτο.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), рост с 67.4% в прошлом году. Приток 2.64 МКМ поддерживал плотину подпитки полностью заполненной.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (13 — 23 Μαρτίου 2026)

Συνολική αποθήκευση **26.9%** (78.1 ΕΚΜ), αύξηση από 21.2% (61.6 ΕΚΜ) στις 13/3 — εξαιρετικές βροχοπτώσεις στον Τρόοδο. Τα αποθέματα **ξεπέρασαν το περσινό επίπεδο** (24.7%, 71.8 ΕΚΜ) για πρώτη φορά φέτος. Συνολική εισροή 25/26: 59.8 ΕΚΜ — 3.2× περισσότερο από όλη την ξηρή χρονιά 24/25 (18.7 ΕΚΜ). Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 9.63 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Κούρης](/el/dam/kouris/) 24.3%** (27.9 ΕΚΜ), νέο μέγιστο σεζόν πάνω από πέρυσι (20.1%)
- **[Ασπρόκρεμμος](/el/dam/asprokremmos/) 29.4%** (15.42 ΕΚΜ) — ξεπέρασε το περσινό μέγιστο (15.35 ΕΚΜ)
- **[Γερμασόγεια](/el/dam/germasoyeia/)** σχεδόν διπλασιάστηκε: από 14.1% (20/3) σε 22.4% σε 3 ημέρες
- **[Αρμίνου](/el/dam/arminou/) εκτοξεύθηκε** στο 56.6% (2.44 ΕΚΜ) — εισροή 2.46 ΕΚΜ σε 3ήμερο
- **[Ταμασός](/el/dam/tamassos/) 83.4%** (2.34 ΕΚΜ), πάνω από 2× πέρυσι (37.6%)
- [Αχνα](/el/dam/achna/) παραμένει κρίσιμα χαμηλά στο 2.1% (0.14 ΕΚΜ)

Το ΤΑΥ αναμένει επιπλέον εισροές ως 25/3. Η μείωση υδροδότησης 10% παραμένει σε ισχύ.

**Στα μέσα:**
- [«Ανάσα» για τα φράγματα μετά την κακοκαιρία](https://www.24sports.com.cy/gr/news/nea/koinonia/anasa-gia-ta-fragmata-meta-tin-kakokairia-pinakas) — 24Sports
- [Στο 77% η μέση βροχόπτωση Μαρτίου — Έρχονται πολύ σημαντικές εισροές](https://kitasweather.com/news/fragmata-vroxoptosi/sto-77-tis-ekato-i-mesi-vroxoptosi-martiou-erxontai-poli-simantikes-eisroes-nerou-sta-fragmata-tis-epomenes-imeres/) — KitasWeather
- [Αισιόδοξο το ΤΑΥ για καλές εισροές ως τέλος Μαρτίου](https://cyprustimes.com/koinonia/aisiodoxo-to-taf-gia-kales-eisroes-os-telos-martiou-se-kalyteri-moira-apo-persi/) — CyprusTimes
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (13 — 23 марта 2026)

Общий запас **26.9%** (78.1 МКМ), рост с 21.2% (61.6 МКМ) на 13/3 — исключительные осадки на Троодосе. Запасы **превысили прошлогодний уровень** (24.7%, 71.8 МКМ) впервые в этом сезоне. Общий приток 25/26: 59.8 МКМ — в 3.2 раза больше всего засушливого сезона 24/25 (18.7 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 9.63 МКМ.

**Основные изменения:**
- **[Курис](/ru/dam/kouris/) 24.3%** (27.9 МКМ) — новый сезонный максимум, выше прошлогоднего (20.1%)
- **[Аспрокреммос](/ru/dam/asprokremmos/) 29.4%** (15.42 МКМ) — превысил прошлогодний пик (15.35 МКМ)
- **[Гермасойя](/ru/dam/germasoyeia/)** почти удвоилась: с 14.1% (20/3) до 22.4% за 3 дня
- **[Арминоу](/ru/dam/arminou/) резко вырос** до 56.6% (2.44 МКМ) — приток 2.46 МКМ за 3 дня
- **[Тамассос](/ru/dam/tamassos/) 83.4%** (2.34 МКМ), более чем вдвое превысил прошлый год (37.6%)
- [Ахна](/ru/dam/achna/) остаётся критически низкой — 2.1% (0.14 МКМ)

Служба водоснабжения ожидает дополнительных притоков до 25/3. Сокращение водоснабжения на 10% продолжает действовать.

**В СМИ:**
- [Ливни пополнили водохранилища Кипра — но власти предупреждают об осторожности](https://en.sigmalive.com/cyprus-dam-water-levels-rise-after-rainfall/) — Sigmalive English
- [На Кипре — сезон дождей, но власти утверждают, что засуха продолжается](https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god) — Европа Кипр
- [Кипр переживает худший водный кризис за десятилетие](https://cyprusbutterfly.com.cy/news/kipr-perezhivaet-xudshij-vodnyij-krizis) — Cyprus Butterfly
`;
  }
  return `
### Recent Changes (March 13 — 23, 2026)

Total storage at **26.9%** (78.1 MCM), up from 21.2% (61.6 MCM) on Mar 13 — exceptional Troodos rainfall. Reserves have **now exceeded last year's level** (24.7%, 71.8 MCM) for the first time this season. Total 25/26 inflow: 59.8 MCM — 3.2× the entire 2024/25 drought season (18.7 MCM). [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 9.63 MCM since October.

**Notable movements:**
- **[Kouris](/dam/kouris/) at 24.3%** (27.9 MCM) — new season high, now above last year (20.1%)
- **[Asprokremmos](/dam/asprokremmos/) at 29.4%** (15.42 MCM) — surpassed last year's peak (15.35 MCM)
- **[Germasoyeia](/dam/germasoyeia/) nearly doubled**: from 14.1% (Mar 20) to 22.4% in just 3 days
- **[Arminou](/dam/arminou/) surged** to 56.6% (2.44 MCM) — 2.46 MCM inflow in the last 3-day period
- **[Tamassos](/dam/tamassos/) at 83.4%** (2.34 MCM), more than double last year (37.6%)
- [Achna](/dam/achna/) remains critically low at 2.1% (0.14 MCM)

WDD expects additional inflows through March 25. The 10% island-wide water supply cut remains in effect.

**In the media:**
- [Heavy rainfall welcome, but warnings over water usage remain](https://cyprus-mail.com/2026/03/21/heavy-rainfall-welcome-but-warnings-over-water-usage-remain) — Cyprus Mail
- [Cyprus dam water levels rise after rainfall](https://en.sigmalive.com/cyprus-dam-water-levels-rise-after-rainfall/) — Sigmalive
- [Heavy rain a welcome boost to water reserves](https://cyprus-mail.com/2026/03/16/heavy-rain-a-welcome-boost-to-water-reserves) — Cyprus Mail
`;
};

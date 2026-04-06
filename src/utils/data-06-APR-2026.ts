import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for April 6, 2026 (parsed from 06-APR-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.866, totalSince: 16.095 }, storage: { current: { amount: 36.213, percentage: 31.5 }, lastYear: { amount: 22.416, percentage: 19.5 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.258, totalSince: 2.117 }, storage: { current: { amount: 2.418, percentage: 14.1 }, lastYear: { amount: 4.655, percentage: 27.2 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.145, totalSince: 1.205 }, storage: { current: { amount: 2.161, percentage: 15.6 }, lastYear: { amount: 3.711, percentage: 26.8 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.257, totalSince: 2.315 }, storage: { current: { amount: 4.869, percentage: 31.4 }, lastYear: { amount: 5.667, percentage: 36.6 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.498, totalSince: 5.895 }, storage: { current: { amount: 5.568, percentage: 41.2 }, lastYear: { amount: 3.51, percentage: 26.0 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.591, totalSince: 14.483 }, storage: { current: { amount: 1.733, percentage: 40.3 }, lastYear: { amount: 2.568, percentage: 59.7 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.037, totalSince: 1.15 }, storage: { current: { amount: 1.786, percentage: 52.5 }, lastYear: { amount: 1.311, percentage: 38.6 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.143, percentage: 2.1 }, lastYear: { amount: 1.235, percentage: 18.2 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.579, totalSince: 16.232 }, storage: { current: { amount: 18.857, percentage: 36.0 }, lastYear: { amount: 13.001, percentage: 24.8 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.18, totalSince: 7.712 }, storage: { current: { amount: 7.929, percentage: 46.2 }, lastYear: { amount: 4.474, percentage: 26.1 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.006, totalSince: 0.837 }, storage: { current: { amount: 1.78, percentage: 81.7 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.231, totalSince: 7.917 }, storage: { current: { amount: 10.055, percentage: 41.9 }, lastYear: { amount: 5.879, percentage: 24.5 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.386, percentage: 39.0 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.376, percentage: 43.7 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.243 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.171, percentage: 57.4 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.102, totalSince: 1.243 }, storage: { current: { amount: 1.244, percentage: 73.6 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 1.413 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.326, percentage: 22.8 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.317, percentage: 87.3 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.003, totalSince: 2.452 }, storage: { current: { amount: 2.8, percentage: 100.0 }, lastYear: { amount: 1.033, percentage: 36.9 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.003, totalSince: 1.051 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.47, percentage: 73.5 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.969, percentage: 66.7 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data - updated with 25/26 data through April 6, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:6.472, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:80.955 },
];

export const getReportDate = (): string => "06-APR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 13.85 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 31.5% (36.2 MCM) — new season high, 12.0pp above last year\'s 19.5%. Arminou transfer: 13.85 MCM since October.',
      el: 'Ο Κούρης στο 31.5% (36.2 ΕΚΜ) — νέο μέγιστο σεζόν, 12.0μ.π. πάνω από πέρυσι (19.5%). Μεταφορά: 13.85 ΕΚΜ.',
      ru: 'Курис на 31.5% (36.2 МКМ) — новый сезонный максимум, +12.0пп выше прошлогодних 19.5%. Перекачка: 13.85 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 14.1% (2.42 MCM), still well below last year\'s 27.2%. Slow recovery with 2.12 MCM seasonal inflow.',
      el: 'Ο Καλαβασός στο 14.1% (2.42 ΕΚΜ), πολύ κάτω από πέρυσι (27.2%). Αργή ανάκαμψη, εισροή σεζόν 2.12 ΕΚΜ.',
      ru: 'Калавасос на 14.1% (2.42 МКМ), значительно ниже прошлогодних 27.2%. Медленное восстановление, приток 2.12 МКМ.',
    },
    'Lefkara': {
      en: 'Lefkara at 15.6% (2.16 MCM), still well below last year\'s 26.8%. Seasonal inflow 1.21 MCM — recovery remains sluggish.',
      el: 'Η Λεύκαρα στο 15.6% (2.16 ΕΚΜ), πολύ κάτω από πέρυσι (26.8%). Εισροή σεζόν 1.21 ΕΚΜ — αδύναμη ανάκαμψη.',
      ru: 'Лефкара на 15.6% (2.16 МКМ), значительно ниже прошлогодних 26.8%. Приток 1.21 МКМ — медленное восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos crossed 30% at 31.4% (4.87 MCM), closing on last year\'s 36.6%. Seasonal inflow 2.32 MCM — steady recovery.',
      el: 'Ο Διπόταμος ξεπέρασε 30% στο 31.4% (4.87 ΕΚΜ), πλησιάζει πέρυσι (36.6%). Εισροή σεζόν 2.32 ΕΚΜ, σταθερή ανάκαμψη.',
      ru: 'Дипотамос пересёк 30% — 31.4% (4.87 МКМ), приближается к прошлогодним 36.6%. Приток 2.32 МКМ — стабильное восстановление.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia surged past 40% to 41.2% (5.57 MCM) — new season high, 15.2pp above last year (26.0%). Top weekly gainer.',
      el: 'Η Γερμασόγεια ξεπέρασε 40% στο 41.2% (5.57 ΕΚΜ) — νέο μέγιστο σεζόν, 15.2μ.π. πάνω από πέρυσι (26.0%).',
      ru: 'Гермасойя пересекла 40% — 41.2% (5.57 МКМ), новый сезонный максимум, +15.2пп выше прошлого года (26.0%).',
    },
    'Arminou': {
      en: 'Arminou crossed 40% (1.73 MCM) despite pumping 13.85 MCM to Kouris since October. Strong inflow sustains transit role.',
      el: 'Ο Αρμίνου ξεπέρασε 40% (1.73 ΕΚΜ) παρά τη μεταφορά 13.85 ΕΚΜ στον Κούρη. Ισχυρή εισροή διατηρεί τον ρόλο.',
      ru: 'Арминоу пересёк 40% (1.73 МКМ) несмотря на перекачку 13.85 МКМ в Курис. Сильный приток поддерживает транзит.',
    },
    'Polemidia': {
      en: 'Polemidia at 52.5% (1.79 MCM) — holding above 50%. Now 13.9pp above last year\'s 38.6%. New season high maintained.',
      el: 'Η Πολεμίδια στο 52.5% (1.79 ΕΚΜ) — παραμένει πάνω από 50%. Τώρα 13.9μ.π. πάνω από πέρυσι (38.6%).',
      ru: 'Полемидия на 52.5% (1.79 МКМ) — удерживается выше 50%. Сейчас +13.9пп выше прошлогодних 38.6%.',
    },
    'Achna': {
      en: 'Achna critically low at 2.1% (0.14 MCM), zero inflow all season. Far below last year\'s 18.2%. No recovery in sight.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.1% (0.14 ΕΚΜ), χωρίς εισροή. Πολύ κάτω από πέρυσι (18.2%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.1% (0.14 МКМ), без притока за сезон. Далеко ниже прошлогодних 18.2%. Без перспектив.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 36.0% (18.9 MCM), new season high — 11.2pp above last year\'s 24.8%. Inflow 16.23 MCM since October.',
      el: 'Ο Ασπρόκρεμμος στο 36.0% (18.9 ΕΚΜ), νέο μέγιστο σεζόν — 11.2μ.π. πάνω από πέρυσι (24.8%). Εισροή 16.23 ΕΚΜ.',
      ru: 'Аспрокреммос на 36.0% (18.9 МКМ) — новый сезонный максимум, +11.2пп выше прошлого года (24.8%). Приток 16.23 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 46.2% (7.93 MCM) — new season high, 20.1pp above last year\'s 26.1%. Inflow 7.71 MCM since October.',
      el: 'Ο Καννάβιου στο 46.2% (7.93 ΕΚΜ), νέο μέγιστο σεζόν — 20.1μ.π. πάνω από πέρυσι (26.1%). Εισροή 7.71 ΕΚΜ.',
      ru: 'Каннавиу на 46.2% (7.93 МКМ) — новый сезонный максимум, +20.1пп выше прошлогодних 26.1%. Приток 7.71 МКМ.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 81.7% (1.78 MCM), approaching capacity. Was 0% last year — exceptional recovery this season.',
      el: 'Ο Μαυροκόλυμπος στο 81.7% (1.78 ΕΚΜ), πλησιάζει πληρότητα. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 81.7% (1.78 МКМ), приближается к полной вместимости. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou crossed 10 MCM — 41.9% (10.06 MCM), new season high. Now 17.4pp above last year\'s 24.5%.',
      el: 'Ο Εύρετου ξεπέρασε 10 ΕΚΜ — 41.9% (10.06 ΕΚΜ), νέο μέγιστο σεζόν. Τώρα 17.4μ.π. πάνω από πέρυσι (24.5%).',
      ru: 'Эвретоу пересёк 10 МКМ — 41.9% (10.06 МКМ), новый сезонный максимум. Теперь +17.4пп выше прошлогодних 24.5%.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), overflowing since mid-March. Was 39.0% last year — more than doubled year over year.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Από 39.0% πέρυσι — υπερδιπλασιασμός.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), переливается с середины марта. Год назад 39.0% — удвоение год к году.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), overflowing since mid-March. Up from 43.7% last year — more than doubled.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 43.7% πέρυσι.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), переливается с середины марта. Рост с 43.7% год назад — более чем удвоение.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 100% (0.30 MCM), overflowing since late March. Up from 57.4% last year — Chrysochou fully topped up.',
      el: 'Η Αγία Μαρίνα στο 100% (0.30 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Από 57.4% πέρυσι — Χρυσοχούς πλήρης.',
      ru: 'Агия Марина на 100% (0.30 МКМ), переливается с конца марта. Рост с 57.4% год назад — Хрисоху полностью заполнена.',
    },
    'Vyzakia': {
      en: 'Vyzakia surged to 73.6% (1.24 MCM), 26× last year\'s 2.8% — biggest year-over-year ratio. +13.6pp in 7 days.',
      el: 'Τα Βυζακιά στο 73.6% (1.24 ΕΚΜ), 26× πέρυσι (2.8%) — μεγαλύτερη ετήσια αναλογία. +13.6μ.π. σε 7 ημέρες.',
      ru: 'Визакия на 73.6% (1.24 МКМ), в 26 раз выше прошлогодних 2.8% — наибольшее соотношение. +13.6пп за 7 дней.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM), overflowing since late March. Was 22.8% last year — 4.4× year-over-year recovery.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Από 22.8% πέρυσι — 4.4× ανάκαμψη.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ), переливается с конца марта. Был 22.8% год назад — восстановление в 4.4×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-March. Up from 87.3% last year, at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 87.3% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины марта. Рост с 87.3% год назад, полная мощность.',
    },
    'Tamassos': {
      en: 'Tamassos at 100% (2.80 MCM), overflowing since early April. Was 36.9% last year — recovery of 2.7× year over year.',
      el: 'Ο Ταμασός στο 100% (2.80 ΕΚΜ), υπερχείλιση από αρχές Απριλίου. Από 36.9% πέρυσι — 2.7× υψηλότερα.',
      ru: 'Тамассос на 100% (2.80 МКМ), переполняется с начала апреля. Год назад 36.9%, теперь в 2.7× выше.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 73.5% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 73.5% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 73.5% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 66.7% last year — 1.5× improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 66.7% πέρυσι — 1.5× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 66.7% год назад — улучшение в 1.5×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (30 Μαρτίου — 6 Απριλίου 2026)

Συνολική αποθήκευση **33.9%** (98.7 ΕΚΜ), αύξηση από 31.2% (90.7 ΕΚΜ) στις 30/3 — **+8.0 ΕΚΜ σε 7 ημέρες**. Τα αποθέματα τώρα **9.8μ.π. πάνω από πέρυσι** (24.1%). Εισροή σεζόν 25/26: 81.0 ΕΚΜ — 4.3× τη χρονιά 24/25. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 13.85 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Βυζακιά](/el/dam/vyzakia/) 73.6%** — 26× πέρυσι (2.8%), +13.6μ.π. σε 7 ημέρες, πλησιάζει 75%
- **[Γερμασόγεια](/el/dam/germasoyeia/) ξεπέρασε 40%** (41.2%) — +8.2μ.π. σε 7 ημέρες, 15.2μ.π. πάνω από πέρυσι
- **[Αρμίνου](/el/dam/arminou/) ξεπέρασε 40%** (40.3%) — παρά τη μεταφορά 13.85 ΕΚΜ στον [Κούρη](/el/dam/kouris/)
- [Εύρετου](/el/dam/evretou/) ξεπέρασε 10 ΕΚΜ — 41.9%, νέο μέγιστο σεζόν
- [Διπόταμος](/el/dam/dipotamos/) ξεπέρασε 30% (31.4%), +3.1μ.π.
- [Κούρης](/el/dam/kouris/) 31.5% — νέο μέγιστο, +12.0μ.π. πάνω από πέρυσι
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) 81.7% — πλησιάζει πληρότητα, από 0% πέρυσι
- 8 φράγματα υπερχειλίζουν στο 100%
- [Αχνά](/el/dam/achna/) παραμένει στο 2.1% χωρίς εισροή

**Στα μέσα:**
- [Σημαντικές εισροές νερού στα φράγματα](https://news.rik.cy/article/2026/4/2/semantikes-eisroes-nerou-sta-phragmata/) — RIK
- [Ξεπέρασε το 30% η πληρότητα — 3ος καλύτερος Μάρτιος από το 1988](https://kitasweather.com/news/fragmata-vroxoptosi/kseperase-to-30-tis-ekato-i-sinoliki-plirotita-fragmaton-3os-kaliteros-martios-se-thema-eisroon-apo-to-1988/) — KitasWeather
- [Ξεπέρασε το 150% η μέση βροχόπτωση Μαρτίου — Αποτίμηση διαταραχής](https://kitasweather.com/news/fragmata-vroxoptosi/xeperase-to-150-h-vroxoptosi-martiou-apotimisi-diataraxis/) — KitasWeather
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (30 марта — 6 апреля 2026)

Общий запас **33.9%** (98.7 МКМ), рост с 31.2% (90.7 МКМ) на 30/3 — **+8.0 МКМ за 7 дней**. Запасы теперь **на 9.8пп выше прошлогодних** (24.1%). Приток сезона 25/26: 81.0 МКМ — в 4.3 раза больше засушливого сезона 24/25. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 13.85 МКМ.

**Основные изменения:**
- **[Визакия](/ru/dam/vyzakia/) 73.6%** — в 26 раз выше прошлогодних 2.8%, +13.6пп за 7 дней, приближается к 75%
- **[Гермасойя](/ru/dam/germasoyeia/) пересекла 40%** (41.2%) — +8.2пп за 7 дней, +15.2пп выше прошлого года
- **[Арминоу](/ru/dam/arminou/) пересёк 40%** (40.3%) — несмотря на перекачку 13.85 МКМ в [Курис](/ru/dam/kouris/)
- [Эвретоу](/ru/dam/evretou/) пересёк 10 МКМ — 41.9%, новый максимум сезона
- [Дипотамос](/ru/dam/dipotamos/) пересёк 30% (31.4%), +3.1пп
- [Курис](/ru/dam/kouris/) 31.5% — новый максимум, +12.0пп выше прошлого года
- [Мавроколимпос](/ru/dam/mavrokolympos/) 81.7% — приближается к полной мощности, год назад 0%
- 8 дамб переливаются на 100%
- [Ахна](/ru/dam/achna/) остаётся на 2.1% без притока

**В СМИ:**
- [Приток воды в дамбы Кипра — рекордный за 30 лет!](https://evropakipr.com/novosti/pritok-vody-v-damby-kipra-rekordnyy-za-30-let) — Европа Кипр
- [Какая засуха?! Дамба Саиттас переполнилась!](https://evropakipr.com/novosti/kakaya-zasuha-damba-saittas-perepolnilas) — Европа Кипр
- [На Кипре резко вырос приток воды в водохранилищах](https://ruscyprus.com/news/na-kipre-rezko-vyros-pritok-vodyv/54110) — RusCyprus
`;
  }
  return `
### Recent Changes (March 30 — April 6, 2026)

Total storage at **33.9%** (98.7 MCM), up from 31.2% (90.7 MCM) on Mar 30 — **+8.0 MCM in 7 days**. Reserves now **9.8pp above last year** (24.1%). Season total: 81.0 MCM — 4.3× the 2024/25 drought year. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 13.85 MCM.

**Notable movements:**
- **[Vyzakia](/dam/vyzakia/) 73.6%** — 26× last year's 2.8%, +13.6pp in 7 days, approaching 75%
- **[Germasoyeia](/dam/germasoyeia/) crossed 40%** (41.2%) — +8.2pp in 7 days, 15.2pp above last year
- **[Arminou](/dam/arminou/) crossed 40%** (40.3%) — despite pumping 13.85 MCM to [Kouris](/dam/kouris/)
- [Evretou](/dam/evretou/) crossed 10 MCM — 41.9%, new season high
- [Dipotamos](/dam/dipotamos/) crossed 30% (31.4%), +3.1pp
- [Kouris](/dam/kouris/) 31.5% — new season high, 12.0pp above last year
- [Mavrokolympos](/dam/mavrokolympos/) 81.7% — approaching capacity, was 0% last year
- 8 dams overflowing at 100%
- [Achna](/dam/achna/) still at 2.1% — zero inflow all season

**In the media:**
- [Amount of water in Cyprus' reservoirs nears 100m cubic metres](https://cyprus-mail.com/2026/04/02/amount-of-water-in-cyprus-reservoirs-nears-100m-cubic-metres) — Cyprus Mail
- [Rainfall helpful but Cyprus is far from water security, WDD official tells CNA](https://www.parikiaki.com/2026/03/rainfall-helpful-but-cyprus-is-far-from-water-security-wdd-official-tells-cna) — Parikiaki
- [March rains boost Cyprus' water reserves as dam inflows reach 12.3 million cubic meters](https://famagusta-gazette.com/march-rains-boost-cyprus-water-reserves-as-dam-inflows-reach-12-3-million-cubic-meters/) — Famagusta Gazette
`;
};

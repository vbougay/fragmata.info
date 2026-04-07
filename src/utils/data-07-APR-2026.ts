import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for April 7, 2026 (parsed from 07-APR-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.374, totalSince: 16.469 }, storage: { current: { amount: 36.692, percentage: 31.9 }, lastYear: { amount: 22.385, percentage: 19.5 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.171, totalSince: 2.288 }, storage: { current: { amount: 2.586, percentage: 15.1 }, lastYear: { amount: 4.663, percentage: 27.3 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.031, totalSince: 1.236 }, storage: { current: { amount: 2.191, percentage: 15.8 }, lastYear: { amount: 3.69, percentage: 26.6 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.089, totalSince: 2.404 }, storage: { current: { amount: 4.961, percentage: 32.0 }, lastYear: { amount: 5.682, percentage: 36.7 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.197, totalSince: 6.092 }, storage: { current: { amount: 5.761, percentage: 42.7 }, lastYear: { amount: 3.512, percentage: 26.0 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.269, totalSince: 14.752 }, storage: { current: { amount: 1.858, percentage: 43.2 }, lastYear: { amount: 2.573, percentage: 59.8 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.034, totalSince: 1.184 }, storage: { current: { amount: 1.819, percentage: 53.5 }, lastYear: { amount: 1.309, percentage: 38.5 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.143, percentage: 2.1 }, lastYear: { amount: 1.228, percentage: 18.1 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.171, totalSince: 16.403 }, storage: { current: { amount: 19.018, percentage: 36.3 }, lastYear: { amount: 12.972, percentage: 24.8 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.049, totalSince: 7.761 }, storage: { current: { amount: 7.967, percentage: 46.4 }, lastYear: { amount: 4.465, percentage: 26.0 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.023, totalSince: 0.860 }, storage: { current: { amount: 1.826, percentage: 83.8 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.079, totalSince: 7.996 }, storage: { current: { amount: 10.131, percentage: 42.2 }, lastYear: { amount: 5.868, percentage: 24.5 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.386, percentage: 39.0 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.376, percentage: 43.7 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.0, totalSince: 0.243 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.171, percentage: 57.4 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.04, totalSince: 1.283 }, storage: { current: { amount: 1.284, percentage: 76.0 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 1.413 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.326, percentage: 22.8 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.318, percentage: 87.6 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.001, totalSince: 2.453 }, storage: { current: { amount: 2.785, percentage: 99.5 }, lastYear: { amount: 1.032, percentage: 36.9 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.001, totalSince: 1.052 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.47, percentage: 73.5 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.967, percentage: 66.6 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data - updated with 25/26 data through April 7, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:7.999, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:82.482 },
];

export const getReportDate = (): string => "07-APR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 13.99 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 31.9% (36.7 MCM) — new season high, 12.4pp above last year\'s 19.5%. Arminou transfer: 13.99 MCM since October.',
      el: 'Ο Κούρης στο 31.9% (36.7 ΕΚΜ) — νέο μέγιστο σεζόν, 12.4μ.π. πάνω από πέρυσι (19.5%). Μεταφορά: 13.99 ΕΚΜ.',
      ru: 'Курис на 31.9% (36.7 МКМ) — новый сезонный максимум, +12.4пп выше прошлогодних 19.5%. Перекачка: 13.99 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 15.1% (2.59 MCM), still well below last year\'s 27.3%. Slow recovery with 2.29 MCM seasonal inflow.',
      el: 'Ο Καλαβασός στο 15.1% (2.59 ΕΚΜ), πολύ κάτω από πέρυσι (27.3%). Αργή ανάκαμψη, εισροή σεζόν 2.29 ΕΚΜ.',
      ru: 'Калавасос на 15.1% (2.59 МКМ), значительно ниже прошлогодних 27.3%. Медленное восстановление, приток 2.29 МКМ.',
    },
    'Lefkara': {
      en: 'Lefkara at 15.8% (2.19 MCM), still well below last year\'s 26.6%. Seasonal inflow 1.24 MCM — recovery remains sluggish.',
      el: 'Η Λεύκαρα στο 15.8% (2.19 ΕΚΜ), πολύ κάτω από πέρυσι (26.6%). Εισροή σεζόν 1.24 ΕΚΜ — αδύναμη ανάκαμψη.',
      ru: 'Лефкара на 15.8% (2.19 МКМ), значительно ниже прошлогодних 26.6%. Приток 1.24 МКМ — медленное восстановление.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 32.0% (4.96 MCM), closing on last year\'s 36.7%. Seasonal inflow 2.40 MCM — steady recovery continues.',
      el: 'Ο Διπόταμος στο 32.0% (4.96 ΕΚΜ), πλησιάζει πέρυσι (36.7%). Εισροή σεζόν 2.40 ΕΚΜ, σταθερή ανάκαμψη.',
      ru: 'Дипотамос на 32.0% (4.96 МКМ), приближается к прошлогодним 36.7%. Приток 2.40 МКМ — стабильное восстановление.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 42.7% (5.76 MCM) — new season high, 16.7pp above last year (26.0%). Strong daily inflow of 0.20 MCM.',
      el: 'Η Γερμασόγεια στο 42.7% (5.76 ΕΚΜ) — νέο μέγιστο σεζόν, 16.7μ.π. πάνω από πέρυσι (26.0%).',
      ru: 'Гермасойя на 42.7% (5.76 МКМ) — новый сезонный максимум, +16.7пп выше прошлого года (26.0%).',
    },
    'Arminou': {
      en: 'Arminou surged to 43.2% (1.86 MCM) — +2.9pp today — despite pumping 13.99 MCM to Kouris since October.',
      el: 'Ο Αρμίνου στο 43.2% (1.86 ΕΚΜ) — +2.9μ.π. σήμερα — παρά τη μεταφορά 13.99 ΕΚΜ στον [Κούρη](/el/dam/kouris/).',
      ru: 'Арминоу на 43.2% (1.86 МКМ) — +2.9пп за день — несмотря на перекачку 13.99 МКМ в Курис.',
    },
    'Polemidia': {
      en: 'Polemidia at 53.5% (1.82 MCM) — holding above 50%. Now 15.0pp above last year\'s 38.5%. New season high maintained.',
      el: 'Η Πολεμίδια στο 53.5% (1.82 ΕΚΜ) — παραμένει πάνω από 50%. Τώρα 15.0μ.π. πάνω από πέρυσι (38.5%).',
      ru: 'Полемидия на 53.5% (1.82 МКМ) — удерживается выше 50%. Сейчас +15.0пп выше прошлогодних 38.5%.',
    },
    'Achna': {
      en: 'Achna critically low at 2.1% (0.14 MCM), zero inflow all season. Far below last year\'s 18.1%. No recovery in sight.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.1% (0.14 ΕΚΜ), χωρίς εισροή. Πολύ κάτω από πέρυσι (18.1%). Καμία ανάκαμψη.',
      ru: 'Ахна критически низкая — 2.1% (0.14 МКМ), без притока за сезон. Далеко ниже прошлогодних 18.1%. Без перспектив.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 36.3% (19.0 MCM) — new season high, 11.5pp above last year\'s 24.8%. Inflow 16.40 MCM since October.',
      el: 'Ο Ασπρόκρεμμος στο 36.3% (19.0 ΕΚΜ), νέο μέγιστο σεζόν — 11.5μ.π. πάνω από πέρυσι (24.8%). Εισροή 16.40 ΕΚΜ.',
      ru: 'Аспрокреммос на 36.3% (19.0 МКМ) — новый сезонный максимум, +11.5пп выше прошлого года (24.8%). Приток 16.40 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 46.4% (7.97 MCM) — new season high, 20.4pp above last year\'s 26.0%. Inflow 7.76 MCM since October.',
      el: 'Ο Καννάβιου στο 46.4% (7.97 ΕΚΜ), νέο μέγιστο σεζόν — 20.4μ.π. πάνω από πέρυσι (26.0%). Εισροή 7.76 ΕΚΜ.',
      ru: 'Каннавиу на 46.4% (7.97 МКМ) — новый сезонный максимум, +20.4пп выше прошлогодних 26.0%. Приток 7.76 МКМ.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 83.8% (1.83 MCM), approaching 85%. Was 0% last year — exceptional recovery this season.',
      el: 'Ο Μαυροκόλυμπος στο 83.8% (1.83 ΕΚΜ), πλησιάζει 85%. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 83.8% (1.83 МКМ), приближается к 85%. Год назад 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 42.2% (10.13 MCM) — new season high, 17.7pp above last year\'s 24.5%. Holding above 10 MCM milestone.',
      el: 'Ο Εύρετου στο 42.2% (10.13 ΕΚΜ) — νέο μέγιστο σεζόν, 17.7μ.π. πάνω από πέρυσι (24.5%). Πάνω από 10 ΕΚΜ.',
      ru: 'Эвретоу на 42.2% (10.13 МКМ) — новый сезонный максимум, +17.7пп выше прошлогодних 24.5%. Выше отметки 10 МКМ.',
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
      en: 'Vyzakia crossed 75% — now at 76.0% (1.28 MCM), 27× last year\'s 2.8%. New season high, +2.4pp from yesterday.',
      el: 'Τα Βυζακιά ξεπέρασαν 75% — τώρα 76.0% (1.28 ΕΚΜ), 27× πέρυσι (2.8%). Νέο μέγιστο σεζόν, +2.4μ.π. χθες.',
      ru: 'Визакия пересекла 75% — теперь 76.0% (1.28 МКМ), в 27 раз выше прошлогодних 2.8%. Новый сезонный максимум.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM), overflowing since late March. Was 22.8% last year — 4.4× year-over-year recovery.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Από 22.8% πέρυσι — 4.4× ανάκαμψη.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ), переливается с конца марта. Был 22.8% год назад — восстановление в 4.4×.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), overflowing since mid-March. Up from 87.6% last year, at full capacity.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 87.6% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), переливается с середины марта. Рост с 87.6% год назад, полная мощность.',
    },
    'Tamassos': {
      en: 'Tamassos at 99.5% (2.79 MCM) — near capacity. Was 36.9% last year — recovery of 2.7× year over year.',
      el: 'Ο Ταμασός στο 99.5% (2.79 ΕΚΜ) — σχεδόν πλήρης. Από 36.9% πέρυσι — 2.7× υψηλότερα.',
      ru: 'Тамассос на 99.5% (2.79 МКМ) — почти полный. Год назад 36.9%, теперь в 2.7× выше.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), overflowing since late March. Up from 73.5% last year — 1.4× year-over-year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), υπερχείλιση από τέλη Μαρτίου. Αύξηση από 73.5% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), переливается с конца марта. Рост с 73.5% год назад — 1.4× год к году.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), overflowing since mid-March. Up from 66.6% last year — 1.5× improvement.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), υπερχείλιση από μέσα Μαρτίου. Αύξηση από 66.6% πέρυσι — 1.5× βελτίωση.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), переливается с середины марта. Рост с 66.6% год назад — улучшение в 1.5×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (31 Μαρτίου — 7 Απριλίου 2026)

Συνολική αποθήκευση **34.4%** (100.2 ΕΚΜ), άνοδος από 31.5% (91.7 ΕΚΜ) στις 31/3 — **+8.5 ΕΚΜ σε 7 ημέρες**. **Ορόσημο: τα αποθέματα ξεπέρασαν τα 100 ΕΚΜ για πρώτη φορά φέτος.** Τώρα **10.3μ.π. πάνω από πέρυσι** (24.1%). Εισροή σεζόν 25/26: 82.5 ΕΚΜ — 4.4× τη χρονιά 24/25. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 13.99 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Βυζακιά](/el/dam/vyzakia/) ξεπέρασαν 75%** (76.0%) — 27× πέρυσι (2.8%), +2.4μ.π. σήμερα, νέο μέγιστο σεζόν
- **[Αρμίνου](/el/dam/arminou/) 43.2%** (+2.9μ.π.) — παρά τη μεταφορά 13.99 ΕΚΜ στον [Κούρη](/el/dam/kouris/)
- [Γερμασόγεια](/el/dam/germasoyeia/) 42.7% — νέο μέγιστο σεζόν, 16.7μ.π. πάνω από πέρυσι
- [Μαυροκόλυμπος](/el/dam/mavrokolympos/) 83.8% — πλησιάζει 85%, από 0% πέρυσι
- [Ασπρόκρεμμος](/el/dam/asprokremmos/) 36.3% (19.0 ΕΚΜ) — νέο μέγιστο σεζόν
- [Κούρης](/el/dam/kouris/) 31.9% — νέο μέγιστο, 12.4μ.π. πάνω από πέρυσι
- 8 φράγματα υπερχειλίζουν στο 100%
- [Αχνά](/el/dam/achna/) παραμένει στο 2.1% χωρίς εισροή

**Στα μέσα:**
- [Αυξάνεται η στάθμη φραγμάτων — αλλά συνεχίζεται η σύσταση για εξοικονόμηση νερού](https://cyprus-mail.com/2026/04/06/dam-levels-improve-but-water-caution-urged) — Cyprus Mail
- [Σημαντικές εισροές νερού στα φράγματα](https://news.rik.cy/article/2026/4/2/semantikes-eisroes-nerou-sta-phragmata/) — RIK
- [Ρεκόρ εισροής νερού στα φράγματα τo τελευταίο τριήμερο](https://www.alphanews.live/cyprus/rekor-eisrois-nerou-sta-fragmata-to-teleftaio-triimero/) — AlphaNews
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (31 марта — 7 апреля 2026)

Общий запас **34.4%** (100.2 МКМ), рост с 31.5% (91.7 МКМ) на 31/3 — **+8.5 МКМ за 7 дней**. **Важный рубеж: запасы превысили 100 МКМ впервые в этом сезоне.** Запасы теперь **на 10.3пп выше прошлогодних** (24.1%). Приток сезона 25/26: 82.5 МКМ — в 4.4 раза больше засушливого сезона 24/25. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 13.99 МКМ.

**Основные изменения:**
- **[Визакия](/ru/dam/vyzakia/) пересекла 75%** (76.0%) — в 27 раз выше прошлогодних 2.8%, +2.4пп за день, новый сезонный максимум
- **[Арминоу](/ru/dam/arminou/) 43.2%** (+2.9пп) — несмотря на перекачку 13.99 МКМ в [Курис](/ru/dam/kouris/)
- [Гермасойя](/ru/dam/germasoyeia/) 42.7% — новый сезонный максимум, +16.7пп выше прошлого года
- [Мавроколимпос](/ru/dam/mavrokolympos/) 83.8% — приближается к 85%, год назад 0%
- [Аспрокреммос](/ru/dam/asprokremmos/) 36.3% (19.0 МКМ) — новый сезонный максимум
- [Курис](/ru/dam/kouris/) 31.9% — новый максимум, +12.4пп выше прошлого года
- 8 дамб переливаются на 100%
- [Ахна](/ru/dam/achna/) остаётся на 2.1% без притока

**В СМИ:**
- [Уровень воды в дамбах улучшается, но призыв к экономии воды остаётся](https://cyprus-mail.com/2026/04/06/dam-levels-improve-but-water-caution-urged) — Cyprus Mail
- [Уровень воды в водохранилищах Кипра приближается к 100 млн кубометров](https://ruscyprus.com/news/uroven-vody-v-vodohranilishchah-kipra/54512) — RusCyprus
- [Приток воды в дамбы Кипра — рекордный за 30 лет!](https://evropakipr.com/novosti/pritok-vody-v-damby-kipra-rekordnyy-za-30-let) — Европа Кипр
`;
  }
  return `
### Recent Changes (March 31 — April 7, 2026)

Total storage at **34.4%** (100.2 MCM), up from 31.5% (91.7 MCM) on Mar 31 — **+8.5 MCM in 7 days**. **Milestone: reserves crossed 100 MCM for the first time this season.** Now **10.3pp above last year** (24.1%). Season total: 82.5 MCM — 4.4× the 2024/25 drought year. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 13.99 MCM.

**Notable movements:**
- **[Vyzakia](/dam/vyzakia/) crossed 75%** (now 76.0%) — 27× last year's 2.8%, +2.4pp today, new season high
- **[Arminou](/dam/arminou/) at 43.2%** (+2.9pp) — despite pumping 13.99 MCM to [Kouris](/dam/kouris/)
- [Germasoyeia](/dam/germasoyeia/) 42.7% — new season high, 16.7pp above last year
- [Mavrokolympos](/dam/mavrokolympos/) 83.8% — approaching 85%, was 0% last year
- [Asprokremmos](/dam/asprokremmos/) 36.3% (19.0 MCM) — new season high
- [Kouris](/dam/kouris/) 31.9% — new season high, 12.4pp above last year
- 8 dams overflowing at 100%
- [Achna](/dam/achna/) still at 2.1% — zero inflow all season

**In the media:**
- [Dam levels improve but water caution urged](https://cyprus-mail.com/2026/04/06/dam-levels-improve-but-water-caution-urged) — Cyprus Mail
- [Amount of water in Cyprus' reservoirs nears 100m cubic metres](https://cyprus-mail.com/2026/04/02/amount-of-water-in-cyprus-reservoirs-nears-100m-cubic-metres) — Cyprus Mail
- [March rains boost Cyprus' water reserves as dam inflows reach 12.3 million cubic meters](https://famagusta-gazette.com/march-rains-boost-cyprus-water-reserves-as-dam-inflows-reach-12-3-million-cubic-meters/) — Famagusta Gazette
`;
};

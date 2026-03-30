import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for March 30, 2026 (parsed from 30-MAR-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 0.81, totalSince: 14.177 }, storage: { current: { amount: 33.48, percentage: 29.1 }, lastYear: { amount: 22.546, percentage: 19.6 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.182, totalSince: 1.566 }, storage: { current: { amount: 1.885, percentage: 11.0 }, lastYear: { amount: 4.695, percentage: 27.5 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.066, totalSince: 0.932 }, storage: { current: { amount: 1.895, percentage: 13.7 }, lastYear: { amount: 3.854, percentage: 27.8 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.126, totalSince: 1.843 }, storage: { current: { amount: 4.391, percentage: 28.3 }, lastYear: { amount: 5.584, percentage: 36.0 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.391, totalSince: 4.768 }, storage: { current: { amount: 4.455, percentage: 33.0 }, lastYear: { amount: 3.536, percentage: 26.2 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.668, totalSince: 13.183 }, storage: { current: { amount: 1.441, percentage: 33.5 }, lastYear: { amount: 2.54, percentage: 59.1 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.019, totalSince: 1.04 }, storage: { current: { amount: 1.677, percentage: 49.3 }, lastYear: { amount: 1.323, percentage: 38.9 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.143, percentage: 2.1 }, lastYear: { amount: 1.296, percentage: 19.1 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.707, totalSince: 15.027 }, storage: { current: { amount: 17.726, percentage: 33.8 }, lastYear: { amount: 13.207, percentage: 25.2 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.33, totalSince: 7.229 }, storage: { current: { amount: 7.516, percentage: 43.8 }, lastYear: { amount: 4.54, percentage: 26.4 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.015, totalSince: 0.82 }, storage: { current: { amount: 1.693, percentage: 77.7 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.37, totalSince: 7.33 }, storage: { current: { amount: 9.482, percentage: 39.5 }, lastYear: { amount: 5.947, percentage: 24.8 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.382, percentage: 38.6 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.372, percentage: 43.3 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.004, totalSince: 0.243 }, storage: { current: { amount: 0.298, percentage: 100.0 }, lastYear: { amount: 0.168, percentage: 56.4 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.114, totalSince: 1.013 }, storage: { current: { amount: 1.014, percentage: 60.0 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 1.413 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.328, percentage: 22.9 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.315, percentage: 86.8 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.078, totalSince: 2.4 }, storage: { current: { amount: 2.755, percentage: 98.4 }, lastYear: { amount: 1.041, percentage: 37.2 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.003, totalSince: 1.044 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.471, percentage: 73.6 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.984, percentage: 67.0 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
];

// Yearly inflow data - updated with 25/26 data through end of March 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:33.613, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:72.682 },
];

export const getReportDate = (): string => "30-MAR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 12.84 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 29.1% (33.5 MCM), new season high — 9.5pp above last year\'s 19.6%. Arminou transfer: 12.84 MCM since October.',
      el: 'Ο Κούρης στο 29.1% (33.5 ΕΚΜ), νέο μέγιστο σεζόν — 9.5μ.π. πάνω από πέρυσι (19.6%). Μεταφορά από Αρμίνου: 12.84 ΕΚΜ.',
      ru: 'Курис на 29.1% (33.5 МКМ) — новый сезонный максимум, +9.5пп выше прошлогодних 19.6%. Перекачка из Арминоу: 12.84 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 11.0% (1.89 MCM), still well below last year\'s 27.5%. Seasonal inflow 1.57 MCM.',
      el: 'Ο Καλαβασός στο 11.0% (1.89 ΕΚΜ), πολύ κάτω από πέρυσι (27.5%). Εισροή σεζόν 1.57 ΕΚΜ.',
      ru: 'Калавасос на 11.0% (1.89 МКМ), значительно ниже прошлогодних 27.5%. Приток за сезон 1.57 МКМ.',
    },
    'Lefkara': {
      en: 'Lefkara at 13.7% (1.90 MCM), still well below last year\'s 27.8%. Seasonal inflow 0.93 MCM.',
      el: 'Η Λεύκαρα στο 13.7% (1.90 ΕΚΜ), πολύ κάτω από πέρυσι (27.8%). Εισροή σεζόν 0.93 ΕΚΜ.',
      ru: 'Лефкара на 13.7% (1.90 МКМ), значительно ниже прошлогодних 27.8%. Приток за сезон 0.93 МКМ.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 28.3% (4.39 MCM), below last year\'s 36.0%. Seasonal inflow 1.84 MCM.',
      el: 'Ο Διπόταμος στο 28.3% (4.39 ΕΚΜ), κάτω από πέρυσι (36.0%). Εισροή σεζόν 1.84 ΕΚΜ.',
      ru: 'Дипотамос на 28.3% (4.39 МКМ), ниже прошлогодних 36.0%. Сезонный приток 1.84 МКМ.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 33.0% (4.46 MCM), new season high — 6.8pp above last year (26.2%). Rebounded from 14% in two weeks.',
      el: 'Η Γερμασόγεια στο 33.0% (4.46 ΕΚΜ), νέο μέγιστο σεζόν — 6.8μ.π. πάνω από πέρυσι (26.2%). Ανάκαμψη από 14% σε δύο εβδομάδες.',
      ru: 'Гермасойя на 33.0% (4.46 МКМ) — новый сезонный максимум, +6.8пп выше прошлогодних 26.2%. Рост с 14% за две недели.',
    },
    'Arminou': {
      en: 'Arminou dropped to 33.5% (1.44 MCM) as transfers to Kouris intensify — 12.84 MCM pumped since October.',
      el: 'Ο Αρμίνου μειώθηκε στο 33.5% (1.44 ΕΚΜ) λόγω εντατικής μεταφοράς στον Κούρη — 12.84 ΕΚΜ από Οκτώβριο.',
      ru: 'Арминоу упал до 33.5% (1.44 МКМ) из-за интенсивной перекачки в Курис — 12.84 МКМ с октября.',
    },
    'Polemidia': {
      en: 'Polemidia at 49.3% (1.68 MCM), approaching 50% — new season high. Well above last year\'s 38.9%.',
      el: 'Η Πολεμίδια στο 49.3% (1.68 ΕΚΜ), πλησιάζει 50% — νέο μέγιστο σεζόν. Πολύ πάνω από πέρυσι (38.9%).',
      ru: 'Полемидия на 49.3% (1.68 МКМ), приближается к 50% — новый сезонный максимум. Значительно выше прошлогодних 38.9%.',
    },
    'Achna': {
      en: 'Achna critically low at 2.1% (0.14 MCM), zero inflow all season. Far below last year\'s 19.1%.',
      el: 'Η Αχνά κρίσιμα χαμηλά στο 2.1% (0.14 ΕΚΜ), χωρίς εισροή. Πολύ κάτω από πέρυσι (19.1%).',
      ru: 'Ахна критически низкая — 2.1% (0.14 МКМ), без притока за сезон. Далеко ниже прошлогодних 19.1%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 33.8% (17.7 MCM), new season high — 8.6pp above last year. Inflow 15.0 MCM since October.',
      el: 'Ο Ασπρόκρεμμος στο 33.8% (17.7 ΕΚΜ), νέο μέγιστο σεζόν — 8.6μ.π. πάνω από πέρυσι. Εισροή 15.0 ΕΚΜ.',
      ru: 'Аспрокреммос на 33.8% (17.7 МКМ) — новый сезонный максимум, +8.6пп выше прошлого года. Приток 15.0 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 43.8% (7.52 MCM), new season high — 17.4pp above last year\'s 26.4%. Inflow 7.23 MCM.',
      el: 'Ο Καννάβιου στο 43.8% (7.52 ΕΚΜ), νέο μέγιστο σεζόν — 17.4μ.π. πάνω από πέρυσι (26.4%). Εισροή 7.23 ΕΚΜ.',
      ru: 'Каннавиу на 43.8% (7.52 МКМ) — новый сезонный максимум, +17.4пп выше прошлогодних 26.4%. Приток 7.23 МКМ.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 77.7% (1.69 MCM), new season high. Was 0% last year — exceptional recovery.',
      el: 'Ο Μαυροκόλυμπος στο 77.7% (1.69 ΕΚΜ), νέο μέγιστο σεζόν. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 77.7% (1.69 МКМ) — новый сезонный максимум. Год назад был на 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 39.5% (9.48 MCM), new season high — 14.7pp above last year\'s 24.8%. Inflow 7.33 MCM.',
      el: 'Ο Εύρετου στο 39.5% (9.48 ΕΚΜ), νέο μέγιστο σεζόν — 14.7μ.π. πάνω από πέρυσι (24.8%). Εισροή 7.33 ΕΚΜ.',
      ru: 'Эвретоу на 39.5% (9.48 МКМ) — новый сезонный максимум, +14.7пп выше прошлогодних 24.8%. Приток 7.33 МКМ.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), up from 38.6% last year. Overflowing.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), αύξηση από 38.6% πέρυσι. Υπερχείλιση.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), рост с 38.6% год назад. Переливается.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), up from 43.3% last year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), αύξηση από 43.3% πέρυσι.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), рост с 43.3% год назад.',
    },
    'Agia Marina': {
      en: 'Agia Marina overflowed — now at 100% (0.30 MCM), up from 56.4% last year. Overflowed on March 28.',
      el: 'Η Αγία Μαρίνα υπερχείλισε — στο 100% (0.30 ΕΚΜ), αύξηση από 56.4% πέρυσι. Υπερχείλισε στις 28 Μαρτίου.',
      ru: 'Агия Марина переполнилась — 100% (0.30 МКМ), рост с 56.4% год назад. Переполнилась 28 марта.',
    },
    'Vyzakia': {
      en: 'Vyzakia at 60.0% (1.01 MCM), 21\u00d7 last year\'s 2.8%. Jumped 6.7pp in three days.',
      el: 'Τα Βυζακιά στο 60.0% (1.01 ΕΚΜ), 21\u00d7 πέρυσι (2.8%). Άλμα 6.7μ.π. σε τρεις ημέρες.',
      ru: 'Визакия на 60.0% (1.01 МКМ), в 21 раз выше прошлогодних 2.8%. Скачок на 6.7пп за три дня.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM), 4.4\u00d7 last year\'s 22.9%. Overflowing since late March.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ), 4.4\u00d7 πέρυσι (22.9%). Υπερχείλιση από τέλη Μαρτίου.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ), в 4.4 раза выше прошлогодних 22.9%. Переливается с конца марта.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), up from 86.8% last year.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), αύξηση από 86.8% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), рост с 86.8% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 98.4% (2.76 MCM), near capacity — 2.6\u00d7 last year\'s 37.2%. Expected to overflow soon.',
      el: 'Ο Ταμασός στο 98.4% (2.76 ΕΚΜ), σχεδόν γεμάτος — 2.6\u00d7 πέρυσι (37.2%). Αναμένεται υπερχείλιση σύντομα.',
      ru: 'Тамассос на 98.4% (2.76 МКМ), почти заполнен — в 2.6 раза выше прошлогодних 37.2%. Ожидается переполнение.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), up from 73.6% last year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), αύξηση από 73.6% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), рост с 73.6% год назад.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), up from 67.0% last year. Seasonal inflow 2.64 MCM.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), αύξηση από 67.0% πέρυσι. Εισροή σεζόν 2.64 ΕΚΜ.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), рост с 67.0% год назад. Приток за сезон 2.64 МКМ.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (23 — 30 Μαρτίου 2026)

Συνολική αποθήκευση **31.2%** (90.7 ΕΚΜ), αύξηση από 26.9% (78.1 ΕΚΜ) στις 23/3 — **+12.6 ΕΚΜ σε 7 ημέρες**. Τα αποθέματα τώρα **6.9μ.π. πάνω από πέρυσι** (24.3%). Εισροή σεζόν 25/26: 72.7 ΕΚΜ — 3.9× ολόκληρη τη χρονιά 24/25. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 12.84 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Αγία Μαρίνα](/el/dam/agia-marina/) ξεπέρασε 100%** — υπερχείλισε στις 28/3, τρίτο φράγμα Χρυσοχούς. Τώρα 8 φράγματα πλήρη.
- **[Βυζακιά](/el/dam/vyzakia/) 60.0%** (+6.7μ.π.) — 21× πέρυσι (2.8%), νέο υψηλό σεζόν
- **[Κούρης](/el/dam/kouris/) 29.1%** (33.5 ΕΚΜ) — νέο μέγιστο σεζόν, +9.5μ.π. πάνω από πέρυσι
- **[Γερμασόγεια](/el/dam/germasoyeia/) 33.0%** — νέο μέγιστο, +6.8μ.π. πάνω από πέρυσι
- **[Αρμίνου](/el/dam/arminou/) μειώθηκε στο 33.5%** (-7.1μ.π.) — 12.84 ΕΚΜ στον [Κούρη](/el/dam/kouris/) φέτος
- [Πολεμίδια](/el/dam/polemidia/) 49.3% — ένα βήμα από το 50%, νέο μέγιστο σεζόν
- [Ταμασός](/el/dam/tamassos/) 98.4% — αναμένεται υπερχείλιση σύντομα
- [Αχνά](/el/dam/achna/) παραμένει στο 2.1% χωρίς εισροή

**Στα μέσα:**
- [Άλλο ένα φράγμα της Πάφου υπερχείλισε](https://cyprus-mail.com/2026/03/28/one-more-paphos-dam-overflows) — Cyprus Mail
- [Υψίστης σημασίας η κατασκευή φραγμάτων, λέει η Επίτροπος Περιβάλλοντος](https://www.taxidromos24.com/2026/03/28/%CF%85%CF%88%CE%AF%CF%83%CF%84%CE%B7%CF%82-%CF%83%CE%B7%CE%BC%CE%B1%CF%83%CE%AF%CE%B1%CF%82-%CF%84%CE%B1-%CF%86%CF%81%CE%AC%CE%B3%CE%BC%CE%B1%CF%84%CE%B1-%CF%83%CF%84%CE%B7%CE%BD-%CE%BA%CF%8D%CF%80/) — Taxidromos24
- [Σημαντική αύξηση εισροών — Στο 27% πλέον η πληρότητα](https://www.sigmalive.com/news/local/1308295/simantiki-auksisi-eisroon-sta-fragmata-sto-27-pleon-i-plirotita) — SigmaLive
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (23 — 30 марта 2026)

Общий запас **31.2%** (90.7 МКМ), рост с 26.9% (78.1 МКМ) на 23/3 — **+12.6 МКМ за 7 дней**. Запасы теперь **на 6.9пп выше прошлогодних** (24.3%). Приток сезона 25/26: 72.7 МКМ — в 3.9 раза больше всего сезона 24/25. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 12.84 МКМ.

**Основные изменения:**
- **[Агия Марина](/ru/dam/agia-marina/) достигла 100%** — переполнилась 28 марта, третья дамба Хрисоху. Теперь 8 дамб заполнены.
- **[Визакия](/ru/dam/vyzakia/) 60.0%** (+6.7пп) — в 21 раз выше прошлогодних 2.8%, новый сезонный максимум
- **[Курис](/ru/dam/kouris/) 29.1%** (33.5 МКМ) — новый сезонный максимум, +9.5пп выше прошлого года
- **[Гермасойя](/ru/dam/germasoyeia/) 33.0%** — новый максимум, +6.8пп выше прошлого года
- **[Арминоу](/ru/dam/arminou/) упал до 33.5%** (-7.1пп) — 12.84 МКМ перекачано в [Курис](/ru/dam/kouris/) за сезон
- [Полемидия](/ru/dam/polemidia/) 49.3% — один шаг от 50%, новый сезонный максимум
- [Тамассос](/ru/dam/tamassos/) 98.4% — ожидается переполнение в ближайшее время
- [Ахна](/ru/dam/achna/) остаётся на 2.1% без притока

**В СМИ:**
- [Третья дамба переполнилась в Пафосе](https://lenta.cy/tretja-damba-perepolnilas-v-pafose/) — Lenta.cy
- [На Кипре резко вырос приток воды в водохранилищах](https://ruscyprus.com/news/na-kipre-rezko-vyros-pritok-vodyv/54110) — RusCyprus
- [На Кипре — сезон дождей, но власти утверждают, что засуха продолжается](https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god) — Европа Кипр
`;
  }
  return `
### Recent Changes (March 23 — 30, 2026)

Total storage at **31.2%** (90.7 MCM), up from 26.9% (78.1 MCM) on Mar 23 — **+12.6 MCM in 7 days**. Reserves now **6.9pp above last year** (24.3%). Total 25/26 inflow: 72.7 MCM — 3.9× the entire 2024/25 drought season. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 12.84 MCM since October.

**Notable movements:**
- **[Agia Marina](/dam/agia-marina/) overflowed** — reached 100% on March 28, the third Chrysochou dam to overflow. Now 8 dams at 100%.
- **[Vyzakia](/dam/vyzakia/) at 60.0%** (+6.7pp) — 21× last year's 2.8%, new season high
- **[Kouris](/dam/kouris/) at 29.1%** (33.5 MCM) — new season high, 9.5pp above last year
- **[Germasoyeia](/dam/germasoyeia/) at 33.0%** — new season high, 6.8pp above last year
- **[Arminou](/dam/arminou/) dropped to 33.5%** (-7.1pp) — 12.84 MCM pumped to [Kouris](/dam/kouris/) this season
- [Polemidia](/dam/polemidia/) at 49.3% — one step from 50%, new season high
- [Tamassos](/dam/tamassos/) at 98.4% — expected to overflow soon
- [Achna](/dam/achna/) still at 2.1% — zero inflow all season

**In the media:**
- [One more Paphos dam overflows](https://cyprus-mail.com/2026/03/28/one-more-paphos-dam-overflows) — Cyprus Mail
- [Dam construction of utmost importance, says Environment Commissioner](https://www.taxidromos24.com/2026/03/28/%CF%85%CF%88%CE%AF%CF%83%CF%84%CE%B7%CF%82-%CF%83%CE%B7%CE%BC%CE%B1%CF%83%CE%AF%CE%B1%CF%82-%CF%84%CE%B1-%CF%86%CF%81%CE%AC%CE%B3%CE%BC%CE%B1%CF%84%CE%B1-%CF%83%CF%84%CE%B7%CE%BD-%CE%BA%CF%8D%CF%80/) — Taxidromos24
- [Rainfall offers limited relief, Cyprus water reserves at 27 per cent capacity](https://cyprus-mail.com/2026/03/23/rainfall-offers-limited-relief-as-cyprus-water-reserves-remain-under-strain) — Cyprus Mail
`;
};

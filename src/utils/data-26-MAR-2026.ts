import { Reservoir, YearlyInflowData } from "../types";

// Reservoir data for March 26, 2026 (parsed from 26-MAR-2026 UK.xlsx)
export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115.0, inflow: { last24Hours: 1.011, totalSince: 13.063 }, storage: { current: { amount: 30.943, percentage: 26.9 }, lastYear: { amount: 22.824, percentage: 19.8 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.172, totalSince: 1.312 }, storage: { current: { amount: 1.641, percentage: 9.6 }, lastYear: { amount: 4.726, percentage: 27.6 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.066, totalSince: 0.842 }, storage: { current: { amount: 1.809, percentage: 13.1 }, lastYear: { amount: 3.936, percentage: 28.4 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.143, totalSince: 1.674 }, storage: { current: { amount: 4.214, percentage: 27.2 }, lastYear: { amount: 5.561, percentage: 35.9 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.609, totalSince: 4.158 }, storage: { current: { amount: 3.854, percentage: 28.5 }, lastYear: { amount: 3.568, percentage: 26.4 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.734, totalSince: 12.191 }, storage: { current: { amount: 1.975, percentage: 45.9 }, lastYear: { amount: 2.518, percentage: 58.6 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.143, totalSince: 0.976 }, storage: { current: { amount: 1.614, percentage: 47.5 }, lastYear: { amount: 1.331, percentage: 39.1 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.0, totalSince: 0.0 }, storage: { current: { amount: 0.142, percentage: 2.1 }, lastYear: { amount: 1.361, percentage: 20.0 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.805, totalSince: 13.964 }, storage: { current: { amount: 16.736, percentage: 32.0 }, lastYear: { amount: 13.33, percentage: 25.5 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.436, totalSince: 6.717 }, storage: { current: { amount: 7.043, percentage: 41.0 }, lastYear: { amount: 4.578, percentage: 26.7 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.023, totalSince: 0.796 }, storage: { current: { amount: 1.577, percentage: 72.3 }, lastYear: { amount: 0.0, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24.0, inflow: { last24Hours: 0.508, totalSince: 6.783 }, storage: { current: { amount: 8.943, percentage: 37.3 }, lastYear: { amount: 5.986, percentage: 24.9 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.0, totalSince: 1.001 }, storage: { current: { amount: 0.99, percentage: 100.0 }, lastYear: { amount: 0.375, percentage: 37.9 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.0, totalSince: 0.786 }, storage: { current: { amount: 0.86, percentage: 100.0 }, lastYear: { amount: 0.37, percentage: 43.0 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.021, totalSince: 0.231 }, storage: { current: { amount: 0.286, percentage: 96.0 }, lastYear: { amount: 0.165, percentage: 55.4 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.075, totalSince: 0.861 }, storage: { current: { amount: 0.862, percentage: 51.0 }, lastYear: { amount: 0.048, percentage: 2.8 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.0, totalSince: 1.413 }, storage: { current: { amount: 1.43, percentage: 100.0 }, lastYear: { amount: 0.33, percentage: 23.1 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.0, totalSince: 0.311 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.315, percentage: 86.8 } }, maxStorage: { amount: 0.32, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.177, totalSince: 2.261 }, storage: { current: { amount: 2.62, percentage: 93.6 }, lastYear: { amount: 1.051, percentage: 37.5 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2.0, inflow: { last24Hours: 0.002, totalSince: 1.04 }, storage: { current: { amount: 2.0, percentage: 100.0 }, lastYear: { amount: 1.473, percentage: 73.7 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.0, totalSince: 2.636 }, storage: { current: { amount: 4.454, percentage: 100.0 }, lastYear: { amount: 2.995, percentage: 67.2 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:28.01, April:0.0, May:0.0, June:0.0, July:0.0, "Aug-Sep":0.0 }, total:67.079 },
];

export const getReportDate = (): string => "26-MAR-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 11.28 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris at 26.9% (30.9 MCM), new season high — 7pp above last year\'s 19.8%. Transfer from Arminou: 11.28 MCM since October.',
      el: 'Ο Κούρης στο 26.9% (30.9 ΕΚΜ), νέο μέγιστο σεζόν — 7μ.π. πάνω από πέρυσι (19.8%). Μεταφορά από Αρμίνου: 11.28 ΕΚΜ.',
      ru: 'Курис на 26.9% (30.9 МКМ) — новый сезонный максимум, +7пп выше прошлогодних 19.8%. Перекачка из Арминоу: 11.28 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos at 9.6% (1.6 MCM), well below last year\'s 27.6%. Seasonal inflow 1.31 MCM.',
      el: 'Ο Καλαβασός στο 9.6% (1.6 ΕΚΜ), πολύ κάτω από πέρυσι (27.6%). Εισροή σεζόν 1.31 ΕΚΜ.',
      ru: 'Калавасос на 9.6% (1.6 МКМ), значительно ниже прошлогодних 27.6%. Приток за сезон 1.31 МКМ.',
    },
    'Lefkara': {
      en: 'Lefkara at 13.1% (1.8 MCM), still well below last year\'s 28.4%. Seasonal inflow 0.84 MCM.',
      el: 'Η Λεύκαρα στο 13.1% (1.8 ΕΚΜ), πολύ κάτω από πέρυσι (28.4%). Εισροή σεζόν 0.84 ΕΚΜ.',
      ru: 'Лефкара на 13.1% (1.8 МКМ), значительно ниже прошлогодних 28.4%. Приток за сезон 0.84 МКМ.',
    },
    'Dipotamos': {
      en: 'Dipotamos at 27.2% (4.2 MCM), below last year\'s 35.9%. Seasonal inflow 1.67 MCM.',
      el: 'Ο Διπόταμος στο 27.2% (4.2 ΕΚΜ), κάτω από πέρυσι (35.9%). Εισροή σεζόν 1.67 ΕΚΜ.',
      ru: 'Дипотамос на 27.2% (4.2 МКМ), ниже прошлогодних 35.9%. Сезонный приток 1.67 МКМ.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia at 28.5% (3.85 MCM), now exceeds last year\'s 26.4%. New season high — exceeded previous max.',
      el: 'Η Γερμασόγεια στο 28.5% (3.85 ΕΚΜ), τώρα ξεπερνά πέρυσι (26.4%). Νέο μέγιστο σεζόν.',
      ru: 'Гермасойя на 28.5% (3.85 МКМ), превысила прошлогодние 26.4%. Новый сезонный максимум.',
    },
    'Arminou': {
      en: 'Arminou at 45.9% (1.98 MCM), dropped despite high inflow due to pumping to Kouris — 11.28 MCM transferred since October.',
      el: 'Ο Αρμίνου στο 45.9% (1.98 ΕΚΜ), μειώθηκε παρά υψηλή εισροή λόγω μεταφοράς στον Κούρη — 11.28 ΕΚΜ από Οκτώβριο.',
      ru: 'Арминоу на 45.9% (1.98 МКМ), снизился несмотря на приток — перекачка в Курис: 11.28 МКМ с октября.',
    },
    'Polemidia': {
      en: 'Polemidia at 47.5% (1.61 MCM), new season high — exceeded previous max. Above last year\'s 39.1%.',
      el: 'Η Πολεμίδια στο 47.5% (1.61 ΕΚΜ), νέο μέγιστο σεζόν — ξεπέρασε προηγούμενο ρεκόρ. Πάνω από πέρυσι (39.1%).',
      ru: 'Полемидия на 47.5% (1.61 МКМ), новый сезонный максимум — выше прошлогодних 39.1%.',
    },
    'Achna': {
      en: 'Achna critically low at 2.1% (0.14 MCM), zero inflow this season. Far below last year\'s 20.0%.',
      el: 'Η Αχνα κρίσιμα χαμηλά στο 2.1% (0.14 ΕΚΜ), χωρίς εισροή. Πολύ κάτω από πέρυσι (20.0%).',
      ru: 'Ахна критически низкая — 2.1% (0.14 МКМ), без притока за сезон. Далеко ниже прошлогодних 20.0%.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos at 32.0% (16.74 MCM), new season high — exceeded last year\'s peak. Inflow 13.96 MCM since October.',
      el: 'Ο Ασπρόκρεμμος στο 32.0% (16.74 ΕΚΜ), νέο μέγιστο σεζόν — ξεπέρασε το περσινό ρεκόρ. Εισροή 13.96 ΕΚΜ.',
      ru: 'Аспрокреммос на 32.0% (16.74 МКМ) — новый сезонный максимум, выше прошлогоднего пика. Приток 13.96 МКМ.',
    },
    'Kannaviou': {
      en: 'Kannaviou at 41.0% (7.04 MCM), new season high — 14pp above last year\'s 26.7%. Inflow 6.72 MCM.',
      el: 'Ο Καννάβιου στο 41.0% (7.04 ΕΚΜ), νέο μέγιστο σεζόν — 14μ.π. πάνω από πέρυσι (26.7%). Εισροή 6.72 ΕΚΜ.',
      ru: 'Каннавиу на 41.0% (7.04 МКМ) — новый сезонный максимум, +14пп выше прошлогодних 26.7%. Приток 6.72 МКМ.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos at 72.3% (1.58 MCM), new season high. Was 0% last year — exceptional recovery.',
      el: 'Ο Μαυροκόλυμπος στο 72.3% (1.58 ΕΚΜ), νέο μέγιστο σεζόν. Από 0% πέρυσι — εξαιρετική ανάκαμψη.',
      ru: 'Мавроколимпос на 72.3% (1.58 МКМ) — новый сезонный максимум. Год назад был на 0% — исключительное восстановление.',
    },
    'Evretou': {
      en: 'Evretou at 37.3% (8.94 MCM), new season high — 12pp above last year\'s 24.9%. Inflow 6.78 MCM.',
      el: 'Ο Εύρετου στο 37.3% (8.94 ΕΚΜ), νέο μέγιστο σεζόν — 12μ.π. πάνω από πέρυσι (24.9%). Εισροή 6.78 ΕΚΜ.',
      ru: 'Эвретоу на 37.3% (8.94 МКМ) — новый сезонный максимум, +12пп выше прошлогодних 24.9%. Приток 6.78 МКМ.',
    },
    'Argaka': {
      en: 'Argaka full at 100% (0.99 MCM), up from 37.9% last year. Overflowing.',
      el: 'Η Αργάκα γεμάτη στο 100% (0.99 ΕΚΜ), αύξηση από 37.9% πέρυσι. Υπερχείλιση.',
      ru: 'Аргака заполнена на 100% (0.99 МКМ), рост с 37.9% год назад. Переливается.',
    },
    'Pomos': {
      en: 'Pomos full at 100% (0.86 MCM), up from 43.0% last year.',
      el: 'Ο Πόμος γεμάτος στο 100% (0.86 ΕΚΜ), αύξηση από 43.0% πέρυσι.',
      ru: 'Помос заполнен на 100% (0.86 МКМ), рост с 43.0% год назад.',
    },
    'Agia Marina': {
      en: 'Agia Marina at 96.0% (0.29 MCM), near full capacity. Up from 55.4% last year.',
      el: 'Η Αγία Μαρίνα στο 96.0% (0.29 ΕΚΜ), σχεδόν γεμάτη. Αύξηση από 55.4% πέρυσι.',
      ru: 'Агия Марина на 96.0% (0.29 МКМ), почти заполнена. Рост с 55.4% год назад.',
    },
    'Vyzakia': {
      en: 'Vyzakia crossed 50% at 51.0% (0.86 MCM), 18× last year\'s 2.8%. Remarkable recovery.',
      el: 'Τα Βυζακιά ξεπέρασαν το 50% στο 51.0% (0.86 ΕΚΜ), 18× πέρυσι (2.8%). Εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия превысила 50% — на 51.0% (0.86 МКМ), в 18 раз выше прошлогодних 2.8%. Замечательное восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos full at 100% (1.43 MCM), 4.3× last year\'s 23.1%. Overflowing since late March.',
      el: 'Ο Ξυλιάτος γεμάτος στο 100% (1.43 ΕΚΜ), 4.3× πέρυσι (23.1%). Υπερχείλιση από τέλη Μαρτίου.',
      ru: 'Ксилиатос заполнен на 100% (1.43 МКМ), в 4.3 раза выше прошлогодних 23.1%. Переливается с конца марта.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis full at 100% (0.36 MCM), up from 86.8% last year.',
      el: 'Ο Καλοπαναγιώτης γεμάτος στο 100% (0.36 ΕΚΜ), αύξηση από 86.8% πέρυσι.',
      ru: 'Калопанайотис заполнен на 100% (0.36 МКМ), рост с 86.8% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos at 93.6% (2.62 MCM), 2.5× last year\'s 37.5%. Approaching full capacity.',
      el: 'Ο Ταμασός στο 93.6% (2.62 ΕΚΜ), 2.5× πέρυσι (37.5%). Πλησιάζει χωρητικότητα.',
      ru: 'Тамассос на 93.6% (2.62 МКМ), в 2.5 раза выше прошлогодних 37.5%. Приближается к полной вместимости.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta full at 100% (2.0 MCM), up from 73.7% last year.',
      el: 'Η Κλήρου-Μαλούντα γεμάτη στο 100% (2.0 ΕΚΜ), αύξηση από 73.7% πέρυσι.',
      ru: 'Клиру-Малунта заполнена на 100% (2.0 МКМ), рост с 73.7% год назад.',
    },
    'Solea': {
      en: 'Solea full at 100% (4.45 MCM), up from 67.2% last year. Seasonal inflow 2.64 MCM.',
      el: 'Η Σολέα γεμάτη στο 100% (4.45 ΕΚΜ), αύξηση από 67.2% πέρυσι. Εισροή σεζόν 2.64 ΕΚΜ.',
      ru: 'Солеа заполнена на 100% (4.45 МКМ), рост с 67.2% год назад. Приток за сезон 2.64 МКМ.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (18 — 26 Μαρτίου 2026)

Συνολική αποθήκευση **29.3%** (85.3 ΕΚΜ), αύξηση από 22.2% (64.7 ΕΚΜ) στις 18/3 — +20.6 ΕΚΜ σε 8 ημέρες. Τα αποθέματα τώρα **4.8μ.π. πάνω από πέρυσι** (24.5%, 71.3 ΕΚΜ). Εισροή σεζόν 25/26: 67.1 ΕΚΜ — 3.6× από τη ξηρή χρονιά 24/25. Μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/): 11.28 ΕΚΜ.

**Αξιοσημείωτα:**
- **[Κούρης](/el/dam/kouris/) 26.9%** (30.9 ΕΚΜ) — +2.1 ΕΚΜ σε 2 ημέρες, νέο μέγιστο σεζόν, +7μ.π. πάνω από πέρυσι
- **[Ασπρόκρεμμος](/el/dam/asprokremmos/) 32.0%** (16.74 ΕΚΜ) — νέο μέγιστο, 1.4 ΕΚΜ πάνω από περσινό ρεκόρ
- **[Γερμασόγεια](/el/dam/germasoyeia/) 28.5%** — ξεπέρασε πέρυσι (26.4%), υπερδιπλασιάστηκε σε 8 ημέρες
- **[Βυζακιά](/el/dam/vyzakia/) ξεπέρασαν 50%** — 51.0%, 18× πέρυσι (2.8%)
- **[Πολεμίδια](/el/dam/polemidia/) 47.5%** — νέο ρεκόρ σεζόν, πάνω από πέρυσι (39.1%)
- [Αρμίνου](/el/dam/arminou/) μειώθηκε στο 45.9% λόγω μεταφοράς — 11.28 ΕΚΜ στον [Κούρη](/el/dam/kouris/) φέτος
- [Αχνα](/el/dam/achna/) παραμένει στο 2.1% χωρίς εισροή

Η μείωση υδροδότησης 10% παραμένει σε ισχύ. Τα μικρότερα φράγματα Τροόδους (Ξυλιάτος, Καλοπαναγιώτης, Αργάκα, Πόμος) παραμένουν γεμάτα στο 100%.

**Στα μέσα:**
- [Σημαντική αύξηση εισροών – Στο 27% πλέον η πληρότητα](https://www.sigmalive.com/news/local/1308295/simantiki-auksisi-eisroon-sta-fragmata-sto-27-pleon-i-plirotita) — SigmaLive
- [Αισιόδοξο το ΤΑΥ για καλές εισροές ως τέλος Μαρτίου](https://cyprustimes.com/koinonia/aisiodoxo-to-taf-gia-kales-eisroes-os-telos-martiou-se-kalyteri-moira-apo-persi/) — CyprusTimes
- [«Ανάσα» για τα φράγματα μετά την κακοκαιρία](https://www.24sports.com.cy/gr/news/nea/koinonia/anasa-gia-ta-fragmata-meta-tin-kakokairia-pinakas) — 24Sports
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (18 — 26 марта 2026)

Общий запас **29.3%** (85.3 МКМ), рост с 22.2% (64.7 МКМ) на 18/3 — +20.6 МКМ за 8 дней. Запасы теперь **на 4.8пп выше прошлогодних** (24.5%, 71.3 МКМ). Приток сезона 25/26: 67.1 МКМ — в 3.6 раза больше засушливого 24/25. Перекачка [Арминоу](/ru/dam/arminou/)→[Курис](/ru/dam/kouris/): 11.28 МКМ.

**Основные изменения:**
- **[Курис](/ru/dam/kouris/) 26.9%** (30.9 МКМ) — +2.1 МКМ за 2 дня, новый сезонный максимум, +7пп выше прошлого года
- **[Аспрокреммос](/ru/dam/asprokremmos/) 32.0%** (16.74 МКМ) — новый максимум, на 1.4 МКМ выше прошлогоднего пика
- **[Гермасойя](/ru/dam/germasoyeia/) 28.5%** — превысила прошлый год (26.4%), более чем удвоилась за 8 дней
- **[Визакия](/ru/dam/vyzakia/) превысила 50%** — 51.0%, в 18 раз выше прошлогодних 2.8%
- **[Полемидия](/ru/dam/polemidia/) 47.5%** — новый рекорд сезона, выше прошлогодних 39.1%
- [Арминоу](/ru/dam/arminou/) снизился до 45.9% из-за перекачки — 11.28 МКМ в [Курис](/ru/dam/kouris/) за сезон
- [Ахна](/ru/dam/achna/) остаётся на 2.1% без притока

Сокращение водоснабжения на 10% продолжает действовать. Малые дамбы Троодоса (Ксилиатос, Калопанайотис, Аргака, Помос) остаются заполненными на 100%.

**В СМИ:**
- [На Кипре — сезон дождей, но власти утверждают, что засуха продолжается](https://evropakipr.com/istorii/na-kipre-sezon-dozhdey-pochemu-vlasti-utverzhdayut-chto-na-ostrove-chetvertyy-god) — Европа Кипр
- [Кипр не остался «без воды»](https://russiancyprus.news/news/society/cyprus-has-not-been-left-without-water/) — Russian Cyprus
- [Кипр переживает худший водный кризис за десятилетие](https://cyprusbutterfly.com.cy/news/kipr-perezhivaet-xudshij-vodnyij-krizis) — Cyprus Butterfly
`;
  }
  return `
### Recent Changes (March 18 — 26, 2026)

Total storage at **29.3%** (85.3 MCM), up from 22.2% (64.7 MCM) on Mar 18 — +20.6 MCM in 8 days. Reserves now **4.8pp above last year** (24.5%, 71.3 MCM). Total 25/26 inflow: 67.1 MCM — 3.6× the 2024/25 drought season. [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer: 11.28 MCM since October.

**Notable movements:**
- **[Kouris](/dam/kouris/) at 26.9%** (30.9 MCM) — +2.1 MCM in 2 days, new season high, 7pp above last year
- **[Asprokremmos](/dam/asprokremmos/) at 32.0%** (16.74 MCM) — new season high, 1.4 MCM above last year's peak
- **[Germasoyeia](/dam/germasoyeia/) at 28.5%** — now exceeds last year (26.4%), more than doubled in 8 days
- **[Vyzakia](/dam/vyzakia/) crossed 50%** — 51.0%, 18× last year's 2.8%
- **[Polemidia](/dam/polemidia/) at 47.5%** — new season high, above last year's 39.1%
- [Arminou](/dam/arminou/) dropped to 45.9% despite heavy inflow — 11.28 MCM pumped to [Kouris](/dam/kouris/) this season
- [Achna](/dam/achna/) remains at 2.1% with zero inflow

The 10% island-wide water supply cut remains in effect. Smaller Troodos dams (Xyliatos, Kalopanagiotis, Argaka, Pomos) remain full at 100%.

**In the media:**
- [Heavy rainfall welcome, but warnings over water usage remain](https://cyprus-mail.com/2026/03/21/heavy-rainfall-welcome-but-warnings-over-water-usage-remain) — Cyprus Mail
- [Cyprus dam water levels rise after rainfall](https://en.sigmalive.com/cyprus-dam-water-levels-rise-after-rainfall/) — Sigmalive
- [Water levels in Cyprus dams better than last year](https://www.stockwatch.com.cy/en/news/water-levels-in-cyprus-dams-better-than-last-year) — StockWatch
`;
};

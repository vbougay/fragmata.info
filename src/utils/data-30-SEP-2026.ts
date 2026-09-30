import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.028, totalSince: 27.323 }, storage: { current: { amount: 43.003, percentage: 37.4 }, lastYear: { amount: 13.038, percentage: 11.3 } }, maxStorage: { amount: 25.538, date: "7/1" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 4.204 }, storage: { current: { amount: 3.734, percentage: 21.8 }, lastYear: { amount: 2.210, percentage: 12.9 } }, maxStorage: { amount: 4.726, date: "28/3" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 1.742 }, storage: { current: { amount: 2.402, percentage: 17.3 }, lastYear: { amount: 2.052, percentage: 14.8 } }, maxStorage: { amount: 5.651, date: "1/1" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 3.772 }, storage: { current: { amount: 4.017, percentage: 25.9 }, lastYear: { amount: 3.550, percentage: 22.9 } }, maxStorage: { amount: 5.994, date: "30/5" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.000, totalSince: 8.961 }, storage: { current: { amount: 6.586, percentage: 48.8 }, lastYear: { amount: 1.043, percentage: 7.7 } }, maxStorage: { amount: 3.795, date: "31/1" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.006, totalSince: 22.522 }, storage: { current: { amount: 2.555, percentage: 59.4 }, lastYear: { amount: 1.874, percentage: 43.6 } }, maxStorage: { amount: 2.734, date: "14/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 1.635 }, storage: { current: { amount: 1.462, percentage: 43.0 }, lastYear: { amount: 0.876, percentage: 25.8 } }, maxStorage: { amount: 1.393, date: "21/2" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.380, percentage: 5.6 }, lastYear: { amount: 0.153, percentage: 2.3 } }, maxStorage: { amount: 1.965, date: "5/2" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.000, totalSince: 20.330 }, storage: { current: { amount: 18.937, percentage: 36.2 }, lastYear: { amount: 5.597, percentage: 10.7 } }, maxStorage: { amount: 15.348, date: "3/1" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.000, totalSince: 9.643 }, storage: { current: { amount: 7.306, percentage: 42.6 }, lastYear: { amount: 2.293, percentage: 13.4 } }, maxStorage: { amount: 5.206, date: "3/1" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.951 }, storage: { current: { amount: 0.645, percentage: 29.6 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.398, date: "17/1" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.000, totalSince: 10.205 }, storage: { current: { amount: 9.344, percentage: 38.9 }, lastYear: { amount: 3.101, percentage: 12.9 } }, maxStorage: { amount: 6.201, date: "7/3" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 1.038 }, storage: { current: { amount: 0.443, percentage: 44.7 }, lastYear: { amount: 0.004, percentage: 0.4 } }, maxStorage: { amount: 0.391, date: "17/4" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.844 }, storage: { current: { amount: 0.523, percentage: 60.8 }, lastYear: { amount: 0.123, percentage: 14.3 } }, maxStorage: { amount: 0.378, date: "30/4" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.000, totalSince: 0.282 }, storage: { current: { amount: 0.135, percentage: 45.3 }, lastYear: { amount: 0.055, percentage: 18.5 } }, maxStorage: { amount: 0.177, date: "30/4" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 1.723 }, storage: { current: { amount: 1.236, percentage: 73.1 }, lastYear: { amount: 0.006, percentage: 0.4 } }, maxStorage: { amount: 0.051, date: "11/1" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 1.492 }, storage: { current: { amount: 1.089, percentage: 76.2 }, lastYear: { amount: 0.041, percentage: 2.9 } }, maxStorage: { amount: 0.335, date: "24/3" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.322 }, storage: { current: { amount: 0.349, percentage: 96.1 }, lastYear: { amount: 0.037, percentage: 10.2 } }, maxStorage: { amount: 0.320, date: "18/4" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 2.658 }, storage: { current: { amount: 2.268, percentage: 81.0 }, lastYear: { amount: 0.542, percentage: 19.4 } }, maxStorage: { amount: 1.069, date: "13/3" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 1.143 }, storage: { current: { amount: 1.761, percentage: 88.0 }, lastYear: { amount: 1.144, percentage: 57.2 } }, maxStorage: { amount: 1.473, date: "27/3" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 2.636 }, storage: { current: { amount: 3.818, percentage: 85.7 }, lastYear: { amount: 2.034, percentage: 45.7 } }, maxStorage: { amount: 3.012, date: "13/3" }, region: "Recharge/Other" },

];

// Yearly inflow data — updated with 25/26 data through September 30, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":1.494 }, total:116.989 },
];

export const getReportDate = (): string => "30-SEP-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 20.44 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris down slightly to 37.4% (43.0 MCM), a 0.21 MCM draw over two days, still 26.1pp above last year\'s 11.3%. Arminou→Kouris transfer: 20.44 MCM since October.',
      el: 'Ο Κούρης ελαφρώς χαμηλότερος στο 37.4% (43.0 ΕΚΜ), 26.1μ.π. πάνω από πέρυσι (11.3%). Μεταφορά Αρμίνου→Κούρης: 20.44 ΕΚΜ.',
      ru: 'Курис немного снизился — 37.4% (43.0 МКМ), +26.1пп выше прошлогодних 11.3%. Перекачка Арминоу→Курис: 20.44 МКМ.',
    },
    'Kalavasos': {
      en: 'Kalavasos steady at 21.8% (3.73 MCM), still 8.9pp above last year\'s 12.9%. Seasonal inflow 4.20 MCM.',
      el: 'Ο Καλαβασός σταθερός στο 21.8% (3.73 ΕΚΜ), πάνω από πέρυσι (12.9%). Εισροή σεζόν 4.20 ΕΚΜ.',
      ru: 'Калавасос стабильно — 21.8% (3.73 МКМ), выше прошлогодних 12.9%. Приток 4.20 МКМ за сезон.',
    },
    'Lefkara': {
      en: 'Lefkara steady at 17.3% (2.40 MCM), 2.5pp above last year\'s 14.8%. Seasonal inflow 1.74 MCM.',
      el: 'Η Λεύκαρα σταθερή στο 17.3% (2.40 ΕΚΜ), πάνω από πέρυσι (14.8%). Εισροή σεζόν 1.74 ΕΚΜ.',
      ru: 'Лефкара стабильно — 17.3% (2.40 МКМ), выше прошлогодних 14.8%.',
    },
    'Dipotamos': {
      en: 'Dipotamos down to 25.9% (4.02 MCM), 3.0pp above last year\'s 22.9%. Historical max 5.99 MCM reached in May.',
      el: 'Ο Διπόταμος χαμηλότερος στο 25.9% (4.02 ΕΚΜ), 3.0μ.π. πάνω από πέρυσι (22.9%).',
      ru: 'Дипотамос снизился — 25.9% (4.02 МКМ), +3.0пп выше прошлогодних 22.9%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia down slightly to 48.8% (6.59 MCM), still 41.1pp above last year\'s 7.7%.',
      el: 'Η Γερμασόγεια ελαφρώς χαμηλότερη στο 48.8% (6.59 ΕΚΜ). 41.1μ.π. πάνω από πέρυσι (7.7%).',
      ru: 'Гермасойя немного снизилась — 48.8% (6.59 МКМ). +41.1пп выше прошлогодних 7.7%.',
    },
    'Arminou': {
      en: 'Arminou steady at 59.4% (2.56 MCM) after a trace 0.006 MCM inflow. Still 15.8pp above last year\'s 43.6%. Season inflow 22.5 MCM = 5.2× capacity.',
      el: 'Ο Αρμίνου σταθερός στο 59.4% (2.56 ΕΚΜ). 15.8μ.π. πάνω από πέρυσι (43.6%).',
      ru: 'Арминоу стабильно на 59.4% (2.56 МКМ). +15.8пп выше прошлогодних 43.6%.',
    },
    'Polemidia': {
      en: 'Polemidia steady at 43.0% (1.46 MCM), still 17.2pp above last year\'s 25.8%.',
      el: 'Η Πολεμίδια σταθερή στο 43.0% (1.46 ΕΚΜ), 17.2μ.π. πάνω από πέρυσι (25.8%).',
      ru: 'Полемидия стабильно — 43.0% (1.46 МКМ), +17.2пп выше прошлогодних 25.8%.',
    },
    'Achna': {
      en: 'Achna up to 5.6% (0.38 MCM), a fifth 0.4pp+ unexplained jump this month despite zero recorded inflow all season.',
      el: 'Η Αχνά στο 5.6% (0.38 ΕΚΜ), πέμπτη ανεξήγητη άνοδος τον μήνα παρά τη μηδενική εισροή όλη τη σεζόν.',
      ru: 'Ахна выросла до 5.6% (0.38 МКМ), пятый необъяснённый скачок за месяц несмотря на нулевой приток за весь сезон.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos down slightly to 36.2% (18.94 MCM), 25.5pp above last year\'s 10.7%. Seasonal inflow 20.3 MCM.',
      el: 'Ο Ασπρόκρεμμος ελαφρώς χαμηλότερος στο 36.2% (18.94 ΕΚΜ), 25.5μ.π. πάνω από πέρυσι (10.7%).',
      ru: 'Аспрокреммос немного снизился — 36.2% (18.94 МКМ), +25.5пп выше прошлогодних 10.7%.',
    },
    'Kannaviou': {
      en: 'Kannaviou steady at 42.6% (7.31 MCM), still 29.2pp above last year\'s 13.4%. Seasonal inflow 9.64 MCM.',
      el: 'Ο Καννάβιου σταθερός στο 42.6% (7.31 ΕΚΜ), 29.2μ.π. πάνω από πέρυσι (13.4%).',
      ru: 'Каннавиу стабильно — 42.6% (7.31 МКМ), +29.2пп выше прошлогодних 13.4%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos down slightly to 29.6% (0.65 MCM), resuming its slow decline. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος ελαφρώς χαμηλότερος στο 29.6% (0.65 ΕΚΜ). Από 0% πέρυσι.',
      ru: 'Мавроколимпос немного снизился — 29.6% (0.65 МКМ). Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou down slightly to 38.9% (9.34 MCM), still 26.0pp above last year\'s 12.9%.',
      el: 'Ο Εύρετου ελαφρώς χαμηλότερος στο 38.9% (9.34 ΕΚΜ). 26.0μ.π. πάνω από πέρυσι (12.9%).',
      ru: 'Эвретоу немного снизился — 38.9% (9.34 МКМ). +26.0пп выше прошлогодних 12.9%.',
    },
    'Argaka': {
      en: 'Argaka down to 44.7% (0.44 MCM), its steepest drop this week, resuming its multi-week slide. Up from 0.4% last year — a 111× year-over-year recovery.',
      el: 'Η Αργάκα χαμηλότερα στο 44.7% (0.44 ΕΚΜ), η μεγαλύτερη πτώση αυτή την εβδομάδα. Από 0.4% πέρυσι.',
      ru: 'Аргака снизилась — 44.7% (0.44 МКМ), самое резкое падение на этой неделе. Год назад 0.4%.',
    },
    'Pomos': {
      en: 'Pomos down to 60.8% (0.52 MCM), resuming its retreat from near-full. Up from 14.3% last year.',
      el: 'Ο Πόμος χαμηλότερα στο 60.8% (0.52 ΕΚΜ). Από 14.3% πέρυσι.',
      ru: 'Помос снизился — 60.8% (0.52 МКМ). Год назад 14.3%.',
    },
    'Agia Marina': {
      en: 'Agia Marina down to 45.3% (0.14 MCM), its steepest drop yet, continuing its multi-week slide. Up from 18.5% last year.',
      el: 'Η Αγία Μαρίνα χαμηλότερα στο 45.3% (0.14 ΕΚΜ), η μεγαλύτερη πτώση της, συνεχίζεται η πολυεβδομαδιαία πτώση. Από 18.5% πέρυσι.',
      ru: 'Агия Марина снизилась — 45.3% (0.14 МКМ), самое резкое падение, многонедельное снижение продолжается. Год назад 18.5%.',
    },
    'Vyzakia': {
      en: 'Vyzakia down to 73.1% (1.24 MCM), its steepest pullback among the Nicosia dams. Was 0.4% last year — dramatic year-over-year recovery.',
      el: 'Τα Βυζακιά χαμηλότερα στο 73.1% (1.24 ΕΚΜ). Από 0.4% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия снизилась — 73.1% (1.24 МКМ). Год назад 0.4% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos down to 76.2% (1.09 MCM). Was 2.9% last year.',
      el: 'Ο Ξυλιάτος χαμηλότερος στο 76.2% (1.09 ΕΚΜ). Από 2.9% πέρυσι.',
      ru: 'Ксилиатос снизился — 76.2% (1.09 МКМ). Год назад 2.9%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis steady at 96.1% (0.35 MCM), still short of full. Up from 10.2% last year.',
      el: 'Ο Καλοπαναγιώτης σταθερός στο 96.1% (0.35 ΕΚΜ), ακόμα κάτω από πλήρη χωρητικότητα. Αύξηση από 10.2% πέρυσι.',
      ru: 'Калопанайотис стабильно — 96.1% (0.35 МКМ), всё ещё не полон. Рост с 10.2% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos down slightly to 81.0% (2.27 MCM). Was 19.4% last year — a 4.2× year-over-year recovery.',
      el: 'Ο Ταμασός ελαφρώς χαμηλότερος στο 81.0% (2.27 ΕΚΜ). Από 19.4% πέρυσι — 4.2× ανάκαμψη.',
      ru: 'Тамассос немного снизился — 81.0% (2.27 МКМ). Год назад 19.4% — восстановление в 4.2×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta steady at 88.0% (1.76 MCM). Up from 57.2% one year ago.',
      el: 'Η Κλήρου-Μαλούντα σταθερή στο 88.0% (1.76 ΕΚΜ). Αύξηση από 57.2% πέρυσι.',
      ru: 'Клиру-Малунта стабильно — 88.0% (1.76 МКМ). Рост с 57.2% год назад.',
    },
    'Solea': {
      en: 'Solea steady at 85.7% (3.82 MCM). Up from 45.7% last year — 1.88× year-over-year improvement.',
      el: 'Η Σολέα σταθερή στο 85.7% (3.82 ΕΚΜ). Αύξηση από 45.7% πέρυσι — 1.88× βελτίωση.',
      ru: 'Солеа стабильно — 85.7% (3.82 МКМ). Рост с 45.7% год назад — улучшение в 1.88×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (28 — 30 Σεπτεμβρίου 2026)

Δελτίο Τετάρτης: συνολική αποθήκευση **35.81%** (104.1 ΕΚΜ) — μειωμένη από 35.95% (104.5 ΕΚΜ) τη Δευτέρα, 28 Σεπτεμβρίου, μια απώλεια περίπου 0.4 ΕΚΜ σε δύο μέρες, πιο αργός ρυθμός από την πτώση της Δευτέρας. Η [Αγία Μαρίνα](/el/dam/agia-marina/) κατέγραψε τη μεγαλύτερη πτώση της (-1.0μ.π.), συνεχίζοντας την πολυεβδομαδιαία πτώση της. Η [Αχνά](/el/dam/achna/) πήδηξε ξανά, στο 5.6% (+0.4μ.π.), παρά τη μηδενική εισροή — η πέμπτη τέτοια ανεξήγητη κίνηση τον μήνα. Το χάσμα με πέρυσι παρέμεινε σταθερό στις **23.4 μονάδες**. Εισροή σεζόν: 117.0 ΕΚΜ (Αύγ-Σεπ μέχρι στιγμής: 1.49 ΕΚΜ). Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/) παραμένει στα **20.44 ΕΚΜ**.

**Αξιοσημείωτα (έναντι 28 Σεπτεμβρίου):**
- [Αχνά](/el/dam/achna/) **5.6%** (+0.4μ.π.) — πέμπτη ανεξήγητη άνοδος τον μήνα παρά τη μηδενική εισροή όλη τη σεζόν
- [Αγία Μαρίνα](/el/dam/agia-marina/) **45.3%** (-1.0μ.π.) — η μεγαλύτερη πτώση της, συνεχίζεται η πολυεβδομαδιαία πτώση
- [Αργάκα](/el/dam/argaka/) **44.7%** (-0.6μ.π.) — δεύτερη μεγαλύτερη πτώση, συνεχίζει να υποχωρεί
- [Πωμός](/el/dam/pomos/) **60.8%** (-0.5μ.π.) — συνεχιζόμενη υποχώρηση από σχεδόν πλήρη
- [Κούρης](/el/dam/kouris/) **37.4%** (-0.2μ.π.) — η μεγαλύτερη απόλυτη πτώση (-0.21 ΕΚΜ)
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **96.1%** — ακόμα το μόνο φράγμα κοντά στην υπερχείλιση, κάτω από πλήρη χωρητικότητα

**Στα μέσα:**
- [Καμπανάκι για το νερό: Τα φράγματα στο 39% και ο κίνδυνος για το 2027-2028](https://dialogos.com.cy/kampanaki-gia-to-nero-ta-fragmata-sto-39-kai-o-kindynos-gia-to-2027-2028/) — Dialogos
- [Με τέσσερις μονάδες αφαλάτωσης θα επιλυθεί το υδατικό, λέει ο Σενέκης](https://news.rik.cy/el/article/2026/9/14/me-tesseris-monades-aphalatoses-tha-epiluthei-to-udatiko-leei-o-senekes/) — ΡΙΚ

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (28 — 30 сентября 2026)

Бюллетень среды: общий запас **35.81%** (104.1 МКМ) — снижение с 35.95% (104.5 МКМ) в понедельник, 28 сентября, потеря около 0.4 МКМ за два дня, более медленный темп, чем в понедельник. [Агия Марина](/ru/dam/agia-marina/) показала своё самое резкое падение (-1.0пп), многонедельное снижение продолжается. [Ахна](/ru/dam/achna/) снова подскочила — до 5.6% (+0.4пп), несмотря на нулевой приток — пятый подобный необъяснимый скачок за месяц. Разрыв с прошлым годом остался практически без изменений — **23.4 пункта**. Приток сезона: 117.0 МКМ (авг-сен пока: 1.49 МКМ). Перекачка [Арминоу](/ru/dam/arminou/)→[Куриса](/ru/dam/kouris/) без изменений: **20.44 МКМ**.

**Основные изменения (за период с 28 сентября):**
- [Ахна](/ru/dam/achna/) **5.6%** (+0.4пп) — пятый необъяснённый скачок за месяц несмотря на нулевой приток за весь сезон
- [Агия Марина](/ru/dam/agia-marina/) **45.3%** (-1.0пп) — самое резкое падение, многонедельное снижение продолжается
- [Аргака](/ru/dam/argaka/) **44.7%** (-0.6пп) — второе по величине падение, продолжает снижаться
- [Помос](/ru/dam/pomos/) **60.8%** (-0.5пп) — продолжающееся отступление от почти полного уровня
- [Курис](/ru/dam/kouris/) **37.4%** (-0.2пп) — наибольшее абсолютное снижение (-0.21 МКМ)
- [Калопанайотис](/ru/dam/kalopanagiotis/) **96.1%** — всё ещё единственная дамба у переполнения, но не полная

**В СМИ:**
- [Депутаты Кипра предупреждают, что водная политика может вынудить профессиональных фермеров уйти из сельского хозяйства](https://ruscyprus.com/news/deputaty-kipra-preduprezhdayut-chto-vodnaya/60057) — RusCyprus
- [Фермеры долины Хрисохус планируют акцию протеста из-за перебоев с орошением](https://www.kiprinform.com/news/fermery-doliny-hrisohus-planiruyut-akciyu-protesta-iz-za-pereboev-s-orosheniem/) — Cyprus Inform

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (September 28 — September 30, 2026)

Wednesday's bulletin: total storage **35.81%** (104.1 MCM) — down from 35.95% (104.5 MCM) on Monday, September 28, a loss of roughly 0.4 MCM over two days, a slower pace than Monday's weekend drop. [Agia Marina](/dam/agia-marina/) posted its steepest drop yet, down 1.0pp, extending its multi-week slide. [Achna](/dam/achna/) jumped again, up 0.4pp to 5.6% despite zero recorded inflow all season — the fifth such unexplained rise this month. The gap over last year held steady at **23.4 points**. Season inflow: 117.0 MCM (Aug-Sep so far: 1.49 MCM). The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer remains at **20.44 MCM**.

**Notable movements (vs. September 28):**
- [Achna](/dam/achna/) **5.6%** (+0.4pp) — fifth unexplained jump this month despite zero recorded inflow all season
- [Agia Marina](/dam/agia-marina/) **45.3%** (-1.0pp) — steepest drop yet, multi-week slide continues
- [Argaka](/dam/argaka/) **44.7%** (-0.6pp) — second-steepest drop, still retreating
- [Pomos](/dam/pomos/) **60.8%** (-0.5pp) — continued pullback from near-full
- [Kouris](/dam/kouris/) **37.4%** (-0.2pp) — the largest absolute drop (-0.21 MCM)
- [Kalopanagiotis](/dam/kalopanagiotis/) **96.1%** — still the only dam near overflow, short of full

**In the media:**
- [Plan for irrigation water heads to cabinet](https://cyprus-mail.com/2026/09/15/plan-for-irrigation-water-heads-to-cabinet) — Cyprus Mail
- [Farmers to get additional 3.5m cubic metres of water](https://cyprus-mail.com/2026/09/16/farmers-to-get-additional-3-5m-cubic-metres-of-water) — Cyprus Mail
- [Implementation of four new desalination plants underway, minister says](https://www.parikiaki.com/2026/09/implementation-of-four-new-desalination-plants-underway-in-cyprus-minister-says/) — Parikiaki

🔗 https://fragmata.info
`;
};

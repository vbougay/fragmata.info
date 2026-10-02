import { Reservoir, YearlyInflowData } from "../types";

export const reservoirData: Reservoir[] = [
  // Southern Conveyor
  { name: "Kouris", capacity: 115, inflow: { last24Hours: 0.060, totalSince: 0.060 }, storage: { current: { amount: 42.882, percentage: 37.3 }, lastYear: { amount: 12.925, percentage: 11.2 } }, maxStorage: { amount: 48.267, date: "16/6" }, region: "Southern Conveyor" },
  { name: "Kalavasos", capacity: 17.1, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 3.727, percentage: 21.8 }, lastYear: { amount: 2.185, percentage: 12.8 } }, maxStorage: { amount: 4.247, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Lefkara", capacity: 13.85, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 2.397, percentage: 17.3 }, lastYear: { amount: 2.044, percentage: 14.8 } }, maxStorage: { amount: 2.569, date: "17/6" }, region: "Southern Conveyor" },
  { name: "Dipotamos", capacity: 15.5, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 3.969, percentage: 25.6 }, lastYear: { amount: 3.509, percentage: 22.6 } }, maxStorage: { amount: 5.941, date: "3/6" }, region: "Southern Conveyor" },
  { name: "Germasoyeia", capacity: 13.5, inflow: { last24Hours: 0.006, totalSince: 0.006 }, storage: { current: { amount: 6.579, percentage: 48.7 }, lastYear: { amount: 1.020, percentage: 7.6 } }, maxStorage: { amount: 8.140, date: "29/5" }, region: "Southern Conveyor" },
  { name: "Arminou", capacity: 4.3, inflow: { last24Hours: 0.012, totalSince: 0.012 }, storage: { current: { amount: 2.573, percentage: 59.8 }, lastYear: { amount: 1.862, percentage: 43.3 } }, maxStorage: { amount: 3.117, date: "13/5" }, region: "Southern Conveyor" },
  { name: "Polemidia", capacity: 3.4, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 1.460, percentage: 42.9 }, lastYear: { amount: 0.872, percentage: 25.6 } }, maxStorage: { amount: 2.198, date: "25/5" }, region: "Southern Conveyor" },
  { name: "Achna", capacity: 6.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.436, percentage: 6.4 }, lastYear: { amount: 0.140, percentage: 2.1 } }, maxStorage: { amount: 0.380, date: "30/9" }, region: "Southern Conveyor" },

  // Paphos
  { name: "Asprokremmos", capacity: 52.375, inflow: { last24Hours: 0.001, totalSince: 0.001 }, storage: { current: { amount: 18.897, percentage: 36.1 }, lastYear: { amount: 5.530, percentage: 10.6 } }, maxStorage: { amount: 22.011, date: "29/5" }, region: "Paphos" },
  { name: "Kannaviou", capacity: 17.168, inflow: { last24Hours: 0.011, totalSince: 0.011 }, storage: { current: { amount: 7.301, percentage: 42.5 }, lastYear: { amount: 2.268, percentage: 13.2 } }, maxStorage: { amount: 8.990, date: "28/5" }, region: "Paphos" },
  { name: "Mavrokolympos", capacity: 2.18, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.640, percentage: 29.4 }, lastYear: { amount: 0.000, percentage: 0.0 } }, maxStorage: { amount: 1.974, date: "24/4" }, region: "Paphos" },

  // Chrysochou
  { name: "Evretou", capacity: 24, inflow: { last24Hours: 0.006, totalSince: 0.006 }, storage: { current: { amount: 9.344, percentage: 38.9 }, lastYear: { amount: 3.068, percentage: 12.8 } }, maxStorage: { amount: 12.036, date: "27/5" }, region: "Chrysochou" },
  { name: "Argaka", capacity: 0.99, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.435, percentage: 43.9 }, lastYear: { amount: 0.004, percentage: 0.4 } }, maxStorage: { amount: 0.990, date: "16/3-29/5" }, region: "Chrysochou" },
  { name: "Pomos", capacity: 0.86, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.520, percentage: 60.5 }, lastYear: { amount: 0.123, percentage: 14.3 } }, maxStorage: { amount: 0.860, date: "16/2-12/6" }, region: "Chrysochou" },
  { name: "Agia Marina", capacity: 0.298, inflow: { last24Hours: 0.001, totalSince: 0.001 }, storage: { current: { amount: 0.137, percentage: 46.0 }, lastYear: { amount: 0.055, percentage: 18.5 } }, maxStorage: { amount: 0.298, date: "30/3-29/5" }, region: "Chrysochou" },

  // Nicosia
  { name: "Vyzakia", capacity: 1.69, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 1.230, percentage: 72.8 }, lastYear: { amount: 0.006, percentage: 0.4 } }, maxStorage: { amount: 1.690, date: "27/4-26/5" }, region: "Nicosia" },
  { name: "Xyliatos", capacity: 1.43, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 1.085, percentage: 75.9 }, lastYear: { amount: 0.040, percentage: 2.8 } }, maxStorage: { amount: 1.430, date: "23/3-29/5" }, region: "Nicosia" },
  { name: "Kalopanagiotis", capacity: 0.363, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 0.363, percentage: 100.0 }, lastYear: { amount: 0.037, percentage: 10.2 } }, maxStorage: { amount: 0.363, date: "16/1-7/9" }, region: "Nicosia" },

  // Recharge/Other
  { name: "Tamassos", capacity: 2.8, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 2.253, percentage: 80.5 }, lastYear: { amount: 0.541, percentage: 19.3 } }, maxStorage: { amount: 2.800, date: "2/4-5/6" }, region: "Recharge/Other" },
  { name: "Klirou-Malounta", capacity: 2, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 1.761, percentage: 88.1 }, lastYear: { amount: 1.143, percentage: 57.2 } }, maxStorage: { amount: 2.000, date: "14/2-30/6" }, region: "Recharge/Other" },
  { name: "Solea", capacity: 4.454, inflow: { last24Hours: 0.000, totalSince: 0.000 }, storage: { current: { amount: 3.815, percentage: 85.6 }, lastYear: { amount: 2.026, percentage: 45.5 } }, maxStorage: { amount: 4.454, date: "10/3-2/6" }, region: "Recharge/Other" },

];

// Yearly inflow data — 25/26 finalized at year's close; 26/27 begins October 1, 2026
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
  { year: "25/26", months: { October:0.095, November:0.2, December:1.903, January:12.67, February:24.201, March:35.414, April:23.609, May:13.221, June:3.07, July:1.112, "Aug-Sep":1.596 }, total:117.091 },
  { year: "26/27", months: { October:0.097, November:0, December:0, January:0, February:0, March:0, April:0, May:0, June:0, July:0, "Aug-Sep":0 }, total:0.097 },
];

export const getReportDate = (): string => "02-OCT-2026";

export const waterTransferred = { from: "Arminou", to: "Kouris", sinceOct: 0.00 };

export const getDamSummary = (damName: string, language: 'en' | 'el' | 'ru' = 'en'): string | null => {
  const summaries: Record<string, Record<'en' | 'el' | 'ru', string>> = {
    'Kouris': {
      en: 'Kouris barely moved at 37.3% (42.9 MCM) as the new season opens, still 26.1pp above last year\'s 11.2%. Transfer from Arminou resets to zero.',
      el: 'Ο Κούρης σχεδόν αμετάβλητος στο 37.3% (42.9 ΕΚΜ) στο άνοιγμα της νέας σεζόν, 26.1μ.π. πάνω από πέρυσι (11.2%).',
      ru: 'Курис почти не изменился — 37.3% (42.9 МКМ) в начале нового сезона, +26.1пп выше прошлогодних 11.2%.',
    },
    'Kalavasos': {
      en: 'Kalavasos steady at 21.8% (3.73 MCM) as the 2026/27 season opens, still 9.0pp above last year\'s 12.8%.',
      el: 'Ο Καλαβασός σταθερός στο 21.8% (3.73 ΕΚΜ) στο άνοιγμα της σεζόν, πάνω από πέρυσι (12.8%).',
      ru: 'Калавасос стабильно — 21.8% (3.73 МКМ) в начале сезона, выше прошлогодних 12.8%.',
    },
    'Lefkara': {
      en: 'Lefkara steady at 17.3% (2.40 MCM), 2.5pp above last year\'s 14.8%, as the new hydrological year begins.',
      el: 'Η Λεύκαρα σταθερή στο 17.3% (2.40 ΕΚΜ), πάνω από πέρυσι (14.8%), στο ξεκίνημα της νέας υδρολογικής χρονιάς.',
      ru: 'Лефкара стабильно — 17.3% (2.40 МКМ), выше прошлогодних 14.8%, в начале нового гидрологического года.',
    },
    'Dipotamos': {
      en: 'Dipotamos down to 25.6% (3.97 MCM), 3.0pp above last year\'s 22.6%. Historical max 5.94 MCM reached in June.',
      el: 'Ο Διπόταμος χαμηλότερος στο 25.6% (3.97 ΕΚΜ), 3.0μ.π. πάνω από πέρυσι (22.6%).',
      ru: 'Дипотамос снизился — 25.6% (3.97 МКМ), +3.0пп выше прошлогодних 22.6%.',
    },
    'Germasoyeia': {
      en: 'Germasoyeia steady at 48.7% (6.58 MCM), still 41.1pp above last year\'s 7.6%, at the start of the new season.',
      el: 'Η Γερμασόγεια σταθερή στο 48.7% (6.58 ΕΚΜ). 41.1μ.π. πάνω από πέρυσι (7.6%).',
      ru: 'Гермасойя стабильно — 48.7% (6.58 МКМ). +41.1пп выше прошлогодних 7.6%.',
    },
    'Arminou': {
      en: 'Arminou up to 59.8% (2.57 MCM), the only Southern Conveyor dam rising, 16.5pp above last year\'s 43.3%.',
      el: 'Ο Αρμίνου ανεβαίνει στο 59.8% (2.57 ΕΚΜ), 16.5μ.π. πάνω από πέρυσι (43.3%).',
      ru: 'Арминоу вырос — 59.8% (2.57 МКМ), +16.5пп выше прошлогодних 43.3%.',
    },
    'Polemidia': {
      en: 'Polemidia steady at 42.9% (1.46 MCM), still 17.3pp above last year\'s 25.6%.',
      el: 'Η Πολεμίδια σταθερή στο 42.9% (1.46 ΕΚΜ), 17.3μ.π. πάνω από πέρυσι (25.6%).',
      ru: 'Полемидия стабильно — 42.9% (1.46 МКМ), +17.3пп выше прошлогодних 25.6%.',
    },
    'Achna': {
      en: 'Achna up to 6.4% (0.44 MCM), extending its months-long run of unexplained rises despite zero recorded inflow.',
      el: 'Η Αχνά στο 6.4% (0.44 ΕΚΜ), συνεχίζει η πολύμηνη ανεξήγητη άνοδος παρά τη μηδενική εισροή.',
      ru: 'Ахна выросла до 6.4% (0.44 МКМ), продолжая многомесячную серию необъяснимых подъёмов без притока.',
    },
    'Asprokremmos': {
      en: 'Asprokremmos down slightly to 36.1% (18.90 MCM), 25.5pp above last year\'s 10.6%, as the new season opens.',
      el: 'Ο Ασπρόκρεμμος ελαφρώς χαμηλότερος στο 36.1% (18.90 ΕΚΜ), 25.5μ.π. πάνω από πέρυσι (10.6%).',
      ru: 'Аспрокреммос немного снизился — 36.1% (18.90 МКМ), +25.5пп выше прошлогодних 10.6%.',
    },
    'Kannaviou': {
      en: 'Kannaviou steady at 42.5% (7.30 MCM), still 29.3pp above last year\'s 13.2%.',
      el: 'Ο Καννάβιου σταθερός στο 42.5% (7.30 ΕΚΜ), 29.3μ.π. πάνω από πέρυσι (13.2%).',
      ru: 'Каннавиу стабильно — 42.5% (7.30 МКМ), +29.3пп выше прошлогодних 13.2%.',
    },
    'Mavrokolympos': {
      en: 'Mavrokolympos down slightly to 29.4% (0.64 MCM), resuming its slow decline. Was 0% last year.',
      el: 'Ο Μαυροκόλυμπος ελαφρώς χαμηλότερος στο 29.4% (0.64 ΕΚΜ). Από 0% πέρυσι.',
      ru: 'Мавроколимпос немного снизился — 29.4% (0.64 МКМ). Год назад 0%.',
    },
    'Evretou': {
      en: 'Evretou unchanged at 38.9% (9.34 MCM), still 26.1pp above last year\'s 12.8%.',
      el: 'Ο Εύρετου αμετάβλητος στο 38.9% (9.34 ΕΚΜ). 26.1μ.π. πάνω από πέρυσι (12.8%).',
      ru: 'Эвретоу без изменений — 38.9% (9.34 МКМ). +26.1пп выше прошлогодних 12.8%.',
    },
    'Argaka': {
      en: 'Argaka down to 43.9% (0.44 MCM), its steepest drop yet in a multi-week slide. Up from 0.4% last year.',
      el: 'Η Αργάκα χαμηλότερα στο 43.9% (0.44 ΕΚΜ), η μεγαλύτερη πτώση της πολυεβδομαδιαίας πτώσης. Από 0.4% πέρυσι.',
      ru: 'Аргака снизилась — 43.9% (0.44 МКМ), самое резкое падение в многонедельном снижении. Год назад 0.4%.',
    },
    'Pomos': {
      en: 'Pomos down to 60.5% (0.52 MCM), continuing its retreat from near-full. Up from 14.3% last year.',
      el: 'Ο Πόμος χαμηλότερα στο 60.5% (0.52 ΕΚΜ). Από 14.3% πέρυσι.',
      ru: 'Помос снизился — 60.5% (0.52 МКМ). Год назад 14.3%.',
    },
    'Agia Marina': {
      en: 'Agia Marina up to 46.0% (0.14 MCM), its first gain in weeks, pausing its multi-week slide. Up from 18.5% last year.',
      el: 'Η Αγία Μαρίνα ανεβαίνει στο 46.0% (0.14 ΕΚΜ), πρώτη άνοδος εβδομάδων. Από 18.5% πέρυσι.',
      ru: 'Агия Марина выросла — 46.0% (0.14 МКМ), первый рост за недели. Год назад 18.5%.',
    },
    'Vyzakia': {
      en: 'Vyzakia down to 72.8% (1.23 MCM), still the steepest pullback among the Nicosia dams. Was 0.4% last year.',
      el: 'Τα Βυζακιά χαμηλότερα στο 72.8% (1.23 ΕΚΜ). Από 0.4% πέρυσι — εντυπωσιακή ανάκαμψη.',
      ru: 'Визакия снизилась — 72.8% (1.23 МКМ). Год назад 0.4% — впечатляющее восстановление.',
    },
    'Xyliatos': {
      en: 'Xyliatos down to 75.9% (1.09 MCM). Was 2.8% last year.',
      el: 'Ο Ξυλιάτος χαμηλότερος στο 75.9% (1.09 ΕΚΜ). Από 2.8% πέρυσι.',
      ru: 'Ксилиатос снизился — 75.9% (1.09 МКМ). Год назад 2.8%.',
    },
    'Kalopanagiotis': {
      en: 'Kalopanagiotis back to 100% (0.36 MCM), overflowing again just days after dipping to 96.1%. Up from 10.2% last year.',
      el: 'Ο Καλοπαναγιώτης ξανά στο 100% (0.36 ΕΚΜ), υπερχειλίζει ξανά. Αύξηση από 10.2% πέρυσι.',
      ru: 'Калопанайотис снова на 100% (0.36 МКМ), переполнен. Рост с 10.2% год назад.',
    },
    'Tamassos': {
      en: 'Tamassos down slightly to 80.5% (2.25 MCM). Was 19.3% last year — a 4.2× year-over-year recovery.',
      el: 'Ο Ταμασός ελαφρώς χαμηλότερος στο 80.5% (2.25 ΕΚΜ). Από 19.3% πέρυσι — 4.2× ανάκαμψη.',
      ru: 'Тамассос немного снизился — 80.5% (2.25 МКМ). Год назад 19.3% — восстановление в 4.2×.',
    },
    'Klirou-Malounta': {
      en: 'Klirou-Malounta steady at 88.1% (1.76 MCM). Up from 57.2% one year ago.',
      el: 'Η Κλήρου-Μαλούντα σταθερή στο 88.1% (1.76 ΕΚΜ). Αύξηση από 57.2% πέρυσι.',
      ru: 'Клиру-Малунта стабильно — 88.1% (1.76 МКМ). Рост с 57.2% год назад.',
    },
    'Solea': {
      en: 'Solea steady at 85.6% (3.82 MCM). Up from 45.5% last year — 1.88× year-over-year improvement.',
      el: 'Η Σολέα σταθερή στο 85.6% (3.82 ΕΚΜ). Αύξηση από 45.5% πέρυσι — 1.88× βελτίωση.',
      ru: 'Солеа стабильно — 85.6% (3.82 МКМ). Рост с 45.5% год назад — улучшение в 1.88×.',
    },
  };
  return summaries[damName]?.[language] ?? null;
};

export const getSummaryChanges = (language: 'en' | 'el' | 'ru' = 'en'): string => {
  if (language === 'el') {
    return `
### Πρόσφατες Αλλαγές (30 Σεπτεμβρίου — 2 Οκτωβρίου 2026)

Το πρώτο δελτίο της σεζόν 2026/27: συνολική αποθήκευση **35.75%** (104.0 ΕΚΜ) — σχεδόν αμετάβλητη από το 35.81% (104.1 ΕΚΜ) που έκλεισε η σεζόν 2025/26 την Τετάρτη, καθώς ο μετρητής εισροής μηδενίζεται για τη νέα υδρολογική χρονιά. Ο [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) επέστρεψε στο 100%, υπερχειλίζει ξανά λίγες μέρες μετά την πτώση στο 96.1%. Η μεταφορά [Αρμίνου](/el/dam/arminou/)→[Κούρης](/el/dam/kouris/), που έφτασε τα 20.44 ΕΚΜ στη σεζόν 2025/26, μηδενίζεται επίσης για τη νέα σεζόν. Το χάσμα με πέρυσι διευρύνθηκε ελαφρώς στις **23.5 μονάδες**.

**Αξιοσημείωτα (έναντι 30 Σεπτεμβρίου):**
- [Καλοπαναγιώτης](/el/dam/kalopanagiotis/) **100%** (+3.9μ.π.) — ξανά πλήρης, υπερχειλίζει
- [Αχνά](/el/dam/achna/) **6.4%** (+0.8μ.π.) — συνεχίζεται η πολύμηνη ανεξήγητη άνοδος παρά τη μηδενική εισροή
- [Αργάκα](/el/dam/argaka/) **43.9%** (-0.8μ.π.) — η μεγαλύτερη πτώση της πολυεβδομαδιαίας πτώσης
- [Αγία Μαρίνα](/el/dam/agia-marina/) **46.0%** (+0.7μ.π.) — πρώτη άνοδος μετά από εβδομάδες πτώσης
- [Αρμίνου](/el/dam/arminou/) **59.8%** (+0.4μ.π.) — το μόνο φράγμα του Νότιου Αγωγού που ανεβαίνει
- [Κούρης](/el/dam/kouris/) **37.3%** (-0.1μ.π.) — σχεδόν αμετάβλητος

**Στα μέσα:**
- [Καμπανάκι για το νερό: Τα φράγματα στο 39% και ο κίνδυνος για το 2027-2028](https://dialogos.com.cy/kampanaki-gia-to-nero-ta-fragmata-sto-39-kai-o-kindynos-gia-to-2027-2028/) — Dialogos
- [Με τέσσερις μονάδες αφαλάτωσης θα επιλυθεί το υδατικό, λέει ο Σενέκης](https://news.rik.cy/el/article/2026/9/14/me-tesseris-monades-aphalatoses-tha-epiluthei-to-udatiko-leei-o-senekes/) — ΡΙΚ

🔗 https://fragmata.info
`;
  }
  if (language === 'ru') {
    return `
### Последние изменения (30 сентября — 2 октября 2026)

Первый бюллетень сезона 2026/27: общий запас **35.75%** (104.0 МКМ) — почти без изменений с 35.81% (104.1 МКМ), которыми завершился сезон 2025/26 в среду, пока счётчик притока обнуляется для нового гидрологического года. [Калопанайотис](/ru/dam/kalopanagiotis/) вернулся к 100%, снова переполнен спустя всего несколько дней после падения до 96.1%. Перекачка [Арминоу](/ru/dam/arminou/)→[Куриса](/ru/dam/kouris/), составившая 20.44 МКМ за сезон 2025/26, тоже обнуляется для нового сезона. Разрыв с прошлым годом немного увеличился — **23.5 пункта**.

**Основные изменения (за период с 30 сентября):**
- [Калопанайотис](/ru/dam/kalopanagiotis/) **100%** (+3.9пп) — снова полон, переполнен
- [Ахна](/ru/dam/achna/) **6.4%** (+0.8пп) — многомесячная серия необъяснимых подъёмов продолжается несмотря на нулевой приток
- [Аргака](/ru/dam/argaka/) **43.9%** (-0.8пп) — самое резкое падение в многонедельном снижении
- [Агия Марина](/ru/dam/agia-marina/) **46.0%** (+0.7пп) — первый рост за несколько недель падения
- [Арминоу](/ru/dam/arminou/) **59.8%** (+0.4пп) — единственная дамба Южного водовода, которая растёт
- [Курис](/ru/dam/kouris/) **37.3%** (-0.1пп) — почти без изменений

**В СМИ:**
- [Депутаты Кипра предупреждают, что водная политика может вынудить профессиональных фермеров уйти из сельского хозяйства](https://ruscyprus.com/news/deputaty-kipra-preduprezhdayut-chto-vodnaya/60057) — RusCyprus
- [Фермеры долины Хрисохус планируют акцию протеста из-за перебоев с орошением](https://www.kiprinform.com/news/fermery-doliny-hrisohus-planiruyut-akciyu-protesta-iz-za-pereboev-s-orosheniem/) — Cyprus Inform

🔗 https://fragmata.info
`;
  }
  return `
### Recent Changes (September 30 — October 2, 2026)

The first bulletin of the 2026/27 season: total storage **35.75%** (104.0 MCM) — almost unchanged from the 35.81% (104.1 MCM) that closed out 2025/26 on Wednesday, as the inflow counter resets to zero for the new hydrological year. [Kalopanagiotis](/dam/kalopanagiotis/) is back to 100%, overflowing again just days after dipping to 96.1%. The [Arminou](/dam/arminou/)→[Kouris](/dam/kouris/) transfer, which totaled 20.44 MCM across 2025/26, also resets to zero for the new season. The gap over last year widened slightly to **23.5 points**.

**Notable movements (vs. September 30):**
- [Kalopanagiotis](/dam/kalopanagiotis/) **100%** (+3.9pp) — back to full, overflowing again
- [Achna](/dam/achna/) **6.4%** (+0.8pp) — months-long run of unexplained rises continues despite zero recorded inflow
- [Argaka](/dam/argaka/) **43.9%** (-0.8pp) — steepest drop yet in its multi-week slide
- [Agia Marina](/dam/agia-marina/) **46.0%** (+0.7pp) — first gain in weeks, slide pauses
- [Arminou](/dam/arminou/) **59.8%** (+0.4pp) — the only Southern Conveyor dam moving up
- [Kouris](/dam/kouris/) **37.3%** (-0.1pp) — barely moved

**In the media:**
- [Plan for irrigation water heads to cabinet](https://cyprus-mail.com/2026/09/15/plan-for-irrigation-water-heads-to-cabinet) — Cyprus Mail
- [Farmers to get additional 3.5m cubic metres of water](https://cyprus-mail.com/2026/09/16/farmers-to-get-additional-3-5m-cubic-metres-of-water) — Cyprus Mail
- [Implementation of four new desalination plants underway, minister says](https://www.parikiaki.com/2026/09/implementation-of-four-new-desalination-plants-underway-in-cyprus-minister-says/) — Parikiaki

🔗 https://fragmata.info
`;
};

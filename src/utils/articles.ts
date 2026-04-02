import { type Locale } from '@/utils/locale';

export interface ArticleMeta {
  slug: string;
  date: string;
  dataSetId: string;
  author: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  hidden?: boolean;
}

export const ARTICLES: ArticleMeta[] = [
  {
    slug: '2026-03-31-nicosia-north-troodos-drought-free',
    date: '2026-03-31',
    dataSetId: '30-MAR-2026',
    author: 'Vladimir Bugay',
    title: {
      en: 'Drought Over North of Troodos: All Five Nicosia Dams Full — Xyliatos, Klirou, Solea, Kalopanagiotis and Tamassos Overflowing',
      el: 'Τέλος Ξηρασίας Βόρεια του Τροόδους: Και τα Πέντε Φράγματα της Λευκωσίας Γεμάτα — Ξυλιάτος, Κλήρου, Σόλεα, Καλοπαναγιώτης και Ταμασσός Υπερχειλίζουν',
      ru: 'Засуха отступила к северу от Троодоса: все пять никосийских дамб полны — Ксилиатос, Клиру, Солеа, Калопанайотис и Тамассос переполнены',
    },
    description: {
      en: 'Five dams north of the Troodos — Xyliatos, Kalopanagiotis, Klirou-Malounta, Solea, and Tamassos — are all at 100% capacity as of 31 March. For the Nicosia district, the drought is over.',
      el: 'Πέντε φράγματα βόρεια του Τροόδους — Ξυλιάτος, Καλοπαναγιώτης, Κλήρου-Μαλούντα, Σόλεα και Ταμασσός — βρίσκονται όλα στο 100% χωρητικότητας στις 30 Μαρτίου. Για την επαρχία Λευκωσίας, η ξηρασία έχει τελειώσει.',
      ru: 'Пять водохранилищ к северу от Троодоса — Ксилиатос, Калопанайотис, Клиру-Малунта, Солеа и Тамассос — все на 100% ёмкости по данным на 30 марта. Для района Никосии засуха завершилась.',
    },
  },
  {
    slug: '2026-04-03-kalavasos-southern-conveyor',
    date: '2026-04-03',
    dataSetId: '02-APR-2026',
    author: 'Vladimir Bugay',
    title: {
      en: 'Why Kalavasos Dam Drops When It Rains: The Southern Conveyor Explained',
      el: 'Γιατί το Φράγμα Καλαβασού Πέφτει Ενώ Βρέχει: Εξήγηση του Νότιου Αγωγού',
      ru: 'Почему уровень дамбы Калавасос падает, когда идёт дождь: объяснение Южного водовода',
    },
    description: {
      en: 'A reader noticed Kalavasos keeps dropping even after rainfall. The answer involves a deliberate WDD extraction strategy, the Southern Conveyor system, and alarming gaps in dam safety monitoring.',
      el: 'Ένας αναγνώστης παρατήρησε ότι ο Καλαβασός συνεχίζει να πέφτει ακόμα και μετά τη βροχή. Η απάντηση αφορά τη σκόπιμη στρατηγική άντλησης του ΤΑΥ, το σύστημα του Νότιου Αγωγού και ανησυχητικά κενά στην παρακολούθηση ασφάλειας φραγμάτων.',
      ru: 'Читатель заметил, что Калавасос продолжает снижаться даже после дождя. Ответ связан с намеренной стратегией откачки Департамента водного развития, системой Южного водовода и тревожными пробелами в мониторинге безопасности дамб.',
    },
  },
  {
    slug: '2026-03-27-famagusta-water-supply',
    date: '2026-03-27',
    dataSetId: '23-MAR-2026',
    author: 'Vladimir Bugay',
    title: {
      en: 'Where Does Protaras Get Its Water? Desalination, Pipes, and the Empty Dam That Was Never the Source',
      el: 'Από Πού Παίρνει Νερό η Πρωταράς; Αφαλάτωση, Αγωγοί και το Άδειο Φράγμα που Ποτέ δεν Ήταν η Πηγή',
      ru: 'Откуда Протарас берёт воду? Опреснение, трубопроводы и пустая дамба, которая никогда не была источником',
    },
    description: {
      en: 'Achna Dam has been empty for ages — so where does Protaras / Ayia Napa / Paralimni actually get its drinking water? The answer involves aging desalination plants, a single 50-year-old pipeline, and infrastructure projects that exist only on paper.',
      el: 'Το Φράγμα Αχνας είναι άδειο εδώ και χρόνια — πού παίρνει λοιπόν πόσιμο νερό η Πρωταράς / Αγία Νάπα / Παραλίμνι; Η απάντηση αφορά γηρασμένες μονάδες αφαλάτωσης, έναν μοναδικό αγωγό 50 ετών και έργα υποδομής που υπάρχουν μόνο στα χαρτιά.',
      ru: 'Дамба Ахна пуста уже давно — откуда тогда Протарас / Айя-Напа / Паралимни берут питьевую воду? Ответ связан со стареющими опреснительными установками, единственным 50-летним трубопроводом и инфраструктурными проектами, существующими только на бумаге.',
    },
  },
  {
    slug: '2026-03-23-reserves-exceed-last-year',
    date: '2026-03-23',
    dataSetId: '23-MAR-2026',
    author: 'Vladimir Bugay',
    title: {
      en: 'Cyprus Reservoirs Exceed Last Year for the First Time — 12 mln. m³ in 3 Days, Xyliatos Overflows',
      el: 'Τα φράγματα Κύπρου ξεπέρασαν πέρυσι για πρώτη φορά — 12 εκ. m³ σε 3 ημέρες, ο Ξυλιάτος υπερχείλισε',
      ru: 'Водохранилища Кипра впервые превысили прошлогодний уровень — 12 млн. м³ за 3 дня, Ксилиатос вышел из берегов',
    },
    description: {
      en: 'Exceptional Troodos rainfall delivers 12 mln. m³ in 72 hours, pushing total storage to 26.9% — above last year for the first time this season.',
      el: 'Εξαιρετικές βροχοπτώσεις Τροόδους αποδίδουν 12 εκ. m³ σε 72 ώρες, ανεβάζοντας αποθέματα στο 26.9% — πάνω από πέρυσι για πρώτη φορά φέτος.',
      ru: 'Исключительные осадки на Троодосе приносят 12 млн. м³ за 72 часа, поднимая общий запас до 26.9% — впервые в этом сезоне выше прошлогоднего уровня.',
    },
  },
  {
    slug: '2026-03-02-cyprus-reservoirs-forecast',
    date: '2026-03-02',
    dataSetId: '02-MAR-2026',
    author: 'Vladimir Bugay',
    title: {
      en: 'Cyprus Reservoirs at 20.6% with Forecast Down to 7% — But 38 Years of Data Promise a Turnaround',
      el: 'Ταμιευτήρες Κύπρου στο 20.6% με πρόβλεψη πτώσης στο 7% — Αλλά 38 χρόνια δεδομένων υπόσχονται ανάκαμψη',
      ru: 'Водохранилища Кипра: 20.6% и прогноз до 7% — но данные за 38 лет обещают разворот',
    },
    description: {
      en: 'Analysis of current Cyprus reservoir levels and forecast based on 38 years of hydrological data.',
      el: 'Ανάλυση τρεχόντων επιπέδων ταμιευτήρων Κύπρου και πρόβλεψη βάσει 38 ετών υδρολογικών δεδομένων.',
      ru: 'Анализ текущего состояния водохранилищ Кипра и прогноз на основе 38 лет гидрологических данных.',
    },
  },
  {
    slug: '2026-03-18-drought-retreating',
    date: '2026-03-18',
    dataSetId: '18-MAR-2026',
    author: 'Vladimir Bugay',
    title: {
      en: 'Is the Drought Retreating? 12 of 21 Cyprus Reservoirs Exceed Last Year\'s Levels',
      el: 'Υποχωρεί η ξηρασία; 12 από 21 ταμιευτήρες Κύπρου ξεπέρασαν τα περυσινά επίπεδα',
      ru: 'Засуха отступает? 12 из 21 водохранилища Кипра превысили прошлогодний уровень',
    },
    description: {
      en: 'Updated Fragmata analysis: forecast improved, water deficit unlikely.',
      el: 'Ενημερωμένη ανάλυση Fragmata: η πρόβλεψη βελτιώθηκε, το έλλειμμα νερού απίθανο.',
      ru: 'Обновлённый анализ Fragmata: прогноз улучшился, дефицит маловероятен.',
    },
  },
];

export function getAllArticles(): ArticleMeta[] {
  return [...ARTICLES].filter((a) => !a.hidden).sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getLatestPublishedArticle(): ArticleMeta | undefined {
  const today = new Date().toISOString().slice(0, 10);
  return getAllArticles().find((a) => a.date <= today);
}

export function getAllArticleSlugs(): string[] {
  return ARTICLES.filter((a) => !a.hidden).map((a) => a.slug);
}

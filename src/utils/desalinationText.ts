import type { Locale } from '@/utils/locale';
import type { PlantStatus } from '@/utils/desalinationData';

/** Interface text for the desalination page and map layer. */
export const DESAL_TEXT: Record<Locale, {
  nav: string; title: string; intro: string;
  inService: string; inServiceSub: (permanent: number, mobile: number) => string;
  share: string; shareSub: (week: string) => string;
  planned: string; plannedSub: string;
  mapTitle: string; mapNote: string;
  tableTitle: string; plant: string; type: string; capacity: string; status: string; startCol: string; lastWeekCol: string;
  permanent: string; mobile: string; perDay: string; since: string; expected: string; lastWeek: string;
  approx: string; more: string; readArticle: string; netNote: string; sources: string;
}> = {
  en: {
    nav: 'Desalination',
    title: 'Desalination in Cyprus',
    intro: 'Most of the island\'s drinking water now comes from the sea. Desalinated water never reaches a dam: it goes straight into the drinking-water network, and every cubic metre of it is one the dams do not have to supply. This page tracks the plants, what they produce each week and what is planned.',
    inService: 'Capacity in service',
    inServiceSub: (p, m) => `m³ a day: ${p} permanent plants and ${m} mobile units`,
    share: 'Tap water from desalination',
    shareSub: w => `in the week to ${w}, WDD weekly bulletin`,
    planned: 'Approved, net',
    plannedSub: 'm³ a day more from four new permanent plants, due 2029–2031',
    mapTitle: 'Where the plants are',
    mapNote: 'Squares are desalination plants, sized by capacity: solid ones are running, hollow ones are being built or tendered, dashed ones are approved. Faded markers are at approximate locations.',
    tableTitle: 'Every plant, running and planned',
    plant: 'Plant', type: 'Type', capacity: 'Capacity', status: 'Status', startCol: 'Since / due', lastWeekCol: 'Last reported week',
    permanent: 'Permanent', mobile: 'Mobile', perDay: 'm³/day', since: 'In service since', expected: 'Expected',
    lastWeek: 'Last reported week', approx: 'Approximate location', more: 'All desalination plants',
    readArticle: 'Read: where Cyprus\'s water comes from, and where it goes',
    netNote: 'The new Dhekelia plant replaces the existing one, so it adds 20,000 m³ a day, not 80,000.',
    sources: 'Sources: Cyprus Water Development Department (weekly «Δελτίο Νερού» bulletins and the «Πηγές Ύδρευσης» supply table), Audit Office of the Republic, cabinet and ministry announcements; plant locations from the Department of Lands and Surveys. Statuses are updated by hand as news arrives.',
  },
  el: {
    nav: 'Αφαλάτωση',
    title: 'Αφαλάτωση στην Κύπρο',
    intro: 'Το μεγαλύτερο μέρος του πόσιμου νερού του νησιού έρχεται πλέον από τη θάλασσα. Το αφαλατωμένο νερό δεν φτάνει ποτέ σε φράγμα: πηγαίνει κατευθείαν στο δίκτυο ύδρευσης, και κάθε κυβικό του είναι ένα κυβικό που δεν χρειάζεται να δώσουν τα φράγματα. Εδώ παρακολουθούμε τις μονάδες, την εβδομαδιαία παραγωγή τους και όσα σχεδιάζονται.',
    inService: 'Δυναμικότητα σε λειτουργία',
    inServiceSub: (p, m) => `κ.μ. την ημέρα: ${p} μόνιμες μονάδες και ${m} κινητές`,
    share: 'Νερό βρύσης από αφαλάτωση',
    shareSub: w => `την εβδομάδα ως τις ${w}, εβδομαδιαίο δελτίο ΤΑΥ`,
    planned: 'Εγκρίθηκαν, καθαρά',
    plannedSub: 'κ.μ. την ημέρα επιπλέον από τέσσερις νέες μόνιμες μονάδες, 2029–2031',
    mapTitle: 'Πού βρίσκονται οι μονάδες',
    mapNote: 'Τα τετράγωνα είναι μονάδες αφαλάτωσης, με μέγεθος ανάλογο της δυναμικότητας: γεμάτα όσες λειτουργούν, κενά όσες κατασκευάζονται ή είναι σε διαγωνισμό, διακεκομμένα όσες έχουν εγκριθεί. Τα αχνά σημεία είναι σε κατά προσέγγιση θέση.',
    tableTitle: 'Όλες οι μονάδες, σε λειτουργία και σχεδιαζόμενες',
    plant: 'Μονάδα', type: 'Τύπος', capacity: 'Δυναμικότητα', status: 'Κατάσταση', startCol: 'Από / έως', lastWeekCol: 'Τελευταία εβδομάδα',
    permanent: 'Μόνιμη', mobile: 'Κινητή', perDay: 'κ.μ./ημέρα', since: 'Σε λειτουργία από', expected: 'Αναμένεται',
    lastWeek: 'Τελευταία εβδομάδα', approx: 'Κατά προσέγγιση θέση', more: 'Όλες οι μονάδες αφαλάτωσης',
    readArticle: 'Διαβάστε: από πού έρχεται και πού πηγαίνει το νερό της Κύπρου',
    netNote: 'Η νέα μονάδα της Δεκέλειας αντικαθιστά την υπάρχουσα, άρα προσθέτει 20.000 κ.μ. την ημέρα, όχι 80.000.',
    sources: 'Πηγές: Τμήμα Αναπτύξεως Υδάτων (εβδομαδιαίο «Δελτίο Νερού» και πίνακας «Πηγές Ύδρευσης»), Ελεγκτική Υπηρεσία, ανακοινώσεις Υπουργικού Συμβουλίου και Υπουργείου· θέσεις μονάδων από το Τμήμα Κτηματολογίου και Χωρομετρίας. Η κατάσταση κάθε μονάδας ενημερώνεται χειροκίνητα.',
  },
  ru: {
    nav: 'Опреснение',
    title: 'Опреснение на Кипре',
    intro: 'Большая часть питьевой воды острова теперь поступает из моря. Опреснённая вода не попадает в водохранилища: она идёт прямо в сеть водоснабжения, и каждый её кубометр — это кубометр, который не нужно брать из водохранилищ. Здесь — опреснительные станции, их недельная выработка и планы.',
    inService: 'Мощность в работе',
    inServiceSub: (p, m) => `м³ в сутки: ${p} постоянных станций и ${m} мобильных установки`,
    share: 'Доля опреснённой воды в кране',
    shareSub: w => `за неделю до ${w}, недельный бюллетень ДВР`,
    planned: 'Одобрено, нетто',
    plannedSub: 'м³ в сутки добавят четыре новые постоянные станции, 2029–2031',
    mapTitle: 'Где находятся станции',
    mapNote: 'Квадраты — опреснительные станции, размер зависит от мощности: заполненные работают, пустые строятся или на тендере, пунктирные одобрены. Бледные метки стоят в приблизительном месте.',
    tableTitle: 'Все станции, действующие и планируемые',
    plant: 'Станция', type: 'Тип', capacity: 'Мощность', status: 'Статус', startCol: 'С / к', lastWeekCol: 'Последняя неделя',
    permanent: 'Постоянная', mobile: 'Мобильная', perDay: 'м³/сут', since: 'Работает с', expected: 'Ожидается',
    lastWeek: 'Последняя неделя', approx: 'Приблизительное место', more: 'Все опреснительные станции',
    readArticle: 'Читайте: откуда на Кипре берётся вода и куда уходит',
    netNote: 'Новая станция в Декелии заменит существующую, поэтому прибавит 20 000 м³ в сутки, а не 80 000.',
    sources: 'Источники: Департамент водного развития Кипра (недельный бюллетень «Δελτίο Νερού» и таблица «Πηγές Ύδρευσης»), Счётная палата, решения Совета министров и министерства; местоположение станций — Департамент земель и кадастра. Статусы обновляются вручную.',
  },
};

const STATUS: Record<PlantStatus, Record<Locale, string>> = {
  operating: { en: 'Operating', el: 'Σε λειτουργία', ru: 'Работает' },
  construction: { en: 'Under construction', el: 'Υπό κατασκευή', ru: 'Строится' },
  tender: { en: 'Tender, not awarded', el: 'Σε διαγωνισμό', ru: 'Тендер' },
  approved: { en: 'Approved, not tendered', el: 'Εγκρίθηκε', ru: 'Одобрена' },
  postponed: { en: 'Postponed', el: 'Αναβλήθηκε', ru: 'Отложена' },
  cancelled: { en: 'Cancelled', el: 'Ακυρώθηκε', ru: 'Отменена' },
};

export const statusLabel = (s: PlantStatus, lang: Locale) => STATUS[s][lang];

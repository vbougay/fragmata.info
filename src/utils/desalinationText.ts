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
  approx: string; more: string; plantPage: string; readArticle: string; netNote: string; sources: string;
  dashIntro: string; desalDay: string; desalDaySub: string; damsDay: string; damsDaySub: string;
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
    lastWeek: 'Last reported week', approx: 'Approximate location', more: 'All desalination plants', plantPage: 'Plant page',
    readArticle: 'Read: where Cyprus\'s water comes from, and where it goes',
    netNote: 'The new Dhekelia plant replaces the existing one, so it adds 20,000 m³ a day, not 80,000.',
    dashIntro: 'Most tap water now comes from the sea. Desalinated water goes straight into the drinking-water network, never into a dam, so each cubic metre of it is one the dams do not have to supply.',
    desalDay: 'Desalinated', desalDaySub: 'm³ a day on average that week',
    damsDay: 'From the dams', damsDaySub: 'm³ a day through the treatment plants that week',
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
    lastWeek: 'Τελευταία εβδομάδα', approx: 'Κατά προσέγγιση θέση', more: 'Όλες οι μονάδες αφαλάτωσης', plantPage: 'Σελίδα της μονάδας',
    readArticle: 'Διαβάστε: από πού έρχεται και πού πηγαίνει το νερό της Κύπρου',
    netNote: 'Η νέα μονάδα της Δεκέλειας αντικαθιστά την υπάρχουσα, άρα προσθέτει 20.000 κ.μ. την ημέρα, όχι 80.000.',
    dashIntro: 'Το μεγαλύτερο μέρος του νερού της βρύσης έρχεται πλέον από τη θάλασσα. Το αφαλατωμένο νερό πηγαίνει κατευθείαν στο δίκτυο ύδρευσης, ποτέ σε φράγμα, άρα κάθε κυβικό του είναι ένα κυβικό που δεν χρειάζεται να δώσουν τα φράγματα.',
    desalDay: 'Αφαλατωμένο', desalDaySub: 'κ.μ. την ημέρα κατά μέσο όρο εκείνη την εβδομάδα',
    damsDay: 'Από τα φράγματα', damsDaySub: 'κ.μ. την ημέρα μέσω των διυλιστηρίων εκείνη την εβδομάδα',
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
    lastWeek: 'Последняя неделя', approx: 'Приблизительное место', more: 'Все опреснительные станции', plantPage: 'Страница станции',
    readArticle: 'Читайте: откуда на Кипре берётся вода и куда уходит',
    netNote: 'Новая станция в Декелии заменит существующую, поэтому прибавит 20 000 м³ в сутки, а не 80 000.',
    dashIntro: 'Большая часть воды в кране теперь поступает из моря. Опреснённая вода идёт прямо в сеть водоснабжения, а не в водохранилища, поэтому каждый её кубометр — это кубометр, который не нужно брать из водохранилищ.',
    desalDay: 'Опреснено', desalDaySub: 'м³ в сутки в среднем за ту неделю',
    damsDay: 'Из водохранилищ', damsDaySub: 'м³ в сутки через станции очистки за ту неделю',
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

export const DISTRICT: Record<string, Record<Locale, string>> = {
  Larnaca: { en: 'Larnaca', el: 'Λάρνακα', ru: 'Ларнака' },
  Limassol: { en: 'Limassol', el: 'Λεμεσός', ru: 'Лимассол' },
  Paphos: { en: 'Paphos', el: 'Πάφος', ru: 'Пафос' },
  Famagusta: { en: 'Famagusta', el: 'Αμμόχωστος', ru: 'Фамагуста' },
};

/** District in the genitive, for "in the … district" phrasing. */
export const DISTRICT_GEN: Record<string, Record<Locale, string>> = {
  Larnaca: { en: 'Larnaca', el: 'Λάρνακας', ru: 'Ларнаки' },
  Limassol: { en: 'Limassol', el: 'Λεμεσού', ru: 'Лимассола' },
  Paphos: { en: 'Paphos', el: 'Πάφου', ru: 'Пафоса' },
  Famagusta: { en: 'Famagusta', el: 'Αμμοχώστου', ru: 'Фамагусты' },
};

/** Interface text for the individual plant pages (/desalination/<id>). */
export const PLANT_TEXT: Record<Locale, {
  kindLine: (permanent: boolean) => string;
  district: string; replaces: string;
  tempExtra: (m3: string, until: string) => string;
  output: string; outputSub: (week: string) => string;
  utilisation: string; utilisationSub: (cap: string) => string;
  shareOfDesal: string; shareOfDesalSub: string;
  chartTitle: string; chartSub: (cap: string) => string; chartSource: string; noAug: string;
  notInBulletin: string; notYet: string;
  location: string; about: string; others: string; source: string;
  metaTitle: (name: string, permanent: boolean) => string;
  metaDescription: (name: string, permanent: boolean, district: string, cap: string, status: string) => string;
}> = {
  en: {
    kindLine: p => (p ? 'Permanent desalination plant' : 'Mobile desalination unit'),
    district: 'District', replaces: 'Replaces',
    tempExtra: (m3, until) => `+ ${m3} temporary until ${until}`,
    output: 'Average output', outputSub: w => `m³ a day in the week to ${w}`,
    utilisation: 'Running at', utilisationSub: c => `of its ${c} m³ a day that week`,
    shareOfDesal: 'Share of desalinated water', shareOfDesalSub: 'of all desalinated water on the island that week',
    chartTitle: 'Output week by week',
    chartSub: c => `Average m³ a day in each week with a published bulletin. The dashed line is the plant's capacity, ${c} m³ a day.`,
    chartSource: 'Cyprus Water Development Department, weekly «Δελτίο Νερού» workbooks, 2026 (plant output published from June).',
    noAug: ' There is no bulletin for August.',
    notInBulletin: 'This unit is not listed in the Water Development Department\'s weekly bulletin, so its output is not published.',
    notYet: 'Not producing water yet.',
    location: 'Location', about: 'About', others: 'Other desalination plants', source: 'Main source',
    metaTitle: (n, p) => `${n} ${p ? 'Desalination Plant' : 'Mobile Desalination Unit'}, Cyprus`,
    metaDescription: (n, p, d, c, s) => `${n}, a ${p ? 'permanent desalination plant' : 'mobile desalination unit'} in the ${d} district of Cyprus: ${c} m³ a day, ${s.toLowerCase()}. Weekly output, location and history.`,
  },
  el: {
    kindLine: p => (p ? 'Μόνιμη μονάδα αφαλάτωσης' : 'Κινητή μονάδα αφαλάτωσης'),
    district: 'Επαρχία', replaces: 'Αντικαθιστά',
    tempExtra: (m3, until) => `+ ${m3} προσωρινά ως τον ${until}`,
    output: 'Μέση παραγωγή', outputSub: w => `κ.μ. την ημέρα την εβδομάδα ως τις ${w}`,
    utilisation: 'Λειτουργεί στο', utilisationSub: c => `των ${c} κ.μ. την ημέρα εκείνη την εβδομάδα`,
    shareOfDesal: 'Μερίδιο στο αφαλατωμένο νερό', shareOfDesalSub: 'όλου του αφαλατωμένου νερού του νησιού εκείνη την εβδομάδα',
    chartTitle: 'Παραγωγή εβδομάδα με εβδομάδα',
    chartSub: c => `Μέσος όρος κ.μ. την ημέρα σε κάθε εβδομάδα με δημοσιευμένο δελτίο. Η διακεκομμένη γραμμή είναι η δυναμικότητα της μονάδας, ${c} κ.μ. την ημέρα.`,
    chartSource: 'Τμήμα Αναπτύξεως Υδάτων, εβδομαδιαία αρχεία «Δελτίο Νερού», 2026 (παραγωγή μονάδων από τον Ιούνιο).',
    noAug: ' Για τον Αύγουστο δεν υπάρχει δελτίο.',
    notInBulletin: 'Η μονάδα δεν περιλαμβάνεται στο εβδομαδιαίο δελτίο του Τμήματος Αναπτύξεως Υδάτων, άρα η παραγωγή της δεν δημοσιεύεται.',
    notYet: 'Δεν παράγει ακόμη νερό.',
    location: 'Τοποθεσία', about: 'Σχετικά', others: 'Άλλες μονάδες αφαλάτωσης', source: 'Κύρια πηγή',
    // Name first: after «Μονάδα Αφαλάτωσης» the place would need the genitive.
    metaTitle: (n, p) => `${n}: ${p ? 'Μονάδα Αφαλάτωσης' : 'Κινητή Μονάδα Αφαλάτωσης'} στην Κύπρο`,
    metaDescription: (n, p, d, c, s) => `${n}: ${p ? 'μόνιμη μονάδα αφαλάτωσης' : 'κινητή μονάδα αφαλάτωσης'} στην επαρχία ${d}, ${c} κ.μ. την ημέρα, ${s.toLowerCase()}. Εβδομαδιαία παραγωγή, τοποθεσία και ιστορικό.`,
  },
  ru: {
    kindLine: p => (p ? 'Постоянная опреснительная станция' : 'Мобильная опреснительная установка'),
    district: 'Район', replaces: 'Заменит',
    tempExtra: (m3, until) => `+ ${m3} временно до ${until}`,
    output: 'Средняя выработка', outputSub: w => `м³ в сутки за неделю до ${w}`,
    utilisation: 'Загрузка', utilisationSub: c => `от ${c} м³ в сутки за ту неделю`,
    shareOfDesal: 'Доля в опреснённой воде', shareOfDesalSub: 'всей опреснённой воды острова за ту неделю',
    chartTitle: 'Выработка по неделям',
    chartSub: c => `Среднее м³ в сутки за каждую неделю с опубликованным бюллетенем. Пунктир — мощность станции, ${c} м³ в сутки.`,
    chartSource: 'Департамент водного развития Кипра, еженедельные файлы «Δελτίο Νερού», 2026 (выработка станций публикуется с июня).',
    noAug: ' За август бюллетеня нет.',
    notInBulletin: 'Установки нет в еженедельном бюллетене Департамента водного развития, поэтому её выработка не публикуется.',
    notYet: 'Пока не производит воду.',
    location: 'Местоположение', about: 'О станции', others: 'Другие опреснительные станции', source: 'Основной источник',
    metaTitle: (n, p) => `${p ? 'Опреснительная станция' : 'Мобильная опреснительная установка'} ${n}, Кипр`,
    metaDescription: (n, p, d, c, s) => `${n}: ${p ? 'постоянная опреснительная станция' : 'мобильная опреснительная установка'} в районе ${d}, ${c} м³ в сутки, статус: ${s.toLowerCase()}. Недельная выработка, местоположение и история.`,
  },
};

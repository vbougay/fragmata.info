/**
 * Desalination plants and the yearly drinking-water record, for the /desalination page,
 * the map layer and article charts. Status is kept by hand: update it when news lands.
 * Research and sources: community/research/DESALINATION-RESEARCH.md and plants.tsv.
 *
 * Coordinates: the six main sites are the Department of Lands and Surveys points
 * (data.gov.cy, CC BY 4.0); the rest are approximate (village or site centroids) and are
 * flagged. Plants whose site is not known have no coordinates and are left off the map.
 */
import type { Locale } from '@/utils/locale';
import { WEEKLY_BULLETINS } from '@/utils/desalinationWeekly';

export type PlantKind = 'permanent' | 'mobile';
export type PlantStatus = 'operating' | 'construction' | 'tender' | 'approved' | 'postponed' | 'cancelled';

export interface DesalPlant {
  id: string;
  name: Record<Locale, string>;
  kind: PlantKind;
  status: PlantStatus;
  /** Nominal capacity, m³ a day. */
  capacity: number;
  /** Year of first water, or the year now promised. */
  start: string;
  district: 'Larnaca' | 'Limassol' | 'Paphos' | 'Famagusta';
  coords?: { lat: number; lng: number; approx?: boolean };
  /** Key in the weekly bulletin's desalination table, when the plant is listed there. */
  bulletinKey?: string;
  /** Replaces an existing plant (net capacity is lower). */
  replaces?: string;
  source: string;
}

const AUDIT = 'https://www.gov.cy/media/sites/12/2025/08/IDI_%CE%95%CE%99%CE%94%CE%99%CE%9A%CE%97-%CE%95%CE%9A%CE%98%CE%95%CE%A3%CE%97-%CE%A0%CE%95-01-2025-%CE%94%CE%99%CE%91%CE%A7%CE%95%CE%99%CE%A1%CE%99%CE%A3%CE%97-%CE%9D%CE%95%CE%A1%CE%9F%CE%A5_%CE%9A%CE%9B%CE%99%CE%9C%CE%91%CE%A4%CE%99%CE%9A%CE%97-%CE%91%CE%9B%CE%9B%CE%91%CE%93%CE%97.pdf';
const CABINET_2SEP = 'https://www.gov.cy/georgia-agrotiki-anaptyxi-perivallon/to-ypourgiko-symvoulio-apofasise-treis-nees-monimes-monades-afalatosis-sti-vasi-epikairopoiimenou-schediasmou-gia-tin-enischysi-tis-ydatikis-asfaleias/';
const MINISTRY_5APR = 'https://www.gov.cy/georgia-agrotiki-anaptyxi-perivallon/anakoinosi-tou-ypourgeiou-georgias-agrotikis-anaptyxis-kai-perivallontos-se-pliri-leitourgia-i-monada-afalatosis-sto-limani-lemesou/';

export const DESAL_PLANTS: DesalPlant[] = [
  // Permanent plants in operation
  { id: 'dhekelia', name: { en: 'Dhekelia', el: 'Δεκέλεια', ru: 'Декелия' }, kind: 'permanent', status: 'operating', capacity: 60000, start: '1997', district: 'Larnaca', coords: { lat: 34.98551, lng: 33.75807 }, bulletinKey: 'dhekelia', source: AUDIT },
  { id: 'larnaca', name: { en: 'Larnaca', el: 'Λάρνακα', ru: 'Ларнака' }, kind: 'permanent', status: 'operating', capacity: 60000, start: '2001', district: 'Larnaca', coords: { lat: 34.86925, lng: 33.63084 }, bulletinKey: 'larnaca', source: AUDIT },
  { id: 'vasilikos', name: { en: 'Vasilikos', el: 'Βασιλικό', ru: 'Василикос' }, kind: 'permanent', status: 'operating', capacity: 60000, start: '2014', district: 'Larnaca', coords: { lat: 34.72507, lng: 33.28886 }, bulletinKey: 'vasilikos', source: AUDIT },
  { id: 'episkopi', name: { en: 'Episkopi', el: 'Επισκοπή', ru: 'Эпископи' }, kind: 'permanent', status: 'operating', capacity: 40000, start: '2014', district: 'Limassol', coords: { lat: 34.64323, lng: 32.90355 }, bulletinKey: 'episkopi', source: AUDIT },
  { id: 'paphos', name: { en: 'Paphos (Kouklia)', el: 'Πάφος (Κούκλια)', ru: 'Пафос (Куклия)' }, kind: 'permanent', status: 'operating', capacity: 15000, start: '2021', district: 'Paphos', coords: { lat: 34.69774, lng: 32.54891 }, bulletinKey: 'paphos', source: AUDIT },
  // Mobile units
  { id: 'moni', name: { en: 'Moni', el: 'Μονή', ru: 'Мони' }, kind: 'mobile', status: 'operating', capacity: 15000, start: '2025', district: 'Limassol', coords: { lat: 34.71008, lng: 33.18498 }, bulletinKey: 'moni', source: 'https://www.gov.cy/georgia-agrotiki-anaptyxi-perivallon/enarxi-tis-leitourgias-kiniton-monadon-afalatosis-me-stocho-tin-enischysi-tou-ydatikou-isozygiou-tis-kyprou/' },
  { id: 'kissonerga', name: { en: 'Kissonerga', el: 'Κισσόνεργα', ru: 'Киссонерга' }, kind: 'mobile', status: 'operating', capacity: 12000, start: '2025', district: 'Paphos', coords: { lat: 34.8433, lng: 32.3873, approx: true }, bulletinKey: 'kissonerga', source: 'https://ted.europa.eu/en/notice/433062-2025/xml' },
  { id: 'limassol-port', name: { en: 'Limassol port', el: 'Λιμάνι Λεμεσού', ru: 'Порт Лимассола' }, kind: 'mobile', status: 'operating', capacity: 10000, start: '2026', district: 'Limassol', coords: { lat: 34.6526, lng: 33.013, approx: true }, bulletinKey: 'limassol-port', source: MINISTRY_5APR },
  { id: 'garyllis', name: { en: 'Garyllis (brackish groundwater)', el: 'Γαρύλλης (υφάλμυρα υπόγεια νερά)', ru: 'Гарилис (солоноватые грунтовые воды)' }, kind: 'mobile', status: 'operating', capacity: 10000, start: '2026', district: 'Limassol', source: 'https://www.gov.cy/georgia-agrotiki-anaptyxi-perivallon/episkepsi-tis-ypourgou-georgias-agrotikis-anaptyxis-kai-perivallontos-stis-nees-monades-afalatosis-sti-lemeso/' },
  { id: 'episkopi-temporary', name: { en: 'Episkopi (temporary unit)', el: 'Επισκοπή (προσωρινή μονάδα)', ru: 'Эпископи (временная установка)' }, kind: 'mobile', status: 'construction', capacity: 10000, start: '2026', district: 'Limassol', coords: { lat: 34.6438, lng: 32.9036, approx: true }, source: 'https://ted.europa.eu/en/notice/81217-2026/xml' },
  { id: 'vasilikos-temporary', name: { en: 'Vasilikos (temporary unit)', el: 'Βασιλικό (προσωρινή μονάδα)', ru: 'Василикос (временная установка)' }, kind: 'mobile', status: 'tender', capacity: 20000, start: '2027', district: 'Larnaca', coords: { lat: 34.7295, lng: 33.2903, approx: true }, source: 'https://ted.europa.eu/en/notice/820505-2025/xml' },
  { id: 'mazotos', name: { en: 'Mazotos', el: 'Μαζωτός', ru: 'Мазотос' }, kind: 'mobile', status: 'tender', capacity: 40000, start: '2027', district: 'Larnaca', coords: { lat: 34.8041, lng: 33.4884, approx: true }, source: 'https://www.philenews.com/kipros/koinonia/article/1734685/afalatosi-ston-mazoto-para-tis-antidrasis-apofasi-gia-apallotriosi-gia-ton-dromo-prosvasis-ektoxevete-to-kostos-tou-ergou-sta-e92-ekat/' },
  // New permanent plants
  { id: 'east-limassol', name: { en: 'East Limassol (Monagroulli)', el: 'Ανατολική Λεμεσός (Μοναγρούλλι)', ru: 'Восточный Лимассол (Монагрулли)' }, kind: 'permanent', status: 'approved', capacity: 60000, start: '2029', district: 'Limassol', coords: { lat: 34.7488, lng: 33.213, approx: true }, source: 'https://www.philenews.com/kipros/koinonia/article/1720685/e80-ekat-to-kostos-gia-nea-monada-afalatosis-sto-monagroulli-to-ergo-dinamikotitas-60-000k-m-imera-beni-se-trochia-ilopiisis/' },
  { id: 'new-dhekelia', name: { en: 'New Dhekelia', el: 'Νέα Δεκέλεια', ru: 'Новая Декелия' }, kind: 'permanent', status: 'approved', capacity: 80000, start: '2030', district: 'Larnaca', coords: { lat: 34.98551, lng: 33.75807, approx: true }, replaces: 'dhekelia', source: CABINET_2SEP },
  { id: 'agia-thekla', name: { en: 'Agia Thekla', el: 'Αγία Θέκλα', ru: 'Айя-Текла' }, kind: 'permanent', status: 'approved', capacity: 30000, start: '2030', district: 'Famagusta', coords: { lat: 34.9808, lng: 33.934, approx: true }, source: CABINET_2SEP },
  { id: 'polis', name: { en: 'Polis Chrysochous', el: 'Πόλη Χρυσοχούς', ru: 'Полис-Хрисоху' }, kind: 'permanent', status: 'approved', capacity: 10000, start: '2031', district: 'Paphos', coords: { lat: 35.0408, lng: 32.3939, approx: true }, source: CABINET_2SEP },
  // Shelved
  { id: 'germasogeia-floating', name: { en: 'Germasogeia (floating unit)', el: 'Γερμασόγεια (πλωτή μονάδα)', ru: 'Гермасогея (плавучая установка)' }, kind: 'mobile', status: 'postponed', capacity: 20000, start: '–', district: 'Limassol', source: CABINET_2SEP },
  { id: 'ayia-napa', name: { en: 'Ayia Napa', el: 'Αγία Νάπα', ru: 'Айя-Напа' }, kind: 'mobile', status: 'cancelled', capacity: 15000, start: '–', district: 'Famagusta', source: CABINET_2SEP },
];

export const operatingCapacity = () =>
  DESAL_PLANTS.filter(p => p.status === 'operating').reduce((a, p) => a + p.capacity, 0);

/** Date of the cabinet decision that completed today's list of approved plants; before it, `plannedNetCapacity` overstates what was approved. */
export const PLANNED_AS_OF = '2026-09-02';

/** Net capacity the approved permanent plants add (a replacement only counts its increase). */
export const plannedNetCapacity = () =>
  DESAL_PLANTS.filter(p => p.status === 'approved').reduce((a, p) => {
    const old = p.replaces ? DESAL_PLANTS.find(q => q.id === p.replaces)?.capacity ?? 0 : 0;
    return a + p.capacity - old;
  }, 0);

/**
 * Drinking water supplied by the Government Water Works, by origin, mln. m³ a year.
 * WDD table «Πηγές Ύδρευσης» (1991–2024). Tankers: water shipped from Greece in 2008–09.
 */
export interface SupplyYear { year: number; dams: number; desalination: number; boreholes: number; tankers?: number }

export const SUPPLY_BY_SOURCE_URL = 'https://www.gov.cy/media/sites/168/2026/02/Diathesi_Domestic_2024_grk.xls';

export const SUPPLY_BY_SOURCE: SupplyYear[] = [
  { year: 1997, boreholes: 19.1, dams: 20.3, desalination: 5.4 },
  { year: 1998, boreholes: 15.2, dams: 16.6, desalination: 10.9 },
  { year: 1999, boreholes: 16.3, dams: 18.0, desalination: 13.9 },
  { year: 2000, boreholes: 14.0, dams: 20.3, desalination: 13.6 },
  { year: 2001, boreholes: 12.6, dams: 23.6, desalination: 21.8 },
  { year: 2002, boreholes: 19.6, dams: 13.6, desalination: 29.8 },
  { year: 2003, boreholes: 18.7, dams: 17.0, desalination: 30.1 },
  { year: 2004, boreholes: 16.5, dams: 23.3, desalination: 29.1 },
  { year: 2005, boreholes: 16.8, dams: 25.5, desalination: 31.0 },
  { year: 2006, boreholes: 12.2, dams: 35.3, desalination: 26.2 },
  { year: 2007, boreholes: 11.1, dams: 35.7, desalination: 27.1 },
  { year: 2008, boreholes: 11.8, dams: 14.8, desalination: 32.6, tankers: 3.3 },
  { year: 2009, boreholes: 11.3, dams: 7.6, desalination: 49.4, tankers: 2.0 },
  { year: 2010, boreholes: 7.9, dams: 21.4, desalination: 52.8 },
  { year: 2011, boreholes: 6.7, dams: 25.9, desalination: 48.0 },
  { year: 2012, boreholes: 9.4, dams: 51.9, desalination: 17.6 },
  { year: 2013, boreholes: 7.7, dams: 59.1, desalination: 10.7 },
  { year: 2014, boreholes: 5.3, dams: 41.6, desalination: 32.8 },
  { year: 2015, boreholes: 6.2, dams: 38.2, desalination: 37.5 },
  { year: 2016, boreholes: 5.2, dams: 16.4, desalination: 68.2 },
  { year: 2017, boreholes: 5.1, dams: 21.4, desalination: 67.6 },
  { year: 2018, boreholes: 4.5, dams: 24.8, desalination: 66.1 },
  { year: 2019, boreholes: 4.4, dams: 34.5, desalination: 54.9 },
  { year: 2020, boreholes: 5.1, dams: 55.4, desalination: 29.6 },
  { year: 2021, boreholes: 5.2, dams: 43.6, desalination: 48.4 },
  { year: 2022, boreholes: 6.1, dams: 42.9, desalination: 52.7 },
  { year: 2023, boreholes: 4.5, dams: 41.5, desalination: 59.9 },
  { year: 2024, boreholes: 3.1, dams: 34.6, desalination: 74.9 },
];


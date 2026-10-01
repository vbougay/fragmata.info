import { sendGAEvent } from '@next/third-parties/google';
import type { Locale } from '@/utils/locale';

const KAIRIKA_ORIGIN = 'https://kairika.info';

// Kairika serves English at the root and el/ru under a prefix, like Fragmata.
export function kairikaUrl(language: Locale, path = ''): string {
  return language === 'en' ? `${KAIRIKA_ORIGIN}${path}` : `${KAIRIKA_ORIGIN}/${language}${path}`;
}

// One GA4 event name per placement, so the two show up as separate rows in the
// standard Events report without registering a custom dimension first.
export function trackKairikaClick(placement: 'dashboard' | 'footer', linkUrl: string): void {
  sendGAEvent('event', `kairika_${placement}_click`, { link_url: linkUrl });
}

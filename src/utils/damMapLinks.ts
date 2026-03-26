// Google Maps links for all Cyprus dams/reservoirs.
// Uses well-defined place URLs where available, falls back to coordinate-based URLs.

const reservoirCoordinates: Record<string, { lat: number; lng: number }> = {
  'Kouris': { lat: 34.7278, lng: 32.9178 },
  'Kalavasos': { lat: 34.803972, lng: 33.260517 },
  'Lefkara': { lat: 34.8944, lng: 33.2956 },
  'Dipotamos': { lat: 34.851618, lng: 33.359274 },
  'Germasoyeia': { lat: 34.7439, lng: 33.0843 },
  'Arminou': { lat: 34.8752, lng: 32.7371 },
  'Polemidia': { lat: 34.7187, lng: 32.9888 },
  'Achna': { lat: 35.055321, lng: 33.814307 },
  'Asprokremmos': { lat: 34.7259, lng: 32.5543 },
  'Kannaviou': { lat: 34.9277, lng: 32.5878 },
  'Mavrokolympos': { lat: 34.8565, lng: 32.4058 },
  'Evretou': { lat: 34.9757, lng: 32.4727 },
  'Argaka': { lat: 35.0486, lng: 32.5022 },
  'Pomos': { lat: 35.1449, lng: 32.5762 },
  'Agia Marina': { lat: 35.1170, lng: 32.5410 },
  'Vyzakia': { lat: 35.0615, lng: 33.0272 },
  'Xyliatos': { lat: 35.0089, lng: 33.0372 },
  'Kalopanagiotis': { lat: 35.0061, lng: 32.8254 },
  'Tamassos': { lat: 35.0167, lng: 33.2479 },
  'Klirou-Malounta': { lat: 35.0318, lng: 33.1727 },
  'Solea': { lat: 35.0668, lng: 32.9029 },
};

// Well-defined Google Maps place links (manually verified)
const knownPlaceLinks: Record<string, string> = {
  'Xyliatos': 'https://maps.app.goo.gl/gfWUgGzQdwLu4Nsh7',
};

/**
 * Get a Google Maps URL for a dam by name.
 * Returns a well-defined place link if available, otherwise a coordinate-based URL.
 */
export function getDamMapUrl(damName: string): string | undefined {
  if (knownPlaceLinks[damName]) {
    return knownPlaceLinks[damName];
  }
  const coords = reservoirCoordinates[damName];
  if (!coords) return undefined;
  return `https://www.google.com/maps/search/?api=1&query=${coords.lat},${coords.lng}`;
}

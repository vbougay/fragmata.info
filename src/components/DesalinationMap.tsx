import React from 'react';
import { MapContainer, TileLayer, ZoomControl, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import DesalinationMarkers from '@/components/DesalinationMarkers';

/** Let the page scroll past the map; zoom with the buttons or a pinch instead. */
function NoScrollZoom() {
  const map = useMap();
  React.useEffect(() => { map.scrollWheelZoom.disable(); }, [map]);
  return null;
}

/**
 * Map of desalination plants (loaded client-side only). With `focus` it centres on one plant,
 * as on the plant pages; otherwise it shows the whole island, as on /desalination.
 */
export default function DesalinationMap({ focus }: { focus?: { id: string; lat: number; lng: number } }) {
  return (
    <div className={`w-full rounded-lg overflow-hidden ${focus ? 'h-[320px]' : 'h-[440px]'}`}>
      <MapContainer center={focus ? [focus.lat, focus.lng] : [34.92, 33.1]} zoom={focus ? 11 : 9} style={{ height: '100%', width: '100%' }} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="topright" />
        <NoScrollZoom />
        <DesalinationMarkers focusId={focus?.id} />
      </MapContainer>
    </div>
  );
}

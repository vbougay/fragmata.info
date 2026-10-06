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

/** Map of desalination plants for the /desalination page (loaded client-side only). */
export default function DesalinationMap() {
  return (
    <div className="w-full h-[440px] rounded-lg overflow-hidden">
      <MapContainer center={[34.92, 33.1]} zoom={9} style={{ height: '100%', width: '100%' }} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="topright" />
        <NoScrollZoom />
        <DesalinationMarkers />
      </MapContainer>
    </div>
  );
}

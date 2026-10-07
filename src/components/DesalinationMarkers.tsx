import React from 'react';
import Link from 'next/link';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useLanguage } from '@/context/LanguageContext';
import { defaultLocale } from '@/utils/locale';
import { DESAL_PLANTS, type DesalPlant, type PlantStatus } from '@/utils/desalinationData';
import { WEEKLY_BULLETINS } from '@/utils/desalinationWeekly';
import { DESAL_TEXT, statusLabel } from '@/utils/desalinationText';

const TEAL = '#0f9d8a';

// Latest week with plant output, for the "last reported" line in popups.
const latestWeek = [...WEEKLY_BULLETINS].reverse().find(w => w.desalination);

const ON_MAP: PlantStatus[] = ['operating', 'construction', 'tender', 'approved'];

function icon(p: DesalPlant, focused: boolean) {
  // Square markers so plants read differently from the round dam bubbles; size by capacity.
  const size = Math.round(12 + (p.capacity / 80000) * 14);
  const solid = p.status === 'operating';
  const border = p.status === 'approved' ? 'dashed' : 'solid';
  return L.divIcon({
    className: 'desal-marker',
    html: `<div style="
      width:${size}px;height:${size}px;border-radius:4px;
      background:${solid ? TEAL : 'rgba(255,255,255,0.85)'};
      border:2px ${border} ${solid ? '#ffffff' : TEAL};
      box-shadow:${focused ? `0 0 0 4px rgba(15,157,138,0.35),0 0 6px rgba(0,0,0,0.3)` : '0 0 6px rgba(0,0,0,0.3)'};
      opacity:${p.coords?.approx ? 0.75 : 1};
    "></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

export default function DesalinationMarkers({ focusId }: { focusId?: string } = {}) {
  const { language } = useLanguage();
  const tx = DESAL_TEXT[language];
  const plantHref = (id: string) => (language === defaultLocale ? `/desalination/${id}` : `/${language}/desalination/${id}`);

  return (
    <>
      {DESAL_PLANTS.filter(p => p.coords && ON_MAP.includes(p.status)).map(p => {
        const out = p.bulletinKey ? latestWeek?.desalination?.[p.bulletinKey] : undefined;
        return (
          <Marker key={p.id} position={[p.coords!.lat, p.coords!.lng]} icon={icon(p, p.id === focusId)}>
            <Popup>
              <div style={{ padding: '4px' }}>
                <h3 style={{ margin: 0, fontWeight: 600 }}>{tx.plant}: {p.name[language]}</h3>
                <p style={{ margin: 0 }}>{p.kind === 'permanent' ? tx.permanent : tx.mobile} · {statusLabel(p.status, language)}</p>
                <p style={{ margin: 0 }}>{tx.capacity}: {p.capacity.toLocaleString('en')} {tx.perDay}</p>
                <p style={{ margin: 0 }}>{p.status === 'operating' ? tx.since : tx.expected}: {p.start}</p>
                {out !== undefined && latestWeek && (
                  <p style={{ margin: 0 }}>{tx.lastWeek} ({latestWeek.weekEnding}): {out.toLocaleString('en')} {tx.perDay}</p>
                )}
                {p.coords?.approx && <p style={{ margin: 0, fontStyle: 'italic' }}>{tx.approx}</p>}
                {p.id !== focusId && <p style={{ margin: '4px 0 0' }}><Link href={plantHref(p.id)}>{tx.plantPage} →</Link></p>}
              </div>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}

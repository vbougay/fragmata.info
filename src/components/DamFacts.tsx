"use client";

import React from 'react';
import { CalendarDays, Ruler, Waves, Layers } from 'lucide-react';
import { getDamMetadata, type DamType } from '@/utils/damMetadata';
import { translations } from '@/utils/translations';

type TFn = (key: keyof typeof translations.en) => string;

const DAM_TYPE_KEY: Record<DamType, keyof typeof translations.en> = {
  earthfill: 'damTypeEarthfill',
  rockfill: 'damTypeRockfill',
  hybrid: 'damTypeHybrid',
};

interface DamFactsProps {
  damName: string;
  t: TFn;
}

export default function DamFacts({ damName, t }: DamFactsProps) {
  const meta = getDamMetadata(damName);
  if (!meta) return null;

  const facts = [
    { icon: CalendarDays, label: t('damFactsBuilt'), value: String(meta.yearBuilt) },
    { icon: Ruler, label: t('damFactsHeight'), value: `${meta.height} ${t('heightUnit')}` },
    ...(meta.river ? [{ icon: Waves, label: t('damFactsRiver'), value: meta.river }] : []),
    { icon: Layers, label: t('damFactsType'), value: t(DAM_TYPE_KEY[meta.type]) },
  ];

  return (
    <section
      aria-label={t('damFactsTitle')}
      className="-mt-4 mb-8 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-md px-4 py-2.5"
    >
      <dl className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-sm">
        {facts.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-1.5">
            <Icon className="h-4 w-4 text-water-500 dark:text-water-400 flex-shrink-0" aria-hidden="true" />
            <dt className="text-muted-foreground">{label}:</dt>
            <dd className="font-medium text-foreground">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

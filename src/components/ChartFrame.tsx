import React, { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChartExportBar } from '@/components/ChartExportBar';

export interface ChartFrameProps {
  /** Goes into the exported file name: fragmata-{name}-{lang}.png. */
  name: string;
  title: string; subtitle: string; source: string; height: number;
  children: React.ReactNode; minWidth?: number;
  legend?: { color: string; label: string; dashed?: boolean }[];
}

/**
 * The card around an article chart: title, subtitle, legend, a 1000-wide SVG,
 * source line, and the copy/download buttons (see src/lib/export-image.ts).
 */
export function ChartFrame({ name, title, subtitle, source, height, children, legend, minWidth = 640 }: ChartFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Card ref={ref} data-min-width={minWidth} className="overflow-hidden">
      <CardContent data-export-flush className="p-4 sm:p-5">
        <h4 className="text-base font-semibold leading-snug text-gray-900 dark:text-gray-100">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{subtitle}</p>
        {legend && legend.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
            {legend.map(l => (
              <span key={l.label} className="inline-flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                {l.dashed
                  ? <i className="h-0 w-3 shrink-0 border-t-2 border-dashed" style={{ borderColor: l.color }} />
                  : <i className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ background: l.color }} />}
                {l.label}
              </span>
            ))}
          </div>
        )}
        {/* Below ~640px the chart is wider than the viewport (minWidth keeps axis
            text legible rather than shrinking it below ~4px) and needs a horizontal
            swipe to see in full. Without any cue for that, a mobile reader hits a
            chart that looks cut off and reaches for pinch-zoom instead — which
            distorts the whole page rather than just revealing the chart. The edge
            fade and hint below exist to make "swipe right" obvious instead. */}
        <div className="relative mt-3">
          <div data-export-scroll className="overflow-x-auto [mask-image:linear-gradient(to_right,black_calc(100%-20px),transparent)] sm:[mask-image:none]">
            <svg viewBox={`0 0 1000 ${height}`} className="block h-auto w-full" style={{ minWidth }}
              role="img" aria-label={`${title.replace(/[.!?]$/, '')}. ${subtitle}`}>
              {children}
            </svg>
          </div>
        </div>
        <p data-export="hide" className="mt-1.5 text-[11px] text-gray-400 dark:text-gray-500 sm:hidden">← swipe to see the full chart →</p>
        <p className="mt-3 border-t border-gray-200 pt-2 text-[11px] leading-relaxed text-gray-500 dark:border-gray-700 dark:text-gray-500">{source}</p>
        <ChartExportBar target={ref} name={name} />
      </CardContent>
    </Card>
  );
}

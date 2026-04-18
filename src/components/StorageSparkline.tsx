import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer, YAxis, ReferenceDot, ReferenceLine } from 'recharts';
import { SparklineDataPoint } from '@/utils/sparklineData';

function getSparklineColor(percentage: number): { stroke: string; fill: string } {
  if (percentage >= 100) return { stroke: '#3b82f6', fill: '#3b82f650' };
  if (percentage < 25) return { stroke: '#ef4444', fill: '#ef444450' };
  if (percentage < 50) return { stroke: '#f97316', fill: '#f9731650' };
  if (percentage < 75) return { stroke: '#eab308', fill: '#eab30850' };
  return { stroke: '#22c55e', fill: '#22c55e50' };
}

function formatDate(dateStr: string, language: string = 'en'): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString(language === 'el' ? 'el-GR' : language === 'ru' ? 'ru-RU' : 'en-GB', { day: 'numeric', month: 'short', year: '2-digit' });
}

interface SparklineTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: SparklineDataPoint }>;
  language?: string;
}

const SparklineTooltip: React.FC<SparklineTooltipProps> = ({ active, payload, language = 'en' }) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!active || !el) return;
    // Recharts positions its tooltip wrapper at cursor.x + offset (10px right
    // of cursor by default). On narrow mobile screens this overflows the
    // viewport when hovering near the right edge of the chart. Measure the
    // untransformed position and flip the tooltip to the left of the cursor
    // when needed. Mutating style directly (instead of using state) avoids a
    // re-render loop where the post-flip measurement would un-flip.
    el.style.transform = '';
    const wrapper = el.parentElement ?? el;
    const rect = wrapper.getBoundingClientRect();
    const vw = typeof window !== 'undefined' ? window.innerWidth : Number.POSITIVE_INFINITY;
    if (rect.right > vw - 4) {
      el.style.transform = 'translateX(calc(-100% - 20px))';
    }
  });

  if (!active || !payload?.[0]) return null;
  const point = payload[0].payload;
  return (
    <div
      ref={ref}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded px-1.5 py-0.5 text-[10px] shadow-sm whitespace-nowrap"
    >
      <span className="text-muted-foreground">{formatDate(point.date, language)}</span>
      <span className="ml-1 font-medium text-foreground">{point.percentage.toFixed(1)}%</span>
    </div>
  );
};

interface StorageSparklineProps {
  data: SparklineDataPoint[];
  highlightMax?: SparklineDataPoint;
  highlightMin?: SparklineDataPoint;
  showLevelLines?: boolean;
  language?: string;
}

const StorageSparkline: React.FC<StorageSparklineProps> = ({ data, highlightMax, highlightMin, showLevelLines, language = 'en' }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  if (!isMounted || data.length === 0) return null;

  const latestPct = data[data.length - 1].percentage;
  const { stroke, fill } = getSparklineColor(latestPct);

  // Find data indices for reference dots
  const maxIndex = highlightMax ? data.findIndex(d => d.date === highlightMax.date) : -1;
  const minIndex = highlightMin ? data.findIndex(d => d.date === highlightMin.date) : -1;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 3, right: 3, bottom: 3, left: 3 }}>
        <YAxis domain={[0, 100]} hide />
        {showLevelLines && [25, 50, 75].map(level => (
          <ReferenceLine
            key={level}
            y={level}
            stroke="#9ca3af"
            strokeWidth={0.5}
            strokeDasharray="2 2"
          />
        ))}
        <Tooltip
          content={<SparklineTooltip language={language} />}
          cursor={false}
          allowEscapeViewBox={{ x: true, y: true }}
        />
        <Area
          type="monotone"
          dataKey="percentage"
          stroke={stroke}
          fill={fill}
          strokeWidth={1.5}
          dot={false}
          activeDot={{ r: 2, fill: stroke }}
          isAnimationActive={false}
        />
        {highlightMax && maxIndex >= 0 && (
          <ReferenceDot
            x={maxIndex}
            y={highlightMax.percentage}
            r={3}
            fill="#22c55e"
            stroke="#fff"
            strokeWidth={1}
          />
        )}
        {highlightMin && minIndex >= 0 && (
          <ReferenceDot
            x={minIndex}
            y={highlightMin.percentage}
            r={3}
            fill="#ef4444"
            stroke="#fff"
            strokeWidth={1}
          />
        )}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StorageSparkline;

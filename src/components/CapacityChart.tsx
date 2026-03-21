
import React, { useEffect, useRef, useId } from 'react';
import { RegionTotal, Reservoir } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { useDataContext } from '@/context/DataContext';
import { useTranslation } from '@/utils/translations';

interface RingColors {
  base: string;
  light: string;
  dark: string;
  glow: string;
  textClass: string;
}

const getRingColors = (percentage: number): RingColors => {
  if (percentage >= 100) return {
    base: '#3b82f6', light: '#60a5fa', dark: '#2563eb',
    glow: 'rgba(59, 130, 246, 0.5)', textClass: 'text-blue-500'
  };
  if (percentage < 25) return {
    base: '#ef4444', light: '#f87171', dark: '#dc2626',
    glow: 'rgba(239, 68, 68, 0.6)', textClass: 'text-red-500'
  };
  if (percentage < 50) return {
    base: '#f97316', light: '#fb923c', dark: '#ea580c',
    glow: 'rgba(249, 115, 22, 0.5)', textClass: 'text-orange-500'
  };
  if (percentage < 75) return {
    base: '#eab308', light: '#facc15', dark: '#ca8a04',
    glow: 'rgba(234, 179, 8, 0.4)', textClass: 'text-yellow-500'
  };
  return {
    base: '#22c55e', light: '#4ade80', dark: '#16a34a',
    glow: 'rgba(34, 197, 94, 0.5)', textClass: 'text-green-500'
  };
};

const RADIUS = 45;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

interface DonutRingProps {
  percentage: number;
  label: string;
  ringId: string;
}

const DonutRing: React.FC<DonutRingProps> = ({ percentage, label, ringId }) => {
  const colors = getRingColors(percentage);
  const offset = CIRCUMFERENCE * (1 - percentage / 100);

  const arcProps = {
    cx: 50, cy: 50, r: RADIUS,
    fill: 'none' as const,
    strokeLinecap: 'round' as const,
    strokeDasharray: CIRCUMFERENCE,
    strokeDashoffset: offset,
    transform: 'rotate(-90 50 50)',
    className: 'progress-ring-circle',
  };

  return (
    <div
      className="relative w-28 h-28 shrink min-w-0 flex items-center justify-center"
      style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}
    >
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <defs>
          <filter id={`glow-${ringId}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0"
              result="glow"
            />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Track — 3-layer volumetric groove */}
        <circle cx="50" cy="50" r={RADIUS} fill="none"
          stroke="rgba(0,0,0,0.2)" strokeWidth="9" />
        <circle cx="50" cy="50" r={RADIUS} fill="none"
          stroke="rgba(128,128,128,0.15)" strokeWidth="7" />
        <circle cx="50" cy="50" r={RADIUS} fill="none"
          stroke="rgba(255,255,255,0.06)" strokeWidth="2.5" />

        {/* Glow layer — blurred wider copy of the progress arc */}
        <circle
          {...arcProps}
          className="progress-ring-circle progress-ring-glow"
          stroke={colors.glow}
          strokeWidth={10}
          filter={`url(#glow-${ringId})`}
          opacity={0.6}
        />

        {/* Progress arc — 3-layer volumetric tube */}
        {/* Layer 1: Dark edges (peeks out wider) */}
        <circle {...arcProps} stroke={colors.dark} strokeWidth={8} />
        {/* Layer 2: Main body color */}
        <circle {...arcProps} stroke={colors.base} strokeWidth={6} />
        {/* Layer 3: Specular highlight stripe */}
        <circle {...arcProps} stroke={colors.light} strokeWidth={2.5} opacity={0.7} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
        <span className={`text-lg font-bold ${colors.textClass}`}>{percentage.toFixed(1)}%</span>
        <span className="text-[0.65rem] text-gray-500">{label}</span>
      </div>
    </div>
  );
};

interface CapacityChartProps {
  data: RegionTotal | Reservoir;
  showComparison?: boolean;
}

const CapacityChart: React.FC<CapacityChartProps> = ({ data, showComparison = true }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const { isPlaying } = useDataContext();
  const t = useTranslation(language);
  const uniqueId = useId();

  useEffect(() => {
    if (!chartRef.current) return;

    // Skip animations if in play mode
    if (isPlaying) {
      chartRef.current.classList.remove('opacity-0', 'animate-scale-in');
      chartRef.current.classList.add('opacity-100');
      return;
    }

    // Use a more reliable way to animate the chart
    setTimeout(() => {
      if (chartRef.current) {
        chartRef.current.classList.remove('opacity-0');
        chartRef.current.classList.add('opacity-100');
      }
    }, 100);

    // Add intersection observer for when scrolling into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(chartRef.current);

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, [isPlaying]);

  // Ensure data is populated before rendering
  if (!data || !data.storage) {
    console.log('No data available for CapacityChart');
    return null;
  }

  const currentPercentage = data.storage.current.percentage;
  const lastYearPercentage = data.storage.lastYear.percentage;
  const storageDifference = currentPercentage - lastYearPercentage;
  const isIncreasing = storageDifference > 0;

  return (
    <div ref={chartRef} className="opacity-0 transition-opacity duration-500">
      <div className="flex items-center justify-center space-x-4 min-w-0">
        <DonutRing
          percentage={currentPercentage}
          label={t('currentVeryShort')}
          ringId={`cur-${uniqueId}`}
        />

        {showComparison && (
          <>
            <div className="flex flex-col items-center">
              <span className="text-gray-400">{t('vs')}</span>
              <span className={`text-xs font-semibold ${isIncreasing ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                {isIncreasing ? '+' : ''}{storageDifference.toFixed(1)}%
              </span>
            </div>

            <DonutRing
              percentage={lastYearPercentage}
              label={t('lastYearVeryShort')}
              ringId={`ly-${uniqueId}`}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CapacityChart;

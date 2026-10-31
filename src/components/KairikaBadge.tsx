import { useId } from 'react';

// Kairika's own icon (its app/icon.svg) and amber brand colour, for links that lead there.
export function KairikaBadge({ className = '' }: { className?: string }) {
  const gradient = useId();
  return (
    <span
      className={`inline-flex flex-shrink-0 items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/10 py-0.5 pl-0.5 pr-2 text-xs font-medium text-amber-700 dark:text-amber-300 ${className}`}
    >
      <svg viewBox="0 0 64 64" className="h-4 w-4" aria-hidden="true">
        <defs>
          <linearGradient id={gradient} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f59e0b" />
            <stop offset="1" stopColor="#d97706" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="14" fill="#0c1a2e" />
        <circle cx="26" cy="26" r="11" fill={`url(#${gradient})`} />
        <g stroke={`url(#${gradient})`} strokeWidth="3.4" strokeLinecap="round">
          <line x1="26" y1="7" x2="26" y2="11" />
          <line x1="26" y1="41" x2="26" y2="45" />
          <line x1="7" y1="26" x2="11" y2="26" />
          <line x1="41" y1="26" x2="45" y2="26" />
          <line x1="12.6" y1="12.6" x2="15.4" y2="15.4" />
          <line x1="36.6" y1="36.6" x2="39.4" y2="39.4" />
          <line x1="39.4" y1="12.6" x2="36.6" y2="15.4" />
        </g>
        <path d="M22 48 q5 -7 12 -4 q3 -6 10 -4 q7 2 6 8 q5 1 4 6 q-1 4 -6 4 l-22 0 q-6 0 -7 -5 q-0.5 -4 3 -5z" fill="#7dd3fc" />
      </svg>
      Kairika
    </span>
  );
}

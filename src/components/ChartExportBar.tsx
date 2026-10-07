import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { sendGAEvent } from '@next/third-parties/google';
import { Check, Copy, Download, LoaderCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { useDataContext } from '@/context/DataContext';
import { formatDataSetDate } from '@/utils/dateFormatting';
import { copyFigure, downloadBlob, figureToPng, type CopyOutcome, type FigureMeta } from '@/lib/export-image';

type State = 'idle' | 'busy' | CopyOutcome | 'failed';
type Action = 'copy' | 'download';

const LABEL = {
  copy: 'exportCopy', download: 'exportDownload', copied: 'exportCopied', shared: 'exportShared',
  downloaded: 'exportDownloaded', failed: 'exportFailed',
} as const;

/**
 * "Copy image" and "Download PNG" under a figure. The image is drawn from the
 * element `target` points at; see src/lib/export-image.ts. `name` goes into
 * the file name: fragmata-{name}-{lang}.png.
 */
export function ChartExportBar({ target, name }: { target: React.RefObject<HTMLElement | null>; name: string }) {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const pathname = usePathname() ?? '/';
  const filename = `fragmata-${name}-${language}.png`;
  const [state, setState] = useState<{ action: Action; s: State } | null>(null);

  const run = async (action: Action) => {
    const node = target.current;
    if (!node || state?.s === 'busy') return;
    const meta: FigureMeta = {
      pathname,
      // The page's own name, without the site suffix the titles carry.
      pageName: document.title.replace(/\s*[|–—-]\s*(Fragmata|Φράγματα)(\.info)?$/i, ''),
      siteName: t('appTitle'),
    };
    setState({ action, s: 'busy' });
    sendGAEvent('event', 'chart_export', { export_action: action, chart: name, language });
    try {
      if (action === 'copy') {
        const outcome = await copyFigure(node, meta, filename);
        setState(outcome === 'cancelled' ? null : { action, s: outcome });
      } else {
        downloadBlob(await figureToPng(node, meta), filename);
        setState({ action, s: 'downloaded' });
      }
    } catch (e) {
      console.error('Chart export failed', e);
      setState({ action, s: 'failed' });
    }
    setTimeout(() => setState(cur => (cur?.s === 'busy' ? cur : null)), 2500);
  };

  const label = (action: Action) =>
    t(state?.action !== action || state.s === 'busy' || state.s === 'idle' ? LABEL[action] : LABEL[state.s as keyof typeof LABEL]);
  const icon = (action: Action, Idle: typeof Copy) => {
    if (state?.action !== action || state.s === 'failed') return <Idle className="h-3.5 w-3.5" />;
    if (state.s === 'busy') return <LoaderCircle className="h-3.5 w-3.5 animate-spin" />;
    return <Check className="h-3.5 w-3.5 text-water-600 dark:text-water-400" />;
  };
  const btn =
    'inline-flex cursor-pointer items-center gap-1.5 rounded-md px-2 py-1.5 text-xs text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 disabled:cursor-wait dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100';

  return (
    <div data-export="hide" className="-mb-1.5 mt-1.5 flex flex-wrap items-center justify-end gap-1">
      {(['copy', 'download'] as const).map(action => (
        <button key={action} type="button" className={btn} onClick={() => run(action)} disabled={state?.s === 'busy'} aria-live="polite">
          {icon(action, action === 'copy' ? Copy : Download)}
          {label(action)}
        </button>
      ))}
    </div>
  );
}

/**
 * A line only the exported image shows: what the card is set to (a dam, a
 * season), then the bulletin the figures come from, since the image outlives
 * the page's date picker.
 */
export function ExportCaption({ subject, className = '' }: { subject?: string; className?: string }) {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const { currentDataSetId } = useDataContext();
  const bulletin = t('exportBulletin').replace('{date}', formatDataSetDate(currentDataSetId, language));
  return (
    <p data-export="show" hidden className={`mt-3 text-[11px] leading-relaxed text-muted-foreground ${className}`}>
      {subject ? `${subject} · ${bulletin}` : bulletin}
    </p>
  );
}

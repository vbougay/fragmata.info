/**
 * Chart export: a figure becomes a PNG with its title, subtitle, source line
 * and a credit footer (ported from foroi.info).
 *
 * The image follows the theme the reader is viewing: the figure is cloned
 * into an off-screen box under <body>, so the page's light or dark styles
 * still apply. The clone is drawn at a fixed width so the image is the same
 * from a phone or a desktop. Elements marked `data-export="hide"` (buttons,
 * the swipe hint, the export bar itself) are dropped; `data-export="show"`
 * ones (a line only the image needs) appear; `data-export-scroll` boxes that
 * scroll sideways on phones are shown in full; `data-export-flush` boxes
 * (a card's inner padding) lose their padding, as the image has its own margins.
 */

export const SITE_URL = "https://fragmata.info";
export const LICENCE = "CC BY 4.0";

/** The page's public address, e.g. https://fragmata.info/el/desalination. */
export function creditUrl(pathname: string): string {
  return pathname === "/" ? SITE_URL : `${SITE_URL}${pathname.replace(/\/$/, "")}`;
}

const EXPORT_WIDTH = 960;

/** The site icon (public/favicon.svg): a water drop on a dark disc. */
const ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">' +
  '<defs><linearGradient id="export-drop" x1="0" y1="0" x2="0" y2="1">' +
  '<stop offset="0%" stop-color="#38bdf8"/><stop offset="100%" stop-color="#0284c7"/></linearGradient></defs>' +
  '<rect width="32" height="32" rx="16" fill="#0f172a"/>' +
  '<path d="M16 4 C16 4 8 13 8 19a8 8 0 0 0 16 0C24 13 16 4 16 4z" fill="url(#export-drop)"/>' +
  '<ellipse cx="13" cy="17.5" rx="2" ry="2.8" fill="white" opacity="0.3" transform="rotate(-15 13 17.5)"/></svg>';

const isDark = () => document.documentElement.classList.contains("dark");

/** The credit under the image: icon and wordmark, the page's name and full address, the licence. */
function creditFooter(url: string, pageName: string, siteName: string): HTMLElement {
  const el = (tag: string, css: string, text?: string) => {
    const e = document.createElement(tag);
    e.style.cssText = css;
    if (text) e.textContent = text;
    return e;
  };
  const foot = el(
    "div",
    "margin-top:20px;padding-top:16px;border-top:1px solid hsl(var(--border));display:flex;align-items:center;gap:14px;" +
      "color:hsl(var(--muted-foreground));"
  );

  const brand = el("div", "display:flex;align-items:center;gap:8px;flex:none;");
  const icon = el("span", "display:flex;flex:none;");
  icon.innerHTML = ICON;
  brand.append(
    icon,
    el("span", `font-weight:800;font-size:17px;line-height:1;letter-spacing:-0.01em;color:${isDark() ? "#38bdf8" : "#0369a1"};`, siteName)
  );

  const rule = el("span", "align-self:stretch;width:1px;background:hsl(var(--border));flex:none;");

  const page = el("div", "display:flex;flex-direction:column;gap:4px;min-width:0;flex:1;");
  page.append(
    el("span", "font-size:13px;line-height:1.25;font-weight:600;color:hsl(var(--foreground));", pageName),
    el("span", "font-size:12px;line-height:1.25;", url)
  );

  const licence = el("span", "font-size:12px;line-height:1.25;text-align:right;flex:none;", LICENCE);

  foot.append(brand, rule, page, licence);
  return foot;
}

async function inlineFigure(node: HTMLElement, url: string, pageName: string, siteName: string): Promise<{ host: HTMLElement; frame: HTMLElement }> {
  const minWidth = Number(node.dataset.minWidth) || 0;
  const width = Math.max(EXPORT_WIDTH, minWidth + 48);

  const host = document.createElement("div");
  host.setAttribute("aria-hidden", "true");
  host.style.cssText = `position:fixed;left:-${width * 4}px;top:0;width:${width}px;pointer-events:none;color:hsl(var(--card-foreground));`;

  const clone = node.cloneNode(true) as HTMLElement;
  clone.querySelectorAll('[data-export="hide"], [role="status"]').forEach((el) => el.remove());
  clone.querySelectorAll<HTMLElement>('[data-export="show"]').forEach((el) => {
    el.hidden = false;
    el.style.display = "";
  });
  // The phone layout fades and scrolls the chart sideways; the image shows all of it.
  clone.querySelectorAll<HTMLElement>("[data-export-scroll]").forEach((el) => {
    el.style.overflow = "visible";
    el.style.maskImage = "none";
    el.style.webkitMaskImage = "none";
  });
  clone.querySelectorAll<HTMLElement>("[data-export-flush]").forEach((el) => {
    el.style.padding = "0";
  });
  clone.style.margin = "0";
  clone.style.border = "0";
  clone.style.borderRadius = "0";
  clone.style.padding = "0";
  clone.style.boxShadow = "none";
  clone.style.background = "transparent";

  // The frame, not the figure, is what gets drawn: its padding sets the margins of the image.
  const frame = document.createElement("div");
  frame.style.cssText = `box-sizing:border-box;width:${width}px;padding:26px 32px 30px;background:hsl(var(--card));`;
  frame.append(clone, creditFooter(url, pageName, siteName));

  host.append(frame);
  document.body.append(host);
  await document.fonts.ready;
  return { host, frame };
}

export interface FigureMeta {
  pathname: string;
  /** The page's name, shown in the credit. */
  pageName: string;
  /** The wordmark in the credit (the site's name in the reader's language). */
  siteName: string;
}

/** The figure as a PNG blob, two pixels per CSS pixel. */
export async function figureToPng(node: HTMLElement, meta: FigureMeta): Promise<Blob> {
  const { domToBlob } = await import("modern-screenshot");
  const { host, frame } = await inlineFigure(node, creditUrl(meta.pathname), meta.pageName, meta.siteName);
  try {
    const background = getComputedStyle(frame).backgroundColor;
    return await domToBlob(frame, { scale: 2, type: "image/png", backgroundColor: background });
  } finally {
    host.remove();
  }
}

export function canCopyImage(): boolean {
  if (typeof window === "undefined" || typeof ClipboardItem === "undefined" || !navigator.clipboard?.write) return false;
  const supports = (ClipboardItem as unknown as { supports?: (type: string) => boolean }).supports;
  return supports ? supports("image/png") : true;
}

export function downloadBlob(blob: Blob, filename: string) {
  const href = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = href;
  a.download = filename;
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(href), 10_000);
}

export type CopyOutcome = "copied" | "shared" | "downloaded" | "cancelled";

/**
 * Copy the image to the clipboard. Where the browser cannot put an image on
 * the clipboard, hand it to the share sheet (phones), else download it.
 * The ClipboardItem takes a promise so Safari still sees the click as the
 * gesture that allowed the write.
 */
export async function copyFigure(node: HTMLElement, meta: FigureMeta, filename: string): Promise<CopyOutcome> {
  const png = figureToPng(node, meta);
  if (canCopyImage()) {
    try {
      await navigator.clipboard.write([new ClipboardItem({ "image/png": png })]);
      return "copied";
    } catch {
      // Permission refused or unsupported in practice: fall through.
    }
  }
  const blob = await png;
  const file = new File([blob], filename, { type: "image/png" });
  if (navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file] });
      return "shared";
    } catch (e) {
      if ((e as DOMException)?.name === "AbortError") return "cancelled";
    }
  }
  downloadBlob(blob, filename);
  return "downloaded";
}

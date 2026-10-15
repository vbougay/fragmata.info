#!/usr/bin/env tsx
// Audits the news ticker collection (src/utils/newsArticles.ts) and looks up
// publication dates for candidate articles.
//
// Usage:
//   tsx .claude/skills/fetch-and-update/check-news.ts                  Audit the collection (exit 1 on errors)
//   tsx .claude/skills/fetch-and-update/check-news.ts --lookup <url>…  Print title + published date for URLs
//   tsx .claude/skills/fetch-and-update/check-news.ts --write-news-md   Regenerate NEWS.md from the collection
//   tsx .claude/skills/fetch-and-update/check-news.ts --candidates     List recent water articles from outlet feeds
//                                              (and Cyprus Mail topic pages) not yet in the ticker
//
// The audit fetches every article and checks:
//   - the link answers 200
//   - the page's own publication date matches the `date` field
//   - no article is older than MAX_AGE_DAYS (relative to today)
//   - per language: at most MAX_PER_LANG articles, no outlet above MAX_SOURCE_SHARE (warning),
//     no topic above MAX_TOPIC_SHARE
// Errors fail the run; warnings (a page with no machine-readable date, one outlet above 50%) don't.

import { writeFileSync } from 'node:fs';
import { newsArticles, NEWS_TOPICS } from '../../../src/utils/newsArticles';

const MAX_AGE_DAYS = 60;
const MAX_PER_LANG = 10;
const MAX_SOURCE_SHARE = 0.5; // warning only: some languages have few outlets that answer a plain fetch
const MAX_TOPIC_SHARE = 0.4;
const UA = 'Mozilla/5.0 (compatible; fragmata-news-check)';

interface Page {
  status: number;
  title: string | null;
  date: string | null; // YYYY-MM-DD, from the page itself
}

function decode(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .trim();
}

function extractDate(html: string, url: string): string | null {
  const patterns = [
    /property=["']article:published_time["'][^>]*content=["']([^"']+)/i,
    /content=["']([^"']+)["'][^>]*property=["']article:published_time["']/i,
    /itemprop=["']datePublished["'][^>]*content=["']([^"']+)/i,
    /"datePublished"\s*:\s*"([^"]+)"/i,
    /<time[^>]*datetime=["']([^"']+)/i,
  ];
  for (const re of patterns) {
    const m = html.match(re);
    const iso = m?.[1].match(/^(\d{4}-\d{2}-\d{2})/);
    if (iso) return iso[1];
  }
  // Fall back to a /YYYY/MM/DD/ path (Cyprus Mail, Sigmalive)
  const path = url.match(/\/(20\d{2})\/(\d{1,2})\/(\d{1,2})(?:\/|$)/);
  if (path) return `${path[1]}-${path[2].padStart(2, '0')}-${path[3].padStart(2, '0')}`;
  return null;
}

async function fetchPage(url: string): Promise<Page> {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow' });
    const html = await res.text();
    const t = html.match(/<title[^>]*>([^<]*)<\/title>/i);
    return { status: res.status, title: t ? decode(t[1]) : null, date: extractDate(html, res.url || url) };
  } catch {
    return { status: 0, title: null, date: null };
  }
}

function daysBetween(a: string, b: string): number {
  return Math.round((Date.parse(b) - Date.parse(a)) / 86_400_000);
}

async function lookup(urls: string[]) {
  for (const url of urls) {
    const p = await fetchPage(url);
    console.log(`${p.status}\t${p.date ?? 'no-date'}\t${p.title ?? ''}\n\t${url}`);
  }
}

function share(counts: Map<string, number>, total: number, limit: number, what: string, lang: string, out: string[]) {
  for (const [k, n] of counts) {
    if (total >= 5 && n / total > limit) {
      out.push(`[${lang}] ${what} "${k}" is ${n}/${total} articles (max ${Math.round(limit * 100)}%)`);
    }
  }
}

// --- Candidate discovery -----------------------------------------------------

interface Feed {
  lang: 'en' | 'el' | 'ru';
  source: string;
  url: string;
}

// RSS feeds that answer to a plain fetch. Add outlets here; keep them diverse.
// (Cyprus Mail has no feed, so its topic pages are scraped below. in-cyprus and lenta.cy block bots.)
const FEEDS: Feed[] = [
  { lang: 'en', source: 'Politis (EN)', url: 'https://en.politis.com.cy/feed' },
  { lang: 'en', source: 'Financial Mirror', url: 'https://financialmirror.com/feed/' },
  { lang: 'el', source: 'Πολίτης', url: 'https://www.politis.com.cy/feed' },
  { lang: 'el', source: 'Σημερινή', url: 'https://www.sigmalive.com/rss' },
  { lang: 'el', source: 'AlphaNews', url: 'https://www.alphanews.live/feed' },
  { lang: 'ru', source: 'RusCyprus', url: 'https://ruscyprus.com/rss' },
  { lang: 'ru', source: 'Cyprus Inform', url: 'https://www.kiprinform.com/feed/' },
];

const CYPRUS_MAIL_TAGS = ['water-levels', 'desalination', 'water', 'water-shortage', 'drought', 'dams'];

const WATER: Record<string, RegExp> = {
  en: /water|dam\b|dams\b|reservoir|desalinat|irrigat|drought|rainfall/i,
  el: /νερ|φράγμ|αφαλάτ|άρδευ|αρδευ|ξηρασ|βροχ|υδατικ/i,
  ru: /вод[аыуео]|дамб|водохранилищ|опресн|орошен|засух|дожд|плотин/i,
};

function xmlText(block: string, tag: string): string {
  const m = block.match(new RegExp(`<${tag}[^>]*>\\s*(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?\\s*</${tag}>`, 'i'));
  return m ? decode(m[1]) : '';
}

async function candidates() {
  const known = new Set(newsArticles.map((a) => a.url.replace(/\/$/, '')));
  const cutoff = new Date(Date.now() - MAX_AGE_DAYS * 86_400_000).toISOString().slice(0, 10);
  const rows: { date: string; lang: string; source: string; title: string; url: string }[] = [];

  await Promise.all(
    FEEDS.map(async (f) => {
      try {
        const xml = await (await fetch(f.url, { headers: { 'User-Agent': UA } })).text();
        for (const item of xml.split(/<item[ >]/i).slice(1)) {
          const title = xmlText(item, 'title');
          const url = xmlText(item, 'link');
          const pub = xmlText(item, 'pubDate');
          const d = pub ? new Date(pub) : null;
          if (!title || !url || !d || isNaN(+d)) continue;
          const date = d.toISOString().slice(0, 10);
          if (date >= cutoff && WATER[f.lang].test(title)) rows.push({ date, lang: f.lang, source: f.source, title, url });
        }
      } catch {
        console.log(`warn  feed failed: ${f.url}`);
      }
    }),
  );

  await Promise.all(
    CYPRUS_MAIL_TAGS.map(async (tag) => {
      try {
        const html = await (await fetch(`https://cyprus-mail.com/tag/${tag}`, { headers: { 'User-Agent': UA } })).text();
        const links = new Set(html.match(/https:\/\/cyprus-mail\.com\/20\d{2}\/\d{2}\/\d{2}\/[a-z0-9-]+/g) ?? []);
        for (const url of links) {
          const date = extractDate('', url)!;
          if (date < cutoff || rows.some((r) => r.url === url)) continue;
          const slug = url.split('/').pop()!.replace(/-/g, ' ');
          rows.push({ date, lang: 'en', source: 'Cyprus Mail', title: slug, url });
        }
      } catch {
        console.log(`warn  Cyprus Mail tag failed: ${tag}`);
      }
    }),
  );

  rows.sort((a, b) => (a.lang + b.date).localeCompare(b.lang + a.date) || b.date.localeCompare(a.date));
  const seen = new Set<string>();
  for (const r of rows) {
    const key = r.url.replace(/\/$/, '');
    if (seen.has(key) || known.has(key)) continue;
    seen.add(key);
    console.log(`${r.lang}\t${r.date}\t${r.source}\t${r.title.slice(0, 90)}\n\t${r.url}`);
  }
}

function writeNewsMd() {
  const groups: [string, string][] = [['en', 'English'], ['ru', 'Russian'], ['el', 'Greek']];
  const fmt = (d: string) =>
    new Date(d + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
  const dates = newsArticles.map((a) => a.date).sort();
  const lines = [
    '# Cyprus Water Crisis — News Coverage',
    '',
    `Articles shown in the dashboard's news ticker (${fmt(dates[0])} — ${fmt(dates.at(-1)!)}). Generated from \`src/utils/newsArticles.ts\` by \`.claude/skills/fetch-and-update/check-news.ts --write-news-md\`; don't edit by hand.`,
  ];
  for (const [lang, name] of groups) {
    lines.push('', `## ${name}`, '');
    for (const a of newsArticles.filter((x) => x.lang === lang).sort((x, y) => y.date.localeCompare(x.date))) {
      lines.push(`- [${a.title}](${a.url}) — ${a.source}, ${fmt(a.date)} · ${a.topic}`);
    }
  }
  writeFileSync(new URL('../../../NEWS.md', import.meta.url), lines.join('\n') + '\n');
  console.log('NEWS.md written');
}

async function audit() {
  const today = new Date().toISOString().slice(0, 10);
  const errors: string[] = [];
  const warnings: string[] = [];

  const pages = await Promise.all(newsArticles.map((a) => fetchPage(a.url)));
  newsArticles.forEach((a, i) => {
    const p = pages[i];
    const id = `[${a.lang}] ${a.title.slice(0, 50)}`;
    if (p.status !== 200) errors.push(`${id}: HTTP ${p.status} for ${a.url}`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(a.date)) errors.push(`${id}: bad date "${a.date}"`);
    if (!NEWS_TOPICS.includes(a.topic)) errors.push(`${id}: bad topic "${a.topic}"`);
    if (p.date && Math.abs(daysBetween(p.date, a.date)) > 1) {
      errors.push(`${id}: date field ${a.date} but the page says ${p.date}`);
    } else if (!p.date) {
      warnings.push(`${id}: page has no machine-readable date, ${a.date} unverified`);
    }
    const age = daysBetween(a.date, today);
    if (age > MAX_AGE_DAYS) errors.push(`${id}: ${age} days old (max ${MAX_AGE_DAYS})`);
    if (age < 0) errors.push(`${id}: dated in the future (${a.date})`);
  });

  const langs = [...new Set(newsArticles.map((a) => a.lang))];
  for (const lang of langs) {
    const list = newsArticles.filter((a) => a.lang === lang);
    if (list.length > MAX_PER_LANG) errors.push(`[${lang}] ${list.length} articles (max ${MAX_PER_LANG})`);
    const count = (f: (a: (typeof list)[number]) => string) => {
      const m = new Map<string, number>();
      for (const a of list) m.set(f(a), (m.get(f(a)) ?? 0) + 1);
      return m;
    };
    share(count((a) => a.source), list.length, MAX_SOURCE_SHARE, 'source', lang, warnings);
    share(count((a) => a.topic), list.length, MAX_TOPIC_SHARE, 'topic', lang, errors);
    const newest = list.map((a) => a.date).sort().at(-1);
    console.log(
      `${lang}: ${list.length} articles, ${new Set(list.map((a) => a.source)).size} sources, ` +
        `${new Set(list.map((a) => a.topic)).size} topics, newest ${newest}`,
    );
  }

  for (const w of warnings) console.log(`warn  ${w}`);
  for (const e of errors) console.log(`ERROR ${e}`);
  console.log(errors.length ? `\n${errors.length} error(s)` : '\nOK');
  process.exit(errors.length ? 1 : 0);
}

const args = process.argv.slice(2);
if (args[0] === '--lookup') {
  lookup(args.slice(1));
} else if (args[0] === '--write-news-md') {
  writeNewsMd();
} else if (args[0] === '--candidates') {
  candidates();
} else {
  audit();
}

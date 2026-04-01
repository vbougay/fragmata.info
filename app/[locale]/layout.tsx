import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Roboto_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { notFound } from "next/navigation";
import { Providers } from "@/components/providers";
import { locales, isValidLocale, type Locale } from "@/utils/locale";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://fragmata.info";

interface LocaleMeta {
  title: string;
  description: string;
  ogLocale: string;
  keywords: string[];
}

const meta: Record<Locale, LocaleMeta> = {
  en: {
    title: "Cyprus Dam & Reservoir Water Levels Today | Fragmata",
    description:
      "Live dam and reservoir water levels across all 21 Cyprus dams. Current storage capacity, daily inflow data, drought forecasts, and interactive map for Kouris, Asprokremmos, Evretou, and more.",
    ogLocale: "en_US",
    keywords: [
      "cyprus reservoir levels",
      "cyprus dam levels",
      "water reservoir cyprus",
      "reservoir storage cyprus",
      "cyprus dams water level",
      "dam levels cyprus",
      "cyprus reservoir levels today",
      "water level cyprus",
      "cyprus water reservoir",
      "kouris dam water level",
      "cyprus dam water levels",
      "cyprus water storage",
      "cyprus dams water levels",
      "how full are the dams in cyprus",
    ],
  },
  el: {
    title:
      "Επίπεδα Νερού Φραγμάτων & Ταμιευτήρων Κύπρου Σήμερα | Fragmata",
    description:
      "Ζωντανά επίπεδα νερού σε 21 φράγματα και ταμιευτήρες Κύπρου. Χωρητικότητα αποθήκευσης, ημερήσια εισροή, προβλέψεις ξηρασίας, διαδραστικός χάρτης για Κούρη, Ασπρόκρεμμο, Ευρέτου και άλλα.",
    ogLocale: "el_GR",
    keywords: [
      "Φράγματα Κύπρου",
      "λειψυδρία Κύπρου",
      "ταμιευτήρες Κύπρου",
      "κρίση νερού Κύπρου",
      "ξηρασία Κύπρου",
      "επίπεδα νερού φραγμάτων",
      "φράγμα Κούρη",
      "φράγμα Ασπρόκρεμμου",
      "αποθήκευση νερού Κύπρος",
      "επίπεδα φραγμάτων σήμερα",
    ],
  },
  ru: {
    title:
      "Уровень воды в дамбах и водохранилищах Кипра сегодня | Фрагмата",
    description:
      "Актуальные уровни воды во всех 21 водохранилищах Кипра. Ёмкость хранения, ежедневный приток, прогнозы засухи и интерактивная карта для Курис, Аспрокреммос, Эвретоу и других.",
    ogLocale: "ru_RU",
    keywords: [
      "водохранилища Кипра",
      "засуха на Кипре",
      "уровень воды Кипр",
      "нехватка воды Кипр",
      "мониторинг водохранилищ",
      "плотины Кипра",
      "Курис плотина уровень воды",
      "Аспрокреммос плотина",
      "запас воды Кипр",
      "уровень дамб Кипра сегодня",
    ],
  },
};

function localeUrl(locale: Locale, path = "") {
  return locale === "en" ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const m = meta[locale];

  return {
    title: m.title,
    description: m.description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: localeUrl(locale),
      languages: {
        en: localeUrl("en"),
        el: localeUrl("el"),
        ru: localeUrl("ru"),
        "x-default": localeUrl("en"),
      },
    },
    openGraph: {
      type: "website",
      url: localeUrl(locale),
      title: m.title,
      description: m.description,
      images: [{ url: "/og-image.png" }],
      locale: m.ogLocale,
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => meta[l].ogLocale),
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: ["/og-image.png"],
    },
    keywords: m.keywords,
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", type: "image/x-icon" },
      ],
    },
    other: {
      "theme-color": "#0ea5e9",
    },
  };
}

const noscriptContent: Record<Locale, { heading: string; body: string }> = {
  en: {
    heading: "Fragmata — Cyprus Reservoir Monitoring Dashboard",
    body: "Track water levels across 21 Cyprus reservoirs including Kouris, Asprokremmos, Evretou, Kalavasos, Lefkara, and more.",
  },
  el: {
    heading: "Fragmata — Πίνακας Παρακολούθησης Ταμιευτήρων Κύπρου",
    body: "Παρακολούθηση επιπέδων νερού σε 21 ταμιευτήρες της Κύπρου, συμπεριλαμβανομένων Κούρη, Ασπρόκρεμμου, Ευρέτου, Καλαβασού, Λεύκαρων και άλλων.",
  },
  ru: {
    heading: "Фрагмата — Мониторинг водохранилищ Кипра",
    body: "Мониторинг уровня воды в 21 водохранилище Кипра, включая Курис, Аспрокреммос, Эвретоу, Калавасос, Лефкара и другие.",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const ns = noscriptContent[locale];

  return (
    <html lang={locale} className={`${inter.variable} ${plusJakartaSans.variable} ${robotoMono.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers locale={locale}>
          {children}
        </Providers>
        <noscript>
          <p><strong>{ns.heading}</strong></p>
          <p>{ns.body}</p>
        </noscript>
        <SpeedInsights sampleRate={0.1} />
        <GoogleAnalytics gaId="G-JX6FXMP26B" />
      </body>
    </html>
  );
}

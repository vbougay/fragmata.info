import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { promises as fs } from "fs";
import path from "path";
import { DesalinationPlantClient } from "@/components/DesalinationPlantClient";
import { DESAL_PLANTS, getPlant } from "@/utils/desalinationData";
import { DISTRICT_GEN, PLANT_TEXT, statusLabel } from "@/utils/desalinationText";
import { autoLinkDams } from "@/utils/autoLinkDams";
import { locales, isValidLocale, type Locale } from "@/utils/locale";

const siteUrl = "https://fragmata.info";

// Static "About" prose per plant, stored like the dams': content/desalination/<id>/<lang>.md
function readAboutMd(id: string, lang: string): Promise<string | null> {
  const mdPath = path.join(process.cwd(), "content", "desalination", id, `${lang}.md`);
  return fs.readFile(mdPath, "utf-8").catch(() => null);
}

const localeUrl = (l: string, p: string) => (l === "en" ? `${siteUrl}${p}` : `${siteUrl}/${l}${p}`);

export async function generateStaticParams() {
  return locales.flatMap((locale) => DESAL_PLANTS.map((p) => ({ locale, id: p.id })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const lang: Locale = isValidLocale(locale) ? locale : "en";
  const plant = getPlant(id);
  if (!plant) return {};

  const px = PLANT_TEXT[lang];
  const permanent = plant.kind === "permanent";
  const title = `${px.metaTitle(plant.name[lang], permanent)} | Fragmata`;
  const description = px.metaDescription(
    plant.name[lang],
    permanent,
    DISTRICT_GEN[plant.district][lang],
    plant.capacity.toLocaleString(lang),
    statusLabel(plant.status, lang),
  );
  const pagePath = `/desalination/${id}`;
  const canonical = localeUrl(lang, pagePath);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, localeUrl(l, pagePath)]),
        ["x-default", localeUrl("en", pagePath)],
      ]),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Fragmata",
      type: "website",
      images: [{ url: `${siteUrl}/og-image.png` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/og-image.png`],
    },
  };
}

export default async function DesalinationPlantPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const lang: Locale = isValidLocale(locale) ? locale : "en";
  const plant = getPlant(id);
  if (!plant) notFound();

  // All locales, so the client can switch language in place; dam names in the prose link to their pages.
  const [en, el, ru] = await Promise.all(["en", "el", "ru"].map((l) => readAboutMd(id, l)));
  const aboutMd = {
    ...(en ? { en: autoLinkDams(en, "en") } : {}),
    ...(el ? { el: autoLinkDams(el, "el") } : {}),
    ...(ru ? { ru: autoLinkDams(ru, "ru") } : {}),
  };

  const canonical = localeUrl(lang, `/desalination/${id}`);
  const name = PLANT_TEXT[lang].metaTitle(plant.name[lang], plant.kind === "permanent");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { "@type": "WebPage", url: canonical, name, inLanguage: lang },
              {
                "@type": "Place",
                name,
                url: canonical,
                ...(plant.coords && !plant.coords.approx
                  ? { geo: { "@type": "GeoCoordinates", latitude: plant.coords.lat, longitude: plant.coords.lng } }
                  : {}),
                containedInPlace: { "@type": "Country", name: "Cyprus" },
              },
            ],
          }),
        }}
      />
      <DesalinationPlantClient id={id} aboutMd={aboutMd} />
    </>
  );
}

import { DashboardClient } from "@/components/DashboardClient";
import { getDashboardProps } from "@/utils/getDashboardProps";
import type { Locale } from "@/utils/locale";

const siteUrl = "https://fragmata.info";

function localeUrl(locale: Locale) {
  return locale === "en" ? `${siteUrl}/` : `${siteUrl}/${locale}/`;
}

const homeMeta: Record<
  Locale,
  {
    alternateName: string[];
    description: string;
    datasetName: string;
    datasetDescription: string;
    faq: { question: string; answer: string }[];
  }
> = {
  en: {
    alternateName: ["Φράγματα", "Cyprus Reservoir Dashboard"],
    description:
      "Live dam and reservoir water levels across all 21 Cyprus dams. Current storage capacity, daily inflow data, drought forecasts, and interactive map for Kouris, Asprokremmos, Evretou, and more.",
    datasetName: "Cyprus Reservoir Data",
    datasetDescription:
      "Water storage levels, inflow, and capacity data for 21 reservoirs across Cyprus",
    faq: [
      {
        question: "How full are the dams in Cyprus?",
        answer:
          "Fragmata tracks storage levels for all 21 major dams in Cyprus, updated weekly with data from the Cyprus Water Development Department. Visit the dashboard to see current fill percentages, regional breakdowns, and historical trends.",
      },
      {
        question: "What is the current water level in Cyprus reservoirs?",
        answer:
          "Current water levels for all 21 Cyprus reservoirs are displayed on the Fragmata dashboard with storage in million cubic meters (mln. m³) and percentage of capacity. Data is sourced from official government reports and updated regularly.",
      },
      {
        question: "Which is the largest dam in Cyprus?",
        answer:
          "Kouris Dam is the largest in Cyprus with a capacity of 115 mln. m³, located in the Southern Conveyor system. The second largest is Asprokremmos Dam in Paphos at 52.4 mln. m³.",
      },
    ],
  },
  el: {
    alternateName: ["Fragmata", "Πίνακας Ταμιευτήρων Κύπρου"],
    description:
      "Ζωντανά επίπεδα νερού σε 21 φράγματα και ταμιευτήρες Κύπρου. Χωρητικότητα αποθήκευσης, ημερήσια εισροή, προβλέψεις ξηρασίας, διαδραστικός χάρτης για Κούρη, Ασπρόκρεμμο, Ευρέτου και άλλα.",
    datasetName: "Δεδομένα Ταμιευτήρων Κύπρου",
    datasetDescription:
      "Επίπεδα αποθήκευσης νερού, εισροή και χωρητικότητα για 21 ταμιευτήρες στην Κύπρο",
    faq: [
      {
        question: "Πόσο γεμάτα είναι τα φράγματα στην Κύπρο;",
        answer:
          "Το Fragmata παρακολουθεί τα επίπεδα αποθήκευσης και για τα 21 μεγάλα φράγματα της Κύπρου, με εβδομαδιαία ενημέρωση από το Τμήμα Αναπτύξεως Υδάτων. Επισκεφθείτε τον πίνακα για τρέχοντα ποσοστά πλήρωσης και ιστορικές τάσεις.",
      },
      {
        question: "Ποιο είναι το μεγαλύτερο φράγμα στην Κύπρο;",
        answer:
          "Το φράγμα του Κούρη είναι το μεγαλύτερο στην Κύπρο με χωρητικότητα 115 εκατ. κ.μ., στο σύστημα του Νότιου Αγωγού. Δεύτερο μεγαλύτερο είναι το φράγμα Ασπρόκρεμμου στην Πάφο με 52,4 εκατ. κ.μ.",
      },
    ],
  },
  ru: {
    alternateName: ["Fragmata", "Мониторинг водохранилищ Кипра"],
    description:
      "Актуальные уровни воды во всех 21 водохранилищах Кипра. Ёмкость хранения, ежедневный приток, прогнозы засухи и интерактивная карта для Курис, Аспрокреммос, Эвретоу и других.",
    datasetName: "Данные водохранилищ Кипра",
    datasetDescription:
      "Уровни хранения воды, приток и ёмкость для 21 водохранилища на Кипре",
    faq: [
      {
        question: "Насколько заполнены дамбы на Кипре?",
        answer:
          "Fragmata отслеживает уровни хранения всех 21 крупных водохранилищ Кипра с еженедельным обновлением данных от Департамента водного развития Кипра. Посетите панель мониторинга для текущих процентов заполнения и исторических тенденций.",
      },
      {
        question: "Какая самая большая плотина на Кипре?",
        answer:
          "Плотина Курис — крупнейшая на Кипре с ёмкостью 115 млн м³, расположена в системе Южного конвейера. Вторая по величине — плотина Аспрокреммос в Пафосе с ёмкостью 52,4 млн м³.",
      },
    ],
  },
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const m = homeMeta[locale as Locale] ?? homeMeta.en;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Fragmata",
            alternateName: m.alternateName,
            description: m.description,
            url: localeUrl(locale as Locale),
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Any",
            inLanguage: locale,
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
            },
            about: {
              "@type": "Dataset",
              name: m.datasetName,
              description: m.datasetDescription,
              spatialCoverage: {
                "@type": "Place",
                name: "Cyprus",
              },
              temporalCoverage: "2025/..",
              creator: {
                "@type": "Organization",
                name: "Cyprus Water Development Department",
                url: "https://www.moa.gov.cy/moa/wdd/",
              },
              provider: {
                "@type": "Organization",
                name: "Fragmata",
                url: "https://fragmata.info",
              },
              license: "https://creativecommons.org/licenses/by/4.0/",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: m.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
      <DashboardClient initialTab="dashboard" {...getDashboardProps()} />
    </>
  );
}

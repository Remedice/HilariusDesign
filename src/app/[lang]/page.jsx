import Home from "../../views/Home/Home";
import { texts } from "../../router/texts";
import { buildMetadata, pickStatic } from "../../i18n/seo";

const HOME_TITLE = {
  nl: "Hilarius Design - Kartonnen relatiegeschenken en verpakkingen",
  en: "Hilarius Design - Cardboard corporate gifts and packaging",
  de: "Hilarius Design - Werbegeschenke und Verpackungen aus Karton",
  fr: "Hilarius Design - Cadeaux d'affaires et emballages en carton",
  es: "Hilarius Design - Regalos corporativos y embalajes en cartón"
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return buildMetadata({
    lang,
    path: "/",
    title: { absolute: HOME_TITLE[lang] ?? HOME_TITLE.nl },
    description: pickStatic(texts.home, "leadBody", lang)
  });
}

export default function HomePage() {
  return <Home />;
}

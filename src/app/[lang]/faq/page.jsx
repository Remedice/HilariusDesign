import Page from "../../../views/Page/Page";
import { texts } from "../../../router/texts";
import { buildMetadata, pickStatic } from "../../../i18n/seo";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const page = texts.pages.faq;
  return buildMetadata({
    lang,
    path: "/faq",
    title: pickStatic(page, "title", lang),
    description: pickStatic(page, "intro", lang)
  });
}

export default function FaqPage() {
  return <Page pageKey="faq" />;
}

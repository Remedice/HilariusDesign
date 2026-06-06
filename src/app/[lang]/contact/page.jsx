import Page from "../../../views/Page/Page";
import { texts } from "../../../router/texts";
import { buildMetadata, pickStatic } from "../../../i18n/seo";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const page = texts.pages.contact;
  return buildMetadata({
    lang,
    path: "/contact",
    title: pickStatic(page, "title", lang),
    description: pickStatic(page, "intro", lang)
  });
}

export default function ContactPage() {
  return <Page pageKey="contact" />;
}

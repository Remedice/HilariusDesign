import Page from "../../../views/Page/Page";
import { texts } from "../../../router/texts";
import { buildMetadata, pickStatic } from "../../../i18n/seo";
import { buildFaqPage, jsonLdHtml } from "../../../i18n/schema";

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

export default async function FaqPage({ params }) {
  const { lang } = await params;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(buildFaqPage(lang)) }}
      />
      <Page pageKey="faq" />
    </>
  );
}

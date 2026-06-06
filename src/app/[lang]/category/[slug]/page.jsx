import Category from "../../../../views/Category/Category";
import { routesConfig } from "../../../../router/routesConfig";
import { buildMetadata, pickStatic } from "../../../../i18n/seo";

export function generateStaticParams() {
  const langs = routesConfig.i18n.supported;
  return langs.flatMap((lang) =>
    routesConfig.categories.map((c) => ({ lang, slug: c.slug }))
  );
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const cat = routesConfig.categories.find((c) => c.slug === slug);
  return buildMetadata({
    lang,
    path: `/category/${slug}`,
    title: pickStatic(cat, "title", lang) || slug,
    description: pickStatic(cat, "subtitle", lang) || ""
  });
}

export default function CategoryPage() {
  return <Category />;
}

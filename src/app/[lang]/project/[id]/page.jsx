import Project from "../../../../views/Project/Project";
import { routesConfig } from "../../../../router/routesConfig";
import { buildMetadata, pickStatic } from "../../../../i18n/seo";
import { buildCreativeWork, buildBreadcrumb, jsonLdHtml } from "../../../../i18n/schema";

export function generateStaticParams() {
  const langs = routesConfig.i18n.supported;
  return langs.flatMap((lang) =>
    routesConfig.projects.map((p) => ({ lang, id: p.id }))
  );
}

export async function generateMetadata({ params }) {
  const { lang, id } = await params;
  const project = routesConfig.projects.find((p) => p.id === id);
  return buildMetadata({
    lang,
    path: `/project/${id}`,
    title: pickStatic(project, "title", lang) || id,
    description: pickStatic(project, "description", lang) || ""
  });
}

export default async function ProjectPage({ params }) {
  const { lang, id } = await params;
  const project = routesConfig.projects.find((p) => p.id === id);
  if (!project) return <Project />;

  const cat = routesConfig.categories.find((c) => c.slug === project.category);
  const crumbs = buildBreadcrumb(lang, [
    { name: pickStatic(routesConfig.copy.nav, "home", lang) || "Home", path: "/" },
    { name: pickStatic(cat, "title", lang) || project.category, path: `/category/${project.category}` },
    { name: pickStatic(project, "title", lang) || id, path: `/project/${id}` }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(buildCreativeWork(project, lang)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(crumbs) }}
      />
      <Project />
    </>
  );
}

import Project from "../../../../views/Project/Project";
import { routesConfig } from "../../../../router/routesConfig";
import { buildMetadata, pickStatic } from "../../../../i18n/seo";

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

export default function ProjectPage() {
  return <Project />;
}

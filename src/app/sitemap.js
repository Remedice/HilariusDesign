import { routesConfig } from "../router/routesConfig";
import { buildAlternates } from "../i18n/seo";

const LAST_MODIFIED = new Date();

function priorityFor(path) {
  if (path === "/") return 1;
  if (path.startsWith("/category/")) return 0.8;
  if (path.startsWith("/project/")) return 0.6;
  return 0.5;
}

export default function sitemap() {
  const langs = routesConfig.i18n.supported;

  const paths = [
    "/",
    "/about",
    "/contact",
    "/faq",
    ...routesConfig.categories.map((c) => `/category/${c.slug}`),
    ...routesConfig.projects.map((p) => `/project/${p.id}`)
  ];

  const entries = [];
  for (const path of paths) {
    for (const lang of langs) {
      const alt = buildAlternates(path, lang);
      entries.push({
        url: alt.canonical,
        lastModified: LAST_MODIFIED,
        changeFrequency: "monthly",
        priority: priorityFor(path),
        alternates: { languages: alt.languages }
      });
    }
  }
  return entries;
}

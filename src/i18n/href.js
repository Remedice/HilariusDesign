import { routesConfig } from "../router/routesConfig";

// Localize an app-internal path (without lang prefix) to /{lang}/{path}. No trailing slash.
// localizedHref("/category/transport", "en") => "/en/category/transport"
// localizedHref("/", "nl") => "/nl"
// In-page anchors / mailto / external links are returned unchanged.
export function localizedHref(path, lang) {
  const supported = routesConfig.i18n?.supported ?? ["nl"];
  const def = routesConfig.i18n?.default ?? "nl";
  const l = supported.includes(lang) ? lang : def;

  if (!path) return `/${l}`;
  if (path.startsWith("#")) return path;
  if (/^[a-z]+:/i.test(path)) return path; // mailto:, tel:, https:, etc.
  if (path === "/") return `/${l}`;
  if (path.startsWith("/#")) return `/${l}${path.slice(1)}`; // "/#x" -> "/nl#x"

  const clean = String(path).replace(/^\/+/, "").replace(/\/+$/, "");
  return `/${l}/${clean}`;
}

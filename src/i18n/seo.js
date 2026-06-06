import { routesConfig } from "../router/routesConfig";

export const SITE_URL = "https://www.hilariusdesign.nl";

export const SITE_NAME = "Hilarius Design";

// Default share image: cardboard trucks (flagship product).
export const OG_IMAGE = `${SITE_URL}/images/transport/vrachtwagens/vrachtwagens2-2.webp`;

// Internal lang code -> hreflang code (nl region-qualified per spec).
const HREFLANG = { nl: "nl-NL", en: "en", de: "de", fr: "fr", es: "es" };

// Internal lang code -> Open Graph locale.
const OG_LOCALE = { nl: "nl_NL", en: "en_US", de: "de_DE", fr: "fr_FR", es: "es_ES" };

function i18nConfig() {
  return routesConfig.i18n ?? { default: "nl", supported: ["nl"], fallback: "nl" };
}

// Pure, server-safe version of I18nProvider's pick().
// pickStatic(obj, "title", "en") => obj.i18n.en.title || obj.i18n.nl.title || obj.title
export function pickStatic(obj, field, lang) {
  if (!obj) return "";
  const fallback = i18nConfig().fallback ?? "nl";
  const fromI18n = obj.i18n?.[lang]?.[field] ?? obj.i18n?.[fallback]?.[field];
  if (fromI18n !== undefined) return fromI18n;
  return obj[field] ?? "";
}

// Absolute URL for a language + app path (path WITHOUT lang prefix). No trailing slash.
export function localizedUrl(lang, pathWithoutLang) {
  const clean = (pathWithoutLang || "").replace(/^\/+/, "").replace(/\/+$/, "");
  return clean ? `${SITE_URL}/${lang}/${clean}` : `${SITE_URL}/${lang}`;
}

// alternates block for Next metadata: self-canonical + hreflang languages map.
export function buildAlternates(pathWithoutLang, currentLang) {
  const { supported, default: defaultLang } = i18nConfig();
  const languages = {};
  for (const lang of supported) {
    languages[HREFLANG[lang] ?? lang] = localizedUrl(lang, pathWithoutLang);
  }
  languages["x-default"] = localizedUrl(defaultLang, pathWithoutLang);
  return {
    canonical: localizedUrl(currentLang, pathWithoutLang),
    languages
  };
}

// One-stop metadata builder used by every page's generateMetadata.
// title may be a plain string or { absolute } / { default } (Next title object).
export function buildMetadata({ lang, path, title, description }) {
  const alternates = buildAlternates(path, lang);
  const ogTitle =
    typeof title === "string" ? title : title?.absolute ?? title?.default ?? SITE_NAME;
  return {
    title,
    description,
    alternates,
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: alternates.canonical,
      title: ogTitle,
      description,
      locale: OG_LOCALE[lang] ?? "nl_NL",
      images: [{ url: OG_IMAGE, alt: ogTitle }]
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [OG_IMAGE]
    }
  };
}

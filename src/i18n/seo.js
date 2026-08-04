import { routesConfig } from "../router/routesConfig";

export const SITE_URL = "https://www.hilariusdesign.nl";

export const SITE_NAME = "Hilarius Design";

// Default share image: cardboard trucks (flagship product), cropped to the 1.91:1 card
// that LinkedIn, WhatsApp and Slack render.
//
// Deliberately a JPEG, not the WebP the rest of the site uses. LinkedIn's image proxy only
// documents JPG, PNG and GIF, and it silently drops a WebP: the post then shows a bare link
// with no picture. Same story for the explicit width and height below. Without them the
// scraper has to fetch and measure the file before it can lay the card out, and the first
// share of a URL is exactly when it gives up quickest.
export const OG_IMAGE = `${SITE_URL}/og.jpg`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

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
      images: [
        {
          url: OG_IMAGE,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: ogTitle
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [OG_IMAGE]
    }
  };
}

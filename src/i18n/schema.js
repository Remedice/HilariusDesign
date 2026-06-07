import { routesConfig } from "../router/routesConfig";
import { texts } from "../router/texts";
import { SITE_URL, SITE_NAME, OG_IMAGE, localizedUrl, pickStatic } from "./seo";

// Internal lang code -> schema.org inLanguage (matches hreflang in seo.js).
const IN_LANGUAGE = { nl: "nl-NL", en: "en", de: "de", fr: "fr", es: "es" };
const inLang = (lang) => IN_LANGUAGE[lang] ?? lang;

// All products are made from recycled board; expose it as a localized material.
const MATERIAL = {
  nl: "Gerecycled karton",
  en: "Recycled board",
  de: "Recycelter Karton",
  fr: "Carton recyclé",
  es: "Cartón reciclado"
};

// Stable legal identifiers (also shown in the footer).
const KVK = "34321364";
const VAT = "NL001184466B83";

// Make an image path absolute. Project covers/images are root-relative
// ("/images/..."); OG_IMAGE is already absolute.
function abs(url) {
  if (!url) return OG_IMAGE;
  if (/^https?:\/\//.test(url)) return url;
  return `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

// Serialize for dangerouslySetInnerHTML: escape "<" so a literal "</script>"
// in any data can never break out of the script tag.
export function jsonLdHtml(obj) {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

export function buildOrganization(lang) {
  const c = routesConfig.contact;
  const [street = "", localityLine = ""] = (c.address || "").split("\n");
  const m = localityLine.match(/^(\d{4}\s?[A-Z]{2})\s+(.*)$/);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#org`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    image: OG_IMAGE,
    sameAs: [routesConfig.linkedin],
    email: c.email,
    telephone: c.phone,
    vatID: VAT,
    taxID: KVK,
    address: {
      "@type": "PostalAddress",
      streetAddress: street,
      postalCode: m ? m[1] : "",
      addressLocality: m ? m[2] : localityLine,
      addressCountry: "NL"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: c.email,
      telephone: c.phone,
      availableLanguage: ["nl", "en", "de", "fr", "es"]
    }
  };
}

export function buildWebSite(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: localizedUrl(lang, "/"),
    inLanguage: inLang(lang),
    publisher: { "@id": `${SITE_URL}/#org` }
  };
}

export function buildPerson() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#wim-hilarius`,
    name: "Wim Hilarius",
    jobTitle: "Designer",
    worksFor: { "@id": `${SITE_URL}/#org` },
    url: `${SITE_URL}/nl/about`,
    sameAs: [routesConfig.linkedin],
    knowsAbout: [
      "cardboard design",
      "recycled board",
      "corporate gifts",
      "packaging design",
      "paper engineering"
    ]
  };
}

// items: [{ name, path }] where path is WITHOUT the lang prefix ("/" = home).
export function buildBreadcrumb(lang, items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: localizedUrl(lang, it.path)
    }))
  };
}

export function buildCreativeWork(project, lang) {
  const images = (project.images?.length ? project.images : [project.cover])
    .filter(Boolean)
    .map(abs);
  const name = pickStatic(project, "title", lang) || project.id;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${localizedUrl(lang, `/project/${project.id}`)}#creativework`,
    name,
    description: pickStatic(project, "description", lang),
    url: localizedUrl(lang, `/project/${project.id}`),
    image: images,
    associatedMedia: images.slice(0, 4).map((url, index) => ({
      "@type": "ImageObject",
      contentUrl: url,
      name: index === 0 ? name : `${name} ${index + 1}`
    })),
    inLanguage: inLang(lang),
    material: MATERIAL[lang] ?? MATERIAL.nl,
    creator: { "@id": `${SITE_URL}/#wim-hilarius` },
    isPartOf: { "@id": `${SITE_URL}/#website` }
  };
}

export function buildFaqPage(lang) {
  const items = pickStatic(texts.pages.faq, "items", lang) ?? [];
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: inLang(lang),
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a }
    }))
  };
}

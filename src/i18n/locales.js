// Lean, edge-safe locale helpers for the middleware (no routesConfig import, so
// the middleware bundle stays small). Mirrors routesConfig.i18n.supported.
export const LOCALES = ["nl", "en", "de", "fr", "es"];

// Default for <html lang> fallback + hreflang x-default (NL is the main site).
export const DEFAULT_LOCALE = "nl";

// Fallback when a visitor's browser language is not one we support: English is
// the international default (see prompts/SEO-GEO.md language-detection note).
export const REDIRECT_FALLBACK = "en";

export function isLocale(value) {
  return LOCALES.includes(value);
}

// Pick a supported locale from a raw Accept-Language header. Pure (edge-safe).
// Returns REDIRECT_FALLBACK (en) when nothing matches.
export function localeFromAcceptLanguage(acceptLanguage) {
  if (!acceptLanguage) return REDIRECT_FALLBACK;
  const candidates = acceptLanguage
    .split(",")
    .map((s) => s.split(";")[0].trim().toLowerCase().split("-")[0])
    .filter(Boolean);
  for (const c of candidates) {
    if (isLocale(c)) return c;
  }
  return REDIRECT_FALLBACK;
}

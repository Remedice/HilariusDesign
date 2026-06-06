"use client";

import React, { createContext, useCallback, useMemo } from "react";
import { routesConfig } from "../router/routesConfig";
import { pickStatic } from "./seo";

export const I18nContext = createContext({
  lang: "nl",
  pick: (obj, field) => obj?.[field]
});

export default function I18nProvider({ lang: langProp, children }) {
  const supported = routesConfig.i18n?.supported ?? ["nl", "en", "de", "fr", "es"];
  const defaultLang = routesConfig.i18n?.default ?? "nl";

  // URL is the single source of truth (passed from [lang]/layout). Pure and
  // prop-driven: no effects, no localStorage -> no hydration mismatch. The
  // <html lang> attribute is set server-side in the root layout; the language
  // cookie is managed by the middleware.
  const lang = supported.includes(langProp) ? langProp : defaultLang;

  const pick = useCallback((obj, field) => pickStatic(obj, field, lang), [lang]);

  const value = useMemo(() => ({ lang, pick }), [lang, pick]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

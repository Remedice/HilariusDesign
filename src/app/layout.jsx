import "../styles/tokens.css";
import "../styles/fonts.css";
import "../styles/global.css";
import { headers } from "next/headers";
import { SITE_URL } from "../i18n/seo";
import { buildOrganization, buildWebSite, jsonLdHtml } from "../i18n/schema";
import { DEFAULT_LOCALE, isLocale } from "../i18n/locales";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hilarius Design",
    template: "%s - Hilarius Design"
  },
  description: "Ideas Made of Board - Where Material Meets Creation",
  icons: { icon: "/logo.svg" }
};

export default async function RootLayout({ children }) {
  // The active language comes from the URL (/{lang}/...). The middleware mirrors
  // it into an x-lang request header so this server-rendered root layout can set
  // <html lang> correctly. Falls back to NL (the bare-domain default).
  const headerLang = (await headers()).get("x-lang");
  const lang = headerLang && isLocale(headerLang) ? headerLang : DEFAULT_LOCALE;

  return (
    <html lang={lang}>
      <head>
        <link rel="dns-prefetch" href="https://use.typekit.net" />
        <link rel="dns-prefetch" href="https://p.typekit.net" />
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/zko8kch.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdHtml(buildOrganization(lang)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdHtml(buildWebSite(lang)) }}
        />
      </head>
      <body>
        {/* Hidden form for Netlify Forms detection at build time */}
        <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
        {children}
      </body>
    </html>
  );
}

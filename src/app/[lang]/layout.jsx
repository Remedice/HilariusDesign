import { notFound } from "next/navigation";
import "../../styles/tokens.css";
import "../../styles/fonts.css";
import "../../styles/global.css";
import ClientProviders from "../../components/ClientProviders";
import { SITE_URL } from "../../i18n/seo";
import { buildOrganization, buildPerson, buildWebSite, jsonLdHtml } from "../../i18n/schema";
import { routesConfig } from "../../router/routesConfig";

const typekitLoader = `
(() => {
  const loadTypekit = () => {
    if (document.querySelector('link[data-typekit="zko8kch"]')) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://use.typekit.net/zko8kch.css";
    link.dataset.typekit = "zko8kch";
    document.head.appendChild(link);
  };
  if ("requestIdleCallback" in window) {
    requestIdleCallback(loadTypekit, { timeout: 1800 });
  } else {
    window.addEventListener("load", loadTypekit, { once: true });
  }
})();
`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hilarius Design",
    template: "%s - Hilarius Design"
  },
  description: "Ideas Made of Board - Where Material Meets Creation",
  icons: { icon: "/logo.svg" }
};

export function generateStaticParams() {
  return routesConfig.i18n.supported.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  if (!routesConfig.i18n.supported.includes(lang)) notFound();

  return (
    <html lang={lang}>
      <head>
        <link rel="dns-prefetch" href="https://use.typekit.net" />
        <link rel="dns-prefetch" href="https://p.typekit.net" />
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: typekitLoader }} />
        <noscript>
          <link rel="stylesheet" href="https://use.typekit.net/zko8kch.css" />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdHtml(buildOrganization(lang)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdHtml(buildWebSite(lang)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdHtml(buildPerson()) }}
        />
      </head>
      <body>
        <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
        <ClientProviders lang={lang}>{children}</ClientProviders>
      </body>
    </html>
  );
}

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

const imageRevealLoader = `
(() => {
  const revealed = new WeakSet();
  const startedAt = performance.now();
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const revealImage = (image) => {
    if (!(image instanceof HTMLImageElement) || !image.dataset.reveal || revealed.has(image)) return;
    if (!image.complete || !image.naturalWidth) return;

    revealed.add(image);
    const revealMode = image.dataset.reveal;
    const isHero = revealMode === "hero";
    const target = isHero ? image.closest(".homeHeroMedia") : image;
    if (!target) return;

    const skeleton = image.parentElement?.querySelector(":scope > .imgSkeleton, :scope > .catImgSkeleton");
    if (skeleton && !prefersReducedMotion && typeof skeleton.animate === "function") {
      skeleton.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 180,
        delay: 80,
        easing: "ease-out",
        fill: "forwards"
      });
    }

    if (revealMode === "cover" || prefersReducedMotion || typeof target.animate !== "function") return;

    const isMobile = window.matchMedia("(max-width: 860px)").matches;
    const targetDelay = Number(
      isMobile
        ? image.dataset.revealDelayMobile || 0
        : image.dataset.revealDelayDesktop || 0
    );
    const delay = Math.max(0, targetDelay - (performance.now() - startedAt));
    const duration = Number(image.dataset.revealDuration || (isHero ? (isMobile ? 560 : 760) : 620));
    const keyframes = isHero && !isMobile
      ? [
          { opacity: 0, transform: "translateY(16px) scale(0.985)" },
          { opacity: 1, transform: "translateY(0) scale(1)" }
        ]
      : [{ opacity: 0 }, { opacity: 1 }];

    target.animate(keyframes, {
      duration,
      delay,
      easing: isMobile ? "cubic-bezier(0.4, 0, 0.2, 1)" : "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: "backwards"
    });
  };

  window.__hdRevealImage = revealImage;
  document.addEventListener("load", (event) => revealImage(event.target), true);

  const revealCompletedImages = () => {
    document.querySelectorAll("img[data-reveal]").forEach(revealImage);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", revealCompletedImages, { once: true });
  } else {
    revealCompletedImages();
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

export const dynamicParams = false;

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
        <script dangerouslySetInnerHTML={{ __html: imageRevealLoader }} />
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

"use client";

import { useContext, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routesConfig } from "../../router/routesConfig";
import { I18nContext } from "../../i18n/I18nProvider";
import { localizedHref } from "../../i18n/href";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch.jsx";
import { ChevronDown, Menu, X } from "lucide-react";
import "./Header.css";

export default function Header() {
  const { pick, lang } = useContext(I18nContext);
  const pathname = usePathname();

  // pathname now carries a lang prefix (e.g. /en/about/) -> strip it for active state.
  const activePath = useMemo(() => {
    const parts = (pathname || "/").split("/").filter(Boolean);
    if (parts.length && routesConfig.i18n.supported.includes(parts[0])) parts.shift();
    return "/" + parts.join("/");
  }, [pathname]);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const closeTimer = useRef(null);

  const megaInnerRef = useRef(null);

  const [openCats, setOpenCats] = useState(() => ({}));

  const categories = routesConfig.categories;
  const nav = routesConfig.nav;

  const mega = useMemo(() => {
    const map = new Map();
    for (const c of categories) {
      const items = routesConfig.projects.filter((p) => p.category === c.slug);
      map.set(c.slug, items);
    }
    return map;
  }, [categories]);

  useEffect(() => {
    setMobileOpen(false);
    setPortfolioOpen(false);

    if (megaInnerRef.current) megaInnerRef.current.scrollTop = 0;
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  function openPortfolio() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);

    if (megaInnerRef.current) megaInnerRef.current.scrollTop = 0;

    setPortfolioOpen(true);
  }

  function scheduleClosePortfolio() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setPortfolioOpen(false), 120);
  }

  function toggleCat(slug) {
    setOpenCats((prev) => ({ ...prev, [slug]: !prev[slug] }));
  }

  return (
    <>
      <header className="header">
        <div className="headerInner">
          <Link href={localizedHref("/", lang)} className="brand" aria-label="Hilarius Design">
            <Image className="brandLogo" src="/logo.svg" alt="" width={34} height={34} priority />
          </Link>

          {/* Desktop nav */}
          <nav className="navDesktop" aria-label="Primary">
            <div
              className={`navGroup ${portfolioOpen ? "open" : ""}`}
              onMouseEnter={openPortfolio}
              onMouseLeave={scheduleClosePortfolio}
            >
              <Link href={localizedHref("/", lang)} className="navItem">
                <span className="navLabel">
                  {pick(routesConfig.copy.nav, "portfolio")}
                  <span className="navUnderline" />
                </span>
              </Link>

              <div
                className={`mega ${portfolioOpen ? "open" : ""}`}
                role="menu"
                aria-label="Portfolio submenu"
                onMouseEnter={openPortfolio}
                onMouseLeave={scheduleClosePortfolio}
              >
                <div className="megaInner" ref={megaInnerRef}>
                  {categories.map((c) => (
                    <div key={c.slug} className="megaCol">
                      <Link href={localizedHref(`/category/${c.slug}`, lang)} className="megaTitle">
                        <span className="megaTitleLabel">
                          {pick(c, "title")}
                          <span className="megaUnderline" />
                        </span>
                      </Link>
                      <div className="megaSub">{pick(c, "subtitle")}</div>

                      <div className="megaItems">
                        {(mega.get(c.slug) ?? []).map((p) => (
                          <Link key={p.id} href={localizedHref(`/project/${p.id}`, lang)} className="megaItem">
                            <span className="megaItemLabel">
                              {pick(p, "title")}
                              <span className="megaUnderlineThin" />
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {nav.map((item) => (
              <Link
                key={item.path}
                href={localizedHref(item.path, lang)}
                className={`navItem${activePath === item.path ? " active" : ""}`}
              >
                <span className="navLabel">
                  {pick(item, "label")}
                  <span className="navUnderline" />
                </span>
              </Link>
            ))}

            <LanguageSwitch />
          </nav>

          {/* Mobile: top header links */}
          <nav className="navMobileInline" aria-label="Quick links">
            {nav.map((item) => (
              <Link
                key={item.path}
                href={localizedHref(item.path, lang)}
                className={`navMobileInlineLink${activePath === item.path ? " active" : ""}`}
              >
                {pick(item, "labelMobile") || pick(item, "label")}
              </Link>
            ))}
          </nav>

          <button
            className="mobileBtn"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
          >
            {mobileOpen ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
          </button>
        </div>
      </header>

      <div className={`mobileOverlay ${mobileOpen ? "open" : ""}`}>
        <div className="mobileOverlayBg" onClick={() => setMobileOpen(false)} aria-hidden="true" />
        <div className="mobilePanel" role="dialog" aria-label="Menu">
          <div className="mobileTop">
            <div className="mobileTitle">{pick(routesConfig.copy.nav, "menu")}</div>

            <div className="mobileTopRight">
              <LanguageSwitch compact />
              <button className="mobileClose" onClick={() => setMobileOpen(false)} aria-label="Sluiten">
                <X size={20} strokeWidth={1.8} />
              </button>
            </div>
          </div>

          <div className="mobileNav">
            <div className="mobileSection">
              <div className="mobileSectionLabel">{pick(routesConfig.copy.nav, "portfolio")}</div>

              <div className="mobileAcc">
                {categories.map((c) => {
                  const isOpen = !!openCats[c.slug];
                  const items = mega.get(c.slug) ?? [];
                  return (
                    <div key={c.slug} className="mobileAccItem">
                      <button
                        type="button"
                        className="mobileAccBtn"
                        onClick={() => toggleCat(c.slug)}
                        aria-expanded={isOpen ? "true" : "false"}
                        aria-controls={`cat-${c.slug}`}
                      >
                        <span className="mobileAccTitle">{pick(c, "title")}</span>
                        <ChevronDown
                          size={18}
                          strokeWidth={1.8}
                          className={`mobileAccChev ${isOpen ? "open" : ""}`}
                        />
                      </button>

                      <div id={`cat-${c.slug}`} className={`mobileAccPanel ${isOpen ? "open" : ""}`}>
                        <div className="mobileAccPanelInner">
                          <Link href={localizedHref(`/category/${c.slug}`, lang)} className="mobileAccAll">
                            {pick(c, "subtitle")}
                          </Link>

                          <div className="mobileAccProducts">
                            {items.map((p) => (
                              <Link key={p.id} href={localizedHref(`/project/${p.id}`, lang)} className="mobileAccProduct">
                                {pick(p, "title")}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

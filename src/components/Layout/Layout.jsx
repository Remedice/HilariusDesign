"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Header from "../Header/Header.jsx";
import { routesConfig } from "../../router/routesConfig";
import { smoothScrollTo } from "../../utils/smoothScroll";
import "./Layout.css";

function isCoarsePointer() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(hover: none) and (pointer: coarse)")?.matches ?? false;
}

function nudgeScrollToRestoreHitTesting() {
  const x = window.scrollX || 0;
  const y = window.scrollY || 0;
  window.scrollTo(x, y + 1);
  window.scrollTo(x, y);
}

export default function Layout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    smoothScrollTo(0, 520);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isCoarsePointer()) return;

    const onFocusOut = (e) => {
      const t = e.target;
      const tag = t?.tagName?.toLowerCase?.();
      if (tag !== "input" && tag !== "textarea" && tag !== "select") return;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          nudgeScrollToRestoreHitTesting();
        });
      });
    };

    window.addEventListener("focusout", onFocusOut, true);
    return () => window.removeEventListener("focusout", onFocusOut, true);
  }, []);

  return (
    <div className="appShell">
      <Header />
      <main className="main">
        {children}
      </main>

      <footer className="footer">
        <div className="footerInner">
          <div className="footerBrandBlock">
            <div className="footerBrand">Hilarius Design</div>
            <div className="footerTagline">
              <div>IDEAS MADE OF BOARD</div>
              <div>WHERE MATERIAL MEETS CREATION</div>
            </div>
          </div>

          <div className="footerCols">
            <div className="footerCol footerColLinks">
              <div className="footerBody">
                <a
                  className="uLink footerLink footerContactLink"
                  href={`mailto:${routesConfig.contact.email}`}
                >
                  <span className="uLinkLabel">
                    {routesConfig.contact.email}
                    <span className="uUnderline" />
                  </span>
                </a>

                <a
                  className="uLink footerLink footerContactLink"
                  href={`tel:${routesConfig.contact.phone.replace(/\s/g, "")}`}
                >
                  <span className="uLinkLabel">
                    {routesConfig.contact.phone}
                    <span className="uUnderline" />
                  </span>
                </a>
                <a
                  className="uLink footerLink"
                  href={routesConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="uLinkLabel">
                    LinkedIn
                    <span className="uUnderline" />
                  </span>
                </a>
              </div>
            </div>

            <div className="footerCol footerColMeta">
              <div className="footerBody">
                <div className="footerText">KVK 34321364</div>
                <div className="footerText">BTW NL001184466B83</div>
                <div className="footerLegal">© 2026 Hilarius Design</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

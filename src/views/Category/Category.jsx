"use client";

import { useContext, useEffect, useMemo, useRef, useState, useCallback } from "react";
import NextImage from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { routesConfig } from "../../router/routesConfig";
import { I18nContext } from "../../i18n/I18nProvider";
import { localizedHref } from "../../i18n/href";
import "./Category.css";

async function preloadAndDecode(src) {
  if (!src) return;
  const img = new Image();
  img.src = src;
  await new Promise((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => reject(new Error("load failed"));
  });
  if (img.decode) {
    try { await img.decode(); } catch { /* ignore */ }
  }
}

const AUTO_DELAY = 5500;
const AUTO_INITIAL_DELAY = 8500;

const imageAltSuffix = {
  nl: "van Hilarius Design in gerecycled karton",
  en: "by Hilarius Design in recycled board",
  de: "von Hilarius Design aus recycelter Pappe",
  fr: "par Hilarius Design en carton recyclé",
  es: "de Hilarius Design en cartón reciclado"
};

export default function Category() {
  const { slug } = useParams();
  const { pick, lang } = useContext(I18nContext);

  const category = useMemo(
    () => routesConfig.categories.find((c) => c.slug === slug),
    [slug]
  );

  const projects = useMemo(() => {
    if (!category) return [];
    return routesConfig.projects.filter((p) => p.category === category.slug);
  }, [category]);

  // Desktop hero
  const [activeId, setActiveId] = useState(null);
  const [heroSrc, setHeroSrc] = useState("");
  const [heroFadeKey, setHeroFadeKey] = useState(0);
  const preloadedRef = useRef(new Set());

  useEffect(() => {
    if (!projects.length) return;
    const first = projects[0];
    setActiveId(first.id);
    setHeroSrc(first.cover || "");
    setHeroFadeKey((k) => k + 1);

    let cancelled = false;
    Promise.allSettled(projects.map((p) => preloadAndDecode(p.cover))).then((results) => {
      if (cancelled) return;
      projects.forEach((p, i) => {
        if (p?.cover && results[i]?.status === "fulfilled") {
          preloadedRef.current.add(p.cover);
        }
      });
    });
    return () => { cancelled = true; };
  }, [slug, projects]);

  function hoverProject(p) {
    if (!p?.cover || p.id === activeId) return;
    setActiveId(p.id);
    const show = () => { setHeroSrc(p.cover); setHeroFadeKey((k) => k + 1); };
    if (preloadedRef.current.has(p.cover)) { show(); return; }
    preloadAndDecode(p.cover).then(() => { preloadedRef.current.add(p.cover); show(); }).catch(show);
  }

  // Mobile: image rail + static dots/title
  const railRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const autoTimerRef = useRef(null);
  const cellTouchStartX = useRef(0);

  const scrollToIndex = useCallback((index) => {
    const rail = railRef.current;
    if (!rail) return;
    const cell = rail.children[index];
    if (!cell) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    rail.scrollTo({ left: cell.offsetLeft, behavior: prefersReduced ? "auto" : "smooth" });
  }, []);

  const startAutoTimer = useCallback(() => {
    if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    const shouldSkip =
      projects.length < 2 ||
      document.hidden ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (shouldSkip) return;
    autoTimerRef.current = setInterval(() => {
      const next = activeIndexRef.current < projects.length - 1
        ? activeIndexRef.current + 1
        : 0;
      scrollToIndex(next);
    }, AUTO_DELAY);
  }, [projects.length, scrollToIndex]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || !projects.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            if (!Number.isNaN(index)) {
              activeIndexRef.current = index;
              setActiveIndex(index);
            }
          }
        }
      },
      { root: rail, threshold: 0.5 }
    );

    Array.from(rail.children).forEach((cell) => io.observe(cell));
    return () => io.disconnect();
  }, [projects.length, slug]);

  useEffect(() => {
    if (!projects.length) return;
    activeIndexRef.current = 0;
    setActiveIndex(0);
    const rail = railRef.current;
    if (rail) rail.scrollLeft = 0;
    const initialTimer = window.setTimeout(() => {
      startAutoTimer();
    }, AUTO_INITIAL_DELAY);
    return () => {
      window.clearTimeout(initialTimer);
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    };
  }, [slug, projects.length, startAutoTimer]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let settleTimer = null;
    const onScroll = () => {
      if (settleTimer) clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        startAutoTimer();
      }, 600);
    };

    const onVisibilityChange = () => {
      if (document.hidden && autoTimerRef.current) {
        clearInterval(autoTimerRef.current);
        autoTimerRef.current = null;
      } else {
        startAutoTimer();
      }
    };

    rail.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      rail.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (settleTimer) clearTimeout(settleTimer);
    };
  }, [startAutoTimer]);

  function handleDotClick(e, index) {
    e.preventDefault();
    if (index === activeIndex) return;
    scrollToIndex(index);
    startAutoTimer();
  }

  if (!category) {
    return (
      <section className="catPage">
        <div className="catTop">
          <h1 className="catTitle">{pick(routesConfig.copy.common, "notFound")}</h1>
          <Link className="catBack" href={localizedHref("/", lang)}>{pick(routesConfig.copy.common, "backHome")}</Link>
        </div>
      </section>
    );
  }

  const currentProject = projects.find((p) => p.id === activeId) ?? projects[0] ?? null;
  const mobileProject = projects[activeIndex] ?? null;
  const categoryTitle = pick(category, "title");
  const categoryIntro = pick(category, "intro");
  const categoryImageAlt = pick(category, "imageAlt");
  const projectImageAlt = (project) => {
    const title = pick(project, "title");
    return [title, categoryImageAlt || `${categoryTitle} ${imageAltSuffix[lang] ?? imageAltSuffix.en}`]
      .filter(Boolean)
      .join(" - ");
  };
  const headingLines = ["titleLine1", "titleLine2", "titleLine3"]
    .map((key, index) => ({
      key,
      text: pick(category, key),
      strong: index === 1
    }))
    .filter((line) => line.text?.trim());

  return (
    <section className="catPage">
      {/* ─── Desktop ────────────────────────────────────────────── */}
      <div className="catLayout">
        <Link
          href={currentProject ? localizedHref(`/project/${currentProject.id}`, lang) : "#"}
          className="catHero"
          aria-label="Open project"
        >
          <div className="catHeroMedia">
            <div className="catHeroStack">
              {heroSrc ? (
                <NextImage
                  key={heroFadeKey}
                  className="catHeroImg"
                  src={heroSrc}
                  alt={currentProject ? projectImageAlt(currentProject) : ""}
                  fill
                  priority
                  fetchPriority="high"
                  quality={70}
                  sizes="(max-width: 860px) 0px, 50vw"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              ) : null}
              <div className="catHeroFallback" />
            </div>
          </div>
        </Link>

        <div className="catRight">
          <h1 className="catHeading">
            {headingLines.map((line) => (
              <span
                key={line.key}
                className={`catHeadingLine${line.strong ? " catStrong" : ""}`}
              >
                {line.text}
              </span>
            ))}
          </h1>

          <div className="catTableWrap">
            <div className="catTable">
              <div className="catTableHead">
                <div className="th">{pick(routesConfig.copy.category, "colProject")}</div>
              </div>
              {projects.map((p) => (
                <Link
                  key={p.id}
                  href={localizedHref(`/project/${p.id}`, lang)}
                  className={`catRow ${p.id === activeId ? "active" : ""}`}
                  onMouseEnter={() => hoverProject(p)}
                  onFocus={() => hoverProject(p)}
                >
                  <div className="td projectOnly">
                    <span className="linkish">{pick(p, "title")}</span>
                    <ArrowUpRight className="catRowIcon" size={16} strokeWidth={2} aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="catMetaNote">
            <p>{pick(category, "subtitle")}</p>
            {categoryIntro ? <p>{categoryIntro}</p> : null}
          </div>
        </div>
      </div>

      {/* ─── Mobile ─────────────────────────────────────────────── */}
      <div className="catMobile">
        <div className="catMobileTitle">{categoryTitle}</div>
        <div className="catMobileSub">{pick(category, "subtitle")}</div>

        <div ref={railRef} className="catMobileImgRail">
          {projects.map((p, i) => (
            <Link
              key={p.id}
              href={localizedHref(`/project/${p.id}`, lang)}
              className="catMobileImgCell"
              data-index={i}
              onTouchStart={(e) => {
                cellTouchStartX.current = e.touches[0].clientX;
              }}
              onClick={(e) => {
                const dx = Math.abs(e.clientX - cellTouchStartX.current);
                if (dx > 8) e.preventDefault();
              }}
            >
              {p.cover ? (
                <NextImage
                  src={p.cover}
                  alt={projectImageAlt(p)}
                  fill
                  sizes="100vw"
                  priority={i === 0}
                  fetchPriority={i === 0 ? "high" : undefined}
                  quality={65}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              ) : null}
              <div className="catHeroFallback" />
            </Link>
          ))}
        </div>

        {projects.length > 1 ? (
          <div className="catDots" role="tablist" aria-label="Product navigation">
            {projects.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Go to product ${i + 1}`}
                className={`catDot${i === activeIndex ? " catDotActive" : ""}`}
                onClick={(e) => handleDotClick(e, i)}
              />
            ))}
          </div>
        ) : null}

        <Link
          href={mobileProject ? localizedHref(`/project/${mobileProject.id}`, lang) : "#"}
          className="catMobileInfo"
        >
          <div key={activeIndex} className="catMobileName">
            {mobileProject ? pick(mobileProject, "title") : ""}
          </div>
          <ArrowUpRight className="catCardIcon" size={16} strokeWidth={2} aria-hidden="true" />
        </Link>
        {categoryIntro ? <p className="catMobileIntro">{categoryIntro}</p> : null}
      </div>
    </section>
  );
}

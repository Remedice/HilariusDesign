"use client";

import { useContext, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { routesConfig } from "../../router/routesConfig";
import { I18nContext } from "../../i18n/I18nProvider";
import { localizedHref } from "../../i18n/href";
import HomeMosaic from "../../components/HomeMosaic/HomeMosaic.jsx";
import WorldOfBoard from "../../components/WorldOfBoard/WorldOfBoard.jsx";
import { getImage } from "../../router/images";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Home.css";

function useIsMobile(breakpoint = 860) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setIsMobile(mq.matches);
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, [breakpoint]);

  return isMobile;
}

function RevealImg({ src, alt, loading, decoding, className, onReveal }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current?.complete) onReveal?.();
  }, []);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={className}
      onLoad={onReveal}
      onError={onReveal}
    />
  );
}

function MobileCatCard({ c }) {
  const [ref, isRevealed] = useScrollReveal();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <article
      ref={ref}
      className={`homeMobileCatCard homeRevealBlock ${isRevealed ? "isIn" : ""}`}
    >
      <Link href={c.href} className="homeMobileCatLink">
        <div className="homeMobileCatMedia" aria-hidden="true">
          {c.src ? (
            <RevealImg
              src={c.src}
              alt=""
              loading="lazy"
              decoding="async"
              className={`revealImg ${imgLoaded ? "isLoaded" : ""}`}
              onReveal={() => setImgLoaded(true)}
            />
          ) : null}
          <div className="homeImgFallback" />
        </div>
        <div className="homeMobileCatCaption">
          <div className="homeMobileCatTitle">{c.title}</div>
          <div className="homeMobileCatSub">{c.sub}</div>
        </div>
      </Link>
    </article>
  );
}

function HomeMobile({ categories, wobHref }) {
  return (
    <section className="homeMobile" aria-label="Home">
      <Link
        href={wobHref}
        className="homeMobileWob"
        aria-label="The Art Of Board"
      >
        <WorldOfBoard className="homeMobileWobImg" />
      </Link>

      <div className="homeMobileCats" aria-label="Categories">
        {categories.map((c) => (
          <MobileCatCard key={c.slug} c={c} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const { pick, lang } = useContext(I18nContext);
  const isMobile = useIsMobile(860);

  const { tiles, mobileCategories, wobHref } = useMemo(() => {
    const c = routesConfig.categories;
    const p = routesConfig.projects;

    const coverFor = (slug) => {
      const manual = routesConfig.homeCovers?.[slug];
      if (manual) return getImage(manual);
      return p.find((x) => x.category === slug)?.cover || "";
    };

    const hideOnHome = ["the-art-of-board", "interieur-exterieur"];
    const wobCat = c.find((cat) => cat.slug === "the-art-of-board");
    const baseTiles = [
      { key: "wob", type: "wob", size: "s3", to: localizedHref("/category/the-art-of-board", lang), label: wobCat ? pick(wobCat, "title") : "", sub: wobCat ? pick(wobCat, "subtitle") : "" },
      ...c
        .filter((cat) => !hideOnHome.includes(cat.slug))
        .map((cat, i) => ({
          key: `c${i}`,
          type: "image",
          size: i < 2 ? "s3" : "s2",
          to: localizedHref(`/category/${cat.slug}`, lang),
          src: coverFor(cat.slug),
          label: pick(cat, "title"),
          sub: pick(cat, "subtitle")
        }))
    ];

    const cats = c.filter((cat) => cat.slug !== "interieur-exterieur" && cat.slug !== "the-art-of-board").map((cat) => ({
      slug: cat.slug,
      href: localizedHref(`/category/${cat.slug}`, lang),
      src: coverFor(cat.slug),
      title: pick(cat, "title"),
      sub: pick(cat, "subtitle")
    }));

    const wobHref = localizedHref(wobCat ? `/category/${wobCat.slug}` : "/category/the-art-of-board", lang);

    return { tiles: baseTiles, mobileCategories: cats, wobHref };
  }, [pick, lang]);

  if (isMobile) {
    return <HomeMobile categories={mobileCategories} wobHref={wobHref} />;
  }

  return (
    <section className="home">
      <HomeMosaic tiles={tiles} />
    </section>
  );
}

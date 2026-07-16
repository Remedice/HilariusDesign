"use client";

import { useContext, useMemo } from "react";
import { routesConfig } from "../../router/routesConfig";
import { I18nContext } from "../../i18n/I18nProvider";
import { localizedHref } from "../../i18n/href";
import HomeMosaic from "../../components/HomeMosaic/HomeMosaic.jsx";
import HomeHero from "../../components/HomeHero/HomeHero.jsx";
import { getImage } from "../../router/images";
import "./Home.css";

export default function Home() {
  const { pick, lang } = useContext(I18nContext);

  const tiles = useMemo(() => {
    const c = routesConfig.categories;
    const p = routesConfig.projects;

    const coverFor = (slug) => {
      const manual = routesConfig.homeCovers?.[slug];
      if (manual) return getImage(manual);
      return p.find((x) => x.category === slug)?.cover || "";
    };

    return c
      .filter((cat) => cat.slug !== "the-art-of-board")
      .map((cat, i) => ({
        key: `c${i}`,
        type: "image",
        size: i < 3 ? "s3" : "s2",
        to: localizedHref(`/category/${cat.slug}`, lang),
        src: coverFor(cat.slug),
        label: pick(cat, "title"),
        sub: pick(cat, "subtitle"),
        action: pick(routesConfig.copy.home, "hoverHint")
      }));
  }, [pick, lang]);

  return (
    <div className="home">
      <HomeHero />
      <section
        id="portfolio"
        className="homePortfolio"
        aria-labelledby="portfolioTitle"
      >
        <div className="homePortfolioHeader">
          <h2 id="portfolioTitle">{pick(routesConfig.copy.home, "portfolioTitle")}</h2>
          <p>{pick(routesConfig.copy.home, "portfolioIntro")}</p>
        </div>
        <HomeMosaic tiles={tiles} />
      </section>
    </div>
  );
}

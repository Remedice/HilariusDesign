"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { I18nContext } from "../../i18n/I18nProvider";
import { localizedHref } from "../../i18n/href";
import { routesConfig } from "../../router/routesConfig";
import { getImage } from "../../router/images";
import { useParallaxField } from "../../hooks/useParallaxField";
import { smoothScrollTo } from "../../utils/smoothScroll";
import WorldOfBoard from "../WorldOfBoard/WorldOfBoard";
import "./HomeHero.css";

const mobileHeroOrder = new Map(
  routesConfig.homeHero.items
    .filter((item) => !item.hideOnMobile)
    .map((item, index) => [item.key, index])
);

export default function HomeHero() {
  const { pick, lang } = useContext(I18nContext);
  const heroRef = useParallaxField();
  const artOfBoard = routesConfig.categories.find(
    (category) => category.slug === "the-art-of-board"
  );

  const handlePortfolioClick = (event) => {
    const portfolio = document.getElementById("portfolio");
    const portfolioTitle = document.getElementById("portfolioTitle");
    if (!portfolio || !portfolioTitle) return;

    event.preventDefault();
    const topMargin = window.matchMedia("(max-width: 860px)").matches ? 24 : 32;
    const resolveTop = () => {
      const headerHeight =
        document.querySelector(".header")?.getBoundingClientRect().height ?? 0;

      return Math.max(
        0,
        portfolioTitle.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          topMargin
      );
    };

    window.history.pushState(null, "", "#portfolio");
    smoothScrollTo(resolveTop, 680);
  };

  return (
    <section ref={heroRef} className="homeHero" aria-labelledby="homeHeroTitle">
      <h1 id="homeHeroTitle" className="homeHeroSrOnly">
        {pick(routesConfig.copy.home, "leadTitle")}
      </h1>

      <div className="homeHeroObjects" aria-hidden="true">
        {routesConfig.homeHero.items.map((item, index) => (
          <div
            key={item.key}
            className={`homeHeroFloat homeHeroFloat--${item.key}${
              item.hideOnMobile ? " homeHeroFloat--desktopOnly" : ""
            }`}
          >
            <div
              className="homeHeroMotion"
              data-parallax-depth={item.depth}
              data-parallax-x={item.shiftX}
              data-parallax-y={item.shiftY}
            >
              <div
                className="homeHeroMedia"
                style={{
                  "--hero-item-delay": `${140 + index * 75}ms`,
                  "--hero-item-mobile-delay": `${90 + (mobileHeroOrder.get(item.key) ?? 0) * 70}ms`
                }}
              >
                <Image
                  src={getImage(item.image)}
                  alt=""
                  fill
                  priority={item.priority}
                  loading={
                    item.priority
                      ? undefined
                      : item.hideOnMobile
                        ? "lazy"
                        : "eager"
                  }
                  fetchPriority={item.priority ? "high" : undefined}
                  sizes={item.sizes}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="homeHeroCenter">
        <Link
          href={localizedHref("/category/the-art-of-board", lang)}
          className="homeHeroMarkLink"
          aria-label={artOfBoard ? pick(artOfBoard, "title") : "The Art Of Board"}
        >
          <WorldOfBoard className="homeHeroMark" eager />
        </Link>
      </div>

      <a
        className="homeHeroScroll"
        href="#portfolio"
        onClick={handlePortfolioClick}
      >
        <span className="homeHeroScrollInner">
          <span>{pick(routesConfig.copy.home, "viewPortfolio")}</span>
          <ArrowDown
            className="homeHeroScrollIcon"
            size={17}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </span>
      </a>
    </section>
  );
}

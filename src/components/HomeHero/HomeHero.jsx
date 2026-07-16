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
import WorldOfBoard from "../WorldOfBoard/WorldOfBoard";
import "./HomeHero.css";

export default function HomeHero() {
  const { pick, lang } = useContext(I18nContext);
  const heroRef = useParallaxField();
  const artOfBoard = routesConfig.categories.find(
    (category) => category.slug === "the-art-of-board"
  );

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
                style={{ "--hero-item-delay": `${140 + index * 75}ms` }}
              >
                <Image
                  src={getImage(item.image)}
                  alt=""
                  fill
                  priority={item.priority}
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

      <a className="homeHeroScroll" href="#portfolio">
        <span>{pick(routesConfig.copy.home, "viewPortfolio")}</span>
        <ArrowDown
          className="homeHeroScrollIcon"
          size={17}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </a>
    </section>
  );
}

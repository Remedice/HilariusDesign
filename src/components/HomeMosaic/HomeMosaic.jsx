"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { revealCachedImage } from "../../utils/revealImage";
import "./HomeMosaic.css";

function RevealImg({ src, alt, sizes, className }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      loading="lazy"
      sizes={sizes}
      className={className}
      ref={revealCachedImage}
      data-reveal="fade"
      onLoad={(event) => window.__hdRevealImage?.(event.currentTarget)}
    />
  );
}

export default function HomeMosaic({ tiles }) {
  return (
    <div className="mosaic">
      {tiles.map((t, i) => {
        const Wrapper = t.to ? Link : "div";
        return (
          <Wrapper
            key={t.key}
            href={t.to}
            className={`mosaicTile ${t.size || ""} ${t.to ? "isLink" : ""}`}
            aria-label={t.alt || t.label}
          >
            <div className="mosaicMedia">
              {t.src ? (
                <RevealImg
                  src={t.src}
                  alt={t.alt || ""}
                  sizes={t.size === "s3" ? "(max-width: 860px) 100vw, 33vw" : "(max-width: 860px) 100vw, 25vw"}
                  className="revealImg"
                />
              ) : null}
              <div className="mosaicFallback" />
            </div>
            <div className="mosaicCaption">
              <div className="mosaicCaptionContent">
                <div className="mosaicCaptionHeading">
                  <div className="mosaicCaptionLabel">{t.label}</div>
                  <ArrowUpRight
                    className="mosaicCaptionIcon"
                    size={16}
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
                {t.sub ? <div className="mosaicCaptionSub">{t.sub}</div> : null}
              </div>
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}

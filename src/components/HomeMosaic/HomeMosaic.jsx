"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./HomeMosaic.css";

// Handles the case where the image loads before React attaches onLoad (SSR/cache).
function RevealImg({ src, alt, sizes, className, onReveal }) {
  const ref = useRef(null);
  const revealedRef = useRef(false);

  useEffect(() => {
    revealedRef.current = false;
  }, [src]);

  function revealOnce() {
    if (revealedRef.current) return;
    revealedRef.current = true;
    onReveal?.();
  }

  useEffect(() => {
    if (ref.current?.complete) revealOnce();
  });

  return (
    <Image
      ref={ref}
      src={src}
      alt={alt}
      fill
      loading="lazy"
      sizes={sizes}
      className={className}
      onLoad={revealOnce}
      onError={revealOnce}
    />
  );
}

export default function HomeMosaic({ tiles }) {
  const [loaded, setLoaded] = useState({});

  return (
    <div className="mosaic">
      {tiles.map((t, i) => {
        const Wrapper = t.to ? Link : "div";
        const isLoaded = !!loaded[t.key];

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
                  className={`revealImg ${isLoaded ? "isLoaded" : ""}`}
                  onReveal={() => setLoaded((p) => ({ ...p, [t.key]: true }))}
                />
              ) : null}
              <div className="mosaicFallback" />
            </div>
            <div className="mosaicCaption">
              <div className="mosaicCaptionLabel">{t.label}</div>
              {t.sub ? <div className="mosaicCaptionSub">{t.sub}</div> : null}
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}

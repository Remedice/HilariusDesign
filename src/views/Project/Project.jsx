"use client";

import { useContext, useEffect, useId, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { routesConfig } from "../../router/routesConfig";
import { getImageSize } from "../../router/images";
import { I18nContext } from "../../i18n/I18nProvider";
import { localizedHref } from "../../i18n/href";
import { revealCachedImage } from "../../utils/revealImage";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import "./Project.css";

function LogoSkeleton() {
  const uid = useId().replace(/:/g, "");
  const gId = `s${uid}`;

  return (
    <div className="imgSkeleton" aria-hidden="true">
      <svg viewBox="0 0 355.68 262.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id={gId}
            gradientUnits="userSpaceOnUse"
            x1="-355.68" y1="524.2"
            x2="0" y2="262.1"
          >
            <stop offset="0%" stopColor="rgba(0,0,0,0.08)" />
            <stop offset="42%" stopColor="rgba(0,0,0,0.08)" />
            <stop offset="50%" stopColor="rgba(0,0,0,0.22)" />
            <stop offset="58%" stopColor="rgba(0,0,0,0.08)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              values="0,0; 711.36,-524.2"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>
        <polyline
          points="131.92 144.29 65.41 144.29 65.41 234.87 26.3 234.87 26.3 27.23 65.41 27.23 65.41 111.19 131.72 111.19"
          fill={`url(#${gId})`}
        />
        <rect x="151.78" y="27.23" width="39.11" height="207.64" fill={`url(#${gId})`} />
        <path
          d="M210.76,60.33h8.18c44.83,0,70.12,27.68,70.12,70.72s-25.58,70.72-70.12,70.72h-8.18v33.1h6.67c66.82,0,111.95-39.42,111.95-104.12s-46.05-103.53-111.95-103.53h-6.67"
          fill={`url(#${gId})`}
        />
      </svg>
    </div>
  );
}

function ImgBox({ src, alt, priority = false }) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const { width, height } = getImageSize(src);

  useEffect(() => {
    setLoaded(false);
    if (imgRef.current?.complete) setLoaded(true);
  }, [src]);

  return (
    <div className="imgBox">
      <Image
        ref={(image) => {
          imgRef.current = image;
          revealCachedImage(image);
        }}
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 860px) 50vw, 30vw"
        priority={priority}
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? undefined : "lazy"}
        data-reveal={priority ? "cover" : "fade"}
        data-reveal-duration="620"
        onLoad={(event) => {
          window.__hdRevealImage?.(event.currentTarget);
          setLoaded(true);
        }}
        onError={() => setLoaded(false)}
      />
      {!loaded && <LogoSkeleton />}
    </div>
  );
}

const projectAltSuffix = {
  nl: "project van Hilarius Design in gerecycled karton",
  en: "project by Hilarius Design in recycled board",
  de: "Projekt von Hilarius Design aus recycelter Pappe",
  fr: "projet par Hilarius Design en carton recyclé",
  es: "proyecto de Hilarius Design en cartón reciclado"
};

function Collage({ images, title, lang }) {
  const count = images.length;
  if (count === 0) return null;
  const primaryAlt = [title, projectAltSuffix[lang] ?? projectAltSuffix.en].filter(Boolean).join(" - ");

  if (count === 1) {
    return (
      <div className="collage collage--1">
        <ImgBox src={images[0]} alt={primaryAlt} priority />
      </div>
    );
  }

  if (count === 2) {
    return (
      <div className="collage collage--2">
        {images.slice(0, 2).map((src, i) => (
          <ImgBox key={src} src={src} alt={i === 0 ? primaryAlt : ""} priority={i === 0} />
        ))}
      </div>
    );
  }

  if (count === 3) {
    return (
      <div className="collage collage--3">
        {images.slice(0, 3).map((src, i) => (
          <ImgBox key={src} src={src} alt={i === 0 ? primaryAlt : ""} priority={i === 0} />
        ))}
      </div>
    );
  }

  return (
    <div className="collage collage--4">
      {images.slice(0, 4).map((src, i) => (
        <ImgBox key={src} src={src} alt={i === 0 ? primaryAlt : ""} priority={i === 0} />
      ))}
    </div>
  );
}

export default function Project() {
  const { id } = useParams();
  const { pick, lang } = useContext(I18nContext);

  const project = useMemo(
    () => routesConfig.projects.find((p) => p.id === id),
    [id]
  );

  const category = useMemo(() => {
    if (!project) return null;
    return routesConfig.categories.find((c) => c.slug === project.category) ?? null;
  }, [project]);

  const siblings = useMemo(() => {
    if (!category) return [];
    return routesConfig.projects.filter((p) => p.category === category.slug);
  }, [category]);

  const nav = useMemo(() => {
    if (!project || !siblings.length) return { prev: null, next: null };
    const idx = siblings.findIndex((p) => p.id === project.id);
    return {
      prev: idx > 0 ? siblings[idx - 1] : null,
      next: idx >= 0 && idx < siblings.length - 1 ? siblings[idx + 1] : null
    };
  }, [project, siblings]);

  if (!project) {
    return (
      <section className="proj">
        <h1 className="projTitle">
          {pick(routesConfig.copy.common, "notFound")}
        </h1>
        <Link href={localizedHref("/", lang)} className="projBack">
          {pick(routesConfig.copy.common, "backHome")}
        </Link>
      </section>
    );
  }

  const images = project.images?.length
    ? project.images
    : [project.cover].filter(Boolean);

  const description = pick(project, "description");
  const body = pick(project, "body");

  return (
    <section className="proj">
      <div className="breadcrumb">
        <Link href={localizedHref("/", lang)} className="uLink crumbLink">
          <span className="uLinkLabel">
            {pick(routesConfig.copy.nav, "home")}
            <span className="uUnderline" />
          </span>
        </Link>
        <span className="sep">/</span>

        {category ? (
          <>
            <Link href={localizedHref(`/category/${category.slug}`, lang)} className="uLink crumbLink">
              <span className="uLinkLabel">
                {pick(category, "title")}
                <span className="uUnderline" />
              </span>
            </Link>
            <span className="sep">/</span>
          </>
        ) : null}

        <span className="crumbNow">{pick(project, "title")}</span>
      </div>

      <div className="projLayout">
        <Collage images={images} title={pick(project, "title")} lang={lang} />

        <aside className="projRight">
          <h1 className="projTitle">{pick(project, "title")}</h1>

          {description ? (
            <p className="projIntro">{description}</p>
          ) : null}

          {body ? <div className="projBody">{body}</div> : null}
        </aside>
      </div>

      <div className="pn">
        <div className="pnLeft">
          {nav.prev ? (
            <Link href={localizedHref(`/project/${nav.prev.id}`, lang)} className="pnLink" scroll={false}>
              <span className="pnIcon" aria-hidden="true">
                <ArrowLeft strokeWidth={1.8} />
              </span>
              <span className="pnText">
                {pick(routesConfig.copy.project, "prev")}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>

        <Link
          href={localizedHref(category ? `/category/${category.slug}` : "/", lang)}
          className="pnCenter"
          aria-label="Back to category"
        >
          <LayoutGrid strokeWidth={1.6} />
        </Link>

        <div className="pnRight">
          {nav.next ? (
            <Link href={localizedHref(`/project/${nav.next.id}`, lang)} className="pnLink right" scroll={false}>
              <span className="pnText">
                {pick(routesConfig.copy.project, "next")}
              </span>
              <span className="pnIcon" aria-hidden="true">
                <ArrowRight strokeWidth={1.8} />
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}

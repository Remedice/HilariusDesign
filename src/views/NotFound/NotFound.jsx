"use client";

import { useContext } from "react";
import Link from "next/link";
import { routesConfig } from "../../router/routesConfig";
import { I18nContext } from "../../i18n/I18nProvider";
import { localizedHref } from "../../i18n/href";
import "./NotFound.css";

export default function NotFound() {
  const { lang, pick } = useContext(I18nContext);

  return (
    <section className="notFound">
      <div className="notFoundInner">
        <p className="notFoundCode">404</p>
        <h1 className="notFoundTitle">{pick(routesConfig.copy.common, "notFound")}</h1>
        <Link href={localizedHref("/", lang)} className="notFoundCta">
          <span className="notFoundCtaArrow">←</span>
          <span>{pick(routesConfig.copy.common, "backHome")}</span>
        </Link>
      </div>
    </section>
  );
}

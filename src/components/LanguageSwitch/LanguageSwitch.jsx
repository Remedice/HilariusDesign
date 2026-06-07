"use client";

import { useContext, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { I18nContext } from "../../i18n/I18nProvider";
import { routesConfig } from "../../router/routesConfig";
import "./LanguageSwitch.css";

function swapLangInPath(pathname, nextLang, supported) {
  const parts = (pathname || "/").split("/").filter(Boolean);
  if (parts.length && supported.includes(parts[0])) {
    parts[0] = nextLang;
  } else {
    parts.unshift(nextLang);
  }
  return "/" + parts.join("/");
}

export default function LanguageSwitch({ compact = false }) {
  const { lang } = useContext(I18nContext);
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const supported = routesConfig.i18n.supported;

  const options = useMemo(
    () => [
      { key: "nl", label: "NL" },
      { key: "en", label: "EN" },
      { key: "de", label: "DE" },
      { key: "fr", label: "FR" },
      { key: "es", label: "ES" }
    ],
    []
  );

  const chevSize = compact ? 14 : 16;
  const currentLabel = lang.toUpperCase();

  function selectLang(key) {
    // The middleware sets the hd_lang cookie when the new locale path loads,
    // so a returning visitor to the bare domain gets this language.
    router.push(swapLangInPath(pathname, key, supported));
    setOpen(false);
  }

  return (
    <div className={`lang ${compact ? "compact" : ""}`}>
      <button
        className="langBtn"
        onClick={() => setOpen((v) => !v)}
        aria-label={`Taal ${currentLabel}`}
        aria-expanded={open ? "true" : "false"}
      >
        <span className="langBtnLabel">{currentLabel}</span>
        <ChevronDown
          className={`langChev ${open ? "open" : ""}`}
          size={chevSize}
          strokeWidth={1.8}
        />
      </button>

      <div className={`langMenu ${open ? "open" : ""}`} role="menu" aria-label="Taalmenu">
        {options.map((o) => (
          <button
            key={o.key}
            className={`langItem ${o.key === lang ? "active" : ""}`}
            onClick={() => selectLang(o.key)}
            role="menuitem"
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

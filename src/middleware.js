import { NextResponse } from "next/server";
import { isLocale, localeFromAcceptLanguage } from "./i18n/locales";

const COOKIE = "hd_lang";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

// Cookie first (returning visitor's choice), then Accept-Language, then English.
function detectLocale(req) {
  const fromCookie = req.cookies.get(COOKIE)?.value;
  if (fromCookie && isLocale(fromCookie)) return fromCookie;
  return localeFromAcceptLanguage(req.headers.get("accept-language"));
}

export function middleware(req) {
  const { pathname, search } = req.nextUrl;
  const firstSegment = pathname.split("/")[1];

  // Path already carries a valid locale: let it through, mirror the locale into
  // an x-lang request header so the root layout can set <html lang> server-side,
  // and refresh the cookie so the next bare-domain visit remembers this language.
  if (isLocale(firstSegment)) {
    const headers = new Headers(req.headers);
    headers.set("x-lang", firstSegment);
    const res = NextResponse.next({ request: { headers } });
    res.cookies.set(COOKIE, firstSegment, {
      path: "/",
      maxAge: COOKIE_MAX_AGE,
      sameSite: "lax"
    });
    return res;
  }

  // No locale prefix ("/", "/about", legacy URLs): redirect to the detected
  // locale. No trailing slash (matches the canonical URL style).
  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  const clean = pathname.replace(/\/+$/, ""); // "" for "/", "/about" for "/about/"
  url.pathname = clean === "" ? `/${locale}` : `/${locale}${clean}`;
  url.search = search;
  const res = NextResponse.redirect(url, 307);
  res.cookies.set(COOKIE, locale, {
    path: "/",
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax"
  });
  return res;
}

export const config = {
  // Skip Next internals, the API, and any path with a file extension (static
  // assets, sitemap.xml, robots.txt, favicons, media). Everything else is a
  // page route that must carry a locale prefix.
  matcher: ["/((?!_next/|api/|.*\\.).*)"]
};

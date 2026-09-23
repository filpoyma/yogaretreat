export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const SITE_NAME = "Йога-детокс ретрит «Возвращение к себе»";

export const SITE_TITLE =
  "Йога-детокс ретрит в Гоа — Возвращение к себе · 10–16 ноября 2026";

export const SITE_DESCRIPTION =
  "Йога-детокс ретрит «Возвращение к себе» — 10–16 ноября 2026, Северный Гоа. 7 дней йоги, цигун, детокс-питания и тишины в эко-отеле «Папа Джолли».";

export const OG_IMAGE = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Утренняя практика йоги в тропиках Северного Гоа",
} as const;

export const RETREAT_START_DATE = "2026-11-10";
export const RETREAT_END_DATE = "2026-11-16";
export const RETREAT_PRICE_USD = 1080;

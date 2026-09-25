export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const OG_IMAGE = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
} as const;

export const RETREAT_START_DATE = "2026-11-10";
export const RETREAT_END_DATE = "2026-11-16";
export const RETREAT_PRICE_USD = 1080;

export const LOCALES = ["ru", "en"] as const;

export type TLocale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: TLocale = "ru";

export function isLocale(value: string): value is TLocale {
  return (LOCALES as readonly string[]).includes(value);
}

export function localePath(locale: TLocale): "/" | "/en" {
  return locale === "en" ? "/en" : "/";
}

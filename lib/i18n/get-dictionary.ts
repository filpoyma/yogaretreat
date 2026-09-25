import type { TLocale } from "@/lib/i18n/locales";
import { en } from "@/lib/i18n/dictionaries/en";
import { ru } from "@/lib/i18n/dictionaries/ru";
import type { TDictionary } from "@/lib/i18n/dictionaries/ru";

const dictionaries: Record<TLocale, TDictionary> = { ru, en };

export function getDictionary(locale: TLocale): TDictionary {
  return dictionaries[locale];
}

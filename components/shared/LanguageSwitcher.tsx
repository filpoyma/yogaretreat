import Link from "next/link";
import type { TLocale } from "@/lib/i18n/locales";
import { localePath } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils";

interface ILanguageSwitcherProps {
  readonly locale: TLocale;
  readonly className?: string;
}

export function LanguageSwitcher({ locale, className }: ILanguageSwitcherProps) {
  return (
    <div
      className={cn("flex items-center gap-1 text-sm font-medium", className)}
      data-testid="language-switcher"
    >
      <Link
        href="/"
        hrefLang="ru"
        data-testid="language-switcher-ru"
        className={cn(
          "rounded-full px-2.5 py-1 transition-colors duration-300",
          locale === "ru"
            ? "bg-clay/15 text-clay"
            : "text-stone-warm hover:text-clay",
        )}
        aria-current={locale === "ru" ? "page" : undefined}
      >
        RU
      </Link>
      <span className="text-border-warm" aria-hidden>
        /
      </span>
      <Link
        href={localePath("en")}
        hrefLang="en"
        data-testid="language-switcher-en"
        className={cn(
          "rounded-full px-2.5 py-1 transition-colors duration-300",
          locale === "en"
            ? "bg-clay/15 text-clay"
            : "text-stone-warm hover:text-clay",
        )}
        aria-current={locale === "en" ? "page" : undefined}
      >
        EN
      </Link>
    </div>
  );
}

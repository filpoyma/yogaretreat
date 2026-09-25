"use client";

import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import type { TDictionary } from "@/lib/i18n/dictionaries/ru";
import type { TLocale } from "@/lib/i18n/locales";
import { scrollToId } from "@/lib/smooth-scroll";

interface INavProps {
  readonly locale: TLocale;
  readonly t: TDictionary["nav"];
}

export function Nav({ locale, t }: INavProps) {
  return (
    <header
      data-testid="site-nav"
      className="fixed inset-x-0 top-0 z-50 border-b border-bark/10 bg-sand/85 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          data-testid="nav-logo"
          onClick={() => scrollToId("#hero")}
          className="text-left leading-none"
        >
          <span className="font-heading italic text-xl text-bark">{t.logoTitle}</span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-warm">
            {t.logoSubtitle}
          </span>
        </button>
        <nav className="hidden items-center gap-7 lg:flex">
          {t.links.map((link) => (
            <button
              key={link.href}
              type="button"
              data-testid={link.testId}
              onClick={() => scrollToId(link.href)}
              className="text-sm font-medium text-stone-warm transition-colors duration-300 hover:text-clay"
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher locale={locale} className="hidden sm:flex" />
          <Button
            data-testid="nav-booking-button"
            onClick={() => scrollToId("#booking")}
            className="rounded-full bg-clay px-5 text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-clay/90"
          >
            {t.book}
          </Button>
        </div>
      </div>
    </header>
  );
}

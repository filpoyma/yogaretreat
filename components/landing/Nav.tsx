"use client";

import { Button } from "@/components/ui/button";
import { scrollToId } from "@/lib/smooth-scroll";
import type { INavLink } from "@/types/retreat";

const LINKS: readonly INavLink[] = [
  { label: "Программа", href: "#program", testId: "nav-link-program" },
  { label: "Расписание", href: "#schedule", testId: "nav-link-schedule" },
  { label: "Включено", href: "#included", testId: "nav-link-included" },
  { label: "Галерея", href: "#gallery", testId: "nav-link-gallery" },
  { label: "Вопросы", href: "#faq", testId: "nav-link-faq" },
];

export function Nav() {
  return (
    <header
      data-testid="site-nav"
      className="fixed inset-x-0 top-0 z-50 border-b border-bark/10 bg-sand/85 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          data-testid="nav-logo"
          onClick={() => scrollToId("#hero")}
          className="text-left leading-none"
        >
          <span className="font-heading italic text-xl text-bark">Папа Джолли</span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-warm">
            yoga detox · goa
          </span>
        </button>
        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
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
        <Button
          data-testid="nav-booking-button"
          onClick={() => scrollToId("#booking")}
          className="rounded-full bg-clay px-5 text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-clay/90"
        >
          Забронировать
        </Button>
      </div>
    </header>
  );
}

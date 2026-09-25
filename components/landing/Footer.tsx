"use client";

import { Reveal } from "@/components/shared/Reveal";
import { getOrganizerTelegramContact } from "@/lib/site-contact";
import type { TDictionary } from "@/lib/i18n/dictionaries/ru";
import { PAPA_JOLLY_GOOGLE_MAPS_HREF } from "@/lib/venue";
import { scrollToId } from "@/lib/smooth-scroll";

interface IFooterProps {
  readonly t: TDictionary["footer"];
}

export function Footer({ t }: IFooterProps) {
  const organizerTelegram = getOrganizerTelegramContact();
  const navLinkClass =
    "text-left text-sm text-jungle-mist transition-colors duration-300 hover:text-clay-light";

  return (
    <footer data-testid="site-footer" className="overflow-hidden bg-jungle-deep pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-10 border-b border-white/10 pb-14">
          <div>
            <div className="font-heading text-2xl italic text-sand">{t.logoTitle}</div>
            <a
              href={PAPA_JOLLY_GOOGLE_MAPS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-map-link"
              className="mt-2 inline-block text-sm text-clay-light transition-colors duration-300 hover:text-sand hover:underline underline-offset-2"
            >
              {t.mapLink}
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-jungle-mist">
              {t.tagline}
            </p>
          </div>
          <nav className="flex flex-col gap-3">
            <button
              type="button"
              data-testid="footer-link-program"
              onClick={() => scrollToId("#program")}
              className={navLinkClass}
            >
              {t.links.program}
            </button>
            <button
              type="button"
              data-testid="footer-link-schedule"
              onClick={() => scrollToId("#schedule")}
              className={navLinkClass}
            >
              {t.links.schedule}
            </button>
            <button
              type="button"
              data-testid="footer-link-booking"
              onClick={() => scrollToId("#booking")}
              className={navLinkClass}
            >
              {t.links.booking}
            </button>
            {organizerTelegram ? (
              <a
                href={organizerTelegram.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-link-contacts"
                className={navLinkClass}
              >
                {t.links.contacts}
              </a>
            ) : null}
          </nav>
        </div>
        <Reveal>
          <div
            className="select-none py-10 text-center font-heading italic leading-none text-sand/10"
            data-testid="footer-wordmark"
            style={{ fontSize: "clamp(2.6rem, 9vw, 9rem)" }}
          >
            {t.wordmark}
          </div>
        </Reveal>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pb-8 pt-6 text-xs text-jungle-mist/70">
          <span data-testid="footer-copyright">{t.copyright}</span>
          <span>{t.madeWith}</span>
        </div>
      </div>
    </footer>
  );
}

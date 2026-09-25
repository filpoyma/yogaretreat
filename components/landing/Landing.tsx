import { BookingSection } from "@/components/landing/Booking";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { Gallery } from "@/components/landing/Gallery";
import { Hero } from "@/components/landing/Hero";
import { Inclusions } from "@/components/landing/Inclusions";
import { Nav } from "@/components/landing/Nav";
import { Pillars } from "@/components/landing/Pillars";
import { Results } from "@/components/landing/Results";
import { Ribbon } from "@/components/landing/Ribbon";
import { Schedule } from "@/components/landing/Schedule";
import { RetreatJsonLd } from "@/components/shared/RetreatJsonLd";
import { SmoothScroll } from "@/components/shared/SmoothScroll";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { TLocale } from "@/lib/i18n/locales";

interface ILandingProps {
  readonly locale: TLocale;
}

export function Landing({ locale }: ILandingProps) {
  const dict = getDictionary(locale);

  return (
    <div className="overflow-x-clip bg-sand text-bark">
      <RetreatJsonLd locale={locale} dict={dict} />
      <SmoothScroll />
      <Nav locale={locale} t={dict.nav} />
      <main>
        <Hero t={dict.hero} />
        <Ribbon t={dict.ribbon} />
        <Pillars t={dict.pillars} />
        <Schedule t={dict.schedule} />
        <Inclusions t={dict.inclusions} />
        <Results t={dict.results} />
        <Gallery t={dict.gallery} />
        <BookingSection locale={locale} t={dict.booking} />
        <Faq t={dict.faq} />
      </main>
      <Footer t={dict.footer} />
    </div>
  );
}

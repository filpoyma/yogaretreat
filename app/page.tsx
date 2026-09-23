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

export default function Home() {
  return (
    <div className="overflow-x-clip bg-sand text-bark">
      <RetreatJsonLd />
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <Ribbon />
        <Pillars />
        <Schedule />
        <Inclusions />
        <Results />
        <Gallery />
        <BookingSection />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

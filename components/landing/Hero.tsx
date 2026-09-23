"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/assets";
import { scrollToId, subscribeToScroll } from "@/lib/smooth-scroll";

const LINES = [
  { text: "Йога-детокс ретрит", className: "" },
  { text: "Возвращение к себе", className: "italic text-clay-light" },
] as const;

const METRICS = [
  { label: "Длительность", value: "7 дней / 6 ночей" },
  { label: "Стоимость", value: "180 $ / сутки · all-inclusive" },
  { label: "Уровень", value: "От новичков до опытных" },
] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const update = () => {
      const section = sectionRef.current;
      const image = imageRef.current;
      const content = contentRef.current;
      const arrow = arrowRef.current;
      if (!section || !image || !content) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
      const fade = Math.min(progress / 0.55, 1);

      image.style.transform = `translate3d(0, ${progress * 18}%, 0) scale(${1 + progress * 0.06})`;
      content.style.opacity = String(1 - fade);
      content.style.transform = `translate3d(0, ${fade * 48}px, 0)`;
      content.style.pointerEvents = fade > 0.75 ? "none" : "auto";
      if (arrow) {
        arrow.style.opacity = String(1 - fade);
      }
    };

    update();
    return subscribeToScroll(update);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      data-testid="hero-section"
      className="noise relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <Image
        ref={imageRef}
        alt="Утренняя практика йоги и цигун в шале среди тропиков Гоа"
        className="absolute inset-x-0 top-[-8%] h-[116%] w-full object-cover will-change-transform"
        src={IMAGES.hero}
        width={1280}
        height={698}
        sizes="100vw"
        preload
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B140F]/70 via-[#1B140F]/40 to-[#1B140F]/90" />
      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-36 will-change-transform sm:px-6 lg:px-8"
      >
        <div
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-md"
          data-testid="hero-badge"
        >
          <MapPin className="h-3.5 w-3.5 text-clay-light" aria-hidden />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">
            10–16 ноября 2026 · Северный Гоа, Индия
          </span>
        </div>
        <h1 className="font-heading text-sand">
          {LINES.map((line) => (
            <span key={line.text} className="block overflow-hidden pb-1">
              <span
                className={`block tracking-tight leading-[0.98] text-[clamp(2.6rem,8.5vw,7rem)] ${line.className}`}
              >
                {line.text}
              </span>
            </span>
          ))}
        </h1>
        <p
          className="mt-6 max-w-xl text-base text-sand/80 sm:text-lg"
          data-testid="hero-subtitle"
        >
          7 дней глубокой перезагрузки тела и разума среди джунглей и океана:
          мягкое очищение, хатха-йога, цигун, детокс-питание и информационная
          тишина в эко-отеле «Папа Джолли».
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            size="lg"
            data-testid="hero-cta-book"
            onClick={() => scrollToId("#booking")}
            className="rounded-full bg-clay px-8 text-base text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-clay/90"
          >
            Забронировать место
          </Button>
          <Button
            size="lg"
            variant="outline"
            data-testid="hero-cta-program"
            onClick={() => scrollToId("#program")}
            className="rounded-full border-sand/40 bg-transparent px-8 text-base text-sand transition-transform duration-300 hover:-translate-y-0.5 hover:bg-sand/10 hover:text-sand"
          >
            Программа дня
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 border-t border-sand/20 pt-6 sm:grid-cols-3">
          {METRICS.map((metric) => (
            <div key={metric.label} data-testid={`hero-metric-${metric.label}`}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sand/50">
                {metric.label}
              </div>
              <div className="mt-1 font-heading text-lg text-sand">
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        ref={arrowRef}
        className="absolute bottom-6 right-6 z-10 hidden text-sand/60 lg:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" aria-hidden />
      </div>
    </section>
  );
}

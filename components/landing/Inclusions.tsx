import {
  BedDouble,
  BookOpen,
  Flame,
  Flower2,
  Hand,
  Plane,
  Salad,
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionKicker } from "@/components/shared/SectionKicker";
import type { TDictionary } from "@/lib/i18n/dictionaries/ru";

const ICONS = {
  bed: BedDouble,
  salad: Salad,
  flower: Flower2,
  book: BookOpen,
  hand: Hand,
  flame: Flame,
} as const;

interface IInclusionsProps {
  readonly t: TDictionary["inclusions"];
}

export function Inclusions({ t }: IInclusionsProps) {
  const [headingLead, headingItalic] = t.heading;

  return (
    <section id="included" className="scroll-mt-[65px] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionKicker index="03" label={t.kickerLabel} />
          <h2 className="mt-6 font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-bark">
            {headingLead}
            <br />
            <span className="italic text-clay">{headingItalic}</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delayMs={i * 60}>
                <article className="group h-full rounded-3xl border border-border-warm bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(30,51,38,0.3)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream transition-colors duration-500 group-hover:bg-jungle">
                    <Icon
                      className="h-5 w-5 text-clay transition-colors duration-500 group-hover:text-sand"
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl text-bark">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-warm">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal delayMs={120}>
          <div className="mt-8 flex items-start gap-4 rounded-3xl bg-linen p-6 sm:items-center">
            <Plane className="mt-0.5 h-5 w-5 shrink-0 text-clay sm:mt-0" aria-hidden />
            <p className="text-sm text-stone-warm sm:text-base">{t.flightsNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

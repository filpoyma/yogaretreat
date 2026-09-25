import { Reveal } from "@/components/shared/Reveal";
import { SectionKicker } from "@/components/shared/SectionKicker";
import type { TDictionary } from "@/lib/i18n/dictionaries/ru";

interface IPillarsProps {
  readonly t: TDictionary["pillars"];
}

export function Pillars({ t }: IPillarsProps) {
  const [headingLead, headingItalic] = t.heading;

  return (
    <section
      id="program"
      data-testid="program-section"
      className="scroll-mt-[65px] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionKicker index="01" label={t.kickerLabel} />
          <h2 className="mt-6 font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-bark">
            {headingLead}
            <br />
            <span className="italic text-clay">{headingItalic}</span>
          </h2>
        </Reveal>
        <Reveal delayMs={80} className="mt-6 max-w-2xl">
          <p className="text-base text-stone-warm sm:text-lg">{t.intro}</p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.items.map((pillar, i) => (
            <Reveal key={pillar.index} delayMs={i * 70}>
              <article
                data-testid={`pillar-card-${pillar.index}`}
                className="group h-full rounded-3xl border border-border-warm bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(166,75,42,0.35)]"
              >
                <div className="font-heading text-5xl italic text-clay/30 transition-colors duration-500 group-hover:text-clay">
                  {pillar.index}
                </div>
                <h3 className="mt-6 font-heading text-2xl text-bark">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-warm">
                  {pillar.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

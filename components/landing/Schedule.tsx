import { Reveal } from "@/components/shared/Reveal";
import { SectionKicker } from "@/components/shared/SectionKicker";
import type { TDictionary } from "@/lib/i18n/dictionaries/ru";

interface IScheduleProps {
  readonly t: TDictionary["schedule"];
}

export function Schedule({ t }: IScheduleProps) {
  const [headingLead, headingItalic] = t.heading;

  return (
    <section
      id="schedule"
      data-testid="schedule-section"
      className="scroll-mt-[65px] bg-cream py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:col-span-4">
          <Reveal>
            <SectionKicker index="02" label={t.kickerLabel} />
            <h2 className="mt-6 font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-bark">
              {headingLead}
              <br />
              <span className="italic text-clay">{headingItalic}</span>
            </h2>
          </Reveal>
          <Reveal delayMs={80} className="mt-6">
            <p className="text-base text-stone-warm">{t.intro}</p>
            <span
              data-slot="badge"
              data-testid="schedule-level-badge"
              className="mt-6 inline-flex rounded-full bg-jungle px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-sand"
            >
              {t.levelBadge}
            </span>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          {t.slots.map((slot, i) => (
            <Reveal key={slot.time} delayMs={i * 40}>
              <div
                data-testid={`schedule-slot-${i}`}
                className="group grid grid-cols-[96px_1fr] gap-4 border-t border-border-warm py-5 transition-colors duration-300 last:border-b hover:bg-sand/60 sm:grid-cols-[150px_1fr] sm:gap-8 sm:px-4"
              >
                <div className="pt-1 font-mono text-xs font-medium tracking-wide text-stone-warm transition-colors duration-300 group-hover:text-clay sm:text-sm">
                  {slot.time}
                </div>
                <div>
                  <h3 className="font-heading text-xl text-bark sm:text-2xl">
                    {slot.title}
                  </h3>
                  <p className="mt-1 text-sm text-stone-warm">{slot.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

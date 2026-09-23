import { Reveal } from "@/components/shared/Reveal";
import { SectionKicker } from "@/components/shared/SectionKicker";
import type { IScheduleSlot } from "@/types/retreat";

const SLOTS: readonly IScheduleSlot[] = [
  {
    time: "07:00 – 08:30",
    title: "Утренняя практика",
    description:
      "Утренний детокс-комплекс: крийи, пранаяма, динамическая хатха-йога и цигун.",
  },
  {
    time: "08:30 – 09:00",
    title: "Травяной чай / смузи",
    description: "Освежающий детокс-напиток после практики.",
  },
  {
    time: "09:30 – 10:30",
    title: "Лёгкий завтрак",
    description: "Растительный завтрак из местных сезонных продуктов.",
  },
  {
    time: "11:00 – 13:00",
    title: "Свободное время",
    description: "Прогулки на природе, арт-практики или лекции.",
  },
  {
    time: "13:30 – 14:30",
    title: "Обед",
    description: "Вегетарианские и растительные блюда.",
  },
  {
    time: "15:00 – 17:00",
    title: "Отдых и самоизучение",
    description: "Время для отдыха, дневных экскурсий или медитации.",
  },
  {
    time: "17:00 – 18:30",
    title: "Вечерняя практика",
    description: "МФР (миофасциальный релиз), йога-нидра, саунд-хилинг.",
  },
  {
    time: "19:00 – 20:00",
    title: "Лёгкий ужин",
    description: "Тёплый растительный ужин для спокойного сна.",
  },
  {
    time: "20:30 – 21:30",
    title: "Вечерний шеринг",
    description: "Чаепитие и практики самонаблюдения в кругу.",
  },
];

export function Schedule() {
  return (
    <section
      id="schedule"
      data-testid="schedule-section"
      className="scroll-mt-[65px] bg-cream py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:col-span-4">
          <Reveal>
            <SectionKicker index="02" label="Расписание" />
            <h2 className="mt-6 font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-bark">
              Ритм
              <br />
              <span className="italic text-clay">одного дня</span>
            </h2>
          </Reveal>
          <Reveal delayMs={80} className="mt-6">
            <p className="text-base text-stone-warm">
              Каждый день выстроен как волна: подъём энергии утром и мягкое
              растворение вечером. Расписание может слегка меняться — по погоде
              и состоянию группы.
            </p>
            <span
              data-slot="badge"
              data-testid="schedule-level-badge"
              className="mt-6 inline-flex rounded-full bg-jungle px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-sand"
            >
              Любой уровень подготовки
            </span>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          {SLOTS.map((slot, i) => (
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
                  <p className="mt-1 text-sm text-stone-warm">
                    {slot.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

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
import type { IInclusion } from "@/types/retreat";

const ITEMS: readonly IInclusion[] = [
  {
    title: "Проживание",
    description:
      "Экологичные номера эко-отеля «Папа Джолли» в тени тропического сада Северного Гоа.",
    icon: "bed",
  },
  {
    title: "Детокс-питание",
    description:
      "Трёхразовое вегетарианское/веганское меню, свежевыжатые соки и травяные чаи.",
    icon: "salad",
  },
  {
    title: "Практики",
    description:
      "Ежедневные занятия йогой и цигун, медитации и дыхательные техники — пранаямы.",
    icon: "flower",
  },
  {
    title: "Образовательный блок",
    description:
      "Личная консультация и лекции о детоксикации и поддержании ресурса после ретрита.",
    icon: "book",
  },
  {
    title: "Восстанавливающий массаж",
    description:
      "Один сеанс массажа для глубокого расслабления и возвращения чувствительности тела.",
    icon: "hand",
  },
  {
    title: "Баня / сауна",
    description:
      "Посещение бани или сауны — тепло, завершающее мягкое очищение организма.",
    icon: "flame",
  },
];

const ICONS = {
  bed: BedDouble,
  salad: Salad,
  flower: Flower2,
  book: BookOpen,
  hand: Hand,
  flame: Flame,
} as const;

export function Inclusions() {
  return (
    <section id="included" className="scroll-mt-[65px] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionKicker index="03" label="All-inclusive" />
          <h2 className="mt-6 font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-bark">
            Что входит
            <br />
            <span className="italic text-clay">в программу</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delayMs={i * 60}>
                <article className="group h-full rounded-3xl border border-border-warm bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(30,51,38,0.3)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream transition-colors duration-500 group-hover:bg-jungle">
                    <Icon className="h-5 w-5 text-clay transition-colors duration-500 group-hover:text-sand" aria-hidden />
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
            <p className="text-sm text-stone-warm sm:text-base">
              Авиабилеты до Гоа оплачиваются отдельно (за свой счёт). Мы подскажем
              удобные рейсы и поможем с организацией трансфера до отеля.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

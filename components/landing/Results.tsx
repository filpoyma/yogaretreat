import { Compass, HeartHandshake, Moon, Sparkles } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionKicker } from "@/components/shared/SectionKicker";
import type { IResult } from "@/types/retreat";

const RESULTS: readonly IResult[] = [
  {
    title: "Лёгкость в теле",
    description:
      "Ощущение лёгкости и свободы движения, ровный тон кожи и ясный взгляд.",
    icon: "sparkles",
  },
  {
    title: "Глубокий сон",
    description:
      "Заметное улучшение качества сна — засыпать становится легко, утро — добрым.",
    icon: "moon",
  },
  {
    title: "Спокойствие",
    description:
      "Снижение уровня тревожности и внутреннего шума, устойчивое ощущение опоры.",
    icon: "heart",
  },
  {
    title: "Чёткий план домой",
    description:
      "Персональный план поддержания здорового образа жизни и стабильной психики в городе.",
    icon: "compass",
  },
];

const ICONS = {
  sparkles: Sparkles,
  moon: Moon,
  heart: HeartHandshake,
  compass: Compass,
} as const;

export function Results() {
  return (
    <section className="bg-jungle py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionKicker index="04" label="Ожидаемый результат" tone="dark" />
          <h2 className="mt-6 font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-sand">
            С чем вы
            <br />
            <span className="italic text-clay-light">уедете домой</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RESULTS.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delayMs={i * 70}>
                <article className="group h-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-clay-light/40 hover:bg-white/10">
                  <Icon className="h-6 w-6 text-clay-light" aria-hidden />
                  <h3 className="mt-6 font-heading text-2xl text-sand">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-jungle-mist">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

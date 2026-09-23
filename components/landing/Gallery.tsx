import Image from "next/image";
import { IMAGES } from "@/lib/assets";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/Reveal";
import { SectionKicker } from "@/components/shared/SectionKicker";
import type { IGalleryItem } from "@/types/retreat";

function CaptionBody({
  index,
  title,
  description,
  tone,
}: {
  readonly index: string;
  readonly title: string;
  readonly description: string;
  readonly tone: "page" | "overlay";
}) {
  const isOverlay = tone === "overlay";
  const Title = isOverlay ? "p" : "h3";
  return (
    <>
      <span
        className={cn(
          "font-heading text-lg italic",
          isOverlay ? "text-clay-light" : "text-clay",
        )}
      >
        {index}
      </span>
      <div>
        <Title
          className={cn(
            "font-heading text-xl",
            isOverlay ? "text-sand" : "text-bark",
          )}
        >
          {title}
        </Title>
        <p
          className={cn(
            "mt-1 max-w-md text-sm",
            isOverlay ? "text-sand/80" : "text-stone-warm",
          )}
        >
          {description}
        </p>
      </div>
    </>
  );
}

const ITEMS: readonly Omit<IGalleryItem, "src">[] = [
  {
    alt: "Утренние практики",
    title: "Утренние практики",
    description:
      "Йога, цигун и медитации — мягкое пробуждение тела под шум пальм и первый свет.",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    alt: "Ходьба тай-чи",
    title: "Ходьба тай-чи",
    description:
      "Плавное, медленное движение из практик цигун — динамическая медитация для заземления и снятия стресса.",
    span: "md:col-span-5",
    aspect: "aspect-[16/10] md:aspect-auto md:h-full",
  },
  {
    alt: "Нейрографика",
    title: "Нейрографика",
    description:
      "Творческий метод рисования по специальным правилам: снижает стресс, помогает пережить эмоции и найти решения внутренних вопросов.",
    span: "md:col-span-5",
    aspect: "aspect-[4/5] md:aspect-auto md:h-full",
  },
  {
    alt: "Путешествие в джунгли",
    title: "Путешествие в джунгли",
    description:
      "Контакт с первозданной природой Гоа — тишина, зелень и ощущение настоящего момента.",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    alt: "Направленная медитация (guided meditation)",
    title: "Guided meditation",
    description:
      "Направленная медитация: вы следуете за голосом ведущего, который направляет ваши мысли, дыхание и внимание.",
    span: "md:col-span-12",
    aspect: "aspect-[16/10] md:aspect-[21/9]",
  },
  {
    alt: "Личная коуч-сессия",
    title: "Личная коуч-сессия",
    description:
      "Индивидуальная встреча с ведущим: ваш запрос, цели и бережная обратная связь один на один — с видом на океан.",
    span: "md:col-span-5",
    aspect: "aspect-[16/10] md:aspect-auto md:h-full",
  },
  {
    alt: "Консультация доктора Аюрведы",
    title: "Консультация доктора Аюрведы",
    description:
      "Диагностика и персональные рекомендации по питанию и образу жизни от доктора древней науки о здоровье. По желанию.",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    alt: "Киртан",
    title: "Киртан",
    description:
      "Пространство, где мы вместе поём мантры, отпускаем напряжение и настраиваемся на гармонию. Живой звук, медитативная атмосфера, единение с собой и другими — время остановиться и просто побыть.",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    alt: "Семинары и лекции",
    title: "Семинары и лекции",
    description:
      "Практическая мудрость для современной жизни: как сохранять внутреннюю опору, справляться со стрессом и превращать знания в реальные изменения — уже сегодня.",
    span: "md:col-span-5",
    aspect: "aspect-[16/10] md:aspect-auto md:h-full",
  },
];

function imageSizes(span: string): string {
  if (span.includes("col-span-12")) {
    return "(min-width: 1280px) 1216px, 100vw";
  }
  if (span.includes("col-span-7")) {
    return "(min-width: 1280px) 700px, (min-width: 768px) 58vw, 100vw";
  }
  return "(min-width: 1280px) 500px, (min-width: 768px) 42vw, 100vw";
}

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-[65px] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionKicker index="05" label="Атмосфера" />
          <h2 className="mt-6 font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-bark">
            Девять мгновений
            <br />
            <span className="italic text-clay">нашего путешествия</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 md:grid-cols-12">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 40} className={item.span}>
              <figure className="group h-full">
                <div
                  className={cn(
                    "relative overflow-hidden rounded-[2rem]",
                    item.aspect,
                  )}
                >
                  <Image
                    alt={item.alt}
                    fill
                    sizes={imageSizes(item.span)}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    src={IMAGES.gallery[i]}
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 hidden translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 md:block"
                  >
                    <div className="flex gap-4 bg-gradient-to-t from-[#1B140F] via-[#1B140F]/85 to-transparent px-6 pb-6 pt-16">
                      <CaptionBody
                        index={String(i + 1).padStart(2, "0")}
                        title={item.title}
                        description={item.description}
                        tone="overlay"
                      />
                    </div>
                  </div>
                </div>
                <figcaption className="mt-4 flex gap-4 px-1 md:sr-only">
                  <CaptionBody
                    index={String(i + 1).padStart(2, "0")}
                    title={item.title}
                    description={item.description}
                    tone="page"
                  />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

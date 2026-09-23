"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/Reveal";
import { SectionKicker } from "@/components/shared/SectionKicker";
import type { IFaqItem } from "@/types/retreat";

const ITEMS: readonly IFaqItem[] = [
  {
    question: "Подходит ли ретрит новичкам?",
    answer:
      "Да. Программа построена мягко и экологично: инструкторы предлагают модификации для любого уровня — от первого занятия в жизни до многолетней практики.",
  },
  {
    question: "Как добраться до эко-отеля «Папа Джолли»?",
    answer:
      "Нужно прилететь в аэропорт Гоа (Даболим GOI или Мопа GOX). Билеты приобретаются самостоятельно, а мы поможем подобрать рейс и организуем трансфер до отеля.",
  },
  {
    question: "Нужна ли виза в Индию?",
    answer:
      "Да, оформляется электронная туристическая виза (e-Visa) — обычно это занимает 3–4 дня. После бронирования мы пришлём пошаговую инструкцию.",
  },
  {
    question: "Какое питание предусмотрено?",
    answer:
      "Трёхразовое вегетарианское/веганское детокс-меню из свежих местных продуктов, свежевыжатые соки и травяные чаи. Учтём ваши пищевые особенности — укажите их в заявке.",
  },
  {
    question: "Что взять с собой?",
    answer:
      "Лёгкую одежду из натуральных тканей для практик, купальник, головной убор, солнцезащитный крем и открытое сердце. Коврики и весь инвентарь уже ждут вас в шале.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" data-testid="faq-section" className="scroll-mt-[65px] py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionKicker index="07" label="Вопросы и ответы" />
          <h2 className="mt-6 font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-bark">
            Спрашивали?
            <br />
            <span className="italic text-clay">Отвечаем</span>
          </h2>
        </Reveal>
        <div className="mt-14 space-y-4">
          {ITEMS.map((item, i) => {
            const expanded = open === i;
            return (
              <Reveal key={item.question} delayMs={i * 50}>
                <div
                  data-testid={`faq-item-${i}`}
                  className={cn(
                    "overflow-hidden rounded-3xl border transition-colors duration-300 bg-white",
                    expanded ? "border-clay/40" : "border-border-warm",
                  )}
                >
                  <button
                    type="button"
                    data-testid={`faq-trigger-${i}`}
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
                  >
                    <span className="font-heading text-lg text-bark sm:text-xl">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-[color,background-color,transform] duration-300 ease-out",
                        expanded
                          ? "rotate-45 bg-clay text-white"
                          : "bg-cream text-clay",
                      )}
                    >
                      <Plus className="h-4 w-4" aria-hidden />
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p
                        data-testid={`faq-answer-${i}`}
                        className={cn(
                          "px-6 pb-6 text-sm leading-relaxed text-stone-warm transition-opacity duration-500 ease-out sm:px-8 sm:text-base",
                          expanded ? "opacity-100" : "opacity-0",
                        )}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

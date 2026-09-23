import { Sparkle } from "lucide-react";

const ITEMS = [
  "Мягкий детокс организма",
  "Хатха-йога",
  "Цигун и тай-чи",
  "Нейрографика",
  "Информационный детокс",
  "Sound healing",
  "Эко-отель «Папа Джолли»",
] as const;

function Track() {
  return (
    <>
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-8 whitespace-nowrap">
          <span className="font-heading text-lg italic tracking-wide text-sand/90">
            {item}
          </span>
          <Sparkle className="h-3.5 w-3.5 shrink-0 text-clay-light" aria-hidden />
        </span>
      ))}
    </>
  );
}

export function Ribbon() {
  return (
    <div
      data-testid="values-marquee"
      className="overflow-hidden border-y border-jungle-deep bg-jungle py-5"
    >
      <div className="animate-marquee flex w-max items-center gap-8">
        <Track />
        <Track />
      </div>
    </div>
  );
}

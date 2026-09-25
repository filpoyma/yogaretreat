import { Sparkle } from "lucide-react";
import type { TDictionary } from "@/lib/i18n/dictionaries/ru";

interface IRibbonProps {
  readonly t: TDictionary["ribbon"];
}

function Track({ items }: { readonly items: readonly string[] }) {
  return (
    <>
      {items.map((item) => (
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

export function Ribbon({ t }: IRibbonProps) {
  return (
    <div
      data-testid="values-marquee"
      className="overflow-hidden border-y border-jungle-deep bg-jungle py-5"
    >
      <div className="animate-marquee flex w-max items-center gap-8">
        <Track items={t.items} />
        <Track items={t.items} />
      </div>
    </div>
  );
}

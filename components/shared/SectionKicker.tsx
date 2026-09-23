import { cn } from "@/lib/utils";

interface ISectionKickerProps {
  readonly index: string;
  readonly label: string;
  readonly tone?: "light" | "dark";
}

export function SectionKicker({
  index,
  label,
  tone = "light",
}: ISectionKickerProps) {
  const isDark = tone === "dark";
  return (
    <div className="flex items-center gap-4">
      <span
        className={cn(
          "font-heading italic text-lg",
          isDark ? "text-clay-light" : "text-clay",
        )}
      >
        {index}
      </span>
      <span
        className={cn(
          "text-xs font-semibold tracking-[0.22em] uppercase",
          isDark ? "text-jungle-mist" : "text-stone-warm",
        )}
      >
        {label}
      </span>
      <span
        className={cn("h-px flex-1", isDark ? "bg-white/15" : "bg-border-warm")}
      />
    </div>
  );
}

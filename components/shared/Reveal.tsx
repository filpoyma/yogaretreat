"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IRevealProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly delayMs?: number;
}

export function Reveal({ children, className, delayMs = 0 }: IRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(28px)",
        transition: `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}

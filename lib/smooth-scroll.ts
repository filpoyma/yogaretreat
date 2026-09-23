"use client";

import Lenis from "lenis";

let lenis: Lenis | null = null;

type TScrollHandler = (scroll: number) => void;
const scrollListeners = new Set<TScrollHandler>();

function emitScroll(scroll: number): void {
  scrollListeners.forEach((listener) => listener(scroll));
}

export function initSmoothScroll(): () => void {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
  });

  const onLenisScroll = ({ scroll }: { scroll: number }) => {
    emitScroll(scroll);
  };
  lenis.on("scroll", onLenisScroll);

  let frame = 0;
  const raf = (time: number) => {
    lenis?.raf(time);
    frame = window.requestAnimationFrame(raf);
  };
  frame = window.requestAnimationFrame(raf);

  return () => {
    window.cancelAnimationFrame(frame);
    lenis?.off("scroll", onLenisScroll);
    lenis?.destroy();
    lenis = null;
  };
}

export function subscribeToScroll(handler: TScrollHandler): () => void {
  scrollListeners.add(handler);
  handler(lenis?.scroll ?? (typeof window === "undefined" ? 0 : window.scrollY));
  return () => {
    scrollListeners.delete(handler);
  };
}

function navScrollOffset(hash: string, el: HTMLElement): number {
  if (hash === "#hero") {
    return 0;
  }
  const nav = document.querySelector("[data-testid='site-nav']");
  const navHeight =
    nav instanceof HTMLElement ? nav.getBoundingClientRect().height : 0;
  const scrollMargin = Number.parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  return -navHeight + scrollMargin;
}

export function scrollToId(hash: string): void {
  const el = document.querySelector(hash);
  if (!(el instanceof HTMLElement)) {
    return;
  }
  const offset = navScrollOffset(hash, el);
  if (lenis) {
    lenis.scrollTo(el, { offset });
    return;
  }
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

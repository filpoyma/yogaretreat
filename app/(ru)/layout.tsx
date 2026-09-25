import type { ReactNode } from "react";
import type { Viewport } from "next";
import { RootDocument } from "@/components/shared/RootDocument";
import { buildMetadata } from "@/lib/i18n/metadata";

export const metadata = buildMetadata("ru");

export const viewport: Viewport = {
  themeColor: "#FAF6F0",
};

export default function RuLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="ru">{children}</RootDocument>;
}

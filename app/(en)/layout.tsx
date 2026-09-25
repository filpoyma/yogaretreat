import type { ReactNode } from "react";
import type { Viewport } from "next";
import { RootDocument } from "@/components/shared/RootDocument";
import { buildMetadata } from "@/lib/i18n/metadata";

export const metadata = buildMetadata("en");

export const viewport: Viewport = {
  themeColor: "#FAF6F0",
};

export default function EnLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <RootDocument locale="en">{children}</RootDocument>;
}

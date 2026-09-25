import type { ReactNode } from "react";
import "@fontsource-variable/dm-sans/wght.css";
import "@fontsource-variable/playfair-display/wght.css";
import "@fontsource-variable/playfair-display/wght-italic.css";
import "@/app/globals.css";
import type { TLocale } from "@/lib/i18n/locales";

interface IRootDocumentProps {
  readonly locale: TLocale;
  readonly children: ReactNode;
}

export function RootDocument({ locale, children }: IRootDocumentProps) {
  return (
    <html lang={locale} className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-sand text-bark">{children}</body>
    </html>
  );
}

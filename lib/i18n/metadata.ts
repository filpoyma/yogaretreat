import type { Metadata } from "next";
import type { TLocale } from "@/lib/i18n/locales";
import { localePath } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { OG_IMAGE, SITE_URL } from "@/lib/site";

export function buildMetadata(locale: TLocale): Metadata {
  const dict = getDictionary(locale);
  const canonicalPath = localePath(locale);
  const { meta } = dict;

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        ru: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: meta.openGraphLocale,
      url: canonicalPath,
      siteName: meta.siteName,
      title: meta.title,
      description: meta.description,
      images: [{ ...OG_IMAGE, alt: meta.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE.url],
    },
    robots: { index: true, follow: true },
    icons: {
      icon: [
        { url: "/seo/favicon.svg", type: "image/svg+xml" },
        { url: "/seo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: "/seo/apple-touch-icon.png",
    },
  };
}

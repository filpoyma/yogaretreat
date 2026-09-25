import {
  OG_IMAGE,
  RETREAT_END_DATE,
  RETREAT_PRICE_USD,
  RETREAT_START_DATE,
  SITE_URL,
} from "@/lib/site";
import { localePath } from "@/lib/i18n/locales";
import type { TLocale } from "@/lib/i18n/locales";
import type { TDictionary } from "@/lib/i18n/dictionaries/ru";
import { PAPA_JOLLY_VENUE } from "@/lib/venue";

interface IRetreatJsonLdProps {
  readonly locale: TLocale;
  readonly dict: TDictionary;
}

export function RetreatJsonLd({ locale, dict }: IRetreatJsonLdProps) {
  const pageUrl = `${SITE_URL}${localePath(locale)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: dict.meta.siteName,
    description: dict.meta.description,
    startDate: RETREAT_START_DATE,
    endDate: RETREAT_END_DATE,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    inLanguage: locale,
    image: [`${SITE_URL}${OG_IMAGE.url}`],
    url: pageUrl,
    location: {
      "@type": "Place",
      name: dict.venue.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: PAPA_JOLLY_VENUE.streetAddress,
        addressLocality: PAPA_JOLLY_VENUE.addressLocality,
        addressRegion: PAPA_JOLLY_VENUE.addressRegion,
        postalCode: PAPA_JOLLY_VENUE.postalCode,
        addressCountry: PAPA_JOLLY_VENUE.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: PAPA_JOLLY_VENUE.latitude,
        longitude: PAPA_JOLLY_VENUE.longitude,
      },
    },
    offers: {
      "@type": "Offer",
      price: RETREAT_PRICE_USD,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${pageUrl}#booking`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

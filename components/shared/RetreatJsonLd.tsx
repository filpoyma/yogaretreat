import {
  OG_IMAGE,
  RETREAT_END_DATE,
  RETREAT_PRICE_USD,
  RETREAT_START_DATE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import { PAPA_JOLLY_VENUE } from "@/lib/venue";

export function RetreatJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    startDate: RETREAT_START_DATE,
    endDate: RETREAT_END_DATE,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    inLanguage: "ru",
    image: [`${SITE_URL}${OG_IMAGE.url}`],
    url: SITE_URL,
    location: {
      "@type": "Place",
      name: PAPA_JOLLY_VENUE.name,
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
      url: `${SITE_URL}/#booking`,
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

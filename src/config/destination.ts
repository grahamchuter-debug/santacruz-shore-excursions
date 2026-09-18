/**
 * World 2.0 Destination Configuration — Santa Cruz Shore Excursions
 *
 * Domain is the single source of truth for canonicals, sitemap, OG, JSON-LD and Worker CORS.
 * Do not hard-code the hostname elsewhere.
 */

import type { DestinationCurrencyCode } from "@/lib/commerce/currency";

export type DestinationRegion =
  | "europe"
  | "caribbean"
  | "alaska"
  | "british-isles"
  | "other";

/**
 * CENTRAL — public contact is info@wowatour.com only (default until forwarding works).
 * LOCAL — display hello@ / bookings@ / privacy@ on the destination domain.
 */
export type ContactMode = "central" | "local";

export type DestinationConfig = {
  slug: string;
  name: string;
  destination: string;
  descriptor: string;
  strapline: string;
  domain: string;
  url: string;
  description: string;
  locale: string;
  region: DestinationRegion;
  currency: DestinationCurrencyCode;
  bookingRefPrefix: string;
  pagesProject: string;
  paymentsWorkerName: string;
  d1DatabaseName: string;
  /**
   * Public contact presentation. Keep `central` until destination email
   * forwarding (hello/bookings/privacy) is configured, then switch to `local`.
   */
  contactMode: ContactMode;
  /** Destination-local addresses — used only when contactMode is `local`. */
  contact: {
    hello: string;
    bookings: string;
    privacy: string;
  };
  legal: {
    tradingName: string;
    legalCompanyName: string;
    companyNumber: string;
    registeredJurisdiction: string;
    registeredOfficeLines: string[];
    registeredOfficeFormatted: string;
  };
  port: {
    scheduleSlug: string;
    meetingPointLabel: string;
    country: string;
  };
  seo: {
    defaultKeywords: string[];
  };
  nav: readonly { href: string; label: string }[];
  experienceCategories: readonly string[];
};

export const destinationConfig = {
  slug: "santacruz",
  name: "Santa Cruz Shore Excursions",
  destination: "Santa Cruz",
  descriptor: "Shore Excursions",
  strapline: "The Gateway to Tenerife",
  domain: "santacruzshoreexcursions.com",
  url: "https://santacruzshoreexcursions.com",
  description:
    "Independent Santa Cruz shore excursions and honest cruise-port guidance — Mount Teide, La Laguna, Anaga and Tenerife beyond the harbour.",
  locale: "en_GB",
  region: "europe",
  currency: "EUR",
  bookingRefPrefix: "SC",
  pagesProject: "santacruz-shore-excursions",
  paymentsWorkerName: "santacruz-payments",
  d1DatabaseName: "santacruz-bookings",
  contactMode: "central",
  contact: {
    hello: "hello@santacruzshoreexcursions.com",
    bookings: "bookings@santacruzshoreexcursions.com",
    privacy: "privacy@santacruzshoreexcursions.com",
  },
  legal: {
    tradingName: "Santa Cruz Shore Excursions",
    legalCompanyName: "Wow A Tour Ltd",
    companyNumber: "11426960",
    registeredJurisdiction: "England and Wales",
    registeredOfficeLines: [
      "Kintyre House",
      "70 High Street",
      "Fareham",
      "Hampshire",
      "United Kingdom",
      "PO16 7BB",
    ],
    registeredOfficeFormatted:
      "Kintyre House, 70 High Street, Fareham, Hampshire, United Kingdom, PO16 7BB",
  },
  port: {
    scheduleSlug: "santacruz",
    meetingPointLabel: "Santa Cruz Cruise Port",
    country: "Spain",
  },
  seo: {
    defaultKeywords: [
      "Santa Cruz Shore Excursions",
      "Santa Cruz Tenerife Cruise Excursions",
      "Santa Cruz Cruise Port Guide",
      "Mount Teide Shore Excursion",
      "Tenerife Cruise Excursions",
      "Canary Islands Shore Excursions",
      "La Laguna from Santa Cruz",
      "Walking From Santa Cruz Cruise Port",
    ],
  },
  nav: [
    { href: "/compare", label: "Compare" },
    { href: "/shore-excursions", label: "Excursions" },
    { href: "/guides", label: "Guides" },
    { href: "/wow-collection", label: "Wow Collection" },
    { href: "/cruise-planner", label: "Planner" },
    { href: "/cruise-port-guide", label: "Port Guide" },
  ],
  experienceCategories: [
    "Volcanic Landscapes",
    "Walk It Yourself",
    "History",
    "Photography",
    "Food",
    "Families",
    "Editor's Choice",
  ],
} as const satisfies DestinationConfig;

export type AppDestinationConfig = typeof destinationConfig;

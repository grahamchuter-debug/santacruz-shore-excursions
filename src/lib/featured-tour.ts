/**
 * Featured-tour helpers — Tenerife Total Experience flagship used for homepage cards / schema.
 */
import { getBookableProduct } from "@/data/bookable-products";

const flagship = getBookableProduct("tenerife-total-experience");

export const featuredTour = flagship
  ? {
      slug: flagship.slug,
      path: flagship.path,
      bookingPath: flagship.bookingPath,
      cardName: flagship.name,
      fullName: flagship.experienceName,
    }
  : {
      slug: "tenerife-total-experience",
      path: "/shore-excursions/tenerife-total-experience",
      bookingPath: "/book/tenerife-total-experience",
      cardName: "Tenerife Total Experience",
      fullName: "Tenerife Total Experience",
    };

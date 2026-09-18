import type { FAQ } from "./types";

export const SIGNATURE_EXPERIENCE_PATH = "/signature-riviera-experience";

export interface SignatureBenefit {
  emoji: string;
  title: string;
  description: string;
}

export const signatureTenerifeExperience = {
  slug: "signature-riviera-experience",
  title: "Signature Tenerife Volcanic Discovery",
  seoTitle: "Signature Tenerife Volcanic Discovery — Future Private Day",
  metaDescription:
    "Preview a future small-group Tenerife day — maximum eight guests, Mount Teide landscapes and flexible volcanic discovery. Not currently bookable.",
  tagline:
    "A future small-group journey through Tenerife’s volcanic landscapes — designed around your ship, not a generic island day tour.",
  overview:
    "Signature Tenerife Volcanic Discovery is a product concept in preparation. The proposed experience would take no more than eight guests from Santa Cruz toward Mount Teide’s volcanic highlands and a carefully paced island highlight — with optional La Laguna time, a local lunch and enough flexibility to respond to the group, weather and port timings. It does not currently exist as a bookable excursion.",
  comingSoon: true,
  benefits: [
    {
      emoji: "👥",
      title: "Maximum 8 guests",
      description: "A proposed small-group format intended to avoid coach-tour delays and support personal attention.",
    },
    {
      emoji: "🌋",
      title: "Volcanic Tenerife focus",
      description: "Teide National Park landscapes and Canarian character at the heart of the concept.",
    },
    {
      emoji: "📸",
      title: "Photography stops",
      description: "Time for caldera views and Atlantic light rather than images through a coach window.",
    },
    {
      emoji: "🍽️",
      title: "Local lunch",
      description: "A relaxed Canarian lunch proposed as part of the experience, subject to final partner arrangements.",
    },
    {
      emoji: "🧭",
      title: "Flexible itinerary",
      description: "Room to adjust for weather, altitude conditions and the interests of a small group.",
    },
    {
      emoji: "🚢",
      title: "Ship-first timing",
      description: "Planned backwards from all-aboard with a conservative Santa Cruz return buffer.",
    },
  ] as SignatureBenefit[],
  faqs: [
    {
      question: "Can I book Signature Tenerife Volcanic Discovery now?",
      answer:
        "No. It is a future concept in preparation and is not bookable. Explore current Santa Cruz shore excursions or enquire for updates.",
    },
    {
      question: "How is this different from Editor's Choice?",
      answer:
        "Editor’s Choice is our current recommended introduction — Tenerife Total Experience. Signature is a future small-group flagship concept with a stricter guest limit and more flexible pacing.",
    },
  ] as FAQ[],
};

export function getSignatureEditorialRecommendation() {
  return {
    title: signatureTenerifeExperience.title,
    description: signatureTenerifeExperience.tagline,
    href: SIGNATURE_EXPERIENCE_PATH,
  };
}

/** @deprecated Compatibility alias for shared components */
export const signatureRivieraExperience = signatureTenerifeExperience;
/** Tallinn-style alias used by updated callouts */
export const signatureTallinnExperience = signatureTenerifeExperience;

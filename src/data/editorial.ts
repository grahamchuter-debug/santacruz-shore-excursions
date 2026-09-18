import type { EditorialCategory } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";
import { EXPLORE_INDEPENDENTLY_PATH } from "./explore-independently";

/**
 * Shared Editorial Promise — destination may override copy in this module.
 * Tone: editorial trust, never a sales pitch. Editor's Choice badge stays separate.
 */
export const editorialPromise = {
  eyebrow: "Our editorial promise",
  title: "We'll always recommend the experience we'd choose ourselves",
  lead: "We'll always recommend the experience we'd choose ourselves.",
  points: [
    "Sometimes that's one of our carefully selected Editor's Choice excursions.",
    "Sometimes it's a free self-guided experience.",
  ],
  closing: "Our goal is to help you enjoy the best possible day ashore.",
} as const;

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  { id: "editors-choice", label: "Editor's Choice", shortLabel: "Editor's Choice", description: "Our strongest overall choice for a well-timed Santa Cruz cruise day." },
  { id: "best-historic", label: "Best Historic Experience", shortLabel: "Historic", description: "Santa Cruz harbour heritage and UNESCO La Laguna." },
  { id: "best-independent", label: "Best Independent Experience", shortLabel: "Walk It Yourself", description: "A realistic self-guided Santa Cruz day within easy reach of the ship — when independence is genuinely best." },
  { id: "best-coastal", label: "Best Beyond the City", shortLabel: "Beyond", description: "Mount Teide, Anaga and Tenerife when hours ashore allow." },
  { id: "best-view", label: "Best Views", shortLabel: "Views", description: "Teide caldera, Auditorio waterfront and Anaga ridges." },
  { id: "best-got", label: "Signature Experience", shortLabel: "Signature", description: "Our future Tenerife small-group flagship, currently in preparation." },
  { id: "best-families", label: "Best for Families", shortLabel: "Families", description: "Scenic island days and manageable city walks with sensible pacing." },
  { id: "best-photography", label: "Best Photography", shortLabel: "Photography", description: "Volcanic landscapes, Atlantic light and city silhouettes." },
  { id: "best-food", label: "Best Food & Wine", shortLabel: "Food & Wine", description: "Markets, Canarian kitchens and café culture." },
  { id: "best-luxury", label: "Best Private Tour", shortLabel: "Private", description: "Dedicated transport and flexible pacing for your own party." },
  { id: "hidden-gem", label: "Hidden Gem", shortLabel: "Hidden Gem", description: "Quieter Anaga paths and local stops beyond the busiest photo points." },
  { id: "best-value", label: "Best Value", shortLabel: "Best Value", description: "A rewarding port day without unnecessary transfers or expense." },
  { id: "best-short-port", label: "Best Short Port Call", shortLabel: "Short Port", description: "Santa Cruz highlights when usable hours are limited." },
];

export interface EditorsCollectionItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  signature?: boolean;
  comingSoon?: boolean;
}

export const editorsCollectionItems: EditorsCollectionItem[] = [
  {
    id: "editors-choice",
    emoji: "⭐",
    label: "Editor's Choice",
    description: "Tenerife Total Experience — Mount Teide plus island highlights for first-time cruise visitors.",
    href: "/shore-excursions/tenerife-total-experience",
    cta: "View our top pick",
  },
  {
    id: "first-time",
    emoji: "⛵",
    label: "Best First-Time Tour",
    description: "Tenerife Total Experience for first-time visitors who want Teide, La Laguna and Anaga.",
    href: "/shore-excursions/tenerife-total-experience",
    cta: "Discover Tenerife",
  },
  {
    id: "historic",
    emoji: "🏛️",
    label: "Best Historic Day",
    description: "Best of Tenerife — UNESCO La Laguna, La Esperanza forest and the Orotava Valley.",
    href: "/shore-excursions/best-of-tenerife",
    cta: "Explore La Laguna",
  },
  {
    id: "food-wine",
    emoji: "🍽️",
    label: "Best Food Experience",
    description: "Mercado de Nuestra Señora de África and Canarian cafés on an independent Santa Cruz loop.",
    href: "/guides/food-guide",
    cta: "Taste Tenerife",
  },
  {
    id: "private",
    emoji: "🌋",
    label: "Best Beyond the City",
    description: "Mount Teide or round-island days when your port call supports the road time.",
    href: "/compare/city-or-teide",
    cta: "Compare city vs Teide",
  },
  {
    id: "photography",
    emoji: "📸",
    label: "Best Photography",
    description: "Teide caldera light, Auditorio waterfront and Anaga ridges.",
    href: "/guides/best-viewpoints",
    cta: "Find the views",
  },
  {
    id: "families",
    emoji: "👨‍👩‍👧",
    label: "Best for Families",
    description: "Best of Tenerife keeps scenic stops and a gentler rhythm for mixed-age parties.",
    href: "/shore-excursions/best-of-tenerife",
    cta: "See family-friendly days",
  },
  {
    id: "independent",
    emoji: "🚶",
    label: "Walk It Yourself",
    description: "Santa Cruz Old Town & Waterfront — plazas, market and cafés with a generous ship buffer.",
    href: EXPLORE_INDEPENDENTLY_PATH,
    cta: "Open the walking guide",
  },
  {
    id: "signature-experience",
    emoji: "✨",
    label: "Signature Tenerife Volcanic Discovery",
    description: "A future maximum-eight-guest Tenerife day, currently in preparation and not bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
    signature: true,
    comingSoon: true,
  },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}

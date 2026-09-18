/**
 * Central cruise-positioning + Your Day Ashore experience categories.
 * Reusable World 2.0 pattern — destination copy lives here; component stays generic.
 */
export const cruisePositioning = {
  enabled: true,
  eyebrow: "Designed for Cruise Passengers",
  message: "Helping cruise passengers make every hour ashore count.",
  variantBMessage: "Everything here is built around your time in port.",
  activeVariant: "A" as "A" | "B",
  showDayAshoreSection: true,
} as const;

export function getCruiseTrustMessage(): string {
  if (cruisePositioning.activeVariant === "B") {
    return cruisePositioning.variantBMessage;
  }
  return cruisePositioning.message;
}

export interface DayAshoreItem {
  id: string;
  title: string;
  body: string;
  href?: string;
  icon: "clock" | "route" | "walk" | "sunrise" | "viewpoint" | "food" | "family" | "luxury";
}

export const dayAshoreIntro =
  "Where will your day in Santa Cruz take you? Stay in the city, climb toward Mount Teide, or choose the island adventure that fits your hours ashore — then build everything around your ship’s schedule.";

export const dayAshoreItems: DayAshoreItem[] = [
  {
    id: "volcanic-landscapes",
    title: "Volcanic Landscapes",
    body: "Mount Teide, Las Cañadas and Tenerife’s dramatic volcanic highlands beyond the harbour.",
    href: "/shore-excursions/tenerife-total-experience",
    icon: "sunrise",
  },
  {
    id: "walk-it-yourself",
    title: "Walk It Yourself",
    body: "Santa Cruz old town, waterfront and markets — a relaxed independent day close to the ship.",
    href: "/guides/explore-independently",
    icon: "walk",
  },
  {
    id: "history",
    title: "History",
    body: "Santa Cruz harbour heritage and UNESCO La Laguna’s colonial streets.",
    href: "/guides/la-laguna-guide",
    icon: "route",
  },
  {
    id: "photography",
    title: "Photography",
    body: "Auditorio silhouettes, Atlantic light, Anaga ridges and Teide caldera views.",
    href: "/guides/best-viewpoints",
    icon: "viewpoint",
  },
  {
    id: "food",
    title: "Food",
    body: "Mercado de Nuestra Señora de África, Canarian cafés and island flavours.",
    href: "/guides/food-guide",
    icon: "food",
  },
  {
    id: "families",
    title: "Families",
    body: "Manageable city walks or scenic island days paced for mixed-age parties.",
    href: "/shore-excursions/best-of-tenerife",
    icon: "family",
  },
  {
    id: "editors-choice",
    title: "Editor's Choice",
    body: "Tenerife Total Experience — Mount Teide plus island highlights for first-time cruise visitors.",
    href: "/shore-excursions/tenerife-total-experience",
    icon: "luxury",
  },
];

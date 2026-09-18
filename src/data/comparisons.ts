import type { Comparison } from "./types";

export const comparisons: Comparison[] = [
  {
    slug: "tour-or-independent",
    title: "Tour or Independent?",
    seoTitle: "Santa Cruz Tour or Independent? Honest Cruise Advice",
    metaDescription:
      "Should you book a Santa Cruz shore excursion or explore independently? Honest comparison for Tenerife cruise passengers.",
    kind: "versus",
    optionA: "Independent",
    optionB: "Guided tour",
    summary:
      "Santa Cruz is enjoyable independently for a relaxed city day. A guided tour wins for Mount Teide, La Laguna depth, Anaga hiking and round-island geography within limited hours.",
    verdict:
      "Choose independence when the city is your priority and you enjoy self-paced walking. Choose a tour when you want Tenerife beyond the harbour — especially on a first visit.",
    overview: [
      "Many guests walk from the passenger terminal into Plaza de España, the Auditorio waterfront and the market without an organised excursion.",
      "Island excursions add Teide, La Laguna and Anaga when your call supports the road time.",
      "Beyond-city days almost always need organised transport to protect return timing.",
    ],
    comparisonTable: [
      { category: "Best for", optionA: "Flexible Santa Cruz wandering", optionB: "Teide, La Laguna or island reach" },
      { category: "Cost", optionA: "Lower", optionB: "Higher" },
      { category: "Walking", optionA: "Self-paced city pavements", optionB: "Guided scenic or hiking pace" },
      { category: "Return timing", optionA: "Your responsibility", optionB: "Cruise-aware operator planning" },
      { category: "Beyond the city", optionA: "Harder without transport", optionB: "Practical with organised routing" },
    ],
    faqs: [
      {
        question: "Can I explore Santa Cruz without an excursion?",
        answer:
          "Yes. Independent city days are common and often excellent — especially on a return visit.",
      },
      {
        question: "When is a tour clearly better?",
        answer:
          "When you want Mount Teide, structured island highlights, hiking support, or La Laguna / Anaga within limited hours — particularly on a first Tenerife call.",
      },
    ],
    relatedSlugs: ["first-time-tenerife-day", "best-shore-excursions", "city-or-teide"],
    imageKey: "compare",
  },
  {
    slug: "city-or-teide",
    title: "Santa Cruz or Mount Teide?",
    seoTitle: "Santa Cruz City or Mount Teide on a Cruise Day?",
    metaDescription:
      "Compare a Santa Cruz city day with Mount Teide National Park for cruise passengers — timing, atmosphere and which to prioritise.",
    kind: "versus",
    optionA: "Santa Cruz city",
    optionB: "Mount Teide",
    summary:
      "Santa Cruz offers a relaxed harbour-city day beside the ship. Mount Teide delivers Tenerife’s defining volcanic landscape — at the cost of significant road time.",
    verdict:
      "First-time visitors should usually prioritise Teide or a Teide-inclusive island day. Choose Santa Cruz when you want a calmer return visit, shorter call, or independent café pacing.",
    overview: [
      "Santa Cruz is walkable from many berths; Teide needs organised road time of roughly 1–1.5 hours each way.",
      "Trying both deeply on a short call creates unnecessary stress.",
    ],
    comparisonTable: [
      { category: "Headline", optionA: "Harbour city & Canarian local life", optionB: "Spain’s highest peak & caldera" },
      { category: "From port", optionA: "Often walkable", optionB: "Significant road transfer" },
      { category: "Atmosphere", optionA: "Urban, Atlantic, café-led", optionB: "Volcanic, high-altitude, scenic" },
      { category: "Best for", optionA: "Return visits & short calls", optionB: "First-time Tenerife" },
    ],
    faqs: [
      {
        question: "Can I do both?",
        answer:
          "Rarely with depth on one call. Choose Teide (or Tenerife Total Experience) for a first visit; save a pure city wander for another sailing.",
      },
    ],
    relatedSlugs: ["tour-or-independent", "first-time-tenerife-day"],
    imageKey: "nature",
  },
  {
    slug: "best-shore-excursions",
    title: "Best Shore Excursions",
    seoTitle: "Best Santa Cruz Shore Excursions for Cruise Passengers",
    metaDescription:
      "Best Santa Cruz shore excursions compared: Tenerife Total Experience, Best of Tenerife, Anaga hiking, north coast secrets and round-island days.",
    kind: "guide",
    summary:
      "Start with Tenerife Total Experience for first-timers who want Teide. Choose Best of Tenerife for north-coast culture, hiking formats for trails, and the Round Island Trip only on long calls.",
    verdict:
      "Editor’s Choice remains the clearest first-time pick. Match everything else to hours ashore and appetite for hiking versus scenic coach time.",
    overview: [
      "City independence stays close to the ship and protects timing.",
      "Island days need honest clock management.",
    ],
    guideItems: [
      {
        name: "Tenerife Total Experience",
        slug: "tenerife-total-experience",
        href: "/shore-excursions/tenerife-total-experience",
        reason: "Best introduction — Teide plus La Laguna and Anaga.",
        topExcursion: "Tenerife Total Experience",
        returnConfidence: "High with operator buffer",
        walkingDifficulty: "Easy",
      },
      {
        name: "Best of Tenerife",
        slug: "best-of-tenerife",
        href: "/shore-excursions/best-of-tenerife",
        reason: "La Laguna, La Esperanza forest and Orotava Valley.",
        topExcursion: "Best of Tenerife",
        returnConfidence: "High",
        walkingDifficulty: "Easy–moderate",
      },
      {
        name: "Round Island Trip",
        slug: "round-island-trip",
        href: "/shore-excursions/round-island-trip",
        reason: "Breadth across Tenerife’s coasts on a long call.",
        topExcursion: "Round Island Trip",
        returnConfidence: "Good with generous buffer",
        walkingDifficulty: "Moderate",
      },
    ],
    faqs: [
      {
        question: "What is Editor's Choice?",
        answer:
          "Tenerife Total Experience — selected for first-time cruise visitors who want Mount Teide plus island highlights.",
      },
    ],
    relatedSlugs: ["first-time-tenerife-day", "tour-or-independent"],
    imageKey: "historic",
  },
  {
    slug: "first-time-tenerife-day",
    title: "First-Time Tenerife Day",
    seoTitle: "First Time in Tenerife on a Cruise — How to Spend the Day",
    metaDescription:
      "First-time Tenerife cruise day plan: Mount Teide, La Laguna, Santa Cruz independent options, and what to prioritise from Santa Cruz port.",
    kind: "guide",
    summary:
      "First-timers should usually leave Santa Cruz for Mount Teide and island highlights. Keep a pure city day for return visits or shorter calls.",
    verdict:
      "Do not try to see all of Tenerife. See Teide and one cultural counterpoint well — then decide if a future call deserves hiking or a round-island breadth day.",
    overview: [
      "Prioritise Tenerife Total Experience when hours allow.",
      "Use La Laguna as the cultural counterpart to volcanic scenery.",
      "Choose Walk It Yourself when you deliberately want a relaxed harbour-city day.",
    ],
    guideItems: [
      {
        name: "Mount Teide",
        slug: "mount-teide",
        href: "/guides/mount-teide-guide",
        reason: "The essential first Tenerife landscape.",
        topExcursion: "Tenerife Total Experience",
        returnConfidence: "High with organised transport",
        walkingDifficulty: "Easy scenic stops",
      },
      {
        name: "La Laguna",
        slug: "la-laguna",
        href: "/guides/la-laguna-guide",
        reason: "UNESCO colonial streets inland from Santa Cruz.",
        topExcursion: "Best of Tenerife",
        returnConfidence: "High",
        walkingDifficulty: "Easy town walking",
      },
      {
        name: "Independent Santa Cruz",
        slug: "explore-independently",
        href: "/guides/explore-independently",
        reason: "DIY city route when you prefer flexibility.",
        topExcursion: "Walk It Yourself",
        returnConfidence: "Your discipline",
        walkingDifficulty: "Easy",
      },
    ],
    faqs: [
      {
        question: "Should first-timers book a tour?",
        answer:
          "Usually yes if you want Teide and island highlights. Explore independently if you prefer a calm Santa Cruz café day and already know the island — or deliberately want a softer pace.",
      },
    ],
    relatedSlugs: ["best-shore-excursions", "tour-or-independent", "city-or-teide"],
    imageKey: "historic",
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getComparisonDisplayTitle(c: Comparison): string {
  if (c.kind === "versus" && c.optionA && c.optionB) {
    return `${c.optionA} or ${c.optionB}?`;
  }
  return c.title;
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}

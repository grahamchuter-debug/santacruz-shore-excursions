import type { ExcursionPage } from "./types";

const PORT_LOGISTICS =
  "Cruise ships berth at Santa Cruz de Tenerife’s passenger terminal on the city’s waterfront edge. Santa Cruz itself is compact and walkable for an independent city day — Plaza de España, the Auditorio waterfront and Mercado de Nuestra Señora de África sit within a realistic stroll for many guests. Mount Teide, La Laguna, Anaga and round-island routes require organised road time; confirm meeting instructions and plan from your ship’s all-aboard time, not merely the published departure. Aim to be back at the terminal 60–90 minutes early; longer island days need the larger end of that buffer.";

const SEG_SUPPLIER = {
  kind: "shore-excursions-group" as const,
  name: "Shore Excursions Group",
  notes: "Partner network — confirm availability for your sailing",
};

const RETURN_GUARANTEE =
  "Return to ship guarantee: itineraries are planned around your Santa Cruz cruise call so you are back at the terminal with time before all-aboard. If an operational delay on our side causes you to miss the ship, we work with the local provider under the published return-to-ship assurance for that booking.";

export const excursions: ExcursionPage[] = [
  {
    slug: "tenerife-total-experience",
    title: "Tenerife Total Experience",
    seoTitle: "Tenerife Total Experience | Editor's Choice Shore Excursion",
    metaDescription:
      "Editor's Choice Tenerife shore excursion from Santa Cruz — La Laguna, Mount Teide National Park and Anaga Rural Park for cruise passengers.",
    category: "Editor's Choice",
    tagline:
      "The best SEG introduction to Mount Teide and Tenerife’s highlights for first-time cruise visitors.",
    duration: "Approximately 8 hours",
    pace: "Relaxed",
    bestFor:
      "First-time cruise visitors who want Mount Teide plus Tenerife’s cultural and forest highlights in one carefully timed day",
    overview:
      "Tenerife Total Experience is our Editor’s Choice because it visits Mount Teide — Spain’s highest peak — alongside La Laguna’s colonial architecture and Anaga Rural Park’s laurisilva Biosphere Reserve. It is the clearest full-day introduction for cruise passengers who want the island, not only the harbour city.",
    body: [
      "We chose this tour because first-time visitors to Tenerife usually want more than Santa Cruz alone. Mount Teide National Park is the island’s defining landscape; pairing it with La Laguna and Anaga gives cultural depth and forest contrast without inventing a fake “everything” checklist.",
      "The day is paced as Easy / scenic-cultural-historical in a small-group format — rewarding when your ship offers a long call and you are happy to spend most of it on the island.",
      "Guests seeking a purely relaxed city stroll, or who already know Teide well, may prefer Walk It Yourself in Santa Cruz or a shorter hiking focus instead.",
      "Expect altitude weather changes near Teide, coach time between zones, and seasonal crowds at popular viewpoints. Exact sequencing flexes with group pace and ship timing.",
    ],
    highlights: [
      "La Laguna colonial architecture",
      "Teide National Park — Spain’s highest peak",
      "Anaga Rural Park laurisilva Biosphere Reserve",
      "Scenic, cultural and historical pacing",
      "Small-group format planned around cruise timing",
    ],
    itinerary: [
      {
        title: "Meet in Santa Cruz",
        detail:
          "Join your guide near the cruise terminal and confirm timing against your all-aboard.",
      },
      {
        title: "La Laguna",
        detail:
          "Explore UNESCO colonial streets and architecture that shaped Tenerife’s cultural heart.",
      },
      {
        title: "Teide National Park",
        detail:
          "Travel into Las Cañadas and the volcanic highlands around Spain’s highest peak.",
      },
      {
        title: "Anaga Rural Park",
        detail:
          "Continue toward Anaga’s laurisilva forest landscapes within the Biosphere Reserve.",
      },
      {
        title: "Return to Santa Cruz",
        detail:
          "Drive back to the cruise port with a deliberate buffer before all-aboard.",
      },
    ],
    included: [
      "Port meeting and return planning in Santa Cruz",
      "Air-conditioned transport",
      "English-speaking guide commentary",
      "La Laguna, Teide National Park and Anaga orientation as itinerary allows",
      "Return planned around the ship’s all-aboard",
    ],
    notIncluded: [
      "Cable car, museum or attraction entrance fees unless stated on your voucher",
      "Lunch and personal purchases",
      "Gratuities",
      "Hotel or airport transfers",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Bring a warm layer — Teide altitudes are cooler than the Santa Cruz waterfront",
      "Wear comfortable shoes for short scenic walks at stops",
      "If you want a pure city café day, Walk It Yourself in Santa Cruz is the calmer choice",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Why is this Editor's Choice?",
        answer:
          "It is the best SEG tour visiting Mount Teide plus Tenerife highlights for first-time cruise visitors — La Laguna architecture, Teide National Park and Anaga’s laurisilva forest in one cruise-timed day.",
      },
      {
        question: "Do I need this tour, or can I stay in Santa Cruz?",
        answer:
          "You can stay in Santa Cruz independently and have an enjoyable city day. Choose this tour when you want the island’s volcanic and cultural highlights on a first visit.",
      },
      {
        question: "How demanding is the pace?",
        answer:
          "Listed as Easy overall, with scenic, cultural and historical stops. Expect coach time and short walks rather than a strenuous hike.",
      },
    ],
    relatedExcursionSlugs: [
      "best-of-tenerife",
      "round-island-trip",
      "hiking-montes-de-anaga",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Easy — short walks at scenic and cultural stops",
    cruiseSuitability: "Best with a long full day of usable time ashore",
    editorChoice: true,
    whyWeChose: {
      lead: "The best SEG tour visiting Mount Teide plus Tenerife highlights for first-time cruise visitors.",
      whyRecommended:
        "First-timers often leave Santa Cruz wondering what they missed. This day delivers Teide National Park, La Laguna and Anaga — the island moments that define Tenerife — while still protecting cruise return timing.",
      whoItSuits:
        "Curious first-time cruise visitors, scenic travellers and guests who want volcanic landscapes with cultural depth rather than a pure city stroll.",
      whatMakesItSpecial:
        "You see Spain’s highest peak, UNESCO colonial streets and laurisilva forest in one coherent narrative — not three disconnected stop-offs.",
      cruiseFit:
        "Built as an approximately eight-hour small-group day from Santa Cruz, which makes protecting a return buffer more realistic than inventing your own island circuit.",
      theExperience:
        "You understand why Santa Cruz is the gateway to Tenerife — and you return with the island’s volcanic and cultural story, not only a harbour photograph.",
    },
    supplier: {
      ...SEG_SUPPLIER,
      productId: "EUTFTOTAL",
    },
  },
  {
    slug: "best-of-tenerife",
    title: "Best of Tenerife",
    seoTitle: "Best of Tenerife Shore Excursion from Santa Cruz",
    metaDescription:
      "Best of Tenerife cruise excursion from Santa Cruz — UNESCO La Laguna, La Esperanza forest and the Orotava Valley in about seven hours.",
    category: "Scenic / Cultural",
    tagline:
      "La Laguna, La Esperanza forest and the Orotava Valley — a classic northern Tenerife day.",
    duration: "Approximately 7 hours",
    pace: "Relaxed",
    bestFor:
      "Cruise guests who want Tenerife’s north-coast culture and forest scenery without the fullest round-island commitment",
    overview:
      "Best of Tenerife concentrates on UNESCO La Laguna, the cool green of La Esperanza forest and views across the Orotava Valley — a rewarding scenic and cultural day from Santa Cruz.",
    body: [
      "This itinerary suits guests who want island depth beyond the harbour without attempting every coastline in one call.",
      "La Laguna’s colonial grid is Tenerife’s cultural counterpoint to Santa Cruz’s port energy; La Esperanza and the Orotava Valley add the green northern character that surprises first-time visitors.",
      "If Mount Teide is your non-negotiable priority, compare Tenerife Total Experience instead.",
    ],
    highlights: [
      "UNESCO La Laguna colonial streets",
      "La Esperanza forest scenery",
      "Orotava Valley viewpoints",
      "Northern Tenerife character",
      "Cruise-timed return to Santa Cruz",
    ],
    itinerary: [
      {
        title: "Depart Santa Cruz",
        detail: "Meet near the cruise terminal and travel inland toward La Laguna.",
      },
      {
        title: "La Laguna",
        detail: "Walk colonial streets and absorb UNESCO heritage architecture.",
      },
      {
        title: "La Esperanza forest",
        detail: "Continue into cooler forest landscapes typical of Tenerife’s north.",
      },
      {
        title: "Orotava Valley",
        detail: "Pause for valley viewpoints before returning toward Santa Cruz.",
      },
    ],
    included: [
      "Port pickup and drop-off planning in Santa Cruz",
      "Air-conditioned transport",
      "English-speaking guide commentary",
      "Return planned around the ship’s all-aboard",
    ],
    notIncluded: [
      "Entrance fees unless stated on your voucher",
      "Lunch and personal purchases",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Comfortable walking shoes for La Laguna streets",
      "A light layer helps in forest shade",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Does this include Mount Teide?",
        answer:
          "No. Best of Tenerife focuses on La Laguna, La Esperanza forest and the Orotava Valley. For Teide, choose Tenerife Total Experience.",
      },
    ],
    relatedExcursionSlugs: [
      "tenerife-total-experience",
      "secrets-of-north-tenerife",
      "round-island-trip",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Easy to moderate — town walking and viewpoint stops",
    cruiseSuitability: "Works well on a solid full day in port",
    editorChoice: false,
    supplier: {
      ...SEG_SUPPLIER,
      productId: "EUTFBESTOF",
    },
  },
  {
    slug: "secrets-of-north-tenerife",
    title: "Secrets of North Tenerife",
    seoTitle: "Secrets of North Tenerife Hiking Shore Excursion",
    metaDescription:
      "Secrets of North Tenerife hiking excursion from Santa Cruz — Rambla de Castro, Charco de la Laja, Sibora Beach and Masca in about six hours.",
    category: "Hiking / Scenic",
    tagline:
      "A six-hour hiking day through north Tenerife’s coastal paths, pools and dramatic Masca scenery.",
    duration: "Approximately 6 hours",
    pace: "Active",
    bestFor:
      "Active cruise passengers who want coastal hiking and north Tenerife scenery rather than a coach-led city circuit",
    overview:
      "Secrets of North Tenerife is a hiking-led day visiting Rambla de Castro, Charco de la Laja, Sibora Beach and Masca — for guests who prefer trails and Atlantic drama over a purely cultural itinerary.",
    body: [
      "Choose this when you want to move under your own power and see quieter north-coast character.",
      "Trail conditions and exact sequencing depend on weather and group pace; expect uneven surfaces and sustained walking.",
      "Guests seeking Easy scenic coach stops should prefer Tenerife Total Experience or Best of Tenerife instead.",
    ],
    highlights: [
      "Rambla de Castro coastal paths",
      "Charco de la Laja natural pools",
      "Sibora Beach scenery",
      "Masca landscape drama",
      "Active hiking pacing",
    ],
    itinerary: [
      {
        title: "Meet and transfer north",
        detail: "Leave Santa Cruz for Tenerife’s northern coastal hiking zones.",
      },
      {
        title: "Rambla de Castro & Charco de la Laja",
        detail: "Walk coastal paths and visit natural pool scenery as conditions allow.",
      },
      {
        title: "Sibora Beach & Masca",
        detail: "Continue for beach and Masca viewpoints before the cruise return.",
      },
    ],
    included: [
      "Port meeting and return planning",
      "Transport between trailheads and viewpoints",
      "Guided hiking orientation",
      "Return planned around all-aboard",
    ],
    notIncluded: [
      "Meals and drinks",
      "Gratuities",
      "Personal hiking equipment beyond normal footwear",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear proper walking shoes with grip",
      "Carry water and sun protection",
      "Not ideal for limited mobility",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "How hard is the hiking?",
        answer:
          "Expect an active six-hour day with coastal paths and uneven ground. Choose a scenic Easy excursion if you prefer minimal trail walking.",
      },
    ],
    relatedExcursionSlugs: [
      "hiking-montes-de-anaga",
      "best-of-tenerife",
      "tenerife-total-experience",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Active — sustained hiking on coastal and rural paths",
    cruiseSuitability: "Best for active guests on a solid full day",
    editorChoice: false,
    supplier: {
      ...SEG_SUPPLIER,
      productId: "EUTFHIKESECRT",
    },
  },
  {
    slug: "hiking-montes-de-anaga",
    title: "Hiking Montes de Anaga",
    seoTitle: "Hiking Montes de Anaga Shore Excursion from Santa Cruz",
    metaDescription:
      "Hiking Montes de Anaga from Santa Cruz cruise port — a 2.5-hour moderate forest hike in Anaga Rural Park’s laurisilva landscapes.",
    category: "Hiking / Nature",
    tagline:
      "A focused 2.5-hour moderate hike into Anaga’s forested Montes — Tenerife’s ancient green ridge.",
    duration: "Approximately 2.5 hours",
    pace: "Moderate",
    bestFor:
      "Cruise guests who want a shorter nature hike in Anaga forest without a full-day island circuit",
    overview:
      "Hiking Montes de Anaga offers a compact moderate forest walk in Anaga Rural Park — ideal when you want laurisilva atmosphere and still keep free time in Santa Cruz afterwards.",
    body: [
      "Anaga’s ridges feel a world away from the cruise terminal, yet the format is shorter than Teide or round-island days.",
      "Expect forest paths, humidity and elevation changes typical of laurisilva terrain.",
      "Pair with independent Santa Cruz time if your call is long enough — or choose Tenerife Total Experience when you want Teide included.",
    ],
    highlights: [
      "Anaga forest hiking",
      "Laurisilva atmosphere",
      "Moderate 2.5-hour format",
      "Time left for Santa Cruz afterwards on longer calls",
      "Nature focus close to the north-east",
    ],
    itinerary: [
      {
        title: "Transfer to Anaga",
        detail: "Travel from Santa Cruz into the Montes de Anaga trail area.",
      },
      {
        title: "Guided forest hike",
        detail: "Walk moderate paths through Anaga forest with guide orientation.",
      },
      {
        title: "Return toward port",
        detail: "Transfer back with timing for your ship buffer.",
      },
    ],
    included: [
      "Transport from Santa Cruz area",
      "Guided moderate hike",
      "Cruise-aware pacing",
    ],
    notIncluded: [
      "Meals and drinks",
      "Gratuities",
      "Specialist hiking gear",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Trail shoes recommended",
      "Forest weather can be cooler and damper than the harbour",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is this suitable for beginners?",
        answer:
          "It is moderate rather than Easy. Guests who prefer minimal walking should choose a scenic coach-led excursion instead.",
      },
    ],
    relatedExcursionSlugs: [
      "secrets-of-north-tenerife",
      "tenerife-total-experience",
      "best-of-tenerife",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — forest paths with elevation change",
    cruiseSuitability: "Works on shorter or flexible port calls when timing allows",
    editorChoice: false,
    supplier: {
      ...SEG_SUPPLIER,
      productId: "EUTFHIKEMONTE",
    },
  },
  {
    slug: "round-island-trip",
    title: "Round Island Trip",
    seoTitle: "Tenerife Round Island Trip Shore Excursion from Santa Cruz",
    metaDescription:
      "Round Island Trip from Santa Cruz — La Orotava, Garachico, Los Gigantes, Médano and Candelaria on an eight-hour Tenerife cruise day.",
    category: "Scenic / Cultural",
    tagline:
      "La Orotava, Garachico, Los Gigantes, Médano and Candelaria — Tenerife’s coasts in one ambitious day.",
    duration: "Approximately 8 hours",
    pace: "Moderate",
    bestFor:
      "Guests with a long port call who want a broad island overview rather than a deep single-area day",
    overview:
      "The Round Island Trip samples northern towns, western cliffs and southern/eastern coastal character — La Orotava, Garachico, Los Gigantes, Médano and Candelaria — paced for cruise passengers who accept more road time for wider geography.",
    body: [
      "This is a breadth day, not a deep Teide immersion. Stops are scenic and cultural snapshots rather than long hikes.",
      "Choose it when you want Tenerife’s varied coastlines; choose Tenerife Total Experience when Mount Teide and Anaga are the priority.",
      "Road time is significant — protect the return buffer and avoid stacking extra independent plans afterwards.",
    ],
    highlights: [
      "La Orotava town character",
      "Garachico coastal heritage",
      "Los Gigantes cliff views",
      "Médano and Candelaria stops",
      "Full-day round-island routing",
    ],
    itinerary: [
      {
        title: "Depart Santa Cruz",
        detail: "Begin the island circuit with cruise timing confirmed.",
      },
      {
        title: "North & west coast highlights",
        detail: "Visit La Orotava, Garachico and Los Gigantes viewpoints as sequencing allows.",
      },
      {
        title: "South & east coastal stops",
        detail: "Continue toward Médano and Candelaria before returning to port.",
      },
    ],
    included: [
      "Port pickup and drop-off planning",
      "Air-conditioned transport",
      "Guided orientation at key stops",
      "Return planned around all-aboard",
    ],
    notIncluded: [
      "Meals and personal purchases",
      "Entrance fees unless stated on your voucher",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Long day in the vehicle — bring water and a light layer",
      "Do not attempt a major independent hike afterwards",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is Mount Teide included?",
        answer:
          "This round-island format emphasises coastal towns and cliff scenery. For Teide National Park, choose Tenerife Total Experience.",
      },
    ],
    relatedExcursionSlugs: [
      "tenerife-total-experience",
      "best-of-tenerife",
      "secrets-of-north-tenerife",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — short walks at viewpoint and town stops",
    cruiseSuitability: "Requires a long, unhurried full day in port",
    editorChoice: false,
    supplier: {
      ...SEG_SUPPLIER,
      productId: "EUTFROUNDISL",
    },
  },
];

export function getExcursionBySlug(slug: string): ExcursionPage | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getAllExcursionSlugs(): string[] {
  return excursions.map((e) => e.slug);
}

export function getFeaturedExcursions(): ExcursionPage[] {
  return excursions.filter((e) => e.featured);
}

export function getEditorsChoiceExcursions(): ExcursionPage[] {
  return excursions.filter((e) => e.editorChoice);
}

import type { ExperienceCard, FAQ, VisitorType } from "./types";

export const homepageTagline =
  "The gateway to Tenerife — Europe’s most spectacular volcanic island.";

export const homepageSubheading =
  "Stay for a relaxed day in Santa Cruz, or set out for Mount Teide, La Laguna and landscapes that define the Canary Islands.";

export const homepageDestinationLine =
  "Santa Cruz · Mount Teide · La Laguna · Anaga · Atlantic Tenerife";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Santa Cruz for the day on a cruise",
    shortLabel: "Port day",
    description:
      "Match your hours ashore to a city walk, Mount Teide, La Laguna or a fuller Tenerife day — with a proper return buffer.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time in Tenerife",
    shortLabel: "First visit",
    description:
      "We genuinely recommend exploring beyond Santa Cruz on a first call — Teide, La Laguna and volcanic landscapes are the island’s story.",
    href: "/compare/first-time-tenerife-day",
    cta: "See first-time picks",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description:
      "Santa Cruz is attractive for a relaxed independent day — old town, waterfront, market and cafés within easy reach of the ship.",
    href: "/guides/explore-independently",
    cta: "Walk It Yourself",
  },
  {
    id: "planner",
    label: "I want help choosing my day",
    shortLabel: "Cruise planner",
    description:
      "Tell us your port times, interests, mobility and pace for a tailored Santa Cruz and Tenerife plan.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const coreSections: HomeSection[] = [
  {
    slug: "excursions",
    number: "01",
    title: "Shore excursions",
    description:
      "Carefully selected experiences across Mount Teide, La Laguna, Anaga and Tenerife’s volcanic landscapes — designed around cruise timing.",
    href: "/shore-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "guides",
    number: "02",
    title: "Port & island guides",
    description:
      "Honest advice on walking Santa Cruz, when Teide is worth the road time, La Laguna, food and cruise tips.",
    href: "/guides",
    cta: "Read the guides",
  },
  {
    slug: "schedules",
    number: "03",
    title: "Cruise ship schedule",
    description:
      "Ship call data for Santa Cruz will appear here once confirmed schedules are available for publication.",
    href: "/ship-schedules",
    cta: "View schedules",
  },
];

export const spiritOfPlace = {
  title: "Volcanic Tenerife. Atlantic light.",
  body: [
    "Santa Cruz is not the main attraction — it is the gateway. Behind the harbour lies Tenerife, the largest of the Canary Islands: lava fields, laurisilva forests, year-round Atlantic sunshine and Mount Teide National Park, home to Spain’s highest peak.",
    "We write like an independent cruise concierge: fewer recommendations, clearer trade-offs, and always a plan that protects your return to the ship. First-timers usually gain more by leaving the city; return visitors often enjoy Santa Cruz itself at a human pace.",
  ],
};

export const honestAdvicePoints = [
  {
    title: "First visit? Look beyond Santa Cruz",
    body: "Mount Teide, La Laguna and Tenerife’s volcanic landscapes are why most ships call. On a first cruise day, an island excursion usually delivers more than the city alone.",
  },
  {
    title: "Return visit? Santa Cruz is enjoyable on foot",
    body: "Plaza de España, the Auditorio waterfront, Mercado de Nuestra Señora de África and café streets make a relaxed independent day close to the ship.",
  },
  {
    title: "All-aboard beats published departure",
    body: "Plan from the moment you must be aboard, then add a buffer. Island road days need the larger end of that margin — the ship will not wait for one more caldera photograph.",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "Can I explore Santa Cruz without an excursion?",
      answer:
        "Yes. Santa Cruz is attractive for a relaxed independent day — old town, waterfront, market and cafés sit within easy reach of the cruise terminal. On a first Tenerife call, many guests still prefer an island excursion to Mount Teide or La Laguna.",
    },
    {
      question: "Should first-time visitors stay in Santa Cruz or explore Tenerife?",
      answer:
        "We genuinely recommend exploring beyond Santa Cruz on a first visit. Mount Teide National Park, UNESCO La Laguna and Anaga’s laurisilva forests show why Tenerife is one of Europe’s most spectacular volcanic islands. Save a pure city day for a return call or a shorter, more relaxed port window.",
    },
    {
      question: "How far is Mount Teide from Santa Cruz cruise port?",
      answer:
        "Road time into Teide National Park is typically around 1–1.5 hours each way depending on traffic, weather and exact stops. That is why Teide days work best on fuller port calls with a cruise-timed operator and a generous return buffer.",
    },
    {
      question: "What is your Editor's Choice excursion?",
      answer:
        "Tenerife Total Experience — the best SEG tour visiting Mount Teide plus Tenerife highlights for first-time cruise visitors, including La Laguna and Anaga Rural Park.",
    },
  ];
}

export const featuredExperienceCards: ExperienceCard[] = [
  {
    slug: "editors-choice-teide",
    type: "nature",
    title: "Editor's Choice",
    eyebrow: "Mount Teide National Park",
    description:
      "Tenerife Total Experience — Mount Teide, La Laguna and Anaga highlights for first-time cruise visitors.",
    href: "/shore-excursions/tenerife-total-experience",
    cta: "View Editor's Choice",
    imageKey: "nature",
    duration: "Approximately 8 hours",
    difficulty: "Easy",
    idealFor: "First-time Tenerife cruise visitors",
  },
  {
    slug: "volcanic-landscapes",
    type: "nature",
    title: "Volcanic Landscapes",
    description:
      "Teide & Las Cañadas — Spain’s highest peak and the lunar caldera that defines Tenerife.",
    href: "/guides/mount-teide-guide",
    cta: "Discover Teide",
    imageKey: "nature",
  },
  {
    slug: "explore-independently",
    type: "walk-it-yourself",
    title: "Walk It Yourself",
    eyebrow: "Free self-guided route",
    description:
      "Santa Cruz Old Town & Waterfront — a relaxed independent day when the city suits your hours ashore.",
    href: "/guides/explore-independently",
    cta: "Open the walking guide",
    imageKey: "walking",
    duration: "2.5–4 hours",
    distance: "Approximately 3–5 km",
    difficulty: "Easy",
    idealFor: "Independent cruise passengers",
  },
];

export const experienceCards: ExperienceCard[] = [
  {
    slug: "editors-choice-teide",
    type: "nature",
    title: "Editor's Choice",
    eyebrow: "Mount Teide National Park",
    description: "Tenerife Total Experience — Teide plus island highlights for first-timers.",
    href: "/shore-excursions/tenerife-total-experience",
    cta: "View Editor's Choice",
    imageKey: "nature",
  },
  {
    slug: "volcanic-landscapes",
    type: "nature",
    title: "Volcanic Landscapes",
    description: "Teide & Las Cañadas — volcanic highlands beyond the harbour.",
    href: "/shore-excursions/tenerife-total-experience",
    cta: "Explore Tenerife",
    imageKey: "nature",
  },
  {
    slug: "explore-independently",
    type: "walk-it-yourself",
    title: "Walk It Yourself",
    eyebrow: "Free self-guided route",
    description: "Santa Cruz Old Town & Waterfront at your own pace.",
    href: "/guides/explore-independently",
    cta: "Walk It Yourself",
    imageKey: "walking",
    duration: "2.5–4 hours",
    distance: "3–5 km",
    difficulty: "Easy",
    idealFor: "Independent explorers",
  },
  {
    slug: "history",
    type: "history",
    title: "History & Culture",
    description: "Santa Cruz harbour heritage and UNESCO La Laguna’s colonial streets.",
    href: "/guides/la-laguna-guide",
    cta: "Explore history",
    imageKey: "historic",
  },
  {
    slug: "food-wine",
    type: "food-wine",
    title: "Food & Local Life",
    description: "Markets, Canarian food and cafés — Tenerife flavours near the ship.",
    href: "/guides/food-guide",
    cta: "Taste Tenerife",
    imageKey: "food",
  },
  {
    slug: "photography",
    type: "photography",
    title: "Photography",
    description: "Auditorio, Atlantic light, Anaga ridges and Teide caldera views.",
    href: "/guides/best-viewpoints",
    cta: "Find viewpoints",
    imageKey: "photography",
  },
  {
    slug: "families",
    type: "families",
    title: "Families",
    description: "Scenic island days and manageable city walks when travelling with children.",
    href: "/shore-excursions/best-of-tenerife",
    cta: "Family-friendly days",
    imageKey: "family",
  },
];

/** Homepage hero — destination copy (components stay generic). */
export const homepageHero = {
  eyebrow: "Santa Cruz Shore Excursions",
  headline: homepageTagline,
  subheading: homepageSubheading,
  destinationLine: homepageDestinationLine,
  primaryCta: { href: "/shore-excursions", label: "Explore Shore Excursions" },
  secondaryCta: { href: "/guides/explore-independently", label: "Walk It Yourself" },
} as const;

export interface ChooseYourDayCard {
  slug: string;
  emoji: string;
  title: string;
  tagline: string;
  highlights: readonly string[];
  cta: string;
  href: string;
  imageKey: string;
  wide?: boolean;
}

export const chooseYourDay = {
  eyebrow: "Choose Your Day",
  title: "How would you like to experience Tenerife?",
  subtitle:
    "Explore Santa Cruz on foot, discover Mount Teide, or take our Editor’s Choice island adventure — three clear paths shaped around your hours ashore.",
  cards: [
    {
      slug: "explore-santa-cruz",
      emoji: "🚶",
      title: "Explore Santa Cruz",
      tagline:
        "A relaxed independent city day — Plaza de España, Auditorio waterfront, market flavours and café streets close to the ship.",
      highlights: [
        "Walkable from the cruise terminal",
        "Old town and harbour atmosphere",
        "Mercado de Nuestra Señora de África",
        "Ideal for return visits or shorter calls",
        "Honest return-to-ship buffers",
      ],
      cta: "Open Walk It Yourself",
      href: "/guides/explore-independently",
      imageKey: "walking",
      wide: true,
    },
    {
      slug: "discover-mount-teide",
      emoji: "🌋",
      title: "Discover Mount Teide",
      tagline:
        "Spain’s highest peak and Las Cañadas caldera — the volcanic heart of Tenerife when your port call supports the road time.",
      highlights: [
        "Teide National Park landscapes",
        "Dramatic volcanic scenery",
        "Best on a fuller day in port",
        "Organised transport protects timing",
        "The island moment first-timers remember",
      ],
      cta: "Read the Teide guide",
      href: "/guides/mount-teide-guide",
      imageKey: "nature",
      wide: true,
    },
    {
      slug: "editors-choice-adventure",
      emoji: "⭐",
      title: "Editor's Choice Adventure",
      tagline:
        "Tenerife Total Experience — La Laguna, Teide National Park and Anaga’s laurisilva Biosphere Reserve in one cruise-timed day.",
      highlights: [
        "Best SEG introduction for first-timers",
        "Mount Teide plus island highlights",
        "UNESCO La Laguna architecture",
        "Anaga Rural Park scenery",
        "Small-group scenic and cultural pacing",
      ],
      cta: "View Editor’s Choice",
      href: "/shore-excursions/tenerife-total-experience",
      imageKey: "historic",
      wide: false,
    },
  ] as const satisfies readonly ChooseYourDayCard[],
};

export const honestAdviceContent = {
  eyebrow: "Honest advice",
  title: "Do You Need a Shore Excursion in Santa Cruz?",
  subtitle:
    "The honest answer depends on the visit. Santa Cruz is enjoyable independently for a relaxed city day. On a first Tenerife call, we genuinely recommend exploring the island beyond the harbour — Mount Teide, La Laguna and volcanic landscapes are the reason most ships stop here.",
  independent: {
    title: "You can explore Santa Cruz independently — and many passengers do",
    body: "The city centre sits close to the cruise terminal, making a flexible, lower-stress day realistic:",
    items: [
      "Plaza de España and old-town streets",
      "Auditorio de Tenerife and the waterfront",
      "Mercado de Nuestra Señora de África",
      "Parks, shopping streets and local cafés",
    ],
    note: "Set a 60–90 minute return buffer and confirm your all-aboard time. The ship will not wait.",
  },
  organised: {
    title: "When Tenerife beyond Santa Cruz is the better choice",
    body: "Organised transport and disciplined timing matter when you leave the walkable core:",
    items: [
      {
        label: "Mount Teide",
        detail: "Spain’s highest peak and Las Cañadas — the island’s defining landscape",
      },
      {
        label: "La Laguna",
        detail: "UNESCO colonial streets a short inland hop from Santa Cruz",
      },
      {
        label: "Anaga",
        detail: "laurisilva forest and Biosphere Reserve ridges",
      },
      {
        label: "Round-island days",
        detail: "north and west coast highlights when your call is long enough",
      },
    ],
  },
  links: [
    { href: "/compare/tour-or-independent", label: "Tour or independent?" },
    { href: "/guides/explore-independently", label: "Walk It Yourself" },
    { href: "/guides/mount-teide-guide", label: "Mount Teide guide" },
  ],
} as const;

export const featuredSectionCopy = {
  eyebrow: "When you're ready",
  title: "Featured shore excursions",
  subtitle:
    "Curated Tenerife experiences planned around your cruise day. Live booking opens once EUR selling prices and fulfilment routes are verified.",
} as const;

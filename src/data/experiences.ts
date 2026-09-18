import type { GuidePage } from "./types";

export const experiencePages: GuidePage[] = [
  {
    slug: "one-day-in-santa-cruz",
    title: "One Day In Santa Cruz",
    seoTitle: "One Day in Santa Cruz Tenerife from a Cruise Ship",
    metaDescription:
      "How to spend one day in Santa Cruz on a cruise: city walk, Mount Teide choice, food, timing and when to stay independent versus book a Tenerife tour.",
    tagline:
      "A realistic cruise-day plan for Santa Cruz — and an honest choice between the city and the island.",
    overview:
      "One day from Santa Cruz is enough for a memorable harbour-city loop or a carefully timed Tenerife island experience. It is not enough for Teide, Anaga, La Laguna depth and a long café wander. Choose a priority.",
    body: [
      "First visit with a long call: prioritise Mount Teide and island highlights — Tenerife Total Experience is our Editor’s Choice.",
      "Return visit or shorter window: walk Plaza de España, the Auditorio waterfront, the market and café streets independently.",
      "Afternoon: protect a 60–90 minute return buffer. Island road days need the larger margin.",
      "Leave round-island breadth and long hikes for calls that clearly support them.",
    ],
    highlights: [
      "Choose city or island — not both deeply",
      "Teide for first-timers on long calls",
      "Santa Cruz walk for relaxed days",
      "Honest scope for one call",
    ],
    tips: [
      "Confirm all-aboard before you leave the terminal",
      "Bring a warm layer if Teide is on the plan",
    ],
    faqs: [
      {
        question: "Is one day enough?",
        answer:
          "Yes for Santa Cruz itself, or for a Teide-inclusive island day. No for seeing all of Tenerife. Match ambition to hours ashore.",
      },
    ],
    relatedSlugs: ["explore-independently", "mount-teide-guide", "cruise-tips"],
    imageKey: "historic",
    hubPath: "/guides",
  },
  {
    slug: "explore-independently",
    title: "Walk It Yourself",
    seoTitle: "Walk It Yourself | Independent Santa Cruz Walking Guide",
    metaDescription:
      "Independent Walk It Yourself guide for Santa Cruz — Plaza de España, Auditorio, market stops, parks and honest return-to-ship timing.",
    tagline:
      "Santa Cruz is attractive for a relaxed independent day — old town, waterfront and market within easy reach of the ship.",
    overview:
      "If you have a clear head, comfortable shoes and a few hours ashore, Santa Cruz rewards independent exploration. Plaza de España, the Auditorio waterfront, Mercado de Nuestra Señora de África and café streets sit close to the cruise terminal. This guide helps you choose that honest option — without pretending Tenerife’s volcanic landscapes are unnecessary on a first visit.",
    body: [
      "Exit the passenger terminal and follow signage toward Plaza de España — typically 10–20 minutes depending on berth and pace.",
      "Continue to the Auditorio waterfront, then loop toward the market, parks and shopping streets before café time.",
      "Save Mount Teide, Anaga and round-island geography for organised days — the walkable city is richest at a human pace.",
      "Aim to be back at the terminal 60–90 minutes before all-aboard. Independent days fail only when the buffer is optimistic.",
    ],
    highlights: [
      "City centre walkable from terminals",
      "Flexible pacing and café stops",
      "No transfer required for core sights",
      "Generous return buffer still essential",
    ],
    tips: [
      "Confirm your all-aboard time before you leave the terminal — then plan backwards",
      "Carry water; Atlantic sun is stronger than it feels in a sea breeze",
      "Do not cut the return to terminal fine",
    ],
    faqs: [
      {
        question: "Is Santa Cruz safe to explore independently?",
        answer:
          "The terminal-to-centre area is generally straightforward for cruise visitors using normal city awareness. Crowds thicken around the waterfront when several ships are in.",
      },
      {
        question: "When should I book an excursion instead?",
        answer:
          "On a first Tenerife visit when you want Mount Teide, La Laguna depth, Anaga hiking or round-island scenery — or when you prefer structured pacing. Tenerife Total Experience is the natural next step when a city walk alone is not quite enough.",
      },
    ],
    recommendations: [
      {
        category: "editors-choice",
        title: "Tenerife Total Experience",
        description:
          "When a self-guided city loop is not quite enough — Mount Teide plus island highlights.",
        href: "/shore-excursions/tenerife-total-experience",
      },
    ],
    relatedSlugs: ["one-day-in-santa-cruz", "mount-teide-guide", "best-viewpoints"],
    imageKey: "walking",
    hubPath: "/guides",
    independentWalk: {
      eyebrow: "Free self-guided route",
      idealFor: [
        "Cruise passengers with 3+ hours ashore",
        "Return visitors who want a relaxed city day",
        "Photographers and café explorers",
        "Guests who prefer flexibility over a coach itinerary",
      ],
      duration: "2.5–4 hours",
      distance: "Approximately 3–5 km",
      difficulty: "Easy — pavements, promenade and gentle city slopes",
      bestFor: [
        "Independent explorers",
        "Families comfortable with urban walking",
        "Anyone who prefers café pauses over a fixed itinerary",
      ],
      familyFriendly: true,
      wheelchairFriendly: true,
      recommendedReturnBuffer:
        "Aim to be back at the terminal 60–90 minutes before all-aboard. Independent days fail only when the buffer is optimistic.",
      route: [
        {
          number: 1,
          title: "Cruise terminal to Plaza de España",
          description:
            "Exit the passenger terminal area and follow clear signage toward the city centre. The walk is typically 10–20 minutes depending on berth, pace and route. Plaza de España is your orientation anchor beside the harbour.",
          durationMinutes: 15,
          tip: "Confirm your all-aboard time before you leave the terminal — then plan backwards.",
        },
        {
          number: 2,
          title: "Auditorio de Tenerife & waterfront",
          description:
            "Follow the promenade toward the Auditorio’s white silhouette. Take the classic photograph, then keep moving — the waterfront is best as part of a wider loop, not the entire day.",
          durationMinutes: 30,
          tip: "Morning light flatters the Auditorio façades; midday glare is stronger.",
        },
        {
          number: 3,
          title: "Mercado de Nuestra Señora de África",
          description:
            "Continue inland to the market hall for produce stalls, local colour and a light snack. This is where Santa Cruz feels lived-in rather than performed for the ship.",
          durationMinutes: 35,
          tip: "If the market is quiet or closed, shift to a nearby café street without losing the loop.",
        },
        {
          number: 4,
          title: "Parks and green pauses",
          description:
            "Drift through central parks and tree-lined stretches for shade and a slower rhythm. Santa Cruz rewards unhurried pauses between landmarks.",
          durationMinutes: 25,
        },
        {
          number: 5,
          title: "Shopping streets & local cafés",
          description:
            "Explore central shopping streets and choose a café where locals are actually sitting. Quality over the first terrace you see from a coach stop.",
          durationMinutes: 40,
          tip: "Keep an eye on time once you sit down — café minutes disappear faster than walking minutes.",
        },
        {
          number: 6,
          title: "Return to the ship",
          description:
            "Trace your way back toward Plaza de España and the cruise terminal. Keep the final stretch simple so an unexpected queue does not threaten all-aboard.",
          durationMinutes: 20,
        },
      ],
      dontMiss: [
        {
          category: "Best viewpoints",
          title: "Auditorio waterfront",
          description:
            "The city’s most recognisable silhouette against the Atlantic — worth the promenade walk even if you skip every interior.",
        },
        {
          category: "Best viewpoints",
          title: "Harbour edge near Plaza de España",
          description:
            "A wider frame of port life and city façades — useful when the Auditorio approach feels crowded.",
        },
        {
          category: "Local life",
          title: "Mercado de Nuestra Señora de África",
          description:
            "Produce, colour and everyday Canarian atmosphere without needing a ticketed attraction.",
        },
        {
          category: "Architecture",
          title: "Plaza de España setting",
          description:
            "The civic heart of Santa Cruz and the simplest meeting point for independent explorers.",
        },
        {
          category: "Photo spots",
          title: "Waterfront promenade curves",
          description:
            "Atlantic light, ship masts and the Auditorio line make strong wide photographs.",
        },
        {
          category: "Cafés",
          title: "Side-street cafés off the main shopping spines",
          description:
            "A few turns away from the busiest frontages, Santa Cruz still feels local and calm.",
        },
      ],
      coffeeStops: [
        {
          name: "A market-edge café",
          description:
            "Near Mercado de Nuestra Señora de África, choose a simple café for coffee and a light bite with local custom rather than a generic waterfront menu.",
          specialty: "Coffee and a short pause",
          nearStop: "Near the market",
        },
        {
          name: "A quiet shopping-street stop",
          description:
            "If the waterfront terraces are busy, step one street inland and choose a café where residents are queuing. Look for fresh pastry and a calmer room.",
          specialty: "Pastries and café culture",
          nearStop: "Central shopping streets",
        },
      ],
      localTips: [
        {
          label: "Public toilets",
          detail:
            "Use terminal facilities before you leave. In the city, cafés, shopping streets and the market area are the practical options.",
        },
        {
          label: "Cash / card",
          detail:
            "Cards are widely accepted in Santa Cruz. A little cash still helps for small market purchases.",
        },
        {
          label: "Water",
          detail:
            "Bring a bottle from the ship. You can restock at cafés and small shops without a long detour.",
        },
        {
          label: "Wi-Fi",
          detail:
            "Ship Wi-Fi fades once you leave the terminal. Cafés often offer connection if you need a quick schedule check.",
        },
        {
          label: "Safety",
          detail:
            "Central Santa Cruz is generally comfortable by day. Use normal city awareness in crowds near the waterfront.",
        },
        {
          label: "Accessibility",
          detail:
            "Much of the centre uses pavements and promenade. Some side streets have kerbs and gentle slopes — taxis help if needed.",
        },
        {
          label: "Best time to walk",
          detail:
            "Earlier morning feels calmer. Midday brings stronger sun and ship crowds. Late afternoon light on the waterfront is excellent if your all-aboard allows.",
        },
      ],
      backToShip: {
        latestDeparture:
          "Leave your furthest café or market stop early enough for the walk back plus your personal buffer — do not cut it fine from the waterfront.",
        walkingTime:
          "Budget 15–30 minutes from Plaza de España / central streets back to the passenger terminal, depending on pace, crowds and exact berth.",
        taxiAlternative:
          "Taxis are available around the centre if legs tire or heat builds — agree the cruise terminal clearly.",
        safetyMargin:
          "Aim to be back at the terminal 60–90 minutes before all-aboard. Independent days fail only when the buffer is optimistic.",
        notes:
          "If multiple ships are in port, allow extra time through the terminal approach. Comfortable shoes and sun protection matter more than any packing tip.",
      },
      exploreFurther: {
        excursionSlug: "tenerife-total-experience",
        title: "Want Tenerife beyond the harbour?",
        body: "If you'd like to experience more than a self-guided loop through Santa Cruz — Mount Teide, La Laguna and Anaga’s laurisilva forest — our Editor's Choice excursion, Tenerife Total Experience, is the natural next step. It is never required; it is simply the day we recommend when a city walk alone is not quite enough.",
        href: "/shore-excursions/tenerife-total-experience",
        ctaLabel: "Read about Editor’s Choice",
      },
    },
  },
  {
    slug: "mount-teide-guide",
    title: "Mount Teide Guide",
    seoTitle: "Mount Teide Guide for Santa Cruz Cruise Passengers",
    metaDescription:
      "Mount Teide from Santa Cruz cruise port — road time, weather, what to expect in Teide National Park and when an organised excursion is wiser.",
    tagline: "Spain’s highest peak — the volcanic heart of Tenerife.",
    overview:
      "Mount Teide National Park is Tenerife’s defining landscape. From Santa Cruz it is a road day, not a stroll — plan it with cruise timing honesty.",
    body: [
      "Expect roughly 1–1.5 hours each way by road depending on traffic, weather and stops.",
      "Altitude is cooler than the harbour; carry a warm layer.",
      "Tenerife Total Experience is our Editor’s Choice when you want Teide plus La Laguna and Anaga in one day.",
    ],
    highlights: [
      "Las Cañadas caldera",
      "Spain’s highest peak",
      "Dramatic volcanic photography",
      "Best on a long port call",
    ],
    tips: [
      "Do not attempt a rushed DIY Teide circuit on a short call",
      "Confirm cable-car expectations separately if relevant to your voucher",
    ],
    faqs: [
      {
        question: "Can I visit Teide independently from the cruise port?",
        answer:
          "It is possible by private transfer, but return risk and cost usually favour a cruise-timed excursion for most passengers.",
      },
    ],
    relatedSlugs: ["explore-independently", "one-day-in-santa-cruz", "la-laguna-guide"],
    imageKey: "nature",
    hubPath: "/guides",
  },
  {
    slug: "la-laguna-guide",
    title: "La Laguna Guide",
    seoTitle: "La Laguna Guide for Cruise Passengers from Santa Cruz",
    metaDescription:
      "UNESCO La Laguna from Santa Cruz — colonial streets, timing tips and how to include Tenerife’s historic capital in a cruise day.",
    tagline: "Colonial streets and Canarian architecture a short inland hop from Santa Cruz.",
    overview:
      "San Cristóbal de La Laguna is Tenerife’s UNESCO colonial counterpoint to the harbour city — best enjoyed at a walking pace.",
    body: [
      "Often combined with northern forest or valley scenery on Best of Tenerife formats.",
      "A focused taxi visit works if La Laguna alone is your goal.",
      "Pairing La Laguna with Teide is easier via organised routing than DIY timing.",
    ],
    highlights: [
      "UNESCO heritage grid",
      "Colonial façades",
      "Café culture",
      "Short transfer from Santa Cruz",
    ],
    tips: [
      "Wear comfortable shoes",
      "Keep museum interiors optional if time is tight",
    ],
    faqs: [
      {
        question: "How long do I need in La Laguna?",
        answer:
          "Ninety minutes to three hours covers the colonial streets without rushing. Longer if you add cafés and interiors.",
      },
    ],
    relatedSlugs: ["mount-teide-guide", "food-guide", "one-day-in-santa-cruz"],
    imageKey: "historic",
    hubPath: "/guides",
  },
  {
    slug: "food-guide",
    title: "Santa Cruz Food Guide",
    seoTitle: "Santa Cruz & Tenerife Food Guide for Cruise Passengers",
    metaDescription:
      "What to eat in Santa Cruz on a cruise day — Mercado de Nuestra Señora de África, Canarian cafés and how to taste Tenerife without missing the ship.",
    tagline: "Markets, Canarian kitchens and café culture near the ship.",
    overview:
      "You can eat well without leaving Santa Cruz. The market and café streets sit close enough to protect a cruise return buffer.",
    body: [
      "Build lunch into your city loop rather than treating food as an afterthought.",
      "Wrinkled potatoes, local cheeses, fresh juices and simple Canarian plates are easier wins than a long tasting menu close to all-aboard.",
      "Island excursions often include a meal window — confirm what is and is not covered on your voucher.",
    ],
    highlights: [
      "Mercado de Nuestra Señora de África",
      "Walkable café streets",
      "Canarian flavours",
      "Protects return-to-ship timing",
    ],
    tips: [
      "Avoid overlong restaurant sittings close to all-aboard",
      "Mention allergies early if joining a tasting-style stop",
    ],
    faqs: [
      {
        question: "Should I book a food tour?",
        answer:
          "Not required in Santa Cruz. Independent market and café hopping works well; island days handle food differently depending on the excursion.",
      },
    ],
    relatedSlugs: ["explore-independently", "shopping-guide", "one-day-in-santa-cruz"],
    imageKey: "food",
    hubPath: "/guides",
  },
  {
    slug: "shopping-guide",
    title: "Santa Cruz Shopping Guide",
    seoTitle: "Shopping in Santa Cruz Tenerife for Cruise Passengers",
    metaDescription:
      "Shopping in Santa Cruz on a cruise day — central streets, market finds and how to browse confidently without risking all-aboard.",
    tagline: "Central streets and market finds within a walkable loop of the ship.",
    overview:
      "Santa Cruz offers straightforward urban shopping — useful souvenirs, fashion streets and market stalls — without needing a long transfer.",
    body: [
      "Keep purchases light if you still have walking ahead.",
      "Market goods and small food items travel better than fragile glass close to departure.",
      "Always leave browsing time before your return buffer begins.",
    ],
    highlights: [
      "Central shopping streets",
      "Market stalls",
      "Easy to combine with walking",
      "No coach required",
    ],
    tips: [
      "Know your terminal approach before laden bags slow you down",
      "Check liquid and food rules for reboarding",
    ],
    faqs: [
      {
        question: "Is shopping better than a Teide day?",
        answer:
          "Only if shopping is your priority. First-time visitors usually gain more from Tenerife’s landscapes than from retail.",
      },
    ],
    relatedSlugs: ["food-guide", "explore-independently", "cruise-tips"],
    imageKey: "historic",
    hubPath: "/guides",
  },
  {
    slug: "cruise-tips",
    title: "Santa Cruz Cruise Tips",
    seoTitle: "Santa Cruz Cruise Tips — Tenerife Port Day Advice",
    metaDescription:
      "Practical Santa Cruz cruise tips: walking from port, Teide weather, money, timing, mobility and how to protect your return to the ship.",
    tagline: "Practical advice for a composed Santa Cruz and Tenerife port day.",
    overview:
      "Santa Cruz is welcoming and walkable, but Atlantic sun, island road time and all-aboard timing still decide whether the day feels elegant or stressed.",
    body: [
      "Plan from all-aboard, not published departure.",
      "Wear comfortable shoes; carry water and a light layer if Teide is on the plan.",
      "Independent city exploration is realistic; organised tours help with Teide, Anaga and round-island logistics.",
    ],
    highlights: [
      "All-aboard first",
      "City walkable for many",
      "Teide needs road buffer",
      "Taxi backup for heat or mobility",
    ],
    tips: [
      "Screenshot offline maps",
      "Keep a Plan B if your call is shortened",
    ],
    faqs: [
      {
        question: "What should I pack for a Santa Cruz shore day?",
        answer:
          "Comfortable walking shoes, sun protection, water, and offline confirmation of your all-aboard time — plus a warm layer for Teide altitudes.",
      },
    ],
    relatedSlugs: ["cruise-faq", "explore-independently", "mount-teide-guide"],
    imageKey: "port",
    hubPath: "/guides",
  },
  {
    slug: "cruise-faq",
    title: "Santa Cruz Cruise FAQ",
    seoTitle: "Santa Cruz Cruise FAQ — Shore Day Questions Answered",
    metaDescription:
      "Santa Cruz cruise FAQ: Can I explore without a tour? Should I visit Teide? How much walking? Is Santa Cruz suitable for limited mobility?",
    tagline: "Straight answers for cruise passengers planning Santa Cruz and Tenerife.",
    overview:
      "These are the questions we hear most often from guests deciding between an independent Santa Cruz day and an organised Tenerife experience.",
    body: [
      "Santa Cruz is genuinely enjoyable without an excursion — that honesty is intentional.",
      "On a first visit, Tenerife beyond the harbour is usually the richer story.",
      "Never trade your return buffer for one more stop.",
    ],
    highlights: [
      "Independent city days are viable",
      "Teide is the first-timer priority",
      "Tours add island reach",
      "Mobility needs planning",
    ],
    tips: [
      "Read Walk It Yourself before you decide on a city day",
      "Compare tour vs independent honestly",
    ],
    faqs: [
      {
        question: "Can I explore Santa Cruz without an excursion?",
        answer:
          "Yes. Many visitors walk into the centre independently and have an excellent relaxed day.",
      },
      {
        question: "Should first-timers visit Mount Teide?",
        answer:
          "Usually yes if hours ashore allow. Teide is Tenerife’s defining landscape; Santa Cruz alone is a softer choice for return visits.",
      },
      {
        question: "How far is the city centre from the cruise port?",
        answer:
          "Often around 10–20 minutes on foot from the passenger terminal area to Plaza de España, depending on berth and pace.",
      },
      {
        question: "Should I book a tour?",
        answer:
          "Book for Teide, La Laguna depth, hiking support or round-island geography. Skip if you prefer flexible Santa Cruz wandering.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "City days are mostly easy pavements and promenade. Hiking excursions are moderate to active on trails.",
      },
      {
        question: "Is Santa Cruz suitable for limited mobility?",
        answer:
          "Central Santa Cruz is relatively manageable. Mountain and forest days involve coaches, altitude and uneven ground — ask before booking.",
      },
    ],
    relatedSlugs: ["cruise-tips", "explore-independently", "one-day-in-santa-cruz"],
    imageKey: "compare",
    hubPath: "/guides",
  },
  {
    slug: "best-viewpoints",
    title: "Best Viewpoints",
    seoTitle: "Best Viewpoints in Santa Cruz & Tenerife for Cruise Visitors",
    metaDescription:
      "Best viewpoints for Santa Cruz cruise passengers — Auditorio waterfront, Teide caldera panoramas and Anaga ridge outlooks.",
    tagline: "Atlantic silhouettes, volcanic calderas and forest ridges.",
    overview:
      "Santa Cruz offers strong waterfront photographs; Tenerife’s unforgettable viewpoints sit inland at Teide and along Anaga’s ridges.",
    body: [
      "In the city, the Auditorio promenade is the reliable classic.",
      "For volcanic drama, Teide National Park viewpoints need organised road time.",
      "Anaga ridges reward hikers with greener Atlantic outlooks.",
    ],
    highlights: [
      "Auditorio waterfront",
      "Teide caldera views",
      "Anaga ridge outlooks",
      "Strong Atlantic light",
    ],
    tips: [
      "Do not sacrifice your ship buffer for one more panorama",
      "Altitude haze and cloud can change Teide photographs by the hour",
    ],
    faqs: [
      {
        question: "What is the single best viewpoint?",
        answer:
          "For the city, the Auditorio waterfront. For Tenerife as a whole, Teide National Park’s caldera outlooks are the defining cruise-day images.",
      },
    ],
    relatedSlugs: ["mount-teide-guide", "explore-independently", "one-day-in-santa-cruz"],
    imageKey: "photography",
    hubPath: "/guides",
  },
];

export function getExperienceBySlug(slug: string): GuidePage | undefined {
  return experiencePages.find((p) => p.slug === slug);
}

export function getAllExperienceSlugs(): string[] {
  return experiencePages.map((p) => p.slug);
}

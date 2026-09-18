import type { AttractionPage } from "./types";

export const highlights: AttractionPage[] = [
  {
    slug: "mount-teide",
    title: "Mount Teide",
    seoTitle: "Mount Teide from Santa Cruz Cruise Port",
    metaDescription:
      "Visit Mount Teide National Park from Santa Cruz cruise port — Spain’s highest peak, Las Cañadas caldera timing and when a guided day helps.",
    attractionName: "Mount Teide National Park",
    tagline: "Spain’s highest peak and Tenerife’s defining volcanic landscape.",
    overview:
      "Mount Teide is why many first-time cruise visitors leave Santa Cruz: lunar caldera floors, lava fields and Atlantic vistas from Europe’s most dramatic island highlands.",
    body: [
      "Road time from Santa Cruz is typically around 1–1.5 hours each way — organised transport protects the return buffer.",
      "Altitude weather changes quickly; bring a warm layer even on warm harbour mornings.",
      "A Teide-inclusive excursion such as Tenerife Total Experience is usually wiser than attempting an independent circuit on a cruise clock.",
    ],
    distanceFromPort: "Inland volcanic highlands — significant road transfer",
    travelTime: "Typically 1–1.5 hours each way by road",
    timeNeeded: "Most of a full cruise day when combined with other island stops",
    gettingThere: [
      {
        method: "Organised excursion",
        detail: "Cruise-timed coach or small-group transport from Santa Cruz.",
        time: "Full-day formats common",
        cost: "Excursion fare",
      },
      {
        method: "Taxi / private transfer",
        detail: "Possible but return timing and cost risk rise without a local operator plan.",
        time: "1–1.5 hrs each way",
        cost: "High",
      },
    ],
    highlights: [
      "Las Cañadas caldera scenery",
      "Spain’s highest peak",
      "Volcanic photography",
      "Cooler high-altitude climate",
    ],
    tips: [
      "Confirm all-aboard before committing to Teide",
      "Cable car access is separate and weather-dependent if offered",
    ],
    faqs: [
      {
        question: "Is Teide worth it on a cruise day?",
        answer:
          "Yes for most first-time Tenerife visitors with a long call. Skip it only if you deliberately want a relaxed Santa Cruz city day or your usable hours are short.",
      },
    ],
    relatedAttractionSlugs: ["la-laguna", "anaga-rural-park", "auditorio-de-tenerife"],
    relatedExcursionSlug: "tenerife-total-experience",
  },
  {
    slug: "la-laguna",
    title: "San Cristóbal de La Laguna",
    seoTitle: "La Laguna from Santa Cruz Cruise Port",
    metaDescription:
      "Visit UNESCO La Laguna from Santa Cruz — colonial streets, cruise timing tips and how to combine culture with a Tenerife port day.",
    attractionName: "San Cristóbal de La Laguna",
    tagline: "UNESCO colonial streets — Tenerife’s cultural counterpoint to the harbour city.",
    overview:
      "La Laguna’s grid of colonial architecture sits a short inland hop from Santa Cruz and rewards unhurried walking more than a stressed checklist.",
    body: [
      "It is often paired with northern forest or valley stops on Best of Tenerife formats.",
      "Independent taxis are possible, but cruise buffers favour organised timing if you also want Teide.",
    ],
    distanceFromPort: "Short inland transfer from Santa Cruz",
    travelTime: "Often around 20–40 minutes by road",
    timeNeeded: "1.5–3 hours for a satisfying stroll",
    gettingThere: [
      {
        method: "Organised excursion",
        detail: "Included on several northern Tenerife shore days.",
        time: "Part of half- or full-day formats",
        cost: "Excursion fare",
      },
      {
        method: "Taxi",
        detail: "Straightforward hop if you stay focused on La Laguna alone.",
        time: "20–40 min",
        cost: "Moderate",
      },
    ],
    highlights: [
      "UNESCO colonial grid",
      "Canarian architectural detail",
      "Café streets",
      "Cultural contrast with Santa Cruz",
    ],
    tips: ["Wear comfortable shoes for cobbles and paving"],
    faqs: [
      {
        question: "Can I visit La Laguna without a tour?",
        answer:
          "Yes by taxi or local transport if you keep the plan simple. Combine with Teide only via organised routing on most cruise clocks.",
      },
    ],
    relatedAttractionSlugs: ["mount-teide", "mercado-nuestra-senora-de-africa"],
    relatedExcursionSlug: "best-of-tenerife",
  },
  {
    slug: "anaga-rural-park",
    title: "Anaga Rural Park",
    seoTitle: "Anaga Rural Park from Santa Cruz Cruise Port",
    metaDescription:
      "Anaga Rural Park laurisilva forest for Santa Cruz cruise visitors — hiking options, Biosphere Reserve scenery and timing advice.",
    attractionName: "Anaga Rural Park",
    tagline: "Laurisilva forest ridges in a UNESCO Biosphere Reserve.",
    overview:
      "Anaga’s green montes feel a world away from the cruise terminal — ancient forest, mist and Atlantic viewpoints on Tenerife’s north-east.",
    body: [
      "Choose Hiking Montes de Anaga for a shorter moderate trail focus, or Tenerife Total Experience for scenic inclusion alongside Teide and La Laguna.",
      "Paths can be humid and uneven — match fitness honestly.",
    ],
    distanceFromPort: "North-east Tenerife — moderate road transfer",
    travelTime: "Typically under an hour to trailheads depending on route",
    timeNeeded: "2.5 hours for a focused hike; longer within full-day island formats",
    gettingThere: [
      {
        method: "Organised hiking excursion",
        detail: "Best for cruise timing and trailhead logistics.",
        time: "2.5–6 hours depending on product",
        cost: "Excursion fare",
      },
    ],
    highlights: [
      "Laurisilva forest",
      "Biosphere Reserve landscapes",
      "Hiking and viewpoints",
      "Cooler green contrast to Teide",
    ],
    tips: ["Trail shoes recommended", "Carry water"],
    faqs: [
      {
        question: "Is Anaga suitable for all fitness levels?",
        answer:
          "Scenic stops can be gentle; dedicated hiking products are moderate to active. Choose Easy scenic days if trails are not your preference.",
      },
    ],
    relatedAttractionSlugs: ["mount-teide", "la-laguna"],
    relatedExcursionSlug: "hiking-montes-de-anaga",
  },
  {
    slug: "auditorio-de-tenerife",
    title: "Auditorio de Tenerife",
    seoTitle: "Auditorio de Tenerife from the Cruise Port",
    metaDescription:
      "Auditorio de Tenerife waterfront landmark for Santa Cruz cruise visitors — walking tips and photography stops near the ship.",
    attractionName: "Auditorio de Tenerife Adán Martín",
    tagline: "Santa Cruz’s white waterfront silhouette beside the Atlantic.",
    overview:
      "The Auditorio is the city’s most recognisable modern landmark — a natural stop on any independent Santa Cruz walking day.",
    body: [
      "Combine with Plaza de España and the promenade rather than treating it as a long detour.",
      "Exterior photographs are the reliable cruise-day plan; interior visits depend on events and opening.",
    ],
    distanceFromPort: "Waterfront — walkable from many berths",
    travelTime: "Often 15–30 minutes on foot via the promenade",
    timeNeeded: "20–40 minutes for exteriors and photographs",
    gettingThere: [
      {
        method: "Walk",
        detail: "Follow the waterfront toward the distinctive white structure.",
        time: "15–30 min typical",
        cost: "Free",
      },
    ],
    highlights: ["Iconic silhouette", "Atlantic setting", "Easy photography stop"],
    tips: ["Morning light flatters the white façades"],
    faqs: [
      {
        question: "Do I need tickets?",
        answer:
          "Exterior viewing is free. Interior access depends on performances and opening arrangements.",
      },
    ],
    relatedAttractionSlugs: ["plaza-de-espana", "mercado-nuestra-senora-de-africa"],
    relatedExcursionSlug: "tenerife-total-experience",
  },
  {
    slug: "plaza-de-espana",
    title: "Plaza de España",
    seoTitle: "Plaza de España Santa Cruz — Cruise Visitor Guide",
    metaDescription:
      "Plaza de España in Santa Cruz de Tenerife for cruise passengers — orientation point, walking tips and nearby waterfront stops.",
    attractionName: "Plaza de España",
    tagline: "The social heart of Santa Cruz beside the harbour.",
    overview:
      "Plaza de España is where most independent visitors orient themselves before drifting into old-town streets, parks or the waterfront.",
    body: [
      "Use it as a meeting point and navigation anchor.",
      "It can feel busy when several ships are in — early morning is calmer.",
    ],
    distanceFromPort: "Close to the passenger terminal area",
    travelTime: "Often 10–20 minutes on foot",
    timeNeeded: "20–40 minutes, or longer with a café pause",
    gettingThere: [
      {
        method: "Walk from terminal",
        detail: "Follow city-centre and plaza signage from the cruise exit.",
        time: "10–20 min typical",
        cost: "Free",
      },
    ],
    highlights: ["Harbour setting", "Easy meeting point", "Gateway to old-town streets"],
    tips: ["Confirm your return route to the terminal before you wander further"],
    faqs: [
      {
        question: "Is Plaza de España worth lingering?",
        answer:
          "Yes as an orientation point — then continue to the Auditorio, market or café streets for depth.",
      },
    ],
    relatedAttractionSlugs: ["auditorio-de-tenerife", "mercado-nuestra-senora-de-africa"],
  },
  {
    slug: "mercado-nuestra-senora-de-africa",
    title: "Mercado de Nuestra Señora de África",
    seoTitle: "Santa Cruz Market for Cruise Passengers",
    metaDescription:
      "Mercado de Nuestra Señora de África in Santa Cruz — Canarian produce, local atmosphere and cruise-day food tips near the port.",
    attractionName: "Mercado de Nuestra Señora de África",
    tagline: "Santa Cruz’s market hall — produce, colour and everyday Canarian life.",
    overview:
      "The market is the natural food and local-life stop on an independent Santa Cruz day — more revealing than another waterfront photograph alone.",
    body: [
      "Go for atmosphere and light snacks rather than a long sit-down meal close to all-aboard.",
      "Pair with parks and shopping streets on the Walk It Yourself loop.",
    ],
    distanceFromPort: "Within the walkable city centre",
    travelTime: "Included in a Santa Cruz stroll",
    timeNeeded: "30–60 minutes",
    gettingThere: [
      {
        method: "Walk via city centre",
        detail: "Reach from Plaza de España through central streets.",
        time: "Part of city loop",
        cost: "Free entry; purchases extra",
      },
    ],
    highlights: ["Local produce", "Canarian atmosphere", "Easy cruise-day stop"],
    tips: ["Cards and cash are both useful — confirm on the day"],
    faqs: [
      {
        question: "Is the market open every day?",
        answer:
          "Opening hours vary by day and stall — check locally on arrival and keep a café Plan B.",
      },
    ],
    relatedAttractionSlugs: ["plaza-de-espana", "auditorio-de-tenerife"],
  },
];

export function getHighlightBySlug(slug: string): AttractionPage | undefined {
  return highlights.find((h) => h.slug === slug);
}

export function getAllHighlightSlugs(): string[] {
  return highlights.map((h) => h.slug);
}

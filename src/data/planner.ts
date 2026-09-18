import { SIGNATURE_EXPERIENCE_PATH, signatureTenerifeExperience } from "./signature-experience";

export interface PlannerInput {
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  travelStyle: "diy" | "guided";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const PLANNER_VISITOR_TYPES = [
  {
    id: "independent",
    label: "Independent Santa Cruz explorer",
    description: "A low-risk city day using walking, cafés and your own return buffer.",
  },
  {
    id: "teide",
    label: "First-time Tenerife visitor",
    description: "Mount Teide and island highlights with cruise-aware timing.",
  },
  {
    id: "culture",
    label: "Culture & La Laguna traveller",
    description: "UNESCO La Laguna, northern valleys and Canarian town character.",
  },
  {
    id: "hiking",
    label: "Hiking & nature traveller",
    description: "Anaga forest or north-coast trails when your fitness and hours allow.",
  },
] as const;

export const INTEREST_OPTIONS = [
  { id: "santa-cruz", label: "Santa Cruz city" },
  { id: "teide", label: "Mount Teide" },
  { id: "la-laguna", label: "La Laguna" },
  { id: "anaga", label: "Anaga hiking" },
  { id: "food", label: "Food experiences" },
  { id: "photography", label: "Photography & scenery" },
  { id: "family", label: "Family-friendly" },
  { id: "independent", label: "Independent travel" },
];

type PlanKey = "independent" | "teide" | "culture" | "hiking";

export const SANTACRUZ_DAY_PLANS: Record<
  PlanKey,
  { headline: string; summary: string; minimumHours: number; links: PlannerLink[]; dayPlan: PlannerResult["dayPlan"] }
> = {
  independent: {
    headline: "Independent Santa Cruz city day",
    summary:
      "The most flexible choice: walk from the terminal toward Plaza de España, the Auditorio waterfront, Mercado de Nuestra Señora de África and café streets.",
    minimumHours: 4,
    links: [
      {
        label: "One Day in Santa Cruz",
        href: "/guides/one-day-in-santa-cruz",
        why: "Realistic city pacing and return-to-ship advice.",
      },
      {
        label: "Walk It Yourself",
        href: "/guides/explore-independently",
        why: "DIY Santa Cruz route without an organised tour.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Walk from the cruise port into Plaza de España and the old-town streets." },
      { time: "Late morning", text: "Continue to the Auditorio waterfront and market hall." },
      { time: "Afternoon", text: "Parks, shopping streets or cafés — then return with a buffer." },
    ],
  },
  teide: {
    headline: "Mount Teide & Tenerife highlights",
    summary:
      "A guided island day with Teide National Park at the centre — our favourite first-time format when hours ashore allow.",
    minimumHours: 7,
    links: [
      {
        label: "Tenerife Total Experience",
        href: "/shore-excursions/tenerife-total-experience",
        why: "Editor’s Choice introduction for first-time cruise visitors.",
      },
      {
        label: "Mount Teide Guide",
        href: "/guides/mount-teide-guide",
        why: "What to expect from the volcanic highlands on a cruise day.",
      },
    ],
    dayPlan: [
      { time: "Meet", text: "Join your guide near the Santa Cruz passenger terminal." },
      { time: "Island highlights", text: "La Laguna context, Teide National Park and Anaga as itinerary allows." },
      { time: "Return", text: "Drive back with a generous all-aboard buffer." },
    ],
  },
  culture: {
    headline: "La Laguna & northern Tenerife",
    summary:
      "UNESCO colonial streets, forest scenery and valley viewpoints with less altitude commitment than a Teide-first day.",
    minimumHours: 6,
    links: [
      {
        label: "Best of Tenerife",
        href: "/shore-excursions/best-of-tenerife",
        why: "La Laguna, La Esperanza forest and the Orotava Valley.",
      },
      {
        label: "La Laguna Guide",
        href: "/guides/la-laguna-guide",
        why: "UNESCO colonial city context for cruise guests.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Travel inland to La Laguna’s colonial streets." },
      { time: "Midday", text: "Forest and valley viewpoints in the north." },
      { time: "Afternoon", text: "Return toward Santa Cruz with a ship buffer." },
    ],
  },
  hiking: {
    headline: "Anaga & north-coast trails",
    summary:
      "Forest or coastal hiking when your fitness and usable hours support trail time — not a coach scenic day.",
    minimumHours: 5,
    links: [
      {
        label: "Hiking Montes de Anaga",
        href: "/shore-excursions/hiking-montes-de-anaga",
        why: "Focused 2.5-hour moderate Anaga forest hike.",
      },
      {
        label: "Secrets of North Tenerife",
        href: "/shore-excursions/secrets-of-north-tenerife",
        why: "Longer hiking day with coastal paths and Masca scenery.",
      },
    ],
    dayPlan: [
      { time: "Depart", text: "Leave Santa Cruz for trailheads with cruise-aware transport." },
      { time: "Hike", text: "Forest or coastal paths as chosen." },
      { time: "Return", text: "Transfer back with a generous all-aboard buffer." },
    ],
  },
};

function parseHour(value?: string): number | null {
  if (!value) return null;
  const m = value.match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  return Number(m[1]) + Number(m[2]) / 60;
}

function usableHours(input: PlannerInput): number {
  const arrival = parseHour(input.arrivalTime);
  const departure = parseHour(input.departureTime);
  if (arrival == null || departure == null) return 8;
  let hours = departure - arrival;
  if (hours <= 0) hours += 24;
  return Math.max(1, hours - 1.5);
}

function selectPlan(input: PlannerInput, hours: number): PlanKey {
  const interests = input.interests;
  if (
    input.travelStyle === "diy" ||
    input.mobility === "limited" ||
    interests.includes("independent") ||
    interests.includes("santa-cruz") ||
    hours < 6
  ) {
    if (input.travelStyle === "guided" && hours >= 6 && !interests.includes("independent")) {
      if (interests.includes("anaga")) return "hiking";
      if (interests.includes("la-laguna")) return "culture";
      return interests.includes("teide") || interests.includes("photography") ? "teide" : "culture";
    }
    return "independent";
  }
  if (interests.includes("anaga")) return "hiking";
  if (interests.includes("la-laguna") && !interests.includes("teide")) return "culture";
  if (interests.includes("teide") || interests.includes("photography")) return "teide";
  if (interests.includes("food") && hours < 7) return "independent";
  return hours >= 7 ? "teide" : "independent";
}

/** @deprecated Compatibility alias */
/** @deprecated Compatibility alias */
export const LEGACY_DAY_PLANS = SANTACRUZ_DAY_PLANS;
export const TALLINN_DAY_PLANS = SANTACRUZ_DAY_PLANS;

export function generateSantaCruzPlan(input: PlannerInput): PlannerResult {
  const hours = usableHours(input);
  const key = selectPlan(input, hours);
  const plan = SANTACRUZ_DAY_PLANS[key];
  const partySize = input.adults + input.children;
  const excursions = [...plan.links];

  if (input.budget === "premium") {
    excursions.push({
      label: signatureTenerifeExperience.title,
      href: SIGNATURE_EXPERIENCE_PATH,
      why: "Future maximum-eight-guest Tenerife concept — in preparation and not bookable.",
    });
  }

  if (input.interests.includes("food") && key === "independent") {
    excursions.push({
      label: "Santa Cruz Food Guide",
      href: "/guides/food-guide",
      why: "Market flavours and cafés without a road day.",
    });
  }

  return {
    headline: plan.headline,
    summary: `${plan.summary} Your call provides about ${hours.toFixed(1)} usable hours for ${partySize} guest${partySize === 1 ? "" : "s"}. ${hours < plan.minimumHours ? `This is shorter than the ${plan.minimumHours}-hour minimum we recommend for this style, so prefer Santa Cruz on foot.` : ""}`.trim(),
    excursions,
    transfers: [
      {
        label: "Santa Cruz Cruise Port Guide",
        href: "/cruise-port-guide",
        why: "Terminal walking times, taxis and city access.",
      },
    ],
    stay: [],
    logistics: [
      {
        label: "Santa Cruz Ship Schedule",
        href: "/ship-schedules/santacruz",
        why: "Recheck the published arrival and departure for your call.",
      },
      {
        label: "Compare Tenerife options",
        href: "/compare",
        why: "Review honest trade-offs before booking a long road day.",
      },
    ],
    dayPlan: [
      ...plan.dayPlan,
      {
        time: "Return buffer",
        text: "Reach the Santa Cruz terminal 60–90 minutes before all-aboard; Teide and round-island days require additional road traffic contingency.",
      },
    ],
  };
}

/** @deprecated Compatibility aliases for shared World 2.0 callers */
export function generateTallinnPlan(input: PlannerInput): PlannerResult {
  return generateSantaCruzPlan(input);
}

export function generateSplitPlan(input: PlannerInput): PlannerResult {
  return generateSantaCruzPlan(input);
}

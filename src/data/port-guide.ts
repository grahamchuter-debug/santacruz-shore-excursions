import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Santa Cruz Cruise Port Guide",
  subtitle:
    "Terminal access, walking into the city, Mount Teide logistics, La Laguna, food, transport and sensible return-to-ship planning.",
  terminals: [
    {
      name: "Santa Cruz passenger terminal",
      quay: "Cruise berths on the Santa Cruz de Tenerife waterfront edge",
      usedBy: "Most cruise ships calling at Santa Cruz on Canary Islands itineraries",
      cityAccess:
        "Often a short walk to Plaza de España and the city centre depending on berth and pace; taxis available at peak turnaround",
    },
    {
      name: "Alternative harbour positions",
      quay: "Occasional alternative berths within the wider port complex",
      usedBy: "Selected calls when specific berths are assigned",
      cityAccess:
        "Walking times vary — follow terminal signage and allow a conservative buffer",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Santa Cruz",
      paragraphs: [
        "Cruise ships use Santa Cruz de Tenerife’s passenger terminal area on the city’s Atlantic waterfront. Unlike ports that strand guests far from any town, Santa Cruz places plazas, the Auditorio silhouette and café streets within a realistic independent walk for many passengers.",
        "Check the ship’s daily programme and terminal signage on arrival. Shuttle arrangements vary by line and berth; many guests walk toward Plaza de España and the old-town streets.",
        "Santa Cruz is an excellent base for a relaxed city day. Mount Teide, Anaga and round-island routes are separate journeys requiring road time and different timing.",
      ],
    },
    {
      heading: "Walking from the port",
      paragraphs: [
        "From the passenger terminal, follow signs toward the city centre and waterfront promenade rather than wandering the working port.",
        "Allow roughly 10–20 minutes to reach Plaza de España in normal conditions from many berths; exact timing depends on ship position and pace.",
        "If mobility, heat or luggage are factors, take a short taxi instead of proving a point.",
      ],
    },
    {
      heading: "Santa Cruz city highlights",
      paragraphs: [
        "Plaza de España anchors most city visits — allow time to absorb the harbour setting rather than a single exterior photograph.",
        "The Auditorio de Tenerife and waterfront promenade deliver the city’s most recognisable silhouette.",
        "Mercado de Nuestra Señora de África is the natural food and local-life stop before looping through parks and shopping streets.",
      ],
    },
    {
      heading: "Food and Canarian flavour",
      paragraphs: [
        "Market stalls, cafés and Canarian kitchens sit inside a walkable city centre — you do not need a long transfer to eat well.",
        "Build lunch into your Santa Cruz loop so you stay oriented toward the ship.",
        "A guided island day often includes a meal window; otherwise independent café hopping works well in the city.",
      ],
    },
    {
      heading: "Transport beyond Santa Cruz",
      paragraphs: [
        "Taxis wait at or near the terminal when ships are in port. Show the driver the cruise terminal or your ship name for the return.",
        "La Laguna is a short inland hop; Teide and west-coast days need substantially more road time.",
        "Island days need operators who plan backwards from all-aboard — a best-case journey time is not an adequate return plan.",
      ],
    },
    {
      heading: "A realistic independent city day",
      paragraphs: [
        "Start toward Plaza de España and the Auditorio waterfront before coach groups concentrate at the obvious photo stops.",
        "Visit the market, then spend the afternoon in parks, shopping streets or cafés without another long transfer.",
        "Keep the final hour ashore oriented toward the terminal so an unexpected queue does not threaten all-aboard.",
      ],
    },
    {
      heading: "Return-to-ship planning",
      paragraphs: [
        "Confirm all-aboard time — earlier than published departure. For a Santa Cruz city day, reach the terminal 60–90 minutes before all-aboard.",
        "For Teide or round-island drives, the operator should plan with road and altitude-weather contingency.",
        "Independent travellers are responsible for reaching the ship. If a long road trip does not leave a conservative margin, choose the city instead.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "Can I walk into Santa Cruz from the cruise terminal?",
      answer:
        "Yes. Many passengers reach Plaza de España and the city centre within roughly 10–20 minutes on foot from the main passenger terminal area.",
    },
    {
      question: "What can I see close to Santa Cruz port?",
      answer:
        "Plaza de España, the Auditorio waterfront, Mercado de Nuestra Señora de África, parks and café streets are all within a compact walking area for most guests.",
    },
    {
      question: "Do I need transport for Santa Cruz itself?",
      answer:
        "Usually not. The centre is walkable from many berths, though heat and mobility may suit a short taxi.",
    },
    {
      question: "Is Mount Teide an easy independent trip from the port?",
      answer:
        "Rarely on a cruise day. Road time, altitude weather and return risk make an organised excursion the more realistic approach.",
    },
    {
      question: "How early should I be back?",
      answer:
        "Reach the terminal 60–90 minutes before all-aboard for a city day, with a larger road contingency for Teide or round-island routes.",
    },
  ] as FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;

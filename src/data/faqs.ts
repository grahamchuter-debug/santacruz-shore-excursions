import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Can I explore Santa Cruz without an excursion?",
    answer:
      "Yes. Santa Cruz is attractive for a relaxed independent day — Plaza de España, the Auditorio waterfront, Mercado de Nuestra Señora de África and café streets sit within easy reach of the cruise terminal.",
  },
  {
    question: "Should first-time visitors stay in Santa Cruz or explore Tenerife?",
    answer:
      "On a first visit we genuinely recommend exploring beyond Santa Cruz — Mount Teide, La Laguna and Tenerife’s volcanic landscapes are the island’s story. Save a pure city day for a return call or a shorter, more relaxed port window.",
  },
  {
    question: "How far is Mount Teide from Santa Cruz cruise port?",
    answer:
      "Road time into Teide National Park is typically around 1–1.5 hours each way depending on traffic, weather and exact stops. Organised transport and a generous return buffer matter.",
  },
  {
    question: "How much walking is involved in Santa Cruz?",
    answer:
      "The city centre is mostly easy walking on pavements and waterfront promenades. Island hiking excursions involve moderate to active trail walking — match the excursion pace to your fitness.",
  },
  {
    question: "Is Santa Cruz suitable for limited mobility?",
    answer:
      "Much of central Santa Cruz is flatter and more accessible than mountain or forest days. Teide and hiking itineraries involve coaches, altitude and uneven ground — ask about step-free alternatives before booking.",
  },
  {
    question: "How much free time should I allow before all-aboard?",
    answer:
      "Protect 60–90 minutes after sightseeing for a city day. Longer Teide or round-island days need the larger end of that buffer plus road-traffic contingency.",
  },
  {
    question: "What is your Editor's Choice?",
    answer:
      "Tenerife Total Experience — the best SEG tour visiting Mount Teide plus Tenerife highlights for first-time cruise visitors.",
  },
  {
    question: "What currency is used?",
    answer:
      "Spain and the Canary Islands use the euro (EUR). We do not convert or publish placeholder prices; live booking opens once selling prices are verified.",
  },
];

export function getAllFaqs(): FAQ[] {
  const seen = new Set<string>();
  const merged: FAQ[] = [];
  for (const faq of [...getHomepageFaqs(), ...extraFaqs]) {
    if (seen.has(faq.question)) continue;
    seen.add(faq.question);
    merged.push(faq);
  }
  return merged;
}

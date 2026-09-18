import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { CruisePlanner } from "@/components/CruisePlanner";

const path = "/cruise-planner";
const description =
  "Build a personalised Santa Cruz cruise plan. Enter your port times, party size, interests, mobility, budget and travel style for tailored Tenerife recommendations.";

export const metadata = buildMetadata({
  title: "Santa Cruz Cruise Planner — Tenerife Port Day Itinerary",
  description,
  path,
  keywords: ["Santa Cruz cruise planner", "Tenerife cruise day plan", "Santa Cruz port day itinerary", "Mount Teide from Santa Cruz planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Santa Cruz Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Santa Cruz Cruise Planner", description, path })]} />
      <PageHero
        title="Santa Cruz Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial recommendations for Santa Cruz walks, Mount Teide, La Laguna and independent days."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <CruisePlanner />
        </div>
      </section>
    </>
  );
}

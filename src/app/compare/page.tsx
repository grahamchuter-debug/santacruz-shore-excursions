import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { comparisons, getComparisonDisplayTitle } from "@/data/comparisons";
import { getComparisonImage } from "@/lib/images";

const path = "/compare";
const description =
  "Honest comparisons for Santa Cruz cruise passengers — city or Mount Teide, tour or independent, and the best Tenerife excursions for different travellers.";

export const metadata = buildMetadata({
  title: "Compare Tenerife Cruise Options from Santa Cruz",
  description,
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Compare", path },
];

export default function CompareHubPage() {
  const image = getComparisonImage("tour-or-independent");
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Compare Tenerife Cruise Options", description, path })]} />
      <PageHero
        title="Compare Tenerife Cruise Options"
        subtitle="Editorial comparisons to help you choose between Santa Cruz on foot, Mount Teide, La Laguna and different touring styles."
        image={image}
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-4 sm:grid-cols-2">
            {comparisons.map((c) => (
              <Link key={c.slug} href={`/compare/${c.slug}`} className="card-feature group">
                <h2 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                  {getComparisonDisplayTitle(c)}
                </h2>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{c.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

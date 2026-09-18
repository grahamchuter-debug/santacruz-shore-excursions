import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { highlights } from "@/data/highlights";
import { experiencePages } from "@/data/experiences";
import { getHighlightImage, getGuideImage, guidesHubImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

const path = "/guides";
const description =
  "Tenerife cruise planning guides from Santa Cruz — Mount Teide, La Laguna, Anaga, Walk It Yourself and practical port-day advice.";

export const metadata = buildMetadata({
  title: "Tenerife Cruise Planning Guides from Santa Cruz",
  description,
  path,
  keywords: [
    "Santa Cruz cruise port guide",
    "Mount Teide from Santa Cruz",
    "Santa Cruz shore excursions guide",
    "La Laguna from Santa Cruz",
    "Tenerife cruise guide",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Planning Guides", path },
];

export default function GuidesHubPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({ title: "Tenerife Cruise Planning Guides from Santa Cruz", description, path }),
        ]}
      />
      <PageHero
        title="Tenerife Cruise Planning Guides"
        subtitle="Your gateway to Tenerife — Mount Teide, La Laguna, Anaga, Santa Cruz walking days and practical advice for every type of cruise passenger."
        image={guidesHubImage}
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />

          <h2 className="section-title mt-8">Places &amp; experiences</h2>
          <p className="section-subtitle">Practical guides to Tenerife highlights with transfer times and return-to-ship advice.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h) => {
              const img = getHighlightImage(h.slug);
              return (
                <Link key={h.slug} href={`/guides/${h.slug}`} className="card-editorial group overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <ResponsiveImage
                      image={img}
                      role="card"
                      imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                      {h.attractionName}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">{h.tagline}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <h2 className="section-title mt-16">Port-day guides</h2>
          <p className="section-subtitle">How to shape your hours ashore — independently or with a guided Tenerife day.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experiencePages.map((g) => {
              const img = getGuideImage(g.imageKey ?? "historic");
              return (
                <Link key={g.slug} href={`/guides/${g.slug}`} className="nav-card group">
                  <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-xl">
                    <ResponsiveImage
                      image={img}
                      role="card"
                      imgClassName="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="font-display text-base font-bold text-gray-900 group-hover:text-coastal-800">
                    {g.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2">{g.tagline}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";

const SANTACRUZ_LINKS = [
  {
    title: "Tour or independent?",
    description:
      "Honest comparison for Santa Cruz cruise passengers — when to walk the city and when Tenerife beyond the harbour helps.",
    href: "/compare/tour-or-independent",
  },
  {
    title: "Best Santa Cruz shore excursions",
    description:
      "Our curated collection — Editor’s Choice first, with honest trade-offs for every option.",
    href: "/compare/best-shore-excursions",
  },
  {
    title: "Santa Cruz or Mount Teide?",
    description:
      "City café day or Spain’s highest peak — which to prioritise on your call.",
    href: "/compare/city-or-teide",
  },
  {
    title: "Can you explore independently?",
    description:
      "When a flexible Santa Cruz foot day is the better choice — and when organised transport earns its place.",
    href: "/guides/explore-independently",
  },
  {
    title: "First time in Tenerife",
    description:
      "A practical first-call plan: Teide, La Laguna, or a relaxed Santa Cruz walk.",
    href: "/compare/first-time-tenerife-day",
  },
  {
    title: "Santa Cruz cruise schedules",
    description:
      "Confirmed ship-call data will appear here once schedules are ready for publication.",
    href: "/ship-schedules/santacruz",
  },
];

export function DestinationQuickLinks() {
  return (
    <section className="section-padding bg-coastal-50 border-t border-coastal-100">
      <div className="container-wide">
        <p className="section-eyebrow">Keep planning</p>
        <h2 className="section-title mt-2">Your Santa Cruz planning hub</h2>
        <p className="section-subtitle">
          Use these guides and comparisons to shape a port day that matches your ship hours, energy
          and curiosity — whether you stay in Santa Cruz or discover Tenerife beyond the harbour.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SANTACRUZ_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="card-feature group">
              <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                {link.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/guides" className="btn-secondary text-sm">
            All Santa Cruz planning guides
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const apps = [
  {
    id: "cavaro",
    name: "Cavaro Cigar",
    description: "Your personal cigar companion — track your collection, discover new blends, and log tasting notes.",
    accentClass: "bg-pastel-peach",
    icon: "🌿",
    href: "#",
  },
  // More apps can be added here in the future
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pastel-mint/40 via-pastel-lavender/30 to-pastel-sky/40" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-bold text-pastel-charcoal mb-4">
            Glover Labs
          </h1>
          <p className="text-xl text-pastel-charcoal/80 max-w-2xl">
            Crafting thoughtful software experiences. Explore our apps below.
          </p>
        </div>
      </section>

      {/* App tiles */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-pastel-charcoal mb-10">
          Our Apps
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <Link
              key={app.id}
              href={app.href}
              className="group block rounded-2xl border-2 border-pastel-charcoal/10 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-pastel-charcoal/20 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-xl ${app.accentClass} flex items-center justify-center text-2xl mb-4`}
              >
                {app.icon}
              </div>
              <h3 className="text-xl font-semibold text-pastel-charcoal mb-2 group-hover:text-pastel-mint transition-colors">
                {app.name}
              </h3>
              <p className="text-pastel-charcoal/70 text-sm leading-relaxed">
                {app.description}
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-pastel-charcoal/80 group-hover:text-pastel-mint transition-colors">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Support CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-2xl bg-pastel-lavender/30 border border-pastel-lavender/50 p-8 md:p-12 text-center">
          <h3 className="text-xl font-semibold text-pastel-charcoal mb-2">
            Need help with an app?
          </h3>
          <p className="text-pastel-charcoal/70 mb-6 max-w-xl mx-auto">
            Our support team is here to assist you. Whether you have questions,
            found a bug, or need guidance — we&apos;ve got you covered.
          </p>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 rounded-full bg-pastel-charcoal text-white px-6 py-3 font-medium hover:bg-pastel-charcoal/90 transition-colors"
          >
            Get Support
          </Link>
        </div>
      </section>

      <footer className="border-t border-pastel-charcoal/10 mt-20 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-pastel-charcoal/60">
          © {new Date().getFullYear()} Glover Labs. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

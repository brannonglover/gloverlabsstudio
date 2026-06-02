import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { StoreBadges } from "@/components/StoreBadges";

type AppTile = {
  id: string;
  name: string;
  description: string;
  logo: string;
  href?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
};

const apps: AppTile[] = [
  {
    id: "cavaro",
    name: "Cavaro Cigar",
    description:
      "Your personal cigar companion — track your collection, discover new blends, and log tasting notes.",
    logo: "/images/cavaro-icon.png",
    href: "https://cavaroapp.com",
    appStoreUrl: "https://apps.apple.com/app/cavaro",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.brannonglover.cavaro",
  },
  {
    id: "bag-count",
    name: "Bag Count",
    description:
      "Your cornhole scoring companion — track bags to 21, run the clock, and save game history.",
    logo: "/images/bag-count-icon.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.brannonglover.bagcount",
  },
  {
    id: "bikeops",
    name: "Bike Ops",
    description:
      "Bike repair shop software for bookings, repair boards, customer messaging, payments, and review follow-ups.",
    logo: "/images/bikeops-icon.png",
    href: "https://bikeops.co",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.brannonglover.bikeops.app",
  },
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
            <div
              key={app.id}
              className="group flex h-full flex-col rounded-2xl border-2 border-pastel-charcoal/10 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-pastel-charcoal/20"
            >
              <Image
                src={app.logo}
                alt={`${app.name} app icon`}
                width={64}
                height={64}
                className="mb-4 h-16 w-16 rounded-[22%] shadow-sm ring-1 ring-pastel-charcoal/10"
              />
              <h3 className="text-xl font-semibold text-pastel-charcoal mb-2">
                {app.name}
              </h3>
              <p className="flex-1 text-pastel-charcoal/70 text-sm leading-relaxed">
                {app.description}
              </p>
              {app.href ? (
                <Link
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-medium text-pastel-charcoal/80 hover:text-pastel-mint transition-colors"
                >
                  Learn more →
                </Link>
              ) : null}
              <StoreBadges appStoreUrl={app.appStoreUrl} />
            </div>
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

      <SiteFooter />
    </main>
  );
}

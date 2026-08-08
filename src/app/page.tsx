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
  },
  {
    id: "bag-count",
    name: "Bag Count",
    description:
      "Your cornhole scoring companion — track bags to 21, run the clock, and save game history.",
    logo: "/images/bag-count-icon.png",
    appStoreUrl: "https://apps.apple.com/app/bag-count",
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
      <section className="relative overflow-hidden hero-mesh">
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Indie software studio
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink md:text-6xl mb-4 text-balance">
            Glover Labs
          </h1>
          <p className="text-xl text-ink-muted max-w-2xl leading-relaxed">
            Crafting thoughtful software experiences. Explore our apps below.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink mb-10">
          Our Apps
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <div
              key={app.id}
              className="group flex h-full flex-col card-surface-interactive p-6"
            >
              <Image
                src={app.logo}
                alt={`${app.name} app icon`}
                width={64}
                height={64}
                className="mb-4 h-16 w-16 rounded-[22%] shadow-[0_2px_8px_-2px_rgba(15,23,42,0.12)] ring-1 ring-border ring-offset-2 ring-offset-surface-elevated"
              />
              <h3 className="font-display text-xl font-semibold text-ink mb-2">
                {app.name}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-ink-muted">
                {app.description}
              </p>
              {app.href ? (
                <Link
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link mt-4 inline-block text-sm"
                >
                  Learn more →
                </Link>
              ) : null}
              <StoreBadges appStoreUrl={app.appStoreUrl} playStoreUrl={app.playStoreUrl} />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="cta-panel">
          <h3 className="font-display text-xl font-semibold text-ink mb-2">
            Need help with an app?
          </h3>
          <p className="mx-auto mb-6 max-w-xl text-ink-muted">
            Our support team is here to assist you. Whether you have questions,
            found a bug, or need guidance — we&apos;ve got you covered.
          </p>
          <Link href="/support" className="btn-primary">
            Get Support
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

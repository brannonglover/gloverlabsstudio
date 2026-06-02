import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Glover Labs | Software Studio",
  description: "Glover Labs - Showcasing innovative apps and digital experiences",
};

const navLinkClass =
  "text-sm font-medium text-ink-muted transition-colors hover:text-accent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${outfit.variable} font-sans antialiased page-mesh`}
      >
        <header className="sticky top-0 z-50 border-b border-border/80 bg-surface-elevated/75 backdrop-blur-md">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="font-display text-xl font-semibold tracking-tight text-ink transition-colors hover:text-accent"
            >
              Glover Labs
            </Link>
            <div className="flex flex-wrap gap-6">
              <Link href="/" className={navLinkClass}>
                Apps
              </Link>
              <Link href="/support" className={navLinkClass}>
                Support
              </Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

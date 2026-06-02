import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Glover Labs | Software Studio",
  description: "Glover Labs - Showcasing innovative apps and digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <header className="border-b border-pastel-charcoal/20 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold text-pastel-charcoal hover:text-pastel-mint transition-colors">
              Glover Labs
            </Link>
            <div className="flex flex-wrap gap-6">
              <Link href="/" className="text-pastel-charcoal/80 hover:text-pastel-mint transition-colors">Work</Link>
              <Link href="/support" className="text-pastel-charcoal/80 hover:text-pastel-mint transition-colors">Support</Link>
              <Link href="/terms" className="text-pastel-charcoal/80 hover:text-pastel-mint transition-colors">Terms</Link>
              <Link href="/privacy" className="text-pastel-charcoal/80 hover:text-pastel-mint transition-colors">Privacy</Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Support | Glover Labs",
  description: "Get help with Glover Labs apps — Cavaro Cigar and more.",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen">
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl font-bold text-pastel-charcoal mb-4">
          Support
        </h1>
        <p className="text-lg text-pastel-charcoal/80 mb-12">
          We&apos;re here to help. Choose how you&apos;d like to get in touch.
        </p>

        <div className="space-y-8">
          {/* App-specific support */}
          <div className="rounded-2xl border border-pastel-charcoal/10 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-4">
              App-specific support
            </h2>
            <p className="text-pastel-charcoal/70 mb-4">
              Select the app you need help with:
            </p>
            <div className="space-y-3">
              <a
                href="mailto:support@gloverlabs.com?subject=Cavaro%20Cigar%20Support"
                className="flex items-center gap-3 rounded-xl border border-pastel-charcoal/10 p-4 hover:border-pastel-peach/50 hover:bg-pastel-peach/10 transition-colors"
              >
                <span className="text-2xl">🌿</span>
                <div>
                  <p className="font-medium text-pastel-charcoal">Cavaro Cigar</p>
                  <p className="text-sm text-pastel-charcoal/60">
                    Collection tracking, tasting notes, app issues
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* General support */}
          <div className="rounded-2xl border border-pastel-charcoal/10 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-4">
              General inquiries
            </h2>
            <p className="text-pastel-charcoal/70 mb-4">
              For general questions, feedback, or partnership inquiries:
            </p>
            <a
              href="mailto:hello@gloverlabs.com"
              className="inline-flex items-center gap-2 text-pastel-charcoal font-medium hover:text-pastel-mint transition-colors"
            >
              hello@gloverlabs.com →
            </a>
          </div>

          {/* FAQ teaser */}
          <div className="rounded-2xl bg-pastel-sky/20 border border-pastel-sky/40 p-6">
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-2">
              Common questions
            </h2>
            <ul className="space-y-2 text-pastel-charcoal/70 text-sm">
              <li>• How do I reset my password?</li>
              <li>• My data isn&apos;t syncing — what should I do?</li>
              <li>• Can I export my cigar collection?</li>
              <li>• How do I report a bug?</li>
            </ul>
            <p className="mt-4 text-sm text-pastel-charcoal/60">
              Include your app name and a brief description when you reach out.
              We typically respond within 24–48 hours.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

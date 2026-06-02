import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Support | Glover Labs",
  description: "Get help with Glover Labs apps — Cavaro Cigar and more.",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h1 className="page-header mb-4 font-display">Support</h1>
        <p className="mb-12 text-lg text-ink-muted">
          We&apos;re here to help. Choose how you&apos;d like to get in touch.
        </p>

        <div className="space-y-8">
          <div className="card-surface p-6">
            <h2 className="section-title mb-4">App-specific support</h2>
            <p className="mb-4 text-ink-muted">
              Select the app you need help with:
            </p>
            <div className="space-y-3">
              <a
                href="mailto:support@gloverlabs.com?subject=Cavaro%20Cigar%20Support"
                className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-accent/30 hover:bg-accent-soft/50"
              >
                <span className="text-2xl" aria-hidden>
                  🌿
                </span>
                <div>
                  <p className="font-medium text-ink">Cavaro Cigar</p>
                  <p className="text-sm text-ink-muted">
                    Collection tracking, tasting notes, app issues
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="card-surface p-6">
            <h2 className="section-title mb-4">General inquiries</h2>
            <p className="mb-4 text-ink-muted">
              For general questions, feedback, or partnership inquiries:
            </p>
            <a href="mailto:hello@gloverlabs.com" className="text-link">
              hello@gloverlabs.com →
            </a>
          </div>

          <div className="rounded-2xl border border-warm/20 bg-warm-soft/60 p-6">
            <h2 className="section-title mb-2">Common questions</h2>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li>• How do I reset my password?</li>
              <li>• My data isn&apos;t syncing — what should I do?</li>
              <li>• Can I export my cigar collection?</li>
              <li>• How do I report a bug?</li>
            </ul>
            <p className="mt-4 text-sm text-ink-muted/80">
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

import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Service | Glover Labs",
  description:
    "Terms of Service for Glover Labs mobile apps and related services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl font-bold text-pastel-charcoal mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-pastel-charcoal/60 mb-12">
          Last updated: June 2, 2026
        </p>

        <div className="space-y-8 text-pastel-charcoal/80 leading-relaxed">
          <section>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to
              and use of mobile applications, websites, and related services
              (collectively, the &quot;Services&quot;) offered by Glover Labs
              (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By
              downloading, installing, or using any of our Services, you agree to
              these Terms. If you do not agree, do not use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              1. Our Services
            </h2>
            <p>
              Glover Labs develops and publishes software applications and
              related digital experiences. These Terms apply to all current and
              future apps and Services we offer unless a specific app provides
              supplemental terms that expressly override these Terms for that
              app.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              2. Eligibility and accounts
            </h2>
            <p>
              You must be able to form a binding contract in your jurisdiction
              to use the Services. Some features may require an account. You are
              responsible for maintaining the confidentiality of your account
              credentials and for all activity under your account. Notify us
              promptly at{" "}
              <a
                href="mailto:support@gloverlabs.com"
                className="text-pastel-charcoal font-medium hover:text-pastel-mint transition-colors"
              >
                support@gloverlabs.com
              </a>{" "}
              if you suspect unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              3. Acceptable use
            </h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Use the Services in violation of applicable law or third-party
                rights
              </li>
              <li>
                Reverse engineer, decompile, or attempt to extract source code
                except where permitted by law
              </li>
              <li>
                Interfere with or disrupt the Services, servers, or networks
              </li>
              <li>
                Upload malware, spam, or content that is unlawful, harmful, or
                infringing
              </li>
              <li>
                Access the Services through automated means without our prior
                written permission
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              4. Your content
            </h2>
            <p>
              You may submit or store content through the Services (for example,
              notes, scores, or profile information). You retain ownership of
              your content. You grant us a limited license to host, process, and
              display your content solely to operate and improve the Services.
              You represent that you have the rights needed to provide that
              content.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              5. Purchases and subscriptions
            </h2>
            <p>
              Some Services may offer in-app purchases or subscriptions processed
              by Apple, Google, or other platform providers. Payment, billing,
              refunds, and subscription management are subject to the
              applicable store&apos;s terms. We do not control store billing
              policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              6. Intellectual property
            </h2>
            <p>
              The Services, including software, design, trademarks, and
              documentation, are owned by Glover Labs or our licensors and are
              protected by intellectual property laws. These Terms do not grant
              you any right to use our branding except as allowed by the
              Services themselves.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              7. Disclaimers
            </h2>
            <p>
              THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
              AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS,
              IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE
              UNINTERRUPTED, ERROR-FREE, OR SECURE.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              8. Limitation of liability
            </h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, GLOVER LABS AND ITS
              AFFILIATES, OFFICERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR
              ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM
              YOUR USE OF THE SERVICES. OUR TOTAL LIABILITY FOR ANY CLAIM
              RELATING TO THE SERVICES IS LIMITED TO THE GREATER OF (A) THE
              AMOUNT YOU PAID US FOR THE SERVICE GIVING RISE TO THE CLAIM IN THE
              TWELVE MONTHS BEFORE THE CLAIM OR (B) ONE HUNDRED U.S. DOLLARS
              (USD $100).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              9. Termination
            </h2>
            <p>
              You may stop using the Services at any time. We may suspend or
              terminate access if you violate these Terms or if we discontinue a
              Service. Provisions that by their nature should survive termination
              will survive (including intellectual property, disclaimers, and
              limitations of liability).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              10. Changes
            </h2>
            <p>
              We may update these Terms from time to time. We will post the
              revised Terms on this page and update the &quot;Last updated&quot;
              date. Continued use after changes become effective constitutes
              acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              11. Governing law
            </h2>
            <p>
              These Terms are governed by the laws of the United States and the
              State of Texas, without regard to conflict-of-law principles,
              except where mandatory local consumer protection laws apply in
              your country of residence.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              12. Contact
            </h2>
            <p>
              Questions about these Terms:{" "}
              <a
                href="mailto:hello@gloverlabs.com"
                className="text-pastel-charcoal font-medium hover:text-pastel-mint transition-colors"
              >
                hello@gloverlabs.com
              </a>
              . App support:{" "}
              <Link
                href="/support"
                className="text-pastel-charcoal font-medium hover:text-pastel-mint transition-colors"
              >
                Support page
              </Link>
              . See also our{" "}
              <Link
                href="/privacy"
                className="text-pastel-charcoal font-medium hover:text-pastel-mint transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | Glover Labs",
  description:
    "Privacy Policy describing how Glover Labs collects, uses, and protects information across our apps.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl font-bold text-pastel-charcoal mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-pastel-charcoal/60 mb-12">
          Last updated: June 2, 2026
        </p>

        <div className="space-y-8 text-pastel-charcoal/80 leading-relaxed">
          <section>
            <p>
              Glover Labs (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              respects your privacy. This Privacy Policy explains how we collect,
              use, disclose, and protect information when you use our mobile
              applications, websites, and related services (collectively, the
              &quot;Services&quot;). It applies to all apps published by Glover
              Labs unless a specific app links to a separate policy that
              expressly supplements this one.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              1. Information we collect
            </h2>
            <p className="mb-3">
              Depending on which Service you use and the features you enable, we
              may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-pastel-charcoal">Account information</strong>{" "}
                — such as name, email address, and authentication identifiers if
                you create an account or sign in
              </li>
              <li>
                <strong className="text-pastel-charcoal">App content you provide</strong>{" "}
                — such as profiles, preferences, notes, scores, bookings, or
                other data you enter into an app
              </li>
              <li>
                <strong className="text-pastel-charcoal">Usage and device data</strong>{" "}
                — such as app version, device type, operating system, crash logs,
                and general interaction data to operate and improve the Services
              </li>
              <li>
                <strong className="text-pastel-charcoal">Purchase information</strong>{" "}
                — subscription or in-app purchase status as reported by Apple,
                Google, or other payment platforms (we do not receive your full
                payment card number from those platforms)
              </li>
              <li>
                <strong className="text-pastel-charcoal">Communications</strong> — if
                you contact support, we collect the information you send us
              </li>
            </ul>
            <p className="mt-3">
              Some apps may request optional permissions (for example,
              notifications or photos). We use those permissions only for the
              features described in the app.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              2. How we use information
            </h2>
            <p className="mb-3">We use information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and personalize the Services</li>
              <li>Authenticate users and secure accounts</li>
              <li>Process subscriptions and restore purchases where applicable</li>
              <li>Respond to support requests and communicate with you</li>
              <li>Monitor performance, fix bugs, and improve our apps</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              3. Legal bases (EEA/UK users)
            </h2>
            <p>
              Where applicable law requires a legal basis, we process personal
              data based on performance of a contract (providing the Services),
              legitimate interests (security, improvement, and analytics in a
              limited way), consent (where you opt in, such as certain
              notifications), and legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              4. How we share information
            </h2>
            <p className="mb-3">
              We do not sell your personal information. We may share information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                With service providers who help us host data, send email,
                analyze crashes, or operate infrastructure, under contractual
                obligations to protect your data
              </li>
              <li>
                With platform providers (such as Apple or Google) as needed for
                app distribution, sign-in, or payments
              </li>
              <li>
                If required by law, regulation, legal process, or to protect
                rights, safety, and security
              </li>
              <li>
                In connection with a merger, acquisition, or sale of assets, with
                notice where required by law
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              5. Data retention
            </h2>
            <p>
              We retain information for as long as needed to provide the
              Services, comply with legal obligations, resolve disputes, and
              enforce agreements. You may request deletion of account-associated
              data as described below.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              6. Security
            </h2>
            <p>
              We use reasonable administrative, technical, and organizational
              measures designed to protect information. No method of transmission
              or storage is completely secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              7. Children
            </h2>
            <p>
              Our Services are not directed to children under 13 (or the minimum
              age required in your jurisdiction). We do not knowingly collect
              personal information from children. If you believe a child has
              provided us personal information, contact us and we will take
              appropriate steps to delete it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              8. Your choices and rights
            </h2>
            <p className="mb-3">
              Depending on where you live, you may have rights to access, correct,
              delete, or export personal information, or to object to or restrict
              certain processing. To make a request, email{" "}
              <a
                href="mailto:hello@gloverlabs.com"
                className="text-pastel-charcoal font-medium hover:text-pastel-mint transition-colors"
              >
                hello@gloverlabs.com
              </a>
              . We may need to verify your identity before responding.
            </p>
            <p>
              You can also adjust permissions in your device settings and, where
              offered, in-app privacy controls. California residents may have
              additional rights under the CCPA/CPRA; we do not sell personal
              information as defined by those laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              9. International transfers
            </h2>
            <p>
              We may process information in the United States and other countries
              where we or our providers operate. When we transfer data
              internationally, we use appropriate safeguards where required by
              applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              10. Third-party links and services
            </h2>
            <p>
              The Services may link to third-party websites or integrate
              third-party services. Their privacy practices are governed by their
              own policies, not this one.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              11. Changes to this policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will post
              the updated policy on this page and revise the &quot;Last
              updated&quot; date. Material changes may be communicated through the
              app or by email where appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pastel-charcoal mb-3">
              12. Contact us
            </h2>
            <p>
              Privacy questions or requests:{" "}
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
                href="/terms"
                className="text-pastel-charcoal font-medium hover:text-pastel-mint transition-colors"
              >
                Terms of Service
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

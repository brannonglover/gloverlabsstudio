import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-pastel-charcoal/10 mt-20 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-pastel-charcoal/60 space-y-3">
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <Link
            href="/terms"
            className="hover:text-pastel-mint transition-colors"
          >
            Terms of Service
          </Link>
          <span aria-hidden="true">·</span>
          <Link
            href="/privacy"
            className="hover:text-pastel-mint transition-colors"
          >
            Privacy Policy
          </Link>
          <span aria-hidden="true">·</span>
          <Link
            href="/support"
            className="hover:text-pastel-mint transition-colors"
          >
            Support
          </Link>
        </nav>
        <p>© {new Date().getFullYear()} Glover Labs. All rights reserved.</p>
      </div>
    </footer>
  );
}

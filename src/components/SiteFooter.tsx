import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border py-10">
      <div className="mx-auto max-w-6xl space-y-3 px-6 text-center text-sm text-ink-muted">
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <Link href="/terms" className="text-link text-sm">
            Terms of Service
          </Link>
          <span aria-hidden="true" className="text-border">
            ·
          </span>
          <Link href="/privacy" className="text-link text-sm">
            Privacy Policy
          </Link>
          <span aria-hidden="true" className="text-border">
            ·
          </span>
          <Link href="/support" className="text-link text-sm">
            Support
          </Link>
        </nav>
        <p>© {new Date().getFullYear()} Glover Labs. All rights reserved.</p>
      </div>
    </footer>
  );
}

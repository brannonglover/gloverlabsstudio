type StoreBadgesProps = {
  appStoreUrl?: string;
};

function AppStoreBadge({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
      className="inline-flex h-10 transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pastel-charcoal"
    >
      <svg
        viewBox="0 0 120 40"
        className="h-10 w-auto"
        role="img"
        aria-hidden
      >
        <rect width="120" height="40" rx="6" fill="#000" />
        <path
          fill="#fff"
          d="M24.77 20.3c.02-2.31 1.89-3.42 1.97-3.48-1.07-1.56-2.74-1.77-3.33-1.8-1.42-.14-2.77.84-3.49.84-.72 0-1.83-.82-3.01-.8-1.55.02-2.98.9-3.78 2.29-1.61 2.8-.41 6.95 1.16 9.23.77 1.12 1.69 2.38 2.9 2.33 1.17-.05 1.61-.76 3.02-.76 1.41 0 1.81.76 3.05.74 1.26-.02 2.06-1.14 2.83-2.27.89-1.3 1.26-2.56 1.28-2.62-.03-.01-2.46-.95-2.48-3.76zm-2.2-6.9c.64-.78 1.07-1.87.95-2.95-.92.04-2.03.61-2.69 1.39-.59.68-1.1 1.77-.96 2.82 1.02.08 2.06-.52 2.7-1.26z"
        />
        <text
          x="44"
          y="14"
          fill="#fff"
          fontSize="8"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.02em"
        >
          Download on the
        </text>
        <text
          x="44"
          y="28"
          fill="#fff"
          fontSize="14"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="600"
          letterSpacing="-0.02em"
        >
          App Store
        </text>
      </svg>
    </a>
  );
}

export function StoreBadges({ appStoreUrl }: StoreBadgesProps) {
  if (!appStoreUrl) return null;

  return (
    <div className="mt-auto flex flex-wrap gap-2 pt-6">
      <AppStoreBadge href={appStoreUrl} />
    </div>
  );
}

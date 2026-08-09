type StoreBadgesProps = {
  appStoreUrl?: string;
  playStoreUrl?: string;
};

function AppStoreBadge({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
      className="inline-flex h-10 transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <svg
        viewBox="0 0 120 40"
        className="h-10 w-auto"
        role="img"
        aria-hidden
      >
        <rect width="120" height="40" rx="6" fill="#0f172a" stroke="#c8d3df" strokeWidth="0.5" />
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

function PlayStoreBadge({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get it on Google Play"
      className="inline-flex h-10 transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <svg
        viewBox="0 0 135 40"
        className="h-10 w-auto"
        role="img"
        aria-hidden
      >
        <rect width="135" height="40" rx="6" fill="#0f172a" stroke="#c8d3df" strokeWidth="0.5" />
        <path
          fill="#00d2ff"
          d="M13.6 7.28a2.1 2.1 0 0 0-.48 1.47v22.5c0 .57.17 1.07.49 1.47l.08.08L25.2 21.28v-.56L13.68 9.2z"
        />
        <path
          fill="#00f076"
          d="M29.04 25.12l-3.84-3.84v-.56l3.84-3.84.09.05 4.55 2.58c1.3.74 1.3 1.94 0 2.68l-4.55 2.58z"
        />
        <path
          fill="#f0c800"
          d="M29.13 25.07L25.2 21.14 13.6 32.72c.43.45 1.13.51 1.94.06l13.59-7.71"
        />
        <path
          fill="#f04848"
          d="M29.13 14.93L15.54 7.22c-.81-.45-1.51-.4-1.94.06L25.2 18.86l3.93-3.93z"
        />
        <text
          x="42"
          y="13"
          fill="#fff"
          fontSize="7"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.03em"
        >
          GET IT ON
        </text>
        <text
          x="42"
          y="28"
          fill="#fff"
          fontSize="14"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="600"
          letterSpacing="-0.02em"
        >
          Google Play
        </text>
      </svg>
    </a>
  );
}

export function StoreBadges({ appStoreUrl, playStoreUrl }: StoreBadgesProps) {
  if (!appStoreUrl && !playStoreUrl) return null;

  return (
    <div className="mt-auto flex flex-wrap gap-2 pt-6">
      {appStoreUrl && <AppStoreBadge href={appStoreUrl} />}
      {playStoreUrl && <PlayStoreBadge href={playStoreUrl} />}
    </div>
  );
}

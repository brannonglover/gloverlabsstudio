# Glover Labs

A Next.js showcase site for Glover Labs software studio, featuring app tiles and a support page.

## Features

- **Home page** — Hero section and app tiles (Cavaro Cigar app featured)
- **Support page** — App-specific and general support contact options
- **5 pastel color scheme** — Mint, lavender, peach, sky, and charcoal

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

- `src/app/page.tsx` — Home page with app tiles
- `src/app/support/page.tsx` — Support page
- `src/app/layout.tsx` — Root layout with navigation
- `tailwind.config.ts` — Pastel color tokens

## Adding New Apps

Edit the `apps` array in `src/app/page.tsx` to add new app tiles. Each app needs: `id`, `name`, `description`, `accentClass` (e.g. `bg-pastel-mint`), `icon`, and `href`.

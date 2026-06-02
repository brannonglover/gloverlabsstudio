import type { Config } from "tailwindcss";

const colors = {
  ink: "#0f172a",
  "ink-muted": "#475569",
  surface: "#e8ecf1",
  "surface-elevated": "#ffffff",
  border: "#c8d3df",
  accent: {
    DEFAULT: "#0d9488",
    hover: "#0f766e",
    soft: "#e0f2f1",
  },
  warm: {
    DEFAULT: "#d97706",
    soft: "#fffbeb",
  },
} as const;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: colors.surface,
        foreground: colors.ink,
        ...colors,
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 4px 24px -6px rgba(13, 148, 136, 0.28)",
        "glow-sm": "0 2px 12px -4px rgba(13, 148, 136, 0.22)",
      },
    },
  },
  plugins: [],
};
export default config;

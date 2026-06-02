import type { Config } from "tailwindcss";

const colors = {
  ink: "#1a2332",
  "ink-muted": "#4a5568",
  surface: "#f6f3ed",
  "surface-elevated": "#fffcf7",
  border: "#e2ddd3",
  accent: {
    DEFAULT: "#0f766e",
    hover: "#0d9488",
    soft: "#ccfbf1",
  },
  warm: {
    DEFAULT: "#c2410c",
    soft: "#ffedd5",
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
    },
  },
  plugins: [],
};
export default config;

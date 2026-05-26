import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand orange (matches reference site)
        brand: {
          50:  "#fff8eb",
          100: "#feecc7",
          200: "#fdd689",
          300: "#fcbd4b",
          400: "#fba424",
          500: "#f59e0b", // primary orange/amber
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        // Deep navy text (matches reference)
        ink: {
          DEFAULT: "#0a1530",
          soft: "#1e293b",
          muted: "#475569",
        },
        surface: {
          DEFAULT: "#f7f8fa",
          card: "#ffffff",
          alt: "#fafafa",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-cell": "80px 80px",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(15,23,42,0.06)",
        card: "0 6px 24px rgba(15,23,42,0.08)",
        glow: "0 0 0 4px rgba(245,158,11,0.15)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee 50s linear infinite",
        blink: "blink 1s steps(2, start) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "to": { visibility: "hidden" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

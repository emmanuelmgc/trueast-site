import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        parchment: "rgb(var(--color-parchment) / <alpha-value>)",
        "parchment-deep": "rgb(var(--color-parchment-deep) / <alpha-value>)",
        terracotta: "rgb(var(--color-terracotta) / <alpha-value>)",
        charcoal: "rgb(var(--color-charcoal) / <alpha-value>)",
        bronze: "rgb(var(--color-bronze) / <alpha-value>)",
        indigo: "rgb(var(--color-indigo) / <alpha-value>)",
        "muted-red": "rgb(var(--color-muted-red) / <alpha-value>)",
        "warm-grey": "rgb(var(--color-warm-grey) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"]
      },
      boxShadow: {
        quiet: "0 18px 50px rgb(35 30 24 / 0.08)"
      }
    }
  },
  plugins: []
};

export default config;

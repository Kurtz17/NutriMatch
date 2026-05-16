import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ECFDF5",
          100: "#D9F99D",
          500: "#22C55E",
          600: "#16A34A",
          700: "#166534",
        },
        amber: {
          500: "#F59E0B",
        },
        ink: "#0F172A",
        muted: "#64748B",
      },
      boxShadow: {
        soft: "0 20px 50px -24px rgba(15, 23, 42, 0.28)",
        card: "0 16px 36px -24px rgba(15, 23, 42, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;

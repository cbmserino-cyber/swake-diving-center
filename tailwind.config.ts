import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#37A8E0",
          orange: "#F75F23",
          blueDark: "#1F8FCA",
          orangeSoft: "#FF8A5C",
          ink: "#0F172A",
          muted: "#475569",
          surface: "#FFFFFF",
          surfaceAlt: "#F8FAFC",
          border: "#E2E8F0",
        },
      },
    },
  },
  plugins: [],
};

export default config;

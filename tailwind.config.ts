import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050705",
        panel: "#0b100c",
        neon: "#b7ff3c",
        muted: "#9aa398"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 45px rgba(183,255,60,0.16)"
      }
    }
  },
  plugins: []
};
export default config;

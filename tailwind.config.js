import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          purple: "#A855F7",
          pink: "#EC4899",
          gradient: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

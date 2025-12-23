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
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        aura: {
          purple: "#AD46FF",
          pink: "#F6339A",
        },
      },
      backgroundImage: {
        "aura-gradient": "linear-gradient(to right, #AD46FF, #F6339A, #AD46FF)",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

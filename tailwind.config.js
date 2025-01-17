/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/modal.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        "inner-custom": "inset 0 0 8px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        primary: "#3ABBD1",
      },
      backgroundImage: {
        bridge: "url('@/assets/images/wallpapers/bridge.webp')",
        catiamatos: "url('@/assets/images/wallpapers/catiamatos.webp')",
        material: "url('@/assets/images/wallpapers/material.webp')",
        ocean: "url('@/assets/images/wallpapers/ocean.webp')",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

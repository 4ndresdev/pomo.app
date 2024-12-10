/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "inner-custom": "inset 0 0 8px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        primary: "#3ABBD1",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

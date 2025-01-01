import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
// Supports weights 400-700
// import "@fontsource-variable/lora/wght-italic.css";
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Sans", ...defaultTheme.fontFamily.sans],
        mono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
        lora: ["Lora Variable", ...defaultTheme.fontFamily.sans], // Add Lora font here
      },
      animation: {
        "move-grid": "moveGrid 2s linear infinite", // Custom animation name
      },
      keyframes: {
        moveGrid: {
          "0%": {
            backgroundPosition: "0 0",
          },
          "100%": {
            backgroundPosition: "0 -42px",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

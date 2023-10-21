/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      color_1: "#72A7FF",
      color_2: "#7E90B0",
      color_3: "#F6F0FF",
      color_4: "#E6F4F1",
    },
    extend: {
      screens: {
        md: "840px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

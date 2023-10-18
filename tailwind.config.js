/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue_light: "#5BC0EB",
      yellow: "#FFEFCA",
      blue_dark: "#4357AD",
      red: "#C1666B",
      lavendar: "#F7EDF0",
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
    extend: {},
  },
  plugins: [],
};

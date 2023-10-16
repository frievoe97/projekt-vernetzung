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
    },
    extend: {},
  },
  plugins: [],
};

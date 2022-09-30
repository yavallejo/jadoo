/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        decoration: "url('/img/decore.png')",
      },
      colors: {
        primary: {
          DEFAULT: "#DF6951",
          hover: "#e63427",
          lighter: "#FF946D",
        },
        secondary: {
          DEFAULT: "#F1A501",
          hover: "#fe4e27",
          lighter: "#feba27",
        },
        accent: {
          DEFAULT: "#8A79DF",
        },
        dark: {
          1: "#181E4B", // 1st
          2: "#14183E;", // 3rd
          3: "#1E1D4C;", // text heading color
          4: "#5E6282", // text clr
          5: "#686D77", // text color
          6: "#84829A", // text 2
          7: "#080809", // Black
        },
      },
      fontFamily: {
        volkhov: "Volkhov",
        poppins: "Poppins",
        opensans: "Open Sans",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".title--1": {
          fontWeight: 700,
          fontSize: "5.25rem", //84px
          lineHeight: "5.563rem", //89px
          letterSpacing: "-0.04em",
          fontFamily: "Volkhov",
        },
        ".title--2": {
          fontWeight: 700,
          fontSize: "3.125rem", //50px
          lineHeight: "4rem", //64px
          textTransform: "capitalize",
        },
        ".title--3": {
          fontWeight: 600,
          fontSize: "2.063rem", //33px
          lineHeight: "3.375rem", //54px
        },
        ".title--4": {
          fontWeight: 600,
          fontSize: "1.25rem", //20px
          lineHeight: "1.688rem", //27px
          fontFamily: "Open Sans",
        },
        ".title--5": {
          fontWeight: 600,
          fontSize: "1.125rem", //18px
          lineHeight: "1.688rem", //27px
        },
        ".title--body": {
          fontWeight: 400,
          fontSize: "1rem", //16px
          lineHeight: "2rem", //32px
        },
        ".title--button": {
          fontWeight: 500,
          fontSize: "1.125rem", //18px
          lineHeight: "1.438rem", //23px
        },
      });
    }),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1200px",
          },
        },
      });
    },
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      md: "375px",
      // => @media (min-width: 640px) { ... }
      xl: "800px",
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      montserrat: ["font-family", "Montserrat", "sans-serif"],
      fraunces: ["font-family", "Fraunces", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

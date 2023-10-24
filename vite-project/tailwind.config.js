/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sig: ["Lato", "sans-serif"],
        title: ["Libre Franklin", "sans serif"],
        robot: ["Roboto Serif", "sans serif"],
      },
      colors: {
        text: "#fffdfa",
        background: "#000000",
        primary: "#fad58e",
        secondary: "#161616",
        accent: "#f5a50f",
      },
    },
  },
  plugins: [],
};

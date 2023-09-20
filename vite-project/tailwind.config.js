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
        Nero: "#1C1C1C",
        GainsBoro: "#E6E6E6",
      },
    },
  },
  plugins: [],
};


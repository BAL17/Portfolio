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
        secbg: "#D1D7DE",
        text: "#0b1119",
        background: "#e6ecf4",
        primary: "#2f4c6f",
        secondary: "#c2d2e5",
        accent: "#41699b",
        cardbg: "#c8d2db",
        borderbot: "#DDDDDD",
        headerbg: "#64748b",
      },
    },
  },
  plugins: [],
};

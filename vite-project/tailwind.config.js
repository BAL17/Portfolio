/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "Cabin, sans-serif",
        body: "Ubuntu, sans-serif",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      colors: {
        // secbg: "#D1D7DE",
        // text: "#0b1119",
        // background: "#e6ecf4",
        // primary: "#2f4c6f",
        // secondary: "#c2d2e5",
        // accent: "#41699b",
        // cardbg: "#c8d2db",
        borderbot: "#DDDDDD",
        // headerbg: "#64748b",

        //dark mode from realtimecolors
        text: "#eaf3f3",
        background: "#061011",
        primary: "#8edfe4",
        // secondary: "#12838b",
        accent: "#0de8f6",
        // secbg: "#0E1C1D",
        cardbg: "#425F60",
        secbg: "#182728",
        headerbg: "#12848C",
      },
      screens: {
        xs: "380px",
        // xs: "400px",
        sm: "640px",
        md: "768px",
        semilg: "900px",
        lg: "1024px",
        xl: "1280px",
        pj: "1303",
      },
    },
  },
  plugins: [],
};

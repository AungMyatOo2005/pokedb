/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        VT: ["VT323", "monospace"],
      },
    },
    screens: {
      xxs: "370px",
      xs: "470px",
      ss: "648px",
      sm: "840px",
      md: "1120px",
      lg: "1200px",
      xl: "1400px",
    },
  },
  plugins: [],
};

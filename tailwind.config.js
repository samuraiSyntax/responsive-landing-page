/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#0E204E",
      },
      screens: {
        md: "769px",
      },
    },
  },
  plugins: [],
};

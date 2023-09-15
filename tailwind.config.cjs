/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      dropShadow: {
        logo: "0 0 2em #646cffaa",
        "logo-tw": "0 0 2em #38bdf8aa",
      },
      height: {
        18: "4.5rem",
      },
      colors: {
        "Dark-Grey": "rgba(38, 38, 38, 1)",
      },
    },
  },
  plugins: [{backgroundColor: true}],
};

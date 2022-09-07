/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Oswald: ["Oswald"],
      roboto: ["Roboto"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Oswald: ["Oswald"],
      roboto: ["Roboto"],
    },
    extend: {
      colors: {
        purple: {
          50: "#541690",
        },
        pink: {
          50: "#FF0075",
          100: "#721B65",
        },
        greenPro: {
          50: "#59CE8F",
          100: "#00BDAA",
        },
        whitePro: {
          50: "#E8F9FD",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"), Myclass],
};

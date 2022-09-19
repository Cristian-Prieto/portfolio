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
        whitePro: {
          50: "#fafafa",
        },
        purplePro: {
          50: "#654062",
          100: "#300532",
        },
        pinkPro: {
          50: "#FF0075",
          100: "#AA3763",
        },
        bluePro: {
          50: "#2D4263",
        },
        greenPro: {
          50: "#59CE8F",
          100: "#00BDAA",
        },
        whitePro: {
          50: "#E8F9FD",
        },
        beige: {
          50: "#EEE3CB",
          100: "#85586F",
        },
        grayPro: {
          50: "#222831",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"), Myclass],
};

/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js",
    "./node_modules/flyonui/dist/js/accordion.js",
  ],
  theme: {
    extend: {},
  },
  flyonui: {
    themes: [
      {
        light: {
          ...require("flyonui/src/theming/themes")["light"],
          primary: "#F29A18",
          secondary: "#F1D9A7",
        },
      },
      {
        theme2: {
          ...require("flyonui/src/theming/themes")["dark"],
          primary: "#F3A738",
          secondary: "#F1D9A7",
          accent: "#ffffff",
          neutral: "#ffffff",
          "base-100": "#000000",
          "base-200": "#191610",
          "--bc": "100% 0 0",
          "--bg": "100% 0 0",
          "--bs": "60% 0.016696 301.919165",
          ".text-wp": {
            color: "rgba(255, 255, 255, 0.5)",
          },
        },
      },
    ],
  },
  darkMode: ["className", '[data-theme="theme2"]'],
  plugins: [
    require("flyonui"),
    require("flyonui/plugin"),
    addDynamicIconSelectors(),
  ],
};


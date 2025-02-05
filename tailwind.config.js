/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flyonui/dist/js/*.js',
  ],
  theme: {
    extend: {},
  },
  flyonui: {
    themes: [
      {
        light   : {
          ...require("flyonui/src/theming/themes")["light"],
          primary: "blue",
          secondary: "teal"
        }
      },
      {
        theme2: {
          ...require("flyonui/src/theming/themes")["dark"],
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#000000",

        }
      }
    ],
  },
  darkMode: ['className', '[data-theme="theme2"]'],
  plugins: [
    require('flyonui'),
    require('flyonui/plugin')
  ],
}


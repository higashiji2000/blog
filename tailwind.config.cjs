const { transpile } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        goodbye: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(0)", opacity: 0 },
        },
        vibration: {
          "0%": { transform: "translate(0px, 0px) rotateZ(0deg)" },
          "25%": { transform: "translate(1px, 1px) rotateZ(1deg)" },
          "50%": { transform: "translate(0px, 1px) rotateZ(0deg)" },
          "75%": { transform: "translate(1px, 0px) rotateZ(-1deg)" },
          "100%": { transform: "translate(0px, 0px) rotateZ(0deg)" },
        },
      },
      animation: {
        vibration: "vibration .2s infinite",
        vibrationFast: "vibration .1s infinite",
        goodbye: "2s ease-in 2s forwards goodbye",
      },
      zIndex: {
        header: 100,
      },
      flex: {
        2: "2 2 0%",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#517977",
          secondary: "#b7bda6",
          accent: "#37CDBE",
          neutral: "#303136",
          "base-100": "#f8f8f8",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
    darkTheme: "myTheme",
  },
};

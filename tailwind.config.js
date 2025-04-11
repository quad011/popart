import plugin from "tailwindcss/plugin";
import typography from "@tailwindcss/typography";

export default {
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: {
          // fontSize: ".9375vw",
          fontFamily: "FuturaLight, sans-serif",
          lineHeight: "1.1",
        },
      });
    }),
    typography,
  ],

  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  safelist: [
    "lg:items-end",
    {
      pattern: /^(text-|bg-|w-|max-w-|order-)/,
    },
  ],

  theme: {
    extend: {
      lineHeight: {},
      colors: {
        black: "#161618",
        white: "#F9F9F9",
        purple: "#361281",
        green: "#D5FF2F",
        red: "#FF2473",
        blue: "#54EEEE",
        orange: "#FF6F1F",
      },

      fontFamily: {
        FuturaLight: ["FuturaLight"],
        AspergitBold: ["AspergitBold"],
      },

      fontSize: {
        base: [
          "clamp(20px, 1rem, 40px)",
          {
            lineHeight: "1.2",
          },
        ],
        h1: [
          "clamp(80px, 3.7666rem, 150px)",
          {
            lineHeight: "1.1",
          },
        ],
        h2: [
          "clamp(60px, 3.1333rem, 110px)",
          {
            lineHeight: "1.1",
          },
        ],
        h3: [
          "clamp(50px, 1.8rem, 70px)",
          {
            lineHeight: "1.1",
          },
        ],
        h4: [
          "clamp(30px, 1.466rem, 50px)",
          {
            lineHeight: "1.1",
          },
        ],
        small: [
          "clamp(20px, .933rem, 40px)",
          {
            lineHeight: "1.1",
          },
        ],
        18: [
          "clamp(14px, .6rem, 30px)",
          {
            lineHeight: "1.1",
          },
        ],
      },

      letterSpacing: {
        tight: "-.02em",
        tighter: "-.03em",
      },

      spacing: {
        18: "4.5rem",
        25: "6.25rem",
        26: "6.5rem",
        28: "7rem",
        30: "7.5rem",
        92: "23rem",
      },

      screens: {
        "max-sm": { min: "0px", max: "639px" },
        "max-lg": { min: "375px", max: "1023px" },
        xs: "375px",
        sm: "600px",
        md: "768px",
        lg: "992px",
        xl: "1024px",
        "2xl": "1600px",
      },
    },
  },
};

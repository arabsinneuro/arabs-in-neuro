/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/styles/**/*.{css,scss}",
    "./src/pages/**/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cRed: "#ce1225",
        cRedDark: "#900F1B",
        cRedLight: "#F84E5D",
        cGreen: "#007a3d",
        cGreenDark: "#084C28",
        cGreenLight: "#3DCC80",
        cPink: "#D69298",
        cPinkDark: "#A96268",
        cPinkLight: "#FBC4C9",
        cBlack: "#000000",
        cWhite: "#FEFEFE",
        cN900: "#1A1A1A",
        cN800: "#434343",
        cN700: "#6E6E6E",
        cN600: "#969696",
        cN500: "#BFBFBF",
        cN400: "#D3D3D3",
        cN300: "#DFDFDF",
        cN200: "#E8E8E8",
        cN100: "#EDEDED",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      animation: {
        "spin-to-top-left": "spin-to-top-left 2s forwards",
        "spin-to-bottom-right": "spin-to-bottom-right 2s forwards",
        "slide-in-top": "slide-in-top 2s forwards",
        "slide-in-bottom": "slide-in-bottom 1.5s 2s forwards",
        banner: "banner 3s forwards",
      },
      keyframes: {
        "spin-to-top-left": {
          "0%": { transform: "translate(100%, 100%) rotate(0deg)" },
          "100%": { transform: "translate(0, 0) rotate(-360deg)" },
        },
        "spin-to-bottom-right": {
          "0%": { transform: "translate(-100%, -100%) rotate(0deg)" },
          "100%": { transform: "translate(0, 0) rotate(360deg)" },
        },
        "slide-in-top": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-bottom": {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "10%": { opacity: "1" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        banner: {
          "0%": { transform: "translateY(-100%) scale(1)" },
          "80%": { transform: "translateY(50%) scale(1.5)" },
          "100%": { transform: "translateY(0) scale(1)" },
        },
      },
      animationDelay: {
        "3s": "3s",
      },
    },
  },
  plugins: [],
  corePlugins: {
    animation: true,
  },
};

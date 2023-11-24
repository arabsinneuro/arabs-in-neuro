/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/styles/**/*.{css,scss}',
    './src/pages/**/utils/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
],
  theme: {
    extend: {
      colors: {
        'cRed': '#ce1225',
        'cRedDark': '#900F1B',
        'cRedLight': '#F84E5D',
        'cGreen': '#007a3d',
        'cGreenDark': '#084C28',
        'cGreenLight': '#3DCC80',
        'cPink': '#D69298',
        'cPinkDark': '#A96268',
        'cPinkLight': '#FBC4C9',
        'cBlack': '#000000',
        'cWhite': '#FEFEFE',
        'cN900': '#1A1A1A',
        'cN800': '#434343',
        'cN700': '#6E6E6E',
        'cN600': '#969696',
        'cN500': '#BFBFBF',
        'cN400': '#D3D3D3',
        'cN300': '#DFDFDF',
        'cN200': '#E8E8E8',
        'cN100': '#EDEDED',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

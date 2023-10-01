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
        'cGreen': '#007a3d',
      },
      fontFamily: {
        'sans': ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

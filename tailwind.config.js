/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      darkPink: '#ba4270',
      linkWaterWhite: '#fbfcfe',
      sanJuanBlue: '#36536b',
      mirageBlue: '#1b262f',
      charmPink: '#da6d97',
      lightSanJuanBlue: '6c8294',
    },
    fontFamily: {
      sans: ['PublicSansReg'],
      serif: ['DMSerifDisplay'],
    },
    extend: {},
  },
  plugins: [],
};

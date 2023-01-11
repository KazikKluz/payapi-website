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
      lightSanJuanBlue: '#6c8294',
      background: '#edf3f8',
      darker: '#e8eff4',
      danger: '#ff0000',
    },
    fontFamily: {
      sans: ['PublicSansReg'],
      serif: ['DMSerifDisplay'],
    },
    extend: {
      boxShadow: {
        button: '10px 10px 25px -10px rgba(54, 83, 107, 0.25)',
      },
      backgroundImage: {
        circle: "url('../public/SVG/bg-pattern-circle.svg')",
      },
      opacity: {
        15: '.15',
        75: '.75',
      },
    },
  },
  plugins: [],
};

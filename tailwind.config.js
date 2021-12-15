const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: colors.black,
    //   white: colors.white,
    //   blue: '#8aa7eb',
    //   darkBlue: '#94a8d6',
    //   lightBlue: '#a5c2f4',
    //   gray: '#a7aab2',
    //   gold: '#afa895',
    // },
    extend: {
      fontFamily: {
        bona: ['"Bona Nova"'],
        barbara: ['"Barbara"'],
        vibes: ['"Great Vibes"'],
        cinzel: ['"Cinzel"'],
      },
      scale: {
        '-1': '-1',
      },
    },
  },
  variants: {},
  plugins: [],
}

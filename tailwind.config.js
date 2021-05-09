const colors = require('tailwindcss/colors') //eslint-disable-line

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#060505',
      secondary: '#FFBF00',

      black: colors.black,
      gray: colors.coolGray,
      white: colors.white,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

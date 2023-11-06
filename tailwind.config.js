/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./**/*.{html,js}"],
  theme: {
    'colors': {
      'neutral_dark': '#223263',
      'neutral_grey': '#9098B1',
      'neutral_grey1': '#707070',
      'neutral_black': '#27272E',
      'neutral_black2': '#7F7F90',
      'accent2': '#0ECE95',
    },
    fontFamily: {
      'poppins': ['Poppins','sans-serif'],
      'noto_sans': ['Noto Sans','sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
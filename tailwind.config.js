/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./**/*.{html,js}"],
  theme: {
    'colors': {
      'neutral/dark': '#223263',
      'neutral/grey': '#9098B1',
      'neutral/grey1': '#707070',
      'neutral/black': '#27272E',
      'neutral/black2': '#7F7F90',
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
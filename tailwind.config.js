/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './dist/*.html'],
  theme: {
    extend: {
      boxShadow: {
        'DEFAULT': '4px 4px 4px #669966',
      },
      colors: {
        lightolive: '#cccc99',
        darkergreen: '#669966',
      },
    },
  },
  plugins: [],
}


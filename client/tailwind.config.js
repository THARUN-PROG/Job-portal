/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'gupter': ['Gupter', 'sans-serif'],
      },
      colors : {
        'teal-light' : '#20C997',
        'teal-dark' : '#63E6BE',
        'purple-primary' : '#6F42C1',
        'purple-secondary' : '#9B51E0',
      }
    },
  },
  plugins: [],
}

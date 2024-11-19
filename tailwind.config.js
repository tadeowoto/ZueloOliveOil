/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",     
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


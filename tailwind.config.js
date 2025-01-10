/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",       
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#1a1a1a',
        primary: '#E9E9E9',
        secondary: '#F7F7F7',
        tertiary: '#D9D9D9',
        quaternary: '#9F9F9F',
        quinary: '#757575',
      }
    },
  },
  plugins: [],
}


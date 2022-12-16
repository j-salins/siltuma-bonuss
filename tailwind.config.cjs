/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./dist/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./dist/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sbamber': '#FFC700'
      },
    },
  },
  plugins: [],
}

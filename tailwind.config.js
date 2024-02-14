/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        'regal-gray': '#F5F7F8',
      },
        spacing: {
        '128': '32rem',
        '124': '28rem',
        '122': '22rem',
        '120': '50rem',
      }
    },
  },
  plugins: [],
}
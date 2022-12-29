/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      height: {
        custom: "620px",
      },
      spacing: {
        "40-c": "40rem",
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "phone":{
          max:"420px"
        },
        "tablet":{
          max:"1010px"
        },
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // colors: {
      //   primary: {
      //     100: "#ebf8ff",
      //     300: "#90cdf4",
      //     500: "#4299e1"
      //   }
      // },
      colors: {
        body: "#050505",
        "selected-text": "#A3A3FF",
        theme: "#5c318c",
        secondary: "#9191a4",
        badge: "#3F3F51"
      }
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    }
  },
  plugins: [],
}
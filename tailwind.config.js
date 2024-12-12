/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#0e399d",
        sub: "#5F7CBF",
      },
      maxHeight: {
        "70vh": "70vh",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

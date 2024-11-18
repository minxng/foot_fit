/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#0e399d",
      },
      maxHeight: {
        "70vh": "70vh",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

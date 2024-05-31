/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        themePrimary: "#14452F",
        themeSecondary: "#7CFF77",
        white:"#e4e3e3",
        dark:"#1f1f1f"
      },
    },
  },
  plugins: [require('daisyui'),],
};

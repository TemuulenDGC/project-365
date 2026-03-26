/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0A", // Deep, premium black
        chalk: "#F9F9F9",    // Soft, gallery white
        graphite: "#262626", // For subtle borders
      },
      fontFamily: {
        serif: ["Instrument Serif", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./alacarte.html",
    "./halfpension.html",
    "./drinks.html",
    "./lunch.html",
    "./impressie.html",
    "./juridisch.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#005F73", // Deep Petrol
        accent: "#D4A373", // Sand Gold
        background: "#EEEAE6", // Calm Cream
        textDark: "#2F4356", // Deep Sea
      },
      fontFamily: {
        heading: ['"Sunflare"', 'sans-serif'],
        drama: ['"Gabriola"', 'serif'],
        body: ['"Montserrat"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '2rem',
        '3xl': '3rem',
      }
    },
  },
  plugins: [],
}

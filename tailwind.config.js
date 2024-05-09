/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        calc: 'calc(100vh - 100px)',
      },
      fontFamily:{
        sans:['Inter', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      colors:{
        primary: "#4CAF4F",
        primaryt5 : "#E8F5E9",
        neutral: "#F5F7FA",
        grayc : "#4D4D4D"
      }
    },
  },
  plugins: [],
}
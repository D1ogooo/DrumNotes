/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
      'custom-dark': '#171519',
      'background-card': '#282631',
      'customBorder': '#231c3f',
      'text-card': '#009581',
     },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4044c9',
        'secondary': '#e9e9e9',
      },
    },
  },
  plugins: [],
}


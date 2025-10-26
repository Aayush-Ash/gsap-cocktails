/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'modern-negra': ['Modern Negra', 'sans-serif'],
        'serif': ['DM Serif Text', 'serif'],
        'sans': ['Mona Sans', 'sans-serif'],
      },
      colors: {
        'yellow': '#e7d393',
        'white-100': '#efefef',
      },
    },
  },
  plugins: [],
}
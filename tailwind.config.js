/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'can-red': '#DC2626',
        'can-dark-red': '#B91C1C',
        'can-blue': '#2563EB',
        'can-yellow': '#F59E0B',
        'can-green': '#059669',
        'can-purple': '#7C3AED',
      },
      fontFamily: {
        'malayalam': ['Noto Sans Malayalam', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: { bg: '#0a0a0b' },
      boxShadow: {
        glow: '0 0 0 1px rgba(168,85,247,0.25), 0 0 20px rgba(168,85,247,0.25)'
      }
    },
  },
  plugins: [],
}

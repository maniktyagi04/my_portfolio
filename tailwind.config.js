/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          700: '#1E293B',
          800: '#172033',
          900: '#0F172A',
          950: '#0A1021'
        }
      }
    },
  },
  plugins: [],
};
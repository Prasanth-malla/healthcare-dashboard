/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#2563EB', // Primary blue for logo, buttons, etc.
        },
        gray: {
          100: '#F3F4F6', // Background
          600: '#4B5563', // Text
        },
      },
    },
  },
  plugins: [],
};
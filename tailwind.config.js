/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgb(0, 0, 255)',
        'custom-yellow': 'rgb(255, 255, 0)',
        'custom-red': 'rgb(255, 0, 0)',
      }
    },
  },
  plugins: [],
}


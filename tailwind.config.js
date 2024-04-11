/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        'spin': 'spin 2s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      colors: {
        'custom-blue': 'rgb(0, 0, 255)',
        'custom-yellow': 'rgb(255, 255, 0)',
        'custom-red': 'rgb(255, 0, 0)',
      },
    },
  },
  variants: {},
  plugins: [],
}


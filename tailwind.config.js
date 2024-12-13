/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'charcoal': '#36454F',
      },
      fontFamily: {
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fade: 'fade 0.3s ease-in-out',
      },
      textShadow: {
        'gradient': '2px 2px 4px rgba(0,0,0,0.25)',
      },
      screens: {
        '2xl': '1536px',
        'lg+': '1200px',
      }
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    },
  ],
} 
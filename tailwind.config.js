/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F5FBFF',
          100: '#E6F5FF',
          200: '#CDEBFF',
          300: '#A6DBFF',
          400: '#6CC0FF',
          500: '#279EFF',
          600: '#127CE0',
          700: '#0D5FB2',
          800: '#0D4C8C',
          900: '#0C3E72'
        },
        gold: {
          50: '#FFF9E6',
          100: '#FCEFC4',
          200: '#F8DF88',
          300: '#F1C94E',
          400: '#EAB308',
          500: '#C99906',
          600: '#A57C04',
          700: '#805E03',
          800: '#634803',
          900: '#4F3A02'
        },
        navy: {
          900: '#0B1430',
          950: '#070E24'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.25)'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem'
      }
    },
  },
  plugins: [],
}

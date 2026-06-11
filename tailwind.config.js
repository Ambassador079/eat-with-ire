/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#E8621A',
          'orange-dark': '#C44E0E',
          brown: '#5C2D0A',
          'brown-light': '#8B4513',
          green: '#2D7D32',
          'green-light': '#4CAF50',
          cream: '#FDF8F3',
          'cream-dark': '#F5EDE0',
          charcoal: '#1C1C1C',
          'charcoal-light': '#4A4A4A',
          warm: '#FFF3E8',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}

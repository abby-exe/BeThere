/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F5EE',
        sand: '#E8D5BA',
        ink: '#303A32',
        sage: '#58665A',
        cocoa: '#A87950',
        mist: '#F1EADF',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['DM Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(48, 58, 50, 0.08)',
      }
    },
  },
  plugins: [],
}

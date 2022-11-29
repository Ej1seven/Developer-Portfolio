/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      archivo: ['Archivo'],
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      exSMMAX: { min: '0px', max: '425px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      smMAX: { min: '0px', max: '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }
    },
  },
  plugins: [],
};

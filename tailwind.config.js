/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-Color': '#29A89D',
        'second-Color': '#E78F26',
        'main-text-color': '#1B1F27',
        'selected-item-color': '#086EB6'
      },
      fontFamily: {
        'cairo-reg': ['Cairo-Regular', 'sans-serif'],
        'cairo-bold': ['Cairo-Bold', 'sans-serif'],
      },
      width: {
        'hero-img-width': '98%'
      },
      height: {
        'navbar-height': '5rem',
        'hero-img-height': '38rem'
      },
      screens: {
        mobile: { 'min': '50px', 'max': '480px' },
        tablet: { 'min': '480px', 'max': '576px' },
        smallScreen: { 'min': '576px', 'max': '769px' },
        medScreen: { 'min': '769px', 'max': '992px' },
        largeScreen: { 'min': '992px', 'max': '1200px' },
        XlargeScreen: { 'min': '1200px', 'max': '1400px' },
        XXlargeScreen: { 'min': '1400px', 'max': '2000px' },
        XXXlargeScreen: { 'min': '2000px' },
      }
    },
  },
  plugins: [],
}


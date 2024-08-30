/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,astro}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'canela-deck': ['Canela Deck', 'sans-serif'],
        'canela-text': ['Canela Text', 'sans-serif'],
        'Lato' : ['Lato', 'sans-serif'],
        
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}


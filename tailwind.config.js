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
        'moderustic' : ['Moderustic', 'sans-serif'],
        'sans': ['ui-sans-serif', 'system-ui', 'sans-serif'],
        'georgia': ['ui-serif', 'Georgia', 'serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'mono'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}


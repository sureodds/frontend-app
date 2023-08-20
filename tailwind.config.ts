/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-zona)'],
      },
      colors: {
        primary: '#10131e',
        secondary: '#1a1e2d',
        main: '#0888d2',
        linearMain: 'rgba(8,136,210,0.30015756302521013) 85%',
        grey: '#f3f4f6',
        white: '#ffff',
        darkGray: '#9ca3af',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '3rem',
          '2xl': '3rem',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

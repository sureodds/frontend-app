/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
        white: '#f3f4f6',
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
  plugins: [],
};

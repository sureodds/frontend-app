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
        white: '#ffff',
      },
    },
  },
  plugins: [],
};

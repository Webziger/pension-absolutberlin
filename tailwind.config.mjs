/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#e62148',
          dark: '#c2183a',
          50: '#fdf2f5',
          100: '#fbe2e8',
        },
        petrol: {
          DEFAULT: '#66a0ae',
          dark: '#4d818e',
        },
        ink: '#1c1f23',
      },
      fontFamily: {
        sans: [
          'TextaNarrow',
          'Barlow Semi Condensed',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
};

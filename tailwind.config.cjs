/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#F34939',
        darkGray: '#5C5B5B',
        secondary: {
          100: '#EA8780',
          200: '#A33327',
        },
      },
    },
  },
  plugins: [],
};

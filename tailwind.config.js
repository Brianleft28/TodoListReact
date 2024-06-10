const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    flowbite.content(),
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        lg: '3.5rem',
        xl: '4rem',
      },
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1080px',
      xl: '1280px',
    },
  },
  daisyui: {
    darkTheme: 'luxury',
    lightTheme: 'lemonade',
    themes: [
      'sunset',
      'nord',
      'dim',
      'winter',
      'coffee',
      'night',
      'lemonade',
      'acid',
      'business',
      'autumn',
      'cmyk',
      'dracula',
      'luxury',
      'black',
      'wireframe',
      'fantasy',
      'pastel',
      'lofi',
      'aqua',
      'forest',
      'synthwave',
      'corporate',
      'cyberpunk',
    ],
    styled: true,
  },
  plugins: [require('flowbite/plugin'), require('daisyui')],
};

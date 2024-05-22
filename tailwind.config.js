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
    extend: {},
  },
  daisyui: {
    darkTheme: 'sunset',
    lightTheme: 'lemonade',
    themes: ['lemonade', 'sunset'],
  },
  plugins: [require('flowbite/plugin'), require('daisyui')],
};

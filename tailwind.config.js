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
    darkTheme: 'cyberpunk',
    lightTheme: 'luxury',
    themes: ['sunset', 'nord', 'dim', 'winter', 'coffee', 'night', 'lemonade', 'acid', 'business', 'autumn', 'cmyk', 'dracula', 'luxury', 'black', 'wireframe', 'fantasy', 'pastel', 'lofi', 'aqua', 'forest', 'synthwave', 'corporate', 'cyberpunk'],
    styled: true,
  },
  plugins: [require('flowbite/plugin'), require('daisyui')],
};

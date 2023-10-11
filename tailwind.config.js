/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rich-black': '#0c1821',
        'oxford-blue': '#1b2a41',
        charcoal: '#324a5f',
        'lavender-web': '#F7F7FF',
      },
    },
  },
  plugins: [],
};

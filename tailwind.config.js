module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'warm-earth': '#F7B267',
        'primary-accent': '#88C091',
        'secondary-accent': '#C9E4CA',
        'dark-bg': '#121212',
        'dark-text': '#E0E0E0',
        'dark-border': '#2C2C2C',
        'hover-color': '#F9D8A3',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #F7B267, #88C091)',
      },
    },
  },
  plugins: [],
};

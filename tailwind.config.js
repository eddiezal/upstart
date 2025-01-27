module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'mint-green': '#C9E4CA',
        'golden-apricot': '#F7B267',
        'cream': '#FAF3E0',
        'soft-peach': '#F9D8A3',
        'forest-green': '#729C72',
        'warm-sand': '#EFE8D8',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        h1: ['48px', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        h2: ['36px', { lineHeight: '1.4' }],
        h3: ['28px', { lineHeight: '1.5' }],
        bodyLarge: ['18px', { lineHeight: '1.6' }],
        bodyRegular: ['16px', '1.6'],
        caption: ['14px', '1.4'],
        meta: ['12px', '1.3'],
      },
      backgroundImage: {
        'sustainability': "url('/src/assets/icons/leaf.svg')",
        'community': "url('/src/assets/icons/community.svg')",
        'innovation': "url('/src/assets/icons/innovation.svg')",
      },
      backgroundSize: {
        '50%': '50%',
        '75%': '75%',
        'full': '100%',
      },
      backgroundPosition: {
        'center-top': 'center top',
        'center-center': 'center center',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
};

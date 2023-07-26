module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'Space': '#444545',
        'Eerie': '#191919',
        'Khaki': '#A0947B',
        'Peach': '#FBE3B1',
        'Wheat': '#F8DEB6',
        'Jasmine' : '#F8CF77',
      },
      fontFamily: {
        comfortaa: ["Comfortaa"],
      },
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
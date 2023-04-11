module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'Nyanza': '#C9FFE2',
        'Celadon': '#B6F9C9',
        'Viridian': '#478978',
        'RichBlack': '#001011',
      },
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
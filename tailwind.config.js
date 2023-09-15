/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
      darkBlueColor:"#252F3D",
      textLightGray:"#4D5254",
      greenColor:"#85BF55",
      blueColor:"#2C7EF8",
      lightGrayBackgroundColor:"#FAFAFA",
      textLightBlack:"#333333",
      textLightCyan:"#5BB59A",
      lightText:"#969696",
      lightCheckBgGray:"#E3EEFF",
      darkBlueColor:"#37465A",
      lightBlueColor:"#EDF3FD",
      greenButtonColor:"#59AE43",
      hrColor:"#CFCFCF",
      textRed:"#F82C2C",
      footerColor:"#252F3D"
    },
    boxShadow: {
      'default': '0 2px 4px 0 rgba(0, 0, 0, 0.10)',
      'sm': '0 2px 4px 0 rgba(0, 0, 0, 0.10)',
      'md': '0 4px 6px -1px rgba(0, 0, 0, 0.10)',
      'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.10)',
      'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.10)',
    },
    },
  },
  plugins: [],
}
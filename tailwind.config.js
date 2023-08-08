const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'fcPrimary':'#66BB6A',
      'fcBtn':'#FC9A1D',
      'fcDark':'#1C2431',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#E1E6FB',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'card1': '#ffe2e6',
      'card2': '#fff4de',
      'card3': '#dcfce7',
      'card4': '#f4e8ff',
      
    },
    extend: {
      backgroundImage: {
        'primary-grad': "linear-gradient(25deg, hsla(214, 92%, 47%, 1) 0%, hsla(231, 85%, 24%, 1) 100%)",
        'secondary-grad': "linear-gradient(62deg, #b597f6 0%, #96c6ea 100%);",
        'card-grad2': "linear-gradient(62deg, #a1c4fd 0%, #c2e9fb 100%);",
        'card-grad1': "linear-gradient(62deg, #f6d5f7 0%, #fbe9d7 100%);",
        'card-grad3': "linear-gradient(to top, #fdcbf1 0%, #e6dee9 100%)",
        'btn-primary': "linear-gradient(90deg, hsla(22, 100%, 78%, 1) 0%, hsla(2, 78%, 62%, 1) 100%)",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
});
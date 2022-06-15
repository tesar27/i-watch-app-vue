const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors:{
      primary: 'rgb(8 145 178)',
      amber: colors.amber,
      emerald: colors.emerald,
      gray: colors.gray,
      myblack: '#222831',
      myyellow: '#FFD369',
      mygrey: '#393E46',
      mywhite: '#EEEEEE'
    },
    extend: {},
  },
  plugins: [],
}

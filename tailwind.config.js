const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
    },
    colors:{
      ...defaultColors,
      // NOTE: How to add custom color palette
      // eg: https://coolors.co/227c9d-17c3b2-ffcb77-fef9ef-fe6d73
      lightCoral : '#fe6d73',
      floralWhite : '#fef9ef',
      maxYellowRed : '#ffcb77',
      lightSeaGreen : '#17c3b2',
      CGBlue : '#227c9d',
    },
    fontFamily: {
      'body': ['Open Sans'],
    }
  },
  variants: {},
  plugins: [],
}

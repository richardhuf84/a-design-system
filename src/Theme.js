import * as tokens from './tokens.js';
console.log(tokens)

const theme = {
  color: {
    primary: {
      default: tokens.ColorsBrandPrimary,
      dark: '#5256FF',
      light: `#A9ABDA`
    },
    secondary: {
      default: tokens.ColorsBrandSecondary,
      dark: `#9447FF`,
      light: `#B8A2D7`
    },
    tertiary: {
      default: tokens.ColorsBlack,
      dark: `#18192A`,
      light: `#A1C0D6`
    },
    dark: {
      default: `#2B2C4A`,
      dark: `#18192A`,
      light: `#3B3B3B`
    },
    light: {
      default: `#FFFFFF`
    },
    grey: {
      default: `#9B9B9B`
    }
  },
  border: {
    radius: `8px`,
    size: `2px`
  },
  boxShadow: {
    small: `${tokens.ShadowSmall.x}px ${tokens.ShadowSmall.y}px ${tokens.ShadowSmall.blur}px ${tokens.ShadowSmall.color}`,
    large: `${tokens.ShadowLarge.x}px ${tokens.ShadowLarge.y}px ${tokens.ShadowLarge.blur}px ${tokens.ShadowLarge.color}`,
  },
  font: {
    family: 'Montserrat, sans-serif',
    weight: {
      regular: 400,
      bold: 700,
      black: 900
    },
    lineHeight: {
      default: 1.5,
      tight: 1.2,
      spread: 1.8
    },
    size: {
      h6: 0.75,  // 12
      h5: 0.875, // 14
      body: 1,   // 16
      h4: 1.125, // 18
      h3: 1.5,   // 24
      h2: 2.25,  // 36
      h1: 3      // 48
    }
  },
  spacing: {
    0: 0,
    1: tokens.SpacingSm,
    2: tokens.SpacingMd,
    3: tokens.SpacingLg,
    4: tokens.SpacingXl
  }
};

export { theme };


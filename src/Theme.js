import * as tokens from './tokens.js';

const spacingBase = 4;

const theme = {
  color: {
    primary: {
      default: tokens.ColorsRed300,
      dark: '#5256FF',
      light: `#A9ABDA`
    },
    secondary: {
      default: tokens.ColorsRed500,
      dark: `#9447FF`,
      light: `#B8A2D7`
    },
    tertiary: {
      default: tokens.ColorsRed700,
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
    s0: 0,
    s1: 0.25 * spacingBase,   // 4
    s2: 0.5 * spacingBase,    // 8
    s3: 1 * spacingBase,      // 16
    s4: 1.5 * spacingBase,    // 24
    s5: 2 * spacingBase,      // 32
    s6: 2.5 * spacingBase,    // 40
    s7: 3 * spacingBase,      // 48
    s8: 3.5 * spacingBase     // 56
  }
};

export { theme };


import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    primary: `#8487FF`,
    primaryDark: `#5256FF`,
    secondary: `#B37CFF`,
    secondaryDark: `#9447FF`,
    tertiary: `#78C7FF`,
    tertiaryDark: `#18192A`,
    light: `#FFF`,
    dark: `#2B2C4A`
  },
  border: {
    radius: `5px`
  },
  typography: {
    family: 'Montserrat, sans-serif',
    weight: {
      regular: 400,
      bold: 700
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
    s1: 0.25,   // 4
    s2: 0.5,    // 8
    s3: 1,      // 16
    s4: 1.5,    // 24
    s5: 2,      // 32
    s6: 2.5,    // 40
    s7: 3,      // 48
    s8: 3.5     // 56
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;


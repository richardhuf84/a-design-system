import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    primary: {
      default: `#8487FF`,
      dark: '#5256FF',
      light: `#A9ABDA`
    },
    secondary: {
      default: `#B37CFF`,
      dark: `#9447FF`,
      light: `#B8A2D7`
    },
    tertiary: {
      default: `#78C7FF`,
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
    }
  },
  border: {
    radius: `5px`,
    size: `2px`
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


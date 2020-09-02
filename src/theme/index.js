import React from 'react';
import { ThemeProvider } from 'styled-components';
import themeA from './themeA';

const Theme = ({ children }) => (
  <ThemeProvider theme={themeA}>{children}</ThemeProvider>
);

export default Theme;


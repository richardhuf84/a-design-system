import React from 'react';
import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/shared/global';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/Theme';
import '@storybook/addon-console';

addDecorator(story => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      {story()}
    </ThemeProvider>
  </>
));
addDecorator(jsxDecorator);
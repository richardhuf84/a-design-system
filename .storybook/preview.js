import React from 'react';
import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/shared/global';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import themeA from '../src/theme/themeA';
import themeB from '../src/theme/themeB';

import '@storybook/addon-console';

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

addDecorator(jsxDecorator);

const themes = [themeA, themeB];

addDecorator(withThemesProvider(themes));
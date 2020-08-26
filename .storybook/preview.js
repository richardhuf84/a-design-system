import React from 'react';
import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/shared/global';
import { jsxDecorator } from 'storybook-addon-jsx';
import '@storybook/addon-console';

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
addDecorator(jsxDecorator);
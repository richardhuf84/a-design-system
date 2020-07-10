import React from 'react';
import { withDesign } from 'storybook-addon-designs'
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withDesign],
};

export const Primary = () => <Button onClick={action('clicked')} primary label="Primary Button" />;

Primary.story = {
  name: 'Button Primary',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ZiPw8PslQzYjpWPkPIRwGu/A-Design-System?node-id=129%3A0',
      allowFullscreen: true,
    },
  },
}

export const Secondary = () => <Button onClick={action('clicked')} secondary label="Secondary Button" />;

Secondary.story = {
  name: 'Button Secondary',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ZiPw8PslQzYjpWPkPIRwGu/A-Design-System?node-id=129%3A17',
      allowFullscreen: true,
    },
  },
}


import React from 'react';
import { withDesign } from 'storybook-addon-designs'
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withDesign, withKnobs],
};

export const Primary = () => <Button disabled={boolean("Disabled", false)} onClick={action('clicked')} primary label="Primary Button" />;

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

export const Secondary = () => <Button disabled={boolean("Disabled", false)} onClick={action('clicked')} secondary label="Secondary Button" />;

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


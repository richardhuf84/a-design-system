import React from 'react';
import { withDesign } from 'storybook-addon-designs'
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  component: Button,
  decorators: [withDesign],
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

Text.story = {
  name: 'Button',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ZiPw8PslQzYjpWPkPIRwGu/A-Design-System?node-id=20%3A1',
      allowFullscreen: true,
    },
  },
}

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
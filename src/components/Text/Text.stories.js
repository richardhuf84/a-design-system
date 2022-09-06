import React from 'react';
import { withDesign } from 'storybook-addon-designs'
import Text from './Text';

const textElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'small'];
const textContent = `The quick brown fox jumps over the lazy dog`;

export default {
  args: {
    children: textContent,
    color: 'dark',
  },
  argsTable: {
    size: {
      control: { type: 'select', options: textElements, default: 'p' }
    },
    tag: {
      control: { type: 'select', options: textElements, default: 'p' }
    },
    weight: {
      control: {
        default: 'regular',
        options: ['regular', 'bold', 'black'],
        type: 'select',
      }
    }
  },
  component: Text,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ZiPw8PslQzYjpWPkPIRwGu/A-Design-System?node-id=231%3A54',
      allowFullscreen: true,
    }
  },
  title: 'Components/Text',
};

const Template = args => <Text {...args} />;
export const paragraph = Template.bind({});
export const small = Template.bind({});

small.args = {
  tag: 'small',
  size: 'small',
  color: 'dark'
}
import React from 'react';
import { withDesign } from 'storybook-addon-designs'
import { withKnobs } from '@storybook/addon-knobs';
import { ColorChip } from './Color.tokens';
import * as tokens from '../../../tokens';

console.log(tokens);

export default {
  args: {
    color: '#000000'
  },
  argsTable: {
    color: {
      control: { type: 'select', options: ['#000', '#F00'] }
    }
  },
  title: 'Tokens/Color',
  component: ColorChip,
  decorators: [withDesign, withKnobs],
};

const Template = (args) => (
  <ColorChip {...args} />
);

export const Default = Template.bind({});
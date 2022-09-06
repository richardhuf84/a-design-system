import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import Color from './Colors';

const colors = ['primary', 'secondary', 'tertiary', 'dark', 'light', 'grey'];
export default {
  title: 'Color',
  component: Color,
  decorators: [withDesign],
  parameters: {
    componentSubtitle: 'Colors make life worth living'
  },
  argsTable: {
    color: {
      control: {
        type: 'select',
        options: colors
      }
    }
  }
};

const Template = (args) => <Color {...args} />;

export const Default = Template.bind({});

import React from 'react';
import { withDesign } from 'storybook-addon-designs'
import SvgHouse from './House';

const sizes = ['small', 'medium', 'large'];

export default {
  title: 'Components/Icon House',
  component: SvgHouse,
  decorators: [withDesign],
  parameters: {
    componentSubtitle: 'One icon to rule them all'
  },
  argsTable: {
    size: {
      control: {
        type: 'select',
        options: sizes
      }
    }
  }
};


export const IconHouse = (args) => <SvgHouse
  {...args} />;
import React from 'react';
import { withDesign } from 'storybook-addon-designs'
import { withKnobs, select } from '@storybook/addon-knobs';
import SvgHouse from './House';


export default {
  title: 'Icon House',
  component: SvgHouse,
  decorators: [withDesign, withKnobs],
  parameters: {
    componentSubtitle: 'One icon to rule them all'
  }
};

const sizes = ['small', 'medium', 'large'];

export const IconHouse = () => <SvgHouse
  size={select('Size', sizes, sizes[0])}

/>;
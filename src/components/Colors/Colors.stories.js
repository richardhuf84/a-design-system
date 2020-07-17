import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { withKnobs } from '@storybook/addon-knobs';
import Color from './Colors';

export default {
  title: 'Color',
  component: Color,
  decorators: [withDesign, withKnobs],
  parameters: {
    componentSubtitle: 'Colors make life worth living'
  }
};

export const ColorPrimary = () => <Color color="primary" />;

export const ColorSecondary = () => <Color color="secondary" />;

export const ColorTertiary = () => <Color color="tertiary" />;

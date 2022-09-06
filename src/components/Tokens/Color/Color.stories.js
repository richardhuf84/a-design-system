import React from 'react';
import { withDesign } from 'storybook-addon-designs'
import { ColorChip, StyledGrid } from './Color.tokens';
import { theme } from '../../../Theme';

const colors = Object.keys(theme.color) //.map(color => color.default);

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
  decorators: [withDesign],
};

export const ColorTokens = (args) => (
  <StyledGrid>{
    colors.map((color, index) => <ColorChip color={color} key={index} />)
  }
  </StyledGrid>
)
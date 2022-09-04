import React from 'react';
import { withDesign } from 'storybook-addon-designs'
import { withKnobs } from '@storybook/addon-knobs';
import Card from './Card';
import Text from '../Text/Text';
import Button from '../Button/Button';

export default {
  title: 'Card',
  component: Card,
  decorators: [withDesign, withKnobs],
};

const Template = (args) => <Card {...args} >
  <Text size="h2">Heading</Text>
  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare mattis urna quis convallis. Mauris eleifend facilisis risus sed sollicitudin. Morbi in iaculis nisi, sed ullamcorper turpis. Nunc lobortis lectus euismod dolor tristique, ut rutrum ex posuere. Mauris quis mattis neque.</Text>

  <Button primary label="Read more" />
</Card>;

export const Default = Template.bind({});
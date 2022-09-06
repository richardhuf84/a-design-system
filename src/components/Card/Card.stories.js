import React from 'react';
import { withDesign } from 'storybook-addon-designs'
import Card from './Card';
import Text from '../Text/Text';
import Button from '../Button/Button';

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [withDesign],
};

const Template = (args) => (
  <>

    <Card {...args}
      main={
        <div>
          <Text size='h2'>Heading</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare mattis urna quis convallis. Mauris eleifend facilisis risus sed sollicitudin. Morbi in iaculis nisi, sed ullamcorper turpis. Nunc lobortis lectus euismod dolor tristique, ut rutrum ex posuere. Mauris quis mattis neque.</Text>
        </div>
      }
      footer={<Button primary label="Read more" />} />

  </>);

export const Default = Template.bind({});
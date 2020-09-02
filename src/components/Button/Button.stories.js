import React from 'react';
import { withDesign } from 'storybook-addon-designs'
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import createStory from '../../helpers/createStory.helper';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withDesign, withKnobs],
  parameters: {
    componentSubtitle: 'Buttons are utilized to initiate an action.'
  },
  args: {
    disabled: boolean("Disabled", false),
    onClick: action('clicked')
  }
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Default Button",
};

export const Primary = Template.bind({});

Primary.args = {
  label: "Primary Button",
  primary: true
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: "Secondary Button",
  secondary: true
}

export const Tertiary = Template.bind({});

Tertiary.args = {
  label: "Tertiary Button",
  tertiary: true
}


createStory(Primary, 'Button Primary', 'https://www.figma.com/file/ZiPw8PslQzYjpWPkPIRwGu/A-Design-System?node-id=129%3A0')

createStory(Secondary, 'Button Secondary', 'https://www.figma.com/file/ZiPw8PslQzYjpWPkPIRwGu/A-Design-System?node-id=129%3A17')

createStory(Tertiary, 'Button Tertiary', 'https://www.figma.com/file/ZiPw8PslQzYjpWPkPIRwGu/A-Design-System?node-id=191%3A0')

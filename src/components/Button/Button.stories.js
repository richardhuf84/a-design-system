import React from 'react';
import { withDesign } from 'storybook-addon-designs'
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [withDesign],
  parameters: {
    componentSubtitle: 'Buttons are utilized to initiate an action.'
  },
  args: {
    disabled: false,
    onClick: () => ({})
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

Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/ZiPw8PslQzYjpWPkPIRwGu/A-Design-System?node-id=129%3A0',
    allowFullscreen: true,
  }
}


export const Secondary = Template.bind({});

Secondary.args = {
  label: "Secondary Button",
  secondary: true
}

Secondary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/ZiPw8PslQzYjpWPkPIRwGu/A-Design-System?node-id=129%3A17',
    allowFullscreen: true,
  }
}

export const Tertiary = Template.bind({});

Tertiary.args = {
  label: "Tertiary Button",
  tertiary: true
}

Tertiary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/ZiPw8PslQzYjpWPkPIRwGu/A-Design-System?node-id=191%3A0',
    allowFullscreen: true,
  }
}
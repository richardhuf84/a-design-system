import React from 'react';
import { withDesign } from 'storybook-addon-designs'
import { withKnobs, select } from '@storybook/addon-knobs';
// import createStory from '../../helpers/createStory.helper';
import Text from './Text';

export default {
  title: 'Text',
  component: Text,
  decorators: [withDesign, withKnobs],
};

const textContent = `The quick brown fox jumps over the lazy dog`;
const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'small'];
const defaultTag = 'p';
const weights = ['regular', 'bold', 'black'];

const Template = args => <Text {...args} />;

export const paragraph = Template.bind({});

paragraph.args = {
  tag: select('Tag', tags, defaultTag),
  size: select('Size', tags, defaultTag),
  weight: select('Weight', weights, 'regular'),
  color: 'dark',
  children: textContent
};

export const small = Template.bind({});

small.args = {
  tag: 'small',
  size: 'small',
  weight: select('Weight', weights, 'regular'),
  color: "dark"
}

// export const small = () => <Text tag="small" size="small" weight={select('Weight', weights, 'regular')} color="dark">{textContent}</Text>;

// createStory(paragraph, 'Paragraph', 'https://www.figma.com/file/ZiPw8PslQzYjpWPkPIRwGu/A-Design-System?node-id=231%3A54');

// createStory(typography, 'Typography', 'https://www.figma.com/file/ZiPw8PslQzYjpWPkPIRwGu/A-Design-System?node-id=231%3A54');
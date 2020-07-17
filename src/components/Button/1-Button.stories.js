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
};

export const Primary = () => <Button disabled={boolean("Disabled", false)} onClick={action('clicked')} primary label="Primary Button" />;


export const Secondary = () => <Button disabled={boolean("Disabled", false)} onClick={action('clicked')} secondary label="Secondary Button" />;

export const Tertiary = () => <Button disabled={boolean("Disabled", false)} onClick={action('clicked')} tertiary label="Tertiary Button" />;

createStory(Primary, 'Button Primary', 'https://www.figma.com/file/ZiPw8PslQzYjpWPkPIRwGu/A-Design-System?node-id=129%3A0')

createStory(Secondary, 'Button Secondary', 'https://www.figma.com/file/ZiPw8PslQzYjpWPkPIRwGu/A-Design-System?node-id=129%3A17')

createStory(Tertiary, 'Button Tertiary', 'https://www.figma.com/file/ZiPw8PslQzYjpWPkPIRwGu/A-Design-System?node-id=191%3A0')

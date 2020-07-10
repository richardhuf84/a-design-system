module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    'storybook-addon-designs',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y/register',
    '@storybook/addon-backgrounds/register'
  ],
};

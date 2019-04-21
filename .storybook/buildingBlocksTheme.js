import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#006fcf',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#006fcf',
  barSelectedColor: '#00175a',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Building Blocks',
});
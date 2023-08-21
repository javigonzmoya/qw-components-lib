// .storybook/YourTheme.js

import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'QW-COMPONENTS-LIB',
  //   brandUrl: 'https://example.com',
  //   brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  //   brandTarget: '_self',
  colorPrimary: '#18b6f6',
  colorSecondary: '#ac7ff4',

  //   // UI
  appBorderRadius: 4,

  //   // Toolbar default and active colors
  barTextColor: '#713fc2',

  //   // Form colors
  inputBorder: '#713fc2',
  inputTextColor: '#ffffff',
  inputBorderRadius: 2,
});

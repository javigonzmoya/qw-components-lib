// .storybook/YourTheme.js

import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'QW-DESIGN-SYS',
  //   brandUrl: 'https://example.com',
  //   brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  //   brandTarget: '_self',
  //---- colors default qwik ----
  //   --qwik-dark-blue: #006ce9;
  //   --qwik-light-blue: #18b6f6;
  //   --qwik-light-purple: #ac7ff4;
  //   --qwik-dark-purple: #713fc2;
  //   --qwik-dirty-black: #1d2033;
  //   --qwik-dark-background: #151934;
  //   --qwik-dark-text: #ffffff;
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

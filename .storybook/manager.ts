// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import qwTheme from './qw-theme';

addons.setConfig({
  theme: qwTheme,
});

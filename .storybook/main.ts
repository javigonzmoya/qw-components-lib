import { StorybookConfig } from 'storybook-framework-qwik';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    { name: 'storybook-design-token', options: { preserveCSSVars: false } },
  ],
  framework: {
    name: 'storybook-framework-qwik',
  },
  core: {
    renderer: 'storybook-framework-qwik',
  },
  stories: [
    // ...rootMain.stories,
    '../src/components/**/*.stories.mdx',
    '../src/docs/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  docs: {
    //👇 See the table below for the list of supported options
    autodocs: 'tag',
    defaultName: 'Docs',
  },
  viteFinal: async (config: any) => {
    return config;
  },
};

export default config;

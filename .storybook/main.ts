import { StorybookConfig } from '@storybook/react-webpack5';
import remarkGfm from 'remark-gfm';
const config: StorybookConfig = {
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm]
          }
        }
      }
    },
    '@storybook/addon-links',
    '@storybook/addon-interactions'
  ],
  async babel(config) {
    const localConfig = {
      ...config,
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              chrome: 100
            }
          }
        ],
        '@babel/preset-typescript',
        '@babel/preset-react'
      ],
      plugins: []
    };
    return localConfig;
  },
  core: {
    disableTelemetry: true
  },
  docs: {
    autodocs: true,
    defaultName: 'API'
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  stories: [
    '../src/stories/**/*.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ]
};

export default config;

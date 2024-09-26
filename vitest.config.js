import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config.js';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      coverage: {
        exclude: [
          ...configDefaults.exclude,
          '**/node_modules/**',
          '**/dist/**',
          './postcss.config.js',
          './tailwind.config.js',
          'src/plugins',
          'src/router',
          'src/validation'
        ]
      }
    }
  })
);

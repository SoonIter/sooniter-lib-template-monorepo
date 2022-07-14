/// <reference types="vitest" />
import { defineConfig } from 'vite';
import path from 'path';// eslint-disable-line

export default defineConfig({
  test: {
    globals: false,
    environment: 'happy-dom',
    cache: {
      dir: path.resolve(__dirname, './node_modules/.vitest'),
    },
  },
});

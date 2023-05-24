/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@Assets',
        replacement: resolve(__dirname, 'src/assets'),
      },
      {
        find: '@Common',
        replacement: resolve(__dirname, 'src/common'),
      },
      {
        find: '@Components',
        replacement: resolve(__dirname, 'src/components'),
      },
      {
        find: '@Pages',
        replacement: resolve(__dirname, 'src/pages'),
      },
      {
        find: '@Providers',
        replacement: resolve(__dirname, 'src/providers'),
      },
      {
        find: '@Sections',
        replacement: resolve(__dirname, 'src/sections'),
      },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
})

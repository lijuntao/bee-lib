import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/index.js',
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['lodash-es'],
      output: {
        globals: {
          'lodash-es': 'lodash-es'
        }
      }
    },
  }
})

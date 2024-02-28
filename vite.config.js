import { defineConfig } from 'vite';
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/entry.js'),
      name: 'AstroVueIcon',
      fileName: 'astro-vue-icon',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: process.env.VERCEL ? '/stack-apps/vue/' : '/',
  plugins: [vue()],
  server: {
    headers: {
      'Content-Security-Policy': 'frame-ancestors *',
    },
  },
});

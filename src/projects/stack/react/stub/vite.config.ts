import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.VERCEL ? '/stack-apps/react/' : '/',
  plugins: [react()],
  server: {
    headers: {
      'Content-Security-Policy': 'frame-ancestors *',
    },
  },
});

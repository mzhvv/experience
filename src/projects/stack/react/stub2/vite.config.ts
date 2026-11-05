import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.VERCEL ? '/stack-apps/react-stub2/' : '/',
  plugins: [react()],
  server: {
    headers: {
      'Content-Security-Policy': 'frame-ancestors *',
    },
  },
});

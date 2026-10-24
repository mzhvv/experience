// src/projects/mzhvv/monorepo/apps/web/next.config.ts

import type { NextConfig } from 'next';

async function rewrites() {
  // Если мы НЕ на Vercel (то есть локально), включаем прокси
  if (!process.env.VERCEL) {
    return [
      {
        source: '/api-fastapi/:path*',
        destination: 'http://127.0.0.1:8000/api-fastapi/:path*',
      },
    ];
  }
  return [];
}

const nextConfig: NextConfig = {
  transpilePackages: ['@workspace/ui'],
  rewrites: async () => await rewrites(),
};

export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@workspace/ui'],

  async rewrites() {
    // Применяем rewrites ТОЛЬКО в режиме разработки (локально)
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/api-fastapi/:path*',
          destination: 'http://127.0.0.1:8000/api-fastapi/:path*',
        },
      ];
    }

    // На Vercel (production) возвращаем пустой массив,
    // чтобы Vercel сам маршрутизировал через vercel.json
    return [];
  },
};

export default nextConfig;

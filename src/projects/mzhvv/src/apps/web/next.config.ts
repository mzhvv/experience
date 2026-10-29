// src/projects/mzhvv/monorepo/apps/web/next.config.ts

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@workspace/ui'],
};

export default nextConfig;

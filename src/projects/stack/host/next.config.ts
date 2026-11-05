import type { NextConfig } from 'next';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const hostDirectory = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  assetPrefix: '/stack',
  outputFileTracingRoot: join(hostDirectory, '../../../..'),
};

export default nextConfig;

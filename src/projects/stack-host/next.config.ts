import type { NextConfig } from 'next';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const hostDirectory = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  basePath: process.env.VERCEL ? '/stack-host' : undefined,
  outputFileTracingRoot: join(hostDirectory, '../../..'),
};

export default nextConfig;

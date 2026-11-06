// src/projects/mzhvv/next.config.ts

import type { NextConfig } from 'next';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectDirectory = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: process.env.DOCKER_BUILD ? 'standalone' : undefined,
  // transpilePackages: ['@workspace/shadcn-ui'],
  outputFileTracingRoot: join(projectDirectory, '../../..'),
};

export default nextConfig;

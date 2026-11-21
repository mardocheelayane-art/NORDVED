
/** @type {import('next').NextConfig} */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  poweredByHeader: false,

  compress: true,

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: 'export',

  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },

  basePath: '/ck-creative-space',
  assetPrefix: '/ck-creative-space/',
};

export default nextConfig;
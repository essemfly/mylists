/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: '/mylists/',
    basePath: '/mylists',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;
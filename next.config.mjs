/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: '/mylists/',
    basePath: '/mylists',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;
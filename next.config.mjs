/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/mylists',
    assetPrefix: '/mylists/',  
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;

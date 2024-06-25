/** @type {import('next').NextConfig} */
const prefix =   process.env.NODE_ENV === 'production' ? 'https://mylists.shout-out.org/' : ''
const nextConfig = {
    output: 'export',
    assetPrefix: prefix,
};

export default nextConfig;

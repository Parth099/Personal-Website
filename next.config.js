/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["images.credly.com"], // Add the external domain
    },
};

module.exports = nextConfig;

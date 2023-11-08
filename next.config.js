/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["127.0.0.1", "154.41.254.191"], // Add any other allowed domains if needed
  },
};

module.exports = nextConfig;

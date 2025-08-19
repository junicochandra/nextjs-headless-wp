/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev.junicochandra.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;

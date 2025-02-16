/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ssuet.edu.pk",
      },
    ],
  },
};

module.exports = nextConfig;

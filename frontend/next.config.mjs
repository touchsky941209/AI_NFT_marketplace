/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    config.resolve.fallback = {
      fs: false,
    };
    return config
  },
  reactStrictMode: false,
  env: {
    NEXT_APP_PINATA_KEY: process.env.NEXT_APP_PINATA_KEY,
    NEXT_APP_PINATA_SECRET: process.env.NEXT_APP_PINATA_SECRET,
    NEXT_APP_PINATA_JWT: process.env.NEXT_APP_PINATA_JWT,
    NEXT_APP_PINATA_JWT: process.env.NEXT_APP_PINATA_JWT,
  },
};

export default nextConfig;

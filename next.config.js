/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  optimizeFonts: true,
  images: {
    domains: [
      'fakestoreapi.com',
      'thegmenstore-dev.s3.ap-southeast-1.amazonaws.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });

    return config;
  },
};

module.exports = nextConfig;

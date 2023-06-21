/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['fakestoreapi.com'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: [{ loader: '@svgr/webpack', options: { icon: true } }],
        });

        return config;
    },
}

module.exports = nextConfig

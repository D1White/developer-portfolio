/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  sassOptions: {
    prependData: `
      @import 'styles/helpers/variables.scss';
      @import 'styles/helpers/mixins.scss';
    `,
  },
};

module.exports = nextConfig;

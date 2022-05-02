/** @type {import('next').NextConfig} */

const webpackConfig = [
  {
    test: /\.svg$/i,
    type: 'asset',
    resourceQuery: /url/, // *.svg?url
  },
  {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
    use: ['@svgr/webpack'],
  },
];

const nextConfig = {
  webpack(config) {
    config.module.rules.push(...webpackConfig);

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

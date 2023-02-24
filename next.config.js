const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
});

const nextConfig = {
  images: {
    domains: ['upload.wikimedia.org'],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
};

module.exports = withMDX(nextConfig);

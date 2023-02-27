const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = {
  images: {
    domains: ['upload.wikimedia.org'],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
};

module.exports = withMDX(nextConfig);

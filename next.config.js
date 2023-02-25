// import rehypeHighlight from 'rehype-highlight';
// const rehypeHighlight = require('rehype-highlight');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  // options: {
  //   rehypePlugins: [rehypeHighlight],
  //   providerImportSource: '@mdx-js/react',
  // },
});

const nextConfig = {
  images: {
    domains: ['upload.wikimedia.org'],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
};

module.exports = withMDX(nextConfig);

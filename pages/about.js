import fs from 'fs';
import path from 'path';
import rehypeHighlight from 'rehype-highlight';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { Typography, Box, Divider } from '@mui/material';
import Layout from '../components/Layout';
import SEO, { defaultSiteMeta } from '../components/SEO';
import { InlineCode, PreCode } from '../styles/PostComponents';

const components = {
  code: ({ children }) => <InlineCode>{children}</InlineCode>,
  pre: ({ children }) => <PreCode>{children}</PreCode>,
};

async function getAboutData() {
  const filePath = path.join(process.cwd(), 'about.mdx');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const mdxSource = await serialize(fileContents, {
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  });
  const mdxContent = mdxSource.compiledSource;

  return {
    mdxContent,
  };
}

export async function getStaticProps() {
  const aboutFile = await getAboutData();
  return {
    props: {
      aboutFile,
    },
  };
}

const About = ({ aboutFile }) => {
  return (
    <>
      <SEO {...defaultSiteMeta} title='本站介紹 | Mia Blog' />
      <Layout>
        <Box maxWidth='720px' m='0 auto'>
          <Typography variant='h4' pt='24px' pb='32px' fontWeight={500}>
            About
          </Typography>
          <Divider />
          <Typography component={'div'}>
            <MDXRemote
              compiledSource={aboutFile.mdxContent}
              components={components}
            />
          </Typography>
        </Box>
      </Layout>
    </>
  );
};

export default About;

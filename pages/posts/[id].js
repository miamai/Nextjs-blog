import { MDXRemote } from 'next-mdx-remote';
import { Typography, Box, Divider } from '@mui/material';
import Layout from '../../components/Layout';
import { getPostIds, getPostData } from '../../lib/posts';
import {
  ResponsiveImage,
  BlueText,
  PinkText,
  Caption,
} from '../../styles/PostComponents';

const components = {
  img: ResponsiveImage,
  BlueText,
  PinkText,
  Caption,
};

export async function getStaticPaths() {
  const paths = getPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Box maxWidth='720px' m='0 auto' pt='24px'>
        <Typography>{postData.date}</Typography>
        <Typography pb='16px' variant='h4' fontWeight={500}>
          {postData.title}
        </Typography>
        <Divider />
        <Typography component={'div'}>
          <MDXRemote
            compiledSource={postData.mdxContent}
            components={components}
          />
        </Typography>
      </Box>
    </Layout>
  );
}

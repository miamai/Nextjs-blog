import { MDXRemote } from 'next-mdx-remote';
import { Typography, Box, Divider } from '@mui/material';
import Layout from '../../components/Layout';
import { getPostIds, getPostData, getSortedPosts } from '../../lib/posts';
import SEO, { defaultSiteMeta } from '../../components/SEO';

import {
  ResponsiveImage,
  BlueText,
  PinkText,
  Caption,
  InlineCode,
  PreCode,
} from '../../styles/PostComponents';
import PostPagination from '../../components/pagination/PostPagination';

const components = {
  img: ResponsiveImage,
  code: ({ children }) => <InlineCode>{children}</InlineCode>,
  pre: ({ children }) => <PreCode>{children}</PreCode>,
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
  const allPostsData = getSortedPosts();
  const curIndex = allPostsData.findIndex((post) => post.id === params.id);
  const prevPost = allPostsData[curIndex - 1] || null;
  const nextPost = allPostsData[curIndex + 1] || null;
  return {
    props: {
      postData,
      prevPost,
      nextPost,
    },
  };
}

export default function Post({ postData, prevPost, nextPost }) {
  return (
    <>
      <SEO
        {...defaultSiteMeta}
        ogImage={postData.image}
        ogType='article'
        description={postData.title}
      />
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
          <PostPagination prevPost={prevPost} nextPost={nextPost} />
        </Box>
      </Layout>
    </>
  );
}

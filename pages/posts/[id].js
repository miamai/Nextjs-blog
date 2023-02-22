import { Typography, Box, Divider } from '@mui/material';
import { MDXRemote } from 'next-mdx-remote';
import Layout from '../../components/Layout';

import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostIds();
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
  console.log(postData.mdxSource);
  return (
    <Layout>
      <Box maxWidth='720px' m='0 auto' pt='24px'>
        <Typography>{postData.date}</Typography>
        <Typography gutterBottom variant='h4' fontWeight={500}>
          {postData.title}
        </Typography>
        <Divider />
        {/* <Typography
          dangerouslySetInnerHTML={{
            __html: postData.contentHtml,
          }}
        /> */}
        <MDXRemote compiledSource={postData.mdxSource.compiledSource} />
        {/* {postData.mdxSource.compiledSource} */}
      </Box>
    </Layout>
  );
}

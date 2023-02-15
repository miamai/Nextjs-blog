import { Typography, Box, Divider } from '@mui/material';
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
  return (
    <Layout>
      <Box pt='24px'>
        <Typography>{postData.date}</Typography>
        <Typography gutterBottom variant='h4' fontWeight={500}>
          {postData.title}
        </Typography>
        <Divider />
        <Typography>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Typography>
      </Box>
    </Layout>
  );
}

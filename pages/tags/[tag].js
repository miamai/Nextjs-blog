import { Typography, Chip } from '@mui/material';
import { Box } from '@mui/system';
import Layout from '../../components/Layout';
import PostList from '../../components/PostList';
import { getAllTags, getFilteredTagsData } from '../../lib/tags';
import SEO, { defaultSiteMeta } from '../../components/SEO';

export async function getStaticPaths() {
  const tags = await getAllTags();
  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const tagData = await getFilteredTagsData(params.tag);

  return {
    props: { tagData, tag: params.tag },
  };
}

export default function Tag({ tagData, tag }) {
  return (
    <>
      <SEO
        {...defaultSiteMeta}
        title={`${tag} | Mia Blog`}
        description='我的部落格標籤分類'
      />
      <Layout>
        <Box maxWidth='720px' m='0 auto'>
          <Box
            pt='24px'
            pb='32px'
            sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Chip label={`${tag}`} variant='filled' color='primary' />
            <Typography>{tagData.length}篇文章</Typography>
          </Box>
          <PostList tagData={tagData} tag={tag} />
        </Box>
      </Layout>
    </>
  );
}

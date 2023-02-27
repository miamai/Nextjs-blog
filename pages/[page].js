import { getSortedPosts } from '../lib/posts';
import { getAllTags } from '../lib/tags';
import { POST_PER_PAGE } from '.';

import { Typography, Grid } from '@mui/material';
import HomePost from '../components/home/HomePost';
import HomeIntro from '../components/home/HomeIntro';
import Layout from '../components/Layout';
import Pagination from '../components/pagination/Pagination';
import TagBox from '../components/home/TagBox';
import SEO, { defaultSiteMeta } from '../components/SEO';

export async function getStaticPaths() {
  const allPostsData = getSortedPosts();
  const totalPages = Math.ceil(allPostsData.length / POST_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: `page${i + 1}` },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPostsData = getSortedPosts();
  const tagCount = await getAllTags();
  const tagLabels = Object.keys(tagCount);
  const pageNumber = parseInt(params.page.split('page')[1]);
  const displayPosts = allPostsData.slice(
    POST_PER_PAGE * (pageNumber - 1),
    POST_PER_PAGE * pageNumber
  );
  const paginations = {
    currentPage: pageNumber,
    totalPages: Math.ceil(allPostsData.length / POST_PER_PAGE),
  };
  return {
    props: {
      displayPosts,
      paginations,
      tagLabels,
    },
  };
}

export default function PostPage({ displayPosts, paginations, tagLabels }) {
  return (
    <>
      <SEO {...defaultSiteMeta} />
      <Layout home>
        <HomeIntro />
        <section>
          <Typography variant='h4' pt='24px' pb='32px'>
            文章列表
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <TagBox tagLabels={tagLabels} />
            </Grid>
            <HomePost initialPosts={displayPosts} title='All Posts' />
          </Grid>
          {paginations.totalPages > 1 && (
            <Pagination paginations={paginations} />
          )}
        </section>
      </Layout>
    </>
  );
}

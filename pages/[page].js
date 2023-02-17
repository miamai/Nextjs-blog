import { getSortedPostsData } from '../lib/posts';
import { POST_PER_PAGE } from '.';

import { Typography, Grid } from '@mui/material';
import HomePost from '../components/home/HomePost';
import HomeIntro from '../components/home/HomeIntro';
import Layout from '../components/Layout';
import Pagination from '../components/home/Pagination';
import TagBox from '../components/home/TagBox';

export async function getStaticPaths() {
  const allPostsData = getSortedPostsData();
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
  const allPostsData = getSortedPostsData();
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
      allPostsData,
      displayPosts,
      paginations,
    },
  };
}

// getStaticProps
// PostList
// index 中也要有PostList，因為getStaticProps不能傳過去

export default function PostPage({ allPostsData, displayPosts, paginations }) {
  return (
    <>
      <Layout home>
        <HomeIntro />
        <section>
          <Typography variant='h4' pt='24px' pb='32px'>
            Posts
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <TagBox />
            </Grid>
            <HomePost
              allPostsData={allPostsData}
              initialPosts={displayPosts}
              paginations={paginations}
              title='All Posts'
            />
          </Grid>
          {paginations.totalPages > 1 && (
            <Pagination paginations={paginations} />
          )}
        </section>
      </Layout>
    </>
  );
}

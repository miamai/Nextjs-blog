// import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { Typography, Grid } from '@mui/material';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import HomeIntro from '../components/home/HomeIntro';
import TagBox from '../components/home/TagBox';
import HomeSplash from '../components/home/HomeSplash';
import HomePost from '../components/home/HomePost';
import Pagination from '../components/home/Pagination';

export const POST_PER_PAGE = 6;

export function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const initialPosts = allPostsData.slice(0, POST_PER_PAGE);
  const paginations = {
    currentPage: 1,
    totalPages: Math.ceil(allPostsData.length / POST_PER_PAGE),
  };
  return {
    props: {
      allPostsData,
      initialPosts,
      paginations,
    },
  };
}

export default function Home({ initialPosts, open, paginations }) {
  return (
    <>
      {open ? (
        <HomeSplash />
      ) : (
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
              <HomePost initialPosts={initialPosts} />
            </Grid>
            {paginations.totalPages > 1 && (
              <Pagination paginations={paginations} />
            )}
          </section>
        </Layout>
      )}
    </>
  );
}

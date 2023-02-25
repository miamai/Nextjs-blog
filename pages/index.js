import { Typography, Grid } from '@mui/material';
import Layout from '../components/Layout';
import { getSortedPosts } from '../lib/posts';
import { getAllTags } from '../lib/tags';
import HomeIntro from '../components/home/HomeIntro';
import TagBox from '../components/home/TagBox';
import HomeSplash from '../components/home/HomeSplash';
import HomePost from '../components/home/HomePost';
import Pagination from '../components/home/Pagination';
import SEO from '../components/seo/SEO';
import { defaultSiteMeta } from '../components/seo/siteMetaData';

export const POST_PER_PAGE = 6;

export async function getStaticProps() {
  const allPostsData = getSortedPosts();
  const tagCount = await getAllTags();
  const tagLabels = Object.keys(tagCount);
  const initialPosts = allPostsData.slice(0, POST_PER_PAGE);
  const paginations = {
    currentPage: 1,
    totalPages: Math.ceil(allPostsData.length / POST_PER_PAGE),
  };

  return {
    props: {
      initialPosts,
      paginations,
      tagLabels,
    },
  };
}

export default function Home({ open, initialPosts, paginations, tagLabels }) {
  return (
    <>
      <SEO {...defaultSiteMeta} />
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
                <TagBox tagLabels={tagLabels} />
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

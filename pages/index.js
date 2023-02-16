// import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Chip,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import HomeIntro from '../components/home_compon/HomeIntro';
import TagBox from '../components/home_compon/TagBox';
import HomeSplash from '../components/home_compon/HomeSplash';
import Pagination from '../components/home_compon/Pagination';

const POST_PER_PAGE = 6;

export function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const initialPosts = allPostsData.slice(0, POST_PER_PAGE);
  const paginations = {
    currentPage: 1,
    totalPages: Math.ceil(allPostsData.length / POST_PER_PAGE),
  };
  return {
    // props: {
    //   allPostsData,
    // },
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
          <section>
            <HomeIntro />
          </section>
          <section>
            <Typography variant='h4' pt='24px' pb='32px'>
              Posts
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <TagBox />
              </Grid>
              <Grid container item xs={12} md={9} spacing={2}>
                {initialPosts.map(({ id, title, date, tags, images }) => (
                  <Grid item xs={12} sm={6} key={id}>
                    <Card variant='outlined' sx={{ height: '100%' }}>
                      <CardMedia image={`${images}`} title='123' />
                      {/* <Image
                      src={`${images}`}
                      alt='1223'
                      width={150}
                      height={150}
                    /> */}
                      <CardContent>
                        <Link href={`/posts/${id}`} passHref legacyBehavior>
                          <Typography
                            gutterBottom
                            variant='h5'
                            sx={{
                              '&:hover': {
                                color: 'primary.main',
                                cursor: 'pointer',
                              },
                            }}
                          >
                            {title}
                          </Typography>
                        </Link>
                        <Typography gutterBottom variant='h6'>
                          {date}
                        </Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '10px',
                          }}
                        >
                          {tags.map((tag, idx) => (
                            <Link
                              key={idx}
                              href={`/tags/${tag}`}
                              passHref
                              legacyBehavior
                            >
                              <Chip
                                label={`${tag}`}
                                variant='filled'
                                clickable
                              />
                            </Link>
                          ))}
                        </Box>
                      </CardContent>
                      <CardActions>
                        <Link href={`/posts/${id}`} passHref legacyBehavior>
                          <Button
                            size='small'
                            endIcon={<ArrowForwardIosIcon />}
                            sx={{ fontWeight: 700 }}
                          >
                            全文
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
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

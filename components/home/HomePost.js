import Link from 'next/link';
import Image from 'next/image';

import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HomePost = ({ initialPosts }) => {
  return (
    <Grid container item xs={12} md={9} spacing={2}>
      {initialPosts.map(({ id, title, date, tags, image }) => (
        <Grid item xs={12} sm={6} key={id}>
          <Card variant='outlined' sx={{ height: '100%' }}>
            {image && (
              <Box
                sx={{
                  width: '100%',
                  height: ['250px', '400px'],
                  position: 'relative',
                }}
              >
                <Image src={`${image}`} alt={`${id}`} fill objectFit='cover' />
              </Box>
            )}
            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href={`/posts/${id}`} passHref legacyBehavior>
                <Typography
                  gutterBottom
                  variant='h5'
                  fontWeight={700}
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
                  <Link key={idx} href={`/tags/${tag}`} passHref legacyBehavior>
                    <Chip label={`${tag}`} variant='filled' clickable />
                  </Link>
                ))}
              </Box>

              <Link href={`/posts/${id}`} passHref legacyBehavior>
                <Button
                  size='small'
                  endIcon={<ArrowForwardIosIcon />}
                  sx={{ fontWeight: 700, alignSelf: 'flex-end' }}
                >
                  全文
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePost;

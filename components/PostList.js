import Link from 'next/link';
import Image from 'next/image';

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PostList = ({ tagData }) => {
  return (
    <Grid container spacing={2}>
      {tagData.map(({ id, title, date, tags, image, excerpt }) => (
        <Grid item xs={12} key={id}>
          <Card variant='outlined'>
            <Box
              sx={{
                display: 'flex',
                flexDirection: ['column', 'row'],
              }}
            >
              {image && (
                <Box
                  sx={{
                    width: ['100%', '250px'],
                    height: ['250px', 'auto'],
                    position: 'relative',
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={`${image}`}
                    alt={`${id}`}
                    fill
                    objectFit='cover'
                  />
                </Box>
              )}
              <CardContent
                sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
              >
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
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {tags.map((tag, idx) => (
                    <Link
                      key={idx}
                      href={`/tags/${tag}`}
                      passHref
                      legacyBehavior
                    >
                      <Chip label={`${tag}`} variant='filled' clickable />
                    </Link>
                  ))}
                </Box>
                <Typography
                  color='custom.textGray'
                  sx={{
                    '&.MuiTypography-root': {
                      fontSize: '14px',
                    },
                    pt: '16px',
                    pb: '16px',
                  }}
                >{`${excerpt} ...`}</Typography>
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
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;

import Link from 'next/link';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  CardActions,
  Button,
} from '@mui/material';

const PostList = ({ tagData, tag }) => {
  return (
    <Grid container spacing={2}>
      {tagData.map(({ id, title, date, tags }) => (
        <Grid item xs={12} key={id}>
          <Card variant='outlined'>
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
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {tags.map((tag, idx) => (
                  <Link key={idx} href={`/tags/${tag}`} passHref legacyBehavior>
                    <Chip label={`${tag}`} variant='filled' clickable />
                  </Link>
                ))}
              </Box>
            </CardContent>
            <CardActions>
              <Link href={`/posts/${id}`} passHref legacyBehavior>
                <Button size='small' sx={{ fontWeight: 700 }}>
                  全文
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;

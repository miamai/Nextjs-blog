import Link from 'next/link';

import { Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PostPagination = ({ nextPost, prevPost }) => {
  const items = [
    {
      startIcon: <ArrowBackIcon />,
      endIcon: null,
      title: prevPost ? prevPost.title : null,
      path: prevPost ? `/posts/${prevPost.id}` : '',
      hasPage: prevPost ? true : false,
    },
    {
      startIcon: null,
      endIcon: <ArrowForwardIcon />,
      title: nextPost ? nextPost.title : null,
      path: nextPost ? `/posts/${nextPost.id}` : '',
      hasPage: nextPost ? true : false,
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: ['column', 'row'],
        justifyContent: 'space-between',
        gap: '16px',
        pt: '40px',
      }}
    >
      {items.map((item, idx) => (
        <Link key={idx} href={item.path} passHref legacyBehavior>
          <Button
            variant='outlined'
            sx={{
              display: 'flex',
              alignItems: 'center',
              minWidth: '32px',
              borderRadius: '4px',
              fontWeight: 700,
              p: '3px 10px',
              m: '0 5px',
              ...(!item.hasPage && {
                display: 'none',
              }),
            }}
          >
            {item.startIcon}
            {item.title}
            {item.endIcon}
          </Button>
        </Link>
      ))}
    </Box>
  );
};

export default PostPagination;

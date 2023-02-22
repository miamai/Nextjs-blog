import Link from 'next/link';

import { Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Pagination = ({ paginations }) => {
  const totalPages = paginations.totalPages;
  const currentPage = paginations.currentPage;
  const prevPage = parseInt(currentPage) - 1 > 0;
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages);

  const items = [
    {
      icon: <ArrowBackIcon />,
      path: currentPage - 1 === 1 ? '/' : `/page${currentPage - 1}`,
      disable: !prevPage ? true : false,
    },
    ...Array.from({ length: totalPages }, (_, i) => ({
      icon: i + 1,
      path: i === 0 ? '/' : `/page${i + 1}`,
      disable: false,
      active: i + 1 === currentPage ? true : false,
    })),
    {
      icon: <ArrowForwardIcon />,
      path: `/page${currentPage + 1}`,
      disable: !nextPage ? true : false,
    },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', pt: '40px' }}>
      {items.map((item, idx) => (
        <Link key={idx} href={item.path} passHref legacyBehavior>
          <Button
            variant='outlined'
            disabled={item.disable}
            sx={{
              minWidth: '32px',
              borderRadius: '10px',
              fontWeight: 700,
              p: '3px 10px',
              m: '0 5px',
              ...(item.active && {
                bgcolor: 'primary.dark',
                color: 'primary.light',
              }),
            }}
          >
            {item.icon}
          </Button>
        </Link>
      ))}
    </Box>
  );
};

export default Pagination;

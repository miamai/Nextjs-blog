import Link from 'next/link';

import { Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Pagination = () => {
  const items = [
    { icon: <ArrowBackIcon />, path: '' },
    { icon: '1', path: '' },
    { icon: <ArrowForwardIcon />, path: '' },
  ];
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      {items.map((item, idx) => (
        <Link key={idx} href={'123'} passHref legacyBehavior>
          <Button
            variant='outlined'
            sx={{
              minWidth: '32px',
              borderRadius: '10px',
              p: '5px 10px',
              m: '0 5px',
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

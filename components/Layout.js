import Link from 'next/link';

import { Box, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, home }) {
  const defaultPadding = {
    pl: { xs: '16px', sm: '24px' },
    pr: { xs: '16px', sm: '24px' },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Header />
      <Box
        component='main'
        sx={{ ...defaultPadding, flexGrow: 1, maxWidth: '1200px', m: '0 auto' }}
      >
        <div>{children}</div>

        {!home && (
          <Box maxWidth='720px' m='0 auto' pt='16px'>
            <Link href='/' passHref legacyBehavior>
              <Button
                startIcon={<ArrowBackIosNewIcon />}
                sx={{ fontWeight: 700 }}
              >
                回首頁
              </Button>
            </Link>
          </Box>
        )}
      </Box>
      <Box component='footer' sx={{ ...defaultPadding }}>
        <Footer />
      </Box>
    </Box>
  );
}

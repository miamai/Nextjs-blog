import Link from 'next/link';

import { Box, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, home }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Header />
      <Box
        sx={{ pl: { xs: '16px', sm: '24px' }, pr: { xs: '16px', sm: '24px' } }}
      >
        <main>{children}</main>

        {!home && (
          <Box>
            <Link href='/' passHref legacyBehavior>
              <Button startIcon={<ArrowBackIosNewIcon />}>Back to home</Button>
            </Link>
          </Box>
        )}
        <Footer />
      </Box>
    </Box>
  );
}

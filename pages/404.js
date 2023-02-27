import { Box, Typography } from '@mui/material';
import Layout from '../components/Layout';
import SEO, { defaultSiteMeta } from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO {...defaultSiteMeta} title='找不到頁面 | Mia Blog' />
      <Layout>
        <Box
          sx={{
            width: '100%',
            height: [`calc(100vh - 265px)`, `calc(100vh - 235px)`],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            fontWeight={500}
            variant='h4'
            sx={{
              borderRight: '1px solid rgba(0, 0, 0, .3)',
              pr: '16px',
            }}
          >
            404
          </Typography>
          <Typography
            fontWeight={500}
            sx={{
              pl: '16px',
              fontSize: '16px',
            }}
          >
            沒有這個頁面
          </Typography>
        </Box>
      </Layout>
    </>
  );
};

export default NotFound;

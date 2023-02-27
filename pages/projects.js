import Image from 'next/image';
import { Typography, Box, Divider, Card, CardContent } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import Layout from '../components/Layout';
import SEO, { defaultSiteMeta } from '../components/SEO';

const Projects = () => {
  return (
    <>
      <SEO
        {...defaultSiteMeta}
        title='作品 | Mia Blog'
        ogImage='/images/projects/crypto_caculator_og_img.PNG'
      />
      <Layout>
        <Box maxWidth='720px' m='0 auto'>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h4' pt='24px' pb='32px' fontWeight={500}>
              作品
            </Typography>
            <Divider />
            <Box
              sx={{
                display: 'flex',
                pt: '24px',
                flexDirection: ['column', 'row'],
              }}
            >
              <Box
                sx={{
                  width: ['100%', '80%'],
                  height: ['285px', '385px'],
                  transform: 'none',
                  opacity: [1, 0.8],
                  '&:hover': {
                    transform: ['none', 'scale(1.05)'],
                    opacity: 1,
                  },
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                  }}
                >
                  <a
                    href='https://crypto-profit-web.netlify.app/'
                    target='_blank'
                  >
                    <Image
                      src='/images/projects/crypto_caculator_og_img.PNG'
                      alt='crypto_caculator_og_img'
                      fill
                      objectFit='cover'
                      priority
                    />
                  </a>
                </div>
              </Box>
              <Box
                sx={{
                  width: ['100%', '40%'],
                  m: 'auto 0',
                  zIndex: 1000,
                  ml: [0, '-100px'],
                  pt: ['16px', 0],
                }}
              >
                <Card sx={{ bgcolor: 'custom.paper' }}>
                  <CardContent>
                    <a
                      href='https://crypto-profit-web.netlify.app/'
                      target='_blank'
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        gutterBottom
                        component={'div'}
                        variant='h5'
                        fontWeight={700}
                        sx={{
                          display: 'flex',
                          gap: '12px',
                          alignItems: 'center',
                          color: 'text.primary',
                          '&:hover': {
                            color: 'primary.main',
                            cursor: 'pointer',
                          },
                        }}
                      >
                        CRYPTO PROFITS
                        <LaunchIcon fontSize='12px' />
                      </Typography>
                    </a>

                    <Typography>
                      使用API及React製作一個虛擬貨幣計算web
                      app，另外加上紀錄保存、即時消息、存取最愛等功能。
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
            <Typography component={'div'} fontSize='12px' fontWeight={700}>
              <ul
                style={{
                  fontStyle: 'italic',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'end',
                  gap: '12px',
                }}
              >
                <li>React-Router</li>
                <li>React</li>
                <li>Firebase</li>
                <li>HighCharts</li>
                <li>MUI</li>
              </ul>
            </Typography>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Projects;

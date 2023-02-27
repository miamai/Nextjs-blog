import Image from 'next/image';

import { Box, Card, CardContent, Typography } from '@mui/material';

const HomeIntro = () => {
  const style = {
    container: {
      width: ['100%', '70%'],
      height: '50vh',
      backgroundImage: 'url(/images/Japan_travel.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.9,
    },
    textBox: {
      textAlign: 'center',
      position: 'relative',
      top: '50%',
      transform: 'translate(0, -50%)',
    },
    headLine: {
      display: 'inline-block',
      backgroundColor: 'background.default',
      opacity: 0.9,
      p: '8px',
      m: '8px',
    },
    introBox: {
      width: ['100%', '30%'],
      margin: 'auto 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: ['24px', null],
    },
    imageBox: {
      borderRadius: '100px',
      position: 'relative',
      overflow: 'hidden',
      height: '150px',
      width: '150px',
      zIndex: '100',
      top: [null, '-100px'],
    },
    card: {
      bgcolor: 'custom.paper',
      pt: [null, '60px'],
      position: [null, 'absolute'],
      width: '100%',
    },
  };

  return (
    <Box
      display='flex'
      flexDirection={{ xs: 'column', sm: 'row' }}
      gap='24px'
      pt='24px'
      pb='32px'
    >
      <Box sx={style.container}>
        <Box sx={style.textBox}>
          <Typography variant='h6' sx={style.headLine}>
            這是我的部落格!
          </Typography>
          <br />
          <Typography variant='h6' sx={style.headLine}>
            朝前端工程師路上中， 隨手分享生活、心得
          </Typography>
        </Box>
      </Box>
      <Box sx={style.introBox} data-aos='fade-up'>
        <Box component={'div'} sx={style.imageBox}>
          <Image
            priority={true}
            alt={'my profile'}
            src='/images/profile.jpg'
            fill
            objectFit='cover'
          />
        </Box>
        <Card sx={style.card}>
          <CardContent>
            <Typography
              color='custom.textGray'
              sx={{
                '&.MuiTypography-root': {
                  fontSize: '14px',
                },
              }}
            >
              哈囉!我是Mia Mai👋
              從2022年9月開始學習前端，慢慢有了看文檔的樂趣，希望有朝打通任督二脈。
              <br />
              更多關於我的學經歷在resume中!
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default HomeIntro;

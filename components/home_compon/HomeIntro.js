import Image from 'next/image';
import Typewriter from 'typewriter-effect';

import { Box, Typography } from '@mui/material';
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
      <Box sx={{ m: '0 auto' }}>
        <Image
          priority={true}
          src='/images/profile_disney.jpg'
          height={152}
          width={152}
          alt={'my profile'}
        />
      </Box>
    </Box>
  );
};

export default HomeIntro;

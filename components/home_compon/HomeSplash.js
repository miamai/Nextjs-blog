import { useEffect, useState } from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { Box, Typography } from '@mui/material';

const HomeSplash = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  }, []);

  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 100,
        backgroundImage: 'url(/images/Jiufen_background_img.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...(isVisible == false && {
          display: 'none',
          transform: 'translate(0px, -753.6px)',
        }),
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='h2'
          sx={{
            color: '#fff',
            fontWeight: 700,
          }}
        >
          <Typewriter
            options={{
              strings: ['Hello! This is Mia<span>&#39;</span>s Blog!'],
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
        {/* <Image src='/images/' /> */}
      </Box>
    </Box>
  );
};

export default HomeSplash;

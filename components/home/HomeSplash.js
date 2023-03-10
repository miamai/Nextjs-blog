import Typewriter from 'typewriter-effect';
import { Box, Typography } from '@mui/material';

const HomeSplash = () => {
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
          pl: '16px',
          pr: '16px',
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
              delay: 75,
            }}
          />
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeSplash;

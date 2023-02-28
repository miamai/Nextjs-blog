import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
  const mediaHref = {
    email: 'cb121466@gmail.com',
    gitHub: 'https://github.com/miamai',
  };

  return (
    <Box
      sx={{
        maxWidth: '1200px',
        m: '0 auto',
        pt: '40px',
        pb: '40px',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography fontSize='14px'>
        &copy; 2023 Mia Mai | Next.js Blog
      </Typography>
      <Box sx={{ display: 'flex', gap: '8px' }}>
        <a
          href={`${mediaHref.gitHub}`}
          style={{ textDecoration: 'none' }}
          target='_blank'
        >
          <GitHubIcon
            sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}
          />
        </a>
        <a
          href={`mailto:${mediaHref.email}`}
          style={{ textDecoration: 'none' }}
          target='_blank'
        >
          <EmailIcon
            sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}
          />
        </a>
      </Box>
    </Box>
  );
};

export default Footer;

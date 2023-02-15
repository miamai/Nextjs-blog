import { Button, Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
  return (
    <Box
      sx={{
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
        <GitHubIcon />
        <EmailIcon />
      </Box>
    </Box>
  );
};

export default Footer;

import { Box, Typography } from '@mui/material';

export const ResponsiveImage = (props) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img
      src={props.src}
      alt={props.alt}
      style={{ maxWidth: '100%', width: 'auto', maxHeight: '500px' }}
    />
  </div>
);

export const BlueText = ({ children }) => (
  <Typography color='primary.dark' display='inline'>
    {children}
  </Typography>
);

export const PinkText = ({ children }) => (
  <Typography color='custom.textPink' display='inline'>
    {children}
  </Typography>
);

export const Caption = ({ children }) => (
  <Typography
    component='div'
    color='custom.textGrey'
    sx={{
      textAlign: 'center',
      '&.MuiTypography-root': {
        fontSize: '14px',
      },
    }}
  >
    {children}
  </Typography>
);

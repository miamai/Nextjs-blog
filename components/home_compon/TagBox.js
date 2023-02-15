import { Chip, Box, Typography } from '@mui/material';

const TagBox = () => {
  const filterHandler = () => {};
  return (
    <Box
      sx={{
        border: '1px solid #bdbdbd',
        borderRadius: '4px',
        p: '20px',
        mb: '20px',
      }}
    >
      <Typography variant='h6' pb='8px'>
        Tags
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <Chip label='閱讀心得' variant='outlined' />
        <Chip label='雜筆' variant='outlined' />
        <Chip label='音樂' variant='outlined' />
        <Chip label='程式' variant='outlined' />
      </Box>
    </Box>
  );
};

export default TagBox;

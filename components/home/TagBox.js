import Link from 'next/link';
import { Chip, Box, Typography } from '@mui/material';

const TagBox = ({ tagLabels }) => {
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
        {tagLabels.map((tag, idx) => (
          <Link key={idx} href={`/tags/${tag}`} passHref legacyBehavior>
            <Chip label={`${tag}`} variant='outline' clickable />
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default TagBox;

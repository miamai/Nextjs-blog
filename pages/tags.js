import { Typography } from '@mui/material';
import { getFilteredTagsData } from '../lib/tags';

export default function Tags({ clickedTagData }) {
  return <Typography variant='h4'>{}</Typography>;
}

export async function getStaticProps() {
  const clickedTagData = getFilteredTagsData();
  return {
    props: {
      clickedTagData,
    },
  };
}

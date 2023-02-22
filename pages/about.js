import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Typography, Box, Divider } from '@mui/material';
import Layout from '../components/Layout';

async function getAboutData() {
  const filePath = path.join(process.cwd(), 'about.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    ...matterResult.data,
  };
}

export async function getStaticProps() {
  const aboutFile = await getAboutData();
  return {
    props: {
      aboutFile,
    },
  };
}

const About = ({ aboutFile }) => {
  return (
    <Layout>
      <Box maxWidth='720px' m='0 auto'>
        <Typography variant='h4' pt='24px' pb='32px' fontWeight={500}>
          About
        </Typography>
        <Divider />
        <Typography
          dangerouslySetInnerHTML={{ __html: aboutFile.contentHtml }}
        />
      </Box>
    </Layout>
  );
};

export default About;

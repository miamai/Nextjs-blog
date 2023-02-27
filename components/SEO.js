import Head from 'next/head';
import { useRouter } from 'next/router';

export const defaultSiteMeta = {
  title: 'Mia Blog',
  description: '這是我的部落格!朝前端工程師路上中， 隨手分享生活、心得',
  siteUrl: 'https://nextjs-blog-miamai.vercel.app',
  ogImage: '/images/Jiufen_background_img.jpg',
  ogType: 'website',
};

const SEO = (props) => {
  const { title, description, siteUrl, ogType, ogImage } = props;
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:url' content={`${siteUrl}${router.asPath}`} />
      <meta property='og:type' content={ogType} />
      <meta property='og:site_name' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:image' content={ogImage} key={ogImage} />
    </Head>
  );
};

export default SEO;

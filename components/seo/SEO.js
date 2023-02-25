import Head from 'next/head';
import { useRouter } from 'next/router';

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

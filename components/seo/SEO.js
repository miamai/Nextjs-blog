import Head from 'next/head';
import { useRouter } from 'next/router';

const SEO = (props) => {
  const { title, description, ogType, ogImage, canonicalUrl } = props;
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta
        property='og:url'
        // content={`${siteMetadata.siteUrl}${router.asPath}`}
      />
      <meta property='og:type' content={ogType} />
      <meta property='og:site_name' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:title' content={title} />
      {/* {ogImage.constructor.name === 'Array' ? (
        ogImage.map(({ url }) => (
          <meta property='og:image' content={url} key={url} />
        ))
      ) : (
        <meta property='og:image' content={ogImage} key={ogImage} />
      )} */}

      {/* <link
        rel='canonical'
        href={
          canonicalUrl
            ? canonicalUrl
            : `${siteMetadata.siteUrl}${router.asPath}`
        }
      /> */}
    </Head>
  );
};

export default SEO;

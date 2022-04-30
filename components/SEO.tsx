import React, { FC } from 'react';
import Head from 'next/head';

export interface Props {
  title: string;
  description: string;
  image?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

const SEO: FC<Props> = ({
  title,
  description,
  image,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
}) => {
  const metaTitle = `${title} | Danylo Bilyi`;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {image && <meta name="image" content={image} />}

      {(ogTitle || title) && (
        <>
          <meta property="og:title" content={ogTitle || metaTitle} />
          <meta property="twitter:title" content={ogTitle || metaTitle} />
        </>
      )}

      {(ogDescription || description) && (
        <>
          <meta property="og:description" content={ogDescription || description} />
          <meta property="twitter:description" content={ogDescription || description} />
        </>
      )}

      {(ogImage || image) && <meta property="og:image" content={ogImage || image} />}

      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary" />
    </Head>
  );
};

export default SEO;

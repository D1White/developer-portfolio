import React, { FC } from 'react';
import Head from 'next/head';
import { ISeo } from 'types/contentful';

export interface Props {
  data: ISeo;
}

const SEO: FC<Props> = ({ data }) => {
  const metaTitle = `${data.fields.title} | Danylo Bilyi`;
  const description = data.fields.description;
  const keywords = data.fields.keywords?.join(', ');
  const image = data.fields.image?.fields.file.url;
  const ogTitle = data.fields.ogTitle;
  const ogDescription = data.fields.ogDescription;
  const ogImage = data.fields.ogImage?.fields.file.url;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {image && <meta name="image" content={image} />}

      <meta property="og:title" content={ogTitle || metaTitle} />
      <meta property="twitter:title" content={ogTitle || metaTitle} />

      <meta property="og:description" content={ogDescription || description} />
      <meta property="twitter:description" content={ogDescription || description} />

      {(ogImage || image) && <meta property="og:image" content={ogImage || image} />}

      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary" />
    </Head>
  );
};

export default SEO;

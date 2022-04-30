import type { NextPage } from 'next';
import React from 'react';

import SEO from '@components/SEO';

import { seoData } from '@constants/seo';

const Home: NextPage = () => {
  return (
    <>
      <SEO title={seoData.home.title} description={seoData.home.description} />
      <main>Home</main>
    </>
  );
};

export default Home;

import type { NextPage } from 'next';
import React from 'react';

import SEO from '@components/SEO';
import HeroSection from '@components/HeroSection';

import { seoData } from '@constants/seo';

const Home: NextPage = () => {
  return (
    <>
      <SEO title={seoData.home.title} description={seoData.home.description} />
      <main>
        <HeroSection />
      </main>
    </>
  );
};

export default Home;

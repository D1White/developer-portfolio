import type { NextPage } from 'next';
import React from 'react';

import SEO from '@components/SEO';
import HeroSection from '@components/HeroSection';
import Skills from '@components/Skills';

import { seoData } from '@assets/constants/seo';

const Home: NextPage = () => {
  return (
    <>
      <SEO title={seoData.home.title} description={seoData.home.description} />
      <main>
        <HeroSection />
        <Skills />
      </main>
    </>
  );
};

export default Home;

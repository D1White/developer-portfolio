import type { NextPage } from 'next';
import React from 'react';

import SEO from '@components/SEO';
import HeroSection from '@components/HeroSection';
import Skills from '@components/Skills';
import Works from '@components/Projects';

import { seoData } from '@assets/constants/seo';

const Home: NextPage = () => {
  return (
    <>
      <SEO title={seoData.home.title} description={seoData.home.description} />
      <main>
        <HeroSection />
        <Skills />
        <Works />
      </main>
    </>
  );
};

export default Home;

import type { NextPage } from 'next';

import SEO from '@components/SEO';

import { seoData } from '@constants/seo';

const Home: NextPage = () => {
  return (
    <>
      <SEO title={seoData.home.title} description={seoData.home.description} />
      <main></main>
    </>
  );
};

export default Home;

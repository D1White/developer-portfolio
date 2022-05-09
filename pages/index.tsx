import type { GetStaticProps, NextPage } from 'next';
import React from 'react';

import Header from '@components/Header';
import SEO from '@components/SEO';
import HeroSection from '@components/HeroSection';
import Skills from '@components/Skills';
import Projects from '@components/Projects';
import Contacts from '@components/Contacts';
import Quote from '@components/Quote';
import { getSkills, getProjects, getContacts } from '@utils/api';
import { ISkills, IProject, IContacts } from 'types/contentful';
import { seoData } from '@assets/constants/seo';

interface Props {
  skills: ISkills[];
  projects: IProject[];
  contacts: IContacts;
}

const Home: NextPage<Props> = ({ skills, projects, contacts }) => {
  return (
    <>
      <SEO title={seoData.home.title} description={seoData.home.description} />
      <Header contacts={contacts} />
      <main>
        <HeroSection />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contacts data={contacts} />
        <Quote />
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const skills = await getSkills();
  const projects = await getProjects();
  const contacts = await getContacts();

  return {
    props: { skills, projects, contacts },
  };
};

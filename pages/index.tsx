import type { GetStaticProps, NextPage } from 'next';
import React from 'react';

import Header from '@components/Header';
import SEO from '@components/SEO';
import HeroSection from '@components/HeroSection';
import Skills from '@components/Skills';
import Projects from '@components/Projects';
import Contacts from '@components/Contacts';
import Quote from '@components/Quote';
import { getSkills, getProjects, getContacts, getEntry } from '@utils/api';
import { ISkills, IProject, IContacts, ISeo } from 'types/contentful';

interface Props {
  skills: ISkills[];
  projects: IProject[];
  contacts: IContacts;
  seo: ISeo;
}

const Home: NextPage<Props> = ({ skills, projects, contacts, seo }) => {
  return (
    <>
      <SEO data={seo} />
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
  const seo = await getEntry<ISeo>('1NC7usoeM9gPbQqnxWY72v');

  return {
    props: { skills, projects, contacts, seo },
  };
};

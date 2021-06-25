import Head from 'next/head';
import React from 'react';
import { HeroContainer } from '../components/molecules/HeroContainer';
import { HeroContent } from '../components/molecules/HeroContent';
import { Navbar } from '../components/organisms/Navbar';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Chika</title>
    </Head>
    <Navbar />
    <HeroContainer>
      <HeroContent />
    </HeroContainer>
  </>
);
export default Home;

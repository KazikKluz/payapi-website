import type { NextPage } from 'next';
import Hero from '../components/Hero';
import Companies from '../components/Companies';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Companies />
    </>
  );
};

export default Home;

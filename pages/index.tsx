import type { NextPage } from 'next';
import Hero from '../components/Hero';
import Companies from '../components/Companies';
import Description from '../components/Description';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Companies />
      <Description />
    </>
  );
};

export default Home;

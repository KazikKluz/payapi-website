import type { NextPage } from 'next';
import Hero from '../components/Hero';
import Companies from '../components/Companies';
import Description from '../components/Description';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Companies />
      <Description />
      <Footer />
    </>
  );
};

export default Home;

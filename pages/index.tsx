import type { NextPage } from 'next';
import Hero from '../components/Hero';
import Companies from '../components/Companies';
import Description from '../components/Description';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Companies />
      <Description />
      <Footer />
    </div>
  );
};

export default Home;

import type { NextPage } from 'next';

import Navbar from '../components/Navbar';
import Form from '../components/Form';
import CompLogos from '../components/CompLogos';
import ReadyToStart from '../components/ReadyToStart';
import Footer from '../components/Footer';

const Contact: NextPage = () => {
  return (
    <>
      <div className='bg-background w-full'>
        <div
          className='pt-[4rem]   relative bg-background overflow-hidden
    bg-circle bg-no-repeat bg-[length:780px_780px] bg-[right_-47.9rem_top_-64.4rem]
    md:bg-[right_-51.7rem_top_-46.4rem] xl:bg-[right_-14rem_top_-52.7rem] xl:w-[144rem] mx-auto'
        >
          <div className='px-[2.4rem] md:px-[3.9rem] xl:px-[16.5rem] pb-[8rem] md:pb-[3.4rem] xl:pb-0 md:mx-auto  '>
            <Navbar />
            <h3
              className='font-serif text-sanJuanBlue text-[3.2rem] md:text-[4.8rem] 
             leading-[3.6rem] md:leading-[5.6rem] tracking-[-0.246154px] 
          md:tracking-[-0.369231px] mt-[4.8rem] md:mt-[7.5rem] xl:mt-[8.2rem] xl:text-[5.6rem] xl:tracking-[-0.430769px]
          h-[11.6rem] md:w-[57.3rem] md:h-[17.8rem] xl:h-[13.3rem] md:mx-auto xl:w-[73rem] xl:ml-0 text-center mb-[4rem]
           md:mb-[5.4rem] xl:mb-[4.3rem] xl:text-left'
            >
              Submit a help request <br /> and we’ll get in touch shortly.
            </h3>
            <div className='xl:flex xl:flex-row xl:justify-between'>
              <div className='mb-[8rem] md:mb-[6.4rem] xl:mb-0'>
                <Form />
              </div>
              <div className='xl:mt-[12.2rem]'>
                <h4
                  className='font-serif text-[2.4rem] leading-[3.2rem] tracking-[-0.184615px] text-center
            text-sanJuanBlue/75 mb-[3.2rem] md:mb-[4rem] md:w-[44.5rem] md:mx-auto xl:text-left xl:ml-0 '
                >
                  Join the thousands of innovators already building with us
                </h4>
                <div className='fill-sanJuanBlue'>
                  <CompLogos />
                </div>
              </div>
            </div>
            <ReadyToStart />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;

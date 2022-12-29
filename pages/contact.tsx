import type { NextPage } from 'next';

import Navbar from '../components/Navbar';
import Form from '../components/Form';

const Contact: NextPage = () => {
  return (
    <>
      <div className='bg-background w-full'>
        <div
          className='pt-[4rem]   relative bg-background overflow-hidden
    bg-circle bg-no-repeat bg-[length:780px_780px] bg-[right_-47.9rem_top_-64.4rem]
    md:bg-[right_-51.7rem_top_-46.4rem] xl:bg-[right_-14rem_top_-52.7rem] xl:w-[144rem] mx-auto'
        >
          <div className='px-[2.4rem] md:px-[3.9rem] xl:px-[16.5rem] pb-[8rem] md:pb-[3.4rem] mx-auto '>
            <Navbar />
            <h3
              className='font-serif text-sanJuanBlue text-[3.2rem] md:text-[4.8rem] 
             leading-[3.6rem] md:leading-[5.6rem] tracking-[-0.246154px] 
          md:tracking-[-0.369231px] mt-[4.8rem] md:mt-[7.5rem] xl:mt-[8.2rem] xl:text-[5.6rem] xl:tracking-[-0.430769px]
          h-[11.6rem] md:w-[57.3rem] md:h-[17.8rem] xl:h-[18.9rem] md:mx-auto xl:w-[73rem] xl:ml-0 text-center mb-[4rem]'
            >
              Submit a help request and we’ll get in touch shortly.
            </h3>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

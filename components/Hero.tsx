import Image from 'next/image';
import Navbar from './Navbar';

import mobileImage from '../public/SVG/illustration-phone-mockup.svg';

const Hero = () => {
  return (
    <div
      className='h-[73.7rem] bg-background relative 
    overflow-clip pt-[4rem] px-[11.45833%] -z-[1]'
    >
      <Navbar />
      <div className='relative'>
        <div>
          <h1
            className='font-serif text-sanJuanBlue text-[7.2rem] w-[54.6rem] h-[24.3rem]
          leading-[7.2rem] mt-[15.2rem] tracking-[-0.553846px]'
          >
            Start building with our APIs for absolutely free.
          </h1>
        </div>
        <div className='absolute -top-[13.3rem] -right-[.7rem]'>
          <Image
            src='/SVG/illustration-phone-mockup.svg'
            height={660}
            width={419}
            alt='mobile'
          />
        </div>
      </div>

      <div className='absolute -z-[1] bg-sanJuanBlue w-[78rem] h-[78rem] right-[-9.722222%] top-[-17.2rem] rounded-full opacity-[.15]'></div>
    </div>
  );
};

export default Hero;

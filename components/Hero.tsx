import Image from 'next/image';
import Navbar from './Navbar';
import Button from './Button';

const Hero = () => {
  return (
    <div
      className='xl:h-[73.7rem] md:h-[80.9rem] bg-background bg-circle bg-no-repeat xl:bg-[length:780px_780px]
      md:bg-[length:949px_949px]
      xl:bg-[right_-12.5rem_bottom_9.1rem] md:bg-[center_bottom_52.3rem] relative 
    overflow-clip pt-[4rem] xl:px-[16.5rem] md:px-[4rem] xl:w-[144rem] md:w-[76.8rem] mx-auto'
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
          <form
            className='flex mt-[2.1rem] bg-linkWaterWhite w-[44.5rem] rounded-[2.4rem]
            shadow-button '
          >
            <input
              className='ml-[2.7rem] mr-auto rounded-[2.4rem] font-sans text-[1.5rem] font-[700] placeholder-sanJuanBlue
              placeholder-opacity-50 bg-linkWaterWhite outline-0 w-[54%] text-sanJuanBlue'
              type='text'
              placeholder='Enter email address'
            />
            <Button>Schedule a demo</Button>
          </form>
          <p className='text-lightSanJuanBlue font-[400] text-[1.5rem] leading-[1.8rem] ml-[2.7rem] mt-[1.6rem]'>
            Have any questions? <span className='font-[700]'>Contact Us</span>
          </p>
        </div>
        <div
          className='absolute xl:top-[-13.3rem] md:top-[-13.8rem]  md:w-[28rem] xl:right-[-.7rem] 
        md:translate-x-[76%]'
        >
          <Image
            src='/SVG/illustration-phone-mockup.svg'
            height={660}
            width={419}
            alt='mobile'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

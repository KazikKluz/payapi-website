import Image from 'next/image';
import Navbar from './Navbar';
import Button from './Button';

const Hero = () => {
  return (
    <div
      className='xl:h-[73.7rem] md:h-[80.9rem] sm:h-[73.9rem] bg-background bg-circle bg-no-repeat xl:bg-[length:780px_780px]
      md:bg-[length:949px_949px] sm:bg-[length:780px_780px]
      xl:bg-[right_-12.5rem_bottom_9.1rem] md:bg-[center_bottom_52.3rem] relative 
    overflow-clip pt-[4rem] xl:px-[16.5rem] md:px-[4rem] sm:px-[2.4rem] xl:w-[144rem] md:w-[76.8rem] mx-auto md:flex md:flex-col
    md:justify-between xl:pb-[15.2rem] md:pb-40'
    >
      <Navbar />
      <div className=''>
        <div>
          <h1
            className='font-serif text-sanJuanBlue xl:text-[7.2rem] md:text-[4.8rem] xl:w-[54.6rem] md:w-[57.3rem]
            xl:text-left md:text-center  md:mx-auto xl:ml-0 xl:h-[24.3rem] md:h-[12.2rem]
          xl:leading-[7.2rem] md:leading-[5.6rem] mt-[15.2rem] xl:tracking-[-0.553846px] md:tracking-[-0.369231px]'
          >
            Start building with our APIs for absolutely free.
          </h1>
          <form
            className='flex xl:mt-[2.1rem] md:mt-[2.2rem]  xl:ml-0 md:mx-auto  bg-linkWaterWhite w-[44.5rem] rounded-[2.4rem]
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
          <p className='text-lightSanJuanBlue font-[400] text-[1.5rem] leading-[1.8rem] xl:ml-[2.7rem] xl:text-left md:text-center mt-[1.6rem] '>
            Have any questions? <span className='font-[700]'>Contact Us</span>
          </p>
        </div>
        <div
          className='absolute xl:top-[10.6rem] xl:right-[15.5rem] xl:w-[41.9rem] xl:h-[66rem] md:w-[25.3rem] md:h-auto
        md:top-[10.1rem] md:right-[24.15rem]'
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

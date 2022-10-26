import Image from 'next/image';
import Navbar from './Navbar';
import Button from './Button';

const Hero = () => {
  return (
    <div className='w-[100%] bg-background '>
      <div
        className='xl:h-[73.7rem] md:h-[80.9rem] h-[73.9rem] bg-background bg-circle bg-no-repeat xl:bg-[length:780px_780px]
      md:bg-[length:949px_949px] bg-[length:780px_780px]
      xl:bg-[right_-12.5rem_bottom_9.1rem] md:bg-[center_bottom_52.3rem] bg-[center_top_-55rem] relative 
    overflow-clip pt-[4rem] xl:px-[16.5rem] md:px-[4rem] px-[2.4rem] xl:w-[144rem] md:w-[76.8rem] mx-auto flex flex-col justify-between 
     xl:pb-[15.2rem] md:pb-40 pb-[8rem] '
      >
        <Navbar />
        <div className=''>
          <div className='w-[32.6rem] md:w-auto text-center mx-auto'>
            <h1
              className='font-serif text-sanJuanBlue xl:text-[7.2rem] md:text-[4.8rem] text-[3.15rem] xl:w-[54.6rem] md:w-[57.3rem]
            w-auto xl:text-left md:text-center text-center  md:mx-auto xl:ml-0 xl:h-[24.3rem] md:h-[12.2rem]
          xl:leading-[7.2rem] md:leading-[5.6rem] leading-[3.6rem] mt-[15.2rem] xl:tracking-[-0.553846px] md:tracking-[-0.369231px] tracking-[-0.246154px]'
            >
              Start building with our APIs for absolutely free.
            </h1>
            <form
              className='flex flex-col md:flex-row xl:mt-[2.1rem] md:mt-[2.2rem] mt-[2.4rem] xl:ml-0 md:mx-auto  bg-linkWaterWhite md:w-[44.5rem] 
            rounded-[2.4rem]
            shadow-button relative   w-full'
            >
              <input
                className='ml-[2.7rem] mr-auto rounded-[2.4rem] font-sans text-[1.5rem] font-[700] placeholder-sanJuanBlue
              placeholder-opacity-50 bg-linkWaterWhite outline-0 w-[54%] text-sanJuanBlue  h-[4.8rem] '
                type='text'
                placeholder='Enter email address'
              />
              <div className='absolute md:static top-[6.4rem] w-full md:w-auto shadow-button md:shadow-none rounded-[2.4rem]'>
                <Button>Schedule a demo</Button>
              </div>
            </form>
            <p
              className='text-lightSanJuanBlue font-[400] text-[1.5rem] leading-[1.8rem] xl:ml-[2.7rem] xl:text-left text-center 
          md:mt-[1.6rem] mt-[8.8rem] '
            >
              Have any questions? <span className='font-[700]'>Contact Us</span>
            </p>
          </div>
          <div
            className='absolute xl:top-[10.6rem] xl:right-[15.5rem] xl:w-[41.9rem] xl:h-[66rem] md:w-[25.3rem] h-auto
        md:top-[10.1rem] md:right-[24.15rem] w-[20.3rem] top-[8.6rem] right-[50%] translate-x-[56%] md:translate-x-0'
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
    </div>
  );
};

export default Hero;

import Button from './Button';

const ReadyToStart = () => {
  return (
    <div className='xl:flex xl:flex-row xl:justify-center xl:items-center xl:w-[111rem] mx-auto'>
      <h1
        className='font-serif text-sanJuanBlue  md:text-[4.8rem] text-[3.15rem] xl:w-[44.5rem] md:w-[57.3rem]
            w-auto xl:text-left md:text-center text-center  md:mx-auto xl:ml-0 xl:h-[5.6rem] md:h-[9.6rem]
           md:leading-[5.6rem] leading-[3.6rem] mt-[8rem] md:mt-[10rem]   md:tracking-[-0.369231px] tracking-[-0.246154px]
          xl:my-[9.6rem]'
      >
        Ready to start?
      </h1>
      <form
        className='flex flex-col md:flex-row  md:mt-0 mt-[3.2rem] xl:my-0   bg-linkWaterWhite md:w-[44.5rem] 
            rounded-[2.4rem]
            shadow-button relative  mb-[6.6rem]   w-[32.8rem] mx-auto xl:mr-0'
      >
        <input
          className='ml-[2.7rem] mr-auto rounded-[2.4rem] font-sans text-[1.5rem] font-[700] placeholder-sanJuanBlue
              placeholder-opacity-50 bg-linkWaterWhite outline-0 w-[54%] text-sanJuanBlue  h-[4.8rem] '
          type='text'
          placeholder='Enter email address'
        />
        <div
          className='absolute md:static top-[6.4rem] w-[32.8rem] right-[50%] md:right-0 md:w-auto shadow-button md:shadow-none rounded-[2.4rem]
          translate-x-[50%] md:translate-x-0'
        >
          <Button>Schedule a demo</Button>
        </div>
      </form>
    </div>
  );
};

export default ReadyToStart;

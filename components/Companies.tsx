import ButtonSecondary from './ButtonSecondary';
import CompLogos from './CompLogos';
import Circle from './Circle';

const Companies = () => {
  return (
    <div className='w-[100%] bg-mirageBlue overflow-hidden'>
      <div
        className='flex flex-col xl:flex-row-reverse   h-[67rem] md:h-[61.5rem] bg-mirageBlue 
     py-[8rem] md:py-[8.8rem] px-[2.4rem]
    xl:h-[47.2rem] xl:w-[144rem] xl:mx-auto xl:py-[10rem] xl:px-[16.4rem] items-center 
    fill-linkWaterWhite relative '
      >
        <div
          className='absolute top-[-60rem] right-[calc(50%_-_39rem)]  md:top-[-55rem]  xl:top-[-36rem] xl:left-[-23.5rem] z-10
         w-[78rem] h-[78rem]'
        >
          <Circle size='780' />
        </div>
        <CompLogos />
        <div>
          <h2
            className='text-linkWaterWhite font-serif text-center text-[3.2rem] md:text-[4.8rem] leading-[3.6rem]
        md:leading-[5.6rem] tracking-[-0.246154px] md:tracking-[-0.369231px] mt-[5.6rem] md:mt-[6.4rem]
        xl:mt-0 xl:text-left'
          >
            Who we work with
          </h2>
          <p
            className='text-linkWaterWhite/70 font-sans text-center text-[1.4rem] md:text-[1.5rem] leading-[2.9rem]
        md:leading-[2.8rem] h-[14rem] md:h-[11.2rem] w-[31rem] md:w-[45.6rem] mx-auto mt-[1.6rem] md:mt-[2.4rem] mb-[6rem]
        md:mb-[3.2rem] xl:text-left
        '
          >
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <div className='w-max mx-auto xl:mx-0'>
            <ButtonSecondary dark={true}>About Us</ButtonSecondary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;

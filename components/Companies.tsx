import ButtonSecondary from './ButtonSecondary';

const Companies = () => {
  return (
    <div className='w-[100%] bg-mirageBlue'>
      <div
        className='flex flex-col xl:flex-row-reverse   h-[67rem] md:h-[61.5rem] bg-mirageBlue bg-circle bg-no-repeat bg-[length:78rem_78rem] bg-[center_top_-60rem]
    md:bg-[center_top_-54.8rem] xl:bg-[left_-23.5rem_bottom_5.1rem] py-[8rem] md:py-[8.8rem] px-[2.4rem]
    xl:h-[47.2rem] xl:w-[144rem] xl:mx-auto xl:py-[10rem] xl:px-[16.4rem] items-center 
    '
      >
        <div
          className='w-[28rem] md:w-[53.6rem] mx-auto h-[15.4rem] md:h-[10.3rem] grid grid-cols-2
       md:grid-cols-3 justify-items-stretch gap-y-[4rem]  xl:mr-0'
        >
          <div className='flex items-center justify-start'>
            <svg className='w-[10.7rem] md:w-[12.9rem] h-[1.5rem] md:h-[1.7rem] flex  items-center fill-linkWaterWhite'>
              <use xlinkHref='/sprite.svg#tesla'></use>
            </svg>
          </div>
          <div className='flex items-center justify-end md:justify-center '>
            <svg className='w-[12rem] md:w-[14.5rem] h-[2.6rem] md:h-[3.1rem] fill-linkWaterWhite '>
              <use xlinkHref='/sprite.svg#microsoft'></use>
            </svg>
          </div>
          <div className='flex items-center justify-start md:justify-end'>
            <svg className='w-[11.5rem] md:w-[14rem] h-[2.2rem] md:h-[2.7rem] fill-linkWaterWhite'>
              <use xlinkHref='/sprite.svg#hewlett-packard'></use>
            </svg>
          </div>
          <div className='flex items-center justify-end md:justify-start'>
            <svg className='w-[10.8rem] md:w-[13.1rem] h-[1.4rem] md:h-[1.7rem] fill-linkWaterWhite'>
              <use xlinkHref='/sprite.svg#oracle'></use>
            </svg>
          </div>
          <div className='flex items-center justify-start md:justify-center'>
            <svg className='w-[7.9rem] md:w-[9.6rem] h-[2.7rem] md:h-[3.3rem] fill-linkWaterWhite'>
              <use xlinkHref='/sprite.svg#google'></use>
            </svg>
          </div>
          <div className='flex items-center justify-end md:justify-end'>
            <svg className='w-[11.3rem] md:w-[13.7rem] h-[2.2rem] md:h-[2.6rem] fill-linkWaterWhite '>
              <use xlinkHref='/sprite.svg#nvidia'></use>
            </svg>
          </div>
        </div>
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

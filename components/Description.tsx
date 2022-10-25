import Image from 'next/image';
import Button from './Button';

const Description = () => {
  return (
    <div className='py-[8rem] xl:pt-[15rem] xl:pb-[9.6rem] bg-background   '>
      <div className='xl:flex xl:justify-center xl:gap-x-[12.5rem]'>
        <div
          className='drop-shadow-2xl shadow-button rounded-[6px] text-[0px]  w-[32.8rem] md:w-[39.3rem] mx-auto xl:ml-[16.5rem]
        xl:mr-0 xl:w-[44.4rem]'
        >
          <Image
            className='rounded-[6px]'
            src='/illustration-easy-to-implement.png'
            alt='easy'
            width='445px'
            height='284px'
          />
        </div>
        <div className='xl:mr-auto xl:w-[44.5rem]'>
          <h2
            className='mt-[4.7rem] font-serif text-[3.6rem] md:text-[4.8rem]
        text-center leading-[3.6rem] md:leading-[5.6rem] text-sanJuanBlue tracking-[-0.276923px]
        md:tracking-[-0.369231px] xl:text-left'
          >
            Easy to implement
          </h2>
          <p
            className='font-sans text-[1.5rem] leading-[2.8rem] text-center
        text-lightSanJuanBlue mt-[2.4rem] w-[32.9rem] md:w-[57.3rem] mx-auto xl:w-auto xl:text-left '
          >
            Our API comes with just a few lines of code. You&apos;ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </div>
      <div
        className='mt-[1rem] md:mt-[2.3rem] overflow-hidden relative 
       '
      >
        <div className='w-[32.8rem] h-[32rem] '>
          <div
            className='rounded-[6px] text-[0px] absolute h-auto w-[41.5rem] md:w-[46.5rem]  top-[0] left-[50%] 
          translate-x-[-46.5%]  '
          >
            <Image
              src='/SVG/illustration-simple-ui.svg'
              height={722}
              width={660}
              alt='mobile'
              objectFit='contain'
            />
          </div>
        </div>

        <h2
          className='mt-[8.7rem] md:mt-[12.7rem] font-serif text-[3.6rem] md:text-[4.8rem]
        text-center leading-[3.6rem] md:leading-[5.6rem] text-sanJuanBlue tracking-[-0.276923px]
        md:tracking-[-0.369231px]'
        >
          Simple UI & UX
        </h2>
        <p
          className='font-sans text-[1.5rem] leading-[2.8rem] text-center
        text-lightSanJuanBlue mt-[2.4rem] w-[32.9rem] md:w-[57.3rem] mx-auto'
        >
          Our pre-built form is easy to integrate in your app or website&apos;s
          checkout flow and designed to optimize conversion.
        </p>
      </div>
      <div className='flex flex-col md:flex-row md:gap-x-4 md:justify-center md:mt-40'>
        <div className='text-center mt-[8rem] md:mt-0'>
          <div className='flex justify-center'>
            <svg className='w-[106px] md:w-[8.8rem] md:h-[8.8rem] h-[106px] '>
              <use xlinkHref='sprite.svg#icon-personal-finances'></use>
            </svg>
          </div>
          <h3 className='font-sans font-[700] text-sanJuanBlue text-[1.7rem] leading-[2.5rem] tracking-[-0.138462px] mt-[3.2rem]'>
            Personal Finances
          </h3>
          <p
            className='font-sans text-[1.5rem] leading-[2.5rem] text-lightSanJuanBlue tracking-[-0.115385px] mt-[1.6rem] w-[32.8rem]
          mx-auto md:w-[22.3rem]'
          >
            Consolidate financial data from multiple sources and categorize
            transactions up to 2 years of history. Analyze reports to reconcile
            activities in your account.
          </p>
        </div>
        <div className='text-center mt-[4.8rem] md:mt-0'>
          <div className='flex justify-center'>
            <svg className='w-[106px] h-[106px] md:w-[8.8rem] md:h-[8.8rem]'>
              <use xlinkHref='sprite.svg#icon-banking-and-coverage'></use>
            </svg>
          </div>
          <h3 className='font-sans font-[700] text-sanJuanBlue text-[1.7rem] leading-[2.5rem] tracking-[-0.138462px] mt-[3.2rem]'>
            Banking & Coverage
          </h3>
          <p
            className='font-sans text-[1.5rem] leading-[2.5rem] text-lightSanJuanBlue tracking-[-0.115385px] mt-[1.6rem] w-[32.8rem]
          mx-auto md:w-[22.3rem]'
          >
            With our platform, you can speed up account onboarding and support
            ongoing payments for checking, savings, credit card, and brokerage
            accounts.
          </p>
        </div>
        <div className='text-center mt-[4.8rem] md:mt-0'>
          <div className='flex justify-center'>
            <svg className='w-[106px] h-[106px] md:w-[8.8rem] md:h-[8.8rem]'>
              <use xlinkHref='sprite.svg#icon-consumer-payments'></use>
            </svg>
          </div>
          <h3 className='font-sans font-[700] text-sanJuanBlue text-[1.7rem] leading-[2.5rem] tracking-[-0.138462px] mt-[3.2rem]'>
            Consumer Payments
          </h3>
          <p
            className='font-sans text-[1.5rem] leading-[2.5rem] text-lightSanJuanBlue tracking-[-0.115385px] mt-[1.6rem] w-[32.8rem]
          mx-auto md:w-[22.3rem]'
          >
            It’s easier to set up secure bank payments with us through a flow
            designed with the user experience in mind. Customers could instantly
            authenticate their account.
          </p>
        </div>
      </div>
      <div>
        <h1
          className='font-serif text-sanJuanBlue xl:text-[7.2rem] md:text-[4.8rem] text-[3.15rem] xl:w-[54.6rem] md:w-[57.3rem]
            w-auto xl:text-left md:text-center text-center  md:mx-auto xl:ml-0 xl:h-[24.3rem] md:h-[9.6rem]
          xl:leading-[7.2rem] md:leading-[5.6rem] leading-[3.6rem] mt-[8rem] md:mt-[10rem] xl:tracking-[-0.553846px] md:tracking-[-0.369231px] tracking-[-0.246154px]'
        >
          Ready to start?
        </h1>
        <form
          className='flex flex-col md:flex-row xl:mt-[2.1rem] md:mt-0 mt-[3.2rem] xl:ml-0   bg-linkWaterWhite md:w-[44.5rem] 
            rounded-[2.4rem]
            shadow-button relative  mb-[6.6rem]  w-[32.8rem] mx-auto'
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
    </div>
  );
};

export default Description;

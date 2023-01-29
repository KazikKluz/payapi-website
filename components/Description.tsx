import Image from 'next/image';
import Button from './Button';
import ReadyToStart from './ReadyToStart';

const Description = () => {
  return (
    <div className='w-[100%] bg-background'>
      <div
        className='py-[8rem] xl:pt-[15rem] xl:pb-0 bg-background xl:w-[144rem] mx-auto 
      xl:bg-circle xl:bg-no-repeat xl:bg-[length:780px_780px] xl:bg-[right_-39rem_top_44.4rem] '
      >
        <div className='xl:flex xl:justify-center xl:gap-x-[12.5rem]'>
          <div
            className='drop-shadow-2xl shadow-button rounded-[6px] text-[0px]  w-[32.8rem] md:w-[39.3rem] mx-auto xl:ml-[16.5rem]
        xl:mr-0 xl:w-[44.4rem]'
          >
            <Image
              className='rounded-[6px]'
              src='/payapi-website/illustration-easy-to-implement.png'
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
          className='mt-[1rem] md:mt-[2.3rem] xl:mt-0 overflow-hidden relative xl:flex justify-start items-center
       '
        >
          <div className='w-[32.8rem] h-[32rem] xl:h-[79.6rem] xl:w-auto '>
            <div
              className='rounded-[6px] text-[0px] absolute h-auto w-[41.5rem] md:w-[46.5rem]  top-[0] xl:top-[3rem] left-[50%] 
          translate-x-[-46.5%] xl:left-[77.7%] xl:w-[100rem]  '
            >
              <Image
                src='/payapi-website/SVG/illustration-simple-ui.svg'
                height={792}
                width={724}
                alt='mobile'
                objectFit='contain'
              />
            </div>
          </div>
          <div className='xl:ml-[16.5rem]  xl:h-[13.6rem]'>
            <h2
              className='mt-[8.7rem] md:mt-[12.7rem] xl:mt-0 font-serif text-[3.6rem] md:text-[4.8rem]
        text-center leading-[3.6rem] md:leading-[5.6rem] text-sanJuanBlue tracking-[-0.276923px]
        md:tracking-[-0.369231px] xl:text-left'
            >
              Simple UI & UX
            </h2>
            <p
              className='font-sans text-[1.5rem] leading-[2.8rem] text-center xl:text-left
        text-lightSanJuanBlue mt-[2.4rem] w-[32.9rem] md:w-[57.3rem] xl:w-[44.5rem] mx-auto'
            >
              Our pre-built form is easy to integrate in your app or
              website&apos;s checkout flow and designed to optimize conversion.
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:gap-x-4 xl:gap-x-[3rem] md:justify-center md:mt-40 xl:mt-0'>
          <div className='text-center mt-[8rem] md:mt-0'>
            <div className='flex justify-center'>
              <svg className='w-[106px] md:w-[8.8rem] md:h-[8.8rem] h-[106px] xl:h-[10.6rem] xl:w-[10.6rem] '>
                <use xlinkHref='sprite.svg#icon-personal-finances'></use>
              </svg>
            </div>
            <h3 className='font-sans font-[700] text-sanJuanBlue text-[1.7rem]  leading-[2.5rem] tracking-[-0.138462px] mt-[3.2rem]'>
              Personal Finances
            </h3>
            <p
              className='font-sans text-[1.5rem] leading-[2.5rem] text-lightSanJuanBlue tracking-[-0.115385px] mt-[1.6rem] w-[32.8rem]
          mx-auto md:w-[22.3rem] xl:w-[35rem]'
            >
              Consolidate financial data from multiple sources and categorize
              transactions up to 2 years of history. Analyze reports to
              reconcile activities in your account.
            </p>
          </div>
          <div className='text-center mt-[4.8rem] md:mt-0'>
            <div className='flex justify-center'>
              <svg className='w-[106px] h-[106px] md:w-[8.8rem] md:h-[8.8rem] xl:h-[10.6rem] xl:w-[10.6rem]'>
                <use xlinkHref='sprite.svg#icon-banking-and-coverage'></use>
              </svg>
            </div>
            <h3 className='font-sans font-[700] text-sanJuanBlue text-[1.7rem] leading-[2.5rem] tracking-[-0.138462px] mt-[3.2rem]'>
              Banking & Coverage
            </h3>
            <p
              className='font-sans text-[1.5rem] leading-[2.5rem] text-lightSanJuanBlue tracking-[-0.115385px] mt-[1.6rem] w-[32.8rem]
          mx-auto md:w-[22.3rem] xl:w-[35rem]'
            >
              With our platform, you can speed up account onboarding and support
              ongoing payments for checking, savings, credit card, and brokerage
              accounts.
            </p>
          </div>
          <div className='text-center mt-[4.8rem] md:mt-0'>
            <div className='flex justify-center'>
              <svg className='w-[106px] h-[106px] md:w-[8.8rem] md:h-[8.8rem] xl:h-[10.6rem] xl:w-[10.6rem]'>
                <use xlinkHref='sprite.svg#icon-consumer-payments'></use>
              </svg>
            </div>
            <h3 className='font-sans font-[700] text-sanJuanBlue text-[1.7rem] leading-[2.5rem] tracking-[-0.138462px] mt-[3.2rem]'>
              Consumer Payments
            </h3>
            <p
              className='font-sans text-[1.5rem] leading-[2.5rem] text-lightSanJuanBlue tracking-[-0.115385px] mt-[1.6rem] w-[32.8rem]
          mx-auto md:w-[22.3rem] xl:w-[35rem]'
            >
              It’s easier to set up secure bank payments with us through a flow
              designed with the user experience in mind. Customers could
              instantly authenticate their account.
            </p>
          </div>
        </div>
        <ReadyToStart />
      </div>
    </div>
  );
};

export default Description;

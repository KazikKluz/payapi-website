import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ButtonSecondary from '../components/ButtonSecondary';
import ReadyToStart from '../components/ReadyToStart';

const Pricing: NextPage = () => {
  return (
    <>
      <div className='w-[100%] bg-background '>
        <div
          className=' pt-[4rem]   relative bg-background overflow-hidden
    bg-circle bg-no-repeat bg-[length:780px_780px] bg-[right_-47.9rem_top_-64.4rem]
    md:bg-[right_-51.7rem_top_-46.4rem] xl:bg-[right_-14rem_top_-52.7rem] xl:w-[144rem] mx-auto'
        >
          <div className='px-[2.4rem] md:px-[3.9rem] xl:px-[16.5rem] pb-[8rem] md:pb-[3.4rem] mx-auto '>
            <Navbar />
            <div className='text-center xl:text-left'>
              <h3
                className='font-serif text-sanJuanBlue text-[3.2rem] md:text-[4.8rem] 
             leading-[3.6rem] md:leading-[5.6rem] tracking-[-0.246154px]
          md:tracking-[-0.369231px] mt-[4.8rem] md:mt-[7.5rem] xl:text-[5.6rem] xl:tracking-[-0.430769px]'
              >
                Pricing
              </h3>

              <div className='flex flex-col md:flex-row md:gap-x-[1rem] xl:gap-x-[3rem] md:mt-[2.1rem] '>
                <div className='flex flex-col md:grow'>
                  <div className='flex flex-col  justify-center '>
                    <h4
                      className='font-serif text-darkPink text-[2.4rem]  leading-[3.2rem]
                  xl:leading-[4rem] xl:text-[3.2rem] tracking-[-0.184615px]
              mt-[4.8rem]'
                    >
                      Free Plan
                    </h4>
                    <p
                      className='hidden md:inline-block text-[1.5rem] leading-[2.8rem] text-lightSanJuanBlue
                mt-[1.4rem]'
                    >
                      Build and test using our core set of products with up to
                      100 API requests
                    </p>
                    <h2
                      className='font-serif text-sanJuanBlue text-[5.6rem] leading-[7.2rem] tracking-[-0.430769px]
              mt-[8.1rem] md:mt-[1.9rem] md:text-[4.8rem] '
                    >
                      &#36;0.00
                    </h2>
                    <div className='  border-y border-sanJuanBlue/25 my-[2.4rem]'>
                      <ul
                        className='py-[2.4rem] font-sans text-sanJuanBlue text-[1.6rem] leading-[2.8rem] text-left
                w-[13.4rem] mx-auto xl:ml-0'
                      >
                        <li className='flex'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-darkPink'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Transactions
                        </li>
                        <li className='flex mt-[0.8rem]'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-darkPink'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Auth
                        </li>
                        <li className='flex mt-[0.8rem]'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-darkPink'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Identity
                        </li>
                        <li className='flex opacity-40 mt-[0.8rem]'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-transparent'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Investments
                        </li>
                        <li className='flex opacity-40 mt-[0.8rem]'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-transparent'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Assets
                        </li>
                        <li className='flex opacity-40 mt-[0.8rem]'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-transparent'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Liabilities
                        </li>
                        <li className='flex opacity-40 mt-[0.8rem]'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-transparent'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Income
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='w-min mx-auto xl:ml-0'>
                    <ButtonSecondary dark={false}>
                      Request Access
                    </ButtonSecondary>
                  </div>
                </div>
                <div className='flex flex-col md:grow'>
                  <div className='flex flex-col justify-center '>
                    <h4
                      className='font-serif text-darkPink text-[2.4rem] leading-[3.2rem] tracking-[-0.184615px]
              mt-[4.8rem] xl:leading-[4rem] xl:text-[3.2rem]'
                    >
                      Basic Plan
                    </h4>
                    <p
                      className='hidden md:inline-block text-[1.5rem] leading-[2.8rem] text-lightSanJuanBlue
                mt-[1.4rem]'
                    >
                      Launch your project with unlimited requests and no
                      contractual minimums
                    </p>
                    <h2
                      className='font-serif text-sanJuanBlue text-[5.6rem] leading-[7.2rem] tracking-[-0.430769px]
              mt-[8.1rem] md:mt-[1.9rem] md:text-[4.8rem]'
                    >
                      &#36;249.00
                    </h2>
                    <div className='  border-y border-sanJuanBlue/25 my-[2.4rem]'>
                      <ul
                        className='py-[2.4rem] font-sans text-sanJuanBlue text-[1.6rem] leading-[2.8rem] text-left
                w-[13.4rem] mx-auto xl:ml-0'
                      >
                        <li className='flex'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-darkPink'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Transactions
                        </li>
                        <li className='flex mt-[0.8rem]'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-darkPink'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Auth
                        </li>
                        <li className='flex mt-[0.8rem]'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-darkPink'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Identity
                        </li>
                        <li className='flex  mt-[0.8rem]'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-darkPink'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Investments
                        </li>
                        <li className='flex  mt-[0.8rem]'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-darkPink'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Assets
                        </li>
                        <li className='flex opacity-40 mt-[0.8rem]'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-transparent'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Liabilities
                        </li>
                        <li className='flex opacity-40 mt-[0.8rem]'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-transparent'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Income
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='w-min mx-auto xl:ml-0'>
                    <ButtonSecondary dark={false}>
                      Request Access
                    </ButtonSecondary>
                  </div>
                </div>
                <div className='flex flex-col md:grow'>
                  <div className='flex flex-col justify-center '>
                    <h4
                      className='font-serif text-darkPink text-[2.4rem] leading-[3.2rem] tracking-[-0.184615px]
              mt-[4.8rem] xl:leading-[4rem] xl:text-[3.2rem]'
                    >
                      Premium Plan
                    </h4>
                    <p
                      className='hidden md:inline-block text-[1.5rem] leading-[2.8rem] text-lightSanJuanBlue 
                mt-[1.4rem]'
                    >
                      Get tailored solutions, volume pricing, and dedicated
                      support for your team
                    </p>
                    <h2
                      className='font-serif text-sanJuanBlue text-[5.6rem]  leading-[7.2rem] tracking-[-0.430769px]
              mt-[8.1rem] md:mt-[1.9rem] md:text-[4.8rem]'
                    >
                      &#36;499.00
                    </h2>
                    <div className='  border-y border-sanJuanBlue/25 my-[2.4rem]'>
                      <ul
                        className='py-[2.4rem] font-sans text-sanJuanBlue text-[1.6rem] leading-[2.8rem] text-left
                w-[13.4rem] mx-auto xl:ml-0'
                      >
                        <li className='flex'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-darkPink'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Transactions
                        </li>
                        <li className='flex mt-[0.8rem]'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-darkPink'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Auth
                        </li>
                        <li className='flex mt-[0.8rem]'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-darkPink'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Identity
                        </li>
                        <li className='flex  mt-[0.8rem]'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-darkPink'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Investments
                        </li>
                        <li className='flex mt-[0.8rem]'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-darkPink'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Assets
                        </li>
                        <li className='flex  mt-[0.8rem]'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-darkPink'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Liabilities
                        </li>
                        <li className='flex  mt-[0.8rem]'>
                          <span className='flex items-center '>
                            <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-darkPink'>
                              <use xlinkHref='/payapi-website/sprite.svg#icon-check'></use>
                            </svg>
                          </span>
                          Income
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='w-min mx-auto xl:ml-0'>
                    <ButtonSecondary dark={false}>
                      Request Access
                    </ButtonSecondary>
                  </div>
                </div>
              </div>
              <ReadyToStart />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;

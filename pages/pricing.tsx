import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ButtonSecondary from '../components/ButtonSecondary';

const Home: NextPage = () => {
  return (
    <div className=' pt-[4rem]  relative bg-background overflow-clip'>
      <div className='px-[2.4rem] mx-auto '>
        <Navbar />
        <div className='text-center'>
          <h3
            className='font-serif text-sanJuanBlue text-[3.2rem] leading-[3.6rem] tracking-[-0.246154px]
          mt-[4.8rem]'
          >
            Pricing
          </h3>
          <div className='flex flex-col'>
            <div className='flex flex-col justify-center '>
              <h4
                className='font-serif text-darkPink text-[2.4rem] leading-[3.2rem] tracking-[-0.184615px]
              mt-[4.8rem]'
              >
                Free Plan
              </h4>
              <h2
                className='font-serif text-sanJuanBlue text-[5.6rem] leading-[7.2rem] tracking-[-0.430769px]
              mt-[8.1rem]'
              >
                &#36;0.00
              </h2>
              <div className='  border-y border-sanJuanBlue/25 my-[2.4rem]'>
                <ul
                  className='py-[2.4rem] font-sans text-sanJuanBlue text-[1.6rem] leading-[2.8rem] text-left
                w-[13.4rem] mx-auto'
                >
                  <li className='flex'>
                    <span className='flex items-center '>
                      <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-darkPink'>
                        <use xlinkHref='/sprite.svg#icon-check'></use>
                      </svg>
                    </span>
                    Transactions
                  </li>
                  <li className='flex'>
                    <span className='flex items-center '>
                      <svg className='w-[1.5rem] h-[1.5rem] mr-[2.4rem] stroke-darkPink'>
                        <use xlinkHref='/sprite.svg#icon-check'></use>
                      </svg>
                    </span>
                    Auth
                  </li>
                  <li>Identity</li>
                  <li>Investments</li>
                  <li>Assets</li>
                  <li>Liabilities</li>
                  <li>Income</li>
                </ul>
              </div>
            </div>
            <div className='w-min mx-auto'>
              <ButtonSecondary dark={false}>Request Access</ButtonSecondary>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

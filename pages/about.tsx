import type { NextPage } from 'next';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ButtonSecondary from '../components/ButtonSecondary';
import ReadyToStart from '../components/ReadyToStart';

const About: NextPage = () => {
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
          md:tracking-[-0.369231px] mt-[4.8rem] md:mt-[7.5rem] xl:text-[5.6rem] xl:tracking-[-0.430769px]
          h-[15.2rem]'
              >
                We empower <br className='md:hidden' /> innovators <br /> by
                delivering access to the financial system
              </h3>

              <div>
                <div className='text-center'>
                  <h4
                    className='font-serif text-sanJuanBlue text-[2.4rem] leading-[3.2rem]  tracking-[-0.184615px]
                  mt-[4rem]'
                  >
                    Our Vision
                  </h4>
                  <p className='font-sans text-lightSanJuanBlue text-[1.5rem] leading-[2.8rem] mt-[1.6rem]'>
                    Our main goal is to build beautiful consumer experiences
                    along with developer-friendly infrastructure. The result is
                    an intelligent tool that gives everyone the ability to
                    create amazing products that solve big problems. We are
                    deeply focused on democratizing financial services through
                    technology.
                  </p>
                </div>
                <div>
                  <h4
                    className='font-serif text-sanJuanBlue text-[2.4rem] leading-[3.2rem]  tracking-[-0.184615px]
                  mt-[4rem]'
                  >
                    Our Business
                  </h4>
                  <p className='font-sans text-lightSanJuanBlue text-[1.5rem] leading-[2.8rem] mt-[1.6rem]'>
                    At the core of our platform is the technical infrastructure
                    APIs that connect consumers. Our innovative product provides
                    key insights for businesses and individuals, as well as
                    robust reporting for traditional financial institutions and
                    developers.
                  </p>
                </div>
              </div>
              <div className='relative  w-full  '>
                <picture
                  className='  absolute top-0  right-2/4 translate-x-[50%]
                '
                >
                  <source
                    media='(max-width: 640px)'
                    srcSet={`/image-team-members-mobile.jpg`}
                  />
                  <img src={`/image-team-members-mobile.jpg`} alt='team' />
                </picture>
              </div>

              {/* <div>
                <Image
                  src='/image-team-members-mobile.jpg'
                  width={650}
                  height={512}
                  alt='team'
                />
              </div> */}

              <ReadyToStart />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

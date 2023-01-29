import type { NextPage } from 'next';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReadyToStart from '../components/ReadyToStart';
import Circle from '../components/Circle';

const About: NextPage = () => {
  return (
    <div className='bg-background'>
      <div className='w-[100%]  '>
        <div
          className=' pt-[4rem]   relative  overflow-hidden
    bg-circle bg-no-repeat bg-[length:780px_780px] bg-[right_-47.9rem_top_-64.4rem]
    md:bg-[right_-51.7rem_top_-46.4rem] xl:bg-[right_-14rem_top_-52.7rem] xl:max-w-[144rem] mx-auto'
        >
          <div className='px-[2.4rem] md:px-[3.9rem] xl:px-[16.5rem] pb-[8rem] md:pb-[3.4rem] mx-auto '>
            <Navbar />
            <div className='text-center xl:text-left xl:w-[92.1rem] xl:mx-auto'>
              <h3
                className='font-serif text-sanJuanBlue text-[3.2rem] md:text-[4.8rem] 
             leading-[3.6rem] md:leading-[5.6rem] tracking-[-0.246154px] 
          md:tracking-[-0.369231px] mt-[4.8rem] md:mt-[7.5rem] xl:mt-[8.2rem] xl:text-[5.6rem] xl:tracking-[-0.430769px]
          h-[15.2rem] md:w-[57.3rem] md:h-[17.8rem] xl:h-[18.9rem] md:mx-auto xl:w-[73rem] xl:ml-0'
              >
                We empower <br className='md:hidden' /> innovators <br /> by
                delivering access to the financial system
              </h3>

              <div>
                <div className='text-center md:text-left md:flex md:flex-row md:mt-[5.4rem] xl:mt-[5.1rem] justify-between'>
                  <h4
                    className='font-serif text-sanJuanBlue text-[2.4rem] leading-[3.2rem]  tracking-[-0.184615px]
                  mt-[4rem] md:mt-0 md:text-[3.2rem] md:leading-[4rem] md:tracking-[-0.246154px] md:w-[23.3rem] md:text-left'
                  >
                    Our Vision
                  </h4>
                  <p
                    className='font-sans text-lightSanJuanBlue text-[1.5rem] leading-[2.8rem] mt-[1.6rem]
                  md:w-[45.6rem] xl:w-[63.5rem] md:mt-0'
                  >
                    Our main goal is to build beautiful consumer experiences
                    along with developer-friendly infrastructure. The result is
                    an intelligent tool that gives everyone the ability to
                    create amazing products that solve big problems. We are
                    deeply focused on democratizing financial services through
                    technology.
                  </p>
                </div>
                <div className='text-center md:text-left md:flex md:flex-row md:mt-[6.4rem] xl:mt-[5.6rem] justify-between'>
                  <h4
                    className='font-serif text-sanJuanBlue text-[2.4rem] leading-[3.2rem]  tracking-[-0.184615px]
                  mt-[4rem] md:mt-0 md:text-[3.2rem] md:leading-[4rem] md:tracking-[-0.246154px] md:w-[23.3rem] md:text-left
                  '
                  >
                    Our Business
                  </h4>
                  <p
                    className='font-sans text-lightSanJuanBlue text-[1.5rem] leading-[2.8rem] mt-[1.6rem]
                  md:w-[45.6rem] md:mt-0 xl:w-[63.5rem]'
                  >
                    At the core of our platform is the technical infrastructure
                    APIs that connect consumers. Our innovative product provides
                    key insights for businesses and individuals, as well as
                    robust reporting for traditional financial institutions and
                    developers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' mx-auto max-w-[37.5rem] md:hidden'>
        <Image
          src='/payapi-website/image-team-members-mobile.jpg'
          width={375}
          height={300}
          alt='team'
        />
      </div>
      <div className='mx-auto  max-w-[76.8rem] hidden md:block  xl:hidden md:mt-[5.8rem]'>
        <Image
          src='/payapi-website/image-team-members-tablet.jpg'
          width={769}
          height={267}
          alt='team'
        />
      </div>
      <div className='mx-auto  max-w-[144rem] hidden xl:block xl:mt-[6.6rem] xl:mx-auto relative'>
        <div className='absolute top-[-14rem] left-[-52rem]'>
          <Circle size='780' />
        </div>
        <Image
          src='/payapi-website/image-team-members_desktop.jpg'
          width={1440}
          height={500}
          alt='team'
        />
      </div>
      <div
        className=' px-[2.4rem] mt-[4.8rem] xl:mt-[7.2rem]  md:flex md:flex-row md:justify-between md:h-[13.4rem]
      md:px-[3.9rem] xl:max-w-[111rem] xl:mx-auto  xl:px-0'
      >
        <div
          className='text-center border-t border-sanJuanBlue/25 md:w-[22.3rem]
        md:border-b md:text-left xl:w-[35rem]'
        >
          <h5 className='font-sans text-[1.6rem] leading-[2.8rem] text-sanJuanBlue/70 mt-[1.6rem]'>
            Team Members
          </h5>
          <p className='font-serif text-[5.6rem] leading-[7.2rem] text-darkPink tracking-[-0.430769px] mb-[3.2rem]'>
            300+
          </p>
        </div>
        <div
          className='text-center md:w-[22.3rem] xl:w-[35rem] md:border-t md:border-sanJuanBlue/25
        md:border-b md:py-[1.6rem]  md:text-left'
        >
          <h5 className='font-sans text-[1.6rem] leading-[2.8rem] text-sanJuanBlue/70'>
            Offices in the US
          </h5>
          <p className='font-serif text-[5.6rem] leading-[7.2rem] text-darkPink tracking-[-0.430769px] mb-[3.2rem]'>
            3
          </p>
        </div>
        <div
          className='text-center border-b border-sanJuanBlue/25  md:w-[22.3rem]
        md:border-t md:border-sanJuanBlue/25 md:py-[1.6rem] md:text-left xl:w-[35rem]'
        >
          <h5 className='font-sans text-[1.6rem] leading-[2.8rem] text-sanJuanBlue/70'>
            Transactions analyzed
          </h5>
          <p className='font-serif text-[5.6rem] leading-[7.2rem] text-darkPink tracking-[-0.430769px] mb-[1.6rem]'>
            10M+
          </p>
        </div>
      </div>
      <div className='text-center px-[2.4rem] md:px-[3.9rem] xl:px-0 xl:w-[92rem] mx-auto '>
        <div className='text-center md:text-left md:flex md:flex-row md:mt-[6.4rem] xl:mt-[7.2rem] justify-between'>
          <h4
            className='font-serif text-sanJuanBlue text-[2.4rem] leading-[3.2rem]  tracking-[-0.184615px]
                  mt-[4rem] md:mt-0 md:text-[3.2rem] md:leading-[4rem] md:tracking-[-0.246154px] md:w-[23.3rem] md:text-left
                  '
          >
            The Culture
          </h4>
          <p
            className='font-sans text-lightSanJuanBlue text-[1.5rem] leading-[2.8rem] mt-[1.6rem]
                  md:w-[45.6rem] xl:w-[63.5rem] md:mt-0'
          >
            We strongly believe there&apos;s always an opportunity to learn from
            each other outside of day-to-day work, whether it&apos;s
            company-wide offsites, internal hackathons, or co-worker meetups. We
            always value cross-team collaboration and diversity of thought, no
            matter the job title.
          </p>
        </div>
        <div className='text-center md:text-left md:flex md:flex-row md:mt-[6.4rem] xl:mt-[5.6rem] justify-between'>
          <h4
            className='font-serif text-sanJuanBlue text-[2.4rem] leading-[3.2rem]  tracking-[-0.184615px]
                  mt-[4rem] md:mt-0 md:text-[3.2rem] md:leading-[4rem] md:tracking-[-0.246154px] md:w-[23.3rem] md:text-left'
          >
            The People
          </h4>
          <p
            className='font-sans text-lightSanJuanBlue text-[1.5rem] leading-[2.8rem] mt-[1.6rem]
                  md:w-[45.6rem] xl:w-[63.5rem] md:mt-0'
          >
            We&apos;re all passionate about building a more efficient and
            inclusive financial infrastructure together. At PayAPI, we have
            diverse backgrounds and skills.
          </p>
        </div>
      </div>
      <div className='mt-[-3.2rem] xl:mt-[0.4rem] mb-[14.3rem] md:mb-[10rem] xl:mb-0'>
        <ReadyToStart />
      </div>
      <Footer />
    </div>
  );
};

export default About;

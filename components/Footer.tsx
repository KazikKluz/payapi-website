import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-[100%] bg-mirageBlue'>
      <div
        className='h-[35.3rem] md:h-[10rem] bg-mirageBlue flex flex-col md:flex-row pt-[4.1rem] pb-[5.5rem]
    md:py-0 md:justify-center items-center bg-circle bg-no-repeat bg-[length:780px_780px] bg-[center_top_18rem]
    md:bg-[right_-39rem_top_-13.6rem] xl:max-w-[144rem]  mx-auto'
      >
        <div className='w-min mx-auto md:ml-[3.9rem] md:mr-[6.4rem] xl:ml-[16.4rem]'>
          <Link href='/'>
            <a className='flex items-center fill-linkWaterWhite  '>
              <svg className='w-[13.5rem] h-[3.8rem]'>
                <use xlinkHref='/payapi-website/sprite.svg#logo'></use>
              </svg>
            </a>
          </Link>
        </div>
        <div>
          <ul
            className='w-[24.9rem] md:w-min
         mx-auto pt-[4.3rem] font-sans text-[1.5rem] leading-[1.8rem] text-center text-linkWaterWhite/70
         font-[700] flex flex-col md:flex-row md:justify-between items-center '
          >
            <li className='mb-[3.2rem] md:mr-[4rem]'>
              <Link href='/'>
                <a>Pricing</a>
              </Link>
            </li>
            <li className='mb-[3.2rem] md:mr-[4rem]'>
              <Link href='/'>
                <a>About</a>
              </Link>
            </li>
            <li className='mb-[3.2rem]'>
              <Link href='/'>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex w-[12rem] mx-auto md:mr-[4rem] xl:mr-[16.5rem] justify-between'>
          <Link href='#'>
            <a>
              <svg className='w-[2.4rem] h-[2.4rem]'>
                <use xlinkHref='/payapi-website/sprite.svg#facebook'></use>
              </svg>
            </a>
          </Link>
          <Link href='#'>
            <a className='flex justify-center items-center'>
              <svg className='w-[2.4rem] h-[1.95rem]'>
                <use xlinkHref='/payapi-website/sprite.svg#twitter'></use>
              </svg>
            </a>
          </Link>
          <Link href='#'>
            <a>
              <svg className='w-[2.4rem] h-[2.4rem]'>
                <use xlinkHref='/payapi-website/sprite.svg#linkedin'></use>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

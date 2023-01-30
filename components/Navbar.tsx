import React, { useState } from 'react';
import Link from 'next/link';

import Button from './Button';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => setVisible(!visible);
  return (
    <nav className='h-[3.8rem] md:h-[4.8rem] w-auto flex justify-between z-50 rounded-[2.4rem]'>
      <Link href='/'>
        <a className='flex items-center mr-[6.4rem] fill-sanJuanBlue'>
          <svg className='w-[13.5rem] h-[3.8rem]'>
            <use xlinkHref='/sprite.svg#logo'></use>
          </svg>
        </a>
      </Link>
      <ul
        className='hidden md:flex items-center font-sans text-[1.5rem] font-[700] text-sanJuanBlue opacity-[.7] tracking-wide mr-auto
    '
      >
        <li className='mr-[4rem]'>
          <Link href='/'>
            <a className=''>Pricing</a>
          </Link>
        </li>
        <li className='mr-[4rem]'>
          <Link href='/portfolio'>
            <a className=''>About</a>
          </Link>
        </li>
        <li>
          <Link href='/contactme'>
            <a className=''>Contact</a>
          </Link>
        </li>
      </ul>
      <div className='hidden md:block shadow-button rounded-[2.4rem] z-10'>
        <Button>Schedule a Demo</Button>
      </div>
      <div
        onClick={handleClick}
        className='flex md:hidden justify-center items-center z-20'
      >
        <svg className='w-[3rem] h-[2.3rem]'>
          <use
            xlinkHref={visible ? '/sprite.svg#close' : '/sprite.svg#menu'}
          ></use>
        </svg>
      </div>
      <div
        className={`absolute ${
          !visible && 'hide'
        } md:hidden w-[30rem] h-[66.7rem] top-0 right-[0] bg-mirageBlue pt-[9.5rem] z-10
        transition-all duration-200 delay-75 ease-in-out bg-circle bg-no-repeat bg-[length:78rem_78rem] bg-[right_40%_top_-55rem]`}
      >
        <ul
          className='border border-transparent border-t-1 border-t-linkWaterWhite/15 w-[24.9rem]
         mx-auto pt-[4.3rem] font-sans text-[2rem] leading-[2.4rem] text-center text-linkWaterWhite/70
         font-[700] flex flex-col items-center '
        >
          <li className='mb-[3.2rem]'>
            <Link href='/'>
              <a>Pricing</a>
            </Link>
          </li>
          <li className='mb-[3.2rem]'>
            <Link href='/'>
              <a>About</a>
            </Link>
          </li>
          <li className='mb-[3.2rem]'>
            <Link href='/'>
              <a>Contact</a>
            </Link>
          </li>
          <Button wide='true'>Schedule a Demo</Button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

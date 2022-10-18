import Link from 'next/link';

import Button from './Button';

const Navbar = () => (
  <nav className='h-[4.8rem] w-auto mx-auto flex'>
    <Link href='/'>
      <a className='flex items-center mr-[6.4rem]'>
        <svg className='w-[13.5rem] h-[3.8rem]'>
          <use xlinkHref='/sprite.svg#logo'></use>
        </svg>
      </a>
    </Link>
    <ul className='flex items-center font-sans text-[1.5rem] font-[700] text-sanJuanBlue opacity-[.7] tracking-wide'>
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
    <div className='ml-auto'>
      <Button>Schedule a Demo</Button>
    </div>
  </nav>
);

export default Navbar;

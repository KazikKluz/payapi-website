import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      className='h-[73.7rem] bg-linkWaterWhite relative 
    overflow-clip pt-[4rem] px-[11.45833%]'
    >
      <Navbar />
      <div className='absolute bg-sanJuanBlue w-[78rem] h-[78rem] left-[80rem] top-[-17.2rem] rounded-full opacity-[.15]'></div>
    </div>
  );
};

export default Hero;

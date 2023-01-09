const CompLogos = () => {
  return (
    <div
      className='w-[28rem] md:w-[53.6rem] mx-auto h-[15.4rem] md:h-[10.3rem] grid grid-cols-2
       md:grid-cols-3 justify-items-stretch gap-y-[4rem]  xl:mr-0 '
    >
      <div className='flex items-center justify-start'>
        <svg className='w-[10.7rem] md:w-[12.9rem] h-[1.5rem] md:h-[1.7rem] flex  items-center '>
          <use xlinkHref='/sprite.svg#tesla'></use>
        </svg>
      </div>
      <div className='flex items-center justify-end md:justify-center '>
        <svg className='w-[12rem] md:w-[14.5rem] h-[2.6rem] md:h-[3.1rem]'>
          <use xlinkHref='/sprite.svg#microsoft'></use>
        </svg>
      </div>
      <div className='flex items-center justify-start md:justify-end'>
        <svg className='w-[11.5rem] md:w-[14rem] h-[2.2rem] md:h-[2.7rem]'>
          <use xlinkHref='/sprite.svg#hewlett-packard'></use>
        </svg>
      </div>
      <div className='flex items-center justify-end md:justify-start'>
        <svg className='w-[10.8rem] md:w-[13.1rem] h-[1.4rem] md:h-[1.7rem]'>
          <use xlinkHref='/sprite.svg#oracle'></use>
        </svg>
      </div>
      <div className='flex items-center justify-start md:justify-center'>
        <svg className='w-[7.9rem] md:w-[9.6rem] h-[2.7rem] md:h-[3.3rem]'>
          <use xlinkHref='/sprite.svg#google'></use>
        </svg>
      </div>
      <div className='flex items-center justify-end md:justify-end'>
        <svg className='w-[11.3rem] md:w-[13.7rem] h-[2.2rem] md:h-[2.6rem]'>
          <use xlinkHref='/sprite.svg#nvidia'></use>
        </svg>
      </div>
    </div>
  );
};

export default CompLogos;

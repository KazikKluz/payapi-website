const Companies = () => {
  return (
    <div
      className='h-[67rem] bg-mirageBlue bg-circle bg-no-repeat bg-[length:78rem_78rem] bg-[center_top_-60rem]
    py-[8rem] px-[2.4rem]'
    >
      <div className='w-[28rem] mx-auto h-[15.4rem] grid grid-cols-2 justify-items-stretch '>
        <svg className='w-[10.7rem] h-[1.5rem] flex  items-center'>
          <use xlinkHref='/sprite.svg#tesla'></use>
        </svg>
        <svg className='w-[12rem] h-[2.6rem]'>
          <use xlinkHref='/sprite.svg#microsoft'></use>
        </svg>
        <svg className='w-[11.5rem] h-[2.2rem]'>
          <use xlinkHref='/sprite.svg#hewlett-packard'></use>
        </svg>
        <svg className='w-[10.8rem] h-[1.4rem]'>
          <use xlinkHref='/sprite.svg#oracle'></use>
        </svg>
        <svg className='w-[7.9rem] h-[2.7rem]'>
          <use xlinkHref='/sprite.svg#google'></use>
        </svg>
        <svg className='w-[11.3rem] h-[2.2rem]'>
          <use xlinkHref='/sprite.svg#nvidia'></use>
        </svg>
      </div>
    </div>
  );
};

export default Companies;

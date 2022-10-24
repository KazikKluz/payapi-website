const Description = () => {
  return (
    <div className='py-[8rem] px-[2.4rem] bg-background '>
      <div className=''>
        <div className='drop-shadow-2xl shadow-button '>
          <img
            className='rounded-[6px]'
            src='/illustration-easy-to-implement.png'
            alt='easy'
            width='445px'
            height='284px'
          />
        </div>
        <h2
          className='mt-[4.7rem] font-serif text-[3.6rem]
        text-center leading-[3.6rem] text-sanJuanBlue tracking-[-0.276923px]'
        >
          Easy to implement
        </h2>
        <p
          className='font-sans text-[1.5rem] leading-[2.8rem] text-center
        text-lightSanJuanBlue mt-[2.4rem] w-[32.9rem] mx-auto'
        >
          Our API comes with just a few lines of code. You'll be up and running
          in no time. We built our documentation page to integrate payments
          functionality with ease.
        </p>
      </div>
    </div>
  );
};

export default Description;

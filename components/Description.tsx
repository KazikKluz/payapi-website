import Image from 'next/image';

const Description = () => {
  return (
    <div className='py-[8rem] px-[2.4rem] bg-background'>
      <div>
        <div>
          <Image
            src='/SVG/illustration-easy-to-implement.svg'
            alt='easy'
            width={445}
            height={284}
          />
        </div>
        <h2>Easy to implement</h2>
        <p>
          Our API comes with just a few lines of code. You'll be up and running
          in no time. We built our documentation page to integrate payments
          functionality with ease
        </p>
      </div>
    </div>
  );
};

export default Description;

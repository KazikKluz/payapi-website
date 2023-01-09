import ButtonSecondary from './ButtonSecondary';

const Form = () => {
  return (
    <div className='w-full flex flex-col md:w-[44.5rem] mx-auto'>
      <input className='input' type='text' placeholder='Name' />
      <input className='input' type='email' placeholder='Email Address' />
      <input className='input' type='text' placeholder='Company Name' />
      <input className='input' type='text' placeholder='Title' />
      <textarea
        className='resize-none bg-background font-sans text-[1.5rem] leading-[2.5rem] tracking-[-0.115385px]
        pl-[2rem] pb-[3.5rem] border-b border-b-sanJuanBlue/50 mb-[2.4rem]'
        placeholder='Message'
      />
      <div className='flex flex-row items-center mb-[2.4rem]'>
        <input
          className='
          mr-[2.6rem] shrink-0 '
          type='checkbox'
        />
        <label className='font-sans text-[1.5rem] leading-[2.5rem] tracking-[-0.115385px] text-sanJuanBlue'>
          Stay up-to-date with company announcements and updates to our API
        </label>
      </div>
      <ButtonSecondary dark={false}>
        <span className='px-[1.8rem]'>Submit</span>
      </ButtonSecondary>
    </div>
  );
};

export default Form;

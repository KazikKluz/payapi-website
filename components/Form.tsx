import { useState } from 'react';
import ButtonSecondary from './ButtonSecondary';

const Form = () => {
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    message: '',
  });

  const { name, email, company, title, message } = inputData;

  const [isNameValid, setNameValid] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isCompanyValid, setCompanyValid] = useState(true);
  const [isTitleValid, setTitleValid] = useState(true);
  const [isMessageValid, setMessageValid] = useState(true);
  const [emailAlert, setEmailAlert] = useState('This field is required');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setNameValid(true);
    setEmailValid(true);
    setCompanyValid(true);
    setTitleValid(true);
    setMessageValid(true);
    setEmailAlert('This field is required');
    const element = event.target as HTMLInputElement;

    setInputData({ ...inputData, [element.name]: element.value });
  };

  const handleClick = () => {
    let valid = true;
    if (!name.length) {
      setNameValid(false);
      valid = false;
    }
    if (!email.includes('@') || email.length < 5) {
      setEmailValid(false);
      setEmailAlert('Please enter valid email address');
      valid = false;
    }

    if (!email.length) {
      setEmailValid(false);
      valid = false;
    }

    if (!message.length) {
      setMessageValid(false);
      valid = false;
    }

    if (valid) {
      //here should be included a code for posting the user data
      //after that simply reset inputData values
      setInputData({
        name: '',
        email: '',
        company: '',
        title: '',
        message: '',
      });
    }
  };

  return (
    <div className='w-full flex flex-col md:w-[44.5rem] mx-auto'>
      <input
        className={`input ${
          !isNameValid && 'placeholder-danger/50 border-b-danger/50'
        }`}
        type='text'
        placeholder='Name'
        value={name}
        name='name'
        onChange={handleChange}
      />
      {/* <span>This field can&apos;t be empty</span> */}
      <input
        className='input'
        type='email'
        placeholder='Email Address'
        value={email}
        name='email'
        onChange={handleChange}
      />
      <input
        className='input'
        type='text'
        placeholder='Company Name'
        value={company}
        name='company'
        onChange={handleChange}
      />
      <input
        className='input'
        type='text'
        placeholder='Title'
        value={title}
        name='title'
        onChange={handleChange}
      />
      <textarea
        className='resize-none bg-background font-sans text-[1.5rem] leading-[2.5rem] tracking-[-0.115385px]
        pl-[2rem] pb-[3.5rem] border-b border-b-sanJuanBlue/50 mb-[2.4rem] outline-none
        placeholder-sanJuanBlue/50 focus:placeholder-sanJuanBlue focus:text-sanJuanBlue
         focus:border-b-sanJuanBlue'
        placeholder='Message'
        value={message}
        name='message'
        onChange={handleChange}
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
      <ButtonSecondary onClick={handleClick} dark={false}>
        <span className='px-[1.8rem]'>Submit</span>
      </ButtonSecondary>
    </div>
  );
};

export default Form;

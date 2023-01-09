import React from 'react';

type Props = {
  children: string | JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
  dark: boolean;
};

const ButtonSecondary = React.forwardRef<HTMLAnchorElement, Props>(
  ({ children, onClick, disabled, href, dark }: Props, ref) => {
    return (
      <a
        href={href}
        className={`flex items-center  h-[4.8rem] hover:cursor-pointer  font-[700] text-[1.5rem]
         justify-center leading-[1.8rem] rounded-[2.4rem] px-[3.2rem] w-max  
          tracking-[-0.1153px]  border border-1-linkWaterWhite ${
            dark ? 'btnDark' : 'btnLight'
          }`}
        onClick={disabled ? undefined : onClick}
        ref={ref}
      >
        {children}
      </a>
    );
  }
);

ButtonSecondary.displayName = 'ButtonSecondary';

export default ButtonSecondary;

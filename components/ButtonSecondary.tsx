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
        className={`flex items-center  h-[4.8rem]  font-[700] text-[1.5rem]
         justify-center leading-[1.8rem] rounded-[2.4rem] px-[3.2rem] w-max  
          tracking-[-0.1153px]  border border-1-linkWaterWhite  
           ${
             disabled
               ? dark
                 ? 'btnDark opacity-50'
                 : 'btnLight opacity-50'
               : dark
               ? ' btnDark btn hover:bg-linkWaterWhite hover:text-mirageBlue hover:cursor-pointer'
               : ' btnLight btn hover:bg-sanJuanBlue hover:text-linkWaterWhite hover:cursor-pointer '
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

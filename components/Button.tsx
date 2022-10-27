import React from 'react';

type Props = {
  children: string;
  dark?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
  wide?: string;
};

const Button = React.forwardRef<HTMLAnchorElement, Props>(
  ({ children, dark, onClick, disabled, href, wide }: Props, ref) => {
    return (
      <a
        href={href}
        className={`flex items-center md:w-[17.3rem] h-[4.8rem] bg-darkPink btn
         hover:bg-charmPink hover:cursor-pointer text-linkWaterWhite font-[700] text-[1.5rem] justify-center
        rounded-[2.4rem] w-full tracking-[-0.1153px]`}
        onClick={disabled ? undefined : onClick}
        ref={ref}
      >
        {children}
      </a>
    );
  }
);

Button.displayName = 'ButtonSecondary';

export default Button;

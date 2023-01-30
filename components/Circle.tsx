import Image from 'next/image';

type Props = {
  size: string;
};

const Circle = ({ size }: Props) => {
  return (
    <div className={`w-[${size}px] h-[${size}px]`}>
      <Image
        src='/payapi-website/SVG/bg-pattern-circle.svg'
        alt='circle'
        width={size}
        height={size}
      />
    </div>
  );
};

export default Circle;

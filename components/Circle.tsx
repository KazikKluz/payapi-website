import Image from 'next/image';

type Props = {
  size: string;
};

const Circle = ({ size }: Props) => {
  return (
    <div className={`w-[${size}rem] h-[${size}rem]`}>
      <Image
        src='/payapi-website/SVG/bg-pattern-circle.svg'
        alt='circle'
        width={780}
        height={780}
      />
    </div>
  );
};

export default Circle;

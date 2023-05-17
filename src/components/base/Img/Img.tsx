import { FC } from "react";
import Image from "next/image";

interface IImg {
  className: string;
  img: {
    src: any;
    alt: string;
  };
  width?: number;
  height?: number;
  defaultStyle?: boolean;
}

const Img: FC<IImg> = ({
  className,
  img,
  width = 0,
  height = 0,
  defaultStyle = true,
}) => {
  const { src, alt } = img;

  return (
    <div className={`${className}__img${defaultStyle ? " img" : ""}`}>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default Img;

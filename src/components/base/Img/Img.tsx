import { FC } from "react";
import Image from "next/image";

interface IImg {
  src: string;
  alt: string;
}

interface ImgProps {
  className: string;
  img: IImg;
  width?: number;
  height?: number;
  defaultStyle?: boolean;
}

const Img: FC<ImgProps> = ({
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

import { FC } from "react";
import Image from "next/image";

import { IImg } from "@/interfaces/img.interface";

interface ImgProps {
  className: string;
  img: IImg;
  style?: { [property: string]: string };
  resetStyle?: boolean;
  width?: number;
  height?: number;
}

const Img: FC<ImgProps> = ({
  className,
  img: { src, alt },
  style,
  resetStyle = true,
  width = 0,
  height = 0,
}) => {
  return (
    <div
      className={`${className}__img${resetStyle ? " img" : ""}`}
      style={style}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default Img;

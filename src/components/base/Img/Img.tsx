import { FC } from "react";
import Image from "next/image";

import { IImg } from "@/interfaces/img.interface";

interface ImgProps {
  className: string;
  img: IImg;
  width?: number;
  height?: number;
  defaultStyle?: boolean;
}

const Img: FC<ImgProps> = ({
  className,
  img: { src, alt },
  width = 0,
  height = 0,
  defaultStyle = true,
}) => (
  <div className={`${className}__img${defaultStyle ? " img" : ""}`}>
    <Image src={src} alt={alt} width={width} height={height} />
  </div>
);

export default Img;

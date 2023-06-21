import { FC } from "react";
import Image from "next/image";

import { handleClassName } from "@/utils/className.util";

import { IImg } from "@/interfaces/img.interface";

interface ImgProps {
  className: string;
  modifier?: string;
  img: IImg;
  style?: { [property: string]: string };
  resetStyle?: boolean;
  priority?: boolean;
  quality?: number;
  width?: number;
  height?: number;
}

const Img: FC<ImgProps> = ({
  className,
  modifier,
  img: { src, alt },
  style,
  resetStyle,
  priority,
  quality = 75,
  width = 0,
  height = 0,
}) => {
  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__img`,
    modifier
  );
  const defaultClassName = resetStyle ? "" : " img";

  return (
    <div className={modifiedClassName + defaultClassName} style={style}>
      <Image
        src={src}
        alt={alt}
        priority={priority}
        quality={quality}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Img;

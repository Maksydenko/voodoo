import { FC } from "react";

import Img from "@/components/base/Img/Img";

import arrow from "@/assets/img/arrow.svg";
import important from "@/assets/img/important.svg";

interface ButtonProps {
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ onClick }) => {
  const importantIcon = {
    src: important,
    alt: "!",
  };
  const arrowIcon = {
    src: arrow,
    alt: "v",
  };

  return (
    <button className="alpha__button" onClick={onClick}>
      <div className="alpha__main">
        <div className="alpha__title">
          <Img className="alpha" img={importantIcon} />
          <h3>ALPHA</h3>
        </div>
        <p className="alpha__text">
          Important info<span> regarding our service</span>
        </p>
      </div>
      <Img className="_arrow alpha" img={arrowIcon} />
    </button>
  );
};

export default Button;

import { FC, useState } from "react";

import Img from "@/components/base/Img/Img";
import Content from "./Content";

import { getModifierClassName } from "@/utils/className.util";

import { IImg } from "@/interfaces/img.interface";

import arrow from "@/assets/img/arrow.svg";
import important from "@/assets/img/important.svg";

const Alpha: FC = () => {
  const [isActive, setIsActive] = useState(false);

  // Handle click
  interface IHandleCLick {
    (): void;
  }
  const handleClick: IHandleCLick = () => setIsActive(!isActive);

  const importantIcon: IImg = {
    src: important,
    alt: "!",
  };
  const arrowIcon: IImg = {
    src: arrow,
    alt: "v",
  };

  return (
    <section className="alpha">
      <div className="alpha__container">
        <div className={getModifierClassName(isActive, "alpha__body")}>
          <button className="alpha__button" onClick={handleClick}>
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
          <Content />
        </div>
      </div>
    </section>
  );
};

export default Alpha;

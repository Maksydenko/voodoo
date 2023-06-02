import { FC, useState } from "react";

import Button from "./Button";
import Content from "./Content";

import { handleClassName } from "@/utils/className.util";

const Alpha: FC = () => {
  const [isActive, setIsActive] = useState(false);

  // Handle click
  interface IHandleCLick {
    (): void;
  }
  const handleClick: IHandleCLick = () => setIsActive(!isActive);

  return (
    <section className="alpha">
      <div className="alpha__container">
        <div className={handleClassName(isActive, "alpha__body")}>
          <Button onClick={handleClick} />
          {isActive && <Content />}
        </div>
      </div>
    </section>
  );
};

export default Alpha;

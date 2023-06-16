import { FC } from "react";
import Link from "next/link";

import Img from "@/components/base/Img/Img";

const Header: FC = () => {
  const logo = {
    src: "logo.svg",
    alt: "VooDoo Test",
  };

  const subLogo = {
    src: "favicon.svg",
    alt: "v",
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link href="/" className="header__logo">
          <Img className="header" modifier="absolute" img={subLogo} />
          <Img className="header" modifier="relative" img={logo} />
        </Link>
        <div className="header__buttons">
          <Link href="" className="header__button button button_transparent">
            About us
          </Link>
          <Link href="" className="header__button button">
            Sign-up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

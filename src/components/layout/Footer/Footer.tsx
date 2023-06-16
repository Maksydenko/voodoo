import { FC } from "react";
import Link from "next/link";

import Img from "@/components/base/Img/Img";
import LinkList from "./LinkList/LinkList";

import { links } from "./links/links.const";

import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["700"],
});

const Footer: FC = () => {
  const subLogo = {
    src: "favicon.svg",
    alt: "v",
  };

  const items = links.map((groupLinks) => (
    <LinkList key={groupLinks[0].value} links={groupLinks} />
  ));

  return (
    <footer className={`footer ${spaceMono.className}`}>
      <div className="footer__container">
        <div className="footer__logo">
          <Link href="/">
            <Img className="footer" img={subLogo} />
          </Link>
        </div>
        {items}
      </div>
    </footer>
  );
};

export default Footer;

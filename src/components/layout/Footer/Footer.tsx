import { FC } from "react";
import Link from "next/link";

import Img from "@/components/base/Img/Img";
import LinkList from "./LinkList/LinkList";

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

  const links1 = [
    { value: "FAQ", href: "" },
    { value: "RETURNS", href: "" },
    { value: "CONTACT", href: "" },
  ];
  const links2 = [
    { value: "TERMS & CONDITIONS", href: "" },
    { value: "PRIVACY POLICY", href: "" },
    { value: "COOKIE POLICY", href: "" },
    { value: "COOKIE SETTINGS", href: "" },
  ];
  const links3 = [
    { value: "ABOUT SECOND CHANCE", href: "" },
    { value: "CAREER", href: "" },
    { value: "FACEBOOK", href: "" },
    { value: "INSTAGRAM", href: "" },
  ];

  return (
    <footer className={`footer ${spaceMono.className}`}>
      <div className="footer__container">
        <div className="footer__logo">
          <Link href="/">
            <Img className="footer" img={subLogo} />
          </Link>
        </div>
        <LinkList links={links1} />
        <LinkList links={links2} />
        <LinkList links={links3} />
      </div>
    </footer>
  );
};

export default Footer;

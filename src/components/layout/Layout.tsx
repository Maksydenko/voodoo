import { FC } from "react";

import Meta from "./Meta";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

interface LayoutProps {
  title: string;
  className: string;
  children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ title, className, children }) => (
  <>
    <Meta title={title} />
    <div className={`wrapper ${spaceGrotesk.className}`}>
      <Header />
      <main className={`${className}-page`}>{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;

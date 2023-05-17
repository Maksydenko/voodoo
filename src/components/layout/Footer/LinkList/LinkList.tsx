import { FC } from "react";

import Item from "./Item";

import { ILink } from "../link.interface";

interface ILinkListProps {
  links: ILink[];
}

const LinkList: FC<ILinkListProps> = ({ links }) => {
  const items = links.map((link, index) => <Item key={index} link={link} />);

  return <ul className="footer__link-list link-list">{items}</ul>;
};

export default LinkList;

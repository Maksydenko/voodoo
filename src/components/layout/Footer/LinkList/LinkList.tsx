import { FC } from "react";

import Item from "./Item";

import { ILink } from "../links/link.interface";

interface LinkListProps {
  links: ILink[];
}

const LinkList: FC<LinkListProps> = ({ links }) => {
  const linkItems = links.map((link, index) => (
    <Item key={index} link={link} />
  ));

  return <ul className="footer__link-list link-list">{linkItems}</ul>;
};

export default LinkList;

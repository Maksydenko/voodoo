import { FC } from "react";
import Link from "next/link";
import { ILink } from "../link.interface";

interface ItemProps {
  link: ILink;
}

const Item: FC<ItemProps> = ({ link }) => {
  const { value, href } = link;

  return (
    <li className="link-list__item">
      <Link href={href} className="link-list__link">
        {value}
      </Link>
    </li>
  );
};

export default Item;

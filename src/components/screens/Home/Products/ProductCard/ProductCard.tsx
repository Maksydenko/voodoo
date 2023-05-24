import { FC } from "react";

import Img from "@/components/base/Img/Img";
import { IProduct } from "@/interfaces/products.interface";
import { IImg } from "@/interfaces/img.interface";

interface IProductCardProps {
  product: IProduct;
}

const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const title = product.title;
  const price = product.variants[0].price;
  const image = product.images[0].src;

  const img: IImg = {
    src: image,
    alt: title,
  };

  return (
    <div className="products__product-card product-card">
      <span className="product-card__used button button_small button_uppercase button_full-opacity">
        Used
      </span>
      <Img className="product-card" img={img} width={900} height={900} />
      <div className="product-card__text">
        <div className="product-card__main">
          <h3>{title}</h3>
          <span>{price} KR.</span>
        </div>
        <div className="product-card__main product-card__main_right">
          <h4>Condition</h4>
          <span>Slightly used</span>
        </div>
      </div>
      <button className="product-card__pick-up button button_big button_uppercase">
        PICK-UP IN <span>2200</span>
      </button>
    </div>
  );
};

export default ProductCard;

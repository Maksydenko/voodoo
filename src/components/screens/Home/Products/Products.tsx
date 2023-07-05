import { FC } from "react";
import ProductCard from "./ProductCard/ProductCard";

import { useFetchData } from "@/hooks/useFetchData";

import { IProduct } from "@/interfaces/products.interface";

const Products: FC = () => {
  const { data } = useFetchData(
    "https://voodoo-sandbox.myshopify.com/products.json?limit=12"
  );
  const products = data?.products;

  return (
    <section className="products">
      <div className="products__container">
        <div className="products__body">
          {products &&
            products.map((product: IProduct) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

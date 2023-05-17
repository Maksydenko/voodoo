import { FC } from "react";
import ProductCard from "./ProductCard/ProductCard";

import { IProduct } from "@/interfaces/products.interface";
import { useProducts } from "./useProducts";

const Products: FC = () => {
  const products = useProducts();

  return (
    <section className="products">
      <div className="products__container">
        <div className="products__body">
          {Array.isArray(products?.products) &&
            products?.products.map((product: IProduct) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

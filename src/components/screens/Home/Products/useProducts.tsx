import { useEffect, useState } from "react";

import { fetchProductsData } from "@/services/productsApi";
import { IProducts } from "@/interfaces/products.interface";

interface IUseProducts {
  (): IProducts | undefined;
}

export const useProducts: IUseProducts = () => {
  const [products, setProducts] = useState<IProducts>();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchProductsData();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return products;
};

import { IProducts } from "@/interfaces/products.interface";

const API_URL = "https://voodoo-sandbox.myshopify.com/products.json?limit=12";

interface IFetchProducts {
  (): Promise<IProducts>;
}

export const fetchProductsData: IFetchProducts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result = await response.json();
  return result;
};

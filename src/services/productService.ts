import { api } from "../api";

export interface IProducts {
  id: number;
  name: string;
  price: number;
}

const fetchProducts = async () => {
  const result: IProducts[] = await api.get("products");
  return result.data;
};

export { fetchProducts };

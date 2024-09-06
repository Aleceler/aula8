import { createContext, ReactNode, useContext, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductsContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  addProducts: (products: Product[]) => void;
  removeProduct: (id: number) => void;
}

const defaultContextValue: ProductsContextType = {
  products: [],
  addProduct: () => {},
  addProducts: () => {},
  removeProduct: () => {},
};

const ProductsContext = createContext<ProductsContextType>(defaultContextValue);

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProducts = (products: Product[]) => {
    setProducts(() => products);
  };
  const addProduct = (product: Product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };
  const removeProduct = (id: number) => {
    setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
  };

  const contextValue: ProductsContextType = {
    products,
    addProduct,
    addProducts,
    removeProduct,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);

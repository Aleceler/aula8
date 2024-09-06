import { useProducts } from "../../contexts/productsContext.tsx";
import { useEffect } from "react";
import { fetchProducts, IProducts } from "../../services/productService.ts";
import { NavLink } from "react-router-dom";

const Products = () => {
  const { products, addProducts, removeProduct } = useProducts();

  useEffect(() => {
    if (products.length === 0) {
      (async () => {
        const dados: IProducts[] = await fetchProducts();
        addProducts(dados);
      })();
    }
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => removeProduct(product.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <NavLink to="/product/add">Ir para o formulario</NavLink>
    </div>
  );
};

export default Products;

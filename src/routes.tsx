import { createBrowserRouter } from "react-router-dom";
import Products from "./views/products";
import AddProductForm from "./views/addProduct";

const RoutesConfig = createBrowserRouter([
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/product/add",
    element: <AddProductForm />,
  },
]);

export default RoutesConfig;

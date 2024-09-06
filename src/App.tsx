import { RouterProvider } from "react-router-dom";
import RoutesConfig from "./routes.tsx";
import { ProductsProvider } from "./contexts/productsContext.tsx";

function App() {
  return (
    <>
      <ProductsProvider>
        <RouterProvider router={RoutesConfig} />
      </ProductsProvider>
    </>
  );
}

export default App;

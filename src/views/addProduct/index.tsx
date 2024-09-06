import { useFormik } from "formik";
import * as Yup from "yup";
import { useProducts } from "../../contexts/ProductsContext";
import { NavLink } from "react-router-dom";

interface ProductFormValues {
  name: string;
  price: number;
  id: number;
}

const AddProductForm: React.FC = () => {
  const { products, addProduct } = useProducts();

  console.log(products);

  const formik = useFormik<ProductFormValues>({
    initialValues: {
      name: "",
      price: 0,
      id: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nome é obrigatório"),
      price: Yup.number()
        .required("Preço é obrigatório")
        .min(0, "Preço deve ser maior ou igual a 0"),
      id: Yup.number()
        .required("ID é obrigatório")
        .min(1, "ID deve ser maior ou igual a 1"),
    }),
    onSubmit: (values) => {
      addProduct(values);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Nome do Produto</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Insira o nome do produto"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="price">Preço do Produto</label>
        <input
          id="price"
          name="price"
          type="number"
          placeholder="Insira o valor do produto"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik.errors.price && formik.touched.price ? (
          <div>{formik.errors.price}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="id">ID do Produto</label>
        <input
          id="id"
          name="id"
          type="number"
          placeholder="Insira o ID do produto"
          onChange={formik.handleChange}
          value={formik.values.id}
        />
        {formik.errors.id && formik.touched.id ? (
          <div>{formik.errors.id}</div>
        ) : null}
      </div>

      <button type="submit">Adicionar Produto</button>
      <NavLink to="/products">voltar para lista</NavLink>
    </form>
  );
};

export default AddProductForm;

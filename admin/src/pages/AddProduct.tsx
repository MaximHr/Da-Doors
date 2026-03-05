import { useNavigate } from "react-router";
import { handleError } from "@/api/errorHandler";
import type { ProductTRequest } from "@/types/product";
import { addProduct } from "@/api/products";
import { ProductEdit } from "@/components/ProductEdit";
import useProductForm from "@/components/useProductForm";

const AddProduct = () => {
  const { values, setters } = useProductForm();
  const navigate = useNavigate();

  const handleProductSubmission = async () => {
    try {
      const product: ProductTRequest = {
        ...values,
        quantity: 100000,
        discount: 0,
      };
			
      await addProduct(product);

      navigate("/admin/products");
    } catch (err) {
      if (err instanceof Error) {
        handleError(err.message);
      } else {
        handleError("Възникна грешка. Моля опитайте по-късно.");
      }
    }
  };

  return (
    <div>
      <ProductEdit
        handleProductSubmission={handleProductSubmission}
        shouldAdd={true}
				values={values}
				setters={setters}
      />
    </div>
  );
};

export default AddProduct;

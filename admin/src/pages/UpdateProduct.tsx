import { handleError } from "@/api/errorHandler";
import { fetchProductBySlug, updateProduct } from "@/api/products";
import { ProductEdit } from "@/components/ProductEdit";
import ProductNotFound from "@/components/ProductNotFound";
import useProductForm, { setValues } from "@/components/useProductForm";
import type { ProductTRequest } from "@/types/product";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const UpdateProduct = () => {
  const { values, setters } = useProductForm();
  const [id, setId] = useState<number>();
  const [foundWrongSlug, setFoundWrongSlug] = useState<boolean>(false);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  const { slug } = useParams();
  const navigate = useNavigate();

  const handleProductSubmission = async () => {
    if (slug === undefined || id === undefined) {
      return;
    }

    const updatedProduct: ProductTRequest = {
      ...values,
      quantity: values.quantity || 100000,
      discount: values.discount || 0,
    };

    try {
      await updateProduct(updatedProduct, id);
      navigate("/admin/products");
    } catch (err) {
      if (err instanceof Error) {
        handleError(err.message);
      } else {
        handleError("Възникна грешка. Моля опитайте по-късно.");
      }
    }
  };

  const getProduct = async (slug: string) => {
    try {
      const product = await fetchProductBySlug(slug);
      setValues(setters, product);
      setId(product.id);
    } catch {
      setFoundWrongSlug(true);
    }
    setHasLoaded(true);
  };

  useEffect(() => {
    if (slug === undefined) {
      setFoundWrongSlug(true);
    } else {
      getProduct(slug);
    }
  }, [slug]);

  return (
    <>
      {hasLoaded && foundWrongSlug ? (
        <ProductNotFound />
      ) : (
        hasLoaded && (
          <div>
            <ProductEdit
              values={values}
              setters={setters}
              handleProductSubmission={handleProductSubmission}
              shouldAdd={false}
            />
          </div>
        )
      )}
    </>
  );
};

export default UpdateProduct;

import { useNavigate } from "react-router";
import { useState } from "react";
import { handleError } from "@/api/errorHandler";
import type { ProductTRequest } from "@/types/product";
import { addProduct } from "@/api/products";
import { ProductEdit } from "@/components/ProductEdit";

const AddProduct = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [quantity, setQuantity] = useState<number | "">("");
  const [discount, setDiscount] = useState<number | "">("");
  const [images, setImages] = useState<string[]>([]);
  const [titleImage, setTitleImage] = useState<string>("");
	const [isOnMainPage, setIsOnMainPage] = useState<boolean>(false);

  const handleProductSubmission = async () => {
    try {
      const product: ProductTRequest = {
        title: name,
        description,
        price,
        quantity: 10000,
        discount: 0,
        images,
        titleImage,
				isOnMainPage
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
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        images={images}
        setImages={setImages}
        setTitleImage={setTitleImage}
        titleImage={titleImage}
        description={description}
        setDescription={setDescription}
        discount={discount}
        setDiscount={setDiscount}
        quantity={quantity}
        setQuantity={setQuantity}
        handleProductSubmission={handleProductSubmission}
        shouldAdd={true}
				setIsOnMainPage={setIsOnMainPage}
				isOnMainPage={isOnMainPage}
      />
    </div>
  );
};

export default AddProduct;

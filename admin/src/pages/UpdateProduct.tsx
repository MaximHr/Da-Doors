import { handleError } from "@/api/errorHandler";
import { fetchProductBySlug, updateProduct } from "@/api/products";
import { ProductEdit } from "@/components/ProductEdit";
import ProductNotFound from "@/components/ProductNotFound";
import type { ProductTRequest } from "@/types/product";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const UpdateProduct = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [quantity, setQuantity] = useState<number | "">("");
  const [discount, setDiscount] = useState<number | "">("");
  const [titleImage, setTitleImage] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const [id, setId] = useState<number>();
  const [foundWrongSlug, setFoundWrongSlug] = useState<boolean>(false);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [isOnMainPage, setIsOnMainPage] = useState<boolean>(false);

  const { slug } = useParams();
  const navigate = useNavigate();

  const handleProductSubmission = async () => {
    if (slug === undefined || id === undefined) {
      return;
    }

    const updatedProduct: ProductTRequest = {
      title: name,
      description,
      price,
      quantity: quantity || 10000,
      discount: discount || 0,
      images,
      titleImage,
      isOnMainPage: isOnMainPage,
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

      setName(product.title);
      setDescription(product.description);
      setDiscount(product.discount);
      setImages(product.images);
      setQuantity(product.quantity);
      setTitleImage(product.titleImage);
      setPrice(product.price);
      setId(product.id);
      setIsOnMainPage(product.isOnMainPage);
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
              shouldAdd={false}
              setIsOnMainPage={setIsOnMainPage}
              isOnMainPage={isOnMainPage}
            />
          </div>
        )
      )}
    </>
  );
};

export default UpdateProduct;

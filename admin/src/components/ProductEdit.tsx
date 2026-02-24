import AddProductBasicInfo from "@/components/AddProductBasicInfo.tsx";
import { Undo2 } from "lucide-react";
import { Button } from "./ui/button";
import { handleError } from "@/api/errorHandler";
import { type Dispatch, type SetStateAction } from "react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router";

interface ProductEditPropsT {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  discount: number | "";
  setDiscount: Dispatch<SetStateAction<number | "">>;
  price: number | undefined;
  setPrice: Dispatch<SetStateAction<number | undefined>>;
  quantity: number | "";
  setQuantity: Dispatch<SetStateAction<number | "">>;
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
  handleProductSubmission: () => Promise<void>;
  shouldAdd: boolean;
  titleImage: string;
  setTitleImage: Dispatch<SetStateAction<string>>;
  setIsOnMainPage: Dispatch<SetStateAction<boolean>>;
  isOnMainPage: boolean;
}

export const ProductEdit = ({
  name,
  setName,
  price,
  setPrice,
  images,
  setImages,
  description,
  setDescription,
  discount,
  setDiscount,
  quantity,
  setQuantity,
  handleProductSubmission,
  shouldAdd,
  titleImage,
  setTitleImage,
  setIsOnMainPage,
  isOnMainPage,
}: ProductEditPropsT) => {
  const submitHandler = () => {
    if (name.trim().length === 0) {
      handleError("Field name is required");
      return;
    } else if (description.trim().length === 0) {
      handleError("Field description is required.");
      return;
    } else if (titleImage.trim().length === 0) {
      handleError("Title image is required.");
			return;
    }
    if (discount === "") {
      setDiscount(0);
    }

    handleProductSubmission();
  };
  return (
    <>
      <ToastContainer />
      <div className="flex items-center gap-3 justify-between mb-7">
        <h1 className="text-2xl special-font">
          {shouldAdd ? "Добави нов продукт" : "Промени продукт"}
        </h1>
        <Link to="/admin/products">
          <Button variant="default" className="flex items-center gap-2">
            Върни се <Undo2 />
          </Button>
        </Link>
      </div>

      <AddProductBasicInfo
        name={name}
        description={description}
        quantity={quantity}
        price={price}
        discount={discount}
        images={images}
        setName={setName}
        setDescription={setDescription}
        setQuantity={setQuantity}
        setPrice={setPrice}
        setImages={setImages}
        setDiscount={setDiscount}
        titleImage={titleImage}
        setTitleImage={setTitleImage}
        setIsOnMainPage={setIsOnMainPage}
        isOnMainPage={isOnMainPage}
      />
      <div className="flex justify-end max-w-lg mt-3 gap-3">
        <Button
          type="button"
          className="flex items-center gap-1"
          onClick={submitHandler}
        >
          {shouldAdd ? "Добави продукт" : "Промени продукт"}
        </Button>
      </div>
    </>
  );
};

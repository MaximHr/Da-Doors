import AddProductBasicInfo from "@/components/AddProductBasicInfo.tsx";
import { Undo2 } from "lucide-react";
import { Button } from "./ui/button";
import { handleError } from "@/api/errorHandler";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router";
import type { ProductFormCommonAttributes, ProductFormStateSetters } from "@/types/product";

interface ProductEditPropsT {
  values: ProductFormCommonAttributes;
	setters: ProductFormStateSetters;
  handleProductSubmission: () => Promise<void>;
  shouldAdd: boolean;
}

export const ProductEdit = ({
  values,
	setters,
  handleProductSubmission,
  shouldAdd,
}: ProductEditPropsT) => {
  const submitHandler = () => {
    if (values.title.trim().length === 0) {
      handleError("Field name is required");
      return;
    } else if (values.titleImage.trim().length === 0) {
      handleError("Title image is required.");
			return;
    }
    if (values.discount === "") {
      setters.setDiscount(0);
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
				values={values}
				setters={setters}
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

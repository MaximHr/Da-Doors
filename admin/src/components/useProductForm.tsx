import type {
  ProductFormCommonAttributes,
  ProductFormStateSetters,
  ProductTResponse,
} from "@/types/product";
import { useState } from "react";

export const setValues = (
  setters: ProductFormStateSetters,
  product: ProductTResponse,
) => {
  setters.setTitle(product.title);
  setters.setDescription(product.description);
  setters.setDiscount(product.discount);
  setters.setImages(product.images);
  setters.setQuantity(product.quantity);
  setters.setTitleImage(product.titleImage);
  setters.setPrice(product.price);
  setters.setIsOnMainPage(product.isOnMainPage);

  setters.setInnerStructure(product.innerStructure);
  setters.setFinish(product.finish);
  setters.setConstruction(product.construction);
  setters.setCardDescription(product.cardDescription);
  setters.setCore(product.core);
  setters.setFrame(product.frame);
  setters.setPrimaryLock(product.primaryLock);
  setters.setSeries(product.series);
  setters.setModel(product.model);
  setters.setThickness(product.thickness);
  setters.setLockingMechanism(product.lockingMechanism);
};

const useProductForm = (): {
  values: ProductFormCommonAttributes;
  setters: ProductFormStateSetters;
} => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number | "">("");
  const [quantity, setQuantity] = useState<number | "">("");
  const [discount, setDiscount] = useState<number | "">("");
  const [images, setImages] = useState<string[]>([]);
  const [titleImage, setTitleImage] = useState<string>("");
  const [isOnMainPage, setIsOnMainPage] = useState<boolean>(false);
  const [series, setSeries] = useState<string>("");
  const [construction, setConstruction] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [core, setCore] = useState<string>(""); //пълнеж
  const [finish, setFinish] = useState<string>(""); //покритие
  const [lockingMechanism, setLockingMechanism] = useState<string>("");
  const [primaryLock, setPrimaryLock] = useState<string>("");
  const [cardDescription, setCardDescription] = useState<string>("");
  const [thickness, setThickness] = useState<number | "">("");
  const [frame, setFrame] = useState<string>("");
  const [innerStructure, setInnerStructure] = useState<string>("");

  const values: ProductFormCommonAttributes = {
    title,
    description,
    price,
    quantity,
    discount,
    images,
    titleImage,
    isOnMainPage,
    series,
    construction,
    model,
    core,
    finish,
    lockingMechanism,
    primaryLock,
    cardDescription,
    thickness,
    frame,
    innerStructure,
  };

  const setters = {
    setTitle,
    setDescription,
    setPrice,
    setQuantity,
    setDiscount,
    setImages,
    setTitleImage,
    setIsOnMainPage,
    setSeries,
    setConstruction,
    setModel,
    setCore,
    setFinish,
    setLockingMechanism,
    setPrimaryLock,
    setCardDescription,
    setThickness,
    setFrame,
    setInnerStructure,
  };

  return { values, setters };
};

export default useProductForm;

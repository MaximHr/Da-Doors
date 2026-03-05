export interface ProductFormCommonAttributes {
  title: string;
  description: string;
  price: number | undefined;
  quantity: number | "";
  discount: number | "";
  images: string[];
  titleImage: string;
  isOnMainPage: boolean;
  series: string;
  construction: string;
  model: string;
  core: string;
  finish: string;
  lockingMechanism: string;
  primaryLock: string;
  cardDescription: string;
  thickness: number | "";
  frame: string;
  innerStructure: string;
}

export interface ProductFormStateSetters {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  setQuantity: React.Dispatch<React.SetStateAction<number | "">>;
  setDiscount: React.Dispatch<React.SetStateAction<number | "">>;
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  setTitleImage: React.Dispatch<React.SetStateAction<string>>;
  setIsOnMainPage: React.Dispatch<React.SetStateAction<boolean>>;
  setSeries: React.Dispatch<React.SetStateAction<string>>;
  setConstruction: React.Dispatch<React.SetStateAction<string>>;
  setModel: React.Dispatch<React.SetStateAction<string>>;
  setCore: React.Dispatch<React.SetStateAction<string>>;
  setFinish: React.Dispatch<React.SetStateAction<string>>;
  setLockingMechanism: React.Dispatch<React.SetStateAction<string>>;
  setPrimaryLock: React.Dispatch<React.SetStateAction<string>>;
  setCardDescription: React.Dispatch<React.SetStateAction<string>>;
  setThickness: React.Dispatch<React.SetStateAction<number | "">>;
  setFrame: React.Dispatch<React.SetStateAction<string>>;
  setInnerStructure: React.Dispatch<React.SetStateAction<string>>;
}

export type ProductTResponse = ProductFormCommonAttributes & {
  id: number;
  slug: string;
  createdAt: string;
};

export type ProductTListResponse = Pick<
  ProductTResponse,
  "id" | "title" | "price" | "quantity" | "discount" | "slug" | "titleImage" | "series"
>;

export type ProductTRequest = ProductFormCommonAttributes;

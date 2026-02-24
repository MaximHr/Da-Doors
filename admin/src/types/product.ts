export type ProductTResponse = {
  id: number;
  title: string;
  description: string;
  price: number | undefined;
  quantity: number;
  discount: number;
  images: string[];
	titleImage: string;
  slug: string;
  createdAt: string;
	isOnMainPage: boolean;
};

export type ProductTListResponse = Pick<
  ProductTResponse,
  "id" | "title" | "price" | "quantity" | "discount" | "slug" | "titleImage"
>;

export type ProductTRequest = Omit<ProductTResponse, "id" | "slug" | "createdAt">;

import type { ProductTRequest, ProductTResponse } from "@/types/product";
import { authFetch } from "./auth";
import { checkIsForbidden, checkIsOk } from "./errorHandler";

export async function addProduct(
  product: ProductTRequest,
): Promise<ProductTResponse> {
  const res = await authFetch(
    `${import.meta.env.VITE_SERVER_URL}/products/upload`,
    {
      method: "POST",
      body: JSON.stringify(product),
    },
  );

  checkIsForbidden(res);
  const data = await res.json();
  checkIsOk(res, data);

  return data;
}

export async function listProducts(pageNumber: number, size: number) {
  const res = await authFetch(
    `${import.meta.env.VITE_SERVER_URL}/products/list?page=${pageNumber}&size=${size}&sort=createdAt,desc`,
    {
      method: "GET",
    },
  );

  checkIsForbidden(res);
  const data = await res.json();
  checkIsOk(res, data);

  return data;
}

export async function deleteProduct(id: number): Promise<string> {
  const res = await authFetch(
    `${import.meta.env.VITE_SERVER_URL}/products/${id}`,
    {
      method: "DELETE",
    },
  );

  checkIsForbidden(res);
  const data = await res.text();
  checkIsOk(res, data);

  return data;
}

export async function updateProduct(
  product: ProductTRequest,
  id: number,
): Promise<ProductTResponse> {
  const res = await authFetch(
    `${import.meta.env.VITE_SERVER_URL}/products/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(product),
    },
  );

  checkIsForbidden(res);
  const data = await res.json();
  checkIsOk(res, data);

  return data;
}

export async function fetchProductBySlug(
  slug: string,
): Promise<ProductTResponse> {
  const res = await authFetch(
    `${import.meta.env.VITE_SERVER_URL}/products/${slug}`,
    {
      method: "GET",
    },
  );

  checkIsForbidden(res);
  const data = await res.json();
  checkIsOk(res, data);

  return data;
}
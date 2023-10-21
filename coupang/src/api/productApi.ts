import axiosClient from "./index";
import { AxiosError } from "axios";

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("accessToken");
  return !!token;
};

export const fetchProductDetails = async (name: string) => {
  try {
    const response = await axiosClient.get(`product/detail/${name}`);
    return response.data;
  } catch (error) {
    console.error("상품 정보를 가져오는데 실패했습니다", error);
    throw error;
  }
};

export const postAddToCart = async (product: any, quantity: number) => {
  if (!isAuthenticated()) {
    console.error("로그인이 필요합니다.");
    throw new Error("로그인이 필요합니다.");
  }

  try {
    const response = await axiosClient.post("/users/cart/products", {
      productId: product.id,
      quantity: quantity,
    });
  } 
  catch (error) {
    const e = error as AxiosError;
    if (e.response && e.response.status === 400) {
      console.error("가입 되지 않은 회원입니다.");
    } else {
      console.error("Error adding product to cart:", e.message);
    }
    throw e;
  }
};

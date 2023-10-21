import { CartItemType } from "../types/cart";
import axiosClient from "./index";

type CartResponse = {
  userId: number;
  totalCount: number;
  totalPrice: number;
  productList: CartItemType[];
};

type DeleteCartItemsPayload = {
  cartProductIdList: number[];
};

type ChangeCartItemsPayload = {
  cartProductId: number;
  amount: number;
};

export const getCartItems = async (): Promise<CartResponse> => {
  const response = await axiosClient.get<CartResponse>("/users/carts");
  return response.data as CartResponse;
};

export const deleteCartItems = async (payload: DeleteCartItemsPayload) => {
  const response = await axiosClient.delete("/users/carts", {
    data: payload,
  });
  return response;
};

export const changeCartItems = async (payload: ChangeCartItemsPayload) => {
  const response = await axiosClient.put("/users/cart/products", payload);
  return response;
};

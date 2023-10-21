import { Middleware } from "@reduxjs/toolkit";
import { CartItemType } from "../../types/cart";

export const sessionStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    let result = next(action);

    if (
      [
        "cart/setItems",
        "cart/deleteItem",
        "cart/toggleSelectItem",
        "cart/toggleSelectAll",
        "cart/updateItemAmount",
        "cart/deleteSelected",
      ].includes(action.type)
    ) {
      const state = store.getState();
      const selectedItems = state.cart.selectedItems;
      const totalOrderAmount = selectedItems.reduce(
        (acc: number, item: CartItemType) =>
          acc + item.productPrice * item.amount,
        0
      );

      sessionStorage.setItem("selectedItems", JSON.stringify(selectedItems));
      sessionStorage.setItem(
        "totalOrderAmount",
        JSON.stringify(totalOrderAmount)
      );
    }

    return result;
  };

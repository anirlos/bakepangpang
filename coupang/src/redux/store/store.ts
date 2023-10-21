import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import cartReducer from "../slice/cartSlice";
import { sessionStorageMiddleware } from "../slice/sessionStorageMiddleware";
import productSlice from "../slice/productSlice";

export const rootReducer = combineReducers({
  product: productSlice,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, sessionStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

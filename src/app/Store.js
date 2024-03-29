import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Cart/cartSlice";
import authReducer from "../features/Auth/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { shopApi } from "./services/shop";
import { authApi } from "./services/auth";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);

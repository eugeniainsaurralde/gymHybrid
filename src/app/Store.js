import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Cart/cartSlice";
import authReducer from "../features/Auth/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { shopApi } from "./services/shop";
import { authApi } from "./services/auth";
import { profileApi } from "./services/profileData";
import { ordersApi } from "./services/orders";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      shopApi.middleware,
      authApi.middleware,
      profileApi.middleware,
      ordersApi.middleware
    ),
});

setupListeners(store.dispatch);

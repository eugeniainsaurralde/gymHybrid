import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Cart/cartSlice";
import authReducer from "../features/Auth/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { shopApi } from "./services/shop";
import { authApi } from "./services/auth";
import { profileApi } from "./services/profileData";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      shopApi.middleware,
      authApi.middleware,
      profileApi.middleware
    ),
});

setupListeners(store.dispatch);

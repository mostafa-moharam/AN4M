import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
setupListeners(store.dispatch);

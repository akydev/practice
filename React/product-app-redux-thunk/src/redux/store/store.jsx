import { configureStore } from "@reduxjs/toolkit";
import productPageReducer from "../reducer/productPageReducer";

const store = configureStore({
  reducer: {
    products: productPageReducer,
  },
});

export default store;

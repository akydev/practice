import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slice/productSlice";
import addProductSlice from "../slice/addProductSlice";
import editProductSlice from "../slice/editProductSlice";
const store = configureStore({
  reducer: {
    products: productSlice,
    addProduct: addProductSlice,
    editProduct: editProductSlice,
  },
});

export default store;

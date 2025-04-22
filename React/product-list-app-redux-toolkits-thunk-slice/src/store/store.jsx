import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/productSlice";
import addproductReducer from "../slice/addProductSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
    addProduct: addproductReducer,
  },
});

export default store;

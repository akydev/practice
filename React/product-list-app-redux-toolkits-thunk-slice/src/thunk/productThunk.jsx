import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProductService,
  deleteProductByIdService,
  editProductService,
  fetchProductByIdService,
  fetchProductsService,
} from "../services/productService";

// This thunk is used to fetch all products
export const productThunk = createAsyncThunk(
  "product/productThunk",
  async () => {
    const products = await fetchProductsService();
    return products;
  }
);

// This thunk is used to fetch a product by its ID
export const fetchProductByIdThunk = createAsyncThunk(
  "product/fetchProductByIdThunk",
  async (id) => {
    const product = await fetchProductByIdService(id);
    return product;
  }
);

// This thunk is used to add a new product
export const addProductThunk = createAsyncThunk(
  "addProduct/addProductThunk",
  async (product) => {
    const response = await addProductService(product);
    return response;
  }
);

// This thunk is used to edit a product by its ID
export const editProductThunk = createAsyncThunk(
  "editProduct/editProductThunk",
  async (id, product) => {
    const response = await editProductService(id, product);
    return response;
  }
);

// This thunk is used to delete a product by its ID
export const deleteProductThunk = createAsyncThunk(
  "product/deleteProductThunk",
  async (id) => {
    const response = await deleteProductByIdService(id);
    return response;
  }
);

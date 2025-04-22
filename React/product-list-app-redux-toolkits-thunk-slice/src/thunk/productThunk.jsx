import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchProductByIdService,
  fetchProductsService,
} from "../services/productService";

export const productThunk = createAsyncThunk(
  "product/productThunk",
  async () => {
    const products = await fetchProductsService();
    return products;
  }
);

export const fetchProductByIdThunk = createAsyncThunk(
  "product/fetchProductByIdThunk",
  async (id) => {
    const product = await fetchProductByIdService(id);
    return product;
  }
);

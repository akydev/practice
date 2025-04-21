import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductsService } from "../services/productService";
export const productThunk = createAsyncThunk(
  "product/productThunk",
  async () => {
    const products = await fetchProductsService();
    return products;
  }
);

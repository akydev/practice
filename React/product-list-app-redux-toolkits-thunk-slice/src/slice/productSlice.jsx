import { createSlice } from "@reduxjs/toolkit";
import { fetchProductByIdThunk, productThunk } from "../thunk/productThunk";

const initialState = {
  loading: false,
  products: [],
  error: null,
  selectedProduct: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(productThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchProductByIdThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;

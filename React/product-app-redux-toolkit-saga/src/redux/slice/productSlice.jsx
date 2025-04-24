import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [],
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductRequest: (state) => {
      state.loading = true;
    },
    fetchProductSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductRequest, fetchProductSuccess, fetchProductError } =
  productSlice.actions;

export default productSlice.reducer;

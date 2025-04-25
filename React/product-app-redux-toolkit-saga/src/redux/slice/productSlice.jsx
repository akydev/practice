import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [],
  error: null,
  productId: null,
  selectedProduct: null,
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

    fetchViewProductRequest: (state, action) => {
      state.loading = true;
      state.productId = action.payload;
    },
    fetchViewProductSuccess: (state, action) => {
      state.loading = false;
      state.selectedProduct = action.payload;
    },
    fetchViewProductError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductError,
  fetchViewProductRequest,
  fetchViewProductSuccess,
  fetchViewProductError,
} = productSlice.actions;

export default productSlice.reducer;

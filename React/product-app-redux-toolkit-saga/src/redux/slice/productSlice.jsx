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
    deleteProductRequest: (state, action) => {
      state.loading = true;
      state.productId = action.payload;
    },
    deleteProductSuccess: (state, action) => {
      state.loading = false;
    },
    deleteProductError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateProductRequest: (state, action) => {
      state.loading = true;
      state.productId = action.payload.id;
      state.selectedProduct = action.payload.product;
    },
    updateProductSuccess: (state, action) => {
      state.loading = false;
      state.selectedProduct = action.payload;
    },
    updateProductError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateProductChange: (state, action) => {
      state.selectedProduct = {
        ...state.selectedProduct,
        [action.payload.name]: action.payload.value,
      };
    },
    // Special reducer to add an image to the array
    updateProductImage: (state, action) => {
      state.selectedProduct.images.push(action.payload); // Adds a new image URL to the array
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
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  updateProductRequest,
  updateProductSuccess,
  updateProductError,
  updateProductChange,
  updateProductImage,
} = productSlice.actions;

export default productSlice.reducer;

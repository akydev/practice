import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  product: {
    title: "",
    price: 0,
    description: "",
    categoryId: 0,
    images: [],
  },
  error: null,
};
const addProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductRequest: (state, action) => {
      state.loading = true;
      state.product = action.payload;
    },
    addProductSuccess: (state) => {
      state.loading = false;
    },
    addProductError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addProductChange: (state, action) => {
      state.product = {
        ...state.product,
        [action.payload.name]: action.payload.value,
      };
    },
    // Special reducer to add an image to the array
    addImage: (state, action) => {
      state.product.images.push(action.payload); // Adds a new image URL to the array
    },
    // rest the add product form value
    clearProduct: (state) => {
      state.product = {
        title: "",
        price: 0,
        description: "",
        categoryId: 0,
        images: [],
      };
    },
  },
});

export const {
  addProductRequest,
  addProductSuccess,
  addProductError,
  addProductChange,
  addImage,
  clearProduct,
} = addProductSlice.actions;

export default addProductSlice.reducer;

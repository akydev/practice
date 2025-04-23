import { createSlice } from "@reduxjs/toolkit";
import { addProductThunk } from "../thunk/productThunk";

const initialState = {
  product: {
    title: "",
    // description: "",
    // price: 0,
    category: "",
    // imageUrl: "",
  },
  loading: false,
  error: null,
  success: false,
};

const addProductSlice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = { ...state.product, ...action.payload };
    },
    resetProduct: (state) => {
      state.product = initialState.product;
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProductThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(addProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setProduct, resetProduct } = addProductSlice.actions;

export default addProductSlice.reducer;

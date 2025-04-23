import { createSlice } from "@reduxjs/toolkit";
import { editProductThunk } from "../thunk/productThunk";

const initialState = {
  loading: false,
  product: {
    title: "",
    category: "",
  },
  error: null,
  success: false,
};

const editProductSlice = createSlice({
  name: "editProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editProductThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(editProductThunk.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(editProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = editProductSlice.actions;

export default editProductSlice.reducer;

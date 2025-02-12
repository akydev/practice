import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IClothProduct } from "../type/IClothProduct";

interface IInitialProduct {
  loading: boolean;
  data: IClothProduct[];
  error: string | null;
}

const initialState: IInitialProduct = {
  loading: false,
  data: [],
  error: "",
};

const productSlice = createSlice({
  name: "productPage",
  initialState,
  reducers: {
    productRequest: (state: IInitialProduct) => {
      state.loading = true;
    },
    productSuccess: (
      state: IInitialProduct,
      action: PayloadAction<IClothProduct[]>
    ) => {
      state.loading = false;
      state.data = action.payload;
    },
    productError: (state: IInitialProduct, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { productRequest, productSuccess, productError } =
  productSlice.actions;

export default productSlice.reducer;

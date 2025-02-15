import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegister } from "../type/IRegister";
interface IRegisterInitialState {
  loading: boolean;
  data: IRegister;
  error: string | null;
  user: null;
}
const initialState: IRegisterInitialState = {
  loading: false,
  data: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  error: null,
  user: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerRequest: (
      state: IRegisterInitialState,
      action: PayloadAction<IRegister>
    ) => {
      state.loading = true;
      state.data = action.payload;
    },
    registerSuccess: (
      state: IRegisterInitialState,
      action: PayloadAction<any>
    ) => {
      state.loading = false;
      state.user = action.payload;
      state.data = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      };
    },
    registerError: (
      state: IRegisterInitialState,
      action: PayloadAction<any>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    registerUpdate: (
      state: IRegisterInitialState,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      state.data = {
        ...state.data,
        [action.payload.name]: action.payload.value,
      };
    },
  },
});

export const {
  registerRequest,
  registerSuccess,
  registerUpdate,
  registerError,
} = registerSlice.actions;

export default registerSlice.reducer;

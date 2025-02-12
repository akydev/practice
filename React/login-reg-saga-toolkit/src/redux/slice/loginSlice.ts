import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogin } from "../type/ILogin";
import { IUserResData } from "../type/IUserResData";

interface IInitialState {
  loading: boolean;
  data: ILogin;
  user: IUserResData;
  error: string | null;
}

const initialState: IInitialState = {
  loading: false,
  data: {
    email: "",
    password: "",
  },
  user: { token: "", userId: "" },
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginReq: (state: IInitialState, action: PayloadAction<ILogin>) => {
      state.loading = true;
      state.data = action.payload;
    },
    loginSucc: (state: IInitialState, action: PayloadAction<IUserResData>) => {
      state.loading = false;
      state.user = action.payload;
    },
    loginError: (state: IInitialState, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginReq, loginSucc, loginError } = loginSlice.actions;

export default loginSlice.reducer;

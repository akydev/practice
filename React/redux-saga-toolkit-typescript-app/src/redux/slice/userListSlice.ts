import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsersList } from "../type/IusersList";
interface IUsersInitialState {
  loading: boolean;
  data: IUsersList[];
  error: string | null;
}
const initialState: IUsersInitialState = {
  loading: false,
  data: [],
  error: null,
};

const userListSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    UsersRequest: (state: IUsersInitialState) => {
      state.loading = true;
    },
    UsersSuccess: (
      state: IUsersInitialState,
      action: PayloadAction<IUsersList[]>
    ) => {
      state.loading = false;
      state.data = action.payload;
    },
    UsersError: (state: IUsersInitialState, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { UsersRequest, UsersSuccess, UsersError } = userListSlice.actions;

export default userListSlice.reducer;

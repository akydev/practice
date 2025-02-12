import { call, put, takeEvery } from "redux-saga/effects";
import { Login } from "../service/loginService";
import { ILogin } from "../type/ILogin";
import { PayloadAction } from "@reduxjs/toolkit";
import { loginError, loginReq, loginSucc } from "../slice/loginSlice";
import { IUserResData } from "../type/IUserResData";

function* loginSaga(action: PayloadAction<ILogin>) {
  try {
    const resLogin: IUserResData = yield call(Login, action.payload);
    yield put(loginSucc(resLogin));
  } catch (error) {
    yield put(loginError(error));
  }
}

export function* watcherLogin() {
  yield takeEvery(loginReq, loginSaga);
}

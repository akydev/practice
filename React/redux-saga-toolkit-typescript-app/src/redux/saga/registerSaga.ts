import { call, put, takeEvery } from "redux-saga/effects";
import registerService from "../service/registerService";
import { IRegister } from "../type/IRegister";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  registerError,
  registerRequest,
  registerSuccess,
} from "../slice/registerSlice";

function* registerSaga(action: PayloadAction<IRegister>) {
  try {
    const res: null = yield call(registerService, action.payload);
    yield put(registerSuccess(res));
  } catch (error) {
    yield put(registerError(error));
  }
}

function* watcherRegister() {
  yield takeEvery(registerRequest, registerSaga);
}
export default watcherRegister;

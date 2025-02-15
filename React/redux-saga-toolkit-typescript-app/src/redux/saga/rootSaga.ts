import { all } from "redux-saga/effects";
import watcherRegister from "./registerSaga";

export function* rootSaga() {
  yield all([watcherRegister()]);
}

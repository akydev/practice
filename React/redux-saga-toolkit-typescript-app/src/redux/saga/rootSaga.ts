import { all } from "redux-saga/effects";
import watcherRegister from "./registerSaga";
import watcherUsers from "./userListSaga";

export function* rootSaga() {
  yield all([watcherRegister(), watcherUsers()]);
}

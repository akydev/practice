import { all } from "redux-saga/effects";
import watcherProduct from "./productSaga";

export function* rootSaga() {
  yield all([watcherProduct()]);
}

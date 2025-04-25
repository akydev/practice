import { all } from "redux-saga/effects";
import { watcherProductSaga, watherViewProductSaga } from "./productSaga";

export default function* rootSaga() {
  yield all([watcherProductSaga(), watherViewProductSaga()]);
}

import { all } from "redux-saga/effects";
import {
  watcherAddProductSaga,
  watcherProductSaga,
  watherViewProductSaga,
} from "./productSaga";

export default function* rootSaga() {
  yield all([
    watcherProductSaga(),
    watherViewProductSaga(),
    watcherAddProductSaga(),
  ]);
}

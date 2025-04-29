import { all } from "redux-saga/effects";
import {
  watcherAddProductSaga,
  watcherDeleteProductSaga,
  watcherProductSaga,
  watcherUpdateProductSaga,
  watherViewProductSaga,
} from "./productSaga";

export default function* rootSaga() {
  yield all([
    watcherProductSaga(),
    watherViewProductSaga(),
    watcherAddProductSaga(),
    watcherDeleteProductSaga(),
    watcherUpdateProductSaga(),
  ]);
}

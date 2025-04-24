import { all } from "redux-saga/effects";
import { watcherProductSaga } from "./productSaga";

export default function* rootSaga() {
  yield all([watcherProductSaga()]);
}

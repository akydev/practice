import { call, put, takeEvery } from "redux-saga/effects";
import { fetchProducts } from "../services/productService";
import {
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductError,
} from "../slice/productSlice";

function* productSaga() {
  try {
    const response = yield call(fetchProducts);
    yield put(fetchProductSuccess(response));
  } catch (error) {
    yield put(fetchProductError(error));
  }
}

export function* watcherProductSaga() {
  yield takeEvery(fetchProductRequest, productSaga);
}

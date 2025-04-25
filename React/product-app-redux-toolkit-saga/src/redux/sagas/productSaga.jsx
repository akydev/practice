import { call, put, takeEvery } from "redux-saga/effects";
import { fetchProducts, viewProductById } from "../services/productService";
import {
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductError,
  fetchViewProductRequest,
  fetchViewProductSuccess,
  fetchViewProductError,
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

function* viewProductSaga(action) {
  try {
    const response = yield call(viewProductById, action.payload);
    yield put(fetchViewProductSuccess(response));
  } catch (error) {
    yield put(fetchViewProductError(error));
  }
}
export function* watherViewProductSaga() {
  yield takeEvery(fetchViewProductRequest, viewProductSaga);
}

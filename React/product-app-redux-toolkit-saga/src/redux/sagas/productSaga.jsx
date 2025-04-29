import { call, put, takeEvery } from "redux-saga/effects";
import {
  addProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
  viewProductById,
} from "../services/productService";
import {
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductError,
  fetchViewProductRequest,
  fetchViewProductSuccess,
  fetchViewProductError,
  deleteProductError,
  deleteProductRequest,
  deleteProductSuccess,
  updateProductError,
  updateProductSuccess,
  updateProductRequest,
} from "../slice/productSlice";
import {
  addProductError,
  addProductRequest,
  addProductSuccess,
} from "../slice/addProductSlice";

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

export function* addProductSaga(action) {
  try {
    const response = yield call(addProduct, action.payload);
    yield put(addProductSuccess(response));
  } catch (error) {
    yield put(addProductError(error));
  }
}

export function* watcherAddProductSaga() {
  yield takeEvery(addProductRequest, addProductSaga);
}

export function* deleteProductSaga(action) {
  try {
    const response = yield call(deleteProduct, action.payload);
    yield put(deleteProductSuccess(response));
  } catch (error) {
    yield put(deleteProductError(error));
  }
}

export function* watcherDeleteProductSaga() {
  yield takeEvery(deleteProductRequest, deleteProductSaga);
}

export function* updateProductSaga(action) {
  const { id, product } = action.payload;
  try {
    const response = yield call(updateProduct, { id, product });
    yield put(updateProductSuccess(response));
  } catch (error) {
    yield put(updateProductError(error));
  }
}

export function* watcherUpdateProductSaga() {
  yield takeEvery(updateProductRequest, updateProductSaga);
}

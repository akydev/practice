import { call, put, takeEvery } from "redux-saga/effects";
import { productService } from "../service/productService";
import { IClothProduct } from "../type/IClothProduct";
import {
  productError,
  productRequest,
  productSuccess,
} from "../slice/productSlice";

function* productSaga() {
  try {
    const resData: IClothProduct[] = yield call(productService);
    yield put(productSuccess(resData));
  } catch (error) {
    yield put(productError(error));
  }
}

export default function* watcherProduct() {
  yield takeEvery(productRequest, productSaga);
}

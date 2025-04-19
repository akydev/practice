import {
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from "../actionCreator/productActionCreator";

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCT_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: products,
});

export const fetchProductsError = (error) => ({
  type: FETCH_PRODUCT_ERROR,
  payload: error,
});

import {
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from "../actionCreator/productActionCreator";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return { ...state, loading: true };

    case FETCH_PRODUCT_SUCCESS:
      return { ...state, loading: false, products: action.payload };

    case FETCH_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

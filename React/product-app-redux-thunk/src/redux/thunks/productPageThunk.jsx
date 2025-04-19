import {
  fetchProductsError,
  fetchProductsRequest,
  fetchProductsSuccess,
} from "../action/productPageAction";
import { fetchProductsService } from "../service/productService";

const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsRequest());
  try {
    const products = await fetchProductsService();
    dispatch(fetchProductsSuccess(products));
  } catch (error) {
    dispatch(fetchProductsError(error.message));
  }
};

export default fetchProducts;

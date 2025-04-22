import axios from "axios";

export const fetchProductsService = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : "Products not found";
    throw new Error(errorMessage);
  }
};

export const fetchProductByIdService = async (id) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : "Product not found";
    throw new Error(errorMessage);
  }
};

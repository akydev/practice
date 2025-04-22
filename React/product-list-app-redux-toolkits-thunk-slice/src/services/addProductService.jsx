import axios from "axios";

export const addProductService = async (product) => {
  try {
    const response = await axios.post(
      "https://dummyjson.com/products/add",
      product
    );
    if (response.status === 201) {
      return;
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      "An error occurred while adding the product.";
    throw new Error(errorMessage);
  }
};

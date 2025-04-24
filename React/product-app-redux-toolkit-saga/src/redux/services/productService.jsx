import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      "An error occurred while fetching products.";
    throw new Error(errorMessage);
  }
};

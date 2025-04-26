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

export const viewProductById = async (id) => {
  try {
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Product is not found.";
    throw new Error(errorMessage);
  }
};

export const addProduct = async (product) => {
  try {
    const response = await axios.post(
      `https://api.escuelajs.co/api/v1/products`,
      product
    );
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Add product is failed.";
    throw new Error(errorMessage);
  }
};

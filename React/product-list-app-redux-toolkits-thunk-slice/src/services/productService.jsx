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

export const editProductService = async (id, product) => {
  try {
    const response = await axios.put(
      `https://dummyjson.com/products/${id}`,
      product
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      "An error occurred while adding the product.";
    throw new Error(errorMessage);
  }
};

export const deleteProductByIdService = async (id) => {
  try {
    const response = await axios.delete(`https://dummyjson.com/products/${id}`);
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : "Product delete failded";
  }
};

// Create a service for the product page.

import axios from "axios";

export const fetchProductsService = async () => {
  const response = await axios.get("https://dummyjson.com/products");
  const data = response.data.products;
  return data;
};

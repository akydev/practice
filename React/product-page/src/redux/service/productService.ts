import axios from "axios";

export const productService = async () => {
  try {
    const prodcutData = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    return prodcutData.data;
  } catch (error) {
    console.log(error);
  }
};

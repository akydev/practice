import axios from "axios";

const userListService = async () => {
  try {
    const res = await axios.get(
      "https://66e066f02fb67ac16f2981b3.mockapi.io/api/users/register"
    );
    return res.data;
  } catch (error: any) {
    return error?.response.data;
  }
};

export default userListService;

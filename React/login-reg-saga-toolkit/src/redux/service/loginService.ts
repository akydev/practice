import axios from "axios";
import { ILogin } from "../type/ILogin";

// export async function Login(data: ILogin): Promise<ILogin> {
//   return await axios
//     .post("http://localhost:3001/api/user", data)
//     .then((res) => res.data)
//     .catch((err) => console.log(err));
// }

export const Login = async (data: ILogin): Promise<ILogin | null> => {
  try {
    const loginData = await axios.post(
      "http://localhost:3001/api/user/login",
      data
    );
    return loginData.data;
  } catch (error: any) {
    // console.log(error.response?.data?.msg);
    return error.response?.data?.msg;
  }
};

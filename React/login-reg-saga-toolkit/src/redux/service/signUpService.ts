import axios from "axios";
import { ISignUp } from "../type/ISignup";

export const SignUp = async (data: ISignUp): Promise<ISignUp | null> => {
  try {
    const signUpData = await axios.post("http://localhost:3001/api/user", data);
    return signUpData.data;
  } catch (error) {
    console.log("Something went wrong", error);
    return null;
  }
};
